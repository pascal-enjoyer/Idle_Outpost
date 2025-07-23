using UnityEngine;

namespace Characters
{
    public class MasonAnimator : MonoBehaviour
    {
        [SerializeField] private Animator[] _animators;

        public void Shoot() =>
            SetTrigger("Fire");

        private void SetTrigger(string trigger)
        {
            for (var i = 0; i < _animators.Length; i++)
                _animators[i].SetTrigger(trigger);
        }
    }
}