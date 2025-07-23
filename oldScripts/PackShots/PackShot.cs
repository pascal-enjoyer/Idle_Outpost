using DG.Tweening;
using Luna.Unity;
using Sirenix.OdinInspector;
using UnityEngine;
using UnityEngine.UI;

namespace PackShots
{
    public class PackShot : MonoBehaviour
    {
        [SerializeField] private CanvasGroup _background;
        [SerializeField] private Image _title;
        [SerializeField] private Button _playButton;

        public void Show()
        {
            _playButton.onClick.AddListener(OnButtonClick);
            gameObject.SetActive(true);
            _background.DOFade(1f, 1f);
            _background.blocksRaycasts = true;
            _background.interactable = true;

            Vector3 startPos = _title.transform.position;
            DOTween.Sequence()
                .Append(_title.transform.DOMove(startPos + 3f * Vector3.down, 5f))
                .Append(_title.transform.DOMove(startPos, 5f))
                .SetEase(Ease.InOutSine)
                .SetLoops(-1, LoopType.Yoyo);

            _playButton.transform.DOScale(1.1f, 0.5f)
                .SetEase(Ease.InOutSine)
                .SetLoops(-1, LoopType.Yoyo);
        }

        private void OnButtonClick()
        {
            _playButton.onClick.RemoveListener(OnButtonClick);
            Playable.InstallFullGame();
        }

#if UNITY_EDITOR
        [Button]
        private void DebugShow() =>
            Show();
#endif
    }
}