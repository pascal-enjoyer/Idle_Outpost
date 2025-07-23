using System;
using DG.Tweening;
using GameResources;
using UnityEngine;

namespace Conveyors
{
	public class InteractiveConveyor : MonoBehaviour
	{
		[SerializeField]
		private Transform _interactionPoint;

		[SerializeField]
		private InteractiveConveyorPoint _point;

		[SerializeField]
		private Transform[] _scaleOnSelect;

		public Transform InteractionPoint => _interactionPoint;

		public event Action<InteractiveConveyor> BulletReceived;

		public void ReceiveBullet(Bullet bullet)
		{
			this.BulletReceived?.Invoke(this);
			bullet.transform.SetParent(null);
			bullet.transform.DOJump(_point.InteractionPoint.position, 0.5f, 1, 0.5f).OnComplete(delegate
			{
				_point.ProcessBullet(bullet);
			});
		}

		public void OnSelected()
		{
			for (int i = 0; i < _scaleOnSelect.Length; i++)
			{
				Transform target = _scaleOnSelect[i];
				target.DOComplete();
				Vector3 scale = target.localScale;
				DOTween.Sequence(target).Append(target.DOScale(scale * 0.9f, 0.2f)).Append(target.DOScale(scale, 0.2f))
					.SetEase(Ease.InOutSine);
			}
		}
	}
}
