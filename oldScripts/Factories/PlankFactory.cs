using System.Collections.Generic;
using Audio;
using DG.Tweening;
using Extensions;
using Hero;
using Pools;
using UnityEngine;

namespace Factories
{
    public class PlankFactory : MonoBehaviour
    {
        [SerializeField] private HeroStack _stack;
        [SerializeField] private ResourcePool _pool;
        [SerializeField] private Transform _logTarget;
        [SerializeField] private Transform _plankSpawnPoint;
        [SerializeField] private ItemPickup _pickup;
        [SerializeField] private float _spawnDelayAfterPickup = 1f;
        [SerializeField] private AudioClip _sawSound;

        private readonly Queue<Resource> _logs = new();
        private TweenCallback _tweenCallback;
        private bool _upgraded;
        private float _lastSpawnTime;
        private int _playId = -1;

        public bool IsProcessing { get; private set; }

        private void Awake() =>
            _tweenCallback = OnLogProceeds;

        private void Update()
        {
            if (Time.time - _pickup.LastPickupTime < _spawnDelayAfterPickup)
                return;
            if (Time.time - _lastSpawnTime < 0.07f)
                return;

            if (_upgraded && _stack.HasSpace)
                SpawnPlank();
        }

        public void ProceedLog(Resource resource)
        {
            IsProcessing = true;
            if (!AudioService.Instance.IsPlaying(_playId)) 
                AudioService.Instance.TryPlayEffect(_sawSound, out _playId);
            _logs.Enqueue(resource);
            Transform itemTransform = resource.transform;
            Sequence sequence = DOTween.Sequence();
            sequence.Join(itemTransform.DOJump(_logTarget.position, 0.5f, 1, 0.5f));
            sequence.Join(itemTransform.DOScale(Vector3.zero, 0.5f));
            sequence.AppendCallback(_tweenCallback);
        }

        public void Upgrade() =>
            _upgraded = true;

        private void OnLogProceeds()
        {
            _logs.Dequeue().Release();
            SpawnPlank();

            if (_logs.Count == 0)
            {
                IsProcessing = false;
                AudioService.Instance.TryStopEffect(_playId);
            }
        }

        private void SpawnPlank()
        {
            Resource plank = _pool.Get();
            plank.transform.SetPositionAndRotation(_plankSpawnPoint);
            _stack.AddItem(plank, 0.5f);
            _lastSpawnTime = Time.time;
        }
    }
}