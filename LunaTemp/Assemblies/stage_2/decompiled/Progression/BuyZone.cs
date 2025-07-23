using System.Collections;
using System.Collections.Generic;
using Audio;
using DG.Tweening;
using Extensions;
using Hero;
using TMPro;
using UnityEngine;

namespace Progression
{
	public class BuyZone : GameTrigger
	{
		[SerializeField]
		private int _startPrice;

		[SerializeField]
		private Money _money;

		[SerializeField]
		private ShaderFillBar _fillBar;

		[SerializeField]
		private TMP_Text _priceText;

		[SerializeField]
		private float _flyDelay;

		[SerializeField]
		private float _flyDuration;

		[SerializeField]
		private Transform _moneyReceivePoint;

		[SerializeField]
		private AudioClip _addSound;

		private WaitForSeconds _waitFly;

		public int Price { get; private set; }

		public bool IsOpened { get; private set; }

		private void Awake()
		{
			_waitFly = new WaitForSeconds(_flyDelay);
			Price = _startPrice;
			_fillBar.Init();
			UpdateVisuals(_startPrice);
		}

		private void OnDestroy()
		{
			UpdateVisuals(_startPrice);
		}

		private void OnTriggerEnter(Collider other)
		{
			if (!IsOpened && other.TryGetComponent<HeroStackManager>(out var stackManager))
			{
				HeroStack moneyStack = stackManager.GetStack(ResourceType.Money);
				if (!moneyStack.IsEmpty)
				{
					StartCoroutine(TakeMoneyFromHero(moneyStack));
				}
			}
		}

		private IEnumerator TakeMoneyFromHero(HeroStack stack)
		{
			List<MoneyResource> items = new List<MoneyResource>();
			int price = Price;
			int itemsAmount = 0;
			while (price > 0 && !stack.IsEmpty)
			{
				MoneyResource item = (MoneyResource)stack.RemoveItem(true);
				items.Add(item);
				price -= 4;
				itemsAmount++;
			}
			if (price == 0)
			{
				IsOpened = true;
			}
			for (int i = 0; i < itemsAmount; i++)
			{
				MoneyResource resource = items[i];
				bool isLast = i == itemsAmount - 1;
				StartCoroutine(ThrowCoinArc(resource, _moneyReceivePoint.position, _flyDuration, isLast));
				yield return _waitFly;
			}
		}

		private IEnumerator ThrowCoinArc(MoneyResource resource, Vector3 targetPos, float duration, bool isLast)
		{
			Transform itemTransform = resource.transform;
			Vector3 startPos = itemTransform.position;
			float elapsed = 0f;
			Vector3 midPoint = (startPos + targetPos) * 0.5f;
			midPoint.y += 1f;
			itemTransform.SetParent(null);
			AudioService.Instance.TryPlayEffect(_addSound);
			while (elapsed < duration)
			{
				elapsed += Time.deltaTime;
				float t = Mathf.Clamp01(elapsed / duration);
				Vector3 posA = Vector3.Lerp(startPos, midPoint, t);
				Vector3 posB = Vector3.Lerp(midPoint, targetPos, t);
				itemTransform.position = Vector3.Lerp(posA, posB, t);
				float flipAngle = Mathf.Lerp(0f, 180f, t);
				itemTransform.rotation = Quaternion.Euler(flipAngle, 0f, 0f);
				yield return null;
			}
			itemTransform.position = targetPos;
			itemTransform.rotation = Quaternion.identity;
			_money.Withdraw(4, 0.5f);
			Price -= 4;
			DOVirtual.Int(Price + 4, Price, 0.5f, UpdateVisuals);
			resource.Release();
			if (IsOpened && isLast)
			{
				IsOpened = true;
				yield return new WaitForSeconds(0.55f);
				InvokeTriggered();
				yield return base.transform.DoPopDown().WaitForCompletion();
				base.gameObject.SetActive(false);
			}
		}

		private void UpdateVisuals(int value)
		{
			_priceText.SetText("{0}", value);
			_fillBar.SetProgress(1f - (float)value / (float)_startPrice);
		}
	}
}
