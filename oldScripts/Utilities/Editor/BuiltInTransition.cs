using System.Collections.Generic;
using Extensions;
using UnityEngine;
using UnityEditor;
using UnityEngine.Rendering;

public class BuiltInTransition
{
    private static readonly Dictionary<string, string> ShaderMap = new()
    {
        { "Universal Render Pipeline/Lit", "Standard" },
        { "Universal Render Pipeline/Simple Lit", "Standard" },
        { "Universal Render Pipeline/Unlit", "Unlit" },
        { "Universal Render Pipeline/Particles/Unlit", "Particles/Standard Unlit" },
        { "Universal Render Pipeline/Particles/Lit", "Particles/Standard Surface" },
        { "Universal Render Pipeline/Particles/Simple Lit", "Particles/Standard Surface" },
        { "Shader Graphs/BakedTransparency", "Standard" },
    };

    private static readonly int BaseMap = Shader.PropertyToID("_BaseMap");
    private static readonly int BaseColor = Shader.PropertyToID("_BaseColor");
    private static readonly int MainTex = Shader.PropertyToID("_MainTex");
    private static readonly int Color = Shader.PropertyToID("_Color");
    private static readonly int Surface = Shader.PropertyToID("_Surface");

    [MenuItem("Tools/URP Materials → Built-in")]
    private static void ReplaceMaterials()
    {
        string[] guids = AssetDatabase.FindAssets("t:Material");
        var count = 0;

        foreach (string guid in guids)
        {
            string path = AssetDatabase.GUIDToAssetPath(guid);
            var material = AssetDatabase.LoadAssetAtPath<Material>(path);
            
            if (material != null && material.HasProperty("_SoftParticlesEnabled"))
            {
                if (material.GetFloat("_SoftParticlesEnabled") != 0)
                {
                    material.SetFloat("_SoftParticlesEnabled", 0);
                    EditorUtility.SetDirty(material);
                }
            }

            if (ShaderMap.TryGetValue(material.shader.name, out string builtInShaderName))
            {
                Texture baseMap = material.HasProperty(BaseMap) ? material.GetTexture(BaseMap) : null;
                Color baseColor = material.HasProperty(BaseColor) ? material.GetColor(BaseColor) : UnityEngine.Color.white;
                float oldSurfaceType = material.HasProperty(Surface) ? material.GetFloat(Surface) : 0f;
                string targetShaderName;

                if (builtInShaderName == "Unlit")
                {
                    targetShaderName = oldSurfaceType.ApproximatelyEqual(1f)
                        ? "Unlit/Transparent"
                        : "Unlit/Color";
                }
                else
                {
                    targetShaderName = builtInShaderName;
                }

                Shader builtInShader = Shader.Find(targetShaderName);

                if (builtInShader != null)
                {
                    string oldShaderName = material.shader.name;
                    material.shader = builtInShader;
                    if (material.HasProperty(MainTex) && baseMap != null)
                        material.SetTexture(MainTex, baseMap);
                    if (material.HasProperty(Color))
                        material.SetColor(Color, baseColor);

                    if (builtInShaderName == "Particles/Standard Unlit" && oldSurfaceType.ApproximatelyEqual(1f))
                    {
                        material.SetFloat("_Mode", 2f); // Fade
                        material.SetFloat("_BlendOp", 1f); // Multiply
                        material.SetInt("_SrcBlend", 5); // SrcAlpha
                        material.SetInt("_DstBlend", 1); // One
                        material.renderQueue = (int)RenderQueue.Transparent;
                        material.EnableKeyword("SOFTPARTICLES_ON"); // если нужно
                    }
                    else if (builtInShaderName == "Standard" && oldSurfaceType.ApproximatelyEqual(1f)
                             || oldShaderName == "Shader Graphs/BakedTransparency")
                    {
                        material.SetFloat("_Mode", 2f); // Fade
                        material.SetOverrideTag("RenderType", "Transparent");
                        material.SetInt("_SrcBlend", (int)BlendMode.SrcAlpha);
                        material.SetInt("_DstBlend", (int)BlendMode.OneMinusSrcAlpha);
                        material.SetInt("_ZWrite", 0);
                        material.DisableKeyword("_ALPHATEST_ON");
                        material.EnableKeyword("_ALPHABLEND_ON");
                        material.DisableKeyword("_ALPHAPREMULTIPLY_ON");
                        material.renderQueue = (int)RenderQueue.Transparent;
                    }
                    
                    Debug.Log($"✅ {material.name} заменён: {oldShaderName} → {builtInShader.name} with {material.GetFloat("_Mode")}");
                    count++;
                }
                else
                {
                    Debug.LogWarning($"⚠ Не найден Built-in шейдер: {builtInShaderName}");
                }
            }
        }

        Debug.Log($"Заменено материалов: {count}");
        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();
    }
}