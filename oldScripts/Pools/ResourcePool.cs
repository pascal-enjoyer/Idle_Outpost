using UnityEngine;

namespace Pools
{
    public class ResourcePool : MonoBehaviour, IPool<Resource>
    {
        [SerializeField] private Resource _prefab;

        private ObjectPool<Resource> _pool;

        public ResourceType Type => _prefab.Type;
        public int CountActive => _pool.CountActive;

        private void Awake() =>
            _pool = new ObjectPool<Resource>(Create);

        public Resource Get()
        {
            Resource resource = _pool.Get();
            resource.gameObject.SetActive(true);
            return resource;
        }

        public void Release(Resource resource)
        {
            resource.transform.SetParent(transform);
            resource.transform.localScale = Vector3.one;
            resource.gameObject.SetActive(false);
            _pool.Release(resource);
        }

        private Resource Create()
        {
            Resource resource = Instantiate(_prefab, transform, true);
            resource.Construct(this);
            resource.gameObject.SetActive(false);
            return resource;
        }
    }
}