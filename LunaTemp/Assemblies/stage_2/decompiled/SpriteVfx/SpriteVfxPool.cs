using Pools;
using UnityEngine;

namespace SpriteVfx
{
	public class SpriteVfxPool : MonoBehaviour
	{
		[SerializeField]
		private SpriteVfxType _type;

		[SerializeField]
		private SpriteVfx _prefab;

		private ObjectPool<SpriteVfx> _effectsPool;

		public SpriteVfxType Type => _type;

		private void Awake()
		{
			_effectsPool = new ObjectPool<SpriteVfx>(CreateVfx, ActionOnGet);
		}

		public void Spawn(Vector3 position)
		{
			SpriteVfx effect = _effectsPool.Get();
			effect.transform.SetPositionAndRotation(position, Quaternion.identity);
			effect.Play();
		}

		public void Release(SpriteVfx spriteVfx)
		{
			_effectsPool.Release(spriteVfx);
		}

		private SpriteVfx CreateVfx()
		{
			SpriteVfx effect = Object.Instantiate(_prefab, base.transform);
			effect.Construct(this);
			return effect;
		}

		private static void ActionOnGet(SpriteVfx effect)
		{
			effect.gameObject.SetActive(true);
		}
	}
}
