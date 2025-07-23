using UnityEngine;

public class NPC : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 5f;
    private PointOfInterest assignedPoint;
    private IPointOfInterestAction pointAction;

    public float MoveSpeed => moveSpeed;

    public void Initialize(PointOfInterest point)
    {
        assignedPoint = point;
        pointAction = point.GetComponent<IPointOfInterestAction>();
        if (pointAction == null)
        {
            Debug.LogWarning($"No IPointOfInterestAction found on {point.name}");
            return;
        }
        point.AssignNPC(this);
        pointAction.InitializeNPC(this);
        transform.position = point.npcPosition.position;
        Debug.Log($"NPC initialized at {point.name} at position {transform.position}");
    }

    public void PerformAction()
    {
        if (pointAction != null)
        {
            pointAction.PerformActionNPC(this);
        }
    }
}