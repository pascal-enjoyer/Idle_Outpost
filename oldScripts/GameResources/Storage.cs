using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace GameResources
{
    public class Storage : MonoBehaviour
    {
        [SerializeField] private List<ResourcePack> _startResources = new List<ResourcePack>();

        private readonly Dictionary<ResourceType, int> _resources = new();

        public event Action<ResourceType> ResourceChanged;

        private void Awake()
        {
            for (var i = 0; i < _startResources.Count; i++)
                _resources.TryAdd(_startResources[i].Type, _startResources[i].Amount);
        }

        public void AddResource(ResourceType resourceType, int amount = 1)
        {
            _resources.TryAdd(resourceType, 0);
            _resources[resourceType] += amount;
            ResourceChanged?.Invoke(resourceType);
        }

        public void AddResources(Dictionary<ResourceType, int> resources)
        {
            foreach ((ResourceType resourceType, int amount) in resources)
            {
                _resources.TryAdd(resourceType, 0);
                _resources[resourceType] += amount;
                ResourceChanged?.Invoke(resourceType);
            }
        }

        public void AddResources(Storage storage)
        {
            foreach ((ResourceType resourceType, int amount) in storage._resources)
            {
                _resources.TryAdd(resourceType, 0);
                _resources[resourceType] += amount;
                ResourceChanged?.Invoke(resourceType);
            }
        }

        public int GetResource(ResourceType type) =>
            _resources.GetValueOrDefault(type, 0);

        public void SetResource(ResourceType type, int amount)
        {
            _resources[type] = amount;
            ResourceChanged?.Invoke(type);
        }

        public void RemoveResource(ResourceType resourceType, int amount = 1)
        {
            _resources.TryAdd(resourceType, 0);
            _resources[resourceType] -= amount;
            ResourceChanged?.Invoke(resourceType);
        }

        public void RemoveResources(Dictionary<ResourceType, int> resourcesToRemove)
        {
            foreach ((ResourceType type, int amount) in resourcesToRemove)
            {
                _resources.TryAdd(type, 0);
                _resources[type] -= amount;
                ResourceChanged?.Invoke(type);
            }
        }

        public bool HasResource(ResourceType resourceType, int minAmount = 1) =>
            _resources.ContainsKey(resourceType) && _resources[resourceType] >= minAmount;

        public bool HasResources(Dictionary<ResourceType, int> resources)
        {
            foreach ((ResourceType resourceType, int amount) in resources)
                if (!HasResource(resourceType, amount))
                    return false;

            return true;
        }

        public int TotalAmount() =>
            _resources.Sum(x => x.Value);

        public bool Empty() =>
            _resources.Count == 0 || _resources.All(x => x.Value == 0);

        public void Clear() =>
            _resources.Clear();
    }
}