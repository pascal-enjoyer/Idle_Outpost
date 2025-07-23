using System;
using UnityEngine;

namespace Utilities.InterfaceRequired
{
	[AttributeUsage(AttributeTargets.Field)]
	public class InterfaceRequiredAttribute : PropertyAttribute
	{
		public Type InterfaceType { get; }

		public InterfaceRequiredAttribute(Type interfaceType)
		{
			InterfaceType = interfaceType;
		}
	}
}
