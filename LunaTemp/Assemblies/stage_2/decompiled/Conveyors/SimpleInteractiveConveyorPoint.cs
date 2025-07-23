using GameResources;

namespace Conveyors
{
	public class SimpleInteractiveConveyorPoint : InteractiveConveyorPoint
	{
		public override void ProcessBullet(Bullet originalBullet)
		{
			MoveBullet(originalBullet);
		}
	}
}
