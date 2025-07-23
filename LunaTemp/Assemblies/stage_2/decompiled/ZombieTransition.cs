using System.Collections;
using Audio;
using Characters;
using DG.Tweening;
using Extensions;
using PackShots;
using UnityEngine;
using UnityEngine.UI;

public class ZombieTransition : MonoBehaviour
{
	[SerializeField]
	private RectTransform _canvasRect;

	[SerializeField]
	private GameObject _imagePrefab;

	[SerializeField]
	private Vector2 _spacing = new Vector2(10f, 10f);

	[SerializeField]
	private Vector2 _randomOffset = new Vector2(5f, 5f);

	[SerializeField]
	private float _transitionDuration = 1f;

	[SerializeField]
	private PackShotChooser _packShot;

	[SerializeField]
	private ZombieManager _zombieManager;

	[SerializeField]
	private Image[] _children;

	public void ShowTransition()
	{
		base.gameObject.SetActive(true);
		StartCoroutine(TransitionRoutine());
	}

	private IEnumerator TransitionRoutine()
	{
		_children.Shuffle();
		for (int i = 0; i < _children.Length; i++)
		{
			float duration2 = Random.Range(0.3f, 1f);
			DOTween.Sequence(_children[i]).AppendInterval(Random.Range(0f, 2f)).Append(_children[i].transform.DoPopUp(duration2, 1.1f, null, default(Vector3), true))
				.Join(_children[i].DOFade(1f, duration2 * 0.5f));
		}
		yield return new WaitForSeconds(_transitionDuration);
		_zombieManager.gameObject.SetActive(false);
		AudioService.Instance.StopAndClearEffects();
		_packShot.Show();
		for (int j = 0; j < _children.Length; j++)
		{
			float duration = Random.Range(0.3f, 1f);
			DOTween.Sequence(_children[j]).AppendInterval(Random.Range(0f, 2f)).Append(_children[j].transform.DoPopDown(duration))
				.Join(_children[j].DOFade(0f, duration * 2f));
		}
		yield return new WaitForSeconds(3f);
		base.gameObject.SetActive(false);
	}
}
