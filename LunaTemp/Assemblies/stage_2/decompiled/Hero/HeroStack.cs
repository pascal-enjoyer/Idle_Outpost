using System.Collections.Generic;
using Audio;
using DG.Tweening;
using Extensions;
using Pools;
using UnityEngine;

namespace Hero
{
	public class HeroStack : MonoBehaviour
	{
		[SerializeField]
		private ResourcesPools _pools;

		[SerializeField]
		private ResourceType _type;

		[SerializeField]
		private bool _isPlayerBackpack;

		[SerializeField]
		private Money _money;

		[SerializeField]
		private Transform _stackRoot;

		[SerializeField]
		private Vector2Int _gridSize = Vector2Int.one;

		[SerializeField]
		private Vector3 _offsets = Vector3.one;

		[SerializeField]
		private bool _hasLimit;

		[SerializeField]
		private int _maxItems = 9;

		[SerializeField]
		private float _addDuration = 0.5f;

		[SerializeField]
		private Vector3 _itemsRotation;

		[SerializeField]
		private AudioClip _addSound;

		[SerializeField]
		private AudioClip _removeSound;

		private readonly List<Resource> _items = new List<Resource>();

		private Dictionary<Resource, Tween> _scaleTweens = new Dictionary<Resource, Tween>();

		public Transform Root => _stackRoot;

		public ResourceType Type => _type;

		public int Amount => _items.Count;

		public bool IsEmpty => Amount == 0;

		public bool HasSpace => !_hasLimit || Amount < _maxItems;

		public int FreeSpaceAmount => _maxItems - Amount;

		public float LastTimeAdded { get; private set; }

		public void SpawnItems(int amount)
		{
			ResourcePool pool = _pools.Get(_type);
			for (int i = 0; i < amount; i++)
			{
				Resource resource = pool.Get();
				int layerSize = _gridSize.x * _gridSize.y;
				int itemsCount = _items.Count;
				int y = itemsCount / layerSize;
				int remaining = itemsCount % layerSize;
				int z = remaining / _gridSize.x;
				int x = remaining % _gridSize.x;
				Vector3 localPos = new Vector3((float)x * _offsets.x, (float)y * _offsets.y, (float)z * _offsets.z);
				Transform itemTransform = resource.transform;
				itemTransform.SetParent(_stackRoot);
				itemTransform.localPosition = localPos;
				Vector3 scale = itemTransform.localScale;
				itemTransform.localScale = Vector3.zero;
				Dictionary<Resource, Tween> scaleTweens = _scaleTweens;
				Vector3 targetScale = scale;
				scaleTweens.Add(resource, itemTransform.DoPopUp(_addDuration, 1.1f, null, targetScale));
				AddItem(resource);
			}
		}

		public void AddItems(Resource[] items, bool ignoreSound)
		{
			for (int i = 0; i < items.Length; i++)
			{
				AddItem(items[i], 1f, ignoreSound);
			}
		}

		public void AddItem(Resource resource, float jumpPower = 1f, bool ignoreSound = false)
		{
			int layerSize = _gridSize.x * _gridSize.y;
			int itemsCount = _items.Count;
			int y = itemsCount / layerSize;
			int remaining = itemsCount % layerSize;
			int z = remaining / _gridSize.x;
			int x = remaining % _gridSize.x;
			Vector3 localPos = new Vector3((float)x * _offsets.x, (float)y * _offsets.y, (float)z * _offsets.z);
			Transform itemTransform = resource.transform;
			itemTransform.SetParent(_stackRoot);
			itemTransform.DOLocalJump(localPos, jumpPower, 1, _addDuration);
			itemTransform.DOLocalRotate(_itemsRotation, _addDuration);
			_items.Add(resource);
			LastTimeAdded = Time.time;
			if (_isPlayerBackpack && !ignoreSound)
			{
				AudioService.Instance.TryPlayEffect(_addSound);
			}
			if (_isPlayerBackpack && _type == ResourceType.Money)
			{
				_money.AddAmount(4);
			}
		}

		public Resource RemoveItem(bool ignoreSound = false)
		{
			int lastElementIndex = _items.Count - 1;
			Resource resource = _items[lastElementIndex];
			_items.RemoveAt(lastElementIndex);
			if (_scaleTweens.ContainsKey(resource) && _scaleTweens[resource].active)
			{
				_scaleTweens[resource].Complete();
			}
			resource.transform.DOKill();
			_scaleTweens.Remove(resource);
			if (_isPlayerBackpack && !ignoreSound)
			{
				AudioService.Instance.TryPlayEffect(_removeSound);
			}
			return resource;
		}

		public void Clear()
		{
			int itemsCount = _items.Count;
			for (int i = 0; i < itemsCount; i++)
			{
				RemoveItem().Release();
			}
		}
	}
}
