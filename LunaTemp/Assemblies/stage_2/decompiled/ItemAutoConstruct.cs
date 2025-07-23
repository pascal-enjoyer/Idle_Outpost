using Pools;
using UnityEngine;

public class ItemAutoConstruct : MonoBehaviour
{
	[SerializeField]
	private ResourcesPools _pools;

	[SerializeField]
	private Resource _resource;

	private void Awake()
	{
		_resource.Construct(_pools.Get(_resource.Type));
	}
}
