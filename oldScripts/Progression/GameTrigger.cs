using System;
using UnityEngine;

namespace Progression
{
    public abstract class GameTrigger : MonoBehaviour
    {
        public event Action Triggered;

        protected void InvokeTriggered() =>
            Triggered?.Invoke();
    }
}