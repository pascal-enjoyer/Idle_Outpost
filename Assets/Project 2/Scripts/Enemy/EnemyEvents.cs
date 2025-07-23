using UnityEngine;

public static class EnemyEvents
{
    public delegate void EnemyHitHandler(Enemy enemy);
    public static event EnemyHitHandler EnemyHit;

    public static void OnEnemyHit(Enemy enemy)
    {
        EnemyHit?.Invoke(enemy);
    }
}