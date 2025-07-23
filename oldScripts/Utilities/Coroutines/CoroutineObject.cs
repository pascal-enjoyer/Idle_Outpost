using System;
using System.Collections;

namespace Utilities.Coroutines
{
    public sealed class CoroutineObject : CoroutineObjectBase
    {
        public CoroutineObject(ICoroutineRunner owner, Func<IEnumerator> routine)
        {
            Owner = owner;
            Routine = routine;
        }

        private Func<IEnumerator> Routine { get; }

        public override event Action Finished;

        private IEnumerator Process()
        {
            yield return Routine.Invoke();
            Coroutine = null;
            Finished?.Invoke();
        }

        public void Start()
        {
            Stop();
            Coroutine = Owner.StartCoroutine(Process());
        }
    }
}