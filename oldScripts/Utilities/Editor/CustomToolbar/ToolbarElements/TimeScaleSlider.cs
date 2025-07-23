using System;
using UnityEditor;
using UnityEngine;
using UnityToolbarExtender;

namespace Utilities.Editor.CustomToolbar.ToolbarElements
{
    [Serializable]
    public class TimeScaleSlider
    {
        [SerializeField] private float _minTime = 1f;
        [SerializeField] private float _maxTime = 20f;

        private float _currentTimeScale;

        public TimeScaleSlider() =>
            ToolbarExtender.RightToolbarGUI.Add(Draw);

        private void Draw()
        {
            EditorGUILayout.LabelField("Time", GUILayout.Width(30));

            if (Mathf.Abs(_currentTimeScale - Time.timeScale) > 0.01f) 
                _currentTimeScale = Time.timeScale;
            
            float previousTimeScale = _currentTimeScale;
            _currentTimeScale = EditorGUILayout.Slider("", _currentTimeScale, _minTime, _maxTime, GUILayout.Width(170.0f));

            if (Mathf.Abs(previousTimeScale - _currentTimeScale) > 0.01f) 
                Time.timeScale = _currentTimeScale;
        }
    }
}