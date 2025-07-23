using System.Collections.Generic;
using UnityEngine;

namespace Extensions
{
	public static class ListExtensions
	{
		public static void Shuffle<T>(this IList<T> list)
		{
			int j = list.Count;
			while (j > 1)
			{
				j--;
				int i = UnityEngine.Random.Range(0, j);
				int index = i;
				int index2 = j;
				T val = list[j];
				T val2 = list[i];
				T val4 = (list[index] = val);
				val4 = (list[index2] = val2);
			}
		}

		public static T Random<T>(this IList<T> list)
		{
			return list[UnityEngine.Random.Range(0, list.Count)];
		}

		public static bool AddIfNotContains<T>(this IList<T> list, T value)
		{
			if (!list.Contains(value))
			{
				list.Add(value);
				return true;
			}
			return false;
		}
	}
}
