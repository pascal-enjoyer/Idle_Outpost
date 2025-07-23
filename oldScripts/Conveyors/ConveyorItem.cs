using Pools;
using UnityEngine;

namespace Conveyors
{
    public class ConveyorItem : MonoBehaviour
    {
        private IPool<ConveyorItem> _pool;
        private ConveyorPoint[] _points;
        private float _speed;
        private int _index;
        private bool _isMoving;

        public void Construct(IPool<ConveyorItem> pool) =>
            _pool = pool;

        private void Update()
        {
            if (!_isMoving)
                return;
            
            ConveyorPoint activePoint = _points[_index];
            Transform activePointTransform = activePoint.transform;
            transform.position = Vector3.MoveTowards(transform.position, activePointTransform.position, _speed * Time.deltaTime);
            transform.rotation = Quaternion.RotateTowards(transform.rotation, activePointTransform.rotation, 180f * Time.deltaTime);
            if (Vector3.SqrMagnitude(transform.position - activePointTransform.position) <= 0.1f)
                if (_index + 1 < _points.Length)
                    _index++;
        }

        public void StartMove(ConveyorPoint[] points, float speed)
        {
            _isMoving = true;
            _points = points;
            _speed = speed;
            _index = 1;
        }

        public void StopMove() => 
            _isMoving = false;

        public void Release() => 
            _pool.Release(this);
    }
}