using DG.Tweening;
using UnityEngine;

namespace QuestSystem
{
	public class TopQuestArrow : MonoBehaviour
	{
		[SerializeField]
		private Transform _arrow;

		[SerializeField]
		private float _moveDistance = 0.5f;

		[SerializeField]
		private float _moveDuration = 1f;

		[SerializeField]
		private Ease _moveEase = Ease.InOutSine;

		[SerializeField]
		private Vector3 _rotate = new Vector3(0f, -360f, 0f);

		[SerializeField]
		private float _rotateDuration = 2f;

		[SerializeField]
		private Ease _rotateEase = Ease.Linear;

		private Tween _moveTween;

		private Tween _rotateTween;

		private void Awake()
		{
			Vector3 startPos = _arrow.localPosition;
			Vector3 endPos = startPos - Vector3.up * _moveDistance;
			_moveTween = _arrow.DOLocalMove(endPos, _moveDuration).SetEase(_moveEase).SetLoops(-1, LoopType.Yoyo);
			_rotateTween = _arrow.DOLocalRotate(_rotate, _rotateDuration, RotateMode.LocalAxisAdd).SetEase(_rotateEase).SetLoops(-1, LoopType.Incremental);
			base.gameObject.SetActive(false);
			base.transform.localScale = Vector3.zero;
		}

		private void OnDestroy()
		{
			_moveTween?.Kill();
			_rotateTween?.Kill();
		}

		public void Show()
		{
			base.gameObject.SetActive(true);
			base.transform.DOKill();
			base.transform.DOScale(Vector3.one, 0.5f);
		}

		public void Hide()
		{
			base.transform.DOKill();
			base.transform.DOScale(Vector3.zero, 0.5f).OnComplete(delegate
			{
				base.gameObject.SetActive(false);
			});
		}
	}
}
