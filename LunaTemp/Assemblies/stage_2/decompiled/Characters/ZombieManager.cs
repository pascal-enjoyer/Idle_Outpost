using System.Collections;
using System.Collections.Generic;
using Audio;
using Extensions;
using GameResources;
using Pools;
using UnityEngine;

namespace Characters
{
	public class ZombieManager : MonoBehaviour
	{
		[SerializeField]
		private Storage _storage;

		[SerializeField]
		private Zombie _prefab;

		[SerializeField]
		private Transform[] _spawnPoints;

		[SerializeField]
		private Transform[] _targetPoints;

		[SerializeField]
		private Vector2 _spawnInterval;

		[SerializeField]
		private int _maximumOnScreen = 100;

		[SerializeField]
		private AudioClip _zombieBiteSound;

		[SerializeField]
		private GameEnd _gameEnd;

		private ObjectPool<Zombie> _pool;

		private bool _enabled = true;

		private int _soundId;

		public HashSet<Zombie> Alive { get; } = new HashSet<Zombie>();


		private void Awake()
		{
			_pool = new ObjectPool<Zombie>(CreateZombie, ActionOnGet, ActionOnRelease);
			StartCoroutine(SpawnRoutine());
		}

		private void Update()
		{
			bool anyZombieAttacking = false;
			foreach (Zombie zombie in Alive)
			{
				zombie.Tick();
				if (zombie.IsAttacking)
				{
					anyZombieAttacking = true;
				}
			}
			if (!AudioService.Instance.IsPlaying(_soundId) && anyZombieAttacking)
			{
				AudioService.Instance.TryPlayEffect(_zombieBiteSound, out _soundId, true);
			}
			else if (AudioService.Instance.IsPlaying(_soundId) && !anyZombieAttacking)
			{
				AudioService.Instance.TryStopEffect(_soundId);
			}
		}

		public void KillZombie(Zombie zombie)
		{
			Alive.Remove(zombie);
			StartCoroutine(zombie.Die());
			_storage.AddResource(ResourceType.Money, 100);
			if (Alive.Count == 0)
			{
				_gameEnd.Win();
			}
		}

		public void StopSpawn()
		{
			_enabled = false;
		}

		private IEnumerator SpawnRoutine()
		{
			while (_enabled)
			{
				if (Alive.Count < _maximumOnScreen)
				{
					Zombie zombie = _pool.Get();
					Vector3 spawnPosition = Vector3.Lerp(_spawnPoints[0].position, _spawnPoints[1].position, Random.value);
					zombie.transform.position = spawnPosition;
					SetZombieTarget(zombie);
				}
				yield return new WaitForSeconds(_spawnInterval.GetRandom());
			}
		}

		private void SetZombieTarget(Zombie zombie)
		{
			Vector3 pointA = _targetPoints[0].position;
			Vector3 pointB = _targetPoints[1].position;
			float targetX = Mathf.Min(pointA.x, pointB.x);
			float centerY = (pointA.y + pointB.y) * 0.5f;
			float minY = Mathf.Min(pointA.y, pointB.y);
			float maxY = Mathf.Max(pointA.y, pointB.y);
			float zombieY = zombie.transform.position.y;
			float targetY;
			if (zombieY >= minY && zombieY <= maxY)
			{
				float dir = Mathf.Sign(centerY - zombieY);
				float offset2 = Random.Range(0f, 1f);
				targetY = zombieY + dir * offset2;
			}
			else
			{
				float offset = ((zombieY < minY) ? Random.Range(0f, 5f) : Random.Range(0f, -5f));
				float y = ((zombieY < minY) ? minY : maxY);
				targetY = y + offset;
			}
			Vector3 targetPosition = new Vector3(targetX, targetY, 0f);
			zombie.SetTarget(targetPosition);
		}

		private void ActionOnGet(Zombie zombie)
		{
			zombie.gameObject.SetActive(true);
			Alive.Add(zombie);
		}

		private static void ActionOnRelease(Zombie zombie)
		{
			zombie.gameObject.SetActive(false);
		}

		private Zombie CreateZombie()
		{
			Zombie zombie = Object.Instantiate(_prefab, base.transform);
			zombie.Construct(_pool);
			return zombie;
		}
	}
}
