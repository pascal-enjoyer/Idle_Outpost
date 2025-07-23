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
    [SerializeField] private PlayerController player;
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
        if (pointAction != null)
        {
            pointAction.Initialize(player);
        }
    }

    public void InterruptAction(PlayerController player)
    {
        if (pointAction != null)
        {
            pointAction.InterruptAction(player);
        }
    }

    void OnMouseDown()
    {
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
        if (pointAction != null)
        {
            pointAction.PerformAction(player);
        }
        else
        {
            Debug.LogWarning($"No IPointOfInterestAction component found on {name}");
            player.SetState(PlayerController.PlayerState.Idle);
        }
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
        }
    }

    public bool HasNPC()
    {
        return npc != null;
    }
}