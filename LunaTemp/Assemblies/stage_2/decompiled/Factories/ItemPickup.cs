using System;
using Hero;
using UnityEngine;

namespace Factories
{
	public class ItemPickup : MonoBehaviour
	{
		[SerializeField]
		private HeroStack _from;

		[SerializeField]
		private ResourceType _type;

		[SerializeField]
		private float _delay = 0.07f;

		private HeroStackManager _stackManager;

		private bool _inside;

		public float LastPickupTime { get; private set; }

		public event Action PickedUp;

		private void Update()
		{
			if (_inside && !_from.IsEmpty && Time.time - LastPickupTime >= _delay && _stackManager.CanAddItem(_type))
			{
				Resource resource = _from.RemoveItem();
				_stackManager.GetStack(_type).AddItem(resource);
				LastPickupTime = Time.time;
				this.PickedUp?.Invoke();
			}
		}

		private void OnTriggerEnter(Collider other)
		{
			if (other.TryGetComponent<HeroStackManager>(out var stackManager))
			{
				_inside = true;
				_stackManager = stackManager;
			}
		}

		private void OnTriggerExit(Collider other)
		{
			if (other.TryGetComponent<HeroStackManager>(out var _))
			{
				_inside = false;
			}
		}
	}
}
