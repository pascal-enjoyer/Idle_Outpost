using System;
using DG.Tweening;
using UnityEngine;

namespace Extensions
{
	public static class TweenExtensions
	{
		public static Tween DoPopUp(this Transform transform, float duration = 0.3f, float percent = 1.1f, Action onPopped = null, Vector3 targetScale = default(Vector3), bool fromZero = false, bool kill = true, bool ignoreYPercent = false)
		{
			if (kill)
			{
				transform.DOKill();
			}
			if (targetScale == default(Vector3))
			{
				targetScale = Vector3.one;
			}
			if (fromZero)
			{
				transform.localScale = Vector3.zero;
			}
			Vector3 percentVector = new Vector3(percent, ignoreYPercent ? 1f : percent, percent);
			Sequence seq = DOTween.Sequence(transform);
			seq.SetLink(transform.gameObject);
			seq.Append(transform.DOScale(Vector3.Scale(targetScale, percentVector), duration * 0.75f).SetEase(Ease.OutQuad));
			seq.Append(transform.DOScale(targetScale, duration * 0.25f).SetEase(Ease.InQuad));
			seq.AppendCallback(delegate
			{
				onPopped?.Invoke();
			});
			return seq;
		}

		public static Tween DoPopDown(this Transform transform, float duration = 0.3f, float percent = 1.1f, Action onPopped = null, bool kill = true, float targetScale = 0f, Vector3 startScale = default(Vector3))
		{
			if (kill)
			{
				transform.DOKill();
			}
			if (startScale == default(Vector3))
			{
				startScale = transform.localScale;
			}
			Sequence seq = DOTween.Sequence(transform);
			seq.SetLink(transform.gameObject);
			seq.Append(transform.DOScale(startScale * percent, duration * 0.25f).SetEase(Ease.OutQuad));
			seq.Append(transform.DOScale(targetScale, duration * 0.75f).SetEase(Ease.InQuad));
			seq.AppendCallback(delegate
			{
				onPopped?.Invoke();
			});
			return seq;
		}

		public static Tween DoPopUp(this float from, float to, TweenCallback<float> onUpdate, float duration = 0.3f, float percent = 1.1f, Action onPopped = null)
		{
			Sequence seq = DOTween.Sequence();
			float diff = Math.Abs(to - from);
			float targetHalf = diff * percent + from;
			seq.Append(DOVirtual.Float(from, targetHalf, duration * 0.75f, onUpdate).SetEase(Ease.OutQuad));
			seq.AppendCallback(delegate
			{
				onPopped?.Invoke();
			});
			seq.Append(DOVirtual.Float(targetHalf, to, duration * 0.25f, onUpdate).SetEase(Ease.InQuad));
			return seq;
		}

		public static Tween DoPopDown(this float from, float to, TweenCallback<float> onUpdate, float duration = 0.3f, float percent = 1.1f, Action onPopped = null)
		{
			Sequence seq = DOTween.Sequence();
			float diff = Math.Abs(from - to);
			float targetHalf = from - diff * percent;
			seq.Append(DOVirtual.Float(from, targetHalf, duration * 0.75f, onUpdate).SetEase(Ease.OutQuad));
			seq.AppendCallback(delegate
			{
				onPopped?.Invoke();
			});
			seq.Append(DOVirtual.Float(targetHalf, to, duration * 0.25f, onUpdate).SetEase(Ease.InQuad));
			return seq;
		}
	}
}
