using System;
using System.Collections.Generic;
using UnityEngine;

namespace Utilities.Reactives
{
    [Serializable]
    public class ReactiveProperty<T> : IReadOnlyReactiveProperty<T>
    {
        [SerializeField] private T _value;

        public event Action ValueChanged;

        public ReactiveProperty() =>
            _value = default;

        public ReactiveProperty(T initialValue) =>
            _value = initialValue;

        public T Value
        {
            get => _value;
            set
            {
                if (!EqualityComparer<T>.Default.Equals(_value, value))
                {
                    _value = value;
                    ValueChanged?.Invoke();
                }
            }
        }
    }
}