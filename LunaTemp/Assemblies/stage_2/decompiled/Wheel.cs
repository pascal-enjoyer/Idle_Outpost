using UnityEngine;

public class Wheel : MonoBehaviour
{
	public void Rotate(float rotation)
	{
		base.transform.Rotate(Vector3.right, rotation);
	}
}
