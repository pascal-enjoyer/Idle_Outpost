using Progression;
using UnityEngine;

namespace QuestSystem
{
    public class BuyZoneQuest : Quest
    {
        [SerializeField] private BuyZone _buyZone;

        public override void Begin()
        {
            base.Begin();
            _buyZone.Triggered += OnBought;
        }

        private void OnBought()
        {
            _buyZone.Triggered -= OnBought;
            InvokeCompleted();
        }
    }
}