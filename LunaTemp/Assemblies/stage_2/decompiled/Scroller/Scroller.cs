using UnityEngine;

namespace Scroller
{
	public abstract class Scroller : MonoBehaviour
	{
		[SerializeField]
		private SpriteRenderer _renderer;

		[SerializeField]
		private bool _useSharedMaterial;

		[SerializeField]
		private float _speedX;

		[SerializeField]
		private float _speedY;

		private Material _targetMaterial;

		private Vector2 _offset;

		private Vector2 _initOffset;

		private void Awake()
		{
			_targetMaterial = (_useSharedMaterial ? _renderer.sharedMaterial : _renderer.material);
			_offset = _targetMaterial.mainTextureOffset;
			_initOffset = _targetMaterial.mainTextureOffset;
		}

		private void OnDisable()
		{
			Scroll(_targetMaterial, _initOffset);
		}

		private void Update()
		{
			_offset.x += _speedX * Time.deltaTime;
			_offset.y += _speedY * Time.deltaTime;
			Scroll(_targetMaterial, _offset);
		}

		protected abstract void Scroll(Material material, Vector2 value);
	}
}
