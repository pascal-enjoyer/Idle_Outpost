using UnityEngine;

namespace Utilities
{
	public class AutoRotate : MonoBehaviour
	{
		[SerializeField]
		private Vector3 _rotationSpeed;

		[SerializeField]
		private Space _space = Space.Self;

		[SerializeField]
		private bool _enabled = true;

		private void Update()
		{
			if (_enabled)
			{
				Vector3 rotation = _rotationSpeed * Time.deltaTime;
				base.transform.Rotate(rotation.x, rotation.y, rotation.z, _space);
			}
		}

		public void Enable()
		{
			_enabled = true;
		}

		public void Disable()
		{
			_enabled = false;
		}
	}
}
