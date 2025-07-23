using UnityEngine;

namespace Hero
{
    public class HeroStackManager : MonoBehaviour
    {
        [SerializeField] private HeroStack[] _stacks;

        public HeroStack GetStack(ResourceType type)
        {
            for (var i = 0; i < _stacks.Length; i++)
                if (_stacks[i].Type == type)
                    return _stacks[i];

            return null;
        }

        public bool CanAddItem(ResourceType type)
        {
            if (type == ResourceType.Money)
                return true;
        
            for (var i = 0; i < _stacks.Length; i++)
            {
                HeroStack stack = _stacks[i];
                if (stack.Type != ResourceType.Money && stack.Type != type && !stack.IsEmpty)
                    return false;
            }

            return GetStack(type).HasSpace;
        }
    }
}