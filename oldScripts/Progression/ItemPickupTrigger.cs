using Factories;
using UnityEngine;

namespace Progression
{
    public class ItemPickupTrigger : GameTrigger
    {
        [SerializeField] private ItemPickup _pickup;

        private float _lastPickUpTime;

        private void Update()
        {
            if (_pickup.LastPickupTime > _lastPickUpTime)
            {
                InvokeTriggered();
                Destroy(this);
            }
        }
    }
}