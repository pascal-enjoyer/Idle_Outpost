using Factories;
using UnityEngine;

namespace QuestSystem
{
	public class TakeFromStackQuest : Quest
	{
		[SerializeField]
		private ItemPickup _pickup;

		public override void Begin()
		{
			base.Begin();
			if (Time.time - _pickup.LastPickupTime < 0.5f)
			{
				OnPickedUp();
			}
			else
			{
				_pickup.PickedUp += OnPickedUp;
			}
		}

		private void OnPickedUp()
		{
			_pickup.PickedUp -= OnPickedUp;
			InvokeCompleted();
		}
	}
}
