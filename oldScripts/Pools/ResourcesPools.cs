using Sirenix.OdinInspector;
using UnityEngine;

namespace Pools
{
    public class ResourcesPools : MonoBehaviour
    {
        [SerializeField] private ResourcePool[] _pools;

        public ResourcePool Get(ResourceType type)
        {
            for (var i = 0; i < _pools.Length; i++)
            {
                ResourcePool resourcePool = _pools[i];
                if (resourcePool.Type == type)
                    return resourcePool;
            }

            return null;
        }

        public T GetResource<T>(ResourceType type) where T : Resource
        {
            for (var i = 0; i < _pools.Length; i++)
            {
                ResourcePool resourcePool = _pools[i];
                if (resourcePool.Type == type)
                    return (T)resourcePool.Get();
            }

            return null;
        }

#if UNITY_EDITOR
        [Button]
        private void Fetch() =>
            _pools = GetComponentsInChildren<ResourcePool>();
#endif
    }
}