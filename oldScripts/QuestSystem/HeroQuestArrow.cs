using Extensions;
using UnityEngine;

namespace QuestSystem
{
    public class HeroQuestArrow : MonoBehaviour
    {
        [SerializeField] private Transform _player;
        [SerializeField] private float _hideDistance = 3f;
        [SerializeField] private float _radius = 2f;

        private Transform _target;
        private bool _hasTarget;
        private bool _visible;

        private void Update()
        {
            if (_hasTarget == false)
                return;

            Vector3 toTarget = _target.position.SetY(0) - _player.position.SetY(0);
            toTarget.y = 0f;
            
            bool closeEnoughToHide = toTarget.sqrMagnitude < _hideDistance;
            if (_visible && closeEnoughToHide)
            {
                _visible = false;
                transform.DoPopDown();
                return;
            }
            
            if (!_visible && !closeEnoughToHide)
            {
                _visible = true;
                transform.DoPopUp();
            }

            Vector3 direction = toTarget.normalized;
            transform.position = _player.position + direction * _radius;
            transform.rotation = Quaternion.LookRotation(direction);
        }

        public void SetTarget(Transform target)
        {
            _target = target;
            _hasTarget = target != null;

            if (_visible && !_hasTarget)
            {
                _visible = false;
                transform.DoPopDown();
            }
        }
    }
}