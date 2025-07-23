using Audio;
using Hero;
using Progression;
using UnityEngine;

public class MoneyPickup : GameTrigger
{
    [SerializeField] private Money _money;
    [SerializeField] private AudioClip _clip;
    [SerializeField] private MoneyResource[] _items;

    private void OnTriggerEnter(Collider other)
    {
        if (other.TryGetComponent(out HeroStackManager stackManager) && stackManager.CanAddItem(ResourceType.Money))
        {
            stackManager.GetStack(ResourceType.Money).AddItems(_items, true);
            AudioService.Instance.TryPlayEffect(_clip);
            Destroy(this);
            InvokeTriggered();
        }
    }
}