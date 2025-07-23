using System.Collections;
using Pools;
using SpriteVfx;
using UnityEngine;

namespace Characters
{
	public class Zombie : MonoBehaviour
	{
		[SerializeField]
		private SpriteRenderer _renderer;

		[SerializeField]
		private Collider2D _collider;

		[SerializeField]
		private ZombieAnimator _animator;

		[SerializeField]
		private float _moveSpeed = 3f;

		[SerializeField]
		private float _dieTime;

		[SerializeField]
		private Material _defaultMaterial;

		[SerializeField]
		private Material _deathMaterial;

		[SerializeField]
		private AudioClip _coinsSound;

		[SerializeField]
		private Transform _checkSpacePoint;

		[SerializeField]
		private LayerMask _zombieLayerMask;

		[SerializeField]
		private float _checkSpaceRadius = 0.5f;

		private readonly Collider2D[] _hits = new Collider2D[2];

		private WaitForSeconds _waitDieAnimation;

		private IPool<Zombie> _pool;

		private Vector3 _target;

		private bool _isWalking;

		private bool _isWaiting;

		public bool IsAttacking { get; private set; }

		private float SqrDistanceToTarget => Vector3.SqrMagnitude(_target - base.transform.position);

		public void Construct(IPool<Zombie> pool)
		{
			_pool = pool;
			_waitDieAnimation = new WaitForSeconds(_dieTime);
		}

		public void Tick()
		{
			_renderer.sortingOrder = -(int)(base.transform.position.y * 100f + 550f);
			if (!_isWalking || IsAttacking)
			{
				return;
			}
			if (HasSpace())
			{
				if (_isWaiting)
				{
					_animator.Walk();
				}
				_isWaiting = false;
				base.transform.position = Vector3.MoveTowards(base.transform.position, _target, _moveSpeed * Time.deltaTime);
			}
			else if (!_isWaiting)
			{
				_isWaiting = true;
				_animator.Idle();
			}
			if (base.transform.position == _target)
			{
				Attack();
			}
		}

		private bool HasSpace()
		{
			int hits = Physics2D.OverlapCircleNonAlloc(_checkSpacePoint.position, _checkSpaceRadius, _hits);
			for (int i = 0; i < hits; i++)
			{
				if (_hits[i] != _collider && _hits[i].TryGetComponent<Zombie>(out var zombie) && (zombie._isWaiting || zombie.IsAttacking) && zombie.SqrDistanceToTarget < SqrDistanceToTarget)
				{
					return false;
				}
			}
			return true;
		}

		public void SetTarget(Vector3 targetPosition)
		{
			_target = targetPosition;
			_isWalking = true;
			_animator.Walk();
		}

		public IEnumerator Die()
		{
			SpriteVfxService.Instance.Spawn(SpriteVfxType.ZombieBlood, base.transform.position + 0.82f * Vector3.up);
			SpriteVfxService.Instance.Spawn(SpriteVfxType.Sparks, base.transform.position + 0.82f * Vector3.up);
			IsAttacking = false;
			_isWalking = false;
			_animator.Death();
			_renderer.sharedMaterial = _deathMaterial;
			yield return _waitDieAnimation;
			_renderer.sharedMaterial = _defaultMaterial;
			_renderer.transform.localPosition = Vector3.zero;
			_pool.Release(this);
		}

		private void Attack()
		{
			IsAttacking = true;
			_animator.Bite();
		}
	}
}
