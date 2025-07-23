using DG.Tweening;
using Extensions;
using UnityEngine;

namespace Conveyors
{
    public class VisualConveyorEnd : MonoBehaviour
    {
        [SerializeField] private Transform[] _targets;

        private void OnTriggerEnter2D(Collider2D other)
        {
            if (other.TryGetComponent(out ConveyorItem conveyorItem))
            {
                Transform target = _targets.GetRandom();
                conveyorItem.StopMove();
                DOTween.Sequence(conveyorItem.transform)
                    .Append(conveyorItem.transform.DORotateQuaternion(target.rotation, 0.5f))
                    .Join(conveyorItem.transform.DOJump(target.position, 0.5f, 1, 0.5f))
                    .OnComplete(() => conveyorItem.Release());
            }
        }
    }
}