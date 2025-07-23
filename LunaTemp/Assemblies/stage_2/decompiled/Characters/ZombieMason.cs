using System.Collections;
using DG.Tweening;
using UnityEngine;

namespace Characters
{
	public class ZombieMason : MonoBehaviour
	{
		[SerializeField]
		private SpriteRenderer _renderer;

		[SerializeField]
		private SpriteRenderer _masonRenderer;

		[SerializeField]
		private ZombieAnimator _animator;

		[SerializeField]
		private Mason _mason;

		[SerializeField]
		private float _moveSpeed = 3f;

		private bool _isWalking;

		private void Update()
		{
			if (_isWalking)
			{
				Vector3 target = base.transform.position + Vector3.left;
				base.transform.position = Vector3.MoveTowards(base.transform.position, target, _moveSpeed * Time.deltaTime);
			}
		}

		public IEnumerator Transition()
		{
			_mason.StopShooting();
			_renderer.sortingOrder = -(int)(base.transform.position.y * 100f) + 3000;
			_renderer.DOFade(1f, 0.5f);
			yield return _masonRenderer.DOFade(0f, 0.5f).WaitForCompletion();
			_animator.Walk();
			_isWalking = true;
		}
	}
}
