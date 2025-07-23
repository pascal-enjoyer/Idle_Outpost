using Characters;
using Conveyors;
using GameResources;
using Inputs;
using Pools;
using UnityEngine;

public class Scenario : MonoBehaviour
{
	[SerializeField]
	private ConveyorSelector _conveyorSelector;

	[SerializeField]
	private GameEnd _gameEnd;

	[SerializeField]
	private Storage _storage;

	[SerializeField]
	private ResourcePool _bulletsPool;

	[SerializeField]
	private ZombieManager _zombieManager;

	[SerializeField]
	private InteractiveConveyorUnlockPoint _unlockPoint;

	[SerializeField]
	private InteractiveConveyor _closedConveyor;

	[SerializeField]
	private InteractiveConveyor[] _conveyors;

	private bool _conveyorSelectedOnce;

	private int _stepIndex;

	private float _timer;

	private bool _finished;

	private float _lastSelectTime;

	private int _bulletsReceivedInOpenedConveyors;

	private void Awake()
	{
		_conveyorSelector.Selected += OnConveyorSelected;
		for (int i = 0; i < _conveyors.Length; i++)
		{
			_conveyors[i].BulletReceived += OnBulletReceived;
		}
	}

	private void OnDestroy()
	{
		_conveyorSelector.Selected -= OnConveyorSelected;
		for (int i = 0; i < _conveyors.Length; i++)
		{
			_conveyors[i].BulletReceived -= OnBulletReceived;
		}
	}

	private void Update()
	{
		if (!_finished)
		{
			switch (_stepIndex)
			{
			case 0:
				HandleConveyorClickStep();
				break;
			case 1:
				HandleBottomConveyorStep();
				break;
			}
		}
	}

	private void Fail()
	{
		_finished = true;
		_gameEnd.Fail();
	}

	private void HandleConveyorClickStep()
	{
		if (_conveyorSelectedOnce)
		{
			_stepIndex++;
			return;
		}
		_timer += Time.deltaTime;
		if (_timer >= 15f)
		{
			Fail();
		}
	}

	private void HandleBottomConveyorStep()
	{
		if (_unlockPoint.ProcessedAtLeastOneBullet)
		{
			_finished = true;
		}
		else if (_bulletsReceivedInOpenedConveyors >= 8)
		{
			Fail();
		}
		else if (!_storage.HasResource(ResourceType.MasonBullet) && !_storage.HasResource(ResourceType.WarehouseBullet) && _bulletsPool.CountActive == 0 && _zombieManager.Alive.Count > 0)
		{
			Fail();
		}
	}

	private void OnBulletReceived(InteractiveConveyor conveyor)
	{
		if (conveyor == _closedConveyor)
		{
			_bulletsReceivedInOpenedConveyors = 0;
		}
		else
		{
			_bulletsReceivedInOpenedConveyors++;
		}
	}

	private void OnConveyorSelected(InteractiveConveyor _)
	{
		_conveyorSelectedOnce = true;
		_lastSelectTime = Time.time;
	}
}
