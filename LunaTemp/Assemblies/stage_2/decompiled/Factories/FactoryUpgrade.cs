using System.Collections;
using Extensions;
using Progression;
using UnityEngine;

namespace Factories
{
	public class FactoryUpgrade : MonoBehaviour
	{
		[SerializeField]
		private GameTrigger _trigger;

		[SerializeField]
		private LogFactory _logFactory;

		[SerializeField]
		private PlankFactory _plankFactory;

		[SerializeField]
		private Transform[] _toDisable;

		private void Awake()
		{
			_trigger.Triggered += Upgrade;
		}

		private void OnDestroy()
		{
			_trigger.Triggered -= Upgrade;
		}

		private void Upgrade()
		{
			_logFactory.StopWork();
			_plankFactory.Upgrade();
			StartCoroutine(Disable());
		}

		private IEnumerator Disable()
		{
			for (int i = 0; i < _toDisable.Length; i++)
			{
				_toDisable[i].DoPopDown();
			}
			yield return new WaitForSeconds(0.3f);
			for (int j = 0; j < _toDisable.Length; j++)
			{
				_toDisable[j].gameObject.SetActive(false);
			}
		}
	}
}
