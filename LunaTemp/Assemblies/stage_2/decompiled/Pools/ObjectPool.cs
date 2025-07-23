using System;
using System.Collections.Generic;

namespace Pools
{
	public class ObjectPool<T> : IDisposable, IPool<T> where T : class
	{
		private readonly List<T> _list;

		private readonly Func<T> _createFunc;

		private readonly Action<T> _actionOnGet;

		private readonly Action<T> _actionOnRelease;

		private readonly int _maxSize;

		private readonly bool _collectionCheck;

		public int CountAll { get; private set; }

		public int CountActive => CountAll - CountInactive;

		public int CountInactive => _list.Count;

		public ObjectPool(Func<T> createFunc, Action<T> actionOnGet = null, Action<T> actionOnRelease = null, bool collectionCheck = true, int defaultCapacity = 10, int maxSize = 10000)
		{
			if (createFunc == null)
			{
				throw new ArgumentNullException("createFunc");
			}
			if (maxSize <= 0)
			{
				throw new ArgumentException("Max Size must be greater than 0", "maxSize");
			}
			_list = new List<T>(defaultCapacity);
			_createFunc = createFunc;
			_actionOnGet = actionOnGet;
			_actionOnRelease = actionOnRelease;
			_maxSize = maxSize;
			_collectionCheck = collectionCheck;
		}

		public T Get()
		{
			T obj;
			if (_list.Count == 0)
			{
				obj = _createFunc();
				CountAll++;
			}
			else
			{
				int index = _list.Count - 1;
				obj = _list[index];
				_list.RemoveAt(index);
			}
			_actionOnGet?.Invoke(obj);
			return obj;
		}

		public void Release(T element)
		{
			if (_collectionCheck && _list.Count > 0)
			{
				for (int index = 0; index < _list.Count; index++)
				{
					if (element == _list[index])
					{
						throw new InvalidOperationException("Trying to release an object that has already been released to the pool.");
					}
				}
			}
			_actionOnRelease?.Invoke(element);
			if (CountInactive < _maxSize)
			{
				_list.Add(element);
			}
			else
			{
				CountAll--;
			}
		}

		public void Clear()
		{
			_list.Clear();
			CountAll = 0;
		}

		public void Dispose()
		{
			Clear();
		}
	}
}
