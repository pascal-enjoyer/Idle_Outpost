using UnityEngine;
using System.Collections;

public class ShootingPostAction : MonoBehaviour, IPointOfInterestAction
{
    [SerializeField] private float shootInterval = 2f;
    [SerializeField] private float shootRange = 10f;
    [SerializeField] private float shootAnimationDuration = 1f; // Длительность анимации Shoot
    private MonoBehaviour owner;
    private bool isShooting;
    private Coroutine shootingCoroutine;

    public void Initialize(PlayerController player)
    {
        this.owner = player;
        isShooting = false;

        Animator animator = player.GetComponent<Animator>();
        if (animator == null)
        {
            Debug.LogWarning($"Owner {player.name} requires an Animator component for shooting animation on {gameObject.name}");
        }
        else
        {
            animator.Play("Idle");
            Debug.Log($"{player.name} initialized with Idle animation");
        }
    }

    public void InitializeNPC(NPC npc)
    {
        this.owner = npc;
        isShooting = false;

        Animator animator = npc.GetComponent<Animator>();
        if (animator == null)
        {
            Debug.LogWarning($"NPC {npc.name} requires an Animator component for shooting animation on {gameObject.name}");
        }
        else
        {
            animator.Play("Idle");
            Debug.Log($"{npc.name} initialized with Idle animation");
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
            Debug.Log($"Starting shooting action for {player.name} at {gameObject.name}");
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
            Debug.Log($"Starting shooting action for NPC {npc.name} at {gameObject.name}");
            StartShooting();
        }
    }

    public bool IsPerformingAction()
    {
        return isShooting;
    }

    public void InterruptAction(PlayerController player)
    {
        if (owner != player)
        {
            Debug.LogWarning($"ShootingPostAction on {gameObject.name} cannot be interrupted by {player.name}");
            return;
        }
        if (isShooting && shootingCoroutine != null)
        {
            owner.StopCoroutine(shootingCoroutine);
            isShooting = false;
            shootingCoroutine = null;

            Animator animator = owner.GetComponent<Animator>();
            if (animator != null)
            {
                animator.Play("Idle");
                Debug.Log($"{player.name} switched to Idle animation on interrupt");
            }

            player.SetState(PlayerController.PlayerState.Idle);
            Debug.Log($"Shooting action interrupted for {player.name} at {gameObject.name}");
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

        while (isShooting)
        {
            if (enemyManager == null)
            {
                Debug.LogWarning("EnemyManager not found, cannot shoot");
                isShooting = false;
                if (animator != null)
                {
                    animator.Play("Idle");
                    Debug.Log($"{owner.name} switched to Idle animation: no EnemyManager");
                }
                yield break;
            }

            Enemy target = enemyManager.GetClosestEnemyByY(owner.transform.position, shootRange);
            if (target != null)
            {
                if (animator != null)
                {
                    AnimatorStateInfo stateInfo = animator.GetCurrentAnimatorStateInfo(0);
                    if (!stateInfo.IsName("Shoot"))
                    {
                        animator.Play("Shoot");
                        Debug.Log($"{owner.name} playing Shoot animation at {target.gameObject.name}");
                    }
                }
                target.Die();
                enemyManager.RemoveEnemy(target);

                yield return new WaitForSeconds(shootAnimationDuration);
                if (animator != null && isShooting)
                {
                    animator.Play("Idle");
                    Debug.Log($"{owner.name} switched to Idle animation after Shoot");
                }
            }
            else
            {
                if (animator != null)
                {
                    animator.Play("Idle");
                    Debug.Log($"{owner.name} playing Idle animation: no enemies within range");
                }
            }

            float remainingTime = shootInterval - (target != null ? shootAnimationDuration : 0f);
            if (remainingTime > 0)
            {
                yield return new WaitForSeconds(remainingTime);
            }
        }
    }
}