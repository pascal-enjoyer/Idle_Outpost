using System;
using Conveyors;
using DG.Tweening;
using Extensions;
using GameResources;
using Inputs;
using Pools;
using Sirenix.OdinInspector;
using SpriteVfx;
using UnityEngine;

namespace Characters
{
    public class Glen : MonoBehaviour
    {
        [SerializeField] private ConveyorSelector _selector;
        [SerializeField] private GlenAnimator _animator;
        [SerializeField] private Material _upgradeMaterial;
        [SerializeField] private float _moveSpeed = 1f;
        [SerializeField] private float _waitTime = 0.5f;
        [SerializeField] private ResourcePool _bulletPool;
        [SerializeField] private Transform _bulletPickupPoint;
        [SerializeField] private Transform _bulletSpawnPoint;
        [SerializeField] private Transform _bulletHoldingPoint;
        [SerializeField] private Storage _storage;

        private InteractiveConveyor _selectedConveyor;
        private Bullet _bullet;
        private GlenState _state;
        private bool _inTransition;
        private bool _stopped;

        private void Awake() =>
            _selector.Selected += OnConveyorSelected;

        private void OnDestroy()
        {
            _selector.Selected -= OnConveyorSelected;
            Color color = _upgradeMaterial.color;
            color.a = 0f;
            _upgradeMaterial.color = color;
        }

        private void Update()
        {
            if (_stopped)
                return;

            switch (_state)
            {
                case GlenState.Idle:
                    break;
                case GlenState.MovingToWarehouse:
                    MoveToWarehouse();
                    break;
                case GlenState.PickingUpBullet:
                    PickUpBullet();
                    break;
                case GlenState.MovingToConveyor:
                    MoveToConveyor();
                    break;
                case GlenState.DroppingBullet:
                    DropBullet();
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }

        public void Upgrade(float moveSpeed, float waitTime)
        {
            _moveSpeed = moveSpeed;
            _waitTime = waitTime;
            PlayUpgradeEffect();
        }

        public void Disable()
        {
            _stopped = true;
            _animator.Idle();
        }

        private void OnConveyorSelected(InteractiveConveyor conveyor)
        {
            if (_state == GlenState.Idle)
                SwitchState(GlenState.MovingToWarehouse);

            _selectedConveyor = conveyor;
        }

        private void MoveToWarehouse()
        {
            if (_inTransition)
            {
                _inTransition = false;
                _animator.Move();
            }

            if (MoveTo(_bulletPickupPoint.position))
                SwitchState(_storage.HasResource(ResourceType.WarehouseBullet) ? GlenState.PickingUpBullet : GlenState.Idle);
        }

        private void PickUpBullet()
        {
            if (!_inTransition)
                return;

            _storage.RemoveResource(ResourceType.WarehouseBullet);
            _bullet = (Bullet)_bulletPool.Get();
            _bullet.transform.SetPositionAndRotation(_bulletSpawnPoint);
            _bullet.transform.localScale = Vector3.zero;
            DOTween.Sequence()
                .Append(_bullet.transform.DOScale(Vector3.one, _waitTime * 0.95f))
                .Join(_bullet.transform.DORotateQuaternion(_bulletHoldingPoint.rotation, _waitTime * 0.95f))
                .Join(_bullet.transform.DOJump(_bulletHoldingPoint.position, 1f, 1, _waitTime))
                .OnComplete(() =>
                {
                    _bullet.transform.SetParent(_bulletHoldingPoint);
                    SwitchState(GlenState.MovingToConveyor);
                });

            _animator.Idle();
            _inTransition = false;
        }

        private void MoveToConveyor()
        {
            if (_inTransition)
            {
                _inTransition = false;
                _animator.Move();
            }

            if (MoveTo(_selectedConveyor.InteractionPoint.position))
                SwitchState(GlenState.DroppingBullet);
        }

        private void DropBullet()
        {
            if (!_inTransition)
                return;

            _selectedConveyor.ReceiveBullet(_bullet);
            _bullet = null;
            _inTransition = false;
            _animator.Idle();
            DOVirtual.DelayedCall(_waitTime, () => SwitchState(GlenState.MovingToWarehouse), ignoreTimeScale: false);
        }

        private bool MoveTo(Vector3 position)
        {
            transform.position = Vector3.MoveTowards(transform.position, position, _moveSpeed * Time.deltaTime);
            return transform.position == position;
        }

        [Button]
        private void PlayUpgradeEffect()
        {
            SpriteVfxService.Instance.Spawn(SpriteVfxType.Flash, transform.position + 0.5f * Vector3.up);
            DOTween.Sequence()
                .Append(_upgradeMaterial.DOFade(1f, 1f))
                .Append(_upgradeMaterial.DOFade(0f, 1f));
        }

        private void SwitchState(GlenState state)
        {
            _inTransition = true;
            _state = state;
            if (_state == GlenState.Idle)
                _animator.Idle();
        }
    }
}