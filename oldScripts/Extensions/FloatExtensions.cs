using System.Globalization;
using UnityEngine;

namespace Extensions
{
    public static class FloatExtensions
    {
        public static float Remap(this float value, float from1, float to1, float from2, float to2) => 
            (value - from1) / (to1 - from1) * (to2 - from2) + from2;

        public static float Remap01(this float value, float from, float to) => 
            (value - from) / (to - from);

        public static bool ApproximatelyEqual(this float a, float b) => 
            ApproximatelyEqual(a, b, Mathf.Epsilon);

        public static bool ApproximatelyEqual(this float a, float b, float epsilon) => 
            Mathf.Abs(a - b) <= epsilon;

        public static string ToMinutes(this float value, int precision = 1)
        {
            float multiplier = precision * 10f;
            return (Mathf.Round(value / 60f * multiplier) / multiplier).ToString(CultureInfo.InvariantCulture);
        }
    }
}