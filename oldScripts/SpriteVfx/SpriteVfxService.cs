using Sirenix.OdinInspector;
using UnityEngine;

namespace SpriteVfx
{
    public class SpriteVfxService : MonoBehaviour
    {
        [SerializeField] private SpriteVfxPool[] _pools;

        public static SpriteVfxService Instance;

        private void Awake() =>
            Instance = this;

        public void Spawn(SpriteVfxType type, Vector3 position)
        {
            SpriteVfxPool pool = GetPool(type);
            pool.Spawn(position);
        }

        private SpriteVfxPool GetPool(SpriteVfxType type)
        {
            for (var i = 0; i < _pools.Length; i++)
            {
                SpriteVfxPool pool = _pools[i];
                if (pool.Type == type)
                    return pool;
            }

            return null;
        }

#if UNITY_EDITOR
        [Button]
        private void FetchFromChildren() =>
            _pools = GetComponentsInChildren<SpriteVfxPool>();
#endif
    }
}