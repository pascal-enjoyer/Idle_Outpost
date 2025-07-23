using System.Collections;
using Audio;
using Characters;
using DefaultNamespace;
using DG.Tweening;
using Extensions;
using GameResources;
using TMPro;
using UnityEngine;

namespace Conveyors
{
    public class InteractiveConveyorUnlockPoint : InteractiveConveyorPoint
    {
        [SerializeField] private GameObject _toUnlock;
        [SerializeField] private GameObject _lockObject;
        [SerializeField] private GameObject _highlightObject;
        [SerializeField] private MaskedFillBar _fillBar;
        [SerializeField] private TMP_Text _costText;
        [SerializeField] private int _cost = 10;
        [SerializeField] private ZombieManager _zombieManager;
        [SerializeField] private AudioClip _sound;
        [SerializeField] private Mason _mason;

        private int _currentCost;
        private bool _unlocked;
        private bool _firstBulletProcessed;

        public bool ProcessedAtLeastOneBullet { get; private set; }

        private void Awake() =>
            _currentCost = _cost;

        public override void ProcessBullet(Bullet bullet)
        {
            if (_unlocked)
            {
                if (!_firstBulletProcessed)
                {
                    _firstBulletProcessed = true;
                    _mason.IncreaseShootingSpeed();
                    ProcessedAtLeastOneBullet = true;
                    _zombieManager.StopSpawn();
                }

                ProcessBulletByNextPoint(bullet);
                return;
            }

            _currentCost -= 1;
            bullet.Release();
            _fillBar.Render(1f - (float)_currentCost / _cost);
            _costText.SetText("{0}", _currentCost);
            if (_currentCost == 0)
            {
                StartCoroutine(Unlock());
            }
            else
            {
                Transform target = _lockObject.transform;
                target.DOComplete();

                Vector3 scale = target.localScale;
                DOTween.Sequence(target)
                    .Append(target.DOScale(scale * 0.8f, 0.2f))
                    .Append(target.DOScale(scale, 0.2f))
                    .SetEase(Ease.InOutSine);
            }
        }

        private IEnumerator Unlock()
        {
            _unlocked = true;
            yield return _lockObject.transform.DoPopDown().WaitForCompletion();
            _toUnlock.SetActive(true);
            AudioService.Instance.TryPlayEffect(_sound);
            yield return _toUnlock.transform.DoPopUp(targetScale: Vector3.one, fromZero: true).WaitForCompletion();
            _lockObject.SetActive(false);
        }
    }
}