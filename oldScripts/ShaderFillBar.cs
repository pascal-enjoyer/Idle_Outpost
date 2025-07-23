using Extensions;
using UnityEngine;

public class ShaderFillBar : MonoBehaviour
{
    private static readonly int FillAmount = Shader.PropertyToID("_FillAmount");

    [SerializeField] private float _from;
    [SerializeField] private float _to;
    [SerializeField] private Renderer _renderer;

    private Material _material;

    public void Init() =>
        _material = _renderer.material;

    public void SetProgress(float value)
    {
        float normalizedFill = value.Remap(0f, 1f, _from, _to);
        _material.SetFloat(FillAmount, normalizedFill);
    }
}