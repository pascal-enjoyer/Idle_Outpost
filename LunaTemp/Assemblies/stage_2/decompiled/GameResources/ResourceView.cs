using DG.Tweening;
using TMPro;
using UnityEngine;

namespace GameResources
{
	public class ResourceView : MonoBehaviour
	{
		[SerializeField]
		private Storage _storage;

		[SerializeField]
		private ResourceType _type;

		[SerializeField]
		private TextMeshProUGUI _amount;

		[SerializeField]
		private bool _useShowHide;

		[Header("Animation Tweaks")]
		[SerializeField]
		private float _countChangeDuration = 0.5f;

		[SerializeField]
		private float _punchScale = 0.1f;

		[SerializeField]
		private float _punchDuration = 0.2f;

		[SerializeField]
		private Color _punchColor = Color.white;

		private Color _defaultColor;

		private int _previousValue;

		private void Awake()
		{
			_defaultColor = _amount.color;
			_storage.ResourceChanged += ValueChanged;
			if (_useShowHide)
			{
				ShowHideIfNeeded(_storage.GetResource(_type));
			}
		}

		private void Start()
		{
			_previousValue = _storage.GetResource(_type);
			_amount.SetText("{0}", _previousValue);
		}

		private void OnDestroy()
		{
			_storage.ResourceChanged -= ValueChanged;
		}

		private void ValueChanged(ResourceType resourceType)
		{
			if (resourceType == _type)
			{
				DOVirtual.Int(_previousValue, _storage.GetResource(_type), _countChangeDuration, delegate(int value)
				{
					_amount.SetText("{0}", value);
				});
				if (_storage.GetResource(_type) > _previousValue)
				{
					_amount.transform.DORewind();
					Sequence sequence = DOTween.Sequence(_amount.transform);
					sequence.Append(_amount.transform.DOPunchScale(Vector3.one * _punchScale, _punchDuration));
					sequence.Join(_amount.DOColor(_punchColor, _punchDuration * 0.5f));
					sequence.Append(_amount.DOColor(_defaultColor, _punchDuration * 0.5f));
				}
				if (_useShowHide)
				{
					ShowHideIfNeeded(_storage.GetResource(_type));
				}
				_previousValue = _storage.GetResource(_type);
			}
		}

		private void ShowHideIfNeeded(int newCount)
		{
			if (newCount == 0 && base.gameObject.activeSelf)
			{
				base.gameObject.SetActive(false);
			}
			else if (!base.gameObject.activeSelf && newCount > 0)
			{
				base.gameObject.SetActive(true);
			}
		}
	}
}
