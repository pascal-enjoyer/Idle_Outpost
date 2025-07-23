using System.Collections;
using UnityEngine;

namespace SpriteVfx
{
	public class SpriteVfx : MonoBehaviour
	{
		[SerializeField]
		private AnimationClip _clip;

		private WaitForSeconds _waitForPlay;

		private SpriteVfxPool _pool;

		public void Construct(SpriteVfxPool pool)
		{
			_pool = pool;
			_waitForPlay = new WaitForSeconds(_clip.length);
		}

		public void Play()
		{
			StartCoroutine(DisableAfterPlay());
		}

		private void OnDisable()
		{
			_pool.Release(this);
		}

		private IEnumerator DisableAfterPlay()
		{
			yield return _waitForPlay;
			base.gameObject.SetActive(false);
		}
	}
}
