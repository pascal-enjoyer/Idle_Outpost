using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace Extensions
{
	public static class ArrayExtensions
	{
		public static T GetRandom<T>(this IEnumerable<T> enumerable)
		{
			return enumerable.ToArray().GetRandom();
		}

		public static T GetRandom<T>(this IList<T> list)
		{
			return list[Random.Range(0, list.Count)];
		}
	}
}
