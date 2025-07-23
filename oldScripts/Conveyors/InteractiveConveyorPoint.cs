using GameResources;
using UnityEngine;

namespace Conveyors
{
    public abstract class InteractiveConveyorPoint : MonoBehaviour
    {
        [SerializeField] private float _speed;
        [SerializeField] private InteractiveConveyorPoint _nextPoint;
        [SerializeField] private Transform _interactionPoint;

        public Transform InteractionPoint => _interactionPoint;

        public abstract void ProcessBullet(Bullet bullet);

        protected void MoveBullet(Bullet bullet) => 
            bullet.Move(_nextPoint, _speed);

        protected void ProcessBulletByNextPoint(Bullet bullet) =>
            _nextPoint.ProcessBullet(bullet);
    }
}