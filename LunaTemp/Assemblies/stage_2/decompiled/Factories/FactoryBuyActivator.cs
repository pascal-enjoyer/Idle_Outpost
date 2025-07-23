using System.Collections;
using Progression;
using UnityEngine;

namespace Factories
{
	public class FactoryBuyActivator : MonoBehaviour
	{
		[SerializeField]
		private BuyZone _buyZone;

		[SerializeField]
		private LogFactory _factory;

		[SerializeField]
		private float _delay;

		private void Awake()
		{
			_buyZone.Triggered += ActivateConveyor;
		}

		private void OnDestroy()
		{
			_buyZone.Triggered -= ActivateConveyor;
		}

		private void ActivateConveyor()
		{
			if (_delay > 0f)
			{
				StartCoroutine(ActivateAfterDelay());
			}
			else
			{
				_factory.StartWork();
			}
		}

		private IEnumerator ActivateAfterDelay()
		{
			yield return new WaitForSeconds(_delay);
			_factory.StartWork();
		}
	}
}
