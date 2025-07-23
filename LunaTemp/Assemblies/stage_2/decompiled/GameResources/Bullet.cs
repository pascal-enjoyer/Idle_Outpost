using Conveyors;
using UnityEngine;

namespace GameResources
{
	public class Bullet : Resource
	{
		private Vector3 _moveSpeed;

		private InteractiveConveyorPoint _target;

		private bool _isMoving;

		private void Update()
		{
			if (_isMoving)
			{
				base.transform.position += _moveSpeed * Time.deltaTime;
				if (Vector3.SqrMagnitude(base.transform.position - _target.InteractionPoint.position) < 0.01f)
				{
					_isMoving = false;
					_target.ProcessBullet(this);
				}
			}
		}

		public void Move(InteractiveConveyorPoint nextPoint, float speed)
		{
			_isMoving = true;
			_target = nextPoint;
			_moveSpeed = speed * (nextPoint.InteractionPoint.position - base.transform.position).normalized;
		}

		public void Stop()
		{
			_isMoving = false;
		}
	}
}
