using System;
using UnityEngine;

namespace Utilities
{
	[Serializable]
	public class ClampedPercentageValue
	{
		[SerializeField]
		[Range(0f, 100f)]
		private float _percent;

		public float Value => _percent * 0.01f;
	}
}
