using System.Collections;
using UnityEngine;

namespace Utilities.Coroutines
{
    public interface ICoroutineRunner
    {
        public Coroutine StartCoroutine(IEnumerator routine);
        public void StopCoroutine(Coroutine routine);
    }
}