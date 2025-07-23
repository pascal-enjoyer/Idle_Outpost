using System.Collections;
using Audio;
using Characters;
using Extensions;
using Luna.Unity;
using PackShots;
using SpriteVfx;
using UnityEngine;

public class GameEnd : MonoBehaviour
{
    [SerializeField] private ZombieTransition _zombieTransition;
    [SerializeField] private PackShotChooser _packShot;
    [SerializeField] private Transform _explosionPoint;
    [SerializeField] private GameObject _borderToDisable;
    [SerializeField] private GameObject _borderToEnable;
    [SerializeField] private Transform[] _zombieSpawnPoints;
    [SerializeField] private Transform[] _toDisable;
    [SerializeField] private FailZombie _failZombiePrefab;
    [SerializeField] private ZombieMason _masonZombie;
    [SerializeField] private Transform _masonBitePoint;
    [SerializeField] private Glen _glen;
    [SerializeField] private AudioClip _explosionSound;
    [SerializeField] private AudioClip _failSound;

    public void Win()
    {
        LifeCycle.GameEnded();
        for (var i = 0; i < _toDisable.Length; i++)
            _toDisable[i].DoPopDown();
        _packShot.Show();
    }

    public void Fail()
    {
        LifeCycle.GameEnded();
        _glen.Disable();
        for (var i = 0; i < _toDisable.Length; i++)
            _toDisable[i].DoPopDown();

        StartCoroutine(FailRoutine());
    }

    private IEnumerator FailRoutine()
    {
        SpriteVfxService.Instance.Spawn(SpriteVfxType.Explosion, _explosionPoint.position);
        AudioService.Instance.TryPlayEffect(_explosionSound);
        AudioService.Instance.TryPlayEffect(_failSound);
        yield return new WaitForSeconds(0.1f);
        _borderToDisable.SetActive(false);
        _borderToEnable.SetActive(true);

        var waitSpawnDelay = new WaitForSeconds(0.3f);
        for (var i = 0; i < 15; i++)
        {
            Vector3 position = Vector3.Lerp(_zombieSpawnPoints[0].position, _zombieSpawnPoints[1].position, Random.value);
            FailZombie zombie = Instantiate(_failZombiePrefab, position, Quaternion.identity);
            if (i == 0)
            {
                StartCoroutine(zombie.AnimateMasonBite(_masonZombie, _masonBitePoint));
                yield return new WaitForSeconds(0.5f);
            }

            yield return waitSpawnDelay;
        }

        _zombieTransition.ShowTransition();
    }
}