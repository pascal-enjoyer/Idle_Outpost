using UnityEngine;
using System.Collections;

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
        StartCoroutine(InitializeAtStartPointDelayed());
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
                    // ���������� �������� PerformAction, ����� ������������ � ������������ ��������
                    currentPoint.PerformAction(this);
                    Debug.Log($"Player performing action at {currentPoint.name}, IsPerformingAction: {currentPoint.IsPerformingAction()}");
                }
                else
                {
                    Debug.LogWarning("No current point assigned while in PerformingAction state");
                    SetState(PlayerState.Idle);
                }
                break;
        }

        // �������� ����� ��� ���������� ��������
        if (Input.GetKeyDown(KeyCode.E) && currentState == PlayerState.PerformingAction && currentPoint != null)
        {
            InterruptCurrentAction();
        }
    }

    private IEnumerator InitializeAtStartPointDelayed()
    {
        // ���� ����� �����, ����� ��� PointOfInterest ������ ������������������
        yield return new WaitForEndOfFrame();

        // ������� ��������� ����� ��������, �� ������� NPC
        PointOfInterest startPoint = RouteManager.Instance.FindCurrentPoint(transform.position);
        if (startPoint != null)
        {
            // ��������� ���������� ������ � characterPosition �����
            Vector2 startPos = startPoint.characterPosition != null
                ? startPoint.characterPosition.position
                : startPoint.transform.position;
            transform.position = startPos;
            currentPoint = startPoint;
            SetCurrentPoint(startPoint);

            // ���� ����� ������������ �������� (WaterStation ��� ShootingPost), �������� ���
            if (startPoint.pointType == PointOfInterest.PointType.WaterStation ||
                startPoint.pointType == PointOfInterest.PointType.ShootingPost)
            {
                SetState(PlayerState.PerformingAction);
                startPoint.PerformAction(this);
                Debug.Log($"Player instantly moved to {startPoint.name} at {startPos} and started action, state: {currentState}");
            }
            else
            {
                SetState(PlayerState.Idle);
                Debug.Log($"Player instantly moved to {startPoint.name} at {startPos}, no action available, state: {currentState}");
            }
        }
        else
        {
            Debug.LogWarning("No available PointOfInterest found near player position: " + transform.position);
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
            Debug.Log("Current action was interrupted by player");
        }
    }

    public bool IsMoving()
    {
        return currentState == PlayerState.Moving;
    }

    public bool IsBusy()
    {
        return IsMoving() || (currentState == PlayerState.PerformingAction && currentPoint != null);
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
        Debug.Log($"Set route to {point.name}, current point: {(currentPoint != null ? point.name : "none")}");
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

    public PlayerState GetCurrentState()
    {
        return currentState;
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
                targetPoint.PerformAction(this);
                Debug.Log($"Player arrived at {targetPoint.name} and started action");
            }
            else
            {
                SetState(PlayerState.Idle);
                currentPoint = null;
                Debug.Log($"Player arrived at {targetPoint.name}, no action available");
            }
        }
        else
        {
            SetState(PlayerState.Idle);
            currentPoint = null;
            Debug.Log("Player arrived at destination, no target point assigned");
        }

        currentRoute = null;
        targetPoint = null;
    }
}