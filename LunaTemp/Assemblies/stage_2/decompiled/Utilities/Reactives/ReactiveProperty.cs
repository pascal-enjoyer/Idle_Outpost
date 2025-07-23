using System;
using System.Collections.Generic;
using UnityEngine;

namespace Utilities.Reactives
{
	[Serializable]
	public class ReactiveProperty<T> : IReadOnlyReactiveProperty<T>
	{
		[SerializeField]
		private T _value;

		public T Value
		{
			get
			{
				return _value;
			}
			set
			{
				if (!EqualityComparer<T>.Default.Equals(_value, value))
				{
					_value = value;
					this.ValueChanged?.Invoke();
				}
			}
		}

		public event Action ValueChanged;

		public ReactiveProperty()
		{
			_value = default(T);
		}

		public ReactiveProperty(T initialValue)
		{
			_value = initialValue;
		}
	}
}
