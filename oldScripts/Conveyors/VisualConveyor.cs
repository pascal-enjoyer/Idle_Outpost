using System.Collections;
using Extensions;
using Pools;
using Sirenix.OdinInspector;
using UnityEngine;

namespace Conveyors
{
    public class VisualConveyor : MonoBehaviour
    {
        [SerializeField] private bool _autoStarkWork;
        [SerializeField] private ConveyorItem _prefab;
        [SerializeField] private float _spawnDelay = 0.5f;
        [SerializeField] private float _moveSpeed = 1f;
        [SerializeField] private int _initialAmount = 10;
        [SerializeField] private ConveyorPoint[] _points;

        private ObjectPool<ConveyorItem> _pool;
        private WaitForSeconds _waitSpawn;

        private void Awake()
        {
            _pool = new ObjectPool<ConveyorItem>(CreateItem, ReleaseItem);
            _waitSpawn = new WaitForSeconds(_spawnDelay);
            if (_autoStarkWork)
                StartWork();
        }

        public void StartWork()
        {
            Warmup();
            StartCoroutine(WorkRoutine());
        }

        private ConveyorItem CreateItem()
        {
            ConveyorItem item = Instantiate(_prefab, transform, true);
            item.gameObject.SetActive(false);
            item.Construct(_pool);
            return item;
        }

        private static void ReleaseItem(ConveyorItem item) =>
            item.gameObject.SetActive(false);

        private void Warmup()
        {
            float distanceBetween = _moveSpeed * _spawnDelay;

            for (var i = 1; i < _initialAmount + 1; i++)
            {
                float distanceFromStart = distanceBetween * i;
                Transform startTransform = _points[0].transform;
                Vector3 direction = (_points[1].transform.position - startTransform.position).normalized;
                Vector3 position = startTransform.position + direction * distanceFromStart;

                ConveyorItem item = _pool.Get();
                item.transform.SetPositionAndRotation(position, startTransform.rotation);
                item.gameObject.SetActive(true);
                item.StartMove(_points, _moveSpeed);
            }
        }

        private IEnumerator WorkRoutine()
        {
            while (true)
            {
                ConveyorItem item = _pool.Get();
                item.transform.SetPositionAndRotation(_points[0].transform);
                item.gameObject.SetActive(true);
                item.StartMove(_points, _moveSpeed);
                yield return _waitSpawn;
            }
        }

#if UNITY_EDITOR
        [Button]
        private void DebugStartWork() =>
            StartWork();
#endif
    }
}