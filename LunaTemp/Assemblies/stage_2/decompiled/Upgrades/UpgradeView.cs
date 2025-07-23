using System;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Upgrades
{
	public class UpgradeView : MonoBehaviour
	{
		[SerializeField]
		private CanvasGroup _activeGroup;

		[SerializeField]
		private Button _buyButton;

		[SerializeField]
		private TMP_Text _price;

		public event Action ButtonClicked;

		private void Awake()
		{
			_buyButton.onClick.AddListener(OnBuyButtonClicked);
		}

		private void OnDestroy()
		{
			_buyButton.onClick.RemoveListener(OnBuyButtonClicked);
		}

		public void Render(int price, bool active)
		{
			_buyButton.interactable = active;
			_price.SetText("{0}", price);
			_activeGroup.DOFade(active ? 1f : 0f, 0.5f);
		}

		private void OnBuyButtonClicked()
		{
			DOTween.Sequence(base.transform).Append(base.transform.DOScale(0.5f, 0.2f).SetEase(Ease.InOutSine)).Append(base.transform.DOScale(1f, 0.2f).SetEase(Ease.InOutSine));
			this.ButtonClicked?.Invoke();
		}
	}
}
