using System;
using UnityEditor;
using UnityEngine;
using Object = UnityEngine.Object;

namespace Utilities.InterfaceRequired.Editor
{
    [CustomPropertyDrawer(typeof(InterfaceRequiredAttribute))]
    public class RequireInterfaceDrawer : PropertyDrawer
    {
        public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
        {
            if (property.propertyType == SerializedPropertyType.ObjectReference)
            {
                var requiredAttribute = (InterfaceRequiredAttribute) attribute;

                EditorGUI.BeginProperty(position, label, property);

                Component selectedComponent;
                var canAssignGameObject = false;

                if (Event.current.type is EventType.DragUpdated)
                {
                    DragAndDrop.AcceptDrag();
                    Object[] draggedObjects = DragAndDrop.objectReferences;

                    var gameObject = draggedObjects[0] as GameObject;
                    if (gameObject != null)
                    {
                        selectedComponent = gameObject.GetComponent(requiredAttribute.InterfaceType);
                        canAssignGameObject = selectedComponent != null;
                    }
                }
                else if (Event.current.type is EventType.DragPerform)
                {
                    DragAndDrop.AcceptDrag();
                    Object[] draggedObjects = DragAndDrop.objectReferences;

                    var gameObject = draggedObjects[0] as GameObject;
                    if (gameObject != null)
                    {
                        selectedComponent = gameObject.GetComponent(requiredAttribute.InterfaceType);
                        property.objectReferenceValue = selectedComponent;
                    }
                }

                Type objType = canAssignGameObject ? typeof(MonoBehaviour) : requiredAttribute.InterfaceType;
                property.objectReferenceValue = EditorGUI.ObjectField(position, label, property.objectReferenceValue,
                    objType, true);

                EditorGUI.EndProperty();
            }
            else
            {
                Color previousColor = GUI.color;
                GUI.color = Color.red;

                EditorGUI.LabelField(position, label, new GUIContent("Property is not a reference type"));

                GUI.color = previousColor;
            }
        }
    }
}