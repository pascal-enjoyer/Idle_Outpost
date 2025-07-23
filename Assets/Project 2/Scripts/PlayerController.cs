using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public enum PlayerState
    {
        Idle,
        Moving,
        PerformingAction,
        Shooting
    }

    public float moveSpeed = 5f;
    private PlayerState currentState = PlayerState.Idle;
    private Vector2 targetPosition;
    private Route currentRoute;
    private int currentPointIndex;
    public int CurrentPointIndex { get => currentPointIndex; }
    private PointOfInterest targetPoint;
    private PointOfInterest currentPoint;
    private Animator animator;

    void Start()
    {
        animator = GetComponent<Animator>();
        if (animator == null)
        {
            Debug.LogWarning("Player requires an Animator component for animations");
        }
        InitializeAtStartPoint();
    }

    void Update()
    {
        switch (currentState)
        {
            case PlayerState.Moving:
                MoveToTarget();
                break;
            case PlayerState.PerformingAction:
                if (currentPoint != null)
                {
                    currentPoint.PerformAction(this);
                }
                else
                {
                    SetState(PlayerState.Idle);
                }
                break;
        }
    }

    private void InitializeAtStartPoint()
    {
        if (currentPoint != null)
        {
            if (currentPoint.pointType == PointOfInterest.PointType.WaterStation ||
                currentPoint.pointType == PointOfInterest.PointType.ShootingPost)
            {
                SetState(PlayerState.PerformingAction);
            }
            Debug.Log($"Player initialized at point: {currentPoint.name}, state: {currentState}");
        }
        else
        {
            Debug.LogWarning("Player not initialized at any PointOfInterest");
            SetState(PlayerState.Idle);
        }
    }

    public void InterruptCurrentAction()
    {
        if (currentState == PlayerState.PerformingAction && currentPoint != null)
        {
            StopAllCoroutines();

            currentPoint.InterruptAction(this);

            SetState(PlayerState.Idle);
            currentPoint = null;

            Debug.Log("Current action was interrupted");
        }
    }

    public bool IsMoving()
    {
        return currentState == PlayerState.Moving;
    }
    public bool IsBusy()
    {
        return IsMoving() || (currentState == PlayerState.PerformingAction && currentPoint != null && currentPoint.IsPerformingAction());
    }

    public void SetRoute(Route route, PointOfInterest point, PointOfInterest current = null)
    {
        if (route == null || route.Points.Length == 0)
        {
            Debug.LogWarning("Invalid route");
            return;
        }

        if (currentState == PlayerState.PerformingAction)
        {
            InterruptCurrentAction();
        }

        currentRoute = route;
        currentPointIndex = 0;
        targetPosition = currentRoute.Points[0];
        targetPoint = point;
        currentPoint = current ?? RouteManager.Instance.FindCurrentPoint(transform.position);
        Debug.Log($"Set route to {point.name}, current point: {(currentPoint != null ? currentPoint.name : "none")}");
        SetState(PlayerState.Moving);
    }

    public PointOfInterest GetCurrentPoint()
    {
        return currentPoint;
    }

    public void SetCurrentPoint(PointOfInterest point)
    {
        currentPoint = point;
        Debug.Log($"Current point set to: {(point != null ? point.name : "none")}");
    }

    public void SetState(PlayerState newState)
    {
        if (currentState != newState)
        {
            currentState = newState;
            Debug.Log($"Player state changed to: {newState}");
        }
    }

    private void MoveToTarget()
    {
        Vector2 currentPos = transform.position;
        float step = moveSpeed * Time.deltaTime;
        transform.position = Vector2.MoveTowards(currentPos, targetPosition, step);

        if (Vector2.Distance(currentPos, targetPosition) < 0.01f)
        {
            currentPointIndex++;
            if (currentPointIndex >= currentRoute.Points.Length)
            {
                ArrivedAtDestination();
            }
            else
            {
                targetPosition = currentRoute.Points[currentPointIndex];
            }
        }
    }

    private void ArrivedAtDestination()
    {
        if (targetPoint != null && targetPoint.characterPosition != null)
        {
            transform.position = targetPoint.characterPosition.position;
        }

        if (targetPoint != null)
        {
            if (targetPoint.pointType == PointOfInterest.PointType.WaterStation ||
                targetPoint.pointType == PointOfInterest.PointType.ShootingPost)
            {
                SetState(PlayerState.PerformingAction);
                currentPoint = targetPoint;
            }
            else
            {
                SetState(PlayerState.Idle);
                currentPoint = null;
            }
        }
        else
        {
            SetState(PlayerState.Idle);
            currentPoint = null;
        }

        currentRoute = null;
        targetPoint = null;
    }
}