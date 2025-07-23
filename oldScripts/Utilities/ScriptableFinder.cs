#if UNITY_EDITOR
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEngine;

namespace Utilities
{
    public static class ScriptableFinder
    {
        public static List<T> Find<T>() where T : ScriptableObject
        {
            string[] guids = AssetDatabase.FindAssets($"t: {typeof(T)}");
            var result = new List<T>();
            foreach (string guid in guids)
            {
                string path = AssetDatabase.GUIDToAssetPath(guid);
                result.Add(AssetDatabase.LoadAssetAtPath<T>(path));
            }

            return result;
        }

        public static List<ScriptableObject> FindFromAll<T1>()
            where T1 : class
        {
            string[] guids = AssetDatabase.FindAssets("t:" + nameof(ScriptableObject));
            var result = new List<ScriptableObject>();
            foreach (string guid in guids)
            {
                string path = AssetDatabase.GUIDToAssetPath(guid);
                var asset = AssetDatabase.LoadAssetAtPath<ScriptableObject>(path);
                if (asset is T1)
                    result.Add(asset);
            }

            return result;
        }

        public static T FindSingle<T>() where T : ScriptableObject
        {
            string guid = AssetDatabase.FindAssets($"t:{typeof(T)}").FirstOrDefault();
            string path = AssetDatabase.GUIDToAssetPath(guid);
            return AssetDatabase.LoadAssetAtPath<T>(path);
        }

        public static void FindAndSet<T>(ref T obj, bool logErrorIfNewValue = false) where T : ScriptableObject
        {
            string guid = AssetDatabase.FindAssets($"t:{typeof(T)}").FirstOrDefault();
            string path = AssetDatabase.GUIDToAssetPath(guid);

            T oldObj = obj;
            obj = AssetDatabase.LoadAssetAtPath<T>(path);
            if (logErrorIfNewValue && oldObj != obj)
            {
                string oldName = oldObj == null ? "null" : oldObj.name;
                string newName = obj == null ? "null" : obj.name;
                Debug.LogError($"Object {oldName} replaced by {newName}");
            }
        }

        public static void FindAndSet<T>(ref T[] objects, bool logErrorIfNewValue = false) where T : ScriptableObject
        {
            string[] guids = AssetDatabase.FindAssets($"t: {typeof(T)}");
            var result = new List<T>();
            foreach (string guid in guids)
            {
                string path = AssetDatabase.GUIDToAssetPath(guid);
                result.Add(AssetDatabase.LoadAssetAtPath<T>(path));
            }

            T[] oldObjects = objects;
            objects = result.ToArray();
            if (logErrorIfNewValue && (objects.Length != oldObjects.Length || objects.Except(oldObjects).Any()))
                Debug.LogError("Objects not equal in arrays");
        }
        
        public static void FindAndSet<T>(ref List<T> objects, bool logErrorIfNewValue = false) where T : ScriptableObject
        {
            string[] guids = AssetDatabase.FindAssets($"t: {typeof(T)}");
            var result = new List<T>();
            foreach (string guid in guids)
            {
                string path = AssetDatabase.GUIDToAssetPath(guid);
                result.Add(AssetDatabase.LoadAssetAtPath<T>(path));
            }

            List<T> oldObjects = objects;
            objects = result;
            if (logErrorIfNewValue && (objects.Count != oldObjects.Count || objects.Except(oldObjects).Any()))
                Debug.LogError("Objects not equal in lists");
        }
    }
}
#endif