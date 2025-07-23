using System.Collections;
using Audio;
using Characters;
using DG.Tweening;
using Extensions;
using PackShots;
using Sirenix.OdinInspector;
using UnityEngine;
using UnityEngine.UI;

public class ZombieTransition : MonoBehaviour
{
    [SerializeField] private RectTransform _canvasRect;
    [SerializeField] private GameObject _imagePrefab;
    [SerializeField] private Vector2 _spacing = new Vector2(10f, 10f);
    [SerializeField] private Vector2 _randomOffset = new Vector2(5f, 5f);
    [SerializeField] private float _transitionDuration = 1f;
    [SerializeField] private PackShotChooser _packShot;
    [SerializeField] private ZombieManager _zombieManager;
    [SerializeField] private Image[] _children;

    [Button]
    public void ShowTransition()
    {
        gameObject.SetActive(true);
        StartCoroutine(TransitionRoutine());
    }

    private IEnumerator TransitionRoutine()
    {
        _children.Shuffle();
        for (var i = 0; i < _children.Length; i++)
        {
            float duration = Random.Range(0.3f, 1f);
            DOTween.Sequence(_children[i])
                .AppendInterval(Random.Range(0f, 2f))
                .Append(_children[i].transform.DoPopUp(duration, fromZero: true))
                .Join(_children[i].DOFade(1f, duration * 0.5f));
        }
        
        yield return new WaitForSeconds(_transitionDuration);
        _zombieManager.gameObject.SetActive(false);
        AudioService.Instance.StopAndClearEffects();

        _packShot.Show();
        for (var i = 0; i < _children.Length; i++)
        {
            float duration = Random.Range(0.3f, 1f);
            DOTween.Sequence(_children[i])
                .AppendInterval(Random.Range(0f, 2f))
                .Append(_children[i].transform.DoPopDown(duration))
                .Join(_children[i].DOFade(0f, duration * 2f));
        }

        yield return new WaitForSeconds(3f);
        gameObject.SetActive(false);
    }

#if UNITY_EDITOR
    [Button]
    private void SpawnGrid()
    {
        float canvasWidth = _canvasRect.rect.width;
        float canvasHeight = _canvasRect.rect.height;

        int countX = Mathf.CeilToInt(canvasWidth / _spacing.x);
        int countY = Mathf.CeilToInt(canvasHeight / _spacing.y);

        var startPos = new Vector2(-canvasWidth / 2f, -canvasHeight / 2f);

        for (var y = 0; y < countY; y++)
        {
            for (var x = 0; x < countX; x++)
            {
                var offset = new Vector2(
                    Random.Range(-_randomOffset.x, _randomOffset.x),
                    Random.Range(-_randomOffset.y, _randomOffset.y)
                );

                Vector2 position = startPos + new Vector2(
                    x * _spacing.x,
                    y * _spacing.y
                ) + offset;

                GameObject spawned = Instantiate(_imagePrefab, _canvasRect);
                var rect = spawned.GetComponent<RectTransform>();
                rect.anchoredPosition = position;
            }
        }

        ShuffleHierarchy();
    }

    private void ShuffleHierarchy()
    {
        for (int i = _canvasRect.childCount - 1; i >= 0; i--)
        {
            int randomIndex = Random.Range(0, _canvasRect.childCount);
            _canvasRect.GetChild(i).SetSiblingIndex(randomIndex);
        }
    }

    [Button]
    private void DeleteGrid()
    {
        for (int i = _canvasRect.childCount - 1; i >= 0; i--)
            DestroyImmediate(_canvasRect.GetChild(i).gameObject);
    }

    [Button]
    private void FetchChildren()
    {
        _children = new Image[_canvasRect.childCount];
        for (var i = 0; i < _canvasRect.childCount; i++)
            _children[i] = _canvasRect.GetChild(i).GetComponent<Image>();
    }
#endif
}