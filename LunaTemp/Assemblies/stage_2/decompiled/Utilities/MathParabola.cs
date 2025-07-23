using UnityEngine;

namespace Utilities
{
	public static class MathParabola
	{
		public static Vector3 Parabola(Vector3 start, Vector3 end, float height, float t)
		{
			Vector3 mid = Vector3.Lerp(start, end, t);
			return new Vector3(mid.x, Func(t, height) + Mathf.Lerp(start.y, end.y, t), mid.z);
		}

		public static Vector2 Parabola(Vector2 start, Vector2 end, float height, float t)
		{
			return new Vector2(Vector2.Lerp(start, end, t).x, Func(t, height) + Mathf.Lerp(start.y, end.y, t));
		}

		private static float Func(float x, float height)
		{
			return -4f * height * x * x + 4f * height * x;
		}
	}
}
