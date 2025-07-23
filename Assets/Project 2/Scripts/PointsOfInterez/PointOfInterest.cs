using UnityEngine;

public class PointOfInterest : MonoBehaviour
{
    public enum PointType
    {
        WaterStation,
        ShootingPost
    }

    public PointType pointType;
    public Transform characterPosition;
    public Transform npcPosition;
    private IPointOfInterestAction pointAction;
    private PlayerController player;
    private NPC npc;

    void Start()
    {
        player = FindObjectOfType<PlayerController>();
        pointAction = GetComponent<IPointOfInterestAction>();
        if (GetComponent<Collider2D>() == null)
        {
            Debug.LogWarning($"PointOfInterest {name} requires a Collider2D");
        }
        if (characterPosition == null)
        {
            Debug.LogWarning($"PointOfInterest {name} of type {pointType} should have a characterPosition assigned");
        }
        if (npcPosition == null)
        {
            Debug.LogWarning($"PointOfInterest {name} of type {pointType} should have an npcPosition assigned");
        }
        if (pointType != PointType.WaterStation && pointType != PointType.ShootingPost)
        {
            Debug.LogWarning($"PointOfInterest {name} has unsupported pointType: {pointType}");
        }
        if (pointAction != null && player != null)
        {
            pointAction.Initialize(player);
            Debug.Log($"Initialized IPointOfInterestAction for {name}");
        }
        else
        {
            Debug.LogWarning($"Failed to initialize IPointOfInterestAction for {name}: pointAction = {(pointAction == null ? "null" : "found")}, player = {(player == null ? "null" : "found")}");
        }
    }

    public void InterruptAction(PlayerController player)
    {
        if (pointAction != null)
        {
            pointAction.InterruptAction(player);
            Debug.Log($"Interrupted action for player at {name}");
        }
    }

    void OnMouseDown()
    {
        Vector2 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        RaycastHit2D hit = Physics2D.Raycast(mousePos, Vector2.zero, 0f, LayerMask.GetMask("PurchaseButton"));
        if (hit.collider != null && hit.collider.GetComponent<NPCPurchaseButton>() != null)
        {
            Debug.Log($"Click on {name} ignored: hit NPCPurchaseButton");
            return;
        }

        if (npc != null)
        {
            Debug.Log($"PointOfInterest {name} is occupied by NPC, ignoring click");
            return;
        }
        if (player == null || player.IsMoving())
        {
            Debug.Log("Click ignored: Player is busy or not found");
            return;
        }

        PointOfInterest currentPoint = player.GetCurrentPoint();
        if (currentPoint == this)
        {
            Debug.Log($"Player is already at {name}, no movement needed");
            return;
        }

        if (player.GetCurrentPoint() != null && player.GetCurrentPoint().IsPerformingAction())
        {
            player.InterruptCurrentAction();
        }

        Route route = RouteManager.Instance.GetRouteToPoint(this, currentPoint);
        if (route != null)
        {
            player.SetRoute(route, this, currentPoint);
        }
    }

    public void PerformAction(PlayerController player)
    {
        if (npc != null)
        {
            Debug.Log($"PointOfInterest {name} is occupied by NPC, player cannot perform action");
            player.SetState(PlayerController.PlayerState.Idle);
            return;
        }
        if (pointAction == null)
        {
            Debug.LogWarning($"No IPointOfInterestAction component found on {name}");
            player.SetState(PlayerController.PlayerState.Idle);
            return;
        }

        Debug.Log($"Player starting action at {name} with pointType {pointType}");
        pointAction.PerformAction(player);
    }

    public bool IsPerformingAction()
    {
        return pointAction != null && pointAction.IsPerformingAction();
    }

    public void AssignNPC(NPC newNPC)
    {
        npc = newNPC;
        if (npc != null)
        {
            Debug.Log($"NPC assigned to PointOfInterest {name}");
            npc.Initialize(this);
            npc.PerformAction();
        }
    }

    public bool HasNPC()
    {
        return npc != null;
    }
}