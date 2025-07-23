using UnityEngine;

namespace Hero
{
	public class HeroMovement : MonoBehaviour
	{
		[SerializeField]
		private Rigidbody _rigidbody;

		[SerializeField]
		private Transform _camera;

		[SerializeField]
		private Joystick _joystick;

		[SerializeField]
		private float _movementSpeed;

		[SerializeField]
		private float _wheelRotationMultiplier;

		[SerializeField]
		private Wheel[] _wheels;

		private bool _enabled = true;

		private bool _movedLastFrame;

		private void FixedUpdate()
		{
			if (!_enabled)
			{
				return;
			}
			Vector3 moveDirection = Vector3.ProjectOnPlane(_camera.forward, Vector3.up).normalized * _joystick.input.y + _camera.right * _joystick.input.x;
			bool moved = moveDirection != Vector3.zero;
			if (moved)
			{
				Quaternion targetRotation = Quaternion.LookRotation(moveDirection, Vector3.up);
				Quaternion rotation = Quaternion.RotateTowards(_rigidbody.transform.rotation, targetRotation, Time.deltaTime * 720f);
				_rigidbody.MovePosition(_rigidbody.position + moveDirection * (_movementSpeed * Time.deltaTime));
				_rigidbody.MoveRotation(rotation);
				for (int i = 0; i < _wheels.Length; i++)
				{
					float wheelRotation = moveDirection.magnitude * _movementSpeed * _wheelRotationMultiplier;
					_wheels[i].Rotate(wheelRotation * _movementSpeed * Time.deltaTime * _wheelRotationMultiplier);
				}
			}
			_movedLastFrame = moved;
		}

		public void Disable()
		{
			_enabled = false;
		}
	}
}
