using UnityEngine;

namespace Extensions
{
    public static class LayerMaskExtensions
    {
        public static bool Contains(this LayerMask mask, int layer) =>
            (mask.value & 1 << layer) != 0;

        public static int ToLayer(this LayerMask mask) => 
            (int)Mathf.Log(mask.value, 2);
    }
}