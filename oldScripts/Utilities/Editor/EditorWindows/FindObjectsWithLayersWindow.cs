using System.Collections.Generic;
using System.Linq;
using Extensions;
using UnityEditor;
using UnityEditorInternal;
using UnityEngine;

namespace Utilities.Editor.EditorWindows
{
    public class FindObjectsWithLayersWindow : EditorWindow
    {
        public LayerMask LayerMask;
        public List<GameObject> Results = new();

        private void OnGUI()
        {
            LayerMask = EditorGUILayout.MaskField(LayerMask, InternalEditorUtility.layers);

            if (GUILayout.Button("Search Project"))
                SearchProject();
            if (GUILayout.Button("Search scene"))
                SearchScene();
            if (GUILayout.Button("Search Selected Objects"))
                SearchSelected();

            // src: https://answers.unity.com/questions/859554/editorwindow-display-array-dropdown.html
            var so = new SerializedObject(this);
            SerializedProperty resultsProperty = so.FindProperty(nameof(Results));
            EditorGUILayout.PropertyField(resultsProperty, true);
            so.ApplyModifiedProperties();
        }

        [MenuItem("Tools/Layer Objects Finder")]
        private static void Init()
        {
            GetWindow<FindObjectsWithLayersWindow>("Layer Objects Finder").Show();
        }

        private void SearchProject()
        {
            Results = AssetDatabase.FindAssets("t:Prefab")
                .Select(AssetDatabase.GUIDToAssetPath)
                .Select(AssetDatabase.LoadAssetAtPath<GameObject>)
                .Where(x => IsInLayers(x, true))
                .Distinct()
                .ToList();
        }

        private void SearchScene()
        {
            Results = FindObjectsOfType<GameObject>(true)
                .Where(x => IsInLayers(x, false))
                .Distinct()
                .ToList();
        }

        private void SearchSelected()
        {
            Results = Selection.gameObjects
                .Where(x => IsInLayers(x, false))
                .Distinct()
                .ToList();
        }

        private bool IsInLayers(GameObject go, bool includeChildren)
        {
            GameObject[] objects = includeChildren
                ? go.GetComponentsInChildren<Transform>().Select(x => x.gameObject).ToArray()
                : new[] { go };

            return objects.Any(x => InternalEditorUtility.ConcatenatedLayersMaskToLayerMask(LayerMask).Contains(x.layer));
        }
    }
}