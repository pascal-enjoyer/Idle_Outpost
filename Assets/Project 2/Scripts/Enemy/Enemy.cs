using UnityEngine;

public class Enemy : MonoBehaviour
{
    private Animator animator;

    void Start()
    {
        animator = GetComponent<Animator>();
        if (animator == null)
        {
            Debug.LogWarning($"Enemy {name} requires an Animator component for death animation");
        }
        EnemyEvents.EnemyHit += OnHit;
    }

    void OnDestroy()
    {
        EnemyEvents.EnemyHit -= OnHit;
    }

    private void OnHit(Enemy enemy)
    {
        if (enemy == this)
        {
            if (animator != null)
            {
                animator.SetTrigger("Die");
                Debug.Log($"Enemy {name} hit, playing death animation");
                Destroy(gameObject, animator.GetCurrentAnimatorStateInfo(0).length);
            }
            else
            {
                Debug.Log($"Enemy {name} hit, no animator, destroying immediately");
                Destroy(gameObject);
            }
        }
    }

    public void Die()
    {
        EnemyEvents.OnEnemyHit(this);
    }
}