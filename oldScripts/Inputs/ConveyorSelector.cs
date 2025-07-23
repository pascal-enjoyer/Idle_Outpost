using System;
using Audio;
using Conveyors;
using UnityEngine;

namespace Inputs
{
    public class ConveyorSelector : MonoBehaviour
    {
        [SerializeField] private LayerMask _clickMask;
        [SerializeField] private AudioClip _sound;

        private Camera _camera;
        private InteractiveConveyor _previousSelected;

        public event Action<InteractiveConveyor> Selected;

        private void Awake() =>
            _camera = Camera.main;

        private void Update()
        {
            if (Input.GetMouseButtonDown(0))
            {
                Vector2 worldPoint = _camera.ScreenToWorldPoint(Input.mousePosition);
                RaycastHit2D hit = Physics2D.Raycast(worldPoint, Vector2.zero, 0f, _clickMask);
                if (hit.collider != null
                    && hit.collider.TryGetComponent(out InteractiveConveyor conveyor)
                    && _previousSelected != conveyor)
                {
                    _previousSelected = conveyor;
                    conveyor.OnSelected();
                    AudioService.Instance.TryPlayEffect(_sound);
                    Selected?.Invoke(conveyor);
                }
            }
        }
    }
}