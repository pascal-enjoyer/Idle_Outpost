using System.Collections;
using Audio;
using Extensions;
using Progression;
using UnityEngine;

public class Unlockable : MonoBehaviour
{
	[SerializeField]
	private GameTrigger _trigger;

	[SerializeField]
	private GameObject _toEnable;

	[SerializeField]
	private bool _scaleOnlyByHeight;

	[SerializeField]
	private float _animationTime = 0.5f;

	[SerializeField]
	private float _delay;

	[SerializeField]
	private AudioClip _sound;

	private WaitForSeconds _waitDelay;

	private void Awake()
	{
		_waitDelay = new WaitForSeconds(_delay);
		_trigger.Triggered += Unlock;
		_toEnable.SetActive(false);
	}

	private void OnDestroy()
	{
		_trigger.Triggered -= Unlock;
	}

	private void Unlock()
	{
		Vector3 targetScale = _toEnable.transform.localScale;
		_toEnable.transform.localScale = (_scaleOnlyByHeight ? new Vector3(targetScale.x, 0f, targetScale.z) : Vector3.zero);
		if (_delay > 0f)
		{
			StartCoroutine(ActivateAfterDelay(targetScale));
		}
		else
		{
			Activate(targetScale);
		}
	}

	private IEnumerator ActivateAfterDelay(Vector3 targetScale)
	{
		yield return _waitDelay;
		Activate(targetScale);
	}

	private void Activate(Vector3 targetScale)
	{
		AudioService.Instance.TryPlayEffect(_sound);
		_toEnable.SetActive(true);
		_toEnable.transform.DoPopUp(_animationTime, 1.1f, null, targetScale);
	}
}
