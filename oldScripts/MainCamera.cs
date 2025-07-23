using System.Collections;
using Extensions;
using UnityEngine;

public class MainCamera : MonoBehaviour
{
    [SerializeField] private Transform _defaultTarget;
    [SerializeField] private float _flyTime = 1f;
    [SerializeField] private AnimationCurve _flyCurve;

    private Transform _target;
    private Vector3 _offset;
    private Coroutine _showRoutine;
    private bool _isTransitioning;
    private float _transitionTime;
    private Vector3 _transitionStartPosition;

    private void Awake()
    {
        _target = _defaultTarget;
        _offset = transform.position - _defaultTarget.position;
    }

    private void LateUpdate()
    {
        Vector3 targetPosition = _target.position + _offset;

        if (_isTransitioning)
        {
            _transitionTime += Time.deltaTime;
            transform.position = Vector3.Lerp(_transitionStartPosition, targetPosition, _flyCurve.Evaluate(_transitionTime / _flyTime));
            if (_transitionTime.ApproximatelyEqual(1f))
                _isTransitioning = false;
        }
        else
        {
            transform.position = targetPosition;
        }
    }

    public void Show(Transform target, float time)
    {
        if (_showRoutine != null)
            StopCoroutine(_showRoutine);

        _showRoutine = StartCoroutine(ShowRoutine(target, time));
    }

    private IEnumerator ShowRoutine(Transform target, float time)
    {
        _target = target;
        _isTransitioning = true;
        _transitionTime = 0f;
        _transitionStartPosition = transform.position;
        yield return new WaitForSeconds(time);
        _target = _defaultTarget;
        _isTransitioning = true;
        _transitionTime = 0f;
        _transitionStartPosition = transform.position;
        _showRoutine = null;
    }
}