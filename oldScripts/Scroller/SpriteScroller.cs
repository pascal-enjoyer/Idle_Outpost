using UnityEngine;

namespace Scroller
{
    public class SpriteScroller : Scroller
    {
        private static readonly int Offset = Shader.PropertyToID("_Offset");

        protected override void Scroll(Material material, Vector2 value) =>
            material.SetVector(Offset, value);
    }
}