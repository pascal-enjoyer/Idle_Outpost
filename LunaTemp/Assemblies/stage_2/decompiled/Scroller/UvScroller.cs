using UnityEngine;

namespace Scroller
{
	public class UvScroller : Scroller
	{
		protected override void Scroll(Material material, Vector2 value)
		{
			material.mainTextureOffset = value;
		}
	}
}
