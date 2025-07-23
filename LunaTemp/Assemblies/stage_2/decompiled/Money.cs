using DG.Tweening;
using TMPro;
using UnityEngine;

public class Money : MonoBehaviour
{
	[SerializeField]
	private TMP_Text _text;

	private int _visualAmount;

	private int _amount;

	private void Awake()
	{
		_amount = 0;
		_visualAmount = 0;
		UpdateText(_visualAmount);
	}

	public void AddAmount(int addition)
	{
		int newAmount = (_amount += addition);
		DOVirtual.Int(_visualAmount, newAmount, 1f, UpdateText);
	}

	public void Withdraw(int amount, float duration = 1f)
	{
		int newAmount = (_amount -= amount);
		DOVirtual.Int(_visualAmount, newAmount, duration, UpdateText);
	}

	private void UpdateText(int value)
	{
		_visualAmount = value;
		_text.SetText("{0}", value);
	}
}
