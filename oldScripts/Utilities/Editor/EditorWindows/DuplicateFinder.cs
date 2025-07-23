using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using Extensions;
using UnityEditor;
using UnityEngine;
using Debug = UnityEngine.Debug;

namespace Utilities.Editor.EditorWindows
{
    public struct DuplicateData
    {
        public long Size;
        public HashSet<string> Paths;
    }

    public class DuplicateFinder : EditorWindow
    {
        private string _folderPath = "";
        private SearchOption _searchOption = SearchOption.AllDirectories;
        private Dictionary<string, DuplicateData> _duplicates = new();
        private Vector2 _scrollPosition;
        private float _scanTime;
        private int _duplicatesCount;
        private long _totalDuplicateSize;

        [MenuItem("Tools/Find Duplicates")]
        public static void ShowWindow() =>
            GetWindow<DuplicateFinder>("Find Duplicates");

        private void OnGUI()
        {
            EditorGUILayout.LabelField("Folder Path (relative to project root):", EditorStyles.label);
            _folderPath = EditorGUILayout.TextField(_folderPath);
            _searchOption = (SearchOption)EditorGUILayout.EnumPopup(_searchOption);

            if (GUILayout.Button("Find Duplicates"))
                FindDuplicates(_folderPath);

            if (_duplicates.Count > 0)
                DrawDuplicatesList();
        }

        private void DrawDuplicatesList()
        {
            EditorGUILayout.Space();
            EditorGUILayout.LabelField($"Duplicate Files:", EditorStyles.boldLabel);
            string scanTime = _scanTime > 120f ? $"{_scanTime.ToMinutes()}m" : $"{_scanTime:F1}s";
            EditorGUILayout.LabelField($"Scanned for {scanTime}, found {_duplicatesCount} duplicates", EditorStyles.label);
            EditorGUILayout.LabelField($"Potential space savings: {EditorUtility.FormatBytes(_totalDuplicateSize)}", EditorStyles.label);

            _scrollPosition = EditorGUILayout.BeginScrollView(_scrollPosition);
            var filesToRemove = new HashSet<string>();

            foreach ((string hash, DuplicateData data) in _duplicates.OrderByDescending(d => d.Value.Size * (d.Value.Paths.Count - 1)))
            {
                if (data.Paths.Count <= 1)
                    continue;

                EditorGUILayout.LabelField($"Hash: {hash} ({EditorUtility.FormatBytes(_duplicates[hash].Size)} x {_duplicates[hash].Paths.Count})",
                    EditorStyles.miniBoldLabel);
                foreach (string filePath in data.Paths)
                {
                    EditorGUILayout.BeginHorizontal();
                    EditorGUILayout.LabelField(filePath, EditorStyles.wordWrappedLabel);
                    if (GUILayout.Button("Delete", GUILayout.Width(60)))
                        filesToRemove.Add(filePath);
                    EditorGUILayout.EndHorizontal();
                }

                EditorGUILayout.Space();
            }

            foreach (string filePath in filesToRemove)
                DeleteFile(filePath);

            EditorGUILayout.EndScrollView();
        }

        private void FindDuplicates(string folderPath)
        {
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            var extensions = new HashSet<string> { ".mp3", ".wav", ".ogg", ".flac", ".aiff", ".png", ".jpg", ".jpeg" };
            const string assetsPath = "Assets\\";
            string searchPath = string.IsNullOrWhiteSpace(folderPath) ? assetsPath : folderPath.Replace('/', '\\');
            _duplicates = new Dictionary<string, DuplicateData>();
            _totalDuplicateSize = 0;

            string[] allFiles = Directory.GetFiles(assetsPath, "*.*", SearchOption.AllDirectories);
            string[] folderFiles = Directory.GetFiles(searchPath, "*.*", _searchOption);

            foreach (string filePath in folderFiles)
            {
                string fileExtension = Path.GetExtension(filePath).ToLowerInvariant();
                if (!extensions.Contains(fileExtension))
                    continue;

                string fileHash = ComputeFileHash(filePath);
                long fileSize = FileSizeUtility.GetStorageMemorySize(filePath);
                if (!_duplicates.ContainsKey(fileHash))
                {
                    _duplicates[fileHash] = new DuplicateData
                    {
                        Size = fileSize,
                        Paths = new HashSet<string> { filePath }
                    };
                }
            }

            foreach (string filePath in allFiles)
            {
                string fileExtension = Path.GetExtension(filePath).ToLowerInvariant();
                if (!extensions.Contains(fileExtension))
                    continue;

                string fileHash = ComputeFileHash(filePath);
                if (_duplicates.TryGetValue(fileHash, out DuplicateData data) && !data.Paths.Contains(filePath))
                {
                    data.Paths.Add(filePath);
                    _totalDuplicateSize += data.Size;
                }
            }

            _duplicatesCount = _duplicates.Count(x => x.Value.Paths.Count > 1);

            stopwatch.Stop();
            _scanTime = stopwatch.ElapsedMilliseconds / 1000f;
        }

        private static string ComputeFileHash(string filePath)
        {
            using var md5 = MD5.Create();
            using FileStream stream = File.OpenRead(filePath);
            byte[] hash = md5.ComputeHash(stream);
            return BitConverter.ToString(hash).Replace("-", "").ToLowerInvariant();
        }

        private void DeleteFile(string filePath)
        {
            try
            {
                File.Delete(filePath);
                AssetDatabase.Refresh();
                RemoveFileFromDuplicates(filePath);
            }
            catch (Exception ex)
            {
                Debug.LogError($"Failed to delete {filePath}: {ex.Message}");
            }
        }

        private void RemoveFileFromDuplicates(string filePath)
        {
            var keysToRemove = new HashSet<string>();

            foreach (KeyValuePair<string, DuplicateData> kvp in _duplicates)
            {
                kvp.Value.Paths.Remove(filePath);
                if (kvp.Value.Paths.Count == 0)
                    keysToRemove.Add(kvp.Key);
            }

            foreach (string key in keysToRemove)
                _duplicates.Remove(key);
        }
    }
}