using System.Collections;
using Conveyors;
using DG.Tweening;
using Inputs;
using UnityEngine;

public class SpriteFlash : MonoBehaviour
{
	[SerializeField]
	private SpriteRenderer _spriteRenderer;

	[SerializeField]
	private float _duration = 3f;

	[SerializeField]
	private bool _alwaysOnAfterClick;

	[SerializeField]
	private ConveyorSelector _selector;

	private Coroutine _coroutine;

	private void Awake()
	{
		_coroutine = StartCoroutine(DisableAfterTime());
		DOTween.Sequence(_spriteRenderer).Append(_spriteRenderer.DOFade(1f, 0.4f)).Append(_spriteRenderer.DOFade(0f, 0.4f))
			.SetEase(Ease.InOutSine)
			.SetLoops(-1);
		if (_alwaysOnAfterClick)
		{
			_selector.Selected += OnConveyorSelected;
		}
	}

	private void OnDestroy()
	{
		if (_alwaysOnAfterClick)
		{
			_selector.Selected -= OnConveyorSelected;
		}
	}

	private IEnumerator DisableAfterTime()
	{
		yield return new WaitForSeconds(_duration);
		base.gameObject.SetActive(false);
		_coroutine = null;
	}

	private void OnConveyorSelected(InteractiveConveyor _)
	{
		if (_coroutine != null)
		{
			StopCoroutine(_coroutine);
		}
		else
		{
			base.gameObject.SetActive(true);
		}
		_spriteRenderer.DOKill();
		DOTween.Sequence(_spriteRenderer).Append(_spriteRenderer.DOFade(1f, 0.4f)).SetEase(Ease.InOutSine);
	}
}
