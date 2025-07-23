using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;

public class Joystick : MonoBehaviour, IPointerDownHandler, IEventSystemHandler, IDragHandler, IPointerUpHandler
{
	[SerializeField]
	private float handleRange = 1f;

	[SerializeField]
	private float deadZone = 0f;

	[SerializeField]
	private AxisOptions axisOptions = AxisOptions.Both;

	[SerializeField]
	private bool snapX = false;

	[SerializeField]
	private bool snapY = false;

	[SerializeField]
	protected RectTransform background = null;

	[SerializeField]
	private RectTransform handleRect = null;

	private RectTransform baseRect = null;

	private Canvas canvas;

	private Camera cam;

	public float Horizontal => snapX ? SnapFloat(input.x, AxisOptions.Horizontal) : input.x;

	public float Vertical => snapY ? SnapFloat(input.y, AxisOptions.Vertical) : input.y;

	public Vector2 Direction => new Vector2(Horizontal, Vertical);

	public float HandleRange
	{
		get
		{
			return handleRange;
		}
		set
		{
			handleRange = Mathf.Abs(value);
		}
	}

	public float DeadZone
	{
		get
		{
			return deadZone;
		}
		set
		{
			deadZone = Mathf.Abs(value);
		}
	}

	public AxisOptions AxisOptions
	{
		get
		{
			return AxisOptions;
		}
		set
		{
			axisOptions = value;
		}
	}

	public bool SnapX
	{
		get
		{
			return snapX;
		}
		set
		{
			snapX = value;
		}
	}

	public bool SnapY
	{
		get
		{
			return snapY;
		}
		set
		{
			snapY = value;
		}
	}

	public Vector2 input { get; private set; } = Vector2.zero;


	public static Joystick Instance { get; private set; }

	public void Enable(bool b)
	{
		if (!b)
		{
			input = Vector2.zero;
		}
		base.gameObject.SetActive(b);
		PointerEventData dummyData = new PointerEventData(EventSystem.current);
		OnDrag(dummyData);
		OnPointerUp(dummyData);
	}

	public IEnumerator DisableForFrame()
	{
		Enable(false);
		yield return null;
		Enable(true);
	}

	private void Awake()
	{
		Instance = this;
	}

	protected virtual void Start()
	{
		HandleRange = handleRange;
		DeadZone = deadZone;
		baseRect = GetComponent<RectTransform>();
		canvas = GetComponentInParent<Canvas>();
		if (canvas == null)
		{
			Debug.LogError("The Joystick is not placed inside a canvas");
		}
		Vector2 center = new Vector2(0.5f, 0.5f);
		background.pivot = center;
		handleRect.anchorMin = center;
		handleRect.anchorMax = center;
		handleRect.pivot = center;
		handleRect.anchoredPosition = Vector2.zero;
		PointerEventData dummyData = new PointerEventData(EventSystem.current);
		OnDrag(dummyData);
		OnPointerUp(dummyData);
	}

	public virtual void OnPointerDown(PointerEventData eventData)
	{
		OnDrag(eventData);
	}

	public void OnDrag(PointerEventData eventData)
	{
		if (canvas == null)
		{
			Start();
		}
		cam = null;
		if (canvas.renderMode == RenderMode.ScreenSpaceCamera)
		{
			cam = canvas.worldCamera;
		}
		Vector2 position = RectTransformUtility.WorldToScreenPoint(cam, background.position);
		Vector2 radius = background.sizeDelta / 2f;
		input = (eventData.position - position) / (radius * canvas.scaleFactor);
		FormatInput();
		HandleInput(input.magnitude, input.normalized, radius, cam);
		handleRect.anchoredPosition = input * radius * handleRange;
	}

	protected virtual void HandleInput(float magnitude, Vector2 normalised, Vector2 radius, Camera cam)
	{
		if (magnitude > deadZone)
		{
			if (magnitude > 1f)
			{
				input = normalised;
			}
		}
		else
		{
			input = Vector2.zero;
		}
	}

	private void FormatInput()
	{
		if (axisOptions == AxisOptions.Horizontal)
		{
			input = new Vector2(input.x, 0f);
		}
		else if (axisOptions == AxisOptions.Vertical)
		{
			input = new Vector2(0f, input.y);
		}
	}

	private float SnapFloat(float value, AxisOptions snapAxis)
	{
		if (value == 0f)
		{
			return value;
		}
		if (axisOptions == AxisOptions.Both)
		{
			float angle = Vector2.Angle(input, Vector2.up);
			switch (snapAxis)
			{
			case AxisOptions.Horizontal:
				if (angle < 22.5f || angle > 157.5f)
				{
					return 0f;
				}
				return (value > 0f) ? 1 : (-1);
			case AxisOptions.Vertical:
				if (angle > 67.5f && angle < 112.5f)
				{
					return 0f;
				}
				return (value > 0f) ? 1 : (-1);
			default:
				return value;
			}
		}
		if (value > 0f)
		{
			return 1f;
		}
		if (value < 0f)
		{
			return -1f;
		}
		return 0f;
	}

	public virtual void OnPointerUp(PointerEventData eventData)
	{
		input = Vector2.zero;
		handleRect.anchoredPosition = Vector2.zero;
	}

	protected Vector2 ScreenPointToAnchoredPosition(Vector2 screenPosition)
	{
		Vector2 localPoint = Vector2.zero;
		if (RectTransformUtility.ScreenPointToLocalPointInRectangle(baseRect, screenPosition, cam, out localPoint))
		{
			Vector2 pivotOffset = baseRect.pivot * baseRect.sizeDelta;
			return localPoint - background.anchorMax * baseRect.sizeDelta + pivotOffset;
		}
		return Vector2.zero;
	}
}
