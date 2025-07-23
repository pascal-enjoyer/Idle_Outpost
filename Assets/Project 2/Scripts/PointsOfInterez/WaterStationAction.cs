using UnityEngine;
using System.Collections;

public class WaterStationAction : MonoBehaviour, IPointOfInterestAction
{
    public Transform waterPickupPoint;
    public Transform waterDeliveryPoint;
    public Transform waterTargetPoint;
    public GameObject waterPrefab;
    private MonoBehaviour owner;
    private GameObject currentWaterBottle;
    private enum WaterStationState
    {
        MovingToPickup,
        PickingUpWater,
        MovingToDelivery,
        DeliveringWater
    }
    private WaterStationState currentState = WaterStationState.MovingToPickup;
    private Vector2 targetPosition;

    public void Initialize(PlayerController player)
    {
        this.owner = player;
        if (waterPickupPoint == null || waterDeliveryPoint == null || waterTargetPoint == null)
        {
            Debug.LogWarning($"WaterStationAction on {gameObject.name} requires waterPickupPoint, waterDeliveryPoint, and waterTargetPoint assigned");
        }
        if (waterPrefab == null)
        {
            Debug.LogWarning($"WaterStationAction on {gameObject.name} requires waterPrefab assigned");
        }
        if (waterPickupPoint != null)
        {
            targetPosition = waterPickupPoint.position;
        }
        if (owner is NPC)
        {
            StartAction();
        }
    }

    public void InitializeNPC(NPC npc)
    {
        this.owner = npc;
        if (waterPickupPoint == null || waterDeliveryPoint == null || waterTargetPoint == null)
        {
            Debug.LogWarning($"WaterStationAction on {gameObject.name} requires waterPickupPoint, waterDeliveryPoint, and waterTargetPoint assigned");
        }
        if (waterPrefab == null)
        {
            Debug.LogWarning($"WaterStationAction on {gameObject.name} requires waterPrefab assigned");
        }
        if (waterPickupPoint != null)
        {
            targetPosition = waterPickupPoint.position;
        }
        StartAction();
    }

    public void PerformAction(PlayerController player)
    {
        if (owner != player)
        {
            Debug.LogWarning($"WaterStationAction on {gameObject.name} is assigned to another owner");
            player.SetState(PlayerController.PlayerState.Idle);
            return;
        }
        PerformActionInternal();
    }

    public void PerformActionNPC(NPC npc)
    {
        if (owner != npc)
        {
            Debug.LogWarning($"WaterStationAction on {gameObject.name} is assigned to another owner");
            return;
        }
        PerformActionInternal();
    }

    private void PerformActionInternal()
    {
        if (waterPickupPoint == null || waterDeliveryPoint == null || waterTargetPoint == null)
        {
            Debug.LogWarning($"Incomplete setup for WaterStationAction on {gameObject.name}");
            if (owner is PlayerController player2)
            {
                player2.SetState(PlayerController.PlayerState.Idle);
            }
            return;
        }

        Vector2 currentPos = owner.transform.position;
        float step = (owner is PlayerController player ? player.moveSpeed : (owner as NPC).MoveSpeed) * Time.deltaTime;

        switch (currentState)
        {
            case WaterStationState.MovingToPickup:
                owner.transform.position = Vector2.MoveTowards(currentPos, targetPosition, step);
                if (Vector2.Distance(currentPos, targetPosition) < 0.01f)
                {
                    currentState = WaterStationState.PickingUpWater;
                    if (waterPrefab != null)
                    {
                        currentWaterBottle = Instantiate(waterPrefab, owner.transform);
                        currentWaterBottle.transform.localPosition = Vector3.zero;
                    }
                    else
                    {
                        Debug.LogWarning($"No waterPrefab assigned for {gameObject.name}");
                    }
                    owner.StartCoroutine(PickupWaterDelay());
                }
                break;

            case WaterStationState.MovingToDelivery:
                owner.transform.position = Vector2.MoveTowards(currentPos, targetPosition, step);
                if (Vector2.Distance(currentPos, targetPosition) < 0.01f)
                {
                    currentState = WaterStationState.DeliveringWater;
                    if (currentWaterBottle != null && waterTargetPoint != null)
                    {
                        currentWaterBottle.transform.SetParent(null);
                        currentWaterBottle.transform.position = waterDeliveryPoint.position;
                        WaterBottle waterBottleScript = currentWaterBottle.GetComponent<WaterBottle>();
                        if (waterBottleScript != null)
                        {
                            waterBottleScript.MoveToTarget(waterTargetPoint.position);
                        }
                        else
                        {
                            Debug.LogWarning($"WaterBottle script missing on {currentWaterBottle.name}");
                            Destroy(currentWaterBottle);
                        }
                        currentWaterBottle = null;
                    }
                    owner.StartCoroutine(DeliverWaterDelay());
                }
                break;
        }
    }

    public bool IsPerformingAction()
    {
        return currentState == WaterStationState.MovingToPickup || currentState == WaterStationState.MovingToDelivery;
    }

    public void InterruptAction(PlayerController player)
    {
        if (owner != player)
        {
            return;
        }
        owner.StopAllCoroutines();
        if (currentWaterBottle != null)
        {
            Destroy(currentWaterBottle);
            currentWaterBottle = null;
        }
        currentState = WaterStationState.MovingToPickup;
        if (waterPickupPoint != null)
        {
            targetPosition = waterPickupPoint.position;
        }
        Debug.Log("Water station action interrupted");
    }

    private void StartAction()
    {
        if (!IsPerformingAction())
        {
            PerformActionInternal();
        }
    }

    private IEnumerator PickupWaterDelay()
    {
        yield return new WaitForSeconds(1f);
        currentState = WaterStationState.MovingToDelivery;
        if (waterDeliveryPoint != null)
        {
            targetPosition = waterDeliveryPoint.position;
        }
    }

    private IEnumerator DeliverWaterDelay()
    {
        if (EconomyManager.Instance != null)
        {
            EconomyManager.Instance.AddCoins(50);
        }
        else
        {
            Debug.LogWarning("EconomyManager not found, cannot add coins for water delivery");
        }
        yield return new WaitForSeconds(1f);
        currentState = WaterStationState.MovingToPickup;
        if (waterPickupPoint != null)
        {
            targetPosition = waterPickupPoint.position;
        }
        StartAction();
    }
}