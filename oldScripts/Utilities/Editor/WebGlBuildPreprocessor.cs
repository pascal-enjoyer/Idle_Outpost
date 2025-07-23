using UnityEditor;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;
using UnityEngine;

namespace Utilities.Editor
{
    public class ConfigureWebGLBuild : IPreprocessBuildWithReport
    {
        public int callbackOrder => 0;

        public void OnPreprocessBuild(BuildReport report)
        {
            /*if (report.summary.platform == BuildTarget.WebGL)
            ApplyWebGLOptimizations();*/
        }

        [MenuItem("Tools/WebGL/Apply Optimized Settings")]
        public static void ApplyWebGLOptimizations()
        {
            Debug.Log("⚙️ Применение оптимальных настроек для WebGL...");

            // Общие настройки
            PlayerSettings.WebGL.compressionFormat = WebGLCompressionFormat.Brotli;
            PlayerSettings.WebGL.linkerTarget = WebGLLinkerTarget.Wasm;
            PlayerSettings.WebGL.exceptionSupport = WebGLExceptionSupport.None;
            PlayerSettings.stripEngineCode = true;
            PlayerSettings.WebGL.dataCaching = true;

            // Память
            PlayerSettings.WebGL.memorySize = 32; // Мб

            // Графика
            PlayerSettings.colorSpace = ColorSpace.Gamma; // URP требует Linear, но Built-in можно на Gamma
            PlayerSettings.MTRendering = false;
            PlayerSettings.useHDRDisplay = false;

            // Отключение лишнего
            QualitySettings.shadows = ShadowQuality.Disable;
            QualitySettings.softParticles = false;
            QualitySettings.realtimeReflectionProbes = false;
            QualitySettings.anisotropicFiltering = AnisotropicFiltering.Disable;

            Debug.Log("✅ Готово. WebGL билд будет лёгким и быстрым.");


            Debug.Log("🧪 Применяем настройки оптимизации для Poki...");

            // WebGL Exception Support
            Debug.Log($"Exception support: {PlayerSettings.WebGL.exceptionSupport}");
            if (PlayerSettings.WebGL.exceptionSupport == WebGLExceptionSupport.None)
            {
                Debug.Log("Do nothing...");
            }
            else
            {
                PlayerSettings.WebGL.exceptionSupport = WebGLExceptionSupport.None;
                Debug.Log("Exception support set to WebGLExceptionSupport.None");
            }

            // Compression Format
            Debug.Log($"Compression format: {PlayerSettings.WebGL.compressionFormat}");
            if (PlayerSettings.WebGL.compressionFormat == WebGLCompressionFormat.Disabled)
            {
                Debug.Log("Do nothing...");
            }
            else
            {
                PlayerSettings.WebGL.compressionFormat = WebGLCompressionFormat.Disabled;
                Debug.Log("Compression format set to Disabled");
            }

            // Name Files As Hashes
            Debug.Log($"Name files as hashes: {PlayerSettings.WebGL.nameFilesAsHashes}");
            if (PlayerSettings.WebGL.nameFilesAsHashes)
            {
                Debug.Log("Do nothing...");
            }
            else
            {
                PlayerSettings.WebGL.nameFilesAsHashes = true;
                Debug.Log("Enabled 'Name Files As Hashes'");
            }

            // Data Caching
            Debug.Log($"Data caching: {PlayerSettings.WebGL.dataCaching}");
            if (PlayerSettings.WebGL.dataCaching)
            {
                Debug.Log("Do nothing...");
            }
            else
            {
                PlayerSettings.WebGL.dataCaching = true;
                Debug.Log("Enabled Data Caching");
            }

            // Strip Engine Code
            Debug.Log($"Strip engine code: {PlayerSettings.stripEngineCode}");
            if (PlayerSettings.stripEngineCode)
            {
                Debug.Log("Do nothing...");
            }
            else
            {
                PlayerSettings.stripEngineCode = true;
                Debug.Log("Enabled Strip Engine Code");
            }

            // Managed Stripping Level
            var currentStripping = PlayerSettings.GetManagedStrippingLevel(NamedBuildTarget.WebGL);
            Debug.Log($"Managed stripping level: {currentStripping}");
            if (currentStripping == ManagedStrippingLevel.High)
            {
                Debug.Log("Do nothing...");
            }
            else
            {
                PlayerSettings.SetManagedStrippingLevel(NamedBuildTarget.WebGL, ManagedStrippingLevel.High);
                Debug.Log("Set Managed Stripping Level to High");
            }

            /*// API Compatibility Level
        Debug.Log($"API compatibility level: {PlayerSettings.GetApiCompatibilityLevel(NamedBuildTarget.WebGL)}");
        if (PlayerSettings.GetApiCompatibilityLevel(NamedBuildTarget.WebGL) == ApiCompatibilityLevel.NET_Standard)
        {
            Debug.Log("Do nothing...");
        }
        else
        {
            PlayerSettings.SetApiCompatibilityLevel(NamedBuildTarget.WebGL, ApiCompatibilityLevel.NET_Standard_2_0);
            Debug.Log("Set API Compatibility Level to .NET Standard");
        }*/


            Debug.Log("✅ Poki WebGL настройки применены.");
        }
    }
}