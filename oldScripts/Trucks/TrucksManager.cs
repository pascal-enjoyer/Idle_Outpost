using System.Collections;
using Audio;
using Hero;
using Pools;
using Progression;
using Sirenix.OdinInspector;
using UnityEngine;

namespace Trucks
{
    public class TrucksManager : MonoBehaviour
    {
        [SerializeField] private BuyZone _buyZone;
        [SerializeField] private HeroStack _money;
        [SerializeField] private HeroStack _plankStack;
        [SerializeField] private ColorZone _colorZone;
        [SerializeField] private TruckPoint[] _points;
        [SerializeField] private TruckPoint[] _exitPoints;
        [SerializeField] private Truck _truckPrefab;
        [SerializeField] private Transform _spawnPoint;
        [SerializeField] private float _spawnDelay = 1f;
        [SerializeField] private AudioClip _spawnMoneySound;

        private ObjectPool<Truck> _pool;
        private bool _enabled;
        private float _lastSpawnTime;

        private void Awake()
        {
            _pool = new ObjectPool<Truck>(CreateTruck);
            _buyZone.Triggered += StartSpawn;
        }

        private void Update()
        {
            if (!_enabled)
                return;
            if (Time.time - _lastSpawnTime < _spawnDelay)
                return;
            if (!HasFreePoints())
                return;

            StartCoroutine(HandleTruck());
        }

        private void StartSpawn() =>
            _enabled = true;

        private IEnumerator HandleTruck()
        {
            _lastSpawnTime = Time.time;
            Truck truck = _pool.Get();
            truck.transform.SetPositionAndRotation(_spawnPoint.position, _spawnPoint.rotation);
            truck.gameObject.SetActive(true);
            int index = FindFurthestFreeIndex();
            _points[index].Occupy();

            for (var i = 1; i <= index; i++)
                yield return truck.MoveTo(_points[i].Position, _points[i].Rotation);

            while (index < _points.Length - 1)
            {
                int nextIndex = GetNextStopIndex(index);
                yield return WaitUntilFree(nextIndex);
                _points[index].Release();
                _points[nextIndex].Occupy();

                for (int i = index; i <= nextIndex; i++)
                    yield return truck.MoveTo(_points[i].Position, _points[i].Rotation);

                index = nextIndex;
            }

            yield return truck.WaitLoad();
            _money.SpawnItems(6);
            _points[_points.Length - 1].Release();
            AudioService.Instance.TryPlayEffect(_spawnMoneySound); 

            for (var i = 0; i < _exitPoints.Length; i++)
                yield return truck.MoveTo(_exitPoints[i].Position, _exitPoints[i].Rotation);

            truck.Clear();
            truck.gameObject.SetActive(false);
            _pool.Release(truck);
        }

        private int GetNextStopIndex(int i)
        {
            for (int j = i + 1; j < _points.Length; j++)
                if (_points[j].StopIsAllowed)
                    return j;
            return -1;
        }

        private Truck CreateTruck()
        {
            Truck truck = Instantiate(_truckPrefab, _spawnPoint.position, _spawnPoint.rotation, transform);
            truck.Construct(_plankStack, _colorZone);
            return truck;
        }

        private IEnumerator WaitUntilFree(int pointIndex)
        {
            while (!_points[pointIndex].IsFree)
                yield return null;
        }

        private int FindFurthestFreeIndex()
        {
            for (int i = _points.Length - 1; i >= 0; i--)
                if (_points[i].StopIsAllowed && _points[i].IsFree)
                    return i;

            return -1;
        }

        private bool HasFreePoints() =>
            _points[1].IsFree;

#if UNITY_EDITOR
        [Button]
        private void FetchPoints(Transform parent)
        {
            _points = new TruckPoint[parent.childCount];
            for (var i = 0; i < _points.Length; i++)
                _points[i] = parent.GetChild(i).GetComponent<TruckPoint>();
        }
#endif
    }
}