using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEngine;

namespace Utilities.Editor.EditorWindows
{
    public class FindNonStaticObjectsWindow : EditorWindow
    {
        public List<GameObject> Results = new();
        private Vector2 _scrollPosition;

        private void OnGUI()
        {
            /*if (GUILayout.Button("Search Project"))
                SearchProject();
            if (GUILayout.Button("Search scene"))
                SearchScene();*/
            if (GUILayout.Button("Search Selected Objects"))
                SearchSelectedWithChildren();

            // src: https://answers.unity.com/questions/859554/editorwindow-display-array-dropdown.html
            var so = new SerializedObject(this);
            SerializedProperty resultsProperty = so.FindProperty(nameof(Results));
            _scrollPosition = EditorGUILayout.BeginScrollView(_scrollPosition);
            EditorGUILayout.PropertyField(resultsProperty, true);
            EditorGUILayout.EndScrollView();
            so.ApplyModifiedProperties();
        }

        [MenuItem("Tools/Non Static Objects Finder")]
        private static void Init()
        {
            GetWindow<FindNonStaticObjectsWindow>("Non Static Objects Finder").Show();
        }

        /*private void SearchProject()
        {
            Results = AssetDatabase.FindAssets("t:Prefab")
                .Select(AssetDatabase.GUIDToAssetPath)
                .Select(AssetDatabase.LoadAssetAtPath<GameObject>)
                .Where(x => IsStatic(x, true))
                .Distinct()
                .ToList();
        }

        private void SearchScene()
        {
            Results = FindObjectsOfType<GameObject>(true)
                .Where(x => IsStatic(x, false))
                .Distinct()
                .ToList();
        }*/

        private void SearchSelectedWithChildren()
        {
            GameObject[] objects = Selection.gameObjects[0].GetComponentsInChildren<Transform>().Select(x => x.gameObject).ToArray();
            Results = objects
                .Where(x => IsStatic(x, false))
                .Distinct()
                .ToList();
        }

        private static bool IsStatic(GameObject go, bool includeChildren)
        {
            GameObject[] objects = includeChildren
                ? go.GetComponentsInChildren<Transform>().Select(x => x.gameObject).ToArray()
                : new[] { go };

            return objects.Any(x => !x.isStatic);
        }
    }
}