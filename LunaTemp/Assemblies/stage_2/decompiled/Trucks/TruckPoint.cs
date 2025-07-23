using UnityEngine;

namespace Trucks
{
	public class TruckPoint : MonoBehaviour
	{
		[SerializeField]
		private bool _stopHereIsAllowed = true;

		public Vector3 Position => base.transform.position;

		public Quaternion Rotation => base.transform.rotation;

		public bool IsFree { get; private set; } = true;


		public bool StopIsAllowed => _stopHereIsAllowed;

		public void Occupy()
		{
			IsFree = false;
		}

		public void Release()
		{
			IsFree = true;
		}
	}
}
