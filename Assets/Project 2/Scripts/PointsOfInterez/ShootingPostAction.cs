using UnityEngine;
using System.Collections;

public class ShootingPostAction : MonoBehaviour, IPointOfInterestAction
{
    [SerializeField] private float shootInterval = 2f;
    [SerializeField] private float shootRange = 10f;
    private MonoBehaviour owner;
    private bool isShooting;
    private Coroutine shootingCoroutine;

    public void Initialize(PlayerController player)
    {
        this.owner = player;
        isShooting = false;

        if (player.GetComponent<Animator>() == null)
        {
            Debug.LogWarning($"Owner {player.name} requires an Animator component for shooting animation on {gameObject.name}");
        }
        StartShooting();
    }

    public void InitializeNPC(NPC npc)
    {
        this.owner = npc;
        isShooting = false;

        if (npc.GetComponent<Animator>() == null)
        {
            Debug.LogWarning($"NPC {npc.name} requires an Animator component for shooting animation on {gameObject.name}");
        }
        StartShooting();
    }

    public void PerformAction(PlayerController player)
    {
        if (owner != player)
        {
            Debug.LogWarning($"ShootingPostAction on {gameObject.name} is assigned to another owner");
            player.SetState(PlayerController.PlayerState.Idle);
            return;
        }
        if (!isShooting)
        {
            StartShooting();
        }
    }

    public void PerformActionNPC(NPC npc)
    {
        if (owner != npc)
        {
            Debug.LogWarning($"ShootingPostAction on {gameObject.name} is assigned to another owner");
            return;
        }
        if (!isShooting)
        {
            StartShooting();
        }
    }

    public bool IsPerformingAction()
    {
        return isShooting;
    }

    public void InterruptAction(PlayerController player)
    {
        if (isShooting && shootingCoroutine != null)
        {
            owner.StopCoroutine(shootingCoroutine);
            isShooting = false;

            Animator animator = owner.GetComponent<Animator>();
            if (animator != null)
            {
                animator.ResetTrigger("Shoot");
            }

            Debug.Log("Shooting action interrupted");
        }
    }

    private void StartShooting()
    {
        if (!isShooting)
        {
            shootingCoroutine = owner.StartCoroutine(Shoot());
        }
    }

    private IEnumerator Shoot()
    {
        isShooting = true;
        Animator animator = owner.GetComponent<Animator>();
        EnemyManager enemyManager = EnemyManager.Instance;

        while (true)
        {
            if (enemyManager == null)
            {
                Debug.LogWarning("EnemyManager not found, cannot shoot");
                isShooting = false;
                yield break;
            }

            Enemy target = enemyManager.GetClosestEnemyByY(owner.transform.position, shootRange);
            if (target != null)
            {
                if (animator != null)
                {
                    animator.SetTrigger("Shoot");
                    Debug.Log($"{owner.name} shooting at {target.gameObject.name}");
                }
                target.Die();
                enemyManager.RemoveEnemy(target);
            }
            else
            {
                Debug.Log("No enemies within range");
            }

            yield return new WaitForSeconds(shootInterval);
        }
    }
}