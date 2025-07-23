using System.Collections;
using Progression;
using UnityEngine;

namespace Conveyors
{
	public class ConveyorBuyActivator : MonoBehaviour
	{
		[SerializeField]
		private BuyZone _buyZone;

		[SerializeField]
		private VisualConveyor _conveyor;

		[SerializeField]
		private float _delay;

		private WaitForSeconds _waitDelay;

		private void Awake()
		{
			_waitDelay = new WaitForSeconds(_delay);
			_buyZone.Triggered += ActivateConveyor;
		}

		private void OnDestroy()
		{
			_buyZone.Triggered -= ActivateConveyor;
		}

		private void ActivateConveyor()
		{
			StartCoroutine(ActivateAfterDelay());
		}

		private IEnumerator ActivateAfterDelay()
		{
			yield return _waitDelay;
			_conveyor.StartWork();
		}
	}
}
