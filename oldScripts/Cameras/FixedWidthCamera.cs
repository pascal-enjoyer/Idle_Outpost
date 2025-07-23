using Sirenix.OdinInspector;
using UnityEditor;
using UnityEngine;

[RequireComponent(typeof(Camera))]
public class FixedWidthCamera : MonoBehaviour
{
    [SerializeField] private float _targetWidth = 39.111f;
    [SerializeField] private float _targetHeight = 20.888f;

    private Vector2Int _previousResolution;
    private Camera _camera;

    private void Awake()
    {
        _camera = Camera.main;
        UpdateCameraSize(Screen.width, Screen.height);
    }

    private void Update()
    {
        if (_previousResolution.x != Screen.width || _previousResolution.y != Screen.height)
            UpdateCameraSize(Screen.width, Screen.height);
    }

    private void UpdateCameraSize(int width, int height)
    {
        _previousResolution = new Vector2Int(width, height);

        if (width > height)
        {
            float aspect = (float)width / height;
            _camera.orthographicSize = _targetWidth / (2f * aspect);
        }
        else
        {
            _camera.orthographicSize = _targetHeight;
        }
    }

#if UNITY_EDITOR
    [Button]
    private void DebugUpdateCameraSize()
    {
        _camera = Camera.main;
        Vector2 screenSize = Handles.GetMainGameViewSize();
        UpdateCameraSize((int)screenSize.x, (int)screenSize.y);
    }
#endif
}