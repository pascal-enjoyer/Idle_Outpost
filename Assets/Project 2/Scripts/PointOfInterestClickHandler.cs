using UnityEngine;

public class PointOfInterestClickHandler : MonoBehaviour
{
    private PointOfInterest pointOfInterest;
    private PlayerController player;

    void Awake()
    {
        pointOfInterest = GetComponent<PointOfInterest>();
        if (pointOfInterest == null)
        {
            Debug.LogError($"PointOfInterestClickHandler on {gameObject.name} requires a PointOfInterest component");
        }
    }

    void Start()
    {
        player = FindObjectOfType<PlayerController>();
        if (player == null)
        {
            Debug.LogError("PlayerController not found in the scene");
        }
    }

    void OnMouseDown()
    {
        if (player == null || pointOfInterest == null)
        {
            Debug.LogWarning("Cannot handle click: Player or PointOfInterest is missing");
            return;
        }

        if (pointOfInterest.HasNPC())
        {
            Debug.Log($"PointOfInterest {pointOfInterest.name} is occupied by NPC, ignoring click");
            return;
        }

        PointOfInterest currentPoint = player.GetCurrentPoint();
        if (currentPoint == pointOfInterest)
        {
            Debug.Log($"Player is already at {pointOfInterest.name}");
            return;
        }

        // ѕрерываем текущее действие, если игрок зан€т
        if (player.IsBusy())
        {
            if (player.GetCurrentState() == PlayerController.PlayerState.PerformingAction)
            {
                player.InterruptCurrentAction();
                Debug.Log($"Player action interrupted to move to {pointOfInterest.name}");
            }
            else
            {
                Debug.Log($"Player is busy (moving), cannot move to {pointOfInterest.name}");
                return;
            }
        }

        Route route = RouteManager.Instance.GetRouteToPoint(currentPoint, pointOfInterest);
        if (route != null)
        {
            player.SetRoute(route, pointOfInterest, currentPoint);
            Debug.Log($"Player moving to {pointOfInterest.name} via route with {route.Points.Length} points");
        }
        else
        {
            Debug.LogWarning($"No route found from {(currentPoint != null ? currentPoint.name : "unknown")} to {pointOfInterest.name}");
        }
    }
}