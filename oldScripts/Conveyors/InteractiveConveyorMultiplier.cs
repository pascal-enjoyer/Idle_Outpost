using DG.Tweening;
using Extensions;
using GameResources;
using Pools;
using UnityEngine;

namespace Conveyors
{
    public class InteractiveConveyorMultiplier : InteractiveConveyorPoint
    {
        [SerializeField] private ResourcePool _bulletPool;
        [SerializeField] private SpriteRenderer _spriteRenderer;
        [SerializeField] private Transform[] _startPoints;

        public override void ProcessBullet(Bullet originalBullet)
        {
            AnimateSpriteRenderer();
            for (var i = 0; i < _startPoints.Length; i++)
            {
                Bullet bullet = originalBullet;
                if (i > 0)
                    bullet = (Bullet)_bulletPool.Get();
                bullet.transform.SetPositionAndRotation(originalBullet.transform);
                bullet.transform.DORotateQuaternion(_startPoints[i].rotation, 0.49f);
                bullet.transform.DOMove(_startPoints[i].position, 0.5f)
                    .OnComplete(() => MoveBullet(bullet));
            }
        }

        private void AnimateSpriteRenderer() => 
            _spriteRenderer.transform.DOPunchScale(-0.05f * Vector3.one, 0.5f, 0);
    }
}