using Extensions;
using UnityEngine;

namespace Hero
{
    public class HeroMaxStack : MonoBehaviour
    {
        [SerializeField] private HeroStack[] _stacksToWatch;

        private bool _visible;

        private void Awake()
        {
            _visible = false;
            transform.localScale = Vector3.zero;
        }

        private void Update()
        {
            if (!_visible && AnyStackIsFull())
            {
                _visible = true;
                transform.DoPopUp();
            }
            else if (_visible && !AnyStackIsFull())
            {
                _visible = false;
                transform.DoPopDown();
            }
        }

        private bool AnyStackIsFull()
        {
            for (var i = 0; i < _stacksToWatch.Length; i++)
                if (!_stacksToWatch[i].HasSpace)
                    return true;
            return false;
        }
    }
}