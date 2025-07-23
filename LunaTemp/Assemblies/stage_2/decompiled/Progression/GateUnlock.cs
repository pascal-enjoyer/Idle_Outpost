using DG.Tweening;
using Extensions;
using UnityEngine;

namespace Progression
{
	public class GateUnlock : MonoBehaviour
	{
		[SerializeField]
		private GameTrigger _trigger;

		[SerializeField]
		private Transform _gate;

		[SerializeField]
		private Transform _plus;

		private void Awake()
		{
			_trigger.Triggered += OpenGate;
		}

		private void OnDestroy()
		{
			_trigger.Triggered -= OpenGate;
		}

		private void OpenGate()
		{
			_plus.DoPopDown();
			_gate.DOScaleY(0f, 0.3f);
		}
	}
}
