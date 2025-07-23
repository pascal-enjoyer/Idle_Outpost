namespace Pools
{
	public interface IPool<in T>
	{
		void Release(T element);
	}
}
