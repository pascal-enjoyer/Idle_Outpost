using UnityEngine;
using System.Collections.Generic;

public class RouteManager : MonoBehaviour
{
    public static RouteManager Instance;

    [System.Serializable]
    public class RouteDefinition
    {
        public PointOfInterest targetPoint;
        public List<Transform> pathPoints;
    }

    [SerializeField] private List<RouteDefinition> routes;

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
        PlayerController player = FindObjectOfType<PlayerController>();
        if (player == null)
        {
            Debug.LogError("PlayerController not found during initialization");
            return;
        }

        PointOfInterest startPoint = FindCurrentPoint(player.transform.position);
        if (startPoint != null)
        {
            Vector2 startPos = startPoint.characterPosition != null
                ? startPoint.characterPosition.position
                : startPoint.transform.position;
            player.transform.position = startPos;
            player.SetCurrentPoint(startPoint);
            Debug.Log($"Player instantly moved to closest point: {startPoint.name} at position {startPos}");
        }
        else
        {
            Debug.LogWarning("No PointOfInterest found near player position: " + player.transform.position);
        }
    }

    public PointOfInterest FindCurrentPoint(Vector2 position)
    {
        PointOfInterest closestPoint = null;
        float minDistance = float.MaxValue;

        foreach (RouteDefinition routeDef in routes)
        {
            if (routeDef.targetPoint != null && !routeDef.targetPoint.HasNPC())
            {
                Vector2 pointPos = routeDef.targetPoint.characterPosition != null
                    ? routeDef.targetPoint.characterPosition.position
                    : routeDef.targetPoint.transform.position;
                float distance = Vector2.Distance(position, pointPos);
                if (distance < minDistance)
                {
                    minDistance = distance;
                    closestPoint = routeDef.targetPoint;
                }
            }
        }

        if (closestPoint != null)
        {
            Debug.Log($"Found closest point: {closestPoint.name} at distance {minDistance} from position {position}");
            return closestPoint;
        }

        Debug.Log("No available PointOfInterest found for position: " + position);
        return null;
    }

    public Route GetRouteToPoint(PointOfInterest targetPoint, PointOfInterest currentPoint)
    {
        if (targetPoint.HasNPC())
        {
            Debug.Log($"Cannot build route to {targetPoint.name}: occupied by NPC");
            return null;
        }

        PlayerController player = FindObjectOfType<PlayerController>();
        if (player == null)
        {
            Debug.LogError("PlayerController not found");
            return null;
        }

        Vector2 playerPos = player.transform.position;
        Vector2 targetPos = targetPoint.characterPosition != null ? targetPoint.characterPosition.position : targetPoint.transform.position;
        Debug.Log($"Building route from {playerPos} to {targetPoint.name} (targetPos: {targetPos})");

        PointOfInterest effectiveCurrentPoint = currentPoint ?? FindCurrentPoint(playerPos);

        if (effectiveCurrentPoint == targetPoint)
        {
            Debug.Log($"Player is already at {targetPoint.name}, no route needed");
            return new Route(new Vector2[] { playerPos });
        }

        RouteDefinition targetRouteDef = routes.Find(r => r.targetPoint == targetPoint);
        if (targetRouteDef == null)
        {
            Debug.LogWarning($"No route defined for target point {targetPoint.name}");
            return new Route(new Vector2[] { playerPos, targetPos });
        }

        List<Vector2> path = new List<Vector2>();

        if (effectiveCurrentPoint != null)
        {
            RouteDefinition currentRouteDef = routes.Find(r => r.targetPoint == effectiveCurrentPoint);
            if (currentRouteDef != null && currentRouteDef.pathPoints != null && currentRouteDef.pathPoints.Count > 0)
            {
                Debug.Log($"Adding {currentRouteDef.pathPoints.Count} pathPoints for current point {effectiveCurrentPoint.name}");
                for (int i = 0; i < currentRouteDef.pathPoints.Count; i++)
                {
                    if (currentRouteDef.pathPoints[i] != null)
                    {
                        path.Add(currentRouteDef.pathPoints[i].position);
                        Debug.Log($"Added current point pathPoint[{i}]: {currentRouteDef.pathPoints[i].position}");
                    }
                    else
                    {
                        Debug.LogWarning($"Null pathPoint at index {i} for current point {effectiveCurrentPoint.name}");
                    }
                }
            }
            else
            {
                Debug.Log($"No pathPoints for current point {effectiveCurrentPoint.name}");
            }
        }

        if (path.Count == 0)
        {
            Debug.Log("Starting route from player position: " + playerPos);
            path.Add(playerPos);
        }

        if (targetRouteDef.pathPoints != null && targetRouteDef.pathPoints.Count > 0)
        {
            Debug.Log($"Adding {targetRouteDef.pathPoints.Count} pathPoints for target point {targetPoint.name}");
            for (int i = targetRouteDef.pathPoints.Count - 1; i >= 0; i--)
            {
                if (targetRouteDef.pathPoints[i] != null)
                {
                    path.Add(targetRouteDef.pathPoints[i].position);
                    Debug.Log($"Added target point pathPoint[{i}]: {targetRouteDef.pathPoints[i].position}");
                }
                else
                {
                    Debug.LogWarning($"Null pathPoint at index {i} for target point {targetPoint.name}");
                }
            }
        }

        path.Add(targetPos);
        Debug.Log($"Added target position: {targetPos}");

        Debug.Log("Final Route: " + string.Join(" -> ", path));
        return new Route(path.ToArray());
    }
}