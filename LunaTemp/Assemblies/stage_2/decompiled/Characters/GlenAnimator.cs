using UnityEngine;

namespace Characters
{
	public class GlenAnimator : MonoBehaviour
	{
		[SerializeField]
		private Animator[] _animators;

		public void Idle()
		{
			SetTrigger("Idle");
		}

		public void Move()
		{
			SetTrigger("Walking");
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
