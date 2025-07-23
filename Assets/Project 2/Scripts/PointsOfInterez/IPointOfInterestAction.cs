using UnityEngine;

public interface IPointOfInterestAction
{
    void Initialize(PlayerController player);
    void InitializeNPC(NPC npc);
    void PerformAction(PlayerController player);
    void PerformActionNPC(NPC npc);
    bool IsPerformingAction();
    void InterruptAction(PlayerController player);
}