using UnityEditor;
using UnityToolbarExtender;
using Utilities.Editor.CustomToolbar.ToolbarElements;

namespace Utilities.Editor.CustomToolbar
{
    [InitializeOnLoad]
    public class ToolbarElementsAdder
    {
        private static readonly TimeScaleSlider TimeScaleSlider;

        static ToolbarElementsAdder()
        {
            ToolbarExtender.LeftToolbarGUI.Clear();
            ToolbarExtender.RightToolbarGUI.Clear();
            TimeScaleSlider = new TimeScaleSlider();
        }
    }
}