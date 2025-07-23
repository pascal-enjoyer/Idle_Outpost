using UnityEngine;

public class WaterBottle : MonoBehaviour
{
    private Vector2 targetPosition;
    private float moveSpeed = 10f;
    private bool isMoving = false;

    public void MoveToTarget(Vector2 target)
    {
        targetPosition = target;
        isMoving = true;
        //Debug.Log($"Water bottle moving to target: {target}");
    }

    void Update()
    {
        if (isMoving)
        {
            transform.position = Vector2.MoveTowards(transform.position, targetPosition, moveSpeed * Time.deltaTime);
            if (Vector2.Distance(transform.position, targetPosition) < 0.01f)
            {
                //Debug.Log("Water bottle reached target, destroying");
                Destroy(gameObject);
            }
        }
    }
}