using System.Collections.Generic;
using Extensions;
using UnityEngine;

namespace Utilities.Animations
{
	public abstract class MyAnimator : MonoBehaviour
	{
		[SerializeField]
		protected Animator Animator;

		protected void CrossFade(IList<int> hashes, float transitionDuration = 0.25f, float offset = 0f)
		{
			CrossFade(hashes.GetRandom(), transitionDuration, offset);
		}

		protected void CrossFade(int hash, float transitionDuration = 0.25f, float offset = 0f)
		{
			Animator.CrossFadeInFixedTime(hash, transitionDuration, -1, offset);
		}
	}
}
