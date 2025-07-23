using System;
using UnityEngine;

namespace QuestSystem
{
	public abstract class Quest : MonoBehaviour
	{
		[SerializeField]
		protected TopQuestArrow TopQuestArrow;

		[SerializeField]
		private Transform _target;

		[SerializeField]
		private float _showCameraDuration = 1.5f;

		[SerializeField]
		private bool _useTopArrow = true;

		[SerializeField]
		private bool _useHeroArrow = true;

		[SerializeField]
		private bool _useCamera = true;

		private HeroQuestArrow _heroQuestArrow;

		private MainCamera _mainCamera;

		public event Action Completed;

		public virtual void Construct(HeroQuestArrow heroQuestArrow, MainCamera mainCamera)
		{
			_heroQuestArrow = heroQuestArrow;
			_mainCamera = mainCamera;
		}

		public virtual void Begin()
		{
			if (_useHeroArrow)
			{
				_heroQuestArrow.SetTarget(_target);
			}
			if (_useCamera)
			{
				_mainCamera.Show(_target, _showCameraDuration);
			}
			if (_useTopArrow)
			{
				TopQuestArrow.Show();
			}
		}

		protected void InvokeCompleted()
		{
			if (_useHeroArrow)
			{
				_heroQuestArrow.SetTarget(null);
			}
			if (_useTopArrow)
			{
				TopQuestArrow.Hide();
			}
			this.Completed?.Invoke();
		}

		protected void ShowHeroQuestArrowFor(Transform customTarget)
		{
			_heroQuestArrow.SetTarget(customTarget);
		}
	}
}
