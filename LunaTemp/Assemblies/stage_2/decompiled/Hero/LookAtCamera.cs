using UnityEngine;

namespace Hero
{
	public class LookAtCamera : MonoBehaviour
	{
		private Camera _camera;

		private void Start()
		{
			_camera = Camera.main;
		}

		private void LateUpdate()
		{
			base.transform.forward = _camera.transform.forward;
		}
	}
}
