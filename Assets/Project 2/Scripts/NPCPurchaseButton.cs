using UnityEngine;

public class NPCPurchaseButton : MonoBehaviour
{
    [SerializeField] private PointOfInterest assignedPoint;
    [SerializeField] private GameObject npcPrefab;
    [SerializeField] private Sprite activeSprite; 
    [SerializeField] private Sprite inactiveSprite;
    private SpriteRenderer spriteRenderer;

    void Start()
    {
        spriteRenderer = GetComponent<SpriteRenderer>();
        if (spriteRenderer == null)
        {
            Debug.LogError($"NPCPurchaseButton {name} requires a SpriteRenderer");
        }
        if (assignedPoint == null)
        {
            Debug.LogError($"NPCPurchaseButton {name} requires an assigned PointOfInterest");
        }
        if (npcPrefab == null)
        {
            Debug.LogError($"NPCPurchaseButton {name} requires an npcPrefab");
        }
        if (activeSprite == null || inactiveSprite == null)
        {
            Debug.LogError($"NPCPurchaseButton {name} requires activeSprite and inactiveSprite");
        }
        if (EconomyManager.Instance == null)
        {
            Debug.LogError("EconomyManager not found");
            return;
        }

        EconomyManager.Instance.OnCoinsChanged.AddListener(UpdateButtonState);
        UpdateButtonState(EconomyManager.Instance.GetCoins());
    }

    void OnMouseDown()
    {
        if (assignedPoint.HasNPC())
        {
            Debug.Log($"PointOfInterest {assignedPoint.name} already has an NPC");
            return;
        }
        if (EconomyManager.Instance.TryPurchaseNPC(npcPrefab, assignedPoint.npcPosition.position, assignedPoint.transform))
        {
            NPC npc = FindObjectOfType<NPC>();
            if (npc != null)
            {
                npc.Initialize(assignedPoint);
                gameObject.SetActive(false); 
                Debug.Log($"NPC purchased and initialized at {assignedPoint.name}");
            }
        }
    }

    private void UpdateButtonState(int coins)
    {
        bool canAfford = coins >= EconomyManager.Instance.NPCCost && !assignedPoint.HasNPC();
        spriteRenderer.sprite = canAfford ? activeSprite : inactiveSprite;
        Debug.Log($"NPCPurchaseButton: Can afford NPC = {canAfford}, Coins = {coins}");
    }

    void OnDestroy()
    {
        if (EconomyManager.Instance != null)
        {
            EconomyManager.Instance.OnCoinsChanged.RemoveListener(UpdateButtonState);
        }
    }
}