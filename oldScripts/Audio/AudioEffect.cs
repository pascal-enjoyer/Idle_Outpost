using System.Collections;
using UnityEngine;

namespace Audio
{
    public class AudioEffect : MonoBehaviour
    {
        [SerializeField] private AudioSource _source;

        private IAudioService _audioService;
        private bool _ignorePause;

        public bool IsPlaying { get; private set; }
        public int PlayId { get; private set; }

        public void Construct(IAudioService audioService) =>
            _audioService = audioService;

        public void Play(AudioClip clip, bool loop, int playId, bool ignorePause)
        {
            PlayId = playId;
            IsPlaying = true;
            _ignorePause = ignorePause;
            _source.clip = clip;
            _source.loop = loop;
            _source.Play();

            if (!loop)
                StartCoroutine(ReleaseAfterPlay(clip));
        }

        public void Stop(bool removeFromPlayingSounds = true)
        {
            _source.Stop();
            IsPlaying = false;
            _audioService.Release(this, removeFromPlayingSounds);
        }

        public void Pause()
        {
            if (!_ignorePause)
                _source.Pause();
        }

        public void Unpause()
        {
            if (!_ignorePause)
                _source.Play();
        }

        private IEnumerator ReleaseAfterPlay(AudioClip clip)
        {
            yield return new WaitForSeconds(clip.length);
            _audioService.Release(this);
            IsPlaying = false;
        }
    }
}