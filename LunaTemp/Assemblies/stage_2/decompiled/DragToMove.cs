using DG.Tweening;
using UnityEngine;

public class DragToMove : MonoBehaviour
{
	[SerializeField]
	private Joystick _joystick;

	[SerializeField]
	private float _idleTimeToShow = 1f;

	[SerializeField]
	private ColorZone _colorZone;

	private bool _visible;

	private float _idleTime;

	private void Awake()
	{
		Show();
	}

	private void Update()
	{
		if (_visible && _joystick.input != Vector2.zero)
		{
			Hide();
		}
		else
		{
			if (_visible)
			{
				return;
			}
			if (_joystick.input == Vector2.zero && !_colorZone.IsActive)
			{
				_idleTime += Time.deltaTime;
				if (_idleTime >= _idleTimeToShow)
				{
					Show();
				}
			}
			else
			{
				_idleTime = 0f;
			}
		}
	}

	private void Show()
	{
		_visible = true;
		_idleTime = 0f;
		Sequence sequence = DOTween.Sequence(base.transform);
		sequence.Append(base.transform.DOScale(1f, 0.1f));
		sequence.Append(base.transform.DOScale(1.1f, 0.5f).SetEase(Ease.InOutSine).SetLoops(int.MaxValue, LoopType.Yoyo));
	}

	private void Hide()
	{
		_visible = false;
		base.transform.DOKill();
		base.transform.DOScale(Vector3.zero, 0.1f);
	}
}
