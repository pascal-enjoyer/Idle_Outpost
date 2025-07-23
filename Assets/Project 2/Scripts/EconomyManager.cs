using UnityEngine;
using UnityEngine.Events;

public class EconomyManager : MonoBehaviour
{
    public static EconomyManager Instance;

    [SerializeField] private int startingCoins = 0;
    [SerializeField] private GameObject fencePrefab;
    [SerializeField] private Transform fenceParent;
    [SerializeField] private int fenceCost = 300;
    [SerializeField] private int npcCost = 200; 
    private int coins;

    public UnityEvent<int> OnCoinsChanged;
    public int FenceCost => fenceCost;
    public int NPCCost => npcCost;

    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }

    void Start()
    {
        coins = startingCoins;
        OnCoinsChanged.Invoke(coins);
        if (fencePrefab == null)
        {
            Debug.LogWarning("Fence prefab not assigned in EconomyManager");
        }
        if (fenceParent == null)
        {
            Debug.LogWarning("Fence parent not assigned in EconomyManager");
        }
    }

    public void AddCoins(int amount)
    {
        coins += amount;
        OnCoinsChanged.Invoke(coins);
        Debug.Log($"Added {amount} coins. Total coins: {coins}");
    }

    public bool TryPurchaseFence()
    {
        if (coins >= fenceCost)
        {
            if (fencePrefab != null && fenceParent != null)
            {
                coins -= fenceCost;
                Instantiate(fencePrefab, fenceParent);
                OnCoinsChanged.Invoke(coins);
                Debug.Log($"Fence purchased for {fenceCost} coins. Remaining coins: {coins}");
                return true;
            }
            else
            {
                Debug.LogWarning("Cannot spawn fence: fencePrefab or fenceParent not assigned");
                return false;
            }
        }
        else
        {
            Debug.Log($"Not enough coins to purchase fence. Need {fenceCost}, have {coins}");
            return false;
        }
    }

    public bool TryPurchaseNPC(GameObject npcPrefab, Vector3 position, Transform parent = null)
    {
        if (coins >= npcCost)
        {
            if (npcPrefab != null)
            {
                coins -= npcCost;
                Instantiate(npcPrefab, position, Quaternion.identity, parent);
                OnCoinsChanged.Invoke(coins);
                Debug.Log($"NPC purchased for {npcCost} coins. Remaining coins: {coins}");
                return true;
            }
            else
            {
                Debug.LogWarning("Cannot spawn NPC: npcPrefab not assigned");
                return false;
            }
        }
        else
        {
            Debug.Log($"Not enough coins to purchase NPC. Need {npcCost}, have {coins}");
            return false;
        }
    }

    public int GetCoins()
    {
        return coins;
    }
}