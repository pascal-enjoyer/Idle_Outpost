using UnityEngine;

namespace PackShots
{
    public class PackShotChooser : MonoBehaviour
    {
        [SerializeField] private PackShot _horizontalPackShot;
        [SerializeField] private PackShot _verticalPackShot;

        public void Show()
        {
            if (Screen.width > Screen.height)
                _horizontalPackShot.Show();
            else
                _verticalPackShot.Show();
        }
    }
}