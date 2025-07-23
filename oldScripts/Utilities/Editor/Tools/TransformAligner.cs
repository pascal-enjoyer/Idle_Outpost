using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

namespace Utilities.Editor.Tools
{
    public static class TransformAligner
    {
        [MenuItem("CONTEXT/Transform/AlignByChildren")]
        private static void AlignByChildren(MenuCommand menuCommand)
        {
            var selectedObject = (Transform)menuCommand.context;
            List<Transform> children = new();
            List<Vector3> positions = new();
            Vector3 childrenAvgPosition = Vector3.zero;

            Undo.RegisterFullObjectHierarchyUndo(selectedObject.gameObject, "AlignByChildren");
            foreach (Transform child in selectedObject)
            {
                if (child.position != Vector3.zero)
                {
                    children.Add(child);
                    positions.Add(child.position);
                    childrenAvgPosition += child.position;
                }
            }

            childrenAvgPosition /= selectedObject.childCount;
            selectedObject.position = childrenAvgPosition;
            for (var i = 0; i < children.Count; i++)
                children[i].position = positions[i];
        }

        [MenuItem("CONTEXT/Transform/AlignParentByThis")]
        private static void AlignParentByThis(MenuCommand menuCommand)
        {
            var selectedObject = (Transform)menuCommand.context;
            Transform parent = selectedObject.parent;
            List<Transform> children = new();
            List<Vector3> positions = new();

            Undo.RegisterFullObjectHierarchyUndo(parent.gameObject, "AlignParentByThis");
            Vector3 position = selectedObject.position;

            foreach (Transform child in parent)
            {
                if (child.position != Vector3.zero)
                {
                    children.Add(child);
                    positions.Add(child.position);
                }
            }

            parent.position = position;
            for (var i = 0; i < children.Count; i++)
                children[i].position = positions[i];
            selectedObject.position = position;
        }
    }
}