using DG.Tweening;
using UnityEngine;

namespace DefaultNamespace
{
	public class MaskedFillBar : MonoBehaviour
	{
		[SerializeField]
		private Transform _maskTransform;

		[SerializeField]
		private Vector3 _emptyLocalPosition;

		[SerializeField]
		private Vector3 _fillLocalPosition;

		public void Render(float value)
		{
			Vector3 newPosition = Vector3.Lerp(_emptyLocalPosition, _fillLocalPosition, value);
			_maskTransform.DOLocalMove(newPosition, 0.2f);
		}
	}
}
