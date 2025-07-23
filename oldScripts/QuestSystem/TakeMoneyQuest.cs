using UnityEngine;

namespace QuestSystem
{
    public class TakeMoneyQuest : Quest
    {
        [SerializeField] private MoneyPickup _pickup;

        public override void Begin()
        {
            base.Begin();
            _pickup.Triggered += OnMoneyPickedUp;
        }

        private void OnMoneyPickedUp()
        {
            _pickup.Triggered -= OnMoneyPickedUp;
            InvokeCompleted();
        }
    }
}