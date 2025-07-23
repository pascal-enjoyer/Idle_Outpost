using UnityEngine;

namespace Utilities
{
    public static class RandomHelper
    {
        public static bool Check(float chance)
        {
            return Random.value < chance;
        }
    }
}