using UnityEngine;

public class NPCPurchaseButton : MonoBehaviour
{
    [SerializeField] private PointOfInterest assignedPoint;
    [SerializeField] private GameObject shootingPostNPCPrefab;
    [SerializeField] private GameObject waterStationNPCPrefab;
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
        if (shootingPostNPCPrefab == null || waterStationNPCPrefab == null)
        {
            Debug.LogError($"NPCPurchaseButton {name} requires both NPC prefabs assigned");
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
        if (assignedPoint == null || assignedPoint.HasNPC())
        {
            Debug.Log($"PointOfInterest {assignedPoint?.name} already has an NPC or is not assigned");
            return;
        }

        GameObject npcPrefab = assignedPoint.pointType == PointOfInterest.PointType.ShootingPost
            ? shootingPostNPCPrefab
            : waterStationNPCPrefab;

        if (EconomyManager.Instance.TryPurchaseNPC(npcPrefab, assignedPoint.npcPosition.position, assignedPoint.transform))
        {
            NPC npc = npcPrefab.GetComponent<NPC>();
            if (npc != null)
            {
                GameObject npcInstance = Instantiate(npcPrefab, assignedPoint.npcPosition.position, Quaternion.identity, assignedPoint.transform);
                npc = npcInstance.GetComponent<NPC>();
                assignedPoint.AssignNPC(npc);
                gameObject.SetActive(false);
                Debug.Log($"NPC purchased and initialized at {assignedPoint.name}");
            }
            else
            {
                Debug.LogError($"NPC prefab {npcPrefab.name} does not have an NPC component");
            }
        }
    }

    private void UpdateButtonState(int coins)
    {
        bool canAfford = coins >= EconomyManager.Instance.NPCCost && assignedPoint != null && !assignedPoint.HasNPC();
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