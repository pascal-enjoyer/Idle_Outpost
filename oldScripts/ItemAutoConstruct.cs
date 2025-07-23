using Pools;
using Sirenix.OdinInspector;
using UnityEngine;

public class ItemAutoConstruct : MonoBehaviour
{
    [SerializeField] private ResourcesPools _pools;
    [SerializeField] private Resource _resource;

    private void Awake() =>
        _resource.Construct(_pools.Get(_resource.Type));

#if UNITY_EDITOR
    [Button]
    private void Fetch()
    {
        _pools = FindObjectOfType<ResourcesPools>();
        _resource = GetComponent<Resource>();
    }
#endif
}