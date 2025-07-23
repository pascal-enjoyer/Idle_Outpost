using DG.Tweening;
using GameResources;
using UnityEngine;

namespace Conveyors
{
	public class InteractiveConveyorAccelerator : InteractiveConveyorPoint
	{
		[SerializeField]
		private SpriteRenderer _spriteRenderer;

		public override void ProcessBullet(Bullet originalBullet)
		{
			AnimateSpriteRenderer();
			MoveBullet(originalBullet);
		}

		private void AnimateSpriteRenderer()
		{
			_spriteRenderer.transform.DOPunchScale(-0.05f * Vector3.one, 0.5f, 0);
		}
	}
}
