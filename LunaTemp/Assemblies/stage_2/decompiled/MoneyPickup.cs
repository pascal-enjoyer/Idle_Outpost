using Audio;
using Hero;
using Progression;
using UnityEngine;

public class MoneyPickup : GameTrigger
{
	[SerializeField]
	private Money _money;

	[SerializeField]
	private AudioClip _clip;

	[SerializeField]
	private MoneyResource[] _items;

	private void OnTriggerEnter(Collider other)
	{
		if (other.TryGetComponent<HeroStackManager>(out var stackManager) && stackManager.CanAddItem(ResourceType.Money))
		{
			HeroStack stack = stackManager.GetStack(ResourceType.Money);
			Resource[] items = _items;
			stack.AddItems(items, true);
			AudioService.Instance.TryPlayEffect(_clip);
			Object.Destroy(this);
			InvokeTriggered();
		}
	}
}
