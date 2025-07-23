using System;
using System.IO;
using System.Reflection;
using UnityEditor;
using UnityEngine;

namespace Utilities.Editor
{
    public static class FileSizeUtility
    {
        public static long GetStorageMemorySize(string assetPath)
        {
            var texture = AssetDatabase.LoadAssetAtPath<Texture>(assetPath);
            if (texture != null)
            {
                Type type = Assembly.Load("UnityEditor.dll").GetType("UnityEditor.TextureUtil");
                MethodInfo methodInfo = type.GetMethod("GetStorageMemorySizeLong", BindingFlags.Static | BindingFlags.Instance | BindingFlags.Public);
                return (long)methodInfo.Invoke(null, new object[] { texture });
            }
            
            // todo: get compressed size somehow
            var audioClip = AssetDatabase.LoadAssetAtPath<AudioClip>(assetPath);
            if (audioClip != null)
            {
                /*const int bitDepth = 2;
                long memorySize = (long)audioClip.samples * audioClip.channels * bitDepth;
                Debug.Log($"{audioClip}: {EditorUtility.FormatBytes(memorySize)}");*/
                
                /*Type type = Assembly.Load("UnityEditor.dll").GetType("UnityEditor.AudioUtil");
                MethodInfo methodInfo = type.GetMethod("GetSoundSize", BindingFlags.Static | BindingFlags.Instance | BindingFlags.Public);
                var invoke = (int)methodInfo.Invoke(null, new object[] { audioClip });
                Debug.Log($"{audioClip}: {EditorUtility.FormatBytes(invoke)}");*/
                
                return new FileInfo(assetPath).Length;
                /*return memorySize;
                return invoke;*/
            }

            return 0;
        }
    }
}