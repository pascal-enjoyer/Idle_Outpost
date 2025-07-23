using System.Linq;
using UnityEngine;
using Object = UnityEngine.Object;

namespace Utilities.Editor
{
    public static class ObjectFinder
    {
        public static void FindAndSet<T>(ref T obj, bool logErrorIfNewValue = false) where T : Object
        {
            T oldObj = obj;
            obj = Object.FindAnyObjectByType<T>(FindObjectsInactive.Include);
            if (logErrorIfNewValue && oldObj != obj)
            {
                string oldName = oldObj == null ? "null" : oldObj.name;
                string newName = obj == null ? "null" : obj.name;
                Debug.LogError($"Object {oldName} replaced by {newName}");
            }
        }

        public static void FindAndSet<T>(ref T[] objects, bool logErrorIfNewValue = false) where T : Object
        {
            T[] oldObjects = objects;
            objects = Object.FindObjectsByType<T>(FindObjectsInactive.Include, FindObjectsSortMode.None);
            if (logErrorIfNewValue && (objects.Length != oldObjects.Length || objects.Except(oldObjects).Any()))
                Debug.LogError("Objects not equal in arrays");
        }
    }
}