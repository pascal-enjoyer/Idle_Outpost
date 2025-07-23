namespace Utilities
{
    public interface ICloneable<T>
    {
        public T Clone(T original);
    }
}