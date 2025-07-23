using System;
using System.Collections;

namespace Utilities.Coroutines
{
	public sealed class CoroutineObject : CoroutineObjectBase
	{
		private Func<IEnumerator> Routine { get; }

		public override event Action Finished;

		public CoroutineObject(ICoroutineRunner owner, Func<IEnumerator> routine)
		{
			base.Owner = owner;
			Routine = routine;
		}

		private IEnumerator Process()
		{
			yield return Routine();
			base.Coroutine = null;
			Finished?.Invoke();
		}

		public void Start()
		{
			Stop();
			base.Coroutine = base.Owner.StartCoroutine(Process());
		}
	}
	public sealed class CoroutineObject<T> : CoroutineObjectBase
	{
		private Func<T, IEnumerator> Routine { get; }

		public override event Action Finished;

		public CoroutineObject(ICoroutineRunner owner, Func<T, IEnumerator> routine)
		{
			base.Owner = owner;
			Routine = routine;
		}

		private IEnumerator Process(T arg)
		{
			yield return Routine(arg);
			base.Coroutine = null;
			Finished?.Invoke();
		}

		public void Start(T arg)
		{
			Stop();
			base.Coroutine = base.Owner.StartCoroutine(Process(arg));
		}
	}
}
