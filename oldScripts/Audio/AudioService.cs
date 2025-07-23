using System.Collections.Generic;
using Pools;
using UnityEngine;

namespace Audio
{
    public class AudioService : MonoBehaviour, IAudioService
    {
        [SerializeField] private AudioSource _musicSource;
        [SerializeField] private AudioEffect _audioEffectPrefab;

        public static AudioService Instance;
        private readonly HashSet<AudioEffect> _playingSounds = new();
        private ObjectPool<AudioEffect> _effectsPool;
        private int _playId;

        private void Awake()
        {
            Instance = this;
            _effectsPool = new ObjectPool<AudioEffect>(CreateAudioEffect, ActionOnGet, ActionOnRelease);
        }

        private AudioEffect CreateAudioEffect()
        {
            AudioEffect effect = Instantiate(_audioEffectPrefab, transform);
            effect.Construct(this);
            return effect;
        }

        public void Reset()
        {
            PauseMusic();
            PlayMusic();
            PauseEffects();
            ResumeEffects();
        }

        public void PlayMusic() =>
            _musicSource.Play();

        public void PauseMusic() =>
            _musicSource.Pause();

        public bool TryPlayEffect(AudioClip clip, out int playId, bool loop = false)
        {
            playId = -1;
            if (clip == null)
                return false;
            playId = PlayEffect(clip, loop);
            return true;
        }

        public void TryPlayEffect(AudioClip clip)
        {
            if (clip == null)
                return;

            PlayEffect(clip, false);
        }

        public bool IsPlaying(int playId)
        {
            if (playId == -1)
                return false;

            foreach (AudioEffect playingSound in _playingSounds)
                if (playingSound.PlayId == playId)
                    return true;

            return false;
        }

        public void TryStopEffect(int playId)
        {
            if (playId == -1)
                return;

            AudioEffect sound = null;
            var found = false;
            foreach (AudioEffect playingSound in _playingSounds)
            {
                if (playingSound.PlayId == playId)
                {
                    found = true;
                    sound = playingSound;
                    break;
                }
            }

            if (found)
                sound.Stop();
        }

        public void PauseEffects()
        {
            foreach (AudioEffect sound in _playingSounds)
                sound.Pause();
        }

        public void ResumeEffects()
        {
            foreach (AudioEffect sound in _playingSounds)
                sound.Unpause();
        }

        public void Release(AudioEffect element, bool removeFromPlayingSounds)
        {
            _effectsPool.Release(element);
            if (removeFromPlayingSounds)
                _playingSounds.Remove(element);
        }

        public void StopAndClearEffects()
        {
            foreach (AudioEffect effect in _playingSounds)
                if (effect.IsPlaying)
                    effect.Stop(false);
            _playingSounds.Clear();
        }

        private int PlayEffect(AudioClip clip, bool loop, bool ignorePause = false)
        {
            _playId++;
            AudioEffect effect = _effectsPool.Get();

            effect.Play(clip, loop, _playId, ignorePause);
            _playingSounds.Add(effect);
            return _playId;
        }

        private static void ActionOnRelease(AudioEffect effect) =>
            effect.gameObject.SetActive(false);

        private static void ActionOnGet(AudioEffect effect) =>
            effect.gameObject.SetActive(true);
    }
}