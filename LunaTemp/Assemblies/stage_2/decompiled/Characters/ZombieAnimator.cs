using UnityEngine;

namespace Characters
{
	public class ZombieAnimator : MonoBehaviour
	{
		[SerializeField]
		private Animator[] _animators;

		public void Idle()
		{
			SetTrigger("Idle");
		}

		public void Walk()
		{
			SetTrigger("Walking");
		}

		public void Bite()
		{
			SetTrigger("Bite");
		}

		public void Death()
		{
			SetTrigger("Death");
		}

		private void SetTrigger(string trigger)
		{
			for (int i = 0; i < _animators.Length; i++)
			{
				_animators[i].SetTrigger(trigger);
			}
		}
	}
}
