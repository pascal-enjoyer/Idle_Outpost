using UnityEngine;

namespace Utilities
{
	public class DontDestroy : MonoBehaviour
	{
		private void Awake()
		{
			Object.DontDestroyOnLoad(base.gameObject);
		}
	}
}
