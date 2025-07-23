using UnityEngine;

public class Route
{
    public Vector2[] Points { get; private set; }

    public Route(Vector2[] points)
    {
        Points = points;
    }
}