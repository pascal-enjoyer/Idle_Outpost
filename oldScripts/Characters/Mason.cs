using System.Collections.Generic;
using Audio;
using Extensions;
using GameResources;
using UnityEngine;

namespace Characters
{
    public class Mason : MonoBehaviour
    {
        [SerializeField] private MasonAnimator _animator;
        [SerializeField] private float _fireDelay = 0.5f;
        [SerializeField] private float _sqrFireRange = 2f;
        [SerializeField] private Storage _storage;
        [SerializeField] private ZombieManager _zombieManager;
        [SerializeField] private AudioClip _shotSound;

        private readonly List<Zombie> _zombiesInRange = new List<Zombie>();
        private float _lastTimeShoot;
        private bool _stopped;

        private void Update()
        {
            if (_stopped)
                return;
            if (Time.time - _lastTimeShoot < _fireDelay)
                return;
            if (!_storage.HasResource(ResourceType.MasonBullet))
                return;
            if (_zombieManager.Alive.Count == 0)
                return;

            if (TryGetRandomZombieInRange(out Zombie target))
            {
                _storage.RemoveResource(ResourceType.MasonBullet);
                _animator.Shoot();
                _zombieManager.KillZombie(target);
                AudioService.Instance.TryPlayEffect(_shotSound);
                _lastTimeShoot = Time.time;
            }
        }

        public void StopShooting() =>
            _stopped = true;

        public void IncreaseShootingSpeed() => 
            _fireDelay *= 0.5f;

        private bool TryGetRandomZombieInRange(out Zombie target)
        {
            _zombiesInRange.Clear();
            foreach (Zombie zombie in _zombieManager.Alive)
            {
                float sqrMagnitude = Vector2.SqrMagnitude(zombie.transform.position - transform.position);
                if (sqrMagnitude <= _sqrFireRange)
                    _zombiesInRange.Add(zombie);
            }

            bool result = _zombiesInRange.Count > 0;
            target = result ? _zombiesInRange.GetRandom() : null;
            return result;
        }
    }
}