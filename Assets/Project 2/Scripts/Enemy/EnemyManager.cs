using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class EnemyManager : MonoBehaviour
{
    public static EnemyManager Instance;

    [Header("Enemy Settings")]
    [SerializeField] private GameObject enemyPrefab;
    [SerializeField] private float spawnInterval = 5f;
    [SerializeField] private float delay = 10f;

    [Header("Spawn Area")]
    [SerializeField] private Transform spawnPointMin;
    [SerializeField] private Transform spawnPointMax;

    private List<Enemy> activeEnemies = new List<Enemy>();

    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }

    void Start()
    {
        if (enemyPrefab == null)
        {
            Debug.LogWarning("Enemy prefab not assigned in EnemyManager");
            return;
        }
        if (spawnPointMin == null || spawnPointMax == null)
        {
            Debug.LogWarning("Spawn points (spawnPointMin or spawnPointMax) not assigned in EnemyManager");
            return;
        }

        StartCoroutine(StartSpawningAfterDelay());
    }

    private IEnumerator StartSpawningAfterDelay()
    {
        yield return new WaitForSeconds(delay);
        StartCoroutine(SpawnEnemies());
    }

    private IEnumerator SpawnEnemies()
    {
        while (true)
        {
            Vector2 spawnPos = new Vector2(
                Random.Range(spawnPointMin.position.x, spawnPointMax.position.x),
                Random.Range(spawnPointMin.position.y, spawnPointMax.position.y)
            );
            GameObject enemyObj = Instantiate(enemyPrefab, spawnPos, Quaternion.identity);
            Enemy enemy = enemyObj.GetComponent<Enemy>();
            if (enemy == null)
            {
                enemy = enemyObj.AddComponent<Enemy>();
            }
            activeEnemies.Add(enemy);
            yield return new WaitForSeconds(spawnInterval);
        }
    }

    public Enemy GetClosestEnemyByY(Vector2 playerPosition, float range)
    {
        Enemy closestEnemy = null;
        float minY = float.MaxValue;

        foreach (Enemy enemy in activeEnemies)
        {
            if (enemy != null)
            {
                Vector2 enemyPos = enemy.transform.position;
                float distance = Vector2.Distance(playerPosition, enemyPos);
                if (distance <= range && enemyPos.y < minY)
                {
                    minY = enemyPos.y;
                    closestEnemy = enemy;
                }
            }
        }

        return closestEnemy;
    }

    public void RemoveEnemy(Enemy enemy)
    {
        if (activeEnemies.Remove(enemy))
        {
            Debug.Log($"Removed enemy: {enemy.gameObject.name}");
        }
    }
}