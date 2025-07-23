using Audio;
using GameResources;
using UnityEngine;

namespace Conveyors
{
    public class InteractiveConveyorFinishZone : MonoBehaviour
    {
        [SerializeField] private Storage _storage;
        [SerializeField] private AudioClip _sound;

        private int _soundId;

        private void OnTriggerEnter2D(Collider2D other)
        {
            if (other.TryGetComponent(out Bullet bullet))
            {
                bullet.Stop();
                bullet.Release();
                _storage.AddResource(ResourceType.MasonBullet);
                if (AudioService.Instance.IsPlaying(_soundId))
                    AudioService.Instance.TryStopEffect(_soundId);
                AudioService.Instance.TryPlayEffect(_sound, out _soundId);

                /*if (!AudioService.Instance.IsPlaying(_soundId))
                    AudioService.Instance.TryPlayEffect(_sound, out _soundId);*/
            }
        }
    }
}