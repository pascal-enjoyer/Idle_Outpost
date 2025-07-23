namespace Utilities
{
	public interface ICloneable<T>
	{
		T Clone(T original);
	}
}
