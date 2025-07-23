using UnityEngine;
using TMPro;

public class CoinsDisplayUI : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI coinsText;

    void Start()
    {
        if (coinsText == null)
        {
            Debug.LogError("CoinsText not assigned in CoinsDisplayUI");
            return;
        }

        if (EconomyManager.Instance == null)
        {
            Debug.LogError("EconomyManager not found");
            return;
        }

        EconomyManager.Instance.OnCoinsChanged.AddListener(UpdateCoinsDisplay);
        UpdateCoinsDisplay(EconomyManager.Instance.GetCoins());
    }

    private void UpdateCoinsDisplay(int coins)
    {
        coinsText.text = coins.ToString();
        Debug.Log($"CoinsDisplayUI: Updated coins display to {coins}");
    }

    void OnDestroy()
    {
        if (EconomyManager.Instance != null)
        {
            EconomyManager.Instance.OnCoinsChanged.RemoveListener(UpdateCoinsDisplay);
        }
    }
}