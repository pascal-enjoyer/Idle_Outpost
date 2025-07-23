using UnityEngine;

namespace Extensions
{
	public static class VectorFactory
	{
		public static Vector3 Create(float value)
		{
			return new Vector3(value, value, value);
		}

		public static Vector3 CreateX(Vector3 origin, float x)
		{
			return new Vector3(x, origin.y, origin.z);
		}

		public static Vector3 CreateY(Vector3 origin, float y)
		{
			return new Vector3(origin.x, y, origin.z);
		}
	}
}
