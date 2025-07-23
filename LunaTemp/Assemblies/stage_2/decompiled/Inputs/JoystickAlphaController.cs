using DG.Tweening;
using UnityEngine;

namespace Inputs
{
	public class JoystickAlphaController : MonoBehaviour
	{
		[SerializeField]
		private Joystick _joystick;

		[SerializeField]
		private CanvasGroup _canvasGroup;

		private bool _transparencyEnabled = true;

		private void Update()
		{
			if (_transparencyEnabled && _joystick.input != Vector2.zero)
			{
				_transparencyEnabled = false;
				_canvasGroup.DOFade(1f, 0.25f);
			}
			else if (!_transparencyEnabled && _joystick.input == Vector2.zero)
			{
				_transparencyEnabled = true;
				_canvasGroup.DOFade(0.25f, 0.25f);
			}
		}
	}
}
