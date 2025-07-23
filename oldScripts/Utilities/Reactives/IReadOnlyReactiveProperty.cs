using System;

namespace Utilities.Reactives
{
    public interface IReadOnlyReactiveProperty<T>
    {
        T Value { get; }

        event Action ValueChanged;
    }
}