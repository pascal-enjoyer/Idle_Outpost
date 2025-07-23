using UnityEngine;

public class Wheel : MonoBehaviour
{
    public void Rotate(float rotation)
    {
        transform.Rotate(Vector3.right, rotation);
    }
}