using UnityEngine;
using System.Collections.Generic;

public class Fence : MonoBehaviour
{
    [SerializeField] private int maxEnemiesToBreak = 5;
    [SerializeField] private int minEnemiesTouching = 5;
    [SerializeField] private GameObject triggerColliderObject;
    private List<Enemy> touchingEnemies = new List<Enemy>();
    private List<Enemy> enemiesInTrigger = new List<Enemy>();

    void Start()
    {
        Collider2D physicalCollider = GetComponent<Collider2D>();
        if (physicalCollider == null)
        {
            Debug.LogError($"Fence {name} requires a Collider2D");
        }
        else if (physicalCollider.isTrigger)
        {
            Debug.LogError($"Fence {name} physical Collider2D should not be set to IsTrigger");
        }



        if (triggerColliderObject == null)
        {
            Debug.LogError($"Fence {name} requires a triggerColliderObject assigned");
        }
        else
        {
            Collider2D triggerCollider = triggerColliderObject.GetComponent<Collider2D>();
            if (triggerCollider == null)
            {
                Debug.LogError($"triggerColliderObject on {name} requires a Collider2D");
            }
            else if (!triggerCollider.isTrigger)
            {
                Debug.LogError($"triggerColliderObject on {name} Collider2D must be set to IsTrigger");
            }
        }
    }

    void OnCollisionEnter2D(Collision2D collision)
    {
        Enemy enemy = collision.gameObject.GetComponent<Enemy>();
        if (enemy != null && !touchingEnemies.Contains(enemy))
        {
            touchingEnemies.Add(enemy);
            Debug.Log($"Enemy {enemy.gameObject.name} touched fence {name}. Total touching: {touchingEnemies.Count}");
            CheckForDestruction();
        }
        else
        {
            Debug.Log($"Collision detected with {collision.gameObject.name}, but no Enemy component or already in list");
        }
    }

    void OnCollisionExit2D(Collision2D collision)
    {
        Enemy enemy = collision.gameObject.GetComponent<Enemy>();
        if (enemy != null && touchingEnemies.Contains(enemy))
        {
            touchingEnemies.Remove(enemy);
            Debug.Log($"Enemy {enemy.gameObject.name} stopped touching fence {name}. Total touching: {touchingEnemies.Count}");
        }
    }

    public void OnTriggerEnemyEnter(Enemy enemy)
    { // если будут проблемы то передавать не enemy а Gameobject и проверять есть ли уже в списке (если проверять enemy то всегда true)
        if (enemy != null)
        {
            enemiesInTrigger.Add(enemy);
            Debug.Log($"Enemy {enemy.gameObject.name} entered trigger zone of fence {name}. Total in trigger: {enemiesInTrigger.Count}");
            CheckForDestruction();
        }
        else
        {
            Debug.Log("NIGA");
        }
    }

    public void OnTriggerEnemyExit(Enemy enemy)
    {
        if (enemy != null && enemiesInTrigger.Contains(enemy))
        {
            enemiesInTrigger.Remove(enemy);
            Debug.Log($"Enemy {enemy.gameObject.name} exited trigger zone of fence {name}. Total in trigger: {enemiesInTrigger.Count}");
        }
    }

    private void CheckForDestruction()
    {
        if (touchingEnemies.Count >= minEnemiesTouching && enemiesInTrigger.Count >= maxEnemiesToBreak)
        {
            Debug.Log($"Fence {name} destroyed: {touchingEnemies.Count} enemies touching (min {minEnemiesTouching}), {enemiesInTrigger.Count} enemies in trigger (min {maxEnemiesToBreak})");
            Destroy(gameObject);
        }
    }
}