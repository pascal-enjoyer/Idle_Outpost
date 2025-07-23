using UnityEngine;

namespace QuestSystem
{
	public class QuestController : MonoBehaviour
	{
		[SerializeField]
		private MainCamera _mainCamera;

		[SerializeField]
		private HeroQuestArrow _heroQuestArrow;

		[SerializeField]
		private Quest[] _quests;

		private int _activeQuestIndex;

		private Quest ActiveQuest => _quests[_activeQuestIndex];

		private void Start()
		{
			for (int i = 0; i < _quests.Length; i++)
			{
				_quests[i].Construct(_heroQuestArrow, _mainCamera);
			}
			_activeQuestIndex = 0;
			BeginActiveQuest();
		}

		private void OnQuestCompleted()
		{
			ActiveQuest.Completed -= OnQuestCompleted;
			if (_activeQuestIndex + 1 < _quests.Length)
			{
				_activeQuestIndex++;
				BeginActiveQuest();
			}
		}

		private void BeginActiveQuest()
		{
			ActiveQuest.Completed += OnQuestCompleted;
			ActiveQuest.Begin();
		}
	}
}
