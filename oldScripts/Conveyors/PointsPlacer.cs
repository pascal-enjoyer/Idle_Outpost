using Sirenix.OdinInspector;
using UnityEngine;

public class PointsPlacer : MonoBehaviour
{
    [SerializeField] private Transform _parent;
    [SerializeField] private Vector3 _offset = Vector3.one;

#if UNITY_EDITOR
    [Button]
    private void Execute()
    {
        for (var i = 0; i < _parent.childCount; i++)
        {
            Transform child = _parent.GetChild(i);
            child.localPosition = i * _offset;
        }
    }
#endif
}