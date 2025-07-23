using System.Collections;
using DG.Tweening;
using Extensions;
using Hero;
using Pools;
using UnityEngine;

namespace Factories
{
	public class LogFactory : MonoBehaviour
	{
		[SerializeField]
		private HeroStack _stack;

		[SerializeField]
		private ResourcePool _logPool;

		[SerializeField]
		private Transform _spawnPoint;

		[SerializeField]
		private Transform _midPoint;

		[SerializeField]
		private float _spawnDelay;

		[SerializeField]
		private ItemPickup _pickup;

		[SerializeField]
		private float _spawnDelayAfterPickup = 1f;

		private int _inProcessCount;

		private float _lastSpawnTime;

		private bool _working;

		private void Update()
		{
			if (_working && _inProcessCount < _stack.FreeSpaceAmount && !(Time.time - _lastSpawnTime < _spawnDelay) && !(Time.time - _pickup.LastPickupTime < _spawnDelayAfterPickup))
			{
				StartCoroutine(SpawnLog());
			}
		}

		public void StartWork()
		{
			_working = true;
		}

		public void StopWork()
		{
			_working = false;
		}

		private IEnumerator SpawnLog()
		{
			_inProcessCount++;
			Resource log = _logPool.Get();
			log.transform.SetPositionAndRotation(_spawnPoint);
			log.gameObject.SetActive(true);
			_lastSpawnTime = Time.time;
			yield return log.transform.DOMove(_midPoint.position, 0.15f).WaitForCompletion();
			_stack.AddItem(log, 0.5f);
			_inProcessCount--;
		}
	}
}
