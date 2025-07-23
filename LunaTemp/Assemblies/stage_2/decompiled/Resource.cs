using Pools;
using UnityEngine;

public abstract class Resource : MonoBehaviour
{
	[SerializeField]
	private ResourceType _type;

	private IPool<Resource> _pool;

	public ResourceType Type => _type;

	public void Construct(IPool<Resource> pool)
	{
		_pool = pool;
	}

	public void Release()
	{
		_pool.Release(this);
	}
}
