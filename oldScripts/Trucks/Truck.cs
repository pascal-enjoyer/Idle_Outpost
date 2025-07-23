using System.Collections;
using Audio;
using DG.Tweening;
using Hero;
using UnityEngine;

namespace Trucks
{
    public class Truck : MonoBehaviour
    {
        [SerializeField] private HeroStack _stack;
        [SerializeField] private float _delay = 0.07f;
        [SerializeField] private float _pickupDelay = 0.5f;
        [SerializeField] private AudioClip _takeSound;
        
        private HeroStack _plankStack;
        private ColorZone _colorZone;
        private float _lastTakeTime;
        private bool _waitingLoad;

        public void Construct(HeroStack plankStack, ColorZone colorZone)
        {
            _plankStack = plankStack;
            _colorZone = colorZone;
        }

        private void Update()
        {
            if (!_waitingLoad || _plankStack.IsEmpty || !_colorZone.IsActive)
                return;
            if (Time.time - _lastTakeTime < _delay)
                return;
            if (Time.time - _plankStack.LastTimeAdded < _pickupDelay)
                return;

            Resource plank = _plankStack.RemoveItem();
            _stack.AddItem(plank);
            _lastTakeTime = Time.time;
            AudioService.Instance.TryPlayEffect(_takeSound);
            if (!_stack.HasSpace)
                _waitingLoad = false;
        }

        public IEnumerator MoveTo(Vector3 position, Quaternion rotation)
        {
            transform.DORotateQuaternion(rotation, 0.4f);
            yield return transform.DOMove(position, 10f).SetEase(Ease.Linear).SetSpeedBased(true).WaitForCompletion();
        }

        public IEnumerator WaitLoad()
        {
            _waitingLoad = true;
            yield return new WaitUntil(() => _waitingLoad == false);
            yield return new WaitForSeconds(1f);
        }

        public void Clear() =>
            _stack.Clear();
    }
}