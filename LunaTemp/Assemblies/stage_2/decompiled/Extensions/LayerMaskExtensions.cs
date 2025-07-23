using UnityEngine;

namespace Extensions
{
	public static class LayerMaskExtensions
	{
		public static bool Contains(this LayerMask mask, int layer)
		{
			return (mask.value & (1 << layer)) != 0;
		}

		public static int ToLayer(this LayerMask mask)
		{
			return (int)Mathf.Log(mask.value, 2f);
		}
	}
}
