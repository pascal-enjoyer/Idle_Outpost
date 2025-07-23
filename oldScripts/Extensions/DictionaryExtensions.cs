using System.Collections.Generic;
using Utilities;

namespace Extensions
{
    public static class DictionaryExtensions
    {
        public static void Add<TKey, TValue>(this Dictionary<TKey, TValue> dictionary,
            Dictionary<TKey, TValue> dictionaryToCopyFrom)
        {
            foreach ((TKey key, TValue value) in dictionaryToCopyFrom)
                dictionary.Add(key, value);
        }

        public static void Copy<TKey, TValue>(this Dictionary<TKey, TValue> dictionary, Dictionary<TKey, TValue> toCopy)
            where TKey : struct
        {
            foreach ((TKey key, TValue value) in toCopy)
                dictionary[key] = typeof(TValue).IsValueType ? value : CloneObject(value);
        }

        private static T CloneObject<T>(T obj)
        {
            if (obj is ICloneable<T> cloneable)
                return cloneable.Clone(obj);

            return obj;
        }
    }
}