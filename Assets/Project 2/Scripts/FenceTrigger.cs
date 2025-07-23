using UnityEngine;

public class FenceTrigger : MonoBehaviour
{
    private Fence fence;

    void Start()
    {
        fence = GetComponentInParent<Fence>();
        if (fence == null)
        {
            Debug.LogError($"FenceTrigger {name} must be a child of a GameObject with Fence component");
        }

        Collider2D collider = GetComponent<Collider2D>();
        if (collider == null)
        {
            Debug.LogError($"FenceTrigger {name} requires a Collider2D");
        }
        else if (!collider.isTrigger)
        {
            Debug.LogError($"FenceTrigger {name} Collider2D must be set to IsTrigger");
        }
    }

    void OnTriggerEnter2D(Collider2D other)
    {
        Enemy enemy = other.GetComponent<Enemy>();
        if (enemy != null)
        {
            fence.OnTriggerEnemyEnter(enemy);
        }
    }

    void OnTriggerExit2D(Collider2D other)
    {
        Enemy enemy = other.GetComponent<Enemy>();
        if (enemy != null)
        {
            fence.OnTriggerEnemyExit(enemy);
        }
    }
}