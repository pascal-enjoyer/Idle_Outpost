using System.Collections;
using DG.Tweening;
using UnityEngine;

namespace Characters
{
    public class FailZombie : MonoBehaviour
    {
        [SerializeField] private ZombieAnimator _animator;
        [SerializeField] private SpriteRenderer _renderer;
        [SerializeField] private float _moveSpeed = 3f;

        private bool _isWalking;
        private bool _animating;

        private void Update()
        {
            if (_isWalking && !_animating)
            {
                Vector3 target = transform.position + Vector3.left;
                transform.position = Vector3.MoveTowards(transform.position, target, _moveSpeed * Time.deltaTime);
            }
        }

        private void OnEnable()
        {
            _renderer.sortingOrder = (int)(transform.position.y * -100) + 3000;
            _animator.Walk();
            transform.localScale = Vector3.zero;
            transform.DOScale(Vector3.one, 0.5f);
            transform.DOJump(transform.position + Vector3.left * 0.5f + Vector3.up * 0.5f, 0.5f, 1, 0.5f)
                .OnComplete(() => _isWalking = true);
        }

        public IEnumerator AnimateMasonBite(ZombieMason zombieMason, Transform masonBitePoint)
        {
            _animating = true;
            yield return transform.DOMove(masonBitePoint.position, 1f).WaitForCompletion();
            _animator.Bite();
            yield return new WaitForSeconds(1f);
            _animator.Idle();
            yield return zombieMason.Transition();
            _animator.Walk();
            _animating = false;
        }
    }
}