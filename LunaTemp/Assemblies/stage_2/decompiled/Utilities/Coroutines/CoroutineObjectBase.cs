using System;
using UnityEngine;

namespace Utilities.Coroutines
{
	public abstract class CoroutineObjectBase
	{
		protected ICoroutineRunner Owner { get; set; }

		protected Coroutine Coroutine { get; set; }

		public bool IsProcessing => Coroutine != null;

		public abstract event Action Finished;

		public void Stop()
		{
			if (IsProcessing)
			{
				Owner.StopCoroutine(Coroutine);
				Coroutine = null;
			}
		}
	}
}
