using System.Collections.Generic;
using Utilities;

namespace Extensions
{
	public static class DictionaryExtensions
	{
		public static void Add<TKey, TValue>(this Dictionary<TKey, TValue> dictionary, Dictionary<TKey, TValue> dictionaryToCopyFrom)
		{
			foreach (KeyValuePair<TKey, TValue> item in dictionaryToCopyFrom)
			{
				item.Deconstruct(out var key2, out var value2);
				TKey key = key2;
				TValue value = value2;
				dictionary.Add(key, value);
			}
		}

		public static void Copy<TKey, TValue>(this Dictionary<TKey, TValue> dictionary, Dictionary<TKey, TValue> toCopy) where TKey : struct
		{
			foreach (KeyValuePair<TKey, TValue> item in toCopy)
			{
				item.Deconstruct(out var key2, out var value2);
				TKey key = key2;
				TValue value = value2;
				dictionary[key] = (typeof(TValue).IsValueType ? value : CloneObject(value));
			}
		}

		private static T CloneObject<T>(T obj)
		{
			if ((object)obj is ICloneable<T> cloneable)
			{
				return cloneable.Clone(obj);
			}
			return obj;
		}
	}
}
