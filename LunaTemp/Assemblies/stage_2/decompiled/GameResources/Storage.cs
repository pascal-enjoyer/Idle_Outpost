using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace GameResources
{
	public class Storage : MonoBehaviour
	{
		[SerializeField]
		private List<ResourcePack> _startResources = new List<ResourcePack>();

		private readonly Dictionary<ResourceType, int> _resources = new Dictionary<ResourceType, int>();

		public event Action<ResourceType> ResourceChanged;

		private void Awake()
		{
			for (int i = 0; i < _startResources.Count; i++)
			{
				_resources.TryAdd(_startResources[i].Type, _startResources[i].Amount);
			}
		}

		public void AddResource(ResourceType resourceType, int amount = 1)
		{
			_resources.TryAdd(resourceType, 0);
			_resources[resourceType] += amount;
			this.ResourceChanged?.Invoke(resourceType);
		}

		public void AddResources(Dictionary<ResourceType, int> resources)
		{
			foreach (KeyValuePair<ResourceType, int> resource in resources)
			{
				resource.Deconstruct(out var key, out var value);
				ResourceType resourceType = key;
				int amount = value;
				_resources.TryAdd(resourceType, 0);
				Dictionary<ResourceType, int> resources2 = _resources;
				key = resourceType;
				resources2[key] += amount;
				this.ResourceChanged?.Invoke(resourceType);
			}
		}

		public void AddResources(Storage storage)
		{
			foreach (KeyValuePair<ResourceType, int> resource in storage._resources)
			{
				resource.Deconstruct(out var key, out var value);
				ResourceType resourceType = key;
				int amount = value;
				_resources.TryAdd(resourceType, 0);
				Dictionary<ResourceType, int> resources = _resources;
				key = resourceType;
				resources[key] += amount;
				this.ResourceChanged?.Invoke(resourceType);
			}
		}

		public int GetResource(ResourceType type)
		{
			return _resources.GetValueOrDefault(type, 0);
		}

		public void SetResource(ResourceType type, int amount)
		{
			_resources[type] = amount;
			this.ResourceChanged?.Invoke(type);
		}

		public void RemoveResource(ResourceType resourceType, int amount = 1)
		{
			_resources.TryAdd(resourceType, 0);
			_resources[resourceType] -= amount;
			this.ResourceChanged?.Invoke(resourceType);
		}

		public void RemoveResources(Dictionary<ResourceType, int> resourcesToRemove)
		{
			foreach (KeyValuePair<ResourceType, int> item in resourcesToRemove)
			{
				item.Deconstruct(out var key, out var value);
				ResourceType type = key;
				int amount = value;
				_resources.TryAdd(type, 0);
				Dictionary<ResourceType, int> resources = _resources;
				key = type;
				resources[key] -= amount;
				this.ResourceChanged?.Invoke(type);
			}
		}

		public bool HasResource(ResourceType resourceType, int minAmount = 1)
		{
			return _resources.ContainsKey(resourceType) && _resources[resourceType] >= minAmount;
		}

		public bool HasResources(Dictionary<ResourceType, int> resources)
		{
			foreach (KeyValuePair<ResourceType, int> resource in resources)
			{
				resource.Deconstruct(out var key, out var value);
				ResourceType resourceType = key;
				int amount = value;
				if (!HasResource(resourceType, amount))
				{
					return false;
				}
			}
			return true;
		}

		public int TotalAmount()
		{
			return _resources.Sum((KeyValuePair<ResourceType, int> x) => x.Value);
		}

		public bool Empty()
		{
			return _resources.Count == 0 || _resources.All((KeyValuePair<ResourceType, int> x) => x.Value == 0);
		}

		public void Clear()
		{
			_resources.Clear();
		}
	}
}
