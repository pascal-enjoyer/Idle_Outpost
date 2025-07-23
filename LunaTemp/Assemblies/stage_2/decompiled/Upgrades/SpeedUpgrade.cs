using Audio;
using Characters;
using GameResources;
using UnityEngine;

namespace Upgrades
{
	public class SpeedUpgrade : MonoBehaviour
	{
		[SerializeField]
		private Glen _glen;

		[SerializeField]
		private Storage _storage;

		[SerializeField]
		private UpgradeView _view;

		[SerializeField]
		private AudioClip _sound;

		[SerializeField]
		private SpeedUpgradeData[] _data;

		private int _index;

		private SpeedUpgradeData Current => _data[_index];

		private void Awake()
		{
			_storage.ResourceChanged += ValueChanged;
			_view.ButtonClicked += BuyUpgrade;
			ValueChanged(ResourceType.Money);
		}

		private void OnDestroy()
		{
			_storage.ResourceChanged -= ValueChanged;
			_view.ButtonClicked -= BuyUpgrade;
		}

		private void ValueChanged(ResourceType resourceType)
		{
			if (resourceType == ResourceType.Money)
			{
				int money = _storage.GetResource(resourceType);
				_view.Render(Current.Price, money >= Current.Price);
			}
		}

		private void BuyUpgrade()
		{
			AudioService.Instance.TryPlayEffect(_sound);
			_storage.RemoveResource(ResourceType.Money, Current.Price);
			_glen.Upgrade(Current.MoveSpeed, Current.WaitTime);
			_index++;
			ValueChanged(ResourceType.Money);
		}
	}
}
