using Hero;
using UnityEngine;

public class ColorZone : MonoBehaviour
{
	[SerializeField]
	private ColorZoneElement[] _elements;

	public bool IsActive { get; private set; }

	private void Awake()
	{
		for (int i = 0; i < _elements.Length; i++)
		{
			_elements[i].InactiveColor = _elements[i].Renderer.material.color;
		}
	}

	private void OnTriggerEnter(Collider other)
	{
		if (other.TryGetComponent<HeroMovement>(out var _))
		{
			SetColor(true);
		}
	}

	private void OnTriggerExit(Collider other)
	{
		if (other.TryGetComponent<HeroMovement>(out var _))
		{
			SetColor(false);
		}
	}

	private void SetColor(bool active)
	{
		IsActive = active;
		for (int i = 0; i < _elements.Length; i++)
		{
			Color color = (active ? _elements[i].ActiveColor : _elements[i].InactiveColor);
			_elements[i].Renderer.material.color = color;
		}
	}
}
