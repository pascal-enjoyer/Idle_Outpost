using DG.Tweening;
using GameResources;
using UnityEngine;
using UnityEngine.UI;

public class BulletBubble : MonoBehaviour
{
	[SerializeField]
	private Image _glowImage;

	[SerializeField]
	private Storage _storage;

	private bool _vibrating;

	private void Awake()
	{
		_storage.ResourceChanged += ValueChanged;
	}

	private void OnDestroy()
	{
		_storage.ResourceChanged -= ValueChanged;
	}

	private void ValueChanged(ResourceType resourceType)
	{
		if (resourceType == ResourceType.MasonBullet)
		{
			if (!_vibrating && _storage.GetResource(resourceType) == 0)
			{
				_vibrating = true;
				base.transform.DORewind();
				DOTween.Sequence(base.transform).Append(base.transform.DOScale(1.1f, 0.5f).SetEase(Ease.InOutSine)).Join(_glowImage.DOFade(1f, 0.5f).SetEase(Ease.InOutSine))
					.Append(base.transform.DOScale(1f, 0.5f).SetEase(Ease.InOutSine))
					.Join(_glowImage.DOFade(0f, 0.5f).SetEase(Ease.InOutSine))
					.SetLoops(-1);
			}
			else if (_vibrating && _storage.GetResource(resourceType) > 0)
			{
				_vibrating = false;
				base.transform.DORewind();
				DOTween.Sequence(base.transform).Append(base.transform.DOScale(1f, 0.5f).SetEase(Ease.InOutSine)).Join(_glowImage.DOFade(0f, 0.5f).SetEase(Ease.InOutSine));
			}
		}
	}
}
