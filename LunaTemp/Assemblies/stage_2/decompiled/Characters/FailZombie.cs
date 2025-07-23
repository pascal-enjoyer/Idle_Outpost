using System.Collections;
using DG.Tweening;
using UnityEngine;

namespace Characters
{
	public class FailZombie : MonoBehaviour
	{
		[SerializeField]
		private ZombieAnimator _animator;

		[SerializeField]
		private SpriteRenderer _renderer;

		[SerializeField]
		private float _moveSpeed = 3f;

		private bool _isWalking;

		private bool _animating;

		private void Update()
		{
			if (_isWalking && !_animating)
			{
				Vector3 target = base.transform.position + Vector3.left;
				base.transform.position = Vector3.MoveTowards(base.transform.position, target, _moveSpeed * Time.deltaTime);
			}
		}

		private void OnEnable()
		{
			_renderer.sortingOrder = (int)(base.transform.position.y * -100f) + 3000;
			_animator.Walk();
			base.transform.localScale = Vector3.zero;
			base.transform.DOScale(Vector3.one, 0.5f);
			base.transform.DOJump(base.transform.position + Vector3.left * 0.5f + Vector3.up * 0.5f, 0.5f, 1, 0.5f).OnComplete(delegate
			{
				_isWalking = true;
			});
		}

		public IEnumerator AnimateMasonBite(ZombieMason zombieMason, Transform masonBitePoint)
		{
			_animating = true;
			yield return base.transform.DOMove(masonBitePoint.position, 1f).WaitForCompletion();
			_animator.Bite();
			yield return new WaitForSeconds(1f);
			_animator.Idle();
			yield return zombieMason.Transition();
			_animator.Walk();
			_animating = false;
		}
	}
}
