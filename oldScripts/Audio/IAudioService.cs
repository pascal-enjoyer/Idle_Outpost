using UnityEngine;

namespace Audio
{
    public interface IAudioService
    {
        void PlayMusic();
        void PauseMusic();
        bool TryPlayEffect(AudioClip clip, out int playId, bool loop = false);
        void TryPlayEffect(AudioClip clip);
        void TryStopEffect(int playId);
        void StopAndClearEffects();
        void PauseEffects();
        void ResumeEffects();
        void Release(AudioEffect element, bool removeFromPlayingSounds = true);
        void Reset();
    }
}