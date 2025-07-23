using UnityEngine;
using UnityEngine.UI;

public class FencePurchaseUI : MonoBehaviour
{
    [SerializeField] private Button purchaseButton;
    [SerializeField] private Sprite activeSprite;
    [SerializeField] private Sprite inactiveSprite;
    private Image buttonImage;

    void Start()
    {
        if (purchaseButton == null)
        {
            Debug.LogError("PurchaseButton not assigned in FencePurchaseUI");
            return;
        }

        buttonImage = purchaseButton.GetComponent<Image>();
        if (buttonImage == null)
        {
            Debug.LogError("PurchaseButton requires an Image component");
            return;
        }

        if (activeSprite == null || inactiveSprite == null)
        {
            Debug.LogError("ActiveSprite or InactiveSprite not assigned in FencePurchaseUI");
            return;
        }

        if (EconomyManager.Instance == null)
        {
            Debug.LogError("EconomyManager not found");
            return;
        }

        EconomyManager.Instance.OnCoinsChanged.AddListener(UpdateButtonState);
        UpdateButtonState(EconomyManager.Instance.GetCoins());

        purchaseButton.onClick.AddListener(OnPurchaseButtonClicked);
    }

    private void UpdateButtonState(int coins)
    {
        bool canAfford = coins >= EconomyManager.Instance.FenceCost;
        purchaseButton.interactable = canAfford;
        buttonImage.sprite = canAfford ? activeSprite : inactiveSprite;
        Debug.Log($"FencePurchaseUI: Can afford fence = {canAfford}, Coins = {coins}");
    }

    private void OnPurchaseButtonClicked()
    {
        if (EconomyManager.Instance.TryPurchaseFence())
        {
            gameObject.SetActive(false);
            Debug.Log("Fence purchase successful, hiding button");
        }
    }

    void OnDestroy()
    {
        if (EconomyManager.Instance != null)
        {
            EconomyManager.Instance.OnCoinsChanged.RemoveListener(UpdateButtonState);
        }
        if (purchaseButton != null)
        {
            purchaseButton.onClick.RemoveListener(OnPurchaseButtonClicked);
        }
    }
}