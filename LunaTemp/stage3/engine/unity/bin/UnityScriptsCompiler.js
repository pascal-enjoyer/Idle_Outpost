if ( TRACE ) { TRACE( JSON.parse( '["Audio.AudioEffect#Construct","Audio.AudioEffect#Play","Audio.AudioEffect#Stop","Audio.AudioEffect#Pause","Audio.AudioEffect#Unpause","Audio.AudioEffect#ReleaseAfterPlay","BulletBubble#Awake","BulletBubble#OnDestroy","BulletBubble#ValueChanged","Characters.FailZombie#init","Characters.FailZombie#Update","Characters.FailZombie#OnEnable","Characters.FailZombie#AnimateMasonBite","Characters.Glen#init","Characters.Glen#Awake","Characters.Glen#OnDestroy","Characters.Glen#Update","Characters.Glen#Upgrade","Characters.Glen#Disable","Characters.Glen#OnConveyorSelected","Characters.Glen#MoveToWarehouse","Characters.Glen#PickUpBullet","Characters.Glen#MoveToConveyor","Characters.Glen#DropBullet","Characters.Glen#MoveTo","Characters.Glen#PlayUpgradeEffect","Characters.Glen#SwitchState","Characters.GlenAnimator#Idle","Characters.GlenAnimator#Move","Characters.GlenAnimator#SetTrigger","Characters.Mason#init","Characters.Mason#Update","Characters.Mason#StopShooting","Characters.Mason#IncreaseShootingSpeed","Characters.Mason#TryGetRandomZombieInRange","Characters.MasonAnimator#Shoot","Characters.MasonAnimator#SetTrigger","Characters.Zombie#SqrDistanceToTarget#get","Characters.Zombie#init","Characters.Zombie#Construct","Characters.Zombie#Tick","Characters.Zombie#HasSpace","Characters.Zombie#SetTarget","Characters.Zombie#Die","Characters.Zombie#Attack","Characters.ZombieAnimator#Idle","Characters.ZombieAnimator#Walk","Characters.ZombieAnimator#Bite","Characters.ZombieAnimator#Death","Characters.ZombieAnimator#SetTrigger","Characters.ZombieManager#ActionOnRelease","Characters.ZombieManager#init","Characters.ZombieManager#Awake","Characters.ZombieManager#Update","Characters.ZombieManager#KillZombie","Characters.ZombieManager#StopSpawn","Characters.ZombieManager#SpawnRoutine","Characters.ZombieManager#SetZombieTarget","Characters.ZombieManager#ActionOnGet","Characters.ZombieManager#CreateZombie","Characters.ZombieMason#init","Characters.ZombieMason#Update","Characters.ZombieMason#Transition","ColorZone#Awake","ColorZone#OnTriggerEnter","ColorZone#OnTriggerExit","ColorZone#SetColor","ColorZoneElement#init","Conveyors.ConveyorBuyActivator#Awake","Conveyors.ConveyorBuyActivator#OnDestroy","Conveyors.ConveyorBuyActivator#ActivateConveyor","Conveyors.ConveyorBuyActivator#ActivateAfterDelay","Conveyors.ConveyorItem#Construct","Conveyors.ConveyorItem#Update","Conveyors.ConveyorItem#StartMove","Conveyors.ConveyorItem#StopMove","Conveyors.ConveyorItem#Release","Conveyors.InteractiveConveyor#InteractionPoint#get","Conveyors.InteractiveConveyor#ReceiveBullet","Conveyors.InteractiveConveyor#OnSelected","Conveyors.InteractiveConveyorPoint#InteractionPoint#get","Conveyors.InteractiveConveyorPoint#MoveBullet","Conveyors.InteractiveConveyorPoint#ProcessBulletByNextPoint","Conveyors.InteractiveConveyorFinishZone#OnTriggerEnter2D","Conveyors.VisualConveyor#ReleaseItem","Conveyors.VisualConveyor#init","Conveyors.VisualConveyor#Awake","Conveyors.VisualConveyor#StartWork","Conveyors.VisualConveyor#CreateItem","Conveyors.VisualConveyor#Warmup","Conveyors.VisualConveyor#WorkRoutine","Conveyors.VisualConveyorEnd#OnTriggerEnter2D","DefaultNamespace.MaskedFillBar#init","DefaultNamespace.MaskedFillBar#Render","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","DragToMove#init","DragToMove#Awake","DragToMove#Update","DragToMove#Show","DragToMove#Hide","Joystick#Horizontal#get","Joystick#Vertical#get","Joystick#Direction#get","Joystick#HandleRange#get","Joystick#HandleRange#set","Joystick#DeadZone#get","Joystick#DeadZone#set","Joystick#AxisOptions#get","Joystick#AxisOptions#set","Joystick#SnapX#get","Joystick#SnapX#set","Joystick#SnapY#get","Joystick#SnapY#set","Joystick#init","Joystick#Enable","Joystick#DisableForFrame","Joystick#Awake","Joystick#Start","Joystick#OnPointerDown","Joystick#OnDrag","Joystick#HandleInput","Joystick#FormatInput","Joystick#SnapFloat","Joystick#OnPointerUp","Joystick#ScreenPointToAnchoredPosition","Extensions.ArrayExtensions#GetRandom","Extensions.ArrayExtensions#GetRandom$1","Extensions.DictionaryExtensions#Add","Extensions.DictionaryExtensions#Copy","Extensions.DictionaryExtensions#CloneObject","Extensions.FloatExtensions#Remap","Extensions.FloatExtensions#Remap01","Extensions.FloatExtensions#ApproximatelyEqual","Extensions.FloatExtensions#ApproximatelyEqual$1","Extensions.FloatExtensions#ToMinutes","Extensions.IntExtensions#Remap","Extensions.IntExtensions#ToLayerMask","Extensions.IntExtensions#ToLayerMaskValue","Extensions.LayerMaskExtensions#Contains","Extensions.LayerMaskExtensions#ToLayer","Extensions.ListExtensions#Shuffle","Extensions.ListExtensions#Random","Extensions.ListExtensions#AddIfNotContains","Extensions.QuaternionExtensions#SmoothDamp","Extensions.QuaternionExtensions#IsEqualTo","Extensions.StringExtensions#init","Extensions.StringExtensions#GetPrettifiedNumber","Extensions.StringExtensions#GetCachedAppend","Extensions.StringExtensions#GetCachedPrepend","Extensions.StringExtensions#GetCachedPrepend$1","Extensions.StringExtensions#PrettifyNumber$3","Extensions.StringExtensions#PrettifyNumber$2","Extensions.StringExtensions#PrettifyNumber$1","Extensions.StringExtensions#PrettifyNumber","Extensions.StringExtensions#GetStateName","Extensions.StringExtensions#IsNullOrWhitespace","Extensions.TransformExtensions#SetPositionAndRotation","Extensions.TransformExtensions#DestroyAllChildren","Extensions.TweenExtensions#DoPopUp$1","Extensions.TweenExtensions#DoPopUp","Extensions.TweenExtensions#DoPopDown$1","Extensions.TweenExtensions#DoPopDown","Extensions.VectorExtensions#RandomPointOnLine","Extensions.VectorExtensions#Set","Extensions.VectorExtensions#SetY","Extensions.VectorExtensions#SetX","Extensions.VectorExtensions#SetZ","Extensions.VectorExtensions#IsInRangeXZ","Extensions.VectorExtensions#IsInRange","Extensions.VectorExtensions#GetRandomInRadiusXZ","Extensions.VectorExtensions#GetRandom","Extensions.VectorExtensions#IsOnScreen","Extensions.VectorExtensions#MoveByDistanceTo","Extensions.VectorFactory#Create","Extensions.VectorFactory#CreateX","Extensions.VectorFactory#CreateY","Factories.FactoryBuyActivator#Awake","Factories.FactoryBuyActivator#OnDestroy","Factories.FactoryBuyActivator#ActivateConveyor","Factories.FactoryBuyActivator#ActivateAfterDelay","Factories.FactoryUpgrade#Awake","Factories.FactoryUpgrade#OnDestroy","Factories.FactoryUpgrade#Upgrade","Factories.FactoryUpgrade#Disable","Factories.ItemPickup#init","Factories.ItemPickup#Update","Factories.ItemPickup#OnTriggerEnter","Factories.ItemPickup#OnTriggerExit","Factories.LogFactory#init","Factories.LogFactory#Update","Factories.LogFactory#StartWork","Factories.LogFactory#StopWork","Factories.LogFactory#SpawnLog","Factories.PlankFactory#init","Factories.PlankFactory#Awake","Factories.PlankFactory#Update","Factories.PlankFactory#ProceedLog","Factories.PlankFactory#Upgrade","Factories.PlankFactory#OnLogProceeds","Factories.PlankFactory#SpawnPlank","FixedWidthCamera#init","FixedWidthCamera#Awake","FixedWidthCamera#Update","FixedWidthCamera#UpdateCameraSize","GameEnd#Win","GameEnd#Fail","GameEnd#FailRoutine","GameResources.ResourceView#init","GameResources.ResourceView#Awake","GameResources.ResourceView#Start","GameResources.ResourceView#OnDestroy","GameResources.ResourceView#ValueChanged","GameResources.ResourceView#ShowHideIfNeeded","GameResources.Storage#init","GameResources.Storage#Awake","GameResources.Storage#AddResource","GameResources.Storage#AddResources$1","GameResources.Storage#AddResources","GameResources.Storage#GetResource","GameResources.Storage#SetResource","GameResources.Storage#RemoveResource","GameResources.Storage#RemoveResources","GameResources.Storage#HasResource","GameResources.Storage#HasResources","GameResources.Storage#TotalAmount","GameResources.Storage#Empty","GameResources.Storage#Clear","Hero.HeroMaxStack#Awake","Hero.HeroMaxStack#Update","Hero.HeroMaxStack#AnyStackIsFull","Hero.HeroMovement#init","Hero.HeroMovement#FixedUpdate","Hero.HeroMovement#Disable","Hero.HeroStack#Root#get","Hero.HeroStack#Type#get","Hero.HeroStack#Amount#get","Hero.HeroStack#IsEmpty#get","Hero.HeroStack#HasSpace#get","Hero.HeroStack#FreeSpaceAmount#get","Hero.HeroStack#init","Hero.HeroStack#SpawnItems","Hero.HeroStack#AddItems","Hero.HeroStack#AddItem","Hero.HeroStack#RemoveItem","Hero.HeroStack#Clear","Hero.HeroStackManager#GetStack","Hero.HeroStackManager#CanAddItem","Hero.LookAtCamera#Start","Hero.LookAtCamera#LateUpdate","Inputs.ConveyorSelector#init","Inputs.ConveyorSelector#Awake","Inputs.ConveyorSelector#Update","Inputs.JoystickAlphaController#init","Inputs.JoystickAlphaController#Update","ItemAutoConstruct#Awake","MainCamera#init","MainCamera#Awake","MainCamera#LateUpdate","MainCamera#Show","MainCamera#ShowRoutine","Money#Awake","Money#AddAmount","Money#Withdraw","Money#UpdateText","Progression.GameTrigger#InvokeTriggered","PackShots.PackShot#Show","PackShots.PackShot#OnButtonClick","PackShots.PackShotChooser#Show","PointsPlacer#init","Pools.ResourcesPools#Get","Pools.ResourcesPools#GetResource","Progression.GateUnlock#Awake","Progression.GateUnlock#OnDestroy","Progression.GateUnlock#OpenGate","QuestSystem.Quest#init","QuestSystem.Quest#Construct","QuestSystem.Quest#Begin","QuestSystem.Quest#InvokeCompleted","QuestSystem.Quest#ShowHeroQuestArrowFor","QuestSystem.HeroQuestArrow#init","QuestSystem.HeroQuestArrow#Update","QuestSystem.HeroQuestArrow#SetTarget","QuestSystem.QuestController#ActiveQuest#get","QuestSystem.QuestController#Start","QuestSystem.QuestController#OnQuestCompleted","QuestSystem.QuestController#BeginActiveQuest","QuestSystem.TopQuestArrow#init","QuestSystem.TopQuestArrow#Awake","QuestSystem.TopQuestArrow#OnDestroy","QuestSystem.TopQuestArrow#Show","QuestSystem.TopQuestArrow#Hide","Scenario#Awake","Scenario#OnDestroy","Scenario#Update","Scenario#Fail","Scenario#HandleConveyorClickStep","Scenario#HandleBottomConveyorStep","Scenario#OnBulletReceived","Scenario#OnConveyorSelected","Scroller.Scroller#init","Scroller.Scroller#Awake","Scroller.Scroller#OnDisable","Scroller.Scroller#Update","ShaderFillBar#init","ShaderFillBar#Init","ShaderFillBar#SetProgress","SpriteFlash#init","SpriteFlash#Awake","SpriteFlash#OnDestroy","SpriteFlash#DisableAfterTime","SpriteFlash#OnConveyorSelected","SpriteVfx.SpriteVfx#Construct","SpriteVfx.SpriteVfx#Play","SpriteVfx.SpriteVfx#OnDisable","SpriteVfx.SpriteVfx#DisableAfterPlay","SpriteVfx.SpriteVfxPool#ActionOnGet","SpriteVfx.SpriteVfxPool#Type#get","SpriteVfx.SpriteVfxPool#Awake","SpriteVfx.SpriteVfxPool#Spawn","SpriteVfx.SpriteVfxPool#Release","SpriteVfx.SpriteVfxPool#CreateVfx","SpriteVfx.SpriteVfxService#Awake","SpriteVfx.SpriteVfxService#Spawn","SpriteVfx.SpriteVfxService#GetPool","Trucks.Truck#init","Trucks.Truck#Construct","Trucks.Truck#Update","Trucks.Truck#MoveTo","Trucks.Truck#WaitLoad","Trucks.Truck#Clear","Trucks.TruckPoint#Position#get","Trucks.TruckPoint#Rotation#get","Trucks.TruckPoint#StopIsAllowed#get","Trucks.TruckPoint#init","Trucks.TruckPoint#Occupy","Trucks.TruckPoint#Release","Trucks.TrucksManager#init","Trucks.TrucksManager#Awake","Trucks.TrucksManager#Update","Trucks.TrucksManager#StartSpawn","Trucks.TrucksManager#HandleTruck","Trucks.TrucksManager#GetNextStopIndex","Trucks.TrucksManager#CreateTruck","Trucks.TrucksManager#WaitUntilFree","Trucks.TrucksManager#FindFurthestFreeIndex","Trucks.TrucksManager#HasFreePoints","Unlockable#init","Unlockable#Awake","Unlockable#OnDestroy","Unlockable#Unlock","Unlockable#ActivateAfterDelay","Unlockable#Activate","Upgrades.SpeedUpgrade#Current#get","Upgrades.SpeedUpgrade#Awake","Upgrades.SpeedUpgrade#OnDestroy","Upgrades.SpeedUpgrade#ValueChanged","Upgrades.SpeedUpgrade#BuyUpgrade","Upgrades.UpgradeView#Awake","Upgrades.UpgradeView#OnDestroy","Upgrades.UpgradeView#Render","Upgrades.UpgradeView#OnBuyButtonClicked","Utilities.Animations.MyAnimator#CrossFade","Utilities.Animations.MyAnimator#CrossFade$1","Utilities.AutoRotate#init","Utilities.AutoRotate#Update","Utilities.AutoRotate#Enable","Utilities.AutoRotate#Disable","Utilities.BiDictionary$2#init","Utilities.BiDictionary$2#Add","Utilities.BiDictionary$2#TryGetByFirst","Utilities.BiDictionary$2#TryGetBySecond","Utilities.ClampedPercentageValue#Value#get","Utilities.Coroutines.CoroutineObjectBase#IsProcessing#get","Utilities.Coroutines.CoroutineObjectBase#Stop","Utilities.DontDestroy#Awake","Utilities.InterfaceRequired.InterfaceRequiredAttribute#ctor","Utilities.MathParabola#Parabola$1","Utilities.MathParabola#Parabola","Utilities.MathParabola#Func","Utilities.RandomHelper#Check","Wheel#Rotate","ZombieTransition#init","ZombieTransition#ShowTransition","ZombieTransition#TransitionRoutine","Audio.AudioService#ActionOnRelease","Audio.AudioService#ActionOnGet","Audio.AudioService#init","Audio.AudioService#Awake","Audio.AudioService#CreateAudioEffect","Audio.AudioService#Reset","Audio.AudioService#PlayMusic","Audio.AudioService#PauseMusic","Audio.AudioService#TryPlayEffect","Audio.AudioService#TryPlayEffect$1","Audio.AudioService#IsPlaying","Audio.AudioService#TryStopEffect","Audio.AudioService#PauseEffects","Audio.AudioService#ResumeEffects","Audio.AudioService#Release","Audio.AudioService#StopAndClearEffects","Audio.AudioService#PlayEffect","Conveyors.InteractiveConveyorAccelerator#ProcessBullet","Conveyors.InteractiveConveyorAccelerator#AnimateSpriteRenderer","Conveyors.InteractiveConveyorMultiplier#ProcessBullet","Conveyors.InteractiveConveyorMultiplier#AnimateSpriteRenderer","Conveyors.InteractiveConveyorUnlockPoint#init","Conveyors.InteractiveConveyorUnlockPoint#Awake","Conveyors.InteractiveConveyorUnlockPoint#ProcessBullet","Conveyors.InteractiveConveyorUnlockPoint#Unlock","Conveyors.SimpleInteractiveConveyorPoint#ProcessBullet","DynamicJoystick#MoveThreshold#get","DynamicJoystick#MoveThreshold#set","DynamicJoystick#init","DynamicJoystick#Start","DynamicJoystick#OnPointerDown","DynamicJoystick#OnPointerUp","DynamicJoystick#HandleInput","FloatingJoystick#Start","FloatingJoystick#OnPointerDown","FloatingJoystick#OnPointerUp","Resource#Type#get","Resource#Construct","Resource#Release","MoneyPickup#OnTriggerEnter","Pools.ObjectPool$1#CountActive#get","Pools.ObjectPool$1#CountInactive#get","Pools.ObjectPool$1#ctor","Pools.ObjectPool$1#Get","Pools.ObjectPool$1#Release","Pools.ObjectPool$1#Clear","Pools.ObjectPool$1#Dispose","Progression.BuyZone#Awake","Progression.BuyZone#OnDestroy","Progression.BuyZone#OnTriggerEnter","Progression.BuyZone#TakeMoneyFromHero","Progression.BuyZone#ThrowCoinArc","Progression.BuyZone#UpdateVisuals","Progression.ItemPickupTrigger#Update","QuestSystem.BuyZoneQuest#Begin","QuestSystem.BuyZoneQuest#OnBought","QuestSystem.TakeFromStackQuest#Begin","QuestSystem.TakeFromStackQuest#OnPickedUp","QuestSystem.TakeMoneyQuest#Begin","QuestSystem.TakeMoneyQuest#OnMoneyPickedUp","Scroller.SpriteScroller#init","Scroller.SpriteScroller#Scroll","Scroller.UvScroller#Scroll","Utilities.Coroutines.CoroutineObject#ctor","Utilities.Coroutines.CoroutineObject#Process","Utilities.Coroutines.CoroutineObject#Start","Utilities.Coroutines.CoroutineObject$1#ctor","Utilities.Coroutines.CoroutineObject$1#Process","Utilities.Coroutines.CoroutineObject$1#Start","Utilities.Reactives.ReactiveProperty$1#Value#get","Utilities.Reactives.ReactiveProperty$1#Value#set","Utilities.Reactives.ReactiveProperty$1#init","Utilities.Reactives.ReactiveProperty$1#ctor","Utilities.Reactives.ReactiveProperty$1#$ctor1","VariableJoystick#MoveThreshold#get","VariableJoystick#MoveThreshold#set","VariableJoystick#init","VariableJoystick#SetMode","VariableJoystick#Start","VariableJoystick#OnPointerDown","VariableJoystick#OnPointerUp","VariableJoystick#HandleInput","GameResources.Bullet#init","GameResources.Bullet#Update","GameResources.Bullet#Move","GameResources.Bullet#Stop","MoneyResource#init","Pools.ResourcePool#Type#get","Pools.ResourcePool#CountActive#get","Pools.ResourcePool#Awake","Pools.ResourcePool#Get","Pools.ResourcePool#Release","Pools.ResourcePool#Create"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*Audio.AudioEffect start.*/
    Bridge.define("Audio.AudioEffect", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _source: null,
            _audioService: null,
            _ignorePause: false,
            IsPlaying: false,
            PlayId: 0
        },
        methods: {
            /*Audio.AudioEffect.Construct start.*/
            Construct: function (audioService) {
if ( TRACE ) { TRACE( "Audio.AudioEffect#Construct", this ); }

                this._audioService = audioService;
            },
            /*Audio.AudioEffect.Construct end.*/

            /*Audio.AudioEffect.Play start.*/
            Play: function (clip, loop, playId, ignorePause) {
if ( TRACE ) { TRACE( "Audio.AudioEffect#Play", this ); }

                this.PlayId = playId;
                this.IsPlaying = true;
                this._ignorePause = ignorePause;
                this._source.clip = clip;
                this._source.loop = loop;
                this._source.Play();
                if (!loop) {
                    this.StartCoroutine$1(this.ReleaseAfterPlay(clip));
                }
            },
            /*Audio.AudioEffect.Play end.*/

            /*Audio.AudioEffect.Stop start.*/
            Stop: function (removeFromPlayingSounds) {
if ( TRACE ) { TRACE( "Audio.AudioEffect#Stop", this ); }

                if (removeFromPlayingSounds === void 0) { removeFromPlayingSounds = true; }
                this._source.Stop();
                this.IsPlaying = false;
                this._audioService.Audio$IAudioService$Release(this, removeFromPlayingSounds);
            },
            /*Audio.AudioEffect.Stop end.*/

            /*Audio.AudioEffect.Pause start.*/
            Pause: function () {
if ( TRACE ) { TRACE( "Audio.AudioEffect#Pause", this ); }

                if (!this._ignorePause) {
                    this._source.Pause();
                }
            },
            /*Audio.AudioEffect.Pause end.*/

            /*Audio.AudioEffect.Unpause start.*/
            Unpause: function () {
if ( TRACE ) { TRACE( "Audio.AudioEffect#Unpause", this ); }

                if (!this._ignorePause) {
                    this._source.Play();
                }
            },
            /*Audio.AudioEffect.Unpause end.*/

            /*Audio.AudioEffect.ReleaseAfterPlay start.*/
            ReleaseAfterPlay: function (clip) {
if ( TRACE ) { TRACE( "Audio.AudioEffect#ReleaseAfterPlay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(clip.length);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._audioService.Audio$IAudioService$Release(this, true);
                                        this.IsPlaying = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Audio.AudioEffect.ReleaseAfterPlay end.*/


        }
    });
    /*Audio.AudioEffect end.*/

    /*Audio.IAudioService start.*/
    Bridge.define("Audio.IAudioService", {
        $kind: 3
    });
    /*Audio.IAudioService end.*/

    /*AxisOptions start.*/
    Bridge.define("AxisOptions", {
        $kind: 6,
        statics: {
            fields: {
                Both: 0,
                Horizontal: 1,
                Vertical: 2
            }
        }
    });
    /*AxisOptions end.*/

    /*BulletBubble start.*/
    Bridge.define("BulletBubble", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _glowImage: null,
            _storage: null,
            _vibrating: false
        },
        methods: {
            /*BulletBubble.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BulletBubble#Awake", this ); }

                this._storage.addResourceChanged(Bridge.fn.cacheBind(this, this.ValueChanged));
            },
            /*BulletBubble.Awake end.*/

            /*BulletBubble.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "BulletBubble#OnDestroy", this ); }

                this._storage.removeResourceChanged(Bridge.fn.cacheBind(this, this.ValueChanged));
            },
            /*BulletBubble.OnDestroy end.*/

            /*BulletBubble.ValueChanged start.*/
            ValueChanged: function (resourceType) {
if ( TRACE ) { TRACE( "BulletBubble#ValueChanged", this ); }

                if (resourceType === ResourceType.MasonBullet) {
                    if (!this._vibrating && this._storage.GetResource(resourceType) === 0) {
                        this._vibrating = true;
                        DG.Tweening.ShortcutExtensions.DORewind(this.transform);
                        DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.DOTween.Sequence$1(this.transform), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.transform, 1.1, 0.5), DG.Tweening.Ease.InOutSine)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(this._glowImage, 1.0, 0.5), DG.Tweening.Ease.InOutSine)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.transform, 1.0, 0.5), DG.Tweening.Ease.InOutSine)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(this._glowImage, 0.0, 0.5), DG.Tweening.Ease.InOutSine)), -1);
                    } else if (this._vibrating && this._storage.GetResource(resourceType) > 0) {
                        this._vibrating = false;
                        DG.Tweening.ShortcutExtensions.DORewind(this.transform);
                        DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.DOTween.Sequence$1(this.transform), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.transform, 1.0, 0.5), DG.Tweening.Ease.InOutSine)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(this._glowImage, 0.0, 0.5), DG.Tweening.Ease.InOutSine));
                    }
                }
            },
            /*BulletBubble.ValueChanged end.*/


        }
    });
    /*BulletBubble end.*/

    /*Characters.FailZombie start.*/
    Bridge.define("Characters.FailZombie", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _animator: null,
            _renderer: null,
            _moveSpeed: 0,
            _isWalking: false,
            _animating: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Characters.FailZombie#init", this ); }

                this._moveSpeed = 3.0;
            }
        },
        methods: {
            /*Characters.FailZombie.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Characters.FailZombie#Update", this ); }

                if (this._isWalking && !this._animating) {
                    var target = this.transform.position.$clone().add( pc.Vec3.LEFT.clone() );
                    this.transform.position = pc.Vec3.moveTowards( this.transform.position, target, this._moveSpeed * UnityEngine.Time.deltaTime );
                }
            },
            /*Characters.FailZombie.Update end.*/

            /*Characters.FailZombie.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Characters.FailZombie#OnEnable", this ); }

                this._renderer.sortingOrder = (Bridge.Int.clip32((this.transform.position.y * -100.0)) + 3000) | 0;
                this._animator.Walk();
                this.transform.localScale = pc.Vec3.ZERO.clone();
                DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, new pc.Vec3( 1, 1, 1 ), 0.5);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, DG.Tweening.ShortcutExtensions.DOJump(this.transform, this.transform.position.$clone().add( pc.Vec3.LEFT.clone().clone().scale( 0.5 ) ).add( pc.Vec3.UP.clone().clone().scale( 0.5 ) ), 0.5, 1, 0.5), Bridge.fn.bind(this, function () {
                    this._isWalking = true;
                }));
            },
            /*Characters.FailZombie.OnEnable end.*/

            /*Characters.FailZombie.AnimateMasonBite start.*/
            AnimateMasonBite: function (zombieMason, masonBitePoint) {
if ( TRACE ) { TRACE( "Characters.FailZombie#AnimateMasonBite", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._animating = true;
                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(DG.Tweening.ShortcutExtensions.DOMove(this.transform, masonBitePoint.position.$clone(), 1.0));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._animator.Bite();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this._animator.Idle();
                                        $enumerator.current = zombieMason.Transition();
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this._animator.Walk();
                                        this._animating = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Characters.FailZombie.AnimateMasonBite end.*/


        }
    });
    /*Characters.FailZombie end.*/

    /*Characters.Glen start.*/
    Bridge.define("Characters.Glen", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _selector: null,
            _animator: null,
            _upgradeMaterial: null,
            _moveSpeed: 0,
            _waitTime: 0,
            _bulletPool: null,
            _bulletPickupPoint: null,
            _bulletSpawnPoint: null,
            _bulletHoldingPoint: null,
            _storage: null,
            _selectedConveyor: null,
            _bullet: null,
            _state: 0,
            _inTransition: false,
            _stopped: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Characters.Glen#init", this ); }

                this._moveSpeed = 1.0;
                this._waitTime = 0.5;
            }
        },
        methods: {
            /*Characters.Glen.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Characters.Glen#Awake", this ); }

                this._selector.addSelected(Bridge.fn.cacheBind(this, this.OnConveyorSelected));
            },
            /*Characters.Glen.Awake end.*/

            /*Characters.Glen.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Characters.Glen#OnDestroy", this ); }

                this._selector.removeSelected(Bridge.fn.cacheBind(this, this.OnConveyorSelected));
                var color = this._upgradeMaterial.color.$clone();
                color.a = 0.0;
                this._upgradeMaterial.color = color.$clone();
            },
            /*Characters.Glen.OnDestroy end.*/

            /*Characters.Glen.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Characters.Glen#Update", this ); }

                if (!this._stopped) {
                    switch (this._state) {
                        case Characters.GlenState.Idle: 
                            break;
                        case Characters.GlenState.MovingToWarehouse: 
                            this.MoveToWarehouse();
                            break;
                        case Characters.GlenState.PickingUpBullet: 
                            this.PickUpBullet();
                            break;
                        case Characters.GlenState.MovingToConveyor: 
                            this.MoveToConveyor();
                            break;
                        case Characters.GlenState.DroppingBullet: 
                            this.DropBullet();
                            break;
                        default: 
                            throw new System.ArgumentOutOfRangeException.ctor();
                    }
                }
            },
            /*Characters.Glen.Update end.*/

            /*Characters.Glen.Upgrade start.*/
            Upgrade: function (moveSpeed, waitTime) {
if ( TRACE ) { TRACE( "Characters.Glen#Upgrade", this ); }

                this._moveSpeed = moveSpeed;
                this._waitTime = waitTime;
                this.PlayUpgradeEffect();
            },
            /*Characters.Glen.Upgrade end.*/

            /*Characters.Glen.Disable start.*/
            Disable: function () {
if ( TRACE ) { TRACE( "Characters.Glen#Disable", this ); }

                this._stopped = true;
                this._animator.Idle();
            },
            /*Characters.Glen.Disable end.*/

            /*Characters.Glen.OnConveyorSelected start.*/
            OnConveyorSelected: function (conveyor) {
if ( TRACE ) { TRACE( "Characters.Glen#OnConveyorSelected", this ); }

                if (this._state === Characters.GlenState.Idle) {
                    this.SwitchState(Characters.GlenState.MovingToWarehouse);
                }
                this._selectedConveyor = conveyor;
            },
            /*Characters.Glen.OnConveyorSelected end.*/

            /*Characters.Glen.MoveToWarehouse start.*/
            MoveToWarehouse: function () {
if ( TRACE ) { TRACE( "Characters.Glen#MoveToWarehouse", this ); }

                if (this._inTransition) {
                    this._inTransition = false;
                    this._animator.Move();
                }
                if (this.MoveTo(this._bulletPickupPoint.position.$clone())) {
                    this.SwitchState(this._storage.HasResource(ResourceType.WarehouseBullet) ? Characters.GlenState.PickingUpBullet : Characters.GlenState.Idle);
                }
            },
            /*Characters.Glen.MoveToWarehouse end.*/

            /*Characters.Glen.PickUpBullet start.*/
            PickUpBullet: function () {
if ( TRACE ) { TRACE( "Characters.Glen#PickUpBullet", this ); }

                if (this._inTransition) {
                    this._storage.RemoveResource(ResourceType.WarehouseBullet);
                    this._bullet = Bridge.cast(this._bulletPool.Get(), GameResources.Bullet);
                    Extensions.TransformExtensions.SetPositionAndRotation(this._bullet.transform, this._bulletSpawnPoint);
                    this._bullet.transform.localScale = pc.Vec3.ZERO.clone();
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.DOTween.Sequence(), DG.Tweening.ShortcutExtensions.DOScale$1(this._bullet.transform, new pc.Vec3( 1, 1, 1 ), this._waitTime * 0.95)), DG.Tweening.ShortcutExtensions.DORotateQuaternion(this._bullet.transform, this._bulletHoldingPoint.rotation.$clone(), this._waitTime * 0.95)), DG.Tweening.ShortcutExtensions.DOJump(this._bullet.transform, this._bulletHoldingPoint.position.$clone(), 1.0, 1, this._waitTime)), Bridge.fn.bind(this, function () {
                        this._bullet.transform.SetParent(this._bulletHoldingPoint);
                        this.SwitchState(Characters.GlenState.MovingToConveyor);
                    }));
                    this._animator.Idle();
                    this._inTransition = false;
                }
            },
            /*Characters.Glen.PickUpBullet end.*/

            /*Characters.Glen.MoveToConveyor start.*/
            MoveToConveyor: function () {
if ( TRACE ) { TRACE( "Characters.Glen#MoveToConveyor", this ); }

                if (this._inTransition) {
                    this._inTransition = false;
                    this._animator.Move();
                }
                if (this.MoveTo(this._selectedConveyor.InteractionPoint.position.$clone())) {
                    this.SwitchState(Characters.GlenState.DroppingBullet);
                }
            },
            /*Characters.Glen.MoveToConveyor end.*/

            /*Characters.Glen.DropBullet start.*/
            DropBullet: function () {
if ( TRACE ) { TRACE( "Characters.Glen#DropBullet", this ); }

                if (this._inTransition) {
                    this._selectedConveyor.ReceiveBullet(this._bullet);
                    this._bullet = null;
                    this._inTransition = false;
                    this._animator.Idle();
                    DG.Tweening.DOVirtual.DelayedCall(this._waitTime, Bridge.fn.bind(this, function () {
                        this.SwitchState(Characters.GlenState.MovingToWarehouse);
                    }), false);
                }
            },
            /*Characters.Glen.DropBullet end.*/

            /*Characters.Glen.MoveTo start.*/
            MoveTo: function (position) {
if ( TRACE ) { TRACE( "Characters.Glen#MoveTo", this ); }

                this.transform.position = pc.Vec3.moveTowards( this.transform.position, position, this._moveSpeed * UnityEngine.Time.deltaTime );
                return pc.Vec3.equals( this.transform.position, position );
            },
            /*Characters.Glen.MoveTo end.*/

            /*Characters.Glen.PlayUpgradeEffect start.*/
            PlayUpgradeEffect: function () {
if ( TRACE ) { TRACE( "Characters.Glen#PlayUpgradeEffect", this ); }

                SpriteVfx.SpriteVfxService.Instance.Spawn(SpriteVfx.SpriteVfxType.Flash, this.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.5 ) ));
                DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.DOTween.Sequence(), DG.Tweening.ShortcutExtensions.DOFade$1(this._upgradeMaterial, 1.0, 1.0)), DG.Tweening.ShortcutExtensions.DOFade$1(this._upgradeMaterial, 0.0, 1.0));
            },
            /*Characters.Glen.PlayUpgradeEffect end.*/

            /*Characters.Glen.SwitchState start.*/
            SwitchState: function (state) {
if ( TRACE ) { TRACE( "Characters.Glen#SwitchState", this ); }

                this._inTransition = true;
                this._state = state;
                if (this._state === Characters.GlenState.Idle) {
                    this._animator.Idle();
                }
            },
            /*Characters.Glen.SwitchState end.*/


        }
    });
    /*Characters.Glen end.*/

    /*Characters.GlenAnimator start.*/
    Bridge.define("Characters.GlenAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _animators: null
        },
        methods: {
            /*Characters.GlenAnimator.Idle start.*/
            Idle: function () {
if ( TRACE ) { TRACE( "Characters.GlenAnimator#Idle", this ); }

                this.SetTrigger("Idle");
            },
            /*Characters.GlenAnimator.Idle end.*/

            /*Characters.GlenAnimator.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "Characters.GlenAnimator#Move", this ); }

                this.SetTrigger("Walking");
            },
            /*Characters.GlenAnimator.Move end.*/

            /*Characters.GlenAnimator.SetTrigger start.*/
            SetTrigger: function (trigger) {
if ( TRACE ) { TRACE( "Characters.GlenAnimator#SetTrigger", this ); }

                for (var i = 0; i < this._animators.length; i = (i + 1) | 0) {
                    this._animators[i].SetTrigger$1(trigger);
                }
            },
            /*Characters.GlenAnimator.SetTrigger end.*/


        }
    });
    /*Characters.GlenAnimator end.*/

    /*Characters.GlenState start.*/
    Bridge.define("Characters.GlenState", {
        $kind: 6,
        statics: {
            fields: {
                Idle: 0,
                MovingToWarehouse: 1,
                PickingUpBullet: 2,
                MovingToConveyor: 3,
                DroppingBullet: 4
            }
        }
    });
    /*Characters.GlenState end.*/

    /*Characters.Mason start.*/
    Bridge.define("Characters.Mason", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _animator: null,
            _fireDelay: 0,
            _sqrFireRange: 0,
            _storage: null,
            _zombieManager: null,
            _shotSound: null,
            _zombiesInRange: null,
            _lastTimeShoot: 0,
            _stopped: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Characters.Mason#init", this ); }

                this._fireDelay = 0.5;
                this._sqrFireRange = 2.0;
                this._zombiesInRange = new (System.Collections.Generic.List$1(Characters.Zombie)).ctor();
            }
        },
        methods: {
            /*Characters.Mason.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Characters.Mason#Update", this ); }

                var target = { };
                if (!this._stopped && !(UnityEngine.Time.time - this._lastTimeShoot < this._fireDelay) && this._storage.HasResource(ResourceType.MasonBullet) && this._zombieManager.Alive.Count !== 0 && this.TryGetRandomZombieInRange(target)) {
                    this._storage.RemoveResource(ResourceType.MasonBullet);
                    this._animator.Shoot();
                    this._zombieManager.KillZombie(target.v);
                    Audio.AudioService.Instance.TryPlayEffect$1(this._shotSound);
                    this._lastTimeShoot = UnityEngine.Time.time;
                }
            },
            /*Characters.Mason.Update end.*/

            /*Characters.Mason.StopShooting start.*/
            StopShooting: function () {
if ( TRACE ) { TRACE( "Characters.Mason#StopShooting", this ); }

                this._stopped = true;
            },
            /*Characters.Mason.StopShooting end.*/

            /*Characters.Mason.IncreaseShootingSpeed start.*/
            IncreaseShootingSpeed: function () {
if ( TRACE ) { TRACE( "Characters.Mason#IncreaseShootingSpeed", this ); }

                this._fireDelay *= 0.5;
            },
            /*Characters.Mason.IncreaseShootingSpeed end.*/

            /*Characters.Mason.TryGetRandomZombieInRange start.*/
            TryGetRandomZombieInRange: function (target) {
if ( TRACE ) { TRACE( "Characters.Mason#TryGetRandomZombieInRange", this ); }

                var $t;
                this._zombiesInRange.clear();
                $t = Bridge.getEnumerator(this._zombieManager.Alive);
                try {
                    while ($t.moveNext()) {
                        var zombie = $t.Current;
                        var sqrMagnitude = UnityEngine.Vector2.FromVector3(zombie.transform.position.$clone().sub( this.transform.position )).lengthSq();
                        if (sqrMagnitude <= this._sqrFireRange) {
                            this._zombiesInRange.add(zombie);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                var result = this._zombiesInRange.Count > 0;
                target.v = (result ? Extensions.ArrayExtensions.GetRandom$1(Characters.Zombie, this._zombiesInRange) : null);
                return result;
            },
            /*Characters.Mason.TryGetRandomZombieInRange end.*/


        }
    });
    /*Characters.Mason end.*/

    /*Characters.MasonAnimator start.*/
    Bridge.define("Characters.MasonAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _animators: null
        },
        methods: {
            /*Characters.MasonAnimator.Shoot start.*/
            Shoot: function () {
if ( TRACE ) { TRACE( "Characters.MasonAnimator#Shoot", this ); }

                this.SetTrigger("Fire");
            },
            /*Characters.MasonAnimator.Shoot end.*/

            /*Characters.MasonAnimator.SetTrigger start.*/
            SetTrigger: function (trigger) {
if ( TRACE ) { TRACE( "Characters.MasonAnimator#SetTrigger", this ); }

                for (var i = 0; i < this._animators.length; i = (i + 1) | 0) {
                    this._animators[i].SetTrigger$1(trigger);
                }
            },
            /*Characters.MasonAnimator.SetTrigger end.*/


        }
    });
    /*Characters.MasonAnimator end.*/

    /*Characters.Zombie start.*/
    Bridge.define("Characters.Zombie", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _renderer: null,
            _collider: null,
            _animator: null,
            _moveSpeed: 0,
            _dieTime: 0,
            _defaultMaterial: null,
            _deathMaterial: null,
            _coinsSound: null,
            _checkSpacePoint: null,
            _zombieLayerMask: null,
            _checkSpaceRadius: 0,
            _hits: null,
            _waitDieAnimation: null,
            _pool: null,
            _target: null,
            _isWalking: false,
            _isWaiting: false,
            IsAttacking: false
        },
        props: {
            SqrDistanceToTarget: {
                get: function () {
if ( TRACE ) { TRACE( "Characters.Zombie#SqrDistanceToTarget#get", this ); }

                    return this._target.$clone().sub( this.transform.position ).lengthSq();
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Characters.Zombie#init", this ); }

                this._zombieLayerMask = new UnityEngine.LayerMask();
                this._target = new UnityEngine.Vector3();
                this._moveSpeed = 3.0;
                this._checkSpaceRadius = 0.5;
                this._hits = System.Array.init(2, null, UnityEngine.Collider2D);
            }
        },
        methods: {
            /*Characters.Zombie.Construct start.*/
            Construct: function (pool) {
if ( TRACE ) { TRACE( "Characters.Zombie#Construct", this ); }

                this._pool = pool;
                this._waitDieAnimation = new UnityEngine.WaitForSeconds(this._dieTime);
            },
            /*Characters.Zombie.Construct end.*/

            /*Characters.Zombie.Tick start.*/
            Tick: function () {
if ( TRACE ) { TRACE( "Characters.Zombie#Tick", this ); }

                this._renderer.sortingOrder = (-Bridge.Int.clip32((this.transform.position.y * 100.0 + 550.0))) | 0;
                if (!this._isWalking || this.IsAttacking) {
                    return;
                }
                if (this.HasSpace()) {
                    if (this._isWaiting) {
                        this._animator.Walk();
                    }
                    this._isWaiting = false;
                    this.transform.position = pc.Vec3.moveTowards( this.transform.position, this._target, this._moveSpeed * UnityEngine.Time.deltaTime );
                } else if (!this._isWaiting) {
                    this._isWaiting = true;
                    this._animator.Idle();
                }
                if (pc.Vec3.equals( this.transform.position, this._target )) {
                    this.Attack();
                }
            },
            /*Characters.Zombie.Tick end.*/

            /*Characters.Zombie.HasSpace start.*/
            HasSpace: function () {
if ( TRACE ) { TRACE( "Characters.Zombie#HasSpace", this ); }

                var hits = UnityEngine.Physics2D.OverlapCircleNonAlloc(UnityEngine.Vector2.FromVector3(this._checkSpacePoint.position), this._checkSpaceRadius, this._hits);
                for (var i = 0; i < hits; i = (i + 1) | 0) {
                    var zombie = { };
                    if (UnityEngine.Component.op_Inequality(this._hits[i], this._collider) && this._hits[i].TryGetComponent$1(Characters.Zombie, zombie) && (zombie.v._isWaiting || zombie.v.IsAttacking) && zombie.v.SqrDistanceToTarget < this.SqrDistanceToTarget) {
                        return false;
                    }
                }
                return true;
            },
            /*Characters.Zombie.HasSpace end.*/

            /*Characters.Zombie.SetTarget start.*/
            SetTarget: function (targetPosition) {
if ( TRACE ) { TRACE( "Characters.Zombie#SetTarget", this ); }

                this._target = targetPosition.$clone();
                this._isWalking = true;
                this._animator.Walk();
            },
            /*Characters.Zombie.SetTarget end.*/

            /*Characters.Zombie.Die start.*/
            Die: function () {
if ( TRACE ) { TRACE( "Characters.Zombie#Die", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    SpriteVfx.SpriteVfxService.Instance.Spawn(SpriteVfx.SpriteVfxType.ZombieBlood, this.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.82 ) ));
                                        SpriteVfx.SpriteVfxService.Instance.Spawn(SpriteVfx.SpriteVfxType.Sparks, this.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.82 ) ));
                                        this.IsAttacking = false;
                                        this._isWalking = false;
                                        this._animator.Death();
                                        this._renderer.sharedMaterial = this._deathMaterial;
                                        $enumerator.current = this._waitDieAnimation;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._renderer.sharedMaterial = this._defaultMaterial;
                                        this._renderer.transform.localPosition = pc.Vec3.ZERO.clone();
                                        this._pool[Bridge.geti(this._pool, "Pools$IPool$1$Characters$Zombie$Release", "Pools$IPool$1$Release")](this);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Characters.Zombie.Die end.*/

            /*Characters.Zombie.Attack start.*/
            Attack: function () {
if ( TRACE ) { TRACE( "Characters.Zombie#Attack", this ); }

                this.IsAttacking = true;
                this._animator.Bite();
            },
            /*Characters.Zombie.Attack end.*/


        }
    });
    /*Characters.Zombie end.*/

    /*Characters.ZombieAnimator start.*/
    Bridge.define("Characters.ZombieAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _animators: null
        },
        methods: {
            /*Characters.ZombieAnimator.Idle start.*/
            Idle: function () {
if ( TRACE ) { TRACE( "Characters.ZombieAnimator#Idle", this ); }

                this.SetTrigger("Idle");
            },
            /*Characters.ZombieAnimator.Idle end.*/

            /*Characters.ZombieAnimator.Walk start.*/
            Walk: function () {
if ( TRACE ) { TRACE( "Characters.ZombieAnimator#Walk", this ); }

                this.SetTrigger("Walking");
            },
            /*Characters.ZombieAnimator.Walk end.*/

            /*Characters.ZombieAnimator.Bite start.*/
            Bite: function () {
if ( TRACE ) { TRACE( "Characters.ZombieAnimator#Bite", this ); }

                this.SetTrigger("Bite");
            },
            /*Characters.ZombieAnimator.Bite end.*/

            /*Characters.ZombieAnimator.Death start.*/
            Death: function () {
if ( TRACE ) { TRACE( "Characters.ZombieAnimator#Death", this ); }

                this.SetTrigger("Death");
            },
            /*Characters.ZombieAnimator.Death end.*/

            /*Characters.ZombieAnimator.SetTrigger start.*/
            SetTrigger: function (trigger) {
if ( TRACE ) { TRACE( "Characters.ZombieAnimator#SetTrigger", this ); }

                for (var i = 0; i < this._animators.length; i = (i + 1) | 0) {
                    this._animators[i].SetTrigger$1(trigger);
                }
            },
            /*Characters.ZombieAnimator.SetTrigger end.*/


        }
    });
    /*Characters.ZombieAnimator end.*/

    /*Characters.ZombieManager start.*/
    Bridge.define("Characters.ZombieManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*Characters.ZombieManager.ActionOnRelease:static start.*/
                ActionOnRelease: function (zombie) {
if ( TRACE ) { TRACE( "Characters.ZombieManager#ActionOnRelease", this ); }

                    zombie.gameObject.SetActive(false);
                },
                /*Characters.ZombieManager.ActionOnRelease:static end.*/


            }
        },
        fields: {
            _storage: null,
            _prefab: null,
            _spawnPoints: null,
            _targetPoints: null,
            _spawnInterval: null,
            _maximumOnScreen: 0,
            _zombieBiteSound: null,
            _gameEnd: null,
            _pool: null,
            _enabled: false,
            _soundId: 0,
            Alive: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Characters.ZombieManager#init", this ); }

                this._spawnInterval = new UnityEngine.Vector2();
                this._maximumOnScreen = 100;
                this._enabled = true;
                this.Alive = new (System.Collections.Generic.HashSet$1(Characters.Zombie)).ctor();
            }
        },
        methods: {
            /*Characters.ZombieManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Characters.ZombieManager#Awake", this ); }

                this._pool = new (Pools.ObjectPool$1(Characters.Zombie))(Bridge.fn.cacheBind(this, this.CreateZombie), Bridge.fn.cacheBind(this, this.ActionOnGet), Characters.ZombieManager.ActionOnRelease);
                this.StartCoroutine$1(this.SpawnRoutine());
            },
            /*Characters.ZombieManager.Awake end.*/

            /*Characters.ZombieManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Characters.ZombieManager#Update", this ); }

                var $t;
                var anyZombieAttacking = false;
                $t = Bridge.getEnumerator(this.Alive);
                try {
                    while ($t.moveNext()) {
                        var zombie = $t.Current;
                        zombie.Tick();
                        if (zombie.IsAttacking) {
                            anyZombieAttacking = true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (!Audio.AudioService.Instance.IsPlaying(this._soundId) && anyZombieAttacking) {
                    Audio.AudioService.Instance.TryPlayEffect(this._zombieBiteSound, Bridge.ref(this, "_soundId"), true);
                } else if (Audio.AudioService.Instance.IsPlaying(this._soundId) && !anyZombieAttacking) {
                    Audio.AudioService.Instance.TryStopEffect(this._soundId);
                }
            },
            /*Characters.ZombieManager.Update end.*/

            /*Characters.ZombieManager.KillZombie start.*/
            KillZombie: function (zombie) {
if ( TRACE ) { TRACE( "Characters.ZombieManager#KillZombie", this ); }

                this.Alive.remove(zombie);
                this.StartCoroutine$1(zombie.Die());
                this._storage.AddResource(ResourceType.Money, 100);
                if (this.Alive.Count === 0) {
                    this._gameEnd.Win();
                }
            },
            /*Characters.ZombieManager.KillZombie end.*/

            /*Characters.ZombieManager.StopSpawn start.*/
            StopSpawn: function () {
if ( TRACE ) { TRACE( "Characters.ZombieManager#StopSpawn", this ); }

                this._enabled = false;
            },
            /*Characters.ZombieManager.StopSpawn end.*/

            /*Characters.ZombieManager.SpawnRoutine start.*/
            SpawnRoutine: function () {
if ( TRACE ) { TRACE( "Characters.ZombieManager#SpawnRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    zombie,
                    spawnPosition,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this._enabled ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    if (this.Alive.Count < this._maximumOnScreen) {
                                            zombie = this._pool.Get();
                                            spawnPosition = new pc.Vec3().lerp( this._spawnPoints[0].position, this._spawnPoints[1].position, UnityEngine.Random.value );
                                            zombie.transform.position = spawnPosition.$clone();
                                            this.SetZombieTarget(zombie);
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(Extensions.VectorExtensions.GetRandom(this._spawnInterval));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Characters.ZombieManager.SpawnRoutine end.*/

            /*Characters.ZombieManager.SetZombieTarget start.*/
            SetZombieTarget: function (zombie) {
if ( TRACE ) { TRACE( "Characters.ZombieManager#SetZombieTarget", this ); }

                var $t;
                var pointA = this._targetPoints[0].position.$clone();
                var pointB = this._targetPoints[1].position.$clone();
                var targetX = UnityEngine.Mathf.Min(pointA.x, pointB.x);
                var centerY = (pointA.y + pointB.y) * 0.5;
                var minY = UnityEngine.Mathf.Min(pointA.y, pointB.y);
                var maxY = UnityEngine.Mathf.Max(pointA.y, pointB.y);
                var zombieY = zombie.transform.position.y;
                var targetY;
                if (zombieY >= minY && zombieY <= maxY) {
                    var dir = ($t = centerY - zombieY, ($t === 0 ? 1 : Math.sign($t)));
                    var offset2 = UnityEngine.Random.Range$1(0.0, 1.0);
                    targetY = zombieY + dir * offset2;
                } else {
                    var offset = ((zombieY < minY) ? UnityEngine.Random.Range$1(0.0, 5.0) : UnityEngine.Random.Range$1(0.0, -5.0));
                    var y = ((zombieY < minY) ? minY : maxY);
                    targetY = y + offset;
                }
                var targetPosition = new pc.Vec3( targetX, targetY, 0.0 );
                zombie.SetTarget(targetPosition.$clone());
            },
            /*Characters.ZombieManager.SetZombieTarget end.*/

            /*Characters.ZombieManager.ActionOnGet start.*/
            ActionOnGet: function (zombie) {
if ( TRACE ) { TRACE( "Characters.ZombieManager#ActionOnGet", this ); }

                zombie.gameObject.SetActive(true);
                this.Alive.add(zombie);
            },
            /*Characters.ZombieManager.ActionOnGet end.*/

            /*Characters.ZombieManager.CreateZombie start.*/
            CreateZombie: function () {
if ( TRACE ) { TRACE( "Characters.ZombieManager#CreateZombie", this ); }

                var zombie = UnityEngine.Object.Instantiate(Characters.Zombie, this._prefab, this.transform);
                zombie.Construct(this._pool);
                return zombie;
            },
            /*Characters.ZombieManager.CreateZombie end.*/


        }
    });
    /*Characters.ZombieManager end.*/

    /*Characters.ZombieMason start.*/
    Bridge.define("Characters.ZombieMason", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _renderer: null,
            _masonRenderer: null,
            _animator: null,
            _mason: null,
            _moveSpeed: 0,
            _isWalking: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Characters.ZombieMason#init", this ); }

                this._moveSpeed = 3.0;
            }
        },
        methods: {
            /*Characters.ZombieMason.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Characters.ZombieMason#Update", this ); }

                if (this._isWalking) {
                    var target = this.transform.position.$clone().add( pc.Vec3.LEFT.clone() );
                    this.transform.position = pc.Vec3.moveTowards( this.transform.position, target, this._moveSpeed * UnityEngine.Time.deltaTime );
                }
            },
            /*Characters.ZombieMason.Update end.*/

            /*Characters.ZombieMason.Transition start.*/
            Transition: function () {
if ( TRACE ) { TRACE( "Characters.ZombieMason#Transition", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._mason.StopShooting();
                                        this._renderer.sortingOrder = (((-Bridge.Int.clip32((this.transform.position.y * 100.0))) | 0) + 3000) | 0;
                                        DG.Tweening.DOTweenModuleSprite.DOFade(this._renderer, 1.0, 0.5);
                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(DG.Tweening.DOTweenModuleSprite.DOFade(this._masonRenderer, 0.0, 0.5));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._animator.Walk();
                                        this._isWalking = true;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Characters.ZombieMason.Transition end.*/


        }
    });
    /*Characters.ZombieMason end.*/

    /*ColorZone start.*/
    Bridge.define("ColorZone", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _elements: null,
            IsActive: false
        },
        methods: {
            /*ColorZone.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ColorZone#Awake", this ); }

                for (var i = 0; i < this._elements.length; i = (i + 1) | 0) {
                    this._elements[i].InactiveColor = this._elements[i].Renderer.material.color.$clone();
                }
            },
            /*ColorZone.Awake end.*/

            /*ColorZone.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "ColorZone#OnTriggerEnter", this ); }

                var _discard1 = { };
                if (other.TryGetComponent$1(Hero.HeroMovement, _discard1)) {
                    this.SetColor(true);
                }
            },
            /*ColorZone.OnTriggerEnter end.*/

            /*ColorZone.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
if ( TRACE ) { TRACE( "ColorZone#OnTriggerExit", this ); }

                var _discard2 = { };
                if (other.TryGetComponent$1(Hero.HeroMovement, _discard2)) {
                    this.SetColor(false);
                }
            },
            /*ColorZone.OnTriggerExit end.*/

            /*ColorZone.SetColor start.*/
            SetColor: function (active) {
if ( TRACE ) { TRACE( "ColorZone#SetColor", this ); }

                this.IsActive = active;
                for (var i = 0; i < this._elements.length; i = (i + 1) | 0) {
                    var color = (active ? this._elements[i].ActiveColor.$clone() : this._elements[i].InactiveColor.$clone());
                    this._elements[i].Renderer.material.color = color.$clone();
                }
            },
            /*ColorZone.SetColor end.*/


        }
    });
    /*ColorZone end.*/

    /*ColorZoneElement start.*/
    Bridge.define("ColorZoneElement", {
        fields: {
            Renderer: null,
            ActiveColor: null,
            InactiveColor: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ColorZoneElement#init", this ); }

                this.ActiveColor = new UnityEngine.Color();
                this.InactiveColor = new UnityEngine.Color();
            }
        }
    });
    /*ColorZoneElement end.*/

    /*Conveyors.ConveyorBuyActivator start.*/
    Bridge.define("Conveyors.ConveyorBuyActivator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _buyZone: null,
            _conveyor: null,
            _delay: 0,
            _waitDelay: null
        },
        methods: {
            /*Conveyors.ConveyorBuyActivator.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Conveyors.ConveyorBuyActivator#Awake", this ); }

                this._waitDelay = new UnityEngine.WaitForSeconds(this._delay);
                this._buyZone.addTriggered(Bridge.fn.cacheBind(this, this.ActivateConveyor));
            },
            /*Conveyors.ConveyorBuyActivator.Awake end.*/

            /*Conveyors.ConveyorBuyActivator.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Conveyors.ConveyorBuyActivator#OnDestroy", this ); }

                this._buyZone.removeTriggered(Bridge.fn.cacheBind(this, this.ActivateConveyor));
            },
            /*Conveyors.ConveyorBuyActivator.OnDestroy end.*/

            /*Conveyors.ConveyorBuyActivator.ActivateConveyor start.*/
            ActivateConveyor: function () {
if ( TRACE ) { TRACE( "Conveyors.ConveyorBuyActivator#ActivateConveyor", this ); }

                this.StartCoroutine$1(this.ActivateAfterDelay());
            },
            /*Conveyors.ConveyorBuyActivator.ActivateConveyor end.*/

            /*Conveyors.ConveyorBuyActivator.ActivateAfterDelay start.*/
            ActivateAfterDelay: function () {
if ( TRACE ) { TRACE( "Conveyors.ConveyorBuyActivator#ActivateAfterDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this._waitDelay;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._conveyor.StartWork();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Conveyors.ConveyorBuyActivator.ActivateAfterDelay end.*/


        }
    });
    /*Conveyors.ConveyorBuyActivator end.*/

    /*Conveyors.ConveyorItem start.*/
    Bridge.define("Conveyors.ConveyorItem", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _pool: null,
            _points: null,
            _speed: 0,
            _index: 0,
            _isMoving: false
        },
        methods: {
            /*Conveyors.ConveyorItem.Construct start.*/
            Construct: function (pool) {
if ( TRACE ) { TRACE( "Conveyors.ConveyorItem#Construct", this ); }

                this._pool = pool;
            },
            /*Conveyors.ConveyorItem.Construct end.*/

            /*Conveyors.ConveyorItem.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Conveyors.ConveyorItem#Update", this ); }

                if (this._isMoving) {
                    var activePoint = this._points[this._index];
                    var activePointTransform = activePoint.transform;
                    this.transform.position = pc.Vec3.moveTowards( this.transform.position, activePointTransform.position, this._speed * UnityEngine.Time.deltaTime );
                    this.transform.rotation = pc.Quat.rotateTowards( this.transform.rotation.$clone(), activePointTransform.rotation.$clone(), 180.0 * UnityEngine.Time.deltaTime );
                    if (this.transform.position.$clone().sub( activePointTransform.position ).lengthSq() <= 0.1 && ((this._index + 1) | 0) < this._points.length) {
                        this._index = (this._index + 1) | 0;
                    }
                }
            },
            /*Conveyors.ConveyorItem.Update end.*/

            /*Conveyors.ConveyorItem.StartMove start.*/
            StartMove: function (points, speed) {
if ( TRACE ) { TRACE( "Conveyors.ConveyorItem#StartMove", this ); }

                this._isMoving = true;
                this._points = points;
                this._speed = speed;
                this._index = 1;
            },
            /*Conveyors.ConveyorItem.StartMove end.*/

            /*Conveyors.ConveyorItem.StopMove start.*/
            StopMove: function () {
if ( TRACE ) { TRACE( "Conveyors.ConveyorItem#StopMove", this ); }

                this._isMoving = false;
            },
            /*Conveyors.ConveyorItem.StopMove end.*/

            /*Conveyors.ConveyorItem.Release start.*/
            Release: function () {
if ( TRACE ) { TRACE( "Conveyors.ConveyorItem#Release", this ); }

                this._pool[Bridge.geti(this._pool, "Pools$IPool$1$Conveyors$ConveyorItem$Release", "Pools$IPool$1$Release")](this);
            },
            /*Conveyors.ConveyorItem.Release end.*/


        }
    });
    /*Conveyors.ConveyorItem end.*/

    /*Conveyors.ConveyorPoint start.*/
    Bridge.define("Conveyors.ConveyorPoint", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*Conveyors.ConveyorPoint end.*/

    /*Conveyors.InteractiveConveyor start.*/
    Bridge.define("Conveyors.InteractiveConveyor", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _interactionPoint: null,
            _point: null,
            _scaleOnSelect: null
        },
        events: {
            BulletReceived: null
        },
        props: {
            InteractionPoint: {
                get: function () {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyor#InteractionPoint#get", this ); }

                    return this._interactionPoint;
                }
            }
        },
        methods: {
            /*Conveyors.InteractiveConveyor.ReceiveBullet start.*/
            ReceiveBullet: function (bullet) {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyor#ReceiveBullet", this ); }

                !Bridge.staticEquals(this.BulletReceived, null) ? this.BulletReceived(this) : null;
                bullet.transform.SetParent(null);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, DG.Tweening.ShortcutExtensions.DOJump(bullet.transform, this._point.InteractionPoint.position.$clone(), 0.5, 1, 0.5), Bridge.fn.bind(this, function () {
                    this._point.ProcessBullet(bullet);
                }));
            },
            /*Conveyors.InteractiveConveyor.ReceiveBullet end.*/

            /*Conveyors.InteractiveConveyor.OnSelected start.*/
            OnSelected: function () {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyor#OnSelected", this ); }

                for (var i = 0; i < this._scaleOnSelect.length; i = (i + 1) | 0) {
                    var target = this._scaleOnSelect[i];
                    DG.Tweening.ShortcutExtensions.DOComplete(target);
                    var scale = target.localScale.$clone();
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.DOTween.Sequence$1(target), DG.Tweening.ShortcutExtensions.DOScale$1(target, scale.$clone().clone().scale( 0.9 ), 0.2)), DG.Tweening.ShortcutExtensions.DOScale$1(target, scale.$clone(), 0.2)), DG.Tweening.Ease.InOutSine);
                }
            },
            /*Conveyors.InteractiveConveyor.OnSelected end.*/


        }
    });
    /*Conveyors.InteractiveConveyor end.*/

    /*Conveyors.InteractiveConveyorPoint start.*/
    Bridge.define("Conveyors.InteractiveConveyorPoint", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _speed: 0,
            _nextPoint: null,
            _interactionPoint: null
        },
        props: {
            InteractionPoint: {
                get: function () {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyorPoint#InteractionPoint#get", this ); }

                    return this._interactionPoint;
                }
            }
        },
        methods: {
            /*Conveyors.InteractiveConveyorPoint.MoveBullet start.*/
            MoveBullet: function (bullet) {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyorPoint#MoveBullet", this ); }

                bullet.Move(this._nextPoint, this._speed);
            },
            /*Conveyors.InteractiveConveyorPoint.MoveBullet end.*/

            /*Conveyors.InteractiveConveyorPoint.ProcessBulletByNextPoint start.*/
            ProcessBulletByNextPoint: function (bullet) {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyorPoint#ProcessBulletByNextPoint", this ); }

                this._nextPoint.ProcessBullet(bullet);
            },
            /*Conveyors.InteractiveConveyorPoint.ProcessBulletByNextPoint end.*/


        }
    });
    /*Conveyors.InteractiveConveyorPoint end.*/

    /*Conveyors.InteractiveConveyorFinishZone start.*/
    Bridge.define("Conveyors.InteractiveConveyorFinishZone", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _storage: null,
            _sound: null,
            _soundId: 0
        },
        methods: {
            /*Conveyors.InteractiveConveyorFinishZone.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (other) {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyorFinishZone#OnTriggerEnter2D", this ); }

                var bullet = { };
                if (other.TryGetComponent$1(GameResources.Bullet, bullet)) {
                    bullet.v.Stop();
                    bullet.v.Release();
                    this._storage.AddResource(ResourceType.MasonBullet);
                    if (Audio.AudioService.Instance.IsPlaying(this._soundId)) {
                        Audio.AudioService.Instance.TryStopEffect(this._soundId);
                    }
                    Audio.AudioService.Instance.TryPlayEffect(this._sound, Bridge.ref(this, "_soundId"));
                }
            },
            /*Conveyors.InteractiveConveyorFinishZone.OnTriggerEnter2D end.*/


        }
    });
    /*Conveyors.InteractiveConveyorFinishZone end.*/

    /*Conveyors.VisualConveyor start.*/
    Bridge.define("Conveyors.VisualConveyor", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*Conveyors.VisualConveyor.ReleaseItem:static start.*/
                ReleaseItem: function (item) {
if ( TRACE ) { TRACE( "Conveyors.VisualConveyor#ReleaseItem", this ); }

                    item.gameObject.SetActive(false);
                },
                /*Conveyors.VisualConveyor.ReleaseItem:static end.*/


            }
        },
        fields: {
            _autoStarkWork: false,
            _prefab: null,
            _spawnDelay: 0,
            _moveSpeed: 0,
            _initialAmount: 0,
            _points: null,
            _pool: null,
            _waitSpawn: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Conveyors.VisualConveyor#init", this ); }

                this._spawnDelay = 0.5;
                this._moveSpeed = 1.0;
                this._initialAmount = 10;
            }
        },
        methods: {
            /*Conveyors.VisualConveyor.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Conveyors.VisualConveyor#Awake", this ); }

                this._pool = new (Pools.ObjectPool$1(Conveyors.ConveyorItem))(Bridge.fn.cacheBind(this, this.CreateItem), Conveyors.VisualConveyor.ReleaseItem);
                this._waitSpawn = new UnityEngine.WaitForSeconds(this._spawnDelay);
                if (this._autoStarkWork) {
                    this.StartWork();
                }
            },
            /*Conveyors.VisualConveyor.Awake end.*/

            /*Conveyors.VisualConveyor.StartWork start.*/
            StartWork: function () {
if ( TRACE ) { TRACE( "Conveyors.VisualConveyor#StartWork", this ); }

                this.Warmup();
                this.StartCoroutine$1(this.WorkRoutine());
            },
            /*Conveyors.VisualConveyor.StartWork end.*/

            /*Conveyors.VisualConveyor.CreateItem start.*/
            CreateItem: function () {
if ( TRACE ) { TRACE( "Conveyors.VisualConveyor#CreateItem", this ); }

                var item = UnityEngine.Object.Instantiate$1(Conveyors.ConveyorItem, this._prefab, this.transform, true);
                item.gameObject.SetActive(false);
                item.Construct(this._pool);
                return item;
            },
            /*Conveyors.VisualConveyor.CreateItem end.*/

            /*Conveyors.VisualConveyor.Warmup start.*/
            Warmup: function () {
if ( TRACE ) { TRACE( "Conveyors.VisualConveyor#Warmup", this ); }

                var distanceBetween = this._moveSpeed * this._spawnDelay;
                for (var i = 1; i < ((this._initialAmount + 1) | 0); i = (i + 1) | 0) {
                    var distanceFromStart = distanceBetween * i;
                    var startTransform = this._points[0].transform;
                    var direction = (this._points[1].transform.position.$clone().sub( startTransform.position )).clone().normalize().$clone();
                    var position = startTransform.position.$clone().add( direction.$clone().clone().scale( distanceFromStart ) );
                    var item = this._pool.Get();
                    item.transform.SetPositionAndRotation(position, startTransform.rotation);
                    item.gameObject.SetActive(true);
                    item.StartMove(this._points, this._moveSpeed);
                }
            },
            /*Conveyors.VisualConveyor.Warmup end.*/

            /*Conveyors.VisualConveyor.WorkRoutine start.*/
            WorkRoutine: function () {
if ( TRACE ) { TRACE( "Conveyors.VisualConveyor#WorkRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    item,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    item = this._pool.Get();
                                        Extensions.TransformExtensions.SetPositionAndRotation(item.transform, this._points[0].transform);
                                        item.gameObject.SetActive(true);
                                        item.StartMove(this._points, this._moveSpeed);
                                        $enumerator.current = this._waitSpawn;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Conveyors.VisualConveyor.WorkRoutine end.*/


        }
    });
    /*Conveyors.VisualConveyor end.*/

    /*Conveyors.VisualConveyorEnd start.*/
    Bridge.define("Conveyors.VisualConveyorEnd", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _targets: null
        },
        methods: {
            /*Conveyors.VisualConveyorEnd.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (other) {
if ( TRACE ) { TRACE( "Conveyors.VisualConveyorEnd#OnTriggerEnter2D", this ); }

                var conveyorItem = { };
                if (other.TryGetComponent$1(Conveyors.ConveyorItem, conveyorItem)) {
                    var target = Extensions.ArrayExtensions.GetRandom$1(UnityEngine.Transform, this._targets);
                    conveyorItem.v.StopMove();
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.DOTween.Sequence$1(conveyorItem.v.transform), DG.Tweening.ShortcutExtensions.DORotateQuaternion(conveyorItem.v.transform, target.rotation.$clone(), 0.5)), DG.Tweening.ShortcutExtensions.DOJump(conveyorItem.v.transform, target.position.$clone(), 0.5, 1, 0.5)), function () {
                        conveyorItem.v.Release();
                    });
                }
            },
            /*Conveyors.VisualConveyorEnd.OnTriggerEnter2D end.*/


        }
    });
    /*Conveyors.VisualConveyorEnd end.*/

    /*DefaultNamespace.MaskedFillBar start.*/
    Bridge.define("DefaultNamespace.MaskedFillBar", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _maskTransform: null,
            _emptyLocalPosition: null,
            _fillLocalPosition: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DefaultNamespace.MaskedFillBar#init", this ); }

                this._emptyLocalPosition = new UnityEngine.Vector3();
                this._fillLocalPosition = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*DefaultNamespace.MaskedFillBar.Render start.*/
            Render: function (value) {
if ( TRACE ) { TRACE( "DefaultNamespace.MaskedFillBar#Render", this ); }

                var newPosition = new pc.Vec3().lerp( this._emptyLocalPosition, this._fillLocalPosition, value );
                DG.Tweening.ShortcutExtensions.DOLocalMove(this._maskTransform, newPosition.$clone(), 0.2);
            },
            /*DefaultNamespace.MaskedFillBar.Render end.*/


        }
    });
    /*DefaultNamespace.MaskedFillBar end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0.0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0.0) {
                        endValue = 0.0;
                    } else if (endValue > 1.0) {
                        endValue = 1.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var value = { };
                        target.GetFloat(floatName, value);
                        return value.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = ((!System.Nullable.hasValue(up)) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up).$clone());
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, jumpPower, 0.0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0.0, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var position = target.position.$clone();
                        position.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(position);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var vector = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        vector.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(vector);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1.0) {
                        endValue = 1.0;
                    } else if (endValue < 0.0) {
                        endValue = 0.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var anchoredPosition = target.anchoredPosition.$clone();
                        anchoredPosition.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = anchoredPosition.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var cInfo = ((!addThousandsSeparator) ? null : (culture || System.Globalization.CultureInfo.invariantCulture));
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return fromValue;
                    }, function (x) {
                        fromValue = x;
                        target.text = (addThousandsSeparator ? System.Int32.format(fromValue, "N0", cInfo) : Bridge.toString(fromValue));
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    var localPoint = { v : new UnityEngine.Vector2() };
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (!DG.Tweening.DOTweenModuleUtils._initialized) {
                        DG.Tweening.DOTweenModuleUtils._initialized = true;
                        DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = (isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode));
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DragToMove start.*/
    Bridge.define("DragToMove", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _joystick: null,
            _idleTimeToShow: 0,
            _colorZone: null,
            _visible: false,
            _idleTime: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DragToMove#init", this ); }

                this._idleTimeToShow = 1.0;
            }
        },
        methods: {
            /*DragToMove.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DragToMove#Awake", this ); }

                this.Show();
            },
            /*DragToMove.Awake end.*/

            /*DragToMove.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DragToMove#Update", this ); }

                if (this._visible && !pc.Vec2.equals( this._joystick.input, pc.Vec2.ZERO.clone() )) {
                    this.Hide();
                } else {
                    if (this._visible) {
                        return;
                    }
                    if (pc.Vec2.equals( this._joystick.input, pc.Vec2.ZERO.clone() ) && !this._colorZone.IsActive) {
                        this._idleTime += UnityEngine.Time.deltaTime;
                        if (this._idleTime >= this._idleTimeToShow) {
                            this.Show();
                        }
                    } else {
                        this._idleTime = 0.0;
                    }
                }
            },
            /*DragToMove.Update end.*/

            /*DragToMove.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "DragToMove#Show", this ); }

                this._visible = true;
                this._idleTime = 0.0;
                var sequence = DG.Tweening.DOTween.Sequence$1(this.transform);
                DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.ShortcutExtensions.DOScale(this.transform, 1.0, 0.1));
                DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.transform, 1.1, 0.5), DG.Tweening.Ease.InOutSine), 2147483647, DG.Tweening.LoopType.Yoyo));
            },
            /*DragToMove.Show end.*/

            /*DragToMove.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "DragToMove#Hide", this ); }

                this._visible = false;
                DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, pc.Vec3.ZERO.clone(), 0.1);
            },
            /*DragToMove.Hide end.*/


        }
    });
    /*DragToMove end.*/

    /*Joystick start.*/
    Bridge.define("Joystick", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IEventSystemHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            handleRange: 0,
            deadZone: 0,
            axisOptions: 0,
            snapX: false,
            snapY: false,
            background: null,
            handleRect: null,
            baseRect: null,
            canvas: null,
            cam: null,
            input: null
        },
        props: {
            Horizontal: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Horizontal#get", this ); }

                    return this.snapX ? this.SnapFloat(this.input.x, AxisOptions.Horizontal) : this.input.x;
                }
            },
            Vertical: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Vertical#get", this ); }

                    return this.snapY ? this.SnapFloat(this.input.y, AxisOptions.Vertical) : this.input.y;
                }
            },
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Direction#get", this ); }

                    return new pc.Vec2( this.Horizontal, this.Vertical );
                }
            },
            HandleRange: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#HandleRange#get", this ); }

                    return this.handleRange;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#HandleRange#set", this ); }

                    this.handleRange = Math.abs(value);
                }
            },
            DeadZone: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#DeadZone#get", this ); }

                    return this.deadZone;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#DeadZone#set", this ); }

                    this.deadZone = Math.abs(value);
                }
            },
            AxisOptions: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#get", this ); }

                    return this.AxisOptions;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#set", this ); }

                    this.axisOptions = value;
                }
            },
            SnapX: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapX#get", this ); }

                    return this.snapX;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapX#set", this ); }

                    this.snapX = value;
                }
            },
            SnapY: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapY#get", this ); }

                    return this.snapY;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapY#set", this ); }

                    this.snapY = value;
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Joystick#init", this ); }

                this.input = new UnityEngine.Vector2();
                this.handleRange = 1.0;
                this.deadZone = 0.0;
                this.axisOptions = AxisOptions.Both;
                this.snapX = false;
                this.snapY = false;
                this.input = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*Joystick.Enable start.*/
            Enable: function (b) {
if ( TRACE ) { TRACE( "Joystick#Enable", this ); }

                if (!b) {
                    this.input = pc.Vec2.ZERO.clone();
                }
                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(b);
                var dummyData = new UnityEngine.EventSystems.PointerEventData(UnityEngine.EventSystems.EventSystem.current);
                this.OnDrag(dummyData);
                this.OnPointerUp(dummyData);
            },
            /*Joystick.Enable end.*/

            /*Joystick.DisableForFrame start.*/
            DisableForFrame: function () {
if ( TRACE ) { TRACE( "Joystick#DisableForFrame", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.Enable(false);
                                        $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.Enable(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Joystick.DisableForFrame end.*/

            /*Joystick.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Joystick#Awake", this ); }

                Joystick.Instance = this;
            },
            /*Joystick.Awake end.*/

            /*Joystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Joystick#Start", this ); }

                this.HandleRange = this.handleRange;
                this.DeadZone = this.deadZone;
                this.baseRect = this.GetComponent(UnityEngine.RectTransform);
                this.canvas = this.GetComponentInParent(UnityEngine.Canvas);
                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    UnityEngine.Debug.LogError$2("The Joystick is not placed inside a canvas");
                }
                var center = new pc.Vec2( 0.5, 0.5 );
                this.background.pivot = center.$clone();
                this.handleRect.anchorMin = center.$clone();
                this.handleRect.anchorMax = center.$clone();
                this.handleRect.pivot = center.$clone();
                this.handleRect.anchoredPosition = pc.Vec2.ZERO.clone();
                var dummyData = new UnityEngine.EventSystems.PointerEventData(UnityEngine.EventSystems.EventSystem.current);
                this.OnDrag(dummyData);
                this.OnPointerUp(dummyData);
            },
            /*Joystick.Start end.*/

            /*Joystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerDown", this ); }

                this.OnDrag(eventData);
            },
            /*Joystick.OnPointerDown end.*/

            /*Joystick.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnDrag", this ); }

                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    this.Start();
                }
                this.cam = null;
                if (this.canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceCamera) {
                    this.cam = this.canvas.worldCamera;
                }
                var position = UnityEngine.RectTransformUtility.WorldToScreenPoint(this.cam, this.background.position);
                var radius = this.background.sizeDelta.$clone().scale( 1.0 / ( 2.0 ) );
                this.input = (eventData.position.$clone().sub( position )).div( (radius.$clone().scale( this.canvas.scaleFactor )) );
                this.FormatInput();
                this.HandleInput(this.input.length(), this.input.clone().normalize().$clone(), radius.$clone(), this.cam);
                this.handleRect.anchoredPosition = this.input.$clone().mul( radius ).scale( this.handleRange );
            },
            /*Joystick.OnDrag end.*/

            /*Joystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "Joystick#HandleInput", this ); }

                if (magnitude > this.deadZone) {
                    if (magnitude > 1.0) {
                        this.input = normalised.$clone();
                    }
                } else {
                    this.input = pc.Vec2.ZERO.clone();
                }
            },
            /*Joystick.HandleInput end.*/

            /*Joystick.FormatInput start.*/
            FormatInput: function () {
if ( TRACE ) { TRACE( "Joystick#FormatInput", this ); }

                if (this.axisOptions === AxisOptions.Horizontal) {
                    this.input = new pc.Vec2( this.input.x, 0.0 );
                } else if (this.axisOptions === AxisOptions.Vertical) {
                    this.input = new pc.Vec2( 0.0, this.input.y );
                }
            },
            /*Joystick.FormatInput end.*/

            /*Joystick.SnapFloat start.*/
            SnapFloat: function (value, snapAxis) {
if ( TRACE ) { TRACE( "Joystick#SnapFloat", this ); }

                if (value === 0.0) {
                    return value;
                }
                if (this.axisOptions === AxisOptions.Both) {
                    var angle = pc.Vec2.angle( this.input, pc.Vec2.UP.clone() );
                    switch (snapAxis) {
                        case AxisOptions.Horizontal: 
                            if (angle < 22.5 || angle > 157.5) {
                                return 0.0;
                            }
                            return (value > 0.0) ? 1 : (-1);
                        case AxisOptions.Vertical: 
                            if (angle > 67.5 && angle < 112.5) {
                                return 0.0;
                            }
                            return (value > 0.0) ? 1 : (-1);
                        default: 
                            return value;
                    }
                }
                if (value > 0.0) {
                    return 1.0;
                }
                if (value < 0.0) {
                    return -1.0;
                }
                return 0.0;
            },
            /*Joystick.SnapFloat end.*/

            /*Joystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerUp", this ); }

                this.input = pc.Vec2.ZERO.clone();
                this.handleRect.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.OnPointerUp end.*/

            /*Joystick.ScreenPointToAnchoredPosition start.*/
            ScreenPointToAnchoredPosition: function (screenPosition) {
if ( TRACE ) { TRACE( "Joystick#ScreenPointToAnchoredPosition", this ); }

                var localPoint = { v : pc.Vec2.ZERO.clone() };
                if (UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.baseRect, screenPosition, this.cam, localPoint)) {
                    var pivotOffset = this.baseRect.pivot.$clone().mul( this.baseRect.sizeDelta );
                    return localPoint.v.$clone().sub( this.background.anchorMax.$clone().mul( this.baseRect.sizeDelta ) ).add( pivotOffset );
                }
                return pc.Vec2.ZERO.clone();
            },
            /*Joystick.ScreenPointToAnchoredPosition end.*/


        }
    });
    /*Joystick end.*/

    /*Extensions.ArrayExtensions start.*/
    Bridge.define("Extensions.ArrayExtensions", {
        statics: {
            methods: {
                /*Extensions.ArrayExtensions.GetRandom:static start.*/
                GetRandom: function (T, enumerable) {
if ( TRACE ) { TRACE( "Extensions.ArrayExtensions#GetRandom", this ); }

                    var $t;
                    return Extensions.ArrayExtensions.GetRandom$1(T, ($t = T, System.Linq.Enumerable.from(enumerable, $t).ToArray($t)));
                },
                /*Extensions.ArrayExtensions.GetRandom:static end.*/

                /*Extensions.ArrayExtensions.GetRandom$1:static start.*/
                GetRandom$1: function (T, list) {
if ( TRACE ) { TRACE( "Extensions.ArrayExtensions#GetRandom$1", this ); }

                    return Bridge.rValue(System.Array.getItem(list, UnityEngine.Random.Range(0, System.Array.getCount(list, T)), T));
                },
                /*Extensions.ArrayExtensions.GetRandom$1:static end.*/


            }
        }
    });
    /*Extensions.ArrayExtensions end.*/

    /*Extensions.DictionaryExtensions start.*/
    Bridge.define("Extensions.DictionaryExtensions", {
        statics: {
            methods: {
                /*Extensions.DictionaryExtensions.Add:static start.*/
                Add: function (TKey, TValue, dictionary, dictionaryToCopyFrom) {
if ( TRACE ) { TRACE( "Extensions.DictionaryExtensions#Add", this ); }

                    var $t;
                    $t = Bridge.getEnumerator(dictionaryToCopyFrom);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            var key2 = { };
                            var value2 = { };
                            item.Deconstruct(Bridge.rValue(key2), Bridge.rValue(value2));
                            var key = Bridge.rValue(key2.v);
                            var value = Bridge.rValue(value2.v);
                            dictionary.add(Bridge.rValue(key), Bridge.rValue(value));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                /*Extensions.DictionaryExtensions.Add:static end.*/

                /*Extensions.DictionaryExtensions.Copy:static start.*/
                Copy: function (TKey, TValue, dictionary, toCopy) {
if ( TRACE ) { TRACE( "Extensions.DictionaryExtensions#Copy", this ); }

                    var $t;
                    $t = Bridge.getEnumerator(toCopy);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            var key2 = { };
                            var value2 = { };
                            item.Deconstruct(Bridge.rValue(key2), Bridge.rValue(value2));
                            var key = Bridge.rValue(key2.v);
                            var value = Bridge.rValue(value2.v);
                            dictionary.setItem(Bridge.rValue(key), (Bridge.Reflection.isValueType(TValue) ? Bridge.rValue(value) : Extensions.DictionaryExtensions.CloneObject(TValue, Bridge.rValue(value))));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                /*Extensions.DictionaryExtensions.Copy:static end.*/

                /*Extensions.DictionaryExtensions.CloneObject:static start.*/
                CloneObject: function (T, obj) {
if ( TRACE ) { TRACE( "Extensions.DictionaryExtensions#CloneObject", this ); }

                    var cloneable;
                    if (((cloneable = Bridge.as(obj, Utilities.ICloneable$1(T)))) != null) {
                        return cloneable["Utilities$ICloneable$1$" + Bridge.getTypeAlias(T) + "$Clone"](Bridge.rValue(obj));
                    }
                    return Bridge.rValue(obj);
                },
                /*Extensions.DictionaryExtensions.CloneObject:static end.*/


            }
        }
    });
    /*Extensions.DictionaryExtensions end.*/

    /*Extensions.FloatExtensions start.*/
    Bridge.define("Extensions.FloatExtensions", {
        statics: {
            methods: {
                /*Extensions.FloatExtensions.Remap:static start.*/
                Remap: function (value, from1, to1, from2, to2) {
if ( TRACE ) { TRACE( "Extensions.FloatExtensions#Remap", this ); }

                    return (value - from1) / (to1 - from1) * (to2 - from2) + from2;
                },
                /*Extensions.FloatExtensions.Remap:static end.*/

                /*Extensions.FloatExtensions.Remap01:static start.*/
                Remap01: function (value, from, to) {
if ( TRACE ) { TRACE( "Extensions.FloatExtensions#Remap01", this ); }

                    return (value - from) / (to - from);
                },
                /*Extensions.FloatExtensions.Remap01:static end.*/

                /*Extensions.FloatExtensions.ApproximatelyEqual:static start.*/
                ApproximatelyEqual: function (a, b) {
if ( TRACE ) { TRACE( "Extensions.FloatExtensions#ApproximatelyEqual", this ); }

                    return Extensions.FloatExtensions.ApproximatelyEqual$1(a, b, Number.EPSILON);
                },
                /*Extensions.FloatExtensions.ApproximatelyEqual:static end.*/

                /*Extensions.FloatExtensions.ApproximatelyEqual$1:static start.*/
                ApproximatelyEqual$1: function (a, b, epsilon) {
if ( TRACE ) { TRACE( "Extensions.FloatExtensions#ApproximatelyEqual$1", this ); }

                    return Math.abs(a - b) <= epsilon;
                },
                /*Extensions.FloatExtensions.ApproximatelyEqual$1:static end.*/

                /*Extensions.FloatExtensions.ToMinutes:static start.*/
                ToMinutes: function (value, precision) {
if ( TRACE ) { TRACE( "Extensions.FloatExtensions#ToMinutes", this ); }

                    if (precision === void 0) { precision = 1; }
                    var multiplier = precision * 10.0;
                    return System.Single.format((Math.round(value / 60.0 * multiplier) / multiplier), "G", System.Globalization.CultureInfo.invariantCulture);
                },
                /*Extensions.FloatExtensions.ToMinutes:static end.*/


            }
        }
    });
    /*Extensions.FloatExtensions end.*/

    /*Extensions.IntExtensions start.*/
    Bridge.define("Extensions.IntExtensions", {
        statics: {
            methods: {
                /*Extensions.IntExtensions.Remap:static start.*/
                Remap: function (value, from1, to1, from2, to2) {
if ( TRACE ) { TRACE( "Extensions.IntExtensions#Remap", this ); }

                    return (value - from1) / (to1 - from1) * (to2 - from2) + from2;
                },
                /*Extensions.IntExtensions.Remap:static end.*/

                /*Extensions.IntExtensions.ToLayerMask:static start.*/
                ToLayerMask: function (value) {
if ( TRACE ) { TRACE( "Extensions.IntExtensions#ToLayerMask", this ); }

                    return UnityEngine.LayerMask.op_Implicit$1(1 << value);
                },
                /*Extensions.IntExtensions.ToLayerMask:static end.*/

                /*Extensions.IntExtensions.ToLayerMaskValue:static start.*/
                ToLayerMaskValue: function (value) {
if ( TRACE ) { TRACE( "Extensions.IntExtensions#ToLayerMaskValue", this ); }

                    return 1 << value;
                },
                /*Extensions.IntExtensions.ToLayerMaskValue:static end.*/


            }
        }
    });
    /*Extensions.IntExtensions end.*/

    /*Extensions.LayerMaskExtensions start.*/
    Bridge.define("Extensions.LayerMaskExtensions", {
        statics: {
            methods: {
                /*Extensions.LayerMaskExtensions.Contains:static start.*/
                Contains: function (mask, layer) {
if ( TRACE ) { TRACE( "Extensions.LayerMaskExtensions#Contains", this ); }

                    return (mask.value & (1 << layer)) !== 0;
                },
                /*Extensions.LayerMaskExtensions.Contains:static end.*/

                /*Extensions.LayerMaskExtensions.ToLayer:static start.*/
                ToLayer: function (mask) {
if ( TRACE ) { TRACE( "Extensions.LayerMaskExtensions#ToLayer", this ); }

                    return Bridge.Int.clip32(Math.log(mask.value) / Math.log(2.0));
                },
                /*Extensions.LayerMaskExtensions.ToLayer:static end.*/


            }
        }
    });
    /*Extensions.LayerMaskExtensions end.*/

    /*Extensions.ListExtensions start.*/
    Bridge.define("Extensions.ListExtensions", {
        statics: {
            methods: {
                /*Extensions.ListExtensions.Shuffle:static start.*/
                Shuffle: function (T, list) {
if ( TRACE ) { TRACE( "Extensions.ListExtensions#Shuffle", this ); }

                    var j = System.Array.getCount(list, T);
                    while (j > 1) {
                        j = (j - 1) | 0;
                        var i = UnityEngine.Random.Range(0, j);
                        var index = i;
                        var index2 = j;
                        var val = Bridge.rValue(System.Array.getItem(list, j, T));
                        var val2 = Bridge.rValue(System.Array.getItem(list, i, T));
                        var val4 = ((System.Array.setItem(list, index, Bridge.rValue(val), T), Bridge.rValue(val)));
                        val4 = ((System.Array.setItem(list, index2, Bridge.rValue(val2), T), Bridge.rValue(val2)));
                    }
                },
                /*Extensions.ListExtensions.Shuffle:static end.*/

                /*Extensions.ListExtensions.Random:static start.*/
                Random: function (T, list) {
if ( TRACE ) { TRACE( "Extensions.ListExtensions#Random", this ); }

                    return Bridge.rValue(System.Array.getItem(list, UnityEngine.Random.Range(0, System.Array.getCount(list, T)), T));
                },
                /*Extensions.ListExtensions.Random:static end.*/

                /*Extensions.ListExtensions.AddIfNotContains:static start.*/
                AddIfNotContains: function (T, list, value) {
if ( TRACE ) { TRACE( "Extensions.ListExtensions#AddIfNotContains", this ); }

                    if (!System.Array.contains(list, Bridge.rValue(value), T)) {
                        System.Array.add(list, Bridge.rValue(value), T);
                        return true;
                    }
                    return false;
                },
                /*Extensions.ListExtensions.AddIfNotContains:static end.*/


            }
        }
    });
    /*Extensions.ListExtensions end.*/

    /*Extensions.QuaternionExtensions start.*/
    Bridge.define("Extensions.QuaternionExtensions", {
        statics: {
            methods: {
                /*Extensions.QuaternionExtensions.SmoothDamp:static start.*/
                SmoothDamp: function (current, target, currentVelocity, smoothTime) {
if ( TRACE ) { TRACE( "Extensions.QuaternionExtensions#SmoothDamp", this ); }

                    var c = current.getPositiveEulerAngles().$clone();
                    var t = target.getPositiveEulerAngles().$clone();
                    return new pc.Quat().setFromEulerAngles_Unity( UnityEngine.Mathf.SmoothDampAngle(c.x, t.x, Bridge.ref(currentVelocity.v, "x"), smoothTime), UnityEngine.Mathf.SmoothDampAngle(c.y, t.y, Bridge.ref(currentVelocity.v, "y"), smoothTime), UnityEngine.Mathf.SmoothDampAngle(c.z, t.z, Bridge.ref(currentVelocity.v, "z"), smoothTime) );
                },
                /*Extensions.QuaternionExtensions.SmoothDamp:static end.*/

                /*Extensions.QuaternionExtensions.IsEqualTo:static start.*/
                IsEqualTo: function (a, b) {
if ( TRACE ) { TRACE( "Extensions.QuaternionExtensions#IsEqualTo", this ); }

                    return pc.Quat.angle( a.$clone(), b.$clone() ) === 0.0;
                },
                /*Extensions.QuaternionExtensions.IsEqualTo:static end.*/


            }
        }
    });
    /*Extensions.QuaternionExtensions end.*/

    /*Extensions.ScriptableObjectExtensions start.*/
    Bridge.define("Extensions.ScriptableObjectExtensions");
    /*Extensions.ScriptableObjectExtensions end.*/

    /*Extensions.StringExtensions start.*/
    Bridge.define("Extensions.StringExtensions", {
        statics: {
            fields: {
                _suffixes: null,
                _cachedAppendString: null,
                _cachedPrependString: null,
                _stringBuilder: null,
                _cachedStateNames: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Extensions.StringExtensions#init", this ); }

                    this._suffixes = System.Array.init(["", "k", "M", "B", "T", "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az", "ba", "bb", "bc", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bk", "bl", "bm", "bn", "bo", "bp", "bq", "br", "bs", "bt", "bu", "bv", "bw", "bx", "by", "bz"], System.String);
                    this._cachedAppendString = new (System.Collections.Generic.Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.Double,System.String))).ctor();
                    this._cachedPrependString = new (System.Collections.Generic.Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.Double,System.String))).ctor();
                    this._stringBuilder = new System.Text.StringBuilder();
                    this._cachedStateNames = new (System.Collections.Generic.Dictionary$2(System.Type,System.String)).ctor();
                }
            },
            methods: {
                /*Extensions.StringExtensions.GetPrettifiedNumber:static start.*/
                GetPrettifiedNumber: function (number, suffix) {
if ( TRACE ) { TRACE( "Extensions.StringExtensions#GetPrettifiedNumber", this ); }

                    if (number < 1000.0) {
                        suffix.v = Extensions.StringExtensions._suffixes[0];
                        return number;
                    }
                    var powerOfTen = Bridge.Int.clip32(Bridge.Math.logWithBase(number, 10.0));
                    powerOfTen = Bridge.Int.mul(((Bridge.Int.div(powerOfTen, 3)) | 0), 3);
                    number /= Math.pow(10.0, powerOfTen);
                    suffix.v = Extensions.StringExtensions._suffixes[((Bridge.Int.div(powerOfTen, 3)) | 0)];
                    return Math.floor(number * 10.0) / 10.0;
                },
                /*Extensions.StringExtensions.GetPrettifiedNumber:static end.*/

                /*Extensions.StringExtensions.GetCachedAppend:static start.*/
                GetCachedAppend: function (value, append) {
if ( TRACE ) { TRACE( "Extensions.StringExtensions#GetCachedAppend", this ); }

                    var $t, $t1;
                    var dic = { };
                    if (Extensions.StringExtensions._cachedAppendString.tryGetValue(append, dic)) {
                        var str = { };
                        if (dic.v.tryGetValue(value, str)) {
                            return str.v;
                        }
                    } else {
                        var dictionary2 = (($t = new (System.Collections.Generic.Dictionary$2(System.Double,System.String)).ctor(), Extensions.StringExtensions._cachedAppendString.setItem(append, $t), $t));
                        dic.v = dictionary2;
                    }
                    Extensions.StringExtensions._stringBuilder.clear();
                    return ($t1 = Extensions.StringExtensions._stringBuilder.append(System.String.format("{0}{1}", Bridge.box(value, System.Double, System.Double.format, System.Double.getHashCode), append)).toString(), dic.v.setItem(value, $t1), $t1);
                },
                /*Extensions.StringExtensions.GetCachedAppend:static end.*/

                /*Extensions.StringExtensions.GetCachedPrepend:static start.*/
                GetCachedPrepend: function (value, prepend) {
if ( TRACE ) { TRACE( "Extensions.StringExtensions#GetCachedPrepend", this ); }

                    var $t, $t1;
                    var dic = { };
                    if (Extensions.StringExtensions._cachedPrependString.tryGetValue(prepend, dic)) {
                        var str = { };
                        if (dic.v.tryGetValue(value, str)) {
                            return str.v;
                        }
                    } else {
                        var dictionary2 = (($t = new (System.Collections.Generic.Dictionary$2(System.Double,System.String)).ctor(), Extensions.StringExtensions._cachedPrependString.setItem(prepend, $t), $t));
                        dic.v = dictionary2;
                    }
                    Extensions.StringExtensions._stringBuilder.clear();
                    return ($t1 = Extensions.StringExtensions._stringBuilder.append(System.String.format("{0}{1}", prepend, Bridge.box(value, System.Double, System.Double.format, System.Double.getHashCode))).toString(), dic.v.setItem(value, $t1), $t1);
                },
                /*Extensions.StringExtensions.GetCachedPrepend:static end.*/

                /*Extensions.StringExtensions.GetCachedPrepend$1:static start.*/
                GetCachedPrepend$1: function (number, prepend) {
if ( TRACE ) { TRACE( "Extensions.StringExtensions#GetCachedPrepend$1", this ); }

                    return Extensions.StringExtensions.GetCachedPrepend(System.Int64.toNumber(number), prepend);
                },
                /*Extensions.StringExtensions.GetCachedPrepend$1:static end.*/

                /*Extensions.StringExtensions.PrettifyNumber$3:static start.*/
                PrettifyNumber$3: function (number) {
if ( TRACE ) { TRACE( "Extensions.StringExtensions#PrettifyNumber$3", this ); }

                    var s = { };
                    return Extensions.StringExtensions.GetCachedAppend(Extensions.StringExtensions.GetPrettifiedNumber(System.Int64.toNumber(number), s), s.v);
                },
                /*Extensions.StringExtensions.PrettifyNumber$3:static end.*/

                /*Extensions.StringExtensions.PrettifyNumber$2:static start.*/
                PrettifyNumber$2: function (number) {
if ( TRACE ) { TRACE( "Extensions.StringExtensions#PrettifyNumber$2", this ); }

                    return Extensions.StringExtensions.PrettifyNumber$3(Bridge.Int.clipu64(number));
                },
                /*Extensions.StringExtensions.PrettifyNumber$2:static end.*/

                /*Extensions.StringExtensions.PrettifyNumber$1:static start.*/
                PrettifyNumber$1: function (number) {
if ( TRACE ) { TRACE( "Extensions.StringExtensions#PrettifyNumber$1", this ); }

                    return Extensions.StringExtensions.PrettifyNumber$3(Bridge.Int.clipu64(number));
                },
                /*Extensions.StringExtensions.PrettifyNumber$1:static end.*/

                /*Extensions.StringExtensions.PrettifyNumber:static start.*/
                PrettifyNumber: function (number) {
if ( TRACE ) { TRACE( "Extensions.StringExtensions#PrettifyNumber", this ); }

                    var s = { };
                    return Extensions.StringExtensions.GetCachedAppend(Extensions.StringExtensions.GetPrettifiedNumber(number, s), s.v);
                },
                /*Extensions.StringExtensions.PrettifyNumber:static end.*/

                /*Extensions.StringExtensions.GetStateName:static start.*/
                GetStateName: function (type) {
if ( TRACE ) { TRACE( "Extensions.StringExtensions#GetStateName", this ); }

                    var $t;
                    var name = { };
                    if (Extensions.StringExtensions._cachedStateNames.tryGetValue(type, name)) {
                        return name.v;
                    }
                    var split = System.String.split(Bridge.getTypeName(type), [46].map(function (i) {{ return String.fromCharCode(i); }}));
                    return ($t = split[((split.length - 1) | 0)], Extensions.StringExtensions._cachedStateNames.setItem(type, $t), $t);
                },
                /*Extensions.StringExtensions.GetStateName:static end.*/

                /*Extensions.StringExtensions.IsNullOrWhitespace:static start.*/
                IsNullOrWhitespace: function (str) {
if ( TRACE ) { TRACE( "Extensions.StringExtensions#IsNullOrWhitespace", this ); }

                    return System.String.isNullOrWhiteSpace(str);
                },
                /*Extensions.StringExtensions.IsNullOrWhitespace:static end.*/


            }
        }
    });
    /*Extensions.StringExtensions end.*/

    /*Extensions.TransformExtensions start.*/
    Bridge.define("Extensions.TransformExtensions", {
        statics: {
            methods: {
                /*Extensions.TransformExtensions.SetPositionAndRotation:static start.*/
                SetPositionAndRotation: function (transform, target) {
if ( TRACE ) { TRACE( "Extensions.TransformExtensions#SetPositionAndRotation", this ); }

                    transform.SetPositionAndRotation(target.position, target.rotation);
                },
                /*Extensions.TransformExtensions.SetPositionAndRotation:static end.*/

                /*Extensions.TransformExtensions.DestroyAllChildren:static start.*/
                DestroyAllChildren: function (transform) {
if ( TRACE ) { TRACE( "Extensions.TransformExtensions#DestroyAllChildren", this ); }

                    for (var i = (transform.childCount - 1) | 0; i >= 0; i = (i - 1) | 0) {
                        UnityEngine.Object.Destroy(transform.GetChild(i).gameObject);
                    }
                },
                /*Extensions.TransformExtensions.DestroyAllChildren:static end.*/


            }
        }
    });
    /*Extensions.TransformExtensions end.*/

    /*Extensions.TweenExtensions start.*/
    Bridge.define("Extensions.TweenExtensions", {
        statics: {
            methods: {
                /*Extensions.TweenExtensions.DoPopUp$1:static start.*/
                DoPopUp$1: function (transform, duration, percent, onPopped, targetScale, fromZero, kill, ignoreYPercent) {
if ( TRACE ) { TRACE( "Extensions.TweenExtensions#DoPopUp$1", this ); }

                    if (duration === void 0) { duration = 0.3; }
                    if (percent === void 0) { percent = 1.1; }
                    if (onPopped === void 0) { onPopped = null; }
                    if (targetScale === void 0) { targetScale = new UnityEngine.Vector3(); }
                    if (fromZero === void 0) { fromZero = false; }
                    if (kill === void 0) { kill = true; }
                    if (ignoreYPercent === void 0) { ignoreYPercent = false; }
                    if (kill) {
                        DG.Tweening.ShortcutExtensions.DOKill(transform);
                    }
                    if (pc.Vec3.equals( targetScale, Bridge.getDefaultValue(UnityEngine.Vector3) )) {
                        targetScale = new pc.Vec3( 1, 1, 1 );
                    }
                    if (fromZero) {
                        transform.localScale = pc.Vec3.ZERO.clone();
                    }
                    var percentVector = new pc.Vec3( percent, ignoreYPercent ? 1.0 : percent, percent );
                    var seq = DG.Tweening.DOTween.Sequence$1(transform);
                    DG.Tweening.TweenSettingsExtensions.SetLink(DG.Tweening.Sequence, seq, transform.gameObject);
                    DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(transform, new pc.Vec3().mul2( targetScale, percentVector ), duration * 0.75), DG.Tweening.Ease.OutQuad));
                    DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(transform, targetScale.$clone(), duration * 0.25), DG.Tweening.Ease.InQuad));
                    DG.Tweening.TweenSettingsExtensions.AppendCallback(seq, function () {
                        !Bridge.staticEquals(onPopped, null) ? onPopped() : null;
                    });
                    return seq;
                },
                /*Extensions.TweenExtensions.DoPopUp$1:static end.*/

                /*Extensions.TweenExtensions.DoPopUp:static start.*/
                DoPopUp: function (from, to, onUpdate, duration, percent, onPopped) {
if ( TRACE ) { TRACE( "Extensions.TweenExtensions#DoPopUp", this ); }

                    if (duration === void 0) { duration = 0.3; }
                    if (percent === void 0) { percent = 1.1; }
                    if (onPopped === void 0) { onPopped = null; }
                    var seq = DG.Tweening.DOTween.Sequence();
                    var diff = Math.abs(to - from);
                    var targetHalf = diff * percent + from;
                    DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.DOVirtual.Float(from, targetHalf, duration * 0.75, onUpdate), DG.Tweening.Ease.OutQuad));
                    DG.Tweening.TweenSettingsExtensions.AppendCallback(seq, function () {
                        !Bridge.staticEquals(onPopped, null) ? onPopped() : null;
                    });
                    DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.DOVirtual.Float(targetHalf, to, duration * 0.25, onUpdate), DG.Tweening.Ease.InQuad));
                    return seq;
                },
                /*Extensions.TweenExtensions.DoPopUp:static end.*/

                /*Extensions.TweenExtensions.DoPopDown$1:static start.*/
                DoPopDown$1: function (transform, duration, percent, onPopped, kill, targetScale, startScale) {
if ( TRACE ) { TRACE( "Extensions.TweenExtensions#DoPopDown$1", this ); }

                    if (duration === void 0) { duration = 0.3; }
                    if (percent === void 0) { percent = 1.1; }
                    if (onPopped === void 0) { onPopped = null; }
                    if (kill === void 0) { kill = true; }
                    if (targetScale === void 0) { targetScale = 0.0; }
                    if (startScale === void 0) { startScale = new UnityEngine.Vector3(); }
                    if (kill) {
                        DG.Tweening.ShortcutExtensions.DOKill(transform);
                    }
                    if (pc.Vec3.equals( startScale, Bridge.getDefaultValue(UnityEngine.Vector3) )) {
                        startScale = transform.localScale.$clone();
                    }
                    var seq = DG.Tweening.DOTween.Sequence$1(transform);
                    DG.Tweening.TweenSettingsExtensions.SetLink(DG.Tweening.Sequence, seq, transform.gameObject);
                    DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(transform, startScale.$clone().clone().scale( percent ), duration * 0.25), DG.Tweening.Ease.OutQuad));
                    DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(transform, targetScale, duration * 0.75), DG.Tweening.Ease.InQuad));
                    DG.Tweening.TweenSettingsExtensions.AppendCallback(seq, function () {
                        !Bridge.staticEquals(onPopped, null) ? onPopped() : null;
                    });
                    return seq;
                },
                /*Extensions.TweenExtensions.DoPopDown$1:static end.*/

                /*Extensions.TweenExtensions.DoPopDown:static start.*/
                DoPopDown: function (from, to, onUpdate, duration, percent, onPopped) {
if ( TRACE ) { TRACE( "Extensions.TweenExtensions#DoPopDown", this ); }

                    if (duration === void 0) { duration = 0.3; }
                    if (percent === void 0) { percent = 1.1; }
                    if (onPopped === void 0) { onPopped = null; }
                    var seq = DG.Tweening.DOTween.Sequence();
                    var diff = Math.abs(from - to);
                    var targetHalf = from - diff * percent;
                    DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.DOVirtual.Float(from, targetHalf, duration * 0.75, onUpdate), DG.Tweening.Ease.OutQuad));
                    DG.Tweening.TweenSettingsExtensions.AppendCallback(seq, function () {
                        !Bridge.staticEquals(onPopped, null) ? onPopped() : null;
                    });
                    DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.DOVirtual.Float(targetHalf, to, duration * 0.25, onUpdate), DG.Tweening.Ease.InQuad));
                    return seq;
                },
                /*Extensions.TweenExtensions.DoPopDown:static end.*/


            }
        }
    });
    /*Extensions.TweenExtensions end.*/

    /*Extensions.VectorExtensions start.*/
    Bridge.define("Extensions.VectorExtensions", {
        statics: {
            methods: {
                /*Extensions.VectorExtensions.RandomPointOnLine:static start.*/
                RandomPointOnLine: function (from, to) {
if ( TRACE ) { TRACE( "Extensions.VectorExtensions#RandomPointOnLine", this ); }

                    return new pc.Vec3().lerp( from, to, UnityEngine.Random.Range$1(0.0, 1.0) );
                },
                /*Extensions.VectorExtensions.RandomPointOnLine:static end.*/

                /*Extensions.VectorExtensions.Set:static start.*/
                Set: function (v, value) {
if ( TRACE ) { TRACE( "Extensions.VectorExtensions#Set", this ); }

                    v.x = value;
                    v.y = value;
                    v.z = value;
                    return v.$clone();
                },
                /*Extensions.VectorExtensions.Set:static end.*/

                /*Extensions.VectorExtensions.SetY:static start.*/
                SetY: function (v, y) {
if ( TRACE ) { TRACE( "Extensions.VectorExtensions#SetY", this ); }

                    v.y = y;
                    return v.$clone();
                },
                /*Extensions.VectorExtensions.SetY:static end.*/

                /*Extensions.VectorExtensions.SetX:static start.*/
                SetX: function (v, x) {
if ( TRACE ) { TRACE( "Extensions.VectorExtensions#SetX", this ); }

                    v.x = x;
                    return v.$clone();
                },
                /*Extensions.VectorExtensions.SetX:static end.*/

                /*Extensions.VectorExtensions.SetZ:static start.*/
                SetZ: function (v, z) {
if ( TRACE ) { TRACE( "Extensions.VectorExtensions#SetZ", this ); }

                    v.z = z;
                    return v.$clone();
                },
                /*Extensions.VectorExtensions.SetZ:static end.*/

                /*Extensions.VectorExtensions.IsInRangeXZ:static start.*/
                IsInRangeXZ: function (v, other, range) {
if ( TRACE ) { TRACE( "Extensions.VectorExtensions#IsInRangeXZ", this ); }

                    Extensions.VectorExtensions.SetY(v, 0.0);
                    Extensions.VectorExtensions.SetY(other, 0.0);
                    return v.$clone().sub( other ).lengthSq() <= range * range;
                },
                /*Extensions.VectorExtensions.IsInRangeXZ:static end.*/

                /*Extensions.VectorExtensions.IsInRange:static start.*/
                IsInRange: function (v, other, range) {
if ( TRACE ) { TRACE( "Extensions.VectorExtensions#IsInRange", this ); }

                    return v.$clone().sub( other ).lengthSq() <= range * range;
                },
                /*Extensions.VectorExtensions.IsInRange:static end.*/

                /*Extensions.VectorExtensions.GetRandomInRadiusXZ:static start.*/
                GetRandomInRadiusXZ: function (v, radius) {
if ( TRACE ) { TRACE( "Extensions.VectorExtensions#GetRandomInRadiusXZ", this ); }

                    var r = UnityEngine.Random.insideUnitCircle.$clone().scale( radius );
                    return new pc.Vec3( r.x + v.x, v.y, r.y + v.z );
                },
                /*Extensions.VectorExtensions.GetRandomInRadiusXZ:static end.*/

                /*Extensions.VectorExtensions.GetRandom:static start.*/
                GetRandom: function (vector) {
if ( TRACE ) { TRACE( "Extensions.VectorExtensions#GetRandom", this ); }

                    return UnityEngine.Random.Range$1(vector.x, vector.y);
                },
                /*Extensions.VectorExtensions.GetRandom:static end.*/

                /*Extensions.VectorExtensions.IsOnScreen:static start.*/
                IsOnScreen: function (pos, camera, offset) {
if ( TRACE ) { TRACE( "Extensions.VectorExtensions#IsOnScreen", this ); }

                    if (offset === void 0) { offset = new UnityEngine.Vector2(); }
                    var screenPos = camera.WorldToViewportPoint(pos);
                    return screenPos.x + offset.x >= 0.0 && screenPos.x - offset.x <= 1.0 && screenPos.y + offset.y >= 0.0 && screenPos.y - offset.y <= 1.0;
                },
                /*Extensions.VectorExtensions.IsOnScreen:static end.*/

                /*Extensions.VectorExtensions.MoveByDistanceTo:static start.*/
                MoveByDistanceTo: function (from, to, distance) {
if ( TRACE ) { TRACE( "Extensions.VectorExtensions#MoveByDistanceTo", this ); }

                    var direction = to.$clone().sub( from );
                    var sqrCurrentDistance = direction.lengthSq();
                    var sqrDistance = distance * distance;
                    if (sqrCurrentDistance <= sqrDistance) {
                        return to.$clone();
                    }
                    return from.$clone().add( direction.clone().normalize().$clone().clone().scale( distance ) );
                },
                /*Extensions.VectorExtensions.MoveByDistanceTo:static end.*/


            }
        }
    });
    /*Extensions.VectorExtensions end.*/

    /*Extensions.VectorFactory start.*/
    Bridge.define("Extensions.VectorFactory", {
        statics: {
            methods: {
                /*Extensions.VectorFactory.Create:static start.*/
                Create: function (value) {
if ( TRACE ) { TRACE( "Extensions.VectorFactory#Create", this ); }

                    return new pc.Vec3( value, value, value );
                },
                /*Extensions.VectorFactory.Create:static end.*/

                /*Extensions.VectorFactory.CreateX:static start.*/
                CreateX: function (origin, x) {
if ( TRACE ) { TRACE( "Extensions.VectorFactory#CreateX", this ); }

                    return new pc.Vec3( x, origin.y, origin.z );
                },
                /*Extensions.VectorFactory.CreateX:static end.*/

                /*Extensions.VectorFactory.CreateY:static start.*/
                CreateY: function (origin, y) {
if ( TRACE ) { TRACE( "Extensions.VectorFactory#CreateY", this ); }

                    return new pc.Vec3( origin.x, y, origin.z );
                },
                /*Extensions.VectorFactory.CreateY:static end.*/


            }
        }
    });
    /*Extensions.VectorFactory end.*/

    /*Factories.FactoryBuyActivator start.*/
    Bridge.define("Factories.FactoryBuyActivator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _buyZone: null,
            _factory: null,
            _delay: 0
        },
        methods: {
            /*Factories.FactoryBuyActivator.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Factories.FactoryBuyActivator#Awake", this ); }

                this._buyZone.addTriggered(Bridge.fn.cacheBind(this, this.ActivateConveyor));
            },
            /*Factories.FactoryBuyActivator.Awake end.*/

            /*Factories.FactoryBuyActivator.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Factories.FactoryBuyActivator#OnDestroy", this ); }

                this._buyZone.removeTriggered(Bridge.fn.cacheBind(this, this.ActivateConveyor));
            },
            /*Factories.FactoryBuyActivator.OnDestroy end.*/

            /*Factories.FactoryBuyActivator.ActivateConveyor start.*/
            ActivateConveyor: function () {
if ( TRACE ) { TRACE( "Factories.FactoryBuyActivator#ActivateConveyor", this ); }

                if (this._delay > 0.0) {
                    this.StartCoroutine$1(this.ActivateAfterDelay());
                } else {
                    this._factory.StartWork();
                }
            },
            /*Factories.FactoryBuyActivator.ActivateConveyor end.*/

            /*Factories.FactoryBuyActivator.ActivateAfterDelay start.*/
            ActivateAfterDelay: function () {
if ( TRACE ) { TRACE( "Factories.FactoryBuyActivator#ActivateAfterDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this._delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._factory.StartWork();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Factories.FactoryBuyActivator.ActivateAfterDelay end.*/


        }
    });
    /*Factories.FactoryBuyActivator end.*/

    /*Factories.FactoryUpgrade start.*/
    Bridge.define("Factories.FactoryUpgrade", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _trigger: null,
            _logFactory: null,
            _plankFactory: null,
            _toDisable: null
        },
        methods: {
            /*Factories.FactoryUpgrade.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Factories.FactoryUpgrade#Awake", this ); }

                this._trigger.addTriggered(Bridge.fn.cacheBind(this, this.Upgrade));
            },
            /*Factories.FactoryUpgrade.Awake end.*/

            /*Factories.FactoryUpgrade.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Factories.FactoryUpgrade#OnDestroy", this ); }

                this._trigger.removeTriggered(Bridge.fn.cacheBind(this, this.Upgrade));
            },
            /*Factories.FactoryUpgrade.OnDestroy end.*/

            /*Factories.FactoryUpgrade.Upgrade start.*/
            Upgrade: function () {
if ( TRACE ) { TRACE( "Factories.FactoryUpgrade#Upgrade", this ); }

                this._logFactory.StopWork();
                this._plankFactory.Upgrade();
                this.StartCoroutine$1(this.Disable());
            },
            /*Factories.FactoryUpgrade.Upgrade end.*/

            /*Factories.FactoryUpgrade.Disable start.*/
            Disable: function () {
if ( TRACE ) { TRACE( "Factories.FactoryUpgrade#Disable", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    for (var i = 0; i < this._toDisable.length; i = (i + 1) | 0) {
                                            Extensions.TweenExtensions.DoPopDown$1(this._toDisable[i]);
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.3);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    for (var j = 0; j < this._toDisable.length; j = (j + 1) | 0) {
                                            this._toDisable[j].gameObject.SetActive(false);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Factories.FactoryUpgrade.Disable end.*/


        }
    });
    /*Factories.FactoryUpgrade end.*/

    /*Factories.ItemPickup start.*/
    Bridge.define("Factories.ItemPickup", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _from: null,
            _type: 0,
            _delay: 0,
            _stackManager: null,
            _inside: false,
            LastPickupTime: 0
        },
        events: {
            PickedUp: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Factories.ItemPickup#init", this ); }

                this._delay = 0.07;
            }
        },
        methods: {
            /*Factories.ItemPickup.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Factories.ItemPickup#Update", this ); }

                if (this._inside && !this._from.IsEmpty && UnityEngine.Time.time - this.LastPickupTime >= this._delay && this._stackManager.CanAddItem(this._type)) {
                    var resource = this._from.RemoveItem();
                    this._stackManager.GetStack(this._type).AddItem(resource);
                    this.LastPickupTime = UnityEngine.Time.time;
                    !Bridge.staticEquals(this.PickedUp, null) ? this.PickedUp() : null;
                }
            },
            /*Factories.ItemPickup.Update end.*/

            /*Factories.ItemPickup.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Factories.ItemPickup#OnTriggerEnter", this ); }

                var stackManager = { };
                if (other.TryGetComponent$1(Hero.HeroStackManager, stackManager)) {
                    this._inside = true;
                    this._stackManager = stackManager.v;
                }
            },
            /*Factories.ItemPickup.OnTriggerEnter end.*/

            /*Factories.ItemPickup.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
if ( TRACE ) { TRACE( "Factories.ItemPickup#OnTriggerExit", this ); }

                var _discard1 = { };
                if (other.TryGetComponent$1(Hero.HeroStackManager, _discard1)) {
                    this._inside = false;
                }
            },
            /*Factories.ItemPickup.OnTriggerExit end.*/


        }
    });
    /*Factories.ItemPickup end.*/

    /*Factories.LogFactory start.*/
    Bridge.define("Factories.LogFactory", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _stack: null,
            _logPool: null,
            _spawnPoint: null,
            _midPoint: null,
            _spawnDelay: 0,
            _pickup: null,
            _spawnDelayAfterPickup: 0,
            _inProcessCount: 0,
            _lastSpawnTime: 0,
            _working: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Factories.LogFactory#init", this ); }

                this._spawnDelayAfterPickup = 1.0;
            }
        },
        methods: {
            /*Factories.LogFactory.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Factories.LogFactory#Update", this ); }

                if (this._working && this._inProcessCount < this._stack.FreeSpaceAmount && !(UnityEngine.Time.time - this._lastSpawnTime < this._spawnDelay) && !(UnityEngine.Time.time - this._pickup.LastPickupTime < this._spawnDelayAfterPickup)) {
                    this.StartCoroutine$1(this.SpawnLog());
                }
            },
            /*Factories.LogFactory.Update end.*/

            /*Factories.LogFactory.StartWork start.*/
            StartWork: function () {
if ( TRACE ) { TRACE( "Factories.LogFactory#StartWork", this ); }

                this._working = true;
            },
            /*Factories.LogFactory.StartWork end.*/

            /*Factories.LogFactory.StopWork start.*/
            StopWork: function () {
if ( TRACE ) { TRACE( "Factories.LogFactory#StopWork", this ); }

                this._working = false;
            },
            /*Factories.LogFactory.StopWork end.*/

            /*Factories.LogFactory.SpawnLog start.*/
            SpawnLog: function () {
if ( TRACE ) { TRACE( "Factories.LogFactory#SpawnLog", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    log,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._inProcessCount = (this._inProcessCount + 1) | 0;
                                        log = this._logPool.Get();
                                        Extensions.TransformExtensions.SetPositionAndRotation(log.transform, this._spawnPoint);
                                        log.gameObject.SetActive(true);
                                        this._lastSpawnTime = UnityEngine.Time.time;
                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(DG.Tweening.ShortcutExtensions.DOMove(log.transform, this._midPoint.position.$clone(), 0.15));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._stack.AddItem(log, 0.5);
                                        this._inProcessCount = (this._inProcessCount - 1) | 0;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Factories.LogFactory.SpawnLog end.*/


        }
    });
    /*Factories.LogFactory end.*/

    /*Factories.PlankFactory start.*/
    Bridge.define("Factories.PlankFactory", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _stack: null,
            _pool: null,
            _logTarget: null,
            _plankSpawnPoint: null,
            _pickup: null,
            _spawnDelayAfterPickup: 0,
            _sawSound: null,
            _logs: null,
            _tweenCallback: null,
            _upgraded: false,
            _lastSpawnTime: 0,
            _playId: 0,
            IsProcessing: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Factories.PlankFactory#init", this ); }

                this._spawnDelayAfterPickup = 1.0;
                this._logs = new (System.Collections.Generic.Queue$1(Resource)).ctor();
                this._playId = -1;
            }
        },
        methods: {
            /*Factories.PlankFactory.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Factories.PlankFactory#Awake", this ); }

                this._tweenCallback = Bridge.fn.cacheBind(this, this.OnLogProceeds);
            },
            /*Factories.PlankFactory.Awake end.*/

            /*Factories.PlankFactory.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Factories.PlankFactory#Update", this ); }

                if (!(UnityEngine.Time.time - this._pickup.LastPickupTime < this._spawnDelayAfterPickup) && !(UnityEngine.Time.time - this._lastSpawnTime < 0.07) && this._upgraded && this._stack.HasSpace) {
                    this.SpawnPlank();
                }
            },
            /*Factories.PlankFactory.Update end.*/

            /*Factories.PlankFactory.ProceedLog start.*/
            ProceedLog: function (resource) {
if ( TRACE ) { TRACE( "Factories.PlankFactory#ProceedLog", this ); }

                this.IsProcessing = true;
                if (!Audio.AudioService.Instance.IsPlaying(this._playId)) {
                    Audio.AudioService.Instance.TryPlayEffect(this._sawSound, Bridge.ref(this, "_playId"));
                }
                this._logs.Enqueue(resource);
                var itemTransform = resource.transform;
                var sequence = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.Join(sequence, DG.Tweening.ShortcutExtensions.DOJump(itemTransform, this._logTarget.position.$clone(), 0.5, 1, 0.5));
                DG.Tweening.TweenSettingsExtensions.Join(sequence, DG.Tweening.ShortcutExtensions.DOScale$1(itemTransform, pc.Vec3.ZERO.clone(), 0.5));
                DG.Tweening.TweenSettingsExtensions.AppendCallback(sequence, this._tweenCallback);
            },
            /*Factories.PlankFactory.ProceedLog end.*/

            /*Factories.PlankFactory.Upgrade start.*/
            Upgrade: function () {
if ( TRACE ) { TRACE( "Factories.PlankFactory#Upgrade", this ); }

                this._upgraded = true;
            },
            /*Factories.PlankFactory.Upgrade end.*/

            /*Factories.PlankFactory.OnLogProceeds start.*/
            OnLogProceeds: function () {
if ( TRACE ) { TRACE( "Factories.PlankFactory#OnLogProceeds", this ); }

                this._logs.Dequeue().Release();
                this.SpawnPlank();
                if (this._logs.Count === 0) {
                    this.IsProcessing = false;
                    Audio.AudioService.Instance.TryStopEffect(this._playId);
                }
            },
            /*Factories.PlankFactory.OnLogProceeds end.*/

            /*Factories.PlankFactory.SpawnPlank start.*/
            SpawnPlank: function () {
if ( TRACE ) { TRACE( "Factories.PlankFactory#SpawnPlank", this ); }

                var plank = this._pool.Get();
                Extensions.TransformExtensions.SetPositionAndRotation(plank.transform, this._plankSpawnPoint);
                this._stack.AddItem(plank, 0.5);
                this._lastSpawnTime = UnityEngine.Time.time;
            },
            /*Factories.PlankFactory.SpawnPlank end.*/


        }
    });
    /*Factories.PlankFactory end.*/

    /*FixedWidthCamera start.*/
    Bridge.define("FixedWidthCamera", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _targetWidth: 0,
            _targetHeight: 0,
            _previousResolution: null,
            _camera: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FixedWidthCamera#init", this ); }

                this._previousResolution = new UnityEngine.Vector2Int();
                this._targetWidth = 39.111;
                this._targetHeight = 20.888;
            }
        },
        methods: {
            /*FixedWidthCamera.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FixedWidthCamera#Awake", this ); }

                this._camera = UnityEngine.Camera.main;
                this.UpdateCameraSize(UnityEngine.Screen.width, UnityEngine.Screen.height);
            },
            /*FixedWidthCamera.Awake end.*/

            /*FixedWidthCamera.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FixedWidthCamera#Update", this ); }

                if (this._previousResolution.x !== UnityEngine.Screen.width || this._previousResolution.y !== UnityEngine.Screen.height) {
                    this.UpdateCameraSize(UnityEngine.Screen.width, UnityEngine.Screen.height);
                }
            },
            /*FixedWidthCamera.Update end.*/

            /*FixedWidthCamera.UpdateCameraSize start.*/
            UpdateCameraSize: function (width, height) {
if ( TRACE ) { TRACE( "FixedWidthCamera#UpdateCameraSize", this ); }

                this._previousResolution = new UnityEngine.Vector2Int.$ctor1(width, height);
                if (width > height) {
                    var aspect = width / height;
                    this._camera.orthographicSize = this._targetWidth / (2.0 * aspect);
                } else {
                    this._camera.orthographicSize = this._targetHeight;
                }
            },
            /*FixedWidthCamera.UpdateCameraSize end.*/


        }
    });
    /*FixedWidthCamera end.*/

    /*GameEnd start.*/
    Bridge.define("GameEnd", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _zombieTransition: null,
            _packShot: null,
            _explosionPoint: null,
            _borderToDisable: null,
            _borderToEnable: null,
            _zombieSpawnPoints: null,
            _toDisable: null,
            _failZombiePrefab: null,
            _masonZombie: null,
            _masonBitePoint: null,
            _glen: null,
            _explosionSound: null,
            _failSound: null
        },
        methods: {
            /*GameEnd.Win start.*/
            Win: function () {
if ( TRACE ) { TRACE( "GameEnd#Win", this ); }

                Luna.Unity.LifeCycle.GameEnded();
                for (var i = 0; i < this._toDisable.length; i = (i + 1) | 0) {
                    Extensions.TweenExtensions.DoPopDown$1(this._toDisable[i]);
                }
                this._packShot.Show();
            },
            /*GameEnd.Win end.*/

            /*GameEnd.Fail start.*/
            Fail: function () {
if ( TRACE ) { TRACE( "GameEnd#Fail", this ); }

                Luna.Unity.LifeCycle.GameEnded();
                this._glen.Disable();
                for (var i = 0; i < this._toDisable.length; i = (i + 1) | 0) {
                    Extensions.TweenExtensions.DoPopDown$1(this._toDisable[i]);
                }
                this.StartCoroutine$1(this.FailRoutine());
            },
            /*GameEnd.Fail end.*/

            /*GameEnd.FailRoutine start.*/
            FailRoutine: function () {
if ( TRACE ) { TRACE( "GameEnd#FailRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    waitSpawnDelay,
                    i,
                    position,
                    zombie,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    SpriteVfx.SpriteVfxService.Instance.Spawn(SpriteVfx.SpriteVfxType.Explosion, this._explosionPoint.position.$clone());
                                        Audio.AudioService.Instance.TryPlayEffect$1(this._explosionSound);
                                        Audio.AudioService.Instance.TryPlayEffect$1(this._failSound);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._borderToDisable.SetActive(false);
                                        this._borderToEnable.SetActive(true);
                                        waitSpawnDelay = new UnityEngine.WaitForSeconds(0.3);
                                        i = 0;
                                        $step = 2;
                                        continue;
                                }
                                case 2: {
                                    if ( i < 15 ) {
                                            $step = 3;
                                            continue;
                                        }
                                    $step = 9;
                                    continue;
                                }
                                case 3: {
                                    position = new pc.Vec3().lerp( this._zombieSpawnPoints[0].position, this._zombieSpawnPoints[1].position, UnityEngine.Random.value );
                                        zombie = UnityEngine.Object.Instantiate$2(Characters.FailZombie, this._failZombiePrefab, position, pc.Quat.IDENTITY.clone());
                                        if (i === 0) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    this.StartCoroutine$1(zombie.AnimateMasonBite(this._masonZombie, this._masonBitePoint));
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    $enumerator.current = waitSpawnDelay;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    i = (i + 1) | 0;
                                    $step = 2;
                                    continue;
                                }
                                case 9: {
                                    this._zombieTransition.ShowTransition();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameEnd.FailRoutine end.*/


        }
    });
    /*GameEnd end.*/

    /*GameResources.ResourcePack start.*/
    Bridge.define("GameResources.ResourcePack", {
        fields: {
            Type: 0,
            Amount: 0
        }
    });
    /*GameResources.ResourcePack end.*/

    /*GameResources.ResourceView start.*/
    Bridge.define("GameResources.ResourceView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _storage: null,
            _type: 0,
            _amount: null,
            _useShowHide: false,
            _countChangeDuration: 0,
            _punchScale: 0,
            _punchDuration: 0,
            _punchColor: null,
            _defaultColor: null,
            _previousValue: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameResources.ResourceView#init", this ); }

                this._punchColor = new UnityEngine.Color();
                this._defaultColor = new UnityEngine.Color();
                this._countChangeDuration = 0.5;
                this._punchScale = 0.1;
                this._punchDuration = 0.2;
                this._punchColor = new pc.Color( 1, 1, 1, 1 );
            }
        },
        methods: {
            /*GameResources.ResourceView.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameResources.ResourceView#Awake", this ); }

                this._defaultColor = this._amount.color.$clone();
                this._storage.addResourceChanged(Bridge.fn.cacheBind(this, this.ValueChanged));
                if (this._useShowHide) {
                    this.ShowHideIfNeeded(this._storage.GetResource(this._type));
                }
            },
            /*GameResources.ResourceView.Awake end.*/

            /*GameResources.ResourceView.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameResources.ResourceView#Start", this ); }

                this._previousValue = this._storage.GetResource(this._type);
                this._amount.SetText$3("{0}", this._previousValue);
            },
            /*GameResources.ResourceView.Start end.*/

            /*GameResources.ResourceView.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "GameResources.ResourceView#OnDestroy", this ); }

                this._storage.removeResourceChanged(Bridge.fn.cacheBind(this, this.ValueChanged));
            },
            /*GameResources.ResourceView.OnDestroy end.*/

            /*GameResources.ResourceView.ValueChanged start.*/
            ValueChanged: function (resourceType) {
if ( TRACE ) { TRACE( "GameResources.ResourceView#ValueChanged", this ); }

                if (resourceType === this._type) {
                    DG.Tweening.DOVirtual.Int(this._previousValue, this._storage.GetResource(this._type), this._countChangeDuration, Bridge.fn.bind(this, function (value) {
                        this._amount.SetText$3("{0}", value);
                    }));
                    if (this._storage.GetResource(this._type) > this._previousValue) {
                        DG.Tweening.ShortcutExtensions.DORewind(this._amount.transform$1);
                        var sequence = DG.Tweening.DOTween.Sequence$1(this._amount.transform$1);
                        DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.ShortcutExtensions.DOPunchScale(this._amount.transform$1, new pc.Vec3( 1, 1, 1 ).clone().scale( this._punchScale ), this._punchDuration));
                        DG.Tweening.TweenSettingsExtensions.Join(sequence, DG.Tweening.DOTweenModuleUI.DOColor(this._amount, this._punchColor.$clone(), this._punchDuration * 0.5));
                        DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.DOTweenModuleUI.DOColor(this._amount, this._defaultColor.$clone(), this._punchDuration * 0.5));
                    }
                    if (this._useShowHide) {
                        this.ShowHideIfNeeded(this._storage.GetResource(this._type));
                    }
                    this._previousValue = this._storage.GetResource(this._type);
                }
            },
            /*GameResources.ResourceView.ValueChanged end.*/

            /*GameResources.ResourceView.ShowHideIfNeeded start.*/
            ShowHideIfNeeded: function (newCount) {
if ( TRACE ) { TRACE( "GameResources.ResourceView#ShowHideIfNeeded", this ); }

                if (newCount === 0 && Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.activeSelf) {
                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
                } else if (!Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.activeSelf && newCount > 0) {
                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(true);
                }
            },
            /*GameResources.ResourceView.ShowHideIfNeeded end.*/


        }
    });
    /*GameResources.ResourceView end.*/

    /*GameResources.Storage start.*/
    Bridge.define("GameResources.Storage", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _startResources: null,
            _resources: null
        },
        events: {
            ResourceChanged: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameResources.Storage#init", this ); }

                this._startResources = new (System.Collections.Generic.List$1(GameResources.ResourcePack)).ctor();
                this._resources = new (System.Collections.Generic.Dictionary$2(ResourceType,System.Int32)).ctor();
            }
        },
        methods: {
            /*GameResources.Storage.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameResources.Storage#Awake", this ); }

                for (var i = 0; i < this._startResources.Count; i = (i + 1) | 0) {
                    System.Collections.Generic.CollectionExtensions.TryAdd(ResourceType, System.Int32, this._resources, this._startResources.getItem(i).Type, this._startResources.getItem(i).Amount);
                }
            },
            /*GameResources.Storage.Awake end.*/

            /*GameResources.Storage.AddResource start.*/
            AddResource: function (resourceType, amount) {
if ( TRACE ) { TRACE( "GameResources.Storage#AddResource", this ); }

                if (amount === void 0) { amount = 1; }
                System.Collections.Generic.CollectionExtensions.TryAdd(ResourceType, System.Int32, this._resources, resourceType, 0);
                this._resources.setItem(resourceType, (this._resources.getItem(resourceType) + amount) | 0);
                !Bridge.staticEquals(this.ResourceChanged, null) ? this.ResourceChanged(resourceType) : null;
            },
            /*GameResources.Storage.AddResource end.*/

            /*GameResources.Storage.AddResources$1 start.*/
            AddResources$1: function (resources) {
if ( TRACE ) { TRACE( "GameResources.Storage#AddResources$1", this ); }

                var $t;
                $t = Bridge.getEnumerator(resources);
                try {
                    while ($t.moveNext()) {
                        var resource = $t.Current;
                        var key = { v : new ResourceType() };
                        var value = { };
                        resource.Deconstruct(key, value);
                        var resourceType = { v : key.v };
                        var amount = value.v;
                        System.Collections.Generic.CollectionExtensions.TryAdd(ResourceType, System.Int32, this._resources, resourceType.v, 0);
                        var resources2 = this._resources;
                        key.v = resourceType.v;
                        resources2.setItem(key.v, (resources2.getItem(key.v) + amount) | 0);
                        !Bridge.staticEquals(this.ResourceChanged, null) ? this.ResourceChanged(resourceType.v) : null;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameResources.Storage.AddResources$1 end.*/

            /*GameResources.Storage.AddResources start.*/
            AddResources: function (storage) {
if ( TRACE ) { TRACE( "GameResources.Storage#AddResources", this ); }

                var $t;
                $t = Bridge.getEnumerator(storage._resources);
                try {
                    while ($t.moveNext()) {
                        var resource = $t.Current;
                        var key = { v : new ResourceType() };
                        var value = { };
                        resource.Deconstruct(key, value);
                        var resourceType = { v : key.v };
                        var amount = value.v;
                        System.Collections.Generic.CollectionExtensions.TryAdd(ResourceType, System.Int32, this._resources, resourceType.v, 0);
                        var resources = this._resources;
                        key.v = resourceType.v;
                        resources.setItem(key.v, (resources.getItem(key.v) + amount) | 0);
                        !Bridge.staticEquals(this.ResourceChanged, null) ? this.ResourceChanged(resourceType.v) : null;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameResources.Storage.AddResources end.*/

            /*GameResources.Storage.GetResource start.*/
            GetResource: function (type) {
if ( TRACE ) { TRACE( "GameResources.Storage#GetResource", this ); }

                return System.Collections.Generic.CollectionExtensions.GetValueOrDefault$1(ResourceType, System.Int32, this._resources, type, 0);
            },
            /*GameResources.Storage.GetResource end.*/

            /*GameResources.Storage.SetResource start.*/
            SetResource: function (type, amount) {
if ( TRACE ) { TRACE( "GameResources.Storage#SetResource", this ); }

                this._resources.setItem(type, amount);
                !Bridge.staticEquals(this.ResourceChanged, null) ? this.ResourceChanged(type) : null;
            },
            /*GameResources.Storage.SetResource end.*/

            /*GameResources.Storage.RemoveResource start.*/
            RemoveResource: function (resourceType, amount) {
if ( TRACE ) { TRACE( "GameResources.Storage#RemoveResource", this ); }

                if (amount === void 0) { amount = 1; }
                System.Collections.Generic.CollectionExtensions.TryAdd(ResourceType, System.Int32, this._resources, resourceType, 0);
                this._resources.setItem(resourceType, (this._resources.getItem(resourceType) - amount) | 0);
                !Bridge.staticEquals(this.ResourceChanged, null) ? this.ResourceChanged(resourceType) : null;
            },
            /*GameResources.Storage.RemoveResource end.*/

            /*GameResources.Storage.RemoveResources start.*/
            RemoveResources: function (resourcesToRemove) {
if ( TRACE ) { TRACE( "GameResources.Storage#RemoveResources", this ); }

                var $t;
                $t = Bridge.getEnumerator(resourcesToRemove);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        var key = { v : new ResourceType() };
                        var value = { };
                        item.Deconstruct(key, value);
                        var type = { v : key.v };
                        var amount = value.v;
                        System.Collections.Generic.CollectionExtensions.TryAdd(ResourceType, System.Int32, this._resources, type.v, 0);
                        var resources = this._resources;
                        key.v = type.v;
                        resources.setItem(key.v, (resources.getItem(key.v) - amount) | 0);
                        !Bridge.staticEquals(this.ResourceChanged, null) ? this.ResourceChanged(type.v) : null;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameResources.Storage.RemoveResources end.*/

            /*GameResources.Storage.HasResource start.*/
            HasResource: function (resourceType, minAmount) {
if ( TRACE ) { TRACE( "GameResources.Storage#HasResource", this ); }

                if (minAmount === void 0) { minAmount = 1; }
                return this._resources.containsKey(resourceType) && this._resources.getItem(resourceType) >= minAmount;
            },
            /*GameResources.Storage.HasResource end.*/

            /*GameResources.Storage.HasResources start.*/
            HasResources: function (resources) {
if ( TRACE ) { TRACE( "GameResources.Storage#HasResources", this ); }

                var $t;
                $t = Bridge.getEnumerator(resources);
                try {
                    while ($t.moveNext()) {
                        var resource = $t.Current;
                        var key = { v : new ResourceType() };
                        var value = { };
                        resource.Deconstruct(key, value);
                        var resourceType = key.v;
                        var amount = value.v;
                        if (!this.HasResource(resourceType, amount)) {
                            return false;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return true;
            },
            /*GameResources.Storage.HasResources end.*/

            /*GameResources.Storage.TotalAmount start.*/
            TotalAmount: function () {
if ( TRACE ) { TRACE( "GameResources.Storage#TotalAmount", this ); }

                return System.Linq.Enumerable.from(this._resources, System.Collections.Generic.KeyValuePair$2(ResourceType,System.Int32)).sum(function (x) {
                        return x.value;
                    });
            },
            /*GameResources.Storage.TotalAmount end.*/

            /*GameResources.Storage.Empty start.*/
            Empty: function () {
if ( TRACE ) { TRACE( "GameResources.Storage#Empty", this ); }

                return this._resources.Count === 0 || System.Linq.Enumerable.from(this._resources, System.Collections.Generic.KeyValuePair$2(ResourceType,System.Int32)).all(function (x) {
                        return x.value === 0;
                    });
            },
            /*GameResources.Storage.Empty end.*/

            /*GameResources.Storage.Clear start.*/
            Clear: function () {
if ( TRACE ) { TRACE( "GameResources.Storage#Clear", this ); }

                this._resources.clear();
            },
            /*GameResources.Storage.Clear end.*/


        },
        overloads: {
            "AddResources(Dictionary<ResourceType, int>)": "AddResources$1"
        }
    });
    /*GameResources.Storage end.*/

    /*Hero.HeroMaxStack start.*/
    Bridge.define("Hero.HeroMaxStack", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _stacksToWatch: null,
            _visible: false
        },
        methods: {
            /*Hero.HeroMaxStack.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Hero.HeroMaxStack#Awake", this ); }

                this._visible = false;
                this.transform.localScale = pc.Vec3.ZERO.clone();
            },
            /*Hero.HeroMaxStack.Awake end.*/

            /*Hero.HeroMaxStack.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Hero.HeroMaxStack#Update", this ); }

                if (!this._visible && this.AnyStackIsFull()) {
                    this._visible = true;
                    Extensions.TweenExtensions.DoPopUp$1(this.transform);
                } else if (this._visible && !this.AnyStackIsFull()) {
                    this._visible = false;
                    Extensions.TweenExtensions.DoPopDown$1(this.transform);
                }
            },
            /*Hero.HeroMaxStack.Update end.*/

            /*Hero.HeroMaxStack.AnyStackIsFull start.*/
            AnyStackIsFull: function () {
if ( TRACE ) { TRACE( "Hero.HeroMaxStack#AnyStackIsFull", this ); }

                for (var i = 0; i < this._stacksToWatch.length; i = (i + 1) | 0) {
                    if (!this._stacksToWatch[i].HasSpace) {
                        return true;
                    }
                }
                return false;
            },
            /*Hero.HeroMaxStack.AnyStackIsFull end.*/


        }
    });
    /*Hero.HeroMaxStack end.*/

    /*Hero.HeroMovement start.*/
    Bridge.define("Hero.HeroMovement", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _rigidbody: null,
            _camera: null,
            _joystick: null,
            _movementSpeed: 0,
            _wheelRotationMultiplier: 0,
            _wheels: null,
            _enabled: false,
            _movedLastFrame: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Hero.HeroMovement#init", this ); }

                this._enabled = true;
            }
        },
        methods: {
            /*Hero.HeroMovement.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "Hero.HeroMovement#FixedUpdate", this ); }

                if (!this._enabled) {
                    return;
                }
                var moveDirection = pc.Vec3.projectOnPlane( this._camera.forward, pc.Vec3.UP.clone() ).clone().normalize().$clone().clone().scale( this._joystick.input.y ).add( this._camera.right.$clone().clone().scale( this._joystick.input.x ) );
                var moved = !pc.Vec3.equals( moveDirection, pc.Vec3.ZERO.clone() );
                if (moved) {
                    var targetRotation = new pc.Quat().lookRotation( moveDirection, pc.Vec3.UP.clone() );
                    var rotation = pc.Quat.rotateTowards( this._rigidbody.transform.rotation.$clone(), targetRotation.$clone(), UnityEngine.Time.deltaTime * 720.0 );
                    this._rigidbody.MovePosition(this._rigidbody.position.$clone().add( moveDirection.$clone().clone().scale( (this._movementSpeed * UnityEngine.Time.deltaTime) ) ));
                    this._rigidbody.MoveRotation(rotation);
                    for (var i = 0; i < this._wheels.length; i = (i + 1) | 0) {
                        var wheelRotation = moveDirection.length() * this._movementSpeed * this._wheelRotationMultiplier;
                        this._wheels[i].Rotate(wheelRotation * this._movementSpeed * UnityEngine.Time.deltaTime * this._wheelRotationMultiplier);
                    }
                }
                this._movedLastFrame = moved;
            },
            /*Hero.HeroMovement.FixedUpdate end.*/

            /*Hero.HeroMovement.Disable start.*/
            Disable: function () {
if ( TRACE ) { TRACE( "Hero.HeroMovement#Disable", this ); }

                this._enabled = false;
            },
            /*Hero.HeroMovement.Disable end.*/


        }
    });
    /*Hero.HeroMovement end.*/

    /*Hero.HeroStack start.*/
    Bridge.define("Hero.HeroStack", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _pools: null,
            _type: 0,
            _isPlayerBackpack: false,
            _money: null,
            _stackRoot: null,
            _gridSize: null,
            _offsets: null,
            _hasLimit: false,
            _maxItems: 0,
            _addDuration: 0,
            _itemsRotation: null,
            _addSound: null,
            _removeSound: null,
            _items: null,
            _scaleTweens: null,
            LastTimeAdded: 0
        },
        props: {
            Root: {
                get: function () {
if ( TRACE ) { TRACE( "Hero.HeroStack#Root#get", this ); }

                    return this._stackRoot;
                }
            },
            Type: {
                get: function () {
if ( TRACE ) { TRACE( "Hero.HeroStack#Type#get", this ); }

                    return this._type;
                }
            },
            Amount: {
                get: function () {
if ( TRACE ) { TRACE( "Hero.HeroStack#Amount#get", this ); }

                    return this._items.Count;
                }
            },
            IsEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "Hero.HeroStack#IsEmpty#get", this ); }

                    return this.Amount === 0;
                }
            },
            HasSpace: {
                get: function () {
if ( TRACE ) { TRACE( "Hero.HeroStack#HasSpace#get", this ); }

                    return !this._hasLimit || this.Amount < this._maxItems;
                }
            },
            FreeSpaceAmount: {
                get: function () {
if ( TRACE ) { TRACE( "Hero.HeroStack#FreeSpaceAmount#get", this ); }

                    return ((this._maxItems - this.Amount) | 0);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Hero.HeroStack#init", this ); }

                this._gridSize = new UnityEngine.Vector2Int();
                this._offsets = new UnityEngine.Vector3();
                this._itemsRotation = new UnityEngine.Vector3();
                this._gridSize = UnityEngine.Vector2Int.one.$clone();
                this._offsets = new pc.Vec3( 1, 1, 1 );
                this._maxItems = 9;
                this._addDuration = 0.5;
                this._items = new (System.Collections.Generic.List$1(Resource)).ctor();
                this._scaleTweens = new (System.Collections.Generic.Dictionary$2(Resource,DG.Tweening.Tween)).ctor();
            }
        },
        methods: {
            /*Hero.HeroStack.SpawnItems start.*/
            SpawnItems: function (amount) {
if ( TRACE ) { TRACE( "Hero.HeroStack#SpawnItems", this ); }

                var pool = this._pools.Get(this._type);
                for (var i = 0; i < amount; i = (i + 1) | 0) {
                    var resource = pool.Get();
                    var layerSize = Bridge.Int.mul(this._gridSize.x, this._gridSize.y);
                    var itemsCount = this._items.Count;
                    var y = (Bridge.Int.div(itemsCount, layerSize)) | 0;
                    var remaining = itemsCount % layerSize;
                    var z = (Bridge.Int.div(remaining, this._gridSize.x)) | 0;
                    var x = remaining % this._gridSize.x;
                    var localPos = new pc.Vec3( x * this._offsets.x, y * this._offsets.y, z * this._offsets.z );
                    var itemTransform = resource.transform;
                    itemTransform.SetParent(this._stackRoot);
                    itemTransform.localPosition = localPos.$clone();
                    var scale = itemTransform.localScale.$clone();
                    itemTransform.localScale = pc.Vec3.ZERO.clone();
                    var scaleTweens = this._scaleTweens;
                    var targetScale = scale.$clone();
                    scaleTweens.add(resource, Extensions.TweenExtensions.DoPopUp$1(itemTransform, this._addDuration, 1.1, null, targetScale.$clone()));
                    this.AddItem(resource);
                }
            },
            /*Hero.HeroStack.SpawnItems end.*/

            /*Hero.HeroStack.AddItems start.*/
            AddItems: function (items, ignoreSound) {
if ( TRACE ) { TRACE( "Hero.HeroStack#AddItems", this ); }

                for (var i = 0; i < items.length; i = (i + 1) | 0) {
                    this.AddItem(items[i], 1.0, ignoreSound);
                }
            },
            /*Hero.HeroStack.AddItems end.*/

            /*Hero.HeroStack.AddItem start.*/
            AddItem: function (resource, jumpPower, ignoreSound) {
if ( TRACE ) { TRACE( "Hero.HeroStack#AddItem", this ); }

                if (jumpPower === void 0) { jumpPower = 1.0; }
                if (ignoreSound === void 0) { ignoreSound = false; }
                var layerSize = Bridge.Int.mul(this._gridSize.x, this._gridSize.y);
                var itemsCount = this._items.Count;
                var y = (Bridge.Int.div(itemsCount, layerSize)) | 0;
                var remaining = itemsCount % layerSize;
                var z = (Bridge.Int.div(remaining, this._gridSize.x)) | 0;
                var x = remaining % this._gridSize.x;
                var localPos = new pc.Vec3( x * this._offsets.x, y * this._offsets.y, z * this._offsets.z );
                var itemTransform = resource.transform;
                itemTransform.SetParent(this._stackRoot);
                DG.Tweening.ShortcutExtensions.DOLocalJump(itemTransform, localPos.$clone(), jumpPower, 1, this._addDuration);
                DG.Tweening.ShortcutExtensions.DOLocalRotate(itemTransform, this._itemsRotation.$clone(), this._addDuration);
                this._items.add(resource);
                this.LastTimeAdded = UnityEngine.Time.time;
                if (this._isPlayerBackpack && !ignoreSound) {
                    Audio.AudioService.Instance.TryPlayEffect$1(this._addSound);
                }
                if (this._isPlayerBackpack && this._type === ResourceType.Money) {
                    this._money.AddAmount(4);
                }
            },
            /*Hero.HeroStack.AddItem end.*/

            /*Hero.HeroStack.RemoveItem start.*/
            RemoveItem: function (ignoreSound) {
if ( TRACE ) { TRACE( "Hero.HeroStack#RemoveItem", this ); }

                if (ignoreSound === void 0) { ignoreSound = false; }
                var lastElementIndex = (this._items.Count - 1) | 0;
                var resource = this._items.getItem(lastElementIndex);
                this._items.removeAt(lastElementIndex);
                if (this._scaleTweens.containsKey(resource) && this._scaleTweens.getItem(resource).active) {
                    DG.Tweening.TweenExtensions.Complete(this._scaleTweens.getItem(resource));
                }
                DG.Tweening.ShortcutExtensions.DOKill(resource.transform);
                this._scaleTweens.remove(resource);
                if (this._isPlayerBackpack && !ignoreSound) {
                    Audio.AudioService.Instance.TryPlayEffect$1(this._removeSound);
                }
                return resource;
            },
            /*Hero.HeroStack.RemoveItem end.*/

            /*Hero.HeroStack.Clear start.*/
            Clear: function () {
if ( TRACE ) { TRACE( "Hero.HeroStack#Clear", this ); }

                var itemsCount = this._items.Count;
                for (var i = 0; i < itemsCount; i = (i + 1) | 0) {
                    this.RemoveItem().Release();
                }
            },
            /*Hero.HeroStack.Clear end.*/


        }
    });
    /*Hero.HeroStack end.*/

    /*Hero.HeroStackManager start.*/
    Bridge.define("Hero.HeroStackManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _stacks: null
        },
        methods: {
            /*Hero.HeroStackManager.GetStack start.*/
            GetStack: function (type) {
if ( TRACE ) { TRACE( "Hero.HeroStackManager#GetStack", this ); }

                for (var i = 0; i < this._stacks.length; i = (i + 1) | 0) {
                    if (this._stacks[i].Type === type) {
                        return this._stacks[i];
                    }
                }
                return null;
            },
            /*Hero.HeroStackManager.GetStack end.*/

            /*Hero.HeroStackManager.CanAddItem start.*/
            CanAddItem: function (type) {
if ( TRACE ) { TRACE( "Hero.HeroStackManager#CanAddItem", this ); }

                if (type === ResourceType.Money) {
                    return true;
                }
                for (var i = 0; i < this._stacks.length; i = (i + 1) | 0) {
                    var stack = this._stacks[i];
                    if (stack.Type !== 0 && stack.Type !== type && !stack.IsEmpty) {
                        return false;
                    }
                }
                return this.GetStack(type).HasSpace;
            },
            /*Hero.HeroStackManager.CanAddItem end.*/


        }
    });
    /*Hero.HeroStackManager end.*/

    /*Hero.LookAtCamera start.*/
    Bridge.define("Hero.LookAtCamera", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _camera: null
        },
        methods: {
            /*Hero.LookAtCamera.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Hero.LookAtCamera#Start", this ); }

                this._camera = UnityEngine.Camera.main;
            },
            /*Hero.LookAtCamera.Start end.*/

            /*Hero.LookAtCamera.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "Hero.LookAtCamera#LateUpdate", this ); }

                this.transform.forward = this._camera.transform.forward.$clone();
            },
            /*Hero.LookAtCamera.LateUpdate end.*/


        }
    });
    /*Hero.LookAtCamera end.*/

    /*Inputs.ConveyorSelector start.*/
    Bridge.define("Inputs.ConveyorSelector", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _clickMask: null,
            _sound: null,
            _camera: null,
            _previousSelected: null
        },
        events: {
            Selected: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Inputs.ConveyorSelector#init", this ); }

                this._clickMask = new UnityEngine.LayerMask();
            }
        },
        methods: {
            /*Inputs.ConveyorSelector.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Inputs.ConveyorSelector#Awake", this ); }

                this._camera = UnityEngine.Camera.main;
            },
            /*Inputs.ConveyorSelector.Awake end.*/

            /*Inputs.ConveyorSelector.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Inputs.ConveyorSelector#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    var worldPoint = UnityEngine.Vector2.FromVector3(this._camera.ScreenToWorldPoint(UnityEngine.Input.mousePosition));
                    var hit = UnityEngine.Physics2D.Raycast$2(worldPoint, pc.Vec2.ZERO.clone(), 0.0, UnityEngine.LayerMask.op_Implicit(this._clickMask.$clone()));
                    var conveyor = { };
                    if (UnityEngine.Component.op_Inequality(hit.collider, null) && hit.collider.TryGetComponent$1(Conveyors.InteractiveConveyor, conveyor) && UnityEngine.MonoBehaviour.op_Inequality(this._previousSelected, conveyor.v)) {
                        this._previousSelected = conveyor.v;
                        conveyor.v.OnSelected();
                        Audio.AudioService.Instance.TryPlayEffect$1(this._sound);
                        !Bridge.staticEquals(this.Selected, null) ? this.Selected(conveyor.v) : null;
                    }
                }
            },
            /*Inputs.ConveyorSelector.Update end.*/


        }
    });
    /*Inputs.ConveyorSelector end.*/

    /*Inputs.JoystickAlphaController start.*/
    Bridge.define("Inputs.JoystickAlphaController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _joystick: null,
            _canvasGroup: null,
            _transparencyEnabled: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Inputs.JoystickAlphaController#init", this ); }

                this._transparencyEnabled = true;
            }
        },
        methods: {
            /*Inputs.JoystickAlphaController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Inputs.JoystickAlphaController#Update", this ); }

                if (this._transparencyEnabled && !pc.Vec2.equals( this._joystick.input, pc.Vec2.ZERO.clone() )) {
                    this._transparencyEnabled = false;
                    DG.Tweening.DOTweenModuleUI.DOFade(this._canvasGroup, 1.0, 0.25);
                } else if (!this._transparencyEnabled && pc.Vec2.equals( this._joystick.input, pc.Vec2.ZERO.clone() )) {
                    this._transparencyEnabled = true;
                    DG.Tweening.DOTweenModuleUI.DOFade(this._canvasGroup, 0.25, 0.25);
                }
            },
            /*Inputs.JoystickAlphaController.Update end.*/


        }
    });
    /*Inputs.JoystickAlphaController end.*/

    /*ItemAutoConstruct start.*/
    Bridge.define("ItemAutoConstruct", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _pools: null,
            _resource: null
        },
        methods: {
            /*ItemAutoConstruct.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ItemAutoConstruct#Awake", this ); }

                this._resource.Construct(this._pools.Get(this._resource.Type));
            },
            /*ItemAutoConstruct.Awake end.*/


        }
    });
    /*ItemAutoConstruct end.*/

    /*JoystickType start.*/
    Bridge.define("JoystickType", {
        $kind: 6,
        statics: {
            fields: {
                Fixed: 0,
                Floating: 1,
                Dynamic: 2
            }
        }
    });
    /*JoystickType end.*/

    /*MainCamera start.*/
    Bridge.define("MainCamera", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _defaultTarget: null,
            _flyTime: 0,
            _flyCurve: null,
            _target: null,
            _offset: null,
            _showRoutine: null,
            _isTransitioning: false,
            _transitionTime: 0,
            _transitionStartPosition: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MainCamera#init", this ); }

                this._offset = new UnityEngine.Vector3();
                this._transitionStartPosition = new UnityEngine.Vector3();
                this._flyTime = 1.0;
            }
        },
        methods: {
            /*MainCamera.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MainCamera#Awake", this ); }

                this._target = this._defaultTarget;
                this._offset = this.transform.position.$clone().sub( this._defaultTarget.position );
            },
            /*MainCamera.Awake end.*/

            /*MainCamera.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "MainCamera#LateUpdate", this ); }

                var targetPosition = this._target.position.$clone().add( this._offset );
                if (this._isTransitioning) {
                    this._transitionTime += UnityEngine.Time.deltaTime;
                    this.transform.position = new pc.Vec3().lerp( this._transitionStartPosition, targetPosition, this._flyCurve.value(this._transitionTime / this._flyTime) );
                    if (Extensions.FloatExtensions.ApproximatelyEqual(this._transitionTime, 1.0)) {
                        this._isTransitioning = false;
                    }
                } else {
                    this.transform.position = targetPosition.$clone();
                }
            },
            /*MainCamera.LateUpdate end.*/

            /*MainCamera.Show start.*/
            Show: function (target, time) {
if ( TRACE ) { TRACE( "MainCamera#Show", this ); }

                if (this._showRoutine != null) {
                    this.StopCoroutine$2(this._showRoutine);
                }
                this._showRoutine = this.StartCoroutine$1(this.ShowRoutine(target, time));
            },
            /*MainCamera.Show end.*/

            /*MainCamera.ShowRoutine start.*/
            ShowRoutine: function (target, time) {
if ( TRACE ) { TRACE( "MainCamera#ShowRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._target = target;
                                        this._isTransitioning = true;
                                        this._transitionTime = 0.0;
                                        this._transitionStartPosition = this.transform.position.$clone();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(time);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._target = this._defaultTarget;
                                        this._isTransitioning = true;
                                        this._transitionTime = 0.0;
                                        this._transitionStartPosition = this.transform.position.$clone();
                                        this._showRoutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*MainCamera.ShowRoutine end.*/


        }
    });
    /*MainCamera end.*/

    /*Money start.*/
    Bridge.define("Money", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _text: null,
            _visualAmount: 0,
            _amount: 0
        },
        methods: {
            /*Money.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Money#Awake", this ); }

                this._amount = 0;
                this._visualAmount = 0;
                this.UpdateText(this._visualAmount);
            },
            /*Money.Awake end.*/

            /*Money.AddAmount start.*/
            AddAmount: function (addition) {
if ( TRACE ) { TRACE( "Money#AddAmount", this ); }

                var newAmount = ((this._amount = (this._amount + addition) | 0));
                DG.Tweening.DOVirtual.Int(this._visualAmount, newAmount, 1.0, Bridge.fn.cacheBind(this, this.UpdateText));
            },
            /*Money.AddAmount end.*/

            /*Money.Withdraw start.*/
            Withdraw: function (amount, duration) {
if ( TRACE ) { TRACE( "Money#Withdraw", this ); }

                if (duration === void 0) { duration = 1.0; }
                var newAmount = ((this._amount = (this._amount - amount) | 0));
                DG.Tweening.DOVirtual.Int(this._visualAmount, newAmount, duration, Bridge.fn.cacheBind(this, this.UpdateText));
            },
            /*Money.Withdraw end.*/

            /*Money.UpdateText start.*/
            UpdateText: function (value) {
if ( TRACE ) { TRACE( "Money#UpdateText", this ); }

                this._visualAmount = value;
                this._text.SetText$3("{0}", value);
            },
            /*Money.UpdateText end.*/


        }
    });
    /*Money end.*/

    /*Progression.GameTrigger start.*/
    Bridge.define("Progression.GameTrigger", {
        inherits: [UnityEngine.MonoBehaviour],
        events: {
            Triggered: null
        },
        methods: {
            /*Progression.GameTrigger.InvokeTriggered start.*/
            InvokeTriggered: function () {
if ( TRACE ) { TRACE( "Progression.GameTrigger#InvokeTriggered", this ); }

                !Bridge.staticEquals(this.Triggered, null) ? this.Triggered() : null;
            },
            /*Progression.GameTrigger.InvokeTriggered end.*/


        }
    });
    /*Progression.GameTrigger end.*/

    /*PackShots.PackShot start.*/
    Bridge.define("PackShots.PackShot", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _background: null,
            _title: null,
            _playButton: null
        },
        methods: {
            /*PackShots.PackShot.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "PackShots.PackShot#Show", this ); }

                this._playButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnButtonClick));
                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(true);
                DG.Tweening.DOTweenModuleUI.DOFade(this._background, 1.0, 1.0);
                this._background.blocksRaycasts = true;
                this._background.interactable = true;
                var startPos = this._title.transform.position.$clone();
                DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.DOTween.Sequence(), DG.Tweening.ShortcutExtensions.DOMove(this._title.transform, startPos.$clone().add( pc.Vec3.DOWN.clone().clone().scale( 3.0 ) ), 5.0)), DG.Tweening.ShortcutExtensions.DOMove(this._title.transform, startPos.$clone(), 5.0)), DG.Tweening.Ease.InOutSine), -1, DG.Tweening.LoopType.Yoyo);
                DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this._playButton.transform, 1.1, 0.5), DG.Tweening.Ease.InOutSine), -1, DG.Tweening.LoopType.Yoyo);
            },
            /*PackShots.PackShot.Show end.*/

            /*PackShots.PackShot.OnButtonClick start.*/
            OnButtonClick: function () {
if ( TRACE ) { TRACE( "PackShots.PackShot#OnButtonClick", this ); }

                this._playButton.onClick.RemoveListener(Bridge.fn.cacheBind(this, this.OnButtonClick));
                Luna.Unity.Playable.InstallFullGame();
            },
            /*PackShots.PackShot.OnButtonClick end.*/


        }
    });
    /*PackShots.PackShot end.*/

    /*PackShots.PackShotChooser start.*/
    Bridge.define("PackShots.PackShotChooser", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _horizontalPackShot: null,
            _verticalPackShot: null
        },
        methods: {
            /*PackShots.PackShotChooser.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "PackShots.PackShotChooser#Show", this ); }

                if (UnityEngine.Screen.width > UnityEngine.Screen.height) {
                    this._horizontalPackShot.Show();
                } else {
                    this._verticalPackShot.Show();
                }
            },
            /*PackShots.PackShotChooser.Show end.*/


        }
    });
    /*PackShots.PackShotChooser end.*/

    /*PointsPlacer start.*/
    Bridge.define("PointsPlacer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _parent: null,
            _offset: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PointsPlacer#init", this ); }

                this._offset = new UnityEngine.Vector3();
                this._offset = new pc.Vec3( 1, 1, 1 );
            }
        }
    });
    /*PointsPlacer end.*/

    /*Pools.IPool$1 start.*/
    Bridge.definei("Pools.IPool$1", function (T) { return {
        $kind: 3,
        $variance: [2]
    }; });
    /*Pools.IPool$1 end.*/

    /*Pools.ResourcesPools start.*/
    Bridge.define("Pools.ResourcesPools", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _pools: null
        },
        methods: {
            /*Pools.ResourcesPools.Get start.*/
            Get: function (type) {
if ( TRACE ) { TRACE( "Pools.ResourcesPools#Get", this ); }

                for (var i = 0; i < this._pools.length; i = (i + 1) | 0) {
                    var resourcePool = this._pools[i];
                    if (resourcePool.Type === type) {
                        return resourcePool;
                    }
                }
                return null;
            },
            /*Pools.ResourcesPools.Get end.*/

            /*Pools.ResourcesPools.GetResource start.*/
            GetResource: function (T, type) {
if ( TRACE ) { TRACE( "Pools.ResourcesPools#GetResource", this ); }

                for (var i = 0; i < this._pools.length; i = (i + 1) | 0) {
                    var resourcePool = this._pools[i];
                    if (resourcePool.Type === type) {
                        return Bridge.cast(resourcePool.Get(), T);
                    }
                }
                return null;
            },
            /*Pools.ResourcesPools.GetResource end.*/


        }
    });
    /*Pools.ResourcesPools end.*/

    /*Progression.GateUnlock start.*/
    Bridge.define("Progression.GateUnlock", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _trigger: null,
            _gate: null,
            _plus: null
        },
        methods: {
            /*Progression.GateUnlock.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Progression.GateUnlock#Awake", this ); }

                this._trigger.addTriggered(Bridge.fn.cacheBind(this, this.OpenGate));
            },
            /*Progression.GateUnlock.Awake end.*/

            /*Progression.GateUnlock.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Progression.GateUnlock#OnDestroy", this ); }

                this._trigger.removeTriggered(Bridge.fn.cacheBind(this, this.OpenGate));
            },
            /*Progression.GateUnlock.OnDestroy end.*/

            /*Progression.GateUnlock.OpenGate start.*/
            OpenGate: function () {
if ( TRACE ) { TRACE( "Progression.GateUnlock#OpenGate", this ); }

                Extensions.TweenExtensions.DoPopDown$1(this._plus);
                DG.Tweening.ShortcutExtensions.DOScaleY(this._gate, 0.0, 0.3);
            },
            /*Progression.GateUnlock.OpenGate end.*/


        }
    });
    /*Progression.GateUnlock end.*/

    /*QuestSystem.Quest start.*/
    Bridge.define("QuestSystem.Quest", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            TopQuestArrow: null,
            _target: null,
            _showCameraDuration: 0,
            _useTopArrow: false,
            _useHeroArrow: false,
            _useCamera: false,
            _heroQuestArrow: null,
            _mainCamera: null
        },
        events: {
            Completed: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "QuestSystem.Quest#init", this ); }

                this._showCameraDuration = 1.5;
                this._useTopArrow = true;
                this._useHeroArrow = true;
                this._useCamera = true;
            }
        },
        methods: {
            /*QuestSystem.Quest.Construct start.*/
            Construct: function (heroQuestArrow, mainCamera) {
if ( TRACE ) { TRACE( "QuestSystem.Quest#Construct", this ); }

                this._heroQuestArrow = heroQuestArrow;
                this._mainCamera = mainCamera;
            },
            /*QuestSystem.Quest.Construct end.*/

            /*QuestSystem.Quest.Begin start.*/
            Begin: function () {
if ( TRACE ) { TRACE( "QuestSystem.Quest#Begin", this ); }

                if (this._useHeroArrow) {
                    this._heroQuestArrow.SetTarget(this._target);
                }
                if (this._useCamera) {
                    this._mainCamera.Show(this._target, this._showCameraDuration);
                }
                if (this._useTopArrow) {
                    this.TopQuestArrow.Show();
                }
            },
            /*QuestSystem.Quest.Begin end.*/

            /*QuestSystem.Quest.InvokeCompleted start.*/
            InvokeCompleted: function () {
if ( TRACE ) { TRACE( "QuestSystem.Quest#InvokeCompleted", this ); }

                if (this._useHeroArrow) {
                    this._heroQuestArrow.SetTarget(null);
                }
                if (this._useTopArrow) {
                    this.TopQuestArrow.Hide();
                }
                !Bridge.staticEquals(this.Completed, null) ? this.Completed() : null;
            },
            /*QuestSystem.Quest.InvokeCompleted end.*/

            /*QuestSystem.Quest.ShowHeroQuestArrowFor start.*/
            ShowHeroQuestArrowFor: function (customTarget) {
if ( TRACE ) { TRACE( "QuestSystem.Quest#ShowHeroQuestArrowFor", this ); }

                this._heroQuestArrow.SetTarget(customTarget);
            },
            /*QuestSystem.Quest.ShowHeroQuestArrowFor end.*/


        }
    });
    /*QuestSystem.Quest end.*/

    /*QuestSystem.HeroQuestArrow start.*/
    Bridge.define("QuestSystem.HeroQuestArrow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _player: null,
            _hideDistance: 0,
            _radius: 0,
            _target: null,
            _hasTarget: false,
            _visible: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "QuestSystem.HeroQuestArrow#init", this ); }

                this._hideDistance = 3.0;
                this._radius = 2.0;
            }
        },
        methods: {
            /*QuestSystem.HeroQuestArrow.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "QuestSystem.HeroQuestArrow#Update", this ); }

                if (!this._hasTarget) {
                    return;
                }
                var toTarget = Extensions.VectorExtensions.SetY(this._target.position, 0.0).sub( Extensions.VectorExtensions.SetY(this._player.position, 0.0) );
                toTarget.y = 0.0;
                var closeEnoughToHide = toTarget.lengthSq() < this._hideDistance;
                if (this._visible && closeEnoughToHide) {
                    this._visible = false;
                    Extensions.TweenExtensions.DoPopDown$1(this.transform);
                    return;
                }
                if (!this._visible && !closeEnoughToHide) {
                    this._visible = true;
                    Extensions.TweenExtensions.DoPopUp$1(this.transform);
                }
                var direction = toTarget.clone().normalize().$clone();
                this.transform.position = this._player.position.$clone().add( direction.$clone().clone().scale( this._radius ) );
                this.transform.rotation = new pc.Quat().lookRotation( direction, pc.Vec3.UP );
            },
            /*QuestSystem.HeroQuestArrow.Update end.*/

            /*QuestSystem.HeroQuestArrow.SetTarget start.*/
            SetTarget: function (target) {
if ( TRACE ) { TRACE( "QuestSystem.HeroQuestArrow#SetTarget", this ); }

                this._target = target;
                this._hasTarget = UnityEngine.Component.op_Inequality(target, null);
                if (this._visible && !this._hasTarget) {
                    this._visible = false;
                    Extensions.TweenExtensions.DoPopDown$1(this.transform);
                }
            },
            /*QuestSystem.HeroQuestArrow.SetTarget end.*/


        }
    });
    /*QuestSystem.HeroQuestArrow end.*/

    /*QuestSystem.QuestController start.*/
    Bridge.define("QuestSystem.QuestController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _mainCamera: null,
            _heroQuestArrow: null,
            _quests: null,
            _activeQuestIndex: 0
        },
        props: {
            ActiveQuest: {
                get: function () {
if ( TRACE ) { TRACE( "QuestSystem.QuestController#ActiveQuest#get", this ); }

                    return this._quests[this._activeQuestIndex];
                }
            }
        },
        methods: {
            /*QuestSystem.QuestController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "QuestSystem.QuestController#Start", this ); }

                for (var i = 0; i < this._quests.length; i = (i + 1) | 0) {
                    this._quests[i].Construct(this._heroQuestArrow, this._mainCamera);
                }
                this._activeQuestIndex = 0;
                this.BeginActiveQuest();
            },
            /*QuestSystem.QuestController.Start end.*/

            /*QuestSystem.QuestController.OnQuestCompleted start.*/
            OnQuestCompleted: function () {
if ( TRACE ) { TRACE( "QuestSystem.QuestController#OnQuestCompleted", this ); }

                this.ActiveQuest.removeCompleted(Bridge.fn.cacheBind(this, this.OnQuestCompleted));
                if (((this._activeQuestIndex + 1) | 0) < this._quests.length) {
                    this._activeQuestIndex = (this._activeQuestIndex + 1) | 0;
                    this.BeginActiveQuest();
                }
            },
            /*QuestSystem.QuestController.OnQuestCompleted end.*/

            /*QuestSystem.QuestController.BeginActiveQuest start.*/
            BeginActiveQuest: function () {
if ( TRACE ) { TRACE( "QuestSystem.QuestController#BeginActiveQuest", this ); }

                this.ActiveQuest.addCompleted(Bridge.fn.cacheBind(this, this.OnQuestCompleted));
                this.ActiveQuest.Begin();
            },
            /*QuestSystem.QuestController.BeginActiveQuest end.*/


        }
    });
    /*QuestSystem.QuestController end.*/

    /*QuestSystem.TopQuestArrow start.*/
    Bridge.define("QuestSystem.TopQuestArrow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _arrow: null,
            _moveDistance: 0,
            _moveDuration: 0,
            _moveEase: 0,
            _rotate: null,
            _rotateDuration: 0,
            _rotateEase: 0,
            _moveTween: null,
            _rotateTween: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "QuestSystem.TopQuestArrow#init", this ); }

                this._rotate = new UnityEngine.Vector3();
                this._moveDistance = 0.5;
                this._moveDuration = 1.0;
                this._moveEase = DG.Tweening.Ease.InOutSine;
                this._rotate = new pc.Vec3( 0.0, -360.0, 0.0 );
                this._rotateDuration = 2.0;
                this._rotateEase = DG.Tweening.Ease.Linear;
            }
        },
        methods: {
            /*QuestSystem.TopQuestArrow.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "QuestSystem.TopQuestArrow#Awake", this ); }

                var startPos = this._arrow.localPosition.$clone();
                var endPos = startPos.$clone().sub( pc.Vec3.UP.clone().clone().scale( this._moveDistance ) );
                this._moveTween = DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(this._arrow, endPos.$clone(), this._moveDuration), this._moveEase), -1, DG.Tweening.LoopType.Yoyo);
                this._rotateTween = DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.ShortcutExtensions.DOLocalRotate(this._arrow, this._rotate.$clone(), this._rotateDuration, DG.Tweening.RotateMode.LocalAxisAdd), this._rotateEase), -1, DG.Tweening.LoopType.Incremental);
                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
                this.transform.localScale = pc.Vec3.ZERO.clone();
            },
            /*QuestSystem.TopQuestArrow.Awake end.*/

            /*QuestSystem.TopQuestArrow.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "QuestSystem.TopQuestArrow#OnDestroy", this ); }

                this._moveTween != null ? DG.Tweening.TweenExtensions.Kill(this._moveTween) : null;
                this._rotateTween != null ? DG.Tweening.TweenExtensions.Kill(this._rotateTween) : null;
            },
            /*QuestSystem.TopQuestArrow.OnDestroy end.*/

            /*QuestSystem.TopQuestArrow.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "QuestSystem.TopQuestArrow#Show", this ); }

                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(true);
                DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, new pc.Vec3( 1, 1, 1 ), 0.5);
            },
            /*QuestSystem.TopQuestArrow.Show end.*/

            /*QuestSystem.TopQuestArrow.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "QuestSystem.TopQuestArrow#Hide", this ); }

                DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, pc.Vec3.ZERO.clone(), 0.5), function () {
                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
                });
            },
            /*QuestSystem.TopQuestArrow.Hide end.*/


        }
    });
    /*QuestSystem.TopQuestArrow end.*/

    /*ResourceType start.*/
    Bridge.define("ResourceType", {
        $kind: 6,
        statics: {
            fields: {
                Money: 0,
                MasonBullet: 1,
                WarehouseBullet: 2
            }
        }
    });
    /*ResourceType end.*/

    /*Scenario start.*/
    Bridge.define("Scenario", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _conveyorSelector: null,
            _gameEnd: null,
            _storage: null,
            _bulletsPool: null,
            _zombieManager: null,
            _unlockPoint: null,
            _closedConveyor: null,
            _conveyors: null,
            _conveyorSelectedOnce: false,
            _stepIndex: 0,
            _timer: 0,
            _finished: false,
            _lastSelectTime: 0,
            _bulletsReceivedInOpenedConveyors: 0
        },
        methods: {
            /*Scenario.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Scenario#Awake", this ); }

                this._conveyorSelector.addSelected(Bridge.fn.cacheBind(this, this.OnConveyorSelected));
                for (var i = 0; i < this._conveyors.length; i = (i + 1) | 0) {
                    this._conveyors[i].addBulletReceived(Bridge.fn.cacheBind(this, this.OnBulletReceived));
                }
            },
            /*Scenario.Awake end.*/

            /*Scenario.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Scenario#OnDestroy", this ); }

                this._conveyorSelector.removeSelected(Bridge.fn.cacheBind(this, this.OnConveyorSelected));
                for (var i = 0; i < this._conveyors.length; i = (i + 1) | 0) {
                    this._conveyors[i].removeBulletReceived(Bridge.fn.cacheBind(this, this.OnBulletReceived));
                }
            },
            /*Scenario.OnDestroy end.*/

            /*Scenario.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Scenario#Update", this ); }

                if (!this._finished) {
                    switch (this._stepIndex) {
                        case 0: 
                            this.HandleConveyorClickStep();
                            break;
                        case 1: 
                            this.HandleBottomConveyorStep();
                            break;
                    }
                }
            },
            /*Scenario.Update end.*/

            /*Scenario.Fail start.*/
            Fail: function () {
if ( TRACE ) { TRACE( "Scenario#Fail", this ); }

                this._finished = true;
                this._gameEnd.Fail();
            },
            /*Scenario.Fail end.*/

            /*Scenario.HandleConveyorClickStep start.*/
            HandleConveyorClickStep: function () {
if ( TRACE ) { TRACE( "Scenario#HandleConveyorClickStep", this ); }

                if (this._conveyorSelectedOnce) {
                    this._stepIndex = (this._stepIndex + 1) | 0;
                    return;
                }
                this._timer += UnityEngine.Time.deltaTime;
                if (this._timer >= 15.0) {
                    this.Fail();
                }
            },
            /*Scenario.HandleConveyorClickStep end.*/

            /*Scenario.HandleBottomConveyorStep start.*/
            HandleBottomConveyorStep: function () {
if ( TRACE ) { TRACE( "Scenario#HandleBottomConveyorStep", this ); }

                if (this._unlockPoint.ProcessedAtLeastOneBullet) {
                    this._finished = true;
                } else if (this._bulletsReceivedInOpenedConveyors >= 8) {
                    this.Fail();
                } else if (!this._storage.HasResource(ResourceType.MasonBullet) && !this._storage.HasResource(ResourceType.WarehouseBullet) && this._bulletsPool.CountActive === 0 && this._zombieManager.Alive.Count > 0) {
                    this.Fail();
                }
            },
            /*Scenario.HandleBottomConveyorStep end.*/

            /*Scenario.OnBulletReceived start.*/
            OnBulletReceived: function (conveyor) {
if ( TRACE ) { TRACE( "Scenario#OnBulletReceived", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(conveyor, this._closedConveyor)) {
                    this._bulletsReceivedInOpenedConveyors = 0;
                } else {
                    this._bulletsReceivedInOpenedConveyors = (this._bulletsReceivedInOpenedConveyors + 1) | 0;
                }
            },
            /*Scenario.OnBulletReceived end.*/

            /*Scenario.OnConveyorSelected start.*/
            OnConveyorSelected: function (_) {
if ( TRACE ) { TRACE( "Scenario#OnConveyorSelected", this ); }

                this._conveyorSelectedOnce = true;
                this._lastSelectTime = UnityEngine.Time.time;
            },
            /*Scenario.OnConveyorSelected end.*/


        }
    });
    /*Scenario end.*/

    /*Scroller.Scroller start.*/
    Bridge.define("Scroller.Scroller", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _renderer: null,
            _useSharedMaterial: false,
            _speedX: 0,
            _speedY: 0,
            _targetMaterial: null,
            _offset: null,
            _initOffset: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Scroller.Scroller#init", this ); }

                this._offset = new UnityEngine.Vector2();
                this._initOffset = new UnityEngine.Vector2();
            }
        },
        methods: {
            /*Scroller.Scroller.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Scroller.Scroller#Awake", this ); }

                this._targetMaterial = (this._useSharedMaterial ? this._renderer.sharedMaterial : this._renderer.material);
                this._offset = this._targetMaterial.mainTextureOffset.$clone();
                this._initOffset = this._targetMaterial.mainTextureOffset.$clone();
            },
            /*Scroller.Scroller.Awake end.*/

            /*Scroller.Scroller.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Scroller.Scroller#OnDisable", this ); }

                this.Scroll(this._targetMaterial, this._initOffset.$clone());
            },
            /*Scroller.Scroller.OnDisable end.*/

            /*Scroller.Scroller.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Scroller.Scroller#Update", this ); }

                this._offset.x += this._speedX * UnityEngine.Time.deltaTime;
                this._offset.y += this._speedY * UnityEngine.Time.deltaTime;
                this.Scroll(this._targetMaterial, this._offset.$clone());
            },
            /*Scroller.Scroller.Update end.*/


        }
    });
    /*Scroller.Scroller end.*/

    /*ShaderFillBar start.*/
    Bridge.define("ShaderFillBar", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                FillAmount: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "ShaderFillBar#init", this ); }

                    this.FillAmount = UnityEngine.Shader.PropertyToID("_FillAmount");
                }
            }
        },
        fields: {
            _from: 0,
            _to: 0,
            _renderer: null,
            _material: null
        },
        methods: {
            /*ShaderFillBar.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "ShaderFillBar#Init", this ); }

                this._material = this._renderer.material;
            },
            /*ShaderFillBar.Init end.*/

            /*ShaderFillBar.SetProgress start.*/
            SetProgress: function (value) {
if ( TRACE ) { TRACE( "ShaderFillBar#SetProgress", this ); }

                var normalizedFill = Extensions.FloatExtensions.Remap(value, 0.0, 1.0, this._from, this._to);
                this._material.SetFloat(ShaderFillBar.FillAmount, normalizedFill);
            },
            /*ShaderFillBar.SetProgress end.*/


        }
    });
    /*ShaderFillBar end.*/

    /*SpriteFlash start.*/
    Bridge.define("SpriteFlash", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _spriteRenderer: null,
            _duration: 0,
            _alwaysOnAfterClick: false,
            _selector: null,
            _coroutine: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SpriteFlash#init", this ); }

                this._duration = 3.0;
            }
        },
        methods: {
            /*SpriteFlash.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SpriteFlash#Awake", this ); }

                this._coroutine = this.StartCoroutine$1(this.DisableAfterTime());
                DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.DOTween.Sequence$1(this._spriteRenderer), DG.Tweening.DOTweenModuleSprite.DOFade(this._spriteRenderer, 1.0, 0.4)), DG.Tweening.DOTweenModuleSprite.DOFade(this._spriteRenderer, 0.0, 0.4)), DG.Tweening.Ease.InOutSine), -1);
                if (this._alwaysOnAfterClick) {
                    this._selector.addSelected(Bridge.fn.cacheBind(this, this.OnConveyorSelected));
                }
            },
            /*SpriteFlash.Awake end.*/

            /*SpriteFlash.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "SpriteFlash#OnDestroy", this ); }

                if (this._alwaysOnAfterClick) {
                    this._selector.removeSelected(Bridge.fn.cacheBind(this, this.OnConveyorSelected));
                }
            },
            /*SpriteFlash.OnDestroy end.*/

            /*SpriteFlash.DisableAfterTime start.*/
            DisableAfterTime: function () {
if ( TRACE ) { TRACE( "SpriteFlash#DisableAfterTime", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this._duration);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
                                        this._coroutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SpriteFlash.DisableAfterTime end.*/

            /*SpriteFlash.OnConveyorSelected start.*/
            OnConveyorSelected: function (_) {
if ( TRACE ) { TRACE( "SpriteFlash#OnConveyorSelected", this ); }

                if (this._coroutine != null) {
                    this.StopCoroutine$2(this._coroutine);
                } else {
                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(true);
                }
                DG.Tweening.ShortcutExtensions.DOKill(this._spriteRenderer);
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.DOTween.Sequence$1(this._spriteRenderer), DG.Tweening.DOTweenModuleSprite.DOFade(this._spriteRenderer, 1.0, 0.4)), DG.Tweening.Ease.InOutSine);
            },
            /*SpriteFlash.OnConveyorSelected end.*/


        }
    });
    /*SpriteFlash end.*/

    /*SpriteVfx.SpriteVfx start.*/
    Bridge.define("SpriteVfx.SpriteVfx", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _clip: null,
            _waitForPlay: null,
            _pool: null
        },
        methods: {
            /*SpriteVfx.SpriteVfx.Construct start.*/
            Construct: function (pool) {
if ( TRACE ) { TRACE( "SpriteVfx.SpriteVfx#Construct", this ); }

                this._pool = pool;
                this._waitForPlay = new UnityEngine.WaitForSeconds(this._clip.length);
            },
            /*SpriteVfx.SpriteVfx.Construct end.*/

            /*SpriteVfx.SpriteVfx.Play start.*/
            Play: function () {
if ( TRACE ) { TRACE( "SpriteVfx.SpriteVfx#Play", this ); }

                this.StartCoroutine$1(this.DisableAfterPlay());
            },
            /*SpriteVfx.SpriteVfx.Play end.*/

            /*SpriteVfx.SpriteVfx.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SpriteVfx.SpriteVfx#OnDisable", this ); }

                this._pool.Release(this);
            },
            /*SpriteVfx.SpriteVfx.OnDisable end.*/

            /*SpriteVfx.SpriteVfx.DisableAfterPlay start.*/
            DisableAfterPlay: function () {
if ( TRACE ) { TRACE( "SpriteVfx.SpriteVfx#DisableAfterPlay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this._waitForPlay;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SpriteVfx.SpriteVfx.DisableAfterPlay end.*/


        }
    });
    /*SpriteVfx.SpriteVfx end.*/

    /*SpriteVfx.SpriteVfxPool start.*/
    Bridge.define("SpriteVfx.SpriteVfxPool", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*SpriteVfx.SpriteVfxPool.ActionOnGet:static start.*/
                ActionOnGet: function (effect) {
if ( TRACE ) { TRACE( "SpriteVfx.SpriteVfxPool#ActionOnGet", this ); }

                    effect.gameObject.SetActive(true);
                },
                /*SpriteVfx.SpriteVfxPool.ActionOnGet:static end.*/


            }
        },
        fields: {
            _type: 0,
            _prefab: null,
            _effectsPool: null
        },
        props: {
            Type: {
                get: function () {
if ( TRACE ) { TRACE( "SpriteVfx.SpriteVfxPool#Type#get", this ); }

                    return this._type;
                }
            }
        },
        methods: {
            /*SpriteVfx.SpriteVfxPool.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SpriteVfx.SpriteVfxPool#Awake", this ); }

                this._effectsPool = new (Pools.ObjectPool$1(SpriteVfx.SpriteVfx))(Bridge.fn.cacheBind(this, this.CreateVfx), SpriteVfx.SpriteVfxPool.ActionOnGet);
            },
            /*SpriteVfx.SpriteVfxPool.Awake end.*/

            /*SpriteVfx.SpriteVfxPool.Spawn start.*/
            Spawn: function (position) {
if ( TRACE ) { TRACE( "SpriteVfx.SpriteVfxPool#Spawn", this ); }

                var effect = this._effectsPool.Get();
                effect.transform.SetPositionAndRotation(position, pc.Quat.IDENTITY.clone());
                effect.Play();
            },
            /*SpriteVfx.SpriteVfxPool.Spawn end.*/

            /*SpriteVfx.SpriteVfxPool.Release start.*/
            Release: function (spriteVfx) {
if ( TRACE ) { TRACE( "SpriteVfx.SpriteVfxPool#Release", this ); }

                this._effectsPool.Release(spriteVfx);
            },
            /*SpriteVfx.SpriteVfxPool.Release end.*/

            /*SpriteVfx.SpriteVfxPool.CreateVfx start.*/
            CreateVfx: function () {
if ( TRACE ) { TRACE( "SpriteVfx.SpriteVfxPool#CreateVfx", this ); }

                var effect = UnityEngine.Object.Instantiate(SpriteVfx.SpriteVfx, this._prefab, this.transform);
                effect.Construct(this);
                return effect;
            },
            /*SpriteVfx.SpriteVfxPool.CreateVfx end.*/


        }
    });
    /*SpriteVfx.SpriteVfxPool end.*/

    /*SpriteVfx.SpriteVfxService start.*/
    Bridge.define("SpriteVfx.SpriteVfxService", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            _pools: null
        },
        methods: {
            /*SpriteVfx.SpriteVfxService.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SpriteVfx.SpriteVfxService#Awake", this ); }

                SpriteVfx.SpriteVfxService.Instance = this;
            },
            /*SpriteVfx.SpriteVfxService.Awake end.*/

            /*SpriteVfx.SpriteVfxService.Spawn start.*/
            Spawn: function (type, position) {
if ( TRACE ) { TRACE( "SpriteVfx.SpriteVfxService#Spawn", this ); }

                var pool = this.GetPool(type);
                pool.Spawn(position.$clone());
            },
            /*SpriteVfx.SpriteVfxService.Spawn end.*/

            /*SpriteVfx.SpriteVfxService.GetPool start.*/
            GetPool: function (type) {
if ( TRACE ) { TRACE( "SpriteVfx.SpriteVfxService#GetPool", this ); }

                for (var i = 0; i < this._pools.length; i = (i + 1) | 0) {
                    var pool = this._pools[i];
                    if (pool.Type === type) {
                        return pool;
                    }
                }
                return null;
            },
            /*SpriteVfx.SpriteVfxService.GetPool end.*/


        }
    });
    /*SpriteVfx.SpriteVfxService end.*/

    /*SpriteVfx.SpriteVfxType start.*/
    Bridge.define("SpriteVfx.SpriteVfxType", {
        $kind: 6,
        statics: {
            fields: {
                Coins: 0,
                ZombieBlood: 1,
                Sparks: 2,
                Fire: 3,
                Flash: 4,
                Explosion: 5
            }
        }
    });
    /*SpriteVfx.SpriteVfxType end.*/

    /*StackType start.*/
    Bridge.define("StackType", {
        $kind: 6,
        statics: {
            fields: {
                Money: 0,
                Wood: 1
            }
        }
    });
    /*StackType end.*/

    /*Trucks.Truck start.*/
    Bridge.define("Trucks.Truck", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _stack: null,
            _delay: 0,
            _pickupDelay: 0,
            _takeSound: null,
            _plankStack: null,
            _colorZone: null,
            _lastTakeTime: 0,
            _waitingLoad: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Trucks.Truck#init", this ); }

                this._delay = 0.07;
                this._pickupDelay = 0.5;
            }
        },
        methods: {
            /*Trucks.Truck.Construct start.*/
            Construct: function (plankStack, colorZone) {
if ( TRACE ) { TRACE( "Trucks.Truck#Construct", this ); }

                this._plankStack = plankStack;
                this._colorZone = colorZone;
            },
            /*Trucks.Truck.Construct end.*/

            /*Trucks.Truck.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Trucks.Truck#Update", this ); }

                if (this._waitingLoad && !this._plankStack.IsEmpty && this._colorZone.IsActive && !(UnityEngine.Time.time - this._lastTakeTime < this._delay) && !(UnityEngine.Time.time - this._plankStack.LastTimeAdded < this._pickupDelay)) {
                    var plank = this._plankStack.RemoveItem();
                    this._stack.AddItem(plank);
                    this._lastTakeTime = UnityEngine.Time.time;
                    Audio.AudioService.Instance.TryPlayEffect$1(this._takeSound);
                    if (!this._stack.HasSpace) {
                        this._waitingLoad = false;
                    }
                }
            },
            /*Trucks.Truck.Update end.*/

            /*Trucks.Truck.MoveTo start.*/
            MoveTo: function (position, rotation) {
if ( TRACE ) { TRACE( "Trucks.Truck#MoveTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    DG.Tweening.ShortcutExtensions.DORotateQuaternion(this.transform, rotation.$clone(), 0.4);
                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(DG.Tweening.TweenSettingsExtensions.SetSpeedBased$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, position.$clone(), 10.0), DG.Tweening.Ease.Linear), true));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Trucks.Truck.MoveTo end.*/

            /*Trucks.Truck.WaitLoad start.*/
            WaitLoad: function () {
if ( TRACE ) { TRACE( "Trucks.Truck#WaitLoad", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._waitingLoad = true;
                                        $enumerator.current = new UnityEngine.WaitUntil(Bridge.fn.bind(this, function () {
                                            return !this._waitingLoad;
                                        }));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Trucks.Truck.WaitLoad end.*/

            /*Trucks.Truck.Clear start.*/
            Clear: function () {
if ( TRACE ) { TRACE( "Trucks.Truck#Clear", this ); }

                this._stack.Clear();
            },
            /*Trucks.Truck.Clear end.*/


        }
    });
    /*Trucks.Truck end.*/

    /*Trucks.TruckPoint start.*/
    Bridge.define("Trucks.TruckPoint", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _stopHereIsAllowed: false,
            IsFree: false
        },
        props: {
            Position: {
                get: function () {
if ( TRACE ) { TRACE( "Trucks.TruckPoint#Position#get", this ); }

                    return this.transform.position.$clone();
                }
            },
            Rotation: {
                get: function () {
if ( TRACE ) { TRACE( "Trucks.TruckPoint#Rotation#get", this ); }

                    return this.transform.rotation.$clone();
                }
            },
            StopIsAllowed: {
                get: function () {
if ( TRACE ) { TRACE( "Trucks.TruckPoint#StopIsAllowed#get", this ); }

                    return this._stopHereIsAllowed;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Trucks.TruckPoint#init", this ); }

                this._stopHereIsAllowed = true;
                this.IsFree = true;
            }
        },
        methods: {
            /*Trucks.TruckPoint.Occupy start.*/
            Occupy: function () {
if ( TRACE ) { TRACE( "Trucks.TruckPoint#Occupy", this ); }

                this.IsFree = false;
            },
            /*Trucks.TruckPoint.Occupy end.*/

            /*Trucks.TruckPoint.Release start.*/
            Release: function () {
if ( TRACE ) { TRACE( "Trucks.TruckPoint#Release", this ); }

                this.IsFree = true;
            },
            /*Trucks.TruckPoint.Release end.*/


        }
    });
    /*Trucks.TruckPoint end.*/

    /*Trucks.TrucksManager start.*/
    Bridge.define("Trucks.TrucksManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _buyZone: null,
            _money: null,
            _plankStack: null,
            _colorZone: null,
            _points: null,
            _exitPoints: null,
            _truckPrefab: null,
            _spawnPoint: null,
            _spawnDelay: 0,
            _spawnMoneySound: null,
            _pool: null,
            _enabled: false,
            _lastSpawnTime: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Trucks.TrucksManager#init", this ); }

                this._spawnDelay = 1.0;
            }
        },
        methods: {
            /*Trucks.TrucksManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Trucks.TrucksManager#Awake", this ); }

                this._pool = new (Pools.ObjectPool$1(Trucks.Truck))(Bridge.fn.cacheBind(this, this.CreateTruck));
                this._buyZone.addTriggered(Bridge.fn.cacheBind(this, this.StartSpawn));
            },
            /*Trucks.TrucksManager.Awake end.*/

            /*Trucks.TrucksManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Trucks.TrucksManager#Update", this ); }

                if (this._enabled && !(UnityEngine.Time.time - this._lastSpawnTime < this._spawnDelay) && this.HasFreePoints()) {
                    this.StartCoroutine$1(this.HandleTruck());
                }
            },
            /*Trucks.TrucksManager.Update end.*/

            /*Trucks.TrucksManager.StartSpawn start.*/
            StartSpawn: function () {
if ( TRACE ) { TRACE( "Trucks.TrucksManager#StartSpawn", this ); }

                this._enabled = true;
            },
            /*Trucks.TrucksManager.StartSpawn end.*/

            /*Trucks.TrucksManager.HandleTruck start.*/
            HandleTruck: function () {
if ( TRACE ) { TRACE( "Trucks.TrucksManager#HandleTruck", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    truck,
                    index,
                    k,
                    nextIndex,
                    i,
                    j,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._lastSpawnTime = UnityEngine.Time.time;
                                        truck = this._pool.Get();
                                        truck.transform.SetPositionAndRotation(this._spawnPoint.position, this._spawnPoint.rotation);
                                        truck.gameObject.SetActive(true);
                                        index = this.FindFurthestFreeIndex();
                                        this._points[index].Occupy();
                                        k = 1;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( k <= index ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    $enumerator.current = truck.MoveTo(this._points[k].Position.$clone(), this._points[k].Rotation.$clone());
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    k = (k + 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {
                                    if ( index < ((this._points.length - 1) | 0) ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 13;
                                        continue;
                                }
                                case 6: {
                                    nextIndex = this.GetNextStopIndex(index);
                                        $enumerator.current = this.WaitUntilFree(nextIndex);
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    this._points[index].Release();
                                        this._points[nextIndex].Occupy();
                                        i = index;
                                        $step = 8;
                                        continue;
                                }
                                case 8: {
                                    if ( i <= nextIndex ) {
                                            $step = 9;
                                            continue;
                                        }
                                    $step = 12;
                                    continue;
                                }
                                case 9: {
                                    $enumerator.current = truck.MoveTo(this._points[i].Position.$clone(), this._points[i].Rotation.$clone());
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    i = (i + 1) | 0;
                                    $step = 8;
                                    continue;
                                }
                                case 12: {
                                    index = nextIndex;

                                        $step = 5;
                                        continue;
                                }
                                case 13: {
                                    $enumerator.current = truck.WaitLoad();
                                        $step = 14;
                                        return true;
                                }
                                case 14: {
                                    this._money.SpawnItems(6);
                                        this._points[((this._points.length - 1) | 0)].Release();
                                        Audio.AudioService.Instance.TryPlayEffect$1(this._spawnMoneySound);
                                        j = 0;
                                        $step = 15;
                                        continue;
                                }
                                case 15: {
                                    if ( j < this._exitPoints.length ) {
                                            $step = 16;
                                            continue;
                                        }
                                    $step = 19;
                                    continue;
                                }
                                case 16: {
                                    $enumerator.current = truck.MoveTo(this._exitPoints[j].Position.$clone(), this._exitPoints[j].Rotation.$clone());
                                        $step = 17;
                                        return true;
                                }
                                case 17: {
                                    $step = 18;
                                    continue;
                                }
                                case 18: {
                                    j = (j + 1) | 0;
                                    $step = 15;
                                    continue;
                                }
                                case 19: {
                                    truck.Clear();
                                        truck.gameObject.SetActive(false);
                                        this._pool.Release(truck);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Trucks.TrucksManager.HandleTruck end.*/

            /*Trucks.TrucksManager.GetNextStopIndex start.*/
            GetNextStopIndex: function (i) {
if ( TRACE ) { TRACE( "Trucks.TrucksManager#GetNextStopIndex", this ); }

                for (var j = (i + 1) | 0; j < this._points.length; j = (j + 1) | 0) {
                    if (this._points[j].StopIsAllowed) {
                        return j;
                    }
                }
                return -1;
            },
            /*Trucks.TrucksManager.GetNextStopIndex end.*/

            /*Trucks.TrucksManager.CreateTruck start.*/
            CreateTruck: function () {
if ( TRACE ) { TRACE( "Trucks.TrucksManager#CreateTruck", this ); }

                var truck = UnityEngine.Object.Instantiate$3(Trucks.Truck, this._truckPrefab, this._spawnPoint.position, this._spawnPoint.rotation, this.transform);
                truck.Construct(this._plankStack, this._colorZone);
                return truck;
            },
            /*Trucks.TrucksManager.CreateTruck end.*/

            /*Trucks.TrucksManager.WaitUntilFree start.*/
            WaitUntilFree: function (pointIndex) {
if ( TRACE ) { TRACE( "Trucks.TrucksManager#WaitUntilFree", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( !this._points[pointIndex].IsFree ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Trucks.TrucksManager.WaitUntilFree end.*/

            /*Trucks.TrucksManager.FindFurthestFreeIndex start.*/
            FindFurthestFreeIndex: function () {
if ( TRACE ) { TRACE( "Trucks.TrucksManager#FindFurthestFreeIndex", this ); }

                for (var i = (this._points.length - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (this._points[i].StopIsAllowed && this._points[i].IsFree) {
                        return i;
                    }
                }
                return -1;
            },
            /*Trucks.TrucksManager.FindFurthestFreeIndex end.*/

            /*Trucks.TrucksManager.HasFreePoints start.*/
            HasFreePoints: function () {
if ( TRACE ) { TRACE( "Trucks.TrucksManager#HasFreePoints", this ); }

                return this._points[1].IsFree;
            },
            /*Trucks.TrucksManager.HasFreePoints end.*/


        }
    });
    /*Trucks.TrucksManager end.*/

    /*Unlockable start.*/
    Bridge.define("Unlockable", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _trigger: null,
            _toEnable: null,
            _scaleOnlyByHeight: false,
            _animationTime: 0,
            _delay: 0,
            _sound: null,
            _waitDelay: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Unlockable#init", this ); }

                this._animationTime = 0.5;
            }
        },
        methods: {
            /*Unlockable.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Unlockable#Awake", this ); }

                this._waitDelay = new UnityEngine.WaitForSeconds(this._delay);
                this._trigger.addTriggered(Bridge.fn.cacheBind(this, this.Unlock));
                this._toEnable.SetActive(false);
            },
            /*Unlockable.Awake end.*/

            /*Unlockable.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Unlockable#OnDestroy", this ); }

                this._trigger.removeTriggered(Bridge.fn.cacheBind(this, this.Unlock));
            },
            /*Unlockable.OnDestroy end.*/

            /*Unlockable.Unlock start.*/
            Unlock: function () {
if ( TRACE ) { TRACE( "Unlockable#Unlock", this ); }

                var targetScale = this._toEnable.transform.localScale.$clone();
                this._toEnable.transform.localScale = (this._scaleOnlyByHeight ? new pc.Vec3( targetScale.x, 0.0, targetScale.z ) : pc.Vec3.ZERO.clone());
                if (this._delay > 0.0) {
                    this.StartCoroutine$1(this.ActivateAfterDelay(targetScale.$clone()));
                } else {
                    this.Activate(targetScale.$clone());
                }
            },
            /*Unlockable.Unlock end.*/

            /*Unlockable.ActivateAfterDelay start.*/
            ActivateAfterDelay: function (targetScale) {
if ( TRACE ) { TRACE( "Unlockable#ActivateAfterDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this._waitDelay;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.Activate(targetScale.$clone());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Unlockable.ActivateAfterDelay end.*/

            /*Unlockable.Activate start.*/
            Activate: function (targetScale) {
if ( TRACE ) { TRACE( "Unlockable#Activate", this ); }

                Audio.AudioService.Instance.TryPlayEffect$1(this._sound);
                this._toEnable.SetActive(true);
                Extensions.TweenExtensions.DoPopUp$1(this._toEnable.transform, this._animationTime, 1.1, null, targetScale.$clone());
            },
            /*Unlockable.Activate end.*/


        }
    });
    /*Unlockable end.*/

    /*Upgrades.SpeedUpgrade start.*/
    Bridge.define("Upgrades.SpeedUpgrade", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _glen: null,
            _storage: null,
            _view: null,
            _sound: null,
            _data: null,
            _index: 0
        },
        props: {
            Current: {
                get: function () {
if ( TRACE ) { TRACE( "Upgrades.SpeedUpgrade#Current#get", this ); }

                    return this._data[this._index];
                }
            }
        },
        methods: {
            /*Upgrades.SpeedUpgrade.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Upgrades.SpeedUpgrade#Awake", this ); }

                this._storage.addResourceChanged(Bridge.fn.cacheBind(this, this.ValueChanged));
                this._view.addButtonClicked(Bridge.fn.cacheBind(this, this.BuyUpgrade));
                this.ValueChanged(ResourceType.Money);
            },
            /*Upgrades.SpeedUpgrade.Awake end.*/

            /*Upgrades.SpeedUpgrade.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Upgrades.SpeedUpgrade#OnDestroy", this ); }

                this._storage.removeResourceChanged(Bridge.fn.cacheBind(this, this.ValueChanged));
                this._view.removeButtonClicked(Bridge.fn.cacheBind(this, this.BuyUpgrade));
            },
            /*Upgrades.SpeedUpgrade.OnDestroy end.*/

            /*Upgrades.SpeedUpgrade.ValueChanged start.*/
            ValueChanged: function (resourceType) {
if ( TRACE ) { TRACE( "Upgrades.SpeedUpgrade#ValueChanged", this ); }

                if (resourceType === ResourceType.Money) {
                    var money = this._storage.GetResource(resourceType);
                    this._view.Render(this.Current.Price, money >= this.Current.Price);
                }
            },
            /*Upgrades.SpeedUpgrade.ValueChanged end.*/

            /*Upgrades.SpeedUpgrade.BuyUpgrade start.*/
            BuyUpgrade: function () {
if ( TRACE ) { TRACE( "Upgrades.SpeedUpgrade#BuyUpgrade", this ); }

                Audio.AudioService.Instance.TryPlayEffect$1(this._sound);
                this._storage.RemoveResource(ResourceType.Money, this.Current.Price);
                this._glen.Upgrade(this.Current.MoveSpeed, this.Current.WaitTime);
                this._index = (this._index + 1) | 0;
                this.ValueChanged(ResourceType.Money);
            },
            /*Upgrades.SpeedUpgrade.BuyUpgrade end.*/


        }
    });
    /*Upgrades.SpeedUpgrade end.*/

    /*Upgrades.UpgradeData start.*/
    Bridge.define("Upgrades.UpgradeData", {
        fields: {
            Price: 0
        }
    });
    /*Upgrades.UpgradeData end.*/

    /*Upgrades.UpgradeView start.*/
    Bridge.define("Upgrades.UpgradeView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _activeGroup: null,
            _buyButton: null,
            _price: null
        },
        events: {
            ButtonClicked: null
        },
        methods: {
            /*Upgrades.UpgradeView.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Upgrades.UpgradeView#Awake", this ); }

                this._buyButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnBuyButtonClicked));
            },
            /*Upgrades.UpgradeView.Awake end.*/

            /*Upgrades.UpgradeView.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Upgrades.UpgradeView#OnDestroy", this ); }

                this._buyButton.onClick.RemoveListener(Bridge.fn.cacheBind(this, this.OnBuyButtonClicked));
            },
            /*Upgrades.UpgradeView.OnDestroy end.*/

            /*Upgrades.UpgradeView.Render start.*/
            Render: function (price, active) {
if ( TRACE ) { TRACE( "Upgrades.UpgradeView#Render", this ); }

                this._buyButton.interactable = active;
                this._price.SetText$3("{0}", price);
                DG.Tweening.DOTweenModuleUI.DOFade(this._activeGroup, active ? 1.0 : 0.0, 0.5);
            },
            /*Upgrades.UpgradeView.Render end.*/

            /*Upgrades.UpgradeView.OnBuyButtonClicked start.*/
            OnBuyButtonClicked: function () {
if ( TRACE ) { TRACE( "Upgrades.UpgradeView#OnBuyButtonClicked", this ); }

                DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.DOTween.Sequence$1(this.transform), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.transform, 0.5, 0.2), DG.Tweening.Ease.InOutSine)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.transform, 1.0, 0.2), DG.Tweening.Ease.InOutSine));
                !Bridge.staticEquals(this.ButtonClicked, null) ? this.ButtonClicked() : null;
            },
            /*Upgrades.UpgradeView.OnBuyButtonClicked end.*/


        }
    });
    /*Upgrades.UpgradeView end.*/

    /*Utilities.Animations.MyAnimator start.*/
    Bridge.define("Utilities.Animations.MyAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Animator: null
        },
        methods: {
            /*Utilities.Animations.MyAnimator.CrossFade start.*/
            CrossFade: function (hashes, transitionDuration, offset) {
if ( TRACE ) { TRACE( "Utilities.Animations.MyAnimator#CrossFade", this ); }

                if (transitionDuration === void 0) { transitionDuration = 0.25; }
                if (offset === void 0) { offset = 0.0; }
                this.CrossFade$1(Extensions.ArrayExtensions.GetRandom$1(System.Int32, hashes), transitionDuration, offset);
            },
            /*Utilities.Animations.MyAnimator.CrossFade end.*/

            /*Utilities.Animations.MyAnimator.CrossFade$1 start.*/
            CrossFade$1: function (hash, transitionDuration, offset) {
if ( TRACE ) { TRACE( "Utilities.Animations.MyAnimator#CrossFade$1", this ); }

                if (transitionDuration === void 0) { transitionDuration = 0.25; }
                if (offset === void 0) { offset = 0.0; }
                this.Animator.CrossFadeInFixedTime$2(hash, transitionDuration, -1, offset);
            },
            /*Utilities.Animations.MyAnimator.CrossFade$1 end.*/


        },
        overloads: {
            "CrossFade(int, float, float)": "CrossFade$1"
        }
    });
    /*Utilities.Animations.MyAnimator end.*/

    /*Utilities.AutoRotate start.*/
    Bridge.define("Utilities.AutoRotate", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _rotationSpeed: null,
            _space: 0,
            _enabled: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Utilities.AutoRotate#init", this ); }

                this._rotationSpeed = new UnityEngine.Vector3();
                this._space = UnityEngine.Space.Self;
                this._enabled = true;
            }
        },
        methods: {
            /*Utilities.AutoRotate.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Utilities.AutoRotate#Update", this ); }

                if (this._enabled) {
                    var rotation = this._rotationSpeed.$clone().clone().scale( UnityEngine.Time.deltaTime );
                    this.transform.Rotate(rotation.x, rotation.y, rotation.z, this._space);
                }
            },
            /*Utilities.AutoRotate.Update end.*/

            /*Utilities.AutoRotate.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "Utilities.AutoRotate#Enable", this ); }

                this._enabled = true;
            },
            /*Utilities.AutoRotate.Enable end.*/

            /*Utilities.AutoRotate.Disable start.*/
            Disable: function () {
if ( TRACE ) { TRACE( "Utilities.AutoRotate#Disable", this ); }

                this._enabled = false;
            },
            /*Utilities.AutoRotate.Disable end.*/


        }
    });
    /*Utilities.AutoRotate end.*/

    /*Utilities.BiDictionary$2 start.*/
    Bridge.define("Utilities.BiDictionary$2", function (TFirst, TSecond) { return {
        fields: {
            _firstToSecond: null,
            _secondToFirst: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Utilities.BiDictionary$2#init", this ); }

                this._firstToSecond = new (System.Collections.Generic.Dictionary$2(TFirst,TSecond)).ctor();
                this._secondToFirst = new (System.Collections.Generic.Dictionary$2(TSecond,TFirst)).ctor();
            }
        },
        methods: {
            /*Utilities.BiDictionary$2.Add start.*/
            Add: function (first, second) {
if ( TRACE ) { TRACE( "Utilities.BiDictionary$2#Add", this ); }

                if (this._firstToSecond["System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TFirst) + "$" + Bridge.getTypeAlias(TSecond) + "$containsKey"](Bridge.rValue(first)) || this._secondToFirst["System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TSecond) + "$" + Bridge.getTypeAlias(TFirst) + "$containsKey"](Bridge.rValue(second))) {
                    throw new System.ArgumentException.$ctor1("Duplicate first or second");
                }
                this._firstToSecond["System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TFirst) + "$" + Bridge.getTypeAlias(TSecond) + "$add"](Bridge.rValue(first), Bridge.rValue(second));
                this._secondToFirst["System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TSecond) + "$" + Bridge.getTypeAlias(TFirst) + "$add"](Bridge.rValue(second), Bridge.rValue(first));
            },
            /*Utilities.BiDictionary$2.Add end.*/

            /*Utilities.BiDictionary$2.TryGetByFirst start.*/
            TryGetByFirst: function (first, second) {
if ( TRACE ) { TRACE( "Utilities.BiDictionary$2#TryGetByFirst", this ); }

                return this._firstToSecond["System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TFirst) + "$" + Bridge.getTypeAlias(TSecond) + "$tryGetValue"](Bridge.rValue(first), Bridge.rValue(second));
            },
            /*Utilities.BiDictionary$2.TryGetByFirst end.*/

            /*Utilities.BiDictionary$2.TryGetBySecond start.*/
            TryGetBySecond: function (second, first) {
if ( TRACE ) { TRACE( "Utilities.BiDictionary$2#TryGetBySecond", this ); }

                return this._secondToFirst["System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TSecond) + "$" + Bridge.getTypeAlias(TFirst) + "$tryGetValue"](Bridge.rValue(second), Bridge.rValue(first));
            },
            /*Utilities.BiDictionary$2.TryGetBySecond end.*/


        }
    }; });
    /*Utilities.BiDictionary$2 end.*/

    /*Utilities.ClampedPercentageValue start.*/
    Bridge.define("Utilities.ClampedPercentageValue", {
        fields: {
            _percent: 0
        },
        props: {
            Value: {
                get: function () {
if ( TRACE ) { TRACE( "Utilities.ClampedPercentageValue#Value#get", this ); }

                    return this._percent * 0.01;
                }
            }
        }
    });
    /*Utilities.ClampedPercentageValue end.*/

    /*Utilities.Coroutines.CoroutineObjectBase start.*/
    Bridge.define("Utilities.Coroutines.CoroutineObjectBase", {
        fields: {
            Owner: null,
            Coroutine: null
        },
        events: {
            Finished: null
        },
        props: {
            IsProcessing: {
                get: function () {
if ( TRACE ) { TRACE( "Utilities.Coroutines.CoroutineObjectBase#IsProcessing#get", this ); }

                    return this.Coroutine != null;
                }
            }
        },
        methods: {
            /*Utilities.Coroutines.CoroutineObjectBase.Stop start.*/
            Stop: function () {
if ( TRACE ) { TRACE( "Utilities.Coroutines.CoroutineObjectBase#Stop", this ); }

                if (this.IsProcessing) {
                    this.Owner.Utilities$Coroutines$ICoroutineRunner$StopCoroutine(this.Coroutine);
                    this.Coroutine = null;
                }
            },
            /*Utilities.Coroutines.CoroutineObjectBase.Stop end.*/


        }
    });
    /*Utilities.Coroutines.CoroutineObjectBase end.*/

    /*Utilities.Coroutines.ICoroutineRunner start.*/
    Bridge.define("Utilities.Coroutines.ICoroutineRunner", {
        $kind: 3
    });
    /*Utilities.Coroutines.ICoroutineRunner end.*/

    /*Utilities.DontDestroy start.*/
    Bridge.define("Utilities.DontDestroy", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*Utilities.DontDestroy.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Utilities.DontDestroy#Awake", this ); }

                UnityEngine.Object.DontDestroyOnLoad(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
            },
            /*Utilities.DontDestroy.Awake end.*/


        }
    });
    /*Utilities.DontDestroy end.*/

    /*Utilities.ICloneable$1 start.*/
    Bridge.definei("Utilities.ICloneable$1", function (T) { return {
        $kind: 3
    }; });
    /*Utilities.ICloneable$1 end.*/

    /*Utilities.InterfaceRequired.InterfaceRequiredAttribute start.*/
    Bridge.define("Utilities.InterfaceRequired.InterfaceRequiredAttribute", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            InterfaceType: null
        },
        ctors: {
            ctor: function (interfaceType) {
if ( TRACE ) { TRACE( "Utilities.InterfaceRequired.InterfaceRequiredAttribute#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.InterfaceType = interfaceType;
            }
        }
    });
    /*Utilities.InterfaceRequired.InterfaceRequiredAttribute end.*/

    /*Utilities.MathParabola start.*/
    Bridge.define("Utilities.MathParabola", {
        statics: {
            methods: {
                /*Utilities.MathParabola.Parabola$1:static start.*/
                Parabola$1: function (start, end, height, t) {
if ( TRACE ) { TRACE( "Utilities.MathParabola#Parabola$1", this ); }

                    var mid = new pc.Vec3().lerp( start, end, t );
                    return new pc.Vec3( mid.x, Utilities.MathParabola.Func(t, height) + pc.math.lerp(start.y, end.y, t), mid.z );
                },
                /*Utilities.MathParabola.Parabola$1:static end.*/

                /*Utilities.MathParabola.Parabola:static start.*/
                Parabola: function (start, end, height, t) {
if ( TRACE ) { TRACE( "Utilities.MathParabola#Parabola", this ); }

                    return new pc.Vec2( new pc.Vec2().lerp( start, end, t ).x, Utilities.MathParabola.Func(t, height) + pc.math.lerp(start.y, end.y, t) );
                },
                /*Utilities.MathParabola.Parabola:static end.*/

                /*Utilities.MathParabola.Func:static start.*/
                Func: function (x, height) {
if ( TRACE ) { TRACE( "Utilities.MathParabola#Func", this ); }

                    return -4.0 * height * x * x + 4.0 * height * x;
                },
                /*Utilities.MathParabola.Func:static end.*/


            }
        }
    });
    /*Utilities.MathParabola end.*/

    /*Utilities.RandomHelper start.*/
    Bridge.define("Utilities.RandomHelper", {
        statics: {
            methods: {
                /*Utilities.RandomHelper.Check:static start.*/
                Check: function (chance) {
if ( TRACE ) { TRACE( "Utilities.RandomHelper#Check", this ); }

                    return UnityEngine.Random.value < chance;
                },
                /*Utilities.RandomHelper.Check:static end.*/


            }
        }
    });
    /*Utilities.RandomHelper end.*/

    /*Utilities.Reactives.IReadOnlyReactiveProperty$1 start.*/
    Bridge.definei("Utilities.Reactives.IReadOnlyReactiveProperty$1", function (T) { return {
        $kind: 3
    }; });
    /*Utilities.Reactives.IReadOnlyReactiveProperty$1 end.*/

    /*Utilities.Tag.TagAttribute start.*/
    Bridge.define("Utilities.Tag.TagAttribute", {
        inherits: [System.Attribute]
    });
    /*Utilities.Tag.TagAttribute end.*/

    /*Wheel start.*/
    Bridge.define("Wheel", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*Wheel.Rotate start.*/
            Rotate: function (rotation) {
if ( TRACE ) { TRACE( "Wheel#Rotate", this ); }

                this.transform.Rotate$1(pc.Vec3.RIGHT.clone(), rotation);
            },
            /*Wheel.Rotate end.*/


        }
    });
    /*Wheel end.*/

    /*ZombieTransition start.*/
    Bridge.define("ZombieTransition", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _canvasRect: null,
            _imagePrefab: null,
            _spacing: null,
            _randomOffset: null,
            _transitionDuration: 0,
            _packShot: null,
            _zombieManager: null,
            _children: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ZombieTransition#init", this ); }

                this._spacing = new UnityEngine.Vector2();
                this._randomOffset = new UnityEngine.Vector2();
                this._spacing = new pc.Vec2( 10.0, 10.0 );
                this._randomOffset = new pc.Vec2( 5.0, 5.0 );
                this._transitionDuration = 1.0;
            }
        },
        methods: {
            /*ZombieTransition.ShowTransition start.*/
            ShowTransition: function () {
if ( TRACE ) { TRACE( "ZombieTransition#ShowTransition", this ); }

                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(true);
                this.StartCoroutine$1(this.TransitionRoutine());
            },
            /*ZombieTransition.ShowTransition end.*/

            /*ZombieTransition.TransitionRoutine start.*/
            TransitionRoutine: function () {
if ( TRACE ) { TRACE( "ZombieTransition#TransitionRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    duration2,
                    duration,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    Extensions.ListExtensions.Shuffle(UnityEngine.UI.Image, this._children);
                                        for (var i = 0; i < this._children.length; i = (i + 1) | 0) {
                                            duration2 = UnityEngine.Random.Range$1(0.3, 1.0);
                                            DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.AppendInterval(DG.Tweening.DOTween.Sequence$1(this._children[i]), UnityEngine.Random.Range$1(0.0, 2.0)), Extensions.TweenExtensions.DoPopUp$1(this._children[i].transform, duration2, 1.1, null, Bridge.getDefaultValue(UnityEngine.Vector3), true)), DG.Tweening.DOTweenModuleUI.DOFade$2(this._children[i], 1.0, duration2 * 0.5));
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this._transitionDuration);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._zombieManager.gameObject.SetActive(false);
                                        Audio.AudioService.Instance.StopAndClearEffects();
                                        this._packShot.Show();
                                        for (var j = 0; j < this._children.length; j = (j + 1) | 0) {
                                            duration = UnityEngine.Random.Range$1(0.3, 1.0);
                                            DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.AppendInterval(DG.Tweening.DOTween.Sequence$1(this._children[j]), UnityEngine.Random.Range$1(0.0, 2.0)), Extensions.TweenExtensions.DoPopDown$1(this._children[j].transform, duration)), DG.Tweening.DOTweenModuleUI.DOFade$2(this._children[j], 0.0, duration * 2.0));
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(3.0);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ZombieTransition.TransitionRoutine end.*/


        }
    });
    /*ZombieTransition end.*/

    /*Audio.AudioService start.*/
    Bridge.define("Audio.AudioService", {
        inherits: [UnityEngine.MonoBehaviour,Audio.IAudioService],
        statics: {
            fields: {
                Instance: null
            },
            methods: {
                /*Audio.AudioService.ActionOnRelease:static start.*/
                ActionOnRelease: function (effect) {
if ( TRACE ) { TRACE( "Audio.AudioService#ActionOnRelease", this ); }

                    effect.gameObject.SetActive(false);
                },
                /*Audio.AudioService.ActionOnRelease:static end.*/

                /*Audio.AudioService.ActionOnGet:static start.*/
                ActionOnGet: function (effect) {
if ( TRACE ) { TRACE( "Audio.AudioService#ActionOnGet", this ); }

                    effect.gameObject.SetActive(true);
                },
                /*Audio.AudioService.ActionOnGet:static end.*/


            }
        },
        fields: {
            _musicSource: null,
            _audioEffectPrefab: null,
            _playingSounds: null,
            _effectsPool: null,
            _playId: 0
        },
        alias: [
            "Reset", "Audio$IAudioService$Reset",
            "PlayMusic", "Audio$IAudioService$PlayMusic",
            "PauseMusic", "Audio$IAudioService$PauseMusic",
            "TryPlayEffect", "Audio$IAudioService$TryPlayEffect",
            "TryPlayEffect$1", "Audio$IAudioService$TryPlayEffect$1",
            "TryStopEffect", "Audio$IAudioService$TryStopEffect",
            "PauseEffects", "Audio$IAudioService$PauseEffects",
            "ResumeEffects", "Audio$IAudioService$ResumeEffects",
            "Release", "Audio$IAudioService$Release",
            "StopAndClearEffects", "Audio$IAudioService$StopAndClearEffects"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Audio.AudioService#init", this ); }

                this._playingSounds = new (System.Collections.Generic.HashSet$1(Audio.AudioEffect)).ctor();
            }
        },
        methods: {
            /*Audio.AudioService.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Audio.AudioService#Awake", this ); }

                Audio.AudioService.Instance = this;
                this._effectsPool = new (Pools.ObjectPool$1(Audio.AudioEffect))(Bridge.fn.cacheBind(this, this.CreateAudioEffect), Audio.AudioService.ActionOnGet, Audio.AudioService.ActionOnRelease);
            },
            /*Audio.AudioService.Awake end.*/

            /*Audio.AudioService.CreateAudioEffect start.*/
            CreateAudioEffect: function () {
if ( TRACE ) { TRACE( "Audio.AudioService#CreateAudioEffect", this ); }

                var effect = UnityEngine.Object.Instantiate(Audio.AudioEffect, this._audioEffectPrefab, this.transform);
                effect.Construct(this);
                return effect;
            },
            /*Audio.AudioService.CreateAudioEffect end.*/

            /*Audio.AudioService.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "Audio.AudioService#Reset", this ); }

                this.PauseMusic();
                this.PlayMusic();
                this.PauseEffects();
                this.ResumeEffects();
            },
            /*Audio.AudioService.Reset end.*/

            /*Audio.AudioService.PlayMusic start.*/
            PlayMusic: function () {
if ( TRACE ) { TRACE( "Audio.AudioService#PlayMusic", this ); }

                this._musicSource.Play();
            },
            /*Audio.AudioService.PlayMusic end.*/

            /*Audio.AudioService.PauseMusic start.*/
            PauseMusic: function () {
if ( TRACE ) { TRACE( "Audio.AudioService#PauseMusic", this ); }

                this._musicSource.Pause();
            },
            /*Audio.AudioService.PauseMusic end.*/

            /*Audio.AudioService.TryPlayEffect start.*/
            TryPlayEffect: function (clip, playId, loop) {
if ( TRACE ) { TRACE( "Audio.AudioService#TryPlayEffect", this ); }

                if (loop === void 0) { loop = false; }
                playId.v = -1;
                if (clip == null) {
                    return false;
                }
                playId.v = this.PlayEffect(clip, loop);
                return true;
            },
            /*Audio.AudioService.TryPlayEffect end.*/

            /*Audio.AudioService.TryPlayEffect$1 start.*/
            TryPlayEffect$1: function (clip) {
if ( TRACE ) { TRACE( "Audio.AudioService#TryPlayEffect$1", this ); }

                if (!(clip == null)) {
                    this.PlayEffect(clip, false);
                }
            },
            /*Audio.AudioService.TryPlayEffect$1 end.*/

            /*Audio.AudioService.IsPlaying start.*/
            IsPlaying: function (playId) {
if ( TRACE ) { TRACE( "Audio.AudioService#IsPlaying", this ); }

                var $t;
                if (playId === -1) {
                    return false;
                }
                $t = Bridge.getEnumerator(this._playingSounds);
                try {
                    while ($t.moveNext()) {
                        var playingSound = $t.Current;
                        if (playingSound.PlayId === playId) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*Audio.AudioService.IsPlaying end.*/

            /*Audio.AudioService.TryStopEffect start.*/
            TryStopEffect: function (playId) {
if ( TRACE ) { TRACE( "Audio.AudioService#TryStopEffect", this ); }

                var $t;
                if (playId === -1) {
                    return;
                }
                var sound = null;
                var found = false;
                $t = Bridge.getEnumerator(this._playingSounds);
                try {
                    while ($t.moveNext()) {
                        var playingSound = $t.Current;
                        if (playingSound.PlayId === playId) {
                            found = true;
                            sound = playingSound;
                            break;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (found) {
                    sound.Stop();
                }
            },
            /*Audio.AudioService.TryStopEffect end.*/

            /*Audio.AudioService.PauseEffects start.*/
            PauseEffects: function () {
if ( TRACE ) { TRACE( "Audio.AudioService#PauseEffects", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._playingSounds);
                try {
                    while ($t.moveNext()) {
                        var sound = $t.Current;
                        sound.Pause();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Audio.AudioService.PauseEffects end.*/

            /*Audio.AudioService.ResumeEffects start.*/
            ResumeEffects: function () {
if ( TRACE ) { TRACE( "Audio.AudioService#ResumeEffects", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._playingSounds);
                try {
                    while ($t.moveNext()) {
                        var sound = $t.Current;
                        sound.Unpause();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Audio.AudioService.ResumeEffects end.*/

            /*Audio.AudioService.Release start.*/
            Release: function (element, removeFromPlayingSounds) {
if ( TRACE ) { TRACE( "Audio.AudioService#Release", this ); }

                this._effectsPool.Release(element);
                if (removeFromPlayingSounds) {
                    this._playingSounds.remove(element);
                }
            },
            /*Audio.AudioService.Release end.*/

            /*Audio.AudioService.StopAndClearEffects start.*/
            StopAndClearEffects: function () {
if ( TRACE ) { TRACE( "Audio.AudioService#StopAndClearEffects", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._playingSounds);
                try {
                    while ($t.moveNext()) {
                        var effect = $t.Current;
                        if (effect.IsPlaying) {
                            effect.Stop(false);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this._playingSounds.clear();
            },
            /*Audio.AudioService.StopAndClearEffects end.*/

            /*Audio.AudioService.PlayEffect start.*/
            PlayEffect: function (clip, loop, ignorePause) {
if ( TRACE ) { TRACE( "Audio.AudioService#PlayEffect", this ); }

                if (ignorePause === void 0) { ignorePause = false; }
                this._playId = (this._playId + 1) | 0;
                var effect = this._effectsPool.Get();
                effect.Play(clip, loop, this._playId, ignorePause);
                this._playingSounds.add(effect);
                return this._playId;
            },
            /*Audio.AudioService.PlayEffect end.*/


        },
        overloads: {
            "TryPlayEffect(AudioClip)": "TryPlayEffect$1"
        }
    });
    /*Audio.AudioService end.*/

    /*Conveyors.InteractiveConveyorAccelerator start.*/
    Bridge.define("Conveyors.InteractiveConveyorAccelerator", {
        inherits: [Conveyors.InteractiveConveyorPoint],
        fields: {
            _spriteRenderer: null
        },
        methods: {
            /*Conveyors.InteractiveConveyorAccelerator.ProcessBullet start.*/
            ProcessBullet: function (originalBullet) {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyorAccelerator#ProcessBullet", this ); }

                this.AnimateSpriteRenderer();
                this.MoveBullet(originalBullet);
            },
            /*Conveyors.InteractiveConveyorAccelerator.ProcessBullet end.*/

            /*Conveyors.InteractiveConveyorAccelerator.AnimateSpriteRenderer start.*/
            AnimateSpriteRenderer: function () {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyorAccelerator#AnimateSpriteRenderer", this ); }

                DG.Tweening.ShortcutExtensions.DOPunchScale(this._spriteRenderer.transform, new pc.Vec3( 1, 1, 1 ).clone().scale( -0.05 ), 0.5, 0);
            },
            /*Conveyors.InteractiveConveyorAccelerator.AnimateSpriteRenderer end.*/


        }
    });
    /*Conveyors.InteractiveConveyorAccelerator end.*/

    /*Conveyors.InteractiveConveyorMultiplier start.*/
    Bridge.define("Conveyors.InteractiveConveyorMultiplier", {
        inherits: [Conveyors.InteractiveConveyorPoint],
        fields: {
            _bulletPool: null,
            _spriteRenderer: null,
            _startPoints: null
        },
        methods: {
            /*Conveyors.InteractiveConveyorMultiplier.ProcessBullet start.*/
            ProcessBullet: function (originalBullet) {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyorMultiplier#ProcessBullet", this ); }

                this.AnimateSpriteRenderer();
                for (var i = 0; i < this._startPoints.length; i = (i + 1) | 0) {
                    var bullet = { v : originalBullet };
                    if (i > 0) {
                        bullet.v = Bridge.cast(this._bulletPool.Get(), GameResources.Bullet);
                    }
                    Extensions.TransformExtensions.SetPositionAndRotation(bullet.v.transform, originalBullet.transform);
                    DG.Tweening.ShortcutExtensions.DORotateQuaternion(bullet.v.transform, this._startPoints[i].rotation.$clone(), 0.49);
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(bullet.v.transform, this._startPoints[i].position.$clone(), 0.5), (function ($me, bullet) {
                        return Bridge.fn.bind($me, function () {
                            this.MoveBullet(bullet.v);
                        });
                    })(this, bullet));
                }
            },
            /*Conveyors.InteractiveConveyorMultiplier.ProcessBullet end.*/

            /*Conveyors.InteractiveConveyorMultiplier.AnimateSpriteRenderer start.*/
            AnimateSpriteRenderer: function () {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyorMultiplier#AnimateSpriteRenderer", this ); }

                DG.Tweening.ShortcutExtensions.DOPunchScale(this._spriteRenderer.transform, new pc.Vec3( 1, 1, 1 ).clone().scale( -0.05 ), 0.5, 0);
            },
            /*Conveyors.InteractiveConveyorMultiplier.AnimateSpriteRenderer end.*/


        }
    });
    /*Conveyors.InteractiveConveyorMultiplier end.*/

    /*Conveyors.InteractiveConveyorUnlockPoint start.*/
    Bridge.define("Conveyors.InteractiveConveyorUnlockPoint", {
        inherits: [Conveyors.InteractiveConveyorPoint],
        fields: {
            _toUnlock: null,
            _lockObject: null,
            _highlightObject: null,
            _fillBar: null,
            _costText: null,
            _cost: 0,
            _zombieManager: null,
            _sound: null,
            _mason: null,
            _currentCost: 0,
            _unlocked: false,
            _firstBulletProcessed: false,
            ProcessedAtLeastOneBullet: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyorUnlockPoint#init", this ); }

                this._cost = 10;
            }
        },
        methods: {
            /*Conveyors.InteractiveConveyorUnlockPoint.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyorUnlockPoint#Awake", this ); }

                this._currentCost = this._cost;
            },
            /*Conveyors.InteractiveConveyorUnlockPoint.Awake end.*/

            /*Conveyors.InteractiveConveyorUnlockPoint.ProcessBullet start.*/
            ProcessBullet: function (bullet) {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyorUnlockPoint#ProcessBullet", this ); }

                if (this._unlocked) {
                    if (!this._firstBulletProcessed) {
                        this._firstBulletProcessed = true;
                        this._mason.IncreaseShootingSpeed();
                        this.ProcessedAtLeastOneBullet = true;
                        this._zombieManager.StopSpawn();
                    }
                    this.ProcessBulletByNextPoint(bullet);
                    return;
                }
                this._currentCost = (this._currentCost - 1) | 0;
                bullet.Release();
                this._fillBar.Render(1.0 - this._currentCost / this._cost);
                this._costText.SetText$3("{0}", this._currentCost);
                if (this._currentCost === 0) {
                    this.StartCoroutine$1(this.Unlock());
                    return;
                }
                var target = this._lockObject.transform;
                DG.Tweening.ShortcutExtensions.DOComplete(target);
                var scale = target.localScale.$clone();
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.DOTween.Sequence$1(target), DG.Tweening.ShortcutExtensions.DOScale$1(target, scale.$clone().clone().scale( 0.8 ), 0.2)), DG.Tweening.ShortcutExtensions.DOScale$1(target, scale.$clone(), 0.2)), DG.Tweening.Ease.InOutSine);
            },
            /*Conveyors.InteractiveConveyorUnlockPoint.ProcessBullet end.*/

            /*Conveyors.InteractiveConveyorUnlockPoint.Unlock start.*/
            Unlock: function () {
if ( TRACE ) { TRACE( "Conveyors.InteractiveConveyorUnlockPoint#Unlock", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._unlocked = true;
                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(Extensions.TweenExtensions.DoPopDown$1(this._lockObject.transform));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._toUnlock.SetActive(true);
                                        Audio.AudioService.Instance.TryPlayEffect$1(this._sound);
                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(Extensions.TweenExtensions.DoPopUp$1(this._toUnlock.transform, 0.3, 1.1, null, new pc.Vec3( 1, 1, 1 ), true));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this._lockObject.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Conveyors.InteractiveConveyorUnlockPoint.Unlock end.*/


        }
    });
    /*Conveyors.InteractiveConveyorUnlockPoint end.*/

    /*Conveyors.SimpleInteractiveConveyorPoint start.*/
    Bridge.define("Conveyors.SimpleInteractiveConveyorPoint", {
        inherits: [Conveyors.InteractiveConveyorPoint],
        methods: {
            /*Conveyors.SimpleInteractiveConveyorPoint.ProcessBullet start.*/
            ProcessBullet: function (originalBullet) {
if ( TRACE ) { TRACE( "Conveyors.SimpleInteractiveConveyorPoint#ProcessBullet", this ); }

                this.MoveBullet(originalBullet);
            },
            /*Conveyors.SimpleInteractiveConveyorPoint.ProcessBullet end.*/


        }
    });
    /*Conveyors.SimpleInteractiveConveyorPoint end.*/

    /*DynamicJoystick start.*/
    Bridge.define("DynamicJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#init", this ); }

                this.moveThreshold = 1.0;
            }
        },
        methods: {
            /*DynamicJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#Start", this ); }

                this.MoveThreshold = this.moveThreshold;
                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*DynamicJoystick.Start end.*/

            /*DynamicJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerDown end.*/

            /*DynamicJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerUp", this ); }

                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerUp end.*/

            /*DynamicJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "DynamicJoystick#HandleInput", this ); }

                if (magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised.$clone(), radius.$clone(), cam);
            },
            /*DynamicJoystick.HandleInput end.*/


        }
    });
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    Bridge.define("FixedJoystick", {
        inherits: [Joystick]
    });
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    Bridge.define("FloatingJoystick", {
        inherits: [Joystick],
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        methods: {
            /*FloatingJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "FloatingJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*FloatingJoystick.Start end.*/

            /*FloatingJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerDown end.*/

            /*FloatingJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerUp", this ); }

                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerUp end.*/


        }
    });
    /*FloatingJoystick end.*/

    /*Resource start.*/
    Bridge.define("Resource", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _type: 0,
            _pool: null
        },
        props: {
            Type: {
                get: function () {
if ( TRACE ) { TRACE( "Resource#Type#get", this ); }

                    return this._type;
                }
            }
        },
        methods: {
            /*Resource.Construct start.*/
            Construct: function (pool) {
if ( TRACE ) { TRACE( "Resource#Construct", this ); }

                this._pool = pool;
            },
            /*Resource.Construct end.*/

            /*Resource.Release start.*/
            Release: function () {
if ( TRACE ) { TRACE( "Resource#Release", this ); }

                this._pool[Bridge.geti(this._pool, "Pools$IPool$1$Resource$Release", "Pools$IPool$1$Release")](this);
            },
            /*Resource.Release end.*/


        }
    });
    /*Resource end.*/

    /*MoneyPickup start.*/
    Bridge.define("MoneyPickup", {
        inherits: [Progression.GameTrigger],
        fields: {
            _money: null,
            _clip: null,
            _items: null
        },
        methods: {
            /*MoneyPickup.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "MoneyPickup#OnTriggerEnter", this ); }

                var stackManager = { };
                if (other.TryGetComponent$1(Hero.HeroStackManager, stackManager) && stackManager.v.CanAddItem(ResourceType.Money)) {
                    var stack = stackManager.v.GetStack(ResourceType.Money);
                    var items = this._items;
                    stack.AddItems(items, true);
                    Audio.AudioService.Instance.TryPlayEffect$1(this._clip);
                    UnityEngine.Object.Destroy(this);
                    this.InvokeTriggered();
                }
            },
            /*MoneyPickup.OnTriggerEnter end.*/


        }
    });
    /*MoneyPickup end.*/

    /*Pools.ObjectPool$1 start.*/
    Bridge.define("Pools.ObjectPool$1", function (T) { return {
        inherits: [System.IDisposable,Pools.IPool$1(T)],
        fields: {
            _list: null,
            _createFunc: null,
            _actionOnGet: null,
            _actionOnRelease: null,
            _maxSize: 0,
            _collectionCheck: false,
            CountAll: 0
        },
        props: {
            CountActive: {
                get: function () {
if ( TRACE ) { TRACE( "Pools.ObjectPool$1#CountActive#get", this ); }

                    return ((this.CountAll - this.CountInactive) | 0);
                }
            },
            CountInactive: {
                get: function () {
if ( TRACE ) { TRACE( "Pools.ObjectPool$1#CountInactive#get", this ); }

                    return this._list.Count;
                }
            }
        },
        alias: [
            "Release", ["Pools$IPool$1$" + Bridge.getTypeAlias(T) + "$Release", "Pools$IPool$1$Release"],
            "Dispose", "System$IDisposable$Dispose"
        ],
        ctors: {
            ctor: function (createFunc, actionOnGet, actionOnRelease, collectionCheck, defaultCapacity, maxSize) {
if ( TRACE ) { TRACE( "Pools.ObjectPool$1#ctor", this ); }

                if (actionOnGet === void 0) { actionOnGet = null; }
                if (actionOnRelease === void 0) { actionOnRelease = null; }
                if (collectionCheck === void 0) { collectionCheck = true; }
                if (defaultCapacity === void 0) { defaultCapacity = 10; }
                if (maxSize === void 0) { maxSize = 10000; }

                this.$initialize();
                if (Bridge.staticEquals(createFunc, null)) {
                    throw new System.ArgumentNullException.$ctor1("createFunc");
                }
                if (maxSize <= 0) {
                    throw new System.ArgumentException.$ctor3("Max Size must be greater than 0", "maxSize");
                }
                this._list = new (System.Collections.Generic.List$1(T)).$ctor2(defaultCapacity);
                this._createFunc = createFunc;
                this._actionOnGet = actionOnGet;
                this._actionOnRelease = actionOnRelease;
                this._maxSize = maxSize;
                this._collectionCheck = collectionCheck;
            }
        },
        methods: {
            /*Pools.ObjectPool$1.Get start.*/
            Get: function () {
if ( TRACE ) { TRACE( "Pools.ObjectPool$1#Get", this ); }

                var obj;
                if (this._list.Count === 0) {
                    obj = Bridge.rValue(this._createFunc());
                    this.CountAll = (this.CountAll + 1) | 0;
                } else {
                    var index = (this._list.Count - 1) | 0;
                    obj = Bridge.rValue(this._list.getItem(index));
                    this._list.removeAt(index);
                }
                !Bridge.staticEquals(this._actionOnGet, null) ? this._actionOnGet(Bridge.rValue(obj)) : null;
                return Bridge.rValue(obj);
            },
            /*Pools.ObjectPool$1.Get end.*/

            /*Pools.ObjectPool$1.Release start.*/
            Release: function (element) {
if ( TRACE ) { TRACE( "Pools.ObjectPool$1#Release", this ); }

                if (this._collectionCheck && this._list.Count > 0) {
                    for (var index = 0; index < this._list.Count; index = (index + 1) | 0) {
                        if (Bridge.referenceEquals(Bridge.rValue(element), Bridge.rValue(this._list.getItem(index)))) {
                            throw new System.InvalidOperationException.$ctor1("Trying to release an object that has already been released to the pool.");
                        }
                    }
                }
                !Bridge.staticEquals(this._actionOnRelease, null) ? this._actionOnRelease(Bridge.rValue(element)) : null;
                if (this.CountInactive < this._maxSize) {
                    this._list.add(Bridge.rValue(element));
                } else {
                    this.CountAll = (this.CountAll - 1) | 0;
                }
            },
            /*Pools.ObjectPool$1.Release end.*/

            /*Pools.ObjectPool$1.Clear start.*/
            Clear: function () {
if ( TRACE ) { TRACE( "Pools.ObjectPool$1#Clear", this ); }

                this._list.clear();
                this.CountAll = 0;
            },
            /*Pools.ObjectPool$1.Clear end.*/

            /*Pools.ObjectPool$1.Dispose start.*/
            Dispose: function () {
if ( TRACE ) { TRACE( "Pools.ObjectPool$1#Dispose", this ); }

                this.Clear();
            },
            /*Pools.ObjectPool$1.Dispose end.*/


        }
    }; });
    /*Pools.ObjectPool$1 end.*/

    /*Progression.BuyZone start.*/
    Bridge.define("Progression.BuyZone", {
        inherits: [Progression.GameTrigger],
        fields: {
            _startPrice: 0,
            _money: null,
            _fillBar: null,
            _priceText: null,
            _flyDelay: 0,
            _flyDuration: 0,
            _moneyReceivePoint: null,
            _addSound: null,
            _waitFly: null,
            Price: 0,
            IsOpened: false
        },
        methods: {
            /*Progression.BuyZone.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Progression.BuyZone#Awake", this ); }

                this._waitFly = new UnityEngine.WaitForSeconds(this._flyDelay);
                this.Price = this._startPrice;
                this._fillBar.Init();
                this.UpdateVisuals(this._startPrice);
            },
            /*Progression.BuyZone.Awake end.*/

            /*Progression.BuyZone.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Progression.BuyZone#OnDestroy", this ); }

                this.UpdateVisuals(this._startPrice);
            },
            /*Progression.BuyZone.OnDestroy end.*/

            /*Progression.BuyZone.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Progression.BuyZone#OnTriggerEnter", this ); }

                var stackManager = { };
                if (!this.IsOpened && other.TryGetComponent$1(Hero.HeroStackManager, stackManager)) {
                    var moneyStack = stackManager.v.GetStack(ResourceType.Money);
                    if (!moneyStack.IsEmpty) {
                        this.StartCoroutine$1(this.TakeMoneyFromHero(moneyStack));
                    }
                }
            },
            /*Progression.BuyZone.OnTriggerEnter end.*/

            /*Progression.BuyZone.TakeMoneyFromHero start.*/
            TakeMoneyFromHero: function (stack) {
if ( TRACE ) { TRACE( "Progression.BuyZone#TakeMoneyFromHero", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    items,
                    price,
                    itemsAmount,
                    item,
                    i,
                    resource,
                    isLast,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    items = new (System.Collections.Generic.List$1(MoneyResource)).ctor();
                                        price = this.Price;
                                        itemsAmount = 0;
                                        while (price > 0 && !stack.IsEmpty) {
                                            item = Bridge.cast(stack.RemoveItem(true), MoneyResource);
                                            items.add(item);
                                            price = (price - 4) | 0;
                                            itemsAmount = (itemsAmount + 1) | 0;
                                        }
                                        if (price === 0) {
                                            this.IsOpened = true;
                                        }
                                        i = 0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( i < itemsAmount ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    resource = items.getItem(i);
                                        isLast = i === ((itemsAmount - 1) | 0);
                                        this.StartCoroutine$1(this.ThrowCoinArc(resource, this._moneyReceivePoint.position.$clone(), this._flyDuration, isLast));
                                        $enumerator.current = this._waitFly;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    i = (i + 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Progression.BuyZone.TakeMoneyFromHero end.*/

            /*Progression.BuyZone.ThrowCoinArc start.*/
            ThrowCoinArc: function (resource, targetPos, duration, isLast) {
if ( TRACE ) { TRACE( "Progression.BuyZone#ThrowCoinArc", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    itemTransform,
                    startPos,
                    elapsed,
                    midPoint,
                    t,
                    posA,
                    posB,
                    flipAngle,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    itemTransform = resource.transform;
                                        startPos = itemTransform.position.$clone();
                                        elapsed = 0.0;
                                        midPoint = (startPos.$clone().add( targetPos )).clone().scale( 0.5 );
                                        midPoint.y += 1.0;
                                        itemTransform.SetParent(null);
                                        Audio.AudioService.Instance.TryPlayEffect$1(this._addSound);
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsed / duration));
                                        posA = new pc.Vec3().lerp( startPos, midPoint, t );
                                        posB = new pc.Vec3().lerp( midPoint, targetPos, t );
                                        itemTransform.position = new pc.Vec3().lerp( posA, posB, t );
                                        flipAngle = pc.math.lerp(0.0, 180.0, t);
                                        itemTransform.rotation = new pc.Quat().setFromEulerAngles_Unity( flipAngle, 0.0, 0.0 );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    itemTransform.position = targetPos.$clone();
                                        itemTransform.rotation = pc.Quat.IDENTITY.clone();
                                        this._money.Withdraw(4, 0.5);
                                        this.Price = (this.Price - 4) | 0;
                                        DG.Tweening.DOVirtual.Int(((this.Price + 4) | 0), this.Price, 0.5, Bridge.fn.cacheBind(this, this.UpdateVisuals));
                                        resource.Release();
                                        if (this.IsOpened && isLast) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 5: {
                                    this.IsOpened = true;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.55);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    this.InvokeTriggered();
                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(Extensions.TweenExtensions.DoPopDown$1(this.transform));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
                                    $step = 8;
                                    continue;
                                }
                                case 8: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Progression.BuyZone.ThrowCoinArc end.*/

            /*Progression.BuyZone.UpdateVisuals start.*/
            UpdateVisuals: function (value) {
if ( TRACE ) { TRACE( "Progression.BuyZone#UpdateVisuals", this ); }

                this._priceText.SetText$3("{0}", value);
                this._fillBar.SetProgress(1.0 - value / this._startPrice);
            },
            /*Progression.BuyZone.UpdateVisuals end.*/


        }
    });
    /*Progression.BuyZone end.*/

    /*Progression.ItemPickupTrigger start.*/
    Bridge.define("Progression.ItemPickupTrigger", {
        inherits: [Progression.GameTrigger],
        fields: {
            _pickup: null,
            _lastPickUpTime: 0
        },
        methods: {
            /*Progression.ItemPickupTrigger.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Progression.ItemPickupTrigger#Update", this ); }

                if (this._pickup.LastPickupTime > this._lastPickUpTime) {
                    this.InvokeTriggered();
                    UnityEngine.Object.Destroy(this);
                }
            },
            /*Progression.ItemPickupTrigger.Update end.*/


        }
    });
    /*Progression.ItemPickupTrigger end.*/

    /*QuestSystem.BuyZoneQuest start.*/
    Bridge.define("QuestSystem.BuyZoneQuest", {
        inherits: [QuestSystem.Quest],
        fields: {
            _buyZone: null
        },
        methods: {
            /*QuestSystem.BuyZoneQuest.Begin start.*/
            Begin: function () {
if ( TRACE ) { TRACE( "QuestSystem.BuyZoneQuest#Begin", this ); }

                QuestSystem.Quest.prototype.Begin.call(this);
                this._buyZone.addTriggered(Bridge.fn.cacheBind(this, this.OnBought));
            },
            /*QuestSystem.BuyZoneQuest.Begin end.*/

            /*QuestSystem.BuyZoneQuest.OnBought start.*/
            OnBought: function () {
if ( TRACE ) { TRACE( "QuestSystem.BuyZoneQuest#OnBought", this ); }

                this._buyZone.removeTriggered(Bridge.fn.cacheBind(this, this.OnBought));
                this.InvokeCompleted();
            },
            /*QuestSystem.BuyZoneQuest.OnBought end.*/


        }
    });
    /*QuestSystem.BuyZoneQuest end.*/

    /*QuestSystem.TakeFromStackQuest start.*/
    Bridge.define("QuestSystem.TakeFromStackQuest", {
        inherits: [QuestSystem.Quest],
        fields: {
            _pickup: null
        },
        methods: {
            /*QuestSystem.TakeFromStackQuest.Begin start.*/
            Begin: function () {
if ( TRACE ) { TRACE( "QuestSystem.TakeFromStackQuest#Begin", this ); }

                QuestSystem.Quest.prototype.Begin.call(this);
                if (UnityEngine.Time.time - this._pickup.LastPickupTime < 0.5) {
                    this.OnPickedUp();
                } else {
                    this._pickup.addPickedUp(Bridge.fn.cacheBind(this, this.OnPickedUp));
                }
            },
            /*QuestSystem.TakeFromStackQuest.Begin end.*/

            /*QuestSystem.TakeFromStackQuest.OnPickedUp start.*/
            OnPickedUp: function () {
if ( TRACE ) { TRACE( "QuestSystem.TakeFromStackQuest#OnPickedUp", this ); }

                this._pickup.removePickedUp(Bridge.fn.cacheBind(this, this.OnPickedUp));
                this.InvokeCompleted();
            },
            /*QuestSystem.TakeFromStackQuest.OnPickedUp end.*/


        }
    });
    /*QuestSystem.TakeFromStackQuest end.*/

    /*QuestSystem.TakeMoneyQuest start.*/
    Bridge.define("QuestSystem.TakeMoneyQuest", {
        inherits: [QuestSystem.Quest],
        fields: {
            _pickup: null
        },
        methods: {
            /*QuestSystem.TakeMoneyQuest.Begin start.*/
            Begin: function () {
if ( TRACE ) { TRACE( "QuestSystem.TakeMoneyQuest#Begin", this ); }

                QuestSystem.Quest.prototype.Begin.call(this);
                this._pickup.addTriggered(Bridge.fn.cacheBind(this, this.OnMoneyPickedUp));
            },
            /*QuestSystem.TakeMoneyQuest.Begin end.*/

            /*QuestSystem.TakeMoneyQuest.OnMoneyPickedUp start.*/
            OnMoneyPickedUp: function () {
if ( TRACE ) { TRACE( "QuestSystem.TakeMoneyQuest#OnMoneyPickedUp", this ); }

                this._pickup.removeTriggered(Bridge.fn.cacheBind(this, this.OnMoneyPickedUp));
                this.InvokeCompleted();
            },
            /*QuestSystem.TakeMoneyQuest.OnMoneyPickedUp end.*/


        }
    });
    /*QuestSystem.TakeMoneyQuest end.*/

    /*Scroller.SpriteScroller start.*/
    Bridge.define("Scroller.SpriteScroller", {
        inherits: [Scroller.Scroller],
        statics: {
            fields: {
                Offset: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Scroller.SpriteScroller#init", this ); }

                    this.Offset = UnityEngine.Shader.PropertyToID("_Offset");
                }
            }
        },
        methods: {
            /*Scroller.SpriteScroller.Scroll start.*/
            Scroll: function (material, value) {
if ( TRACE ) { TRACE( "Scroller.SpriteScroller#Scroll", this ); }

                material.SetVector(Scroller.SpriteScroller.Offset, UnityEngine.Vector4.FromVector2(value));
            },
            /*Scroller.SpriteScroller.Scroll end.*/


        }
    });
    /*Scroller.SpriteScroller end.*/

    /*Scroller.UvScroller start.*/
    Bridge.define("Scroller.UvScroller", {
        inherits: [Scroller.Scroller],
        methods: {
            /*Scroller.UvScroller.Scroll start.*/
            Scroll: function (material, value) {
if ( TRACE ) { TRACE( "Scroller.UvScroller#Scroll", this ); }

                material.mainTextureOffset = value.$clone();
            },
            /*Scroller.UvScroller.Scroll end.*/


        }
    });
    /*Scroller.UvScroller end.*/

    /*Upgrades.SpeedUpgradeData start.*/
    Bridge.define("Upgrades.SpeedUpgradeData", {
        inherits: [Upgrades.UpgradeData],
        fields: {
            MoveSpeed: 0,
            WaitTime: 0
        }
    });
    /*Upgrades.SpeedUpgradeData end.*/

    /*Utilities.Coroutines.CoroutineObject start.*/
    Bridge.define("Utilities.Coroutines.CoroutineObject", {
        inherits: [Utilities.Coroutines.CoroutineObjectBase],
        fields: {
            Routine: null
        },
        events: {
            Finished: null
        },
        ctors: {
            ctor: function (owner, routine) {
if ( TRACE ) { TRACE( "Utilities.Coroutines.CoroutineObject#ctor", this ); }

                this.$initialize();
                Utilities.Coroutines.CoroutineObjectBase.ctor.call(this);
                this.Owner = owner;
                this.Routine = routine;
            }
        },
        methods: {
            /*Utilities.Coroutines.CoroutineObject.Process start.*/
            Process: function () {
if ( TRACE ) { TRACE( "Utilities.Coroutines.CoroutineObject#Process", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.Routine();
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.Coroutine = null;
                                        !Bridge.staticEquals(this.Finished, null) ? this.Finished() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Utilities.Coroutines.CoroutineObject.Process end.*/

            /*Utilities.Coroutines.CoroutineObject.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Utilities.Coroutines.CoroutineObject#Start", this ); }

                this.Stop();
                this.Coroutine = this.Owner.Utilities$Coroutines$ICoroutineRunner$StartCoroutine(this.Process());
            },
            /*Utilities.Coroutines.CoroutineObject.Start end.*/


        }
    });
    /*Utilities.Coroutines.CoroutineObject end.*/

    /*Utilities.Coroutines.CoroutineObject$1 start.*/
    Bridge.define("Utilities.Coroutines.CoroutineObject$1", function (T) { return {
        inherits: [Utilities.Coroutines.CoroutineObjectBase],
        fields: {
            Routine: null
        },
        events: {
            Finished: null
        },
        ctors: {
            ctor: function (owner, routine) {
if ( TRACE ) { TRACE( "Utilities.Coroutines.CoroutineObject$1#ctor", this ); }

                this.$initialize();
                Utilities.Coroutines.CoroutineObjectBase.ctor.call(this);
                this.Owner = owner;
                this.Routine = routine;
            }
        },
        methods: {
            /*Utilities.Coroutines.CoroutineObject$1.Process start.*/
            Process: function (arg) {
if ( TRACE ) { TRACE( "Utilities.Coroutines.CoroutineObject$1#Process", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.Routine(Bridge.rValue(arg));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.Coroutine = null;
                                        !Bridge.staticEquals(this.Finished, null) ? this.Finished() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Utilities.Coroutines.CoroutineObject$1.Process end.*/

            /*Utilities.Coroutines.CoroutineObject$1.Start start.*/
            Start: function (arg) {
if ( TRACE ) { TRACE( "Utilities.Coroutines.CoroutineObject$1#Start", this ); }

                this.Stop();
                this.Coroutine = this.Owner.Utilities$Coroutines$ICoroutineRunner$StartCoroutine(this.Process(Bridge.rValue(arg)));
            },
            /*Utilities.Coroutines.CoroutineObject$1.Start end.*/


        }
    }; });
    /*Utilities.Coroutines.CoroutineObject$1 end.*/

    /*Utilities.Reactives.ReactiveProperty$1 start.*/
    Bridge.define("Utilities.Reactives.ReactiveProperty$1", function (T) { return {
        inherits: [Utilities.Reactives.IReadOnlyReactiveProperty$1(T)],
        fields: {
            _value: Bridge.getDefaultValue(T)
        },
        events: {
            ValueChanged: null
        },
        props: {
            Value: {
                get: function () {
if ( TRACE ) { TRACE( "Utilities.Reactives.ReactiveProperty$1#Value#get", this ); }

                    return Bridge.rValue(this._value);
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Utilities.Reactives.ReactiveProperty$1#Value#set", this ); }

                    if (!System.Collections.Generic.EqualityComparer$1(T).def.equals2(Bridge.rValue(this._value), Bridge.rValue(value))) {
                        this._value = Bridge.rValue(value);
                        !Bridge.staticEquals(this.ValueChanged, null) ? this.ValueChanged() : null;
                    }
                }
            }
        },
        alias: [
            "Value", "Utilities$Reactives$IReadOnlyReactiveProperty$1$" + Bridge.getTypeAlias(T) + "$Value",
            "addValueChanged", "Utilities$Reactives$IReadOnlyReactiveProperty$1$" + Bridge.getTypeAlias(T) + "$addValueChanged",
            "removeValueChanged", "Utilities$Reactives$IReadOnlyReactiveProperty$1$" + Bridge.getTypeAlias(T) + "$removeValueChanged"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Utilities.Reactives.ReactiveProperty$1#init", this ); }

                this._value = Bridge.getDefaultValue(T);
            },
            ctor: function () {
if ( TRACE ) { TRACE( "Utilities.Reactives.ReactiveProperty$1#ctor", this ); }

                this.$initialize();
                this._value = Bridge.getDefaultValue(T);
            },
            $ctor1: function (initialValue) {
if ( TRACE ) { TRACE( "Utilities.Reactives.ReactiveProperty$1#$ctor1", this ); }

                this.$initialize();
                this._value = Bridge.rValue(initialValue);
            }
        }
    }; });
    /*Utilities.Reactives.ReactiveProperty$1 end.*/

    /*VariableJoystick start.*/
    Bridge.define("VariableJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0,
            joystickType: 0,
            fixedPosition: null
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "VariableJoystick#init", this ); }

                this.fixedPosition = new UnityEngine.Vector2();
                this.moveThreshold = 1.0;
                this.joystickType = JoystickType.Fixed;
                this.fixedPosition = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*VariableJoystick.SetMode start.*/
            SetMode: function (joystickType) {
if ( TRACE ) { TRACE( "VariableJoystick#SetMode", this ); }

                this.joystickType = joystickType;
                if (joystickType === JoystickType.Fixed) {
                    this.background.anchoredPosition = this.fixedPosition.$clone();
                    this.background.gameObject.SetActive(true);
                } else {
                    this.background.gameObject.SetActive(false);
                }
            },
            /*VariableJoystick.SetMode end.*/

            /*VariableJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "VariableJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.fixedPosition = this.background.anchoredPosition.$clone();
                this.SetMode(this.joystickType);
            },
            /*VariableJoystick.Start end.*/

            /*VariableJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerDown", this ); }

                if (this.joystickType !== 0) {
                    this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                    this.background.gameObject.SetActive(true);
                }
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*VariableJoystick.OnPointerDown end.*/

            /*VariableJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerUp", this ); }

                if (this.joystickType !== 0) {
                    this.background.gameObject.SetActive(false);
                }
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*VariableJoystick.OnPointerUp end.*/

            /*VariableJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "VariableJoystick#HandleInput", this ); }

                if (this.joystickType === JoystickType.Dynamic && magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised.$clone(), radius.$clone(), cam);
            },
            /*VariableJoystick.HandleInput end.*/


        }
    });
    /*VariableJoystick end.*/

    /*GameResources.Bullet start.*/
    Bridge.define("GameResources.Bullet", {
        inherits: [Resource],
        fields: {
            _moveSpeed: null,
            _target: null,
            _isMoving: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameResources.Bullet#init", this ); }

                this._moveSpeed = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*GameResources.Bullet.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameResources.Bullet#Update", this ); }

                if (this._isMoving) {
                    this.transform.position = this.transform.position.$clone().add( this._moveSpeed.$clone().clone().scale( UnityEngine.Time.deltaTime ) );
                    if (this.transform.position.$clone().sub( this._target.InteractionPoint.position ).lengthSq() < 0.01) {
                        this._isMoving = false;
                        this._target.ProcessBullet(this);
                    }
                }
            },
            /*GameResources.Bullet.Update end.*/

            /*GameResources.Bullet.Move start.*/
            Move: function (nextPoint, speed) {
if ( TRACE ) { TRACE( "GameResources.Bullet#Move", this ); }

                this._isMoving = true;
                this._target = nextPoint;
                this._moveSpeed = (nextPoint.InteractionPoint.position.$clone().sub( this.transform.position )).clone().normalize().clone().scale( speed );
            },
            /*GameResources.Bullet.Move end.*/

            /*GameResources.Bullet.Stop start.*/
            Stop: function () {
if ( TRACE ) { TRACE( "GameResources.Bullet#Stop", this ); }

                this._isMoving = false;
            },
            /*GameResources.Bullet.Stop end.*/


        }
    });
    /*GameResources.Bullet end.*/

    /*LogResource start.*/
    Bridge.define("LogResource", {
        inherits: [Resource]
    });
    /*LogResource end.*/

    /*MoneyResource start.*/
    Bridge.define("MoneyResource", {
        inherits: [Resource],
        statics: {
            fields: {
                Price: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "MoneyResource#init", this ); }

                    this.Price = 4;
                }
            }
        }
    });
    /*MoneyResource end.*/

    /*Pools.ResourcePool start.*/
    Bridge.define("Pools.ResourcePool", {
        inherits: [UnityEngine.MonoBehaviour,Pools.IPool$1(Resource)],
        fields: {
            _prefab: null,
            _pool: null
        },
        props: {
            Type: {
                get: function () {
if ( TRACE ) { TRACE( "Pools.ResourcePool#Type#get", this ); }

                    return this._prefab.Type;
                }
            },
            CountActive: {
                get: function () {
if ( TRACE ) { TRACE( "Pools.ResourcePool#CountActive#get", this ); }

                    return this._pool.CountActive;
                }
            }
        },
        alias: ["Release", ["Pools$IPool$1$Resource$Release", "Pools$IPool$1$Release"]],
        methods: {
            /*Pools.ResourcePool.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Pools.ResourcePool#Awake", this ); }

                this._pool = new (Pools.ObjectPool$1(Resource))(Bridge.fn.cacheBind(this, this.Create));
            },
            /*Pools.ResourcePool.Awake end.*/

            /*Pools.ResourcePool.Get start.*/
            Get: function () {
if ( TRACE ) { TRACE( "Pools.ResourcePool#Get", this ); }

                var resource = this._pool.Get();
                resource.gameObject.SetActive(true);
                return resource;
            },
            /*Pools.ResourcePool.Get end.*/

            /*Pools.ResourcePool.Release start.*/
            Release: function (resource) {
if ( TRACE ) { TRACE( "Pools.ResourcePool#Release", this ); }

                resource.transform.SetParent(this.transform);
                resource.transform.localScale = new pc.Vec3( 1, 1, 1 );
                resource.gameObject.SetActive(false);
                this._pool.Release(resource);
            },
            /*Pools.ResourcePool.Release end.*/

            /*Pools.ResourcePool.Create start.*/
            Create: function () {
if ( TRACE ) { TRACE( "Pools.ResourcePool#Create", this ); }

                var resource = UnityEngine.Object.Instantiate$1(Resource, this._prefab, this.transform, true);
                resource.Construct(this);
                resource.gameObject.SetActive(false);
                return resource;
            },
            /*Pools.ResourcePool.Create end.*/


        }
    });
    /*Pools.ResourcePool end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine.UI","GameResources","UnityEngine","UnityEngine.EventSystems","System.Collections","Characters","PackShots","Pools","TMPro","Conveyors","Inputs","Progression","System.Collections.Generic","Utilities.Coroutines","Upgrades","Hero","Trucks","SpriteVfx","QuestSystem","Factories","DG.Tweening","System.Text","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options","DefaultNamespace","Audio"];

    /*AxisOptions start.*/
    $m("AxisOptions", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":AxisOptions,"sn":"Both","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":AxisOptions,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":AxisOptions,"sn":"Vertical","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}}]}; }, $n);
    /*AxisOptions end.*/

    /*BulletBubble start.*/
    $m("BulletBubble", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ValueChanged","t":8,"pi":[{"n":"resourceType","pt":ResourceType,"ps":0}],"sn":"ValueChanged","rt":$n[0].Void,"p":[ResourceType]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_glowImage","t":4,"rt":$n[1].Image,"sn":"_glowImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_storage","t":4,"rt":$n[2].Storage,"sn":"_storage"},{"a":1,"n":"_vibrating","t":4,"rt":$n[0].Boolean,"sn":"_vibrating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*BulletBubble end.*/

    /*ColorZone start.*/
    $m("ColorZone", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[3].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[3].Collider]},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[3].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[3].Collider]},{"a":1,"n":"SetColor","t":8,"pi":[{"n":"active","pt":$n[0].Boolean,"ps":0}],"sn":"SetColor","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"IsActive","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsActive","t":8,"rt":$n[0].Boolean,"fg":"IsActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsActive","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsActive"},"fn":"IsActive"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_elements","t":4,"rt":System.Array.type(ColorZoneElement),"sn":"_elements"},{"a":1,"backing":true,"n":"<IsActive>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*ColorZone end.*/

    /*ColorZoneElement start.*/
    $m("ColorZoneElement", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ActiveColor","t":4,"rt":$n[3].Color,"sn":"ActiveColor"},{"a":2,"n":"InactiveColor","t":4,"rt":$n[3].Color,"sn":"InactiveColor"},{"a":2,"n":"Renderer","t":4,"rt":$n[3].Renderer,"sn":"Renderer"}]}; }, $n);
    /*ColorZoneElement end.*/

    /*DragToMove start.*/
    $m("DragToMove", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":1,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_colorZone","t":4,"rt":ColorZone,"sn":"_colorZone"},{"a":1,"n":"_idleTime","t":4,"rt":$n[0].Single,"sn":"_idleTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_idleTimeToShow","t":4,"rt":$n[0].Single,"sn":"_idleTimeToShow","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick"},{"a":1,"n":"_visible","t":4,"rt":$n[0].Boolean,"sn":"_visible","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DragToMove end.*/

    /*DynamicJoystick start.*/
    $m("DynamicJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[3].Vector2,"ps":1},{"n":"radius","pt":$n[3].Vector2,"ps":2},{"n":"cam","pt":$n[3].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[3].Vector2,$n[3].Vector2,$n[3].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    $m("FixedJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*FixedJoystick end.*/

    /*FixedWidthCamera start.*/
    $m("FixedWidthCamera", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Camera)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateCameraSize","t":8,"pi":[{"n":"width","pt":$n[0].Int32,"ps":0},{"n":"height","pt":$n[0].Int32,"ps":1}],"sn":"UpdateCameraSize","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"_camera","t":4,"rt":$n[3].Camera,"sn":"_camera"},{"a":1,"n":"_previousResolution","t":4,"rt":$n[3].Vector2Int,"sn":"_previousResolution"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_targetHeight","t":4,"rt":$n[0].Single,"sn":"_targetHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_targetWidth","t":4,"rt":$n[0].Single,"sn":"_targetWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*FixedWidthCamera end.*/

    /*FloatingJoystick start.*/
    $m("FloatingJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*FloatingJoystick end.*/

    /*GameEnd start.*/
    $m("GameEnd", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Fail","t":8,"sn":"Fail","rt":$n[0].Void},{"a":1,"n":"FailRoutine","t":8,"sn":"FailRoutine","rt":$n[5].IEnumerator},{"a":2,"n":"Win","t":8,"sn":"Win","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_borderToDisable","t":4,"rt":$n[3].GameObject,"sn":"_borderToDisable"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_borderToEnable","t":4,"rt":$n[3].GameObject,"sn":"_borderToEnable"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_explosionPoint","t":4,"rt":$n[3].Transform,"sn":"_explosionPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_explosionSound","t":4,"rt":$n[3].AudioClip,"sn":"_explosionSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_failSound","t":4,"rt":$n[3].AudioClip,"sn":"_failSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_failZombiePrefab","t":4,"rt":$n[6].FailZombie,"sn":"_failZombiePrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_glen","t":4,"rt":$n[6].Glen,"sn":"_glen"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_masonBitePoint","t":4,"rt":$n[3].Transform,"sn":"_masonBitePoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_masonZombie","t":4,"rt":$n[6].ZombieMason,"sn":"_masonZombie"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_packShot","t":4,"rt":$n[7].PackShotChooser,"sn":"_packShot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_toDisable","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"_toDisable"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_zombieSpawnPoints","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"_zombieSpawnPoints"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_zombieTransition","t":4,"rt":ZombieTransition,"sn":"_zombieTransition"}]}; }, $n);
    /*GameEnd end.*/

    /*ItemAutoConstruct start.*/
    $m("ItemAutoConstruct", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pools","t":4,"rt":$n[8].ResourcesPools,"sn":"_pools"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_resource","t":4,"rt":Resource,"sn":"_resource"}]}; }, $n);
    /*ItemAutoConstruct end.*/

    /*Joystick start.*/
    $m("Joystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"DisableForFrame","t":8,"sn":"DisableForFrame","rt":$n[5].IEnumerator},{"a":2,"n":"Enable","t":8,"pi":[{"n":"b","pt":$n[0].Boolean,"ps":0}],"sn":"Enable","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"FormatInput","t":8,"sn":"FormatInput","rt":$n[0].Void},{"v":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[3].Vector2,"ps":1},{"n":"radius","pt":$n[3].Vector2,"ps":2},{"n":"cam","pt":$n[3].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[3].Vector2,$n[3].Vector2,$n[3].Camera]},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"v":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"v":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"a":3,"n":"ScreenPointToAnchoredPosition","t":8,"pi":[{"n":"screenPosition","pt":$n[3].Vector2,"ps":0}],"sn":"ScreenPointToAnchoredPosition","rt":$n[3].Vector2,"p":[$n[3].Vector2]},{"a":1,"n":"SnapFloat","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"snapAxis","pt":AxisOptions,"ps":1}],"sn":"SnapFloat","rt":$n[0].Single,"p":[$n[0].Single,AxisOptions],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"AxisOptions","t":16,"rt":AxisOptions,"g":{"a":2,"n":"get_AxisOptions","t":8,"rt":AxisOptions,"fg":"AxisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},"s":{"a":2,"n":"set_AxisOptions","t":8,"p":[AxisOptions],"rt":$n[0].Void,"fs":"AxisOptions"},"fn":"AxisOptions"},{"a":2,"n":"DeadZone","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_DeadZone","t":8,"rt":$n[0].Single,"fg":"DeadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_DeadZone","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"DeadZone"},"fn":"DeadZone"},{"a":2,"n":"Direction","t":16,"rt":$n[3].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[3].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"HandleRange","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HandleRange","t":8,"rt":$n[0].Single,"fg":"HandleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_HandleRange","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"HandleRange"},"fn":"HandleRange"},{"a":2,"n":"Horizontal","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Horizontal","t":8,"rt":$n[0].Single,"fg":"Horizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Horizontal"},{"a":2,"n":"Instance","is":true,"t":16,"rt":Joystick,"g":{"a":2,"n":"get_Instance","t":8,"rt":Joystick,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[Joystick],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"SnapX","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapX","t":8,"rt":$n[0].Boolean,"fg":"SnapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapX","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapX"},"fn":"SnapX"},{"a":2,"n":"SnapY","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapY","t":8,"rt":$n[0].Boolean,"fg":"SnapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapY","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapY"},"fn":"SnapY"},{"a":2,"n":"Vertical","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Vertical","t":8,"rt":$n[0].Single,"fg":"Vertical","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Vertical"},{"a":2,"n":"input","t":16,"rt":$n[3].Vector2,"g":{"a":2,"n":"get_input","t":8,"rt":$n[3].Vector2,"fg":"input"},"s":{"a":1,"n":"set_input","t":8,"p":[$n[3].Vector2],"rt":$n[0].Void,"fs":"input"},"fn":"input"},{"a":1,"n":"__Property__Initializer__input","t":4,"rt":$n[3].Vector2,"sn":"__Property__Initializer__input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axisOptions","t":4,"rt":AxisOptions,"sn":"axisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"background","t":4,"rt":$n[3].RectTransform,"sn":"background"},{"a":1,"n":"baseRect","t":4,"rt":$n[3].RectTransform,"sn":"baseRect"},{"a":1,"n":"cam","t":4,"rt":$n[3].Camera,"sn":"cam"},{"a":1,"n":"canvas","t":4,"rt":$n[3].Canvas,"sn":"canvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadZone","t":4,"rt":$n[0].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handleRange","t":4,"rt":$n[0].Single,"sn":"handleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handleRect","t":4,"rt":$n[3].RectTransform,"sn":"handleRect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapX","t":4,"rt":$n[0].Boolean,"sn":"snapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapY","t":4,"rt":$n[0].Boolean,"sn":"snapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":Joystick,"sn":"Instance"},{"a":1,"backing":true,"n":"<input>k__BackingField","t":4,"rt":$n[3].Vector2,"sn":"input"}]}; }, $n);
    /*Joystick end.*/

    /*JoystickType start.*/
    $m("JoystickType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dynamic","is":true,"t":4,"rt":JoystickType,"sn":"Dynamic","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Fixed","is":true,"t":4,"rt":JoystickType,"sn":"Fixed","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Floating","is":true,"t":4,"rt":JoystickType,"sn":"Floating","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}}]}; }, $n);
    /*JoystickType end.*/

    /*LogResource start.*/
    $m("LogResource", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*LogResource end.*/

    /*MainCamera start.*/
    $m("MainCamera", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"Show","t":8,"pi":[{"n":"target","pt":$n[3].Transform,"ps":0},{"n":"time","pt":$n[0].Single,"ps":1}],"sn":"Show","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":1,"n":"ShowRoutine","t":8,"pi":[{"n":"target","pt":$n[3].Transform,"ps":0},{"n":"time","pt":$n[0].Single,"ps":1}],"sn":"ShowRoutine","rt":$n[5].IEnumerator,"p":[$n[3].Transform,$n[0].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_defaultTarget","t":4,"rt":$n[3].Transform,"sn":"_defaultTarget"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_flyCurve","t":4,"rt":pc.AnimationCurve,"sn":"_flyCurve"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_flyTime","t":4,"rt":$n[0].Single,"sn":"_flyTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_isTransitioning","t":4,"rt":$n[0].Boolean,"sn":"_isTransitioning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_offset","t":4,"rt":$n[3].Vector3,"sn":"_offset"},{"a":1,"n":"_showRoutine","t":4,"rt":$n[3].Coroutine,"sn":"_showRoutine"},{"a":1,"n":"_target","t":4,"rt":$n[3].Transform,"sn":"_target"},{"a":1,"n":"_transitionStartPosition","t":4,"rt":$n[3].Vector3,"sn":"_transitionStartPosition"},{"a":1,"n":"_transitionTime","t":4,"rt":$n[0].Single,"sn":"_transitionTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MainCamera end.*/

    /*Money start.*/
    $m("Money", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddAmount","t":8,"pi":[{"n":"addition","pt":$n[0].Int32,"ps":0}],"sn":"AddAmount","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"UpdateText","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"UpdateText","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"Withdraw","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0},{"n":"duration","dv":1.0,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"Withdraw","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Single]},{"a":1,"n":"_amount","t":4,"rt":$n[0].Int32,"sn":"_amount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_text","t":4,"rt":$n[9].TMP_Text,"sn":"_text"},{"a":1,"n":"_visualAmount","t":4,"rt":$n[0].Int32,"sn":"_visualAmount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Money end.*/

    /*MoneyPickup start.*/
    $m("MoneyPickup", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[3].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[3].Collider]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_clip","t":4,"rt":$n[3].AudioClip,"sn":"_clip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_items","t":4,"rt":System.Array.type(MoneyResource),"sn":"_items"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_money","t":4,"rt":Money,"sn":"_money"}]}; }, $n);
    /*MoneyPickup end.*/

    /*MoneyResource start.*/
    $m("MoneyResource", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Price","is":true,"t":4,"rt":$n[0].Int32,"sn":"Price","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*MoneyResource end.*/

    /*PointsPlacer start.*/
    $m("PointsPlacer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_offset","t":4,"rt":$n[3].Vector3,"sn":"_offset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_parent","t":4,"rt":$n[3].Transform,"sn":"_parent"}]}; }, $n);
    /*PointsPlacer end.*/

    /*Resource start.*/
    $m("Resource", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Construct","t":8,"pi":[{"n":"pool","pt":$n[8].IPool$1(Resource),"ps":0}],"sn":"Construct","rt":$n[0].Void,"p":[$n[8].IPool$1(Resource)]},{"a":2,"n":"Release","t":8,"sn":"Release","rt":$n[0].Void},{"a":2,"n":"Type","t":16,"rt":ResourceType,"g":{"a":2,"n":"get_Type","t":8,"rt":ResourceType,"fg":"Type","box":function ($v) { return Bridge.box($v, ResourceType, System.Enum.toStringFn(ResourceType));}},"fn":"Type"},{"a":1,"n":"_pool","t":4,"rt":$n[8].IPool$1(Resource),"sn":"_pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_type","t":4,"rt":ResourceType,"sn":"_type","box":function ($v) { return Bridge.box($v, ResourceType, System.Enum.toStringFn(ResourceType));}}]}; }, $n);
    /*Resource end.*/

    /*ResourceType start.*/
    $m("ResourceType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"MasonBullet","is":true,"t":4,"rt":ResourceType,"sn":"MasonBullet","box":function ($v) { return Bridge.box($v, ResourceType, System.Enum.toStringFn(ResourceType));}},{"a":2,"n":"Money","is":true,"t":4,"rt":ResourceType,"sn":"Money","box":function ($v) { return Bridge.box($v, ResourceType, System.Enum.toStringFn(ResourceType));}},{"a":2,"n":"WarehouseBullet","is":true,"t":4,"rt":ResourceType,"sn":"WarehouseBullet","box":function ($v) { return Bridge.box($v, ResourceType, System.Enum.toStringFn(ResourceType));}}]}; }, $n);
    /*ResourceType end.*/

    /*Scenario start.*/
    $m("Scenario", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Fail","t":8,"sn":"Fail","rt":$n[0].Void},{"a":1,"n":"HandleBottomConveyorStep","t":8,"sn":"HandleBottomConveyorStep","rt":$n[0].Void},{"a":1,"n":"HandleConveyorClickStep","t":8,"sn":"HandleConveyorClickStep","rt":$n[0].Void},{"a":1,"n":"OnBulletReceived","t":8,"pi":[{"n":"conveyor","pt":$n[10].InteractiveConveyor,"ps":0}],"sn":"OnBulletReceived","rt":$n[0].Void,"p":[$n[10].InteractiveConveyor]},{"a":1,"n":"OnConveyorSelected","t":8,"pi":[{"n":"_","pt":$n[10].InteractiveConveyor,"ps":0}],"sn":"OnConveyorSelected","rt":$n[0].Void,"p":[$n[10].InteractiveConveyor]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bulletsPool","t":4,"rt":$n[8].ResourcePool,"sn":"_bulletsPool"},{"a":1,"n":"_bulletsReceivedInOpenedConveyors","t":4,"rt":$n[0].Int32,"sn":"_bulletsReceivedInOpenedConveyors","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_closedConveyor","t":4,"rt":$n[10].InteractiveConveyor,"sn":"_closedConveyor"},{"a":1,"n":"_conveyorSelectedOnce","t":4,"rt":$n[0].Boolean,"sn":"_conveyorSelectedOnce","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_conveyorSelector","t":4,"rt":$n[11].ConveyorSelector,"sn":"_conveyorSelector"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_conveyors","t":4,"rt":System.Array.type(Conveyors.InteractiveConveyor),"sn":"_conveyors"},{"a":1,"n":"_finished","t":4,"rt":$n[0].Boolean,"sn":"_finished","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gameEnd","t":4,"rt":GameEnd,"sn":"_gameEnd"},{"a":1,"n":"_lastSelectTime","t":4,"rt":$n[0].Single,"sn":"_lastSelectTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_stepIndex","t":4,"rt":$n[0].Int32,"sn":"_stepIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_storage","t":4,"rt":$n[2].Storage,"sn":"_storage"},{"a":1,"n":"_timer","t":4,"rt":$n[0].Single,"sn":"_timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unlockPoint","t":4,"rt":$n[10].InteractiveConveyorUnlockPoint,"sn":"_unlockPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_zombieManager","t":4,"rt":$n[6].ZombieManager,"sn":"_zombieManager"}]}; }, $n);
    /*Scenario end.*/

    /*ShaderFillBar start.*/
    $m("ShaderFillBar", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":2,"n":"SetProgress","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"SetProgress","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"FillAmount","is":true,"t":4,"rt":$n[0].Int32,"sn":"FillAmount","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_from","t":4,"rt":$n[0].Single,"sn":"_from","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_material","t":4,"rt":$n[3].Material,"sn":"_material"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_renderer","t":4,"rt":$n[3].Renderer,"sn":"_renderer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_to","t":4,"rt":$n[0].Single,"sn":"_to","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ShaderFillBar end.*/

    /*SpriteFlash start.*/
    $m("SpriteFlash", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"DisableAfterTime","t":8,"sn":"DisableAfterTime","rt":$n[5].IEnumerator},{"a":1,"n":"OnConveyorSelected","t":8,"pi":[{"n":"_","pt":$n[10].InteractiveConveyor,"ps":0}],"sn":"OnConveyorSelected","rt":$n[0].Void,"p":[$n[10].InteractiveConveyor]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_alwaysOnAfterClick","t":4,"rt":$n[0].Boolean,"sn":"_alwaysOnAfterClick","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_coroutine","t":4,"rt":$n[3].Coroutine,"sn":"_coroutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_duration","t":4,"rt":$n[0].Single,"sn":"_duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_selector","t":4,"rt":$n[11].ConveyorSelector,"sn":"_selector"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spriteRenderer","t":4,"rt":$n[3].SpriteRenderer,"sn":"_spriteRenderer"}]}; }, $n);
    /*SpriteFlash end.*/

    /*StackType start.*/
    $m("StackType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Money","is":true,"t":4,"rt":StackType,"sn":"Money","box":function ($v) { return Bridge.box($v, StackType, System.Enum.toStringFn(StackType));}},{"a":2,"n":"Wood","is":true,"t":4,"rt":StackType,"sn":"Wood","box":function ($v) { return Bridge.box($v, StackType, System.Enum.toStringFn(StackType));}}]}; }, $n);
    /*StackType end.*/

    /*Unlockable start.*/
    $m("Unlockable", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Activate","t":8,"pi":[{"n":"targetScale","pt":$n[3].Vector3,"ps":0}],"sn":"Activate","rt":$n[0].Void,"p":[$n[3].Vector3]},{"a":1,"n":"ActivateAfterDelay","t":8,"pi":[{"n":"targetScale","pt":$n[3].Vector3,"ps":0}],"sn":"ActivateAfterDelay","rt":$n[5].IEnumerator,"p":[$n[3].Vector3]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"Unlock","t":8,"sn":"Unlock","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animationTime","t":4,"rt":$n[0].Single,"sn":"_animationTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_delay","t":4,"rt":$n[0].Single,"sn":"_delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_scaleOnlyByHeight","t":4,"rt":$n[0].Boolean,"sn":"_scaleOnlyByHeight","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_sound","t":4,"rt":$n[3].AudioClip,"sn":"_sound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_toEnable","t":4,"rt":$n[3].GameObject,"sn":"_toEnable"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_trigger","t":4,"rt":$n[12].GameTrigger,"sn":"_trigger"},{"a":1,"n":"_waitDelay","t":4,"rt":$n[3].WaitForSeconds,"sn":"_waitDelay"}]}; }, $n);
    /*Unlockable end.*/

    /*VariableJoystick start.*/
    $m("VariableJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[3].Vector2,"ps":1},{"n":"radius","pt":$n[3].Vector2,"ps":2},{"n":"cam","pt":$n[3].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[3].Vector2,$n[3].Vector2,$n[3].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"a":2,"n":"SetMode","t":8,"pi":[{"n":"joystickType","pt":JoystickType,"ps":0}],"sn":"SetMode","rt":$n[0].Void,"p":[JoystickType]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"a":1,"n":"fixedPosition","t":4,"rt":$n[3].Vector2,"sn":"fixedPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickType","t":4,"rt":JoystickType,"sn":"joystickType","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*VariableJoystick end.*/

    /*Wheel start.*/
    $m("Wheel", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Rotate","t":8,"pi":[{"n":"rotation","pt":$n[0].Single,"ps":0}],"sn":"Rotate","rt":$n[0].Void,"p":[$n[0].Single]}]}; }, $n);
    /*Wheel end.*/

    /*ZombieTransition start.*/
    $m("ZombieTransition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ShowTransition","t":8,"sn":"ShowTransition","rt":$n[0].Void},{"a":1,"n":"TransitionRoutine","t":8,"sn":"TransitionRoutine","rt":$n[5].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_canvasRect","t":4,"rt":$n[3].RectTransform,"sn":"_canvasRect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_children","t":4,"rt":System.Array.type(UnityEngine.UI.Image),"sn":"_children"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_imagePrefab","t":4,"rt":$n[3].GameObject,"sn":"_imagePrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_packShot","t":4,"rt":$n[7].PackShotChooser,"sn":"_packShot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_randomOffset","t":4,"rt":$n[3].Vector2,"sn":"_randomOffset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spacing","t":4,"rt":$n[3].Vector2,"sn":"_spacing"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_transitionDuration","t":4,"rt":$n[0].Single,"sn":"_transitionDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_zombieManager","t":4,"rt":$n[6].ZombieManager,"sn":"_zombieManager"}]}; }, $n);
    /*ZombieTransition end.*/

    /*Utilities.AutoRotate start.*/
    $m("Utilities.AutoRotate", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Disable","t":8,"sn":"Disable","rt":$n[0].Void},{"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_enabled","t":4,"rt":$n[0].Boolean,"sn":"_enabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rotationSpeed","t":4,"rt":$n[3].Vector3,"sn":"_rotationSpeed"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_space","t":4,"rt":$n[3].Space,"sn":"_space","box":function ($v) { return Bridge.box($v, UnityEngine.Space, System.Enum.toStringFn(UnityEngine.Space));}}]}; }, $n);
    /*Utilities.AutoRotate end.*/

    /*Utilities.BiDictionary$2 start.*/
    $m("Utilities.BiDictionary$2", function (TFirst, TSecond) { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Add","t":8,"pi":[{"n":"first","pt":TFirst,"ps":0},{"n":"second","pt":TSecond,"ps":1}],"sn":"Add","rt":$n[0].Void,"p":[TFirst,TSecond]},{"a":2,"n":"TryGetByFirst","t":8,"pi":[{"n":"first","pt":TFirst,"ps":0},{"n":"second","out":true,"pt":TSecond,"ps":1}],"sn":"TryGetByFirst","rt":$n[0].Boolean,"p":[TFirst,TSecond],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TryGetBySecond","t":8,"pi":[{"n":"second","pt":TSecond,"ps":0},{"n":"first","out":true,"pt":TFirst,"ps":1}],"sn":"TryGetBySecond","rt":$n[0].Boolean,"p":[TSecond,TFirst],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_firstToSecond","t":4,"rt":$n[13].IDictionary$2(TFirst,TSecond),"sn":"_firstToSecond","ro":true},{"a":1,"n":"_secondToFirst","t":4,"rt":$n[13].IDictionary$2(TSecond,TFirst),"sn":"_secondToFirst","ro":true}]}; }, $n);
    /*Utilities.BiDictionary$2 end.*/

    /*Utilities.ClampedPercentageValue start.*/
    $m("Utilities.ClampedPercentageValue", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Value","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Value","t":8,"rt":$n[0].Single,"fg":"Value","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Value"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 100.0)],"a":1,"n":"_percent","t":4,"rt":$n[0].Single,"sn":"_percent","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Utilities.ClampedPercentageValue end.*/

    /*Utilities.DontDestroy start.*/
    $m("Utilities.DontDestroy", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void}]}; }, $n);
    /*Utilities.DontDestroy end.*/

    /*Utilities.ICloneable$1 start.*/
    $m("Utilities.ICloneable$1", function (T) { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Clone","t":8,"pi":[{"n":"original","pt":T,"ps":0}],"sn":"Utilities$ICloneable$1$" + Bridge.getTypeAlias(T) + "$Clone","rt":T,"p":[T]}]}; }, $n);
    /*Utilities.ICloneable$1 end.*/

    /*Utilities.MathParabola start.*/
    $m("Utilities.MathParabola", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":1,"n":"Func","is":true,"t":8,"pi":[{"n":"x","pt":$n[0].Single,"ps":0},{"n":"height","pt":$n[0].Single,"ps":1}],"sn":"Func","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Parabola","is":true,"t":8,"pi":[{"n":"start","pt":$n[3].Vector2,"ps":0},{"n":"end","pt":$n[3].Vector2,"ps":1},{"n":"height","pt":$n[0].Single,"ps":2},{"n":"t","pt":$n[0].Single,"ps":3}],"sn":"Parabola","rt":$n[3].Vector2,"p":[$n[3].Vector2,$n[3].Vector2,$n[0].Single,$n[0].Single]},{"a":2,"n":"Parabola","is":true,"t":8,"pi":[{"n":"start","pt":$n[3].Vector3,"ps":0},{"n":"end","pt":$n[3].Vector3,"ps":1},{"n":"height","pt":$n[0].Single,"ps":2},{"n":"t","pt":$n[0].Single,"ps":3}],"sn":"Parabola$1","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*Utilities.MathParabola end.*/

    /*Utilities.RandomHelper start.*/
    $m("Utilities.RandomHelper", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Check","is":true,"t":8,"pi":[{"n":"chance","pt":$n[0].Single,"ps":0}],"sn":"Check","rt":$n[0].Boolean,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Utilities.RandomHelper end.*/

    /*Utilities.Tag.TagAttribute start.*/
    $m("Utilities.Tag.TagAttribute", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*Utilities.Tag.TagAttribute end.*/

    /*Utilities.Reactives.IReadOnlyReactiveProperty$1 start.*/
    $m("Utilities.Reactives.IReadOnlyReactiveProperty$1", function (T) { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Value","t":16,"rt":T,"g":{"ab":true,"a":2,"n":"get_Value","t":8,"rt":T,"fg":"\"Utilities$Reactives$IReadOnlyReactiveProperty$1$\" + Bridge.getTypeAlias(T) + \"$Value\""},"fn":"\"Utilities$Reactives$IReadOnlyReactiveProperty$1$\" + Bridge.getTypeAlias(T) + \"$Value\""},{"ab":true,"a":2,"n":"ValueChanged","t":2,"ad":{"ab":true,"a":2,"n":"add_ValueChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"Utilities$Reactives$IReadOnlyReactiveProperty$1$" + Bridge.getTypeAlias(T) + "$addValueChanged","rt":$n[0].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_ValueChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"Utilities$Reactives$IReadOnlyReactiveProperty$1$" + Bridge.getTypeAlias(T) + "$removeValueChanged","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<Value>k__BackingField","t":4,"rt":T,"sn":"\"Utilities$Reactives$IReadOnlyReactiveProperty$1$\" + Bridge.getTypeAlias(T) + \"$Value\""}]}; }, $n);
    /*Utilities.Reactives.IReadOnlyReactiveProperty$1 end.*/

    /*Utilities.Reactives.ReactiveProperty$1 start.*/
    $m("Utilities.Reactives.ReactiveProperty$1", function (T) { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[T],"pi":[{"n":"initialValue","pt":T,"ps":0}],"sn":"$ctor1"},{"a":2,"n":"Value","t":16,"rt":T,"g":{"a":2,"n":"get_Value","t":8,"rt":T,"fg":"Value"},"s":{"a":2,"n":"set_Value","t":8,"p":[T],"rt":$n[0].Void,"fs":"Value"},"fn":"Value"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_value","t":4,"rt":T,"sn":"_value"},{"a":2,"n":"ValueChanged","t":2,"ad":{"a":2,"n":"add_ValueChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addValueChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_ValueChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeValueChanged","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*Utilities.Reactives.ReactiveProperty$1 end.*/

    /*Utilities.InterfaceRequired.InterfaceRequiredAttribute start.*/
    $m("Utilities.InterfaceRequired.InterfaceRequiredAttribute", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Type],"pi":[{"n":"interfaceType","pt":$n[0].Type,"ps":0}],"sn":"ctor"},{"a":2,"n":"InterfaceType","t":16,"rt":$n[0].Type,"g":{"a":2,"n":"get_InterfaceType","t":8,"rt":$n[0].Type,"fg":"InterfaceType"},"fn":"InterfaceType"},{"a":1,"backing":true,"n":"<InterfaceType>k__BackingField","t":4,"rt":$n[0].Type,"sn":"InterfaceType"}]}; }, $n);
    /*Utilities.InterfaceRequired.InterfaceRequiredAttribute end.*/

    /*Utilities.Coroutines.CoroutineObject start.*/
    $m("Utilities.Coroutines.CoroutineObject", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[14].ICoroutineRunner,Function],"pi":[{"n":"owner","pt":$n[14].ICoroutineRunner,"ps":0},{"n":"routine","pt":Function,"ps":1}],"sn":"ctor"},{"a":1,"n":"Process","t":8,"sn":"Process","rt":$n[5].IEnumerator},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Routine","t":16,"rt":Function,"g":{"a":1,"n":"get_Routine","t":8,"rt":Function,"fg":"Routine"},"fn":"Routine"},{"ov":true,"a":2,"n":"Finished","t":2,"ad":{"ov":true,"a":2,"n":"add_Finished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addFinished","rt":$n[0].Void,"p":[Function]},"r":{"ov":true,"a":2,"n":"remove_Finished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeFinished","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<Routine>k__BackingField","t":4,"rt":Function,"sn":"Routine"}]}; }, $n);
    /*Utilities.Coroutines.CoroutineObject end.*/

    /*Utilities.Coroutines.CoroutineObject$1 start.*/
    $m("Utilities.Coroutines.CoroutineObject$1", function (T) { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[14].ICoroutineRunner,Function],"pi":[{"n":"owner","pt":$n[14].ICoroutineRunner,"ps":0},{"n":"routine","pt":Function,"ps":1}],"sn":"ctor"},{"a":1,"n":"Process","t":8,"pi":[{"n":"arg","pt":T,"ps":0}],"sn":"Process","rt":$n[5].IEnumerator,"p":[T]},{"a":2,"n":"Start","t":8,"pi":[{"n":"arg","pt":T,"ps":0}],"sn":"Start","rt":$n[0].Void,"p":[T]},{"a":1,"n":"Routine","t":16,"rt":Function,"g":{"a":1,"n":"get_Routine","t":8,"rt":Function,"fg":"Routine"},"fn":"Routine"},{"ov":true,"a":2,"n":"Finished","t":2,"ad":{"ov":true,"a":2,"n":"add_Finished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addFinished","rt":$n[0].Void,"p":[Function]},"r":{"ov":true,"a":2,"n":"remove_Finished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeFinished","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<Routine>k__BackingField","t":4,"rt":Function,"sn":"Routine"}]}; }, $n);
    /*Utilities.Coroutines.CoroutineObject$1 end.*/

    /*Utilities.Coroutines.CoroutineObjectBase start.*/
    $m("Utilities.Coroutines.CoroutineObjectBase", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":3,"n":"Coroutine","t":16,"rt":$n[3].Coroutine,"g":{"a":3,"n":"get_Coroutine","t":8,"rt":$n[3].Coroutine,"fg":"Coroutine"},"s":{"a":3,"n":"set_Coroutine","t":8,"p":[$n[3].Coroutine],"rt":$n[0].Void,"fs":"Coroutine"},"fn":"Coroutine"},{"a":2,"n":"IsProcessing","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsProcessing","t":8,"rt":$n[0].Boolean,"fg":"IsProcessing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsProcessing"},{"a":3,"n":"Owner","t":16,"rt":$n[14].ICoroutineRunner,"g":{"a":3,"n":"get_Owner","t":8,"rt":$n[14].ICoroutineRunner,"fg":"Owner"},"s":{"a":3,"n":"set_Owner","t":8,"p":[$n[14].ICoroutineRunner],"rt":$n[0].Void,"fs":"Owner"},"fn":"Owner"},{"ab":true,"a":2,"n":"Finished","t":2,"ad":{"ab":true,"a":2,"n":"add_Finished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addFinished","rt":$n[0].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_Finished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeFinished","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<Coroutine>k__BackingField","t":4,"rt":$n[3].Coroutine,"sn":"Coroutine"},{"a":1,"backing":true,"n":"<Owner>k__BackingField","t":4,"rt":$n[14].ICoroutineRunner,"sn":"Owner"}]}; }, $n);
    /*Utilities.Coroutines.CoroutineObjectBase end.*/

    /*Utilities.Coroutines.ICoroutineRunner start.*/
    $m("Utilities.Coroutines.ICoroutineRunner", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"StartCoroutine","t":8,"pi":[{"n":"routine","pt":$n[5].IEnumerator,"ps":0}],"sn":"Utilities$Coroutines$ICoroutineRunner$StartCoroutine","rt":$n[3].Coroutine,"p":[$n[5].IEnumerator]},{"ab":true,"a":2,"n":"StopCoroutine","t":8,"pi":[{"n":"routine","pt":$n[3].Coroutine,"ps":0}],"sn":"Utilities$Coroutines$ICoroutineRunner$StopCoroutine","rt":$n[0].Void,"p":[$n[3].Coroutine]}]}; }, $n);
    /*Utilities.Coroutines.ICoroutineRunner end.*/

    /*Utilities.Animations.MyAnimator start.*/
    $m("Utilities.Animations.MyAnimator", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":3,"n":"CrossFade","t":8,"pi":[{"n":"hashes","pt":$n[13].IList$1(System.Int32),"ps":0},{"n":"transitionDuration","dv":0.25,"o":true,"pt":$n[0].Single,"ps":1},{"n":"offset","dv":0.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"CrossFade","rt":$n[0].Void,"p":[$n[13].IList$1(System.Int32),$n[0].Single,$n[0].Single]},{"a":3,"n":"CrossFade","t":8,"pi":[{"n":"hash","pt":$n[0].Int32,"ps":0},{"n":"transitionDuration","dv":0.25,"o":true,"pt":$n[0].Single,"ps":1},{"n":"offset","dv":0.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"CrossFade$1","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Single,$n[0].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"Animator","t":4,"rt":$n[3].Animator,"sn":"Animator"}]}; }, $n);
    /*Utilities.Animations.MyAnimator end.*/

    /*Upgrades.SpeedUpgrade start.*/
    $m("Upgrades.SpeedUpgrade", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BuyUpgrade","t":8,"sn":"BuyUpgrade","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ValueChanged","t":8,"pi":[{"n":"resourceType","pt":ResourceType,"ps":0}],"sn":"ValueChanged","rt":$n[0].Void,"p":[ResourceType]},{"a":1,"n":"Current","t":16,"rt":$n[15].SpeedUpgradeData,"g":{"a":1,"n":"get_Current","t":8,"rt":$n[15].SpeedUpgradeData,"fg":"Current"},"fn":"Current"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_data","t":4,"rt":System.Array.type(Upgrades.SpeedUpgradeData),"sn":"_data"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_glen","t":4,"rt":$n[6].Glen,"sn":"_glen"},{"a":1,"n":"_index","t":4,"rt":$n[0].Int32,"sn":"_index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_sound","t":4,"rt":$n[3].AudioClip,"sn":"_sound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_storage","t":4,"rt":$n[2].Storage,"sn":"_storage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_view","t":4,"rt":$n[15].UpgradeView,"sn":"_view"}]}; }, $n);
    /*Upgrades.SpeedUpgrade end.*/

    /*Upgrades.SpeedUpgradeData start.*/
    $m("Upgrades.SpeedUpgradeData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"MoveSpeed","t":4,"rt":$n[0].Single,"sn":"MoveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"WaitTime","t":4,"rt":$n[0].Single,"sn":"WaitTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Upgrades.SpeedUpgradeData end.*/

    /*Upgrades.UpgradeData start.*/
    $m("Upgrades.UpgradeData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Price","t":4,"rt":$n[0].Int32,"sn":"Price","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Upgrades.UpgradeData end.*/

    /*Upgrades.UpgradeView start.*/
    $m("Upgrades.UpgradeView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnBuyButtonClicked","t":8,"sn":"OnBuyButtonClicked","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"Render","t":8,"pi":[{"n":"price","pt":$n[0].Int32,"ps":0},{"n":"active","pt":$n[0].Boolean,"ps":1}],"sn":"Render","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_activeGroup","t":4,"rt":$n[3].CanvasGroup,"sn":"_activeGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buyButton","t":4,"rt":$n[1].Button,"sn":"_buyButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_price","t":4,"rt":$n[9].TMP_Text,"sn":"_price"},{"a":2,"n":"ButtonClicked","t":2,"ad":{"a":2,"n":"add_ButtonClicked","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addButtonClicked","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_ButtonClicked","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeButtonClicked","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*Upgrades.UpgradeView end.*/

    /*Trucks.Truck start.*/
    $m("Trucks.Truck", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Clear","t":8,"sn":"Clear","rt":$n[0].Void},{"a":2,"n":"Construct","t":8,"pi":[{"n":"plankStack","pt":$n[16].HeroStack,"ps":0},{"n":"colorZone","pt":ColorZone,"ps":1}],"sn":"Construct","rt":$n[0].Void,"p":[$n[16].HeroStack,ColorZone]},{"a":2,"n":"MoveTo","t":8,"pi":[{"n":"position","pt":$n[3].Vector3,"ps":0},{"n":"rotation","pt":$n[3].Quaternion,"ps":1}],"sn":"MoveTo","rt":$n[5].IEnumerator,"p":[$n[3].Vector3,$n[3].Quaternion]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"WaitLoad","t":8,"sn":"WaitLoad","rt":$n[5].IEnumerator},{"a":1,"n":"_colorZone","t":4,"rt":ColorZone,"sn":"_colorZone"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_delay","t":4,"rt":$n[0].Single,"sn":"_delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_lastTakeTime","t":4,"rt":$n[0].Single,"sn":"_lastTakeTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pickupDelay","t":4,"rt":$n[0].Single,"sn":"_pickupDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_plankStack","t":4,"rt":$n[16].HeroStack,"sn":"_plankStack"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_stack","t":4,"rt":$n[16].HeroStack,"sn":"_stack"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_takeSound","t":4,"rt":$n[3].AudioClip,"sn":"_takeSound"},{"a":1,"n":"_waitingLoad","t":4,"rt":$n[0].Boolean,"sn":"_waitingLoad","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Trucks.Truck end.*/

    /*Trucks.TruckPoint start.*/
    $m("Trucks.TruckPoint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Occupy","t":8,"sn":"Occupy","rt":$n[0].Void},{"a":2,"n":"Release","t":8,"sn":"Release","rt":$n[0].Void},{"a":2,"n":"IsFree","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsFree","t":8,"rt":$n[0].Boolean,"fg":"IsFree","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsFree","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsFree"},"fn":"IsFree"},{"a":2,"n":"Position","t":16,"rt":$n[3].Vector3,"g":{"a":2,"n":"get_Position","t":8,"rt":$n[3].Vector3,"fg":"Position"},"fn":"Position"},{"a":2,"n":"Rotation","t":16,"rt":$n[3].Quaternion,"g":{"a":2,"n":"get_Rotation","t":8,"rt":$n[3].Quaternion,"fg":"Rotation"},"fn":"Rotation"},{"a":2,"n":"StopIsAllowed","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_StopIsAllowed","t":8,"rt":$n[0].Boolean,"fg":"StopIsAllowed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"StopIsAllowed"},{"a":1,"n":"__Property__Initializer__IsFree","t":4,"rt":$n[0].Boolean,"sn":"__Property__Initializer__IsFree","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_stopHereIsAllowed","t":4,"rt":$n[0].Boolean,"sn":"_stopHereIsAllowed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<IsFree>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsFree","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Trucks.TruckPoint end.*/

    /*Trucks.TrucksManager start.*/
    $m("Trucks.TrucksManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CreateTruck","t":8,"sn":"CreateTruck","rt":$n[17].Truck},{"a":1,"n":"FindFurthestFreeIndex","t":8,"sn":"FindFurthestFreeIndex","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"GetNextStopIndex","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"GetNextStopIndex","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"HandleTruck","t":8,"sn":"HandleTruck","rt":$n[5].IEnumerator},{"a":1,"n":"HasFreePoints","t":8,"sn":"HasFreePoints","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"StartSpawn","t":8,"sn":"StartSpawn","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WaitUntilFree","t":8,"pi":[{"n":"pointIndex","pt":$n[0].Int32,"ps":0}],"sn":"WaitUntilFree","rt":$n[5].IEnumerator,"p":[$n[0].Int32]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buyZone","t":4,"rt":$n[12].BuyZone,"sn":"_buyZone"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_colorZone","t":4,"rt":ColorZone,"sn":"_colorZone"},{"a":1,"n":"_enabled","t":4,"rt":$n[0].Boolean,"sn":"_enabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_exitPoints","t":4,"rt":System.Array.type(Trucks.TruckPoint),"sn":"_exitPoints"},{"a":1,"n":"_lastSpawnTime","t":4,"rt":$n[0].Single,"sn":"_lastSpawnTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_money","t":4,"rt":$n[16].HeroStack,"sn":"_money"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_plankStack","t":4,"rt":$n[16].HeroStack,"sn":"_plankStack"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":System.Array.type(Trucks.TruckPoint),"sn":"_points"},{"a":1,"n":"_pool","t":4,"rt":$n[8].ObjectPool$1(Trucks.Truck),"sn":"_pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnDelay","t":4,"rt":$n[0].Single,"sn":"_spawnDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnMoneySound","t":4,"rt":$n[3].AudioClip,"sn":"_spawnMoneySound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnPoint","t":4,"rt":$n[3].Transform,"sn":"_spawnPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_truckPrefab","t":4,"rt":$n[17].Truck,"sn":"_truckPrefab"}]}; }, $n);
    /*Trucks.TrucksManager end.*/

    /*SpriteVfx.SpriteVfx start.*/
    $m("SpriteVfx.SpriteVfx", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Construct","t":8,"pi":[{"n":"pool","pt":$n[18].SpriteVfxPool,"ps":0}],"sn":"Construct","rt":$n[0].Void,"p":[$n[18].SpriteVfxPool]},{"a":1,"n":"DisableAfterPlay","t":8,"sn":"DisableAfterPlay","rt":$n[5].IEnumerator},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":2,"n":"Play","t":8,"sn":"Play","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_clip","t":4,"rt":$n[3].AnimationClip,"sn":"_clip"},{"a":1,"n":"_pool","t":4,"rt":$n[18].SpriteVfxPool,"sn":"_pool"},{"a":1,"n":"_waitForPlay","t":4,"rt":$n[3].WaitForSeconds,"sn":"_waitForPlay"}]}; }, $n);
    /*SpriteVfx.SpriteVfx end.*/

    /*SpriteVfx.SpriteVfxPool start.*/
    $m("SpriteVfx.SpriteVfxPool", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ActionOnGet","is":true,"t":8,"pi":[{"n":"effect","pt":$n[18].SpriteVfx,"ps":0}],"sn":"ActionOnGet","rt":$n[0].Void,"p":[$n[18].SpriteVfx]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CreateVfx","t":8,"sn":"CreateVfx","rt":$n[18].SpriteVfx},{"a":2,"n":"Release","t":8,"pi":[{"n":"spriteVfx","pt":$n[18].SpriteVfx,"ps":0}],"sn":"Release","rt":$n[0].Void,"p":[$n[18].SpriteVfx]},{"a":2,"n":"Spawn","t":8,"pi":[{"n":"position","pt":$n[3].Vector3,"ps":0}],"sn":"Spawn","rt":$n[0].Void,"p":[$n[3].Vector3]},{"a":2,"n":"Type","t":16,"rt":$n[18].SpriteVfxType,"g":{"a":2,"n":"get_Type","t":8,"rt":$n[18].SpriteVfxType,"fg":"Type","box":function ($v) { return Bridge.box($v, SpriteVfx.SpriteVfxType, System.Enum.toStringFn(SpriteVfx.SpriteVfxType));}},"fn":"Type"},{"a":1,"n":"_effectsPool","t":4,"rt":$n[8].ObjectPool$1(SpriteVfx.SpriteVfx),"sn":"_effectsPool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_prefab","t":4,"rt":$n[18].SpriteVfx,"sn":"_prefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_type","t":4,"rt":$n[18].SpriteVfxType,"sn":"_type","box":function ($v) { return Bridge.box($v, SpriteVfx.SpriteVfxType, System.Enum.toStringFn(SpriteVfx.SpriteVfxType));}}]}; }, $n);
    /*SpriteVfx.SpriteVfxPool end.*/

    /*SpriteVfx.SpriteVfxService start.*/
    $m("SpriteVfx.SpriteVfxService", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GetPool","t":8,"pi":[{"n":"type","pt":$n[18].SpriteVfxType,"ps":0}],"sn":"GetPool","rt":$n[18].SpriteVfxPool,"p":[$n[18].SpriteVfxType]},{"a":2,"n":"Spawn","t":8,"pi":[{"n":"type","pt":$n[18].SpriteVfxType,"ps":0},{"n":"position","pt":$n[3].Vector3,"ps":1}],"sn":"Spawn","rt":$n[0].Void,"p":[$n[18].SpriteVfxType,$n[3].Vector3]},{"a":2,"n":"Instance","is":true,"t":4,"rt":$n[18].SpriteVfxService,"sn":"Instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pools","t":4,"rt":System.Array.type(SpriteVfx.SpriteVfxPool),"sn":"_pools"}]}; }, $n);
    /*SpriteVfx.SpriteVfxService end.*/

    /*SpriteVfx.SpriteVfxType start.*/
    $m("SpriteVfx.SpriteVfxType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Coins","is":true,"t":4,"rt":$n[18].SpriteVfxType,"sn":"Coins","box":function ($v) { return Bridge.box($v, SpriteVfx.SpriteVfxType, System.Enum.toStringFn(SpriteVfx.SpriteVfxType));}},{"a":2,"n":"Explosion","is":true,"t":4,"rt":$n[18].SpriteVfxType,"sn":"Explosion","box":function ($v) { return Bridge.box($v, SpriteVfx.SpriteVfxType, System.Enum.toStringFn(SpriteVfx.SpriteVfxType));}},{"a":2,"n":"Fire","is":true,"t":4,"rt":$n[18].SpriteVfxType,"sn":"Fire","box":function ($v) { return Bridge.box($v, SpriteVfx.SpriteVfxType, System.Enum.toStringFn(SpriteVfx.SpriteVfxType));}},{"a":2,"n":"Flash","is":true,"t":4,"rt":$n[18].SpriteVfxType,"sn":"Flash","box":function ($v) { return Bridge.box($v, SpriteVfx.SpriteVfxType, System.Enum.toStringFn(SpriteVfx.SpriteVfxType));}},{"a":2,"n":"Sparks","is":true,"t":4,"rt":$n[18].SpriteVfxType,"sn":"Sparks","box":function ($v) { return Bridge.box($v, SpriteVfx.SpriteVfxType, System.Enum.toStringFn(SpriteVfx.SpriteVfxType));}},{"a":2,"n":"ZombieBlood","is":true,"t":4,"rt":$n[18].SpriteVfxType,"sn":"ZombieBlood","box":function ($v) { return Bridge.box($v, SpriteVfx.SpriteVfxType, System.Enum.toStringFn(SpriteVfx.SpriteVfxType));}}]}; }, $n);
    /*SpriteVfx.SpriteVfxType end.*/

    /*Scroller.Scroller start.*/
    $m("Scroller.Scroller", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"ab":true,"a":3,"n":"Scroll","t":8,"pi":[{"n":"material","pt":$n[3].Material,"ps":0},{"n":"value","pt":$n[3].Vector2,"ps":1}],"sn":"Scroll","rt":$n[0].Void,"p":[$n[3].Material,$n[3].Vector2]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_initOffset","t":4,"rt":$n[3].Vector2,"sn":"_initOffset"},{"a":1,"n":"_offset","t":4,"rt":$n[3].Vector2,"sn":"_offset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_renderer","t":4,"rt":$n[3].SpriteRenderer,"sn":"_renderer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_speedX","t":4,"rt":$n[0].Single,"sn":"_speedX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_speedY","t":4,"rt":$n[0].Single,"sn":"_speedY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_targetMaterial","t":4,"rt":$n[3].Material,"sn":"_targetMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_useSharedMaterial","t":4,"rt":$n[0].Boolean,"sn":"_useSharedMaterial","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Scroller.Scroller end.*/

    /*Scroller.SpriteScroller start.*/
    $m("Scroller.SpriteScroller", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Scroll","t":8,"pi":[{"n":"material","pt":$n[3].Material,"ps":0},{"n":"value","pt":$n[3].Vector2,"ps":1}],"sn":"Scroll","rt":$n[0].Void,"p":[$n[3].Material,$n[3].Vector2]},{"a":1,"n":"Offset","is":true,"t":4,"rt":$n[0].Int32,"sn":"Offset","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Scroller.SpriteScroller end.*/

    /*Scroller.UvScroller start.*/
    $m("Scroller.UvScroller", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Scroll","t":8,"pi":[{"n":"material","pt":$n[3].Material,"ps":0},{"n":"value","pt":$n[3].Vector2,"ps":1}],"sn":"Scroll","rt":$n[0].Void,"p":[$n[3].Material,$n[3].Vector2]}]}; }, $n);
    /*Scroller.UvScroller end.*/

    /*QuestSystem.BuyZoneQuest start.*/
    $m("QuestSystem.BuyZoneQuest", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Begin","t":8,"sn":"Begin","rt":$n[0].Void},{"a":1,"n":"OnBought","t":8,"sn":"OnBought","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buyZone","t":4,"rt":$n[12].BuyZone,"sn":"_buyZone"}]}; }, $n);
    /*QuestSystem.BuyZoneQuest end.*/

    /*QuestSystem.HeroQuestArrow start.*/
    $m("QuestSystem.HeroQuestArrow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetTarget","t":8,"pi":[{"n":"target","pt":$n[3].Transform,"ps":0}],"sn":"SetTarget","rt":$n[0].Void,"p":[$n[3].Transform]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_hasTarget","t":4,"rt":$n[0].Boolean,"sn":"_hasTarget","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_hideDistance","t":4,"rt":$n[0].Single,"sn":"_hideDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_player","t":4,"rt":$n[3].Transform,"sn":"_player"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_radius","t":4,"rt":$n[0].Single,"sn":"_radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_target","t":4,"rt":$n[3].Transform,"sn":"_target"},{"a":1,"n":"_visible","t":4,"rt":$n[0].Boolean,"sn":"_visible","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*QuestSystem.HeroQuestArrow end.*/

    /*QuestSystem.Quest start.*/
    $m("QuestSystem.Quest", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":2,"n":"Begin","t":8,"sn":"Begin","rt":$n[0].Void},{"v":true,"a":2,"n":"Construct","t":8,"pi":[{"n":"heroQuestArrow","pt":$n[19].HeroQuestArrow,"ps":0},{"n":"mainCamera","pt":MainCamera,"ps":1}],"sn":"Construct","rt":$n[0].Void,"p":[$n[19].HeroQuestArrow,MainCamera]},{"a":3,"n":"InvokeCompleted","t":8,"sn":"InvokeCompleted","rt":$n[0].Void},{"a":3,"n":"ShowHeroQuestArrowFor","t":8,"pi":[{"n":"customTarget","pt":$n[3].Transform,"ps":0}],"sn":"ShowHeroQuestArrowFor","rt":$n[0].Void,"p":[$n[3].Transform]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"TopQuestArrow","t":4,"rt":$n[19].TopQuestArrow,"sn":"TopQuestArrow"},{"a":1,"n":"_heroQuestArrow","t":4,"rt":$n[19].HeroQuestArrow,"sn":"_heroQuestArrow"},{"a":1,"n":"_mainCamera","t":4,"rt":MainCamera,"sn":"_mainCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_showCameraDuration","t":4,"rt":$n[0].Single,"sn":"_showCameraDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_target","t":4,"rt":$n[3].Transform,"sn":"_target"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_useCamera","t":4,"rt":$n[0].Boolean,"sn":"_useCamera","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_useHeroArrow","t":4,"rt":$n[0].Boolean,"sn":"_useHeroArrow","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_useTopArrow","t":4,"rt":$n[0].Boolean,"sn":"_useTopArrow","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Completed","t":2,"ad":{"a":2,"n":"add_Completed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addCompleted","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Completed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeCompleted","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*QuestSystem.Quest end.*/

    /*QuestSystem.QuestController start.*/
    $m("QuestSystem.QuestController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BeginActiveQuest","t":8,"sn":"BeginActiveQuest","rt":$n[0].Void},{"a":1,"n":"OnQuestCompleted","t":8,"sn":"OnQuestCompleted","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"ActiveQuest","t":16,"rt":$n[19].Quest,"g":{"a":1,"n":"get_ActiveQuest","t":8,"rt":$n[19].Quest,"fg":"ActiveQuest"},"fn":"ActiveQuest"},{"a":1,"n":"_activeQuestIndex","t":4,"rt":$n[0].Int32,"sn":"_activeQuestIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_heroQuestArrow","t":4,"rt":$n[19].HeroQuestArrow,"sn":"_heroQuestArrow"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_mainCamera","t":4,"rt":MainCamera,"sn":"_mainCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_quests","t":4,"rt":System.Array.type(QuestSystem.Quest),"sn":"_quests"}]}; }, $n);
    /*QuestSystem.QuestController end.*/

    /*QuestSystem.TakeFromStackQuest start.*/
    $m("QuestSystem.TakeFromStackQuest", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Begin","t":8,"sn":"Begin","rt":$n[0].Void},{"a":1,"n":"OnPickedUp","t":8,"sn":"OnPickedUp","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pickup","t":4,"rt":$n[20].ItemPickup,"sn":"_pickup"}]}; }, $n);
    /*QuestSystem.TakeFromStackQuest end.*/

    /*QuestSystem.TakeMoneyQuest start.*/
    $m("QuestSystem.TakeMoneyQuest", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Begin","t":8,"sn":"Begin","rt":$n[0].Void},{"a":1,"n":"OnMoneyPickedUp","t":8,"sn":"OnMoneyPickedUp","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pickup","t":4,"rt":MoneyPickup,"sn":"_pickup"}]}; }, $n);
    /*QuestSystem.TakeMoneyQuest end.*/

    /*QuestSystem.TopQuestArrow start.*/
    $m("QuestSystem.TopQuestArrow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arrow","t":4,"rt":$n[3].Transform,"sn":"_arrow"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveDistance","t":4,"rt":$n[0].Single,"sn":"_moveDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveDuration","t":4,"rt":$n[0].Single,"sn":"_moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveEase","t":4,"rt":$n[21].Ease,"sn":"_moveEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"a":1,"n":"_moveTween","t":4,"rt":$n[21].Tween,"sn":"_moveTween"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rotate","t":4,"rt":$n[3].Vector3,"sn":"_rotate"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rotateDuration","t":4,"rt":$n[0].Single,"sn":"_rotateDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rotateEase","t":4,"rt":$n[21].Ease,"sn":"_rotateEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"a":1,"n":"_rotateTween","t":4,"rt":$n[21].Tween,"sn":"_rotateTween"}]}; }, $n);
    /*QuestSystem.TopQuestArrow end.*/

    /*Progression.BuyZone start.*/
    $m("Progression.BuyZone", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[3].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[3].Collider]},{"a":1,"n":"TakeMoneyFromHero","t":8,"pi":[{"n":"stack","pt":$n[16].HeroStack,"ps":0}],"sn":"TakeMoneyFromHero","rt":$n[5].IEnumerator,"p":[$n[16].HeroStack]},{"a":1,"n":"ThrowCoinArc","t":8,"pi":[{"n":"resource","pt":MoneyResource,"ps":0},{"n":"targetPos","pt":$n[3].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"isLast","pt":$n[0].Boolean,"ps":3}],"sn":"ThrowCoinArc","rt":$n[5].IEnumerator,"p":[MoneyResource,$n[3].Vector3,$n[0].Single,$n[0].Boolean]},{"a":1,"n":"UpdateVisuals","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"UpdateVisuals","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"IsOpened","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsOpened","t":8,"rt":$n[0].Boolean,"fg":"IsOpened","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsOpened","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsOpened"},"fn":"IsOpened"},{"a":2,"n":"Price","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Price","t":8,"rt":$n[0].Int32,"fg":"Price","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_Price","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Price"},"fn":"Price"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_addSound","t":4,"rt":$n[3].AudioClip,"sn":"_addSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_fillBar","t":4,"rt":ShaderFillBar,"sn":"_fillBar"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_flyDelay","t":4,"rt":$n[0].Single,"sn":"_flyDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_flyDuration","t":4,"rt":$n[0].Single,"sn":"_flyDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_money","t":4,"rt":Money,"sn":"_money"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moneyReceivePoint","t":4,"rt":$n[3].Transform,"sn":"_moneyReceivePoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_priceText","t":4,"rt":$n[9].TMP_Text,"sn":"_priceText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_startPrice","t":4,"rt":$n[0].Int32,"sn":"_startPrice","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_waitFly","t":4,"rt":$n[3].WaitForSeconds,"sn":"_waitFly"},{"a":1,"backing":true,"n":"<IsOpened>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsOpened","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Price>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Price","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Progression.BuyZone end.*/

    /*Progression.GameTrigger start.*/
    $m("Progression.GameTrigger", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":3,"n":"InvokeTriggered","t":8,"sn":"InvokeTriggered","rt":$n[0].Void},{"a":2,"n":"Triggered","t":2,"ad":{"a":2,"n":"add_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggered","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggered","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*Progression.GameTrigger end.*/

    /*Progression.GateUnlock start.*/
    $m("Progression.GateUnlock", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OpenGate","t":8,"sn":"OpenGate","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gate","t":4,"rt":$n[3].Transform,"sn":"_gate"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_plus","t":4,"rt":$n[3].Transform,"sn":"_plus"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_trigger","t":4,"rt":$n[12].GameTrigger,"sn":"_trigger"}]}; }, $n);
    /*Progression.GateUnlock end.*/

    /*Progression.ItemPickupTrigger start.*/
    $m("Progression.ItemPickupTrigger", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_lastPickUpTime","t":4,"rt":$n[0].Single,"sn":"_lastPickUpTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pickup","t":4,"rt":$n[20].ItemPickup,"sn":"_pickup"}]}; }, $n);
    /*Progression.ItemPickupTrigger end.*/

    /*Pools.IPool$1 start.*/
    $m("Pools.IPool$1", function (T) { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Release","t":8,"pi":[{"n":"element","pt":T,"ps":0}],"sn":"Pools$IPool$1$" + Bridge.getTypeAlias(T) + "$Release","rt":$n[0].Void,"p":[T]}]}; }, $n);
    /*Pools.IPool$1 end.*/

    /*Pools.ObjectPool$1 start.*/
    $m("Pools.ObjectPool$1", function (T) { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[Function,Function,Function,$n[0].Boolean,$n[0].Int32,$n[0].Int32],"pi":[{"n":"createFunc","pt":Function,"ps":0},{"n":"actionOnGet","dv":null,"o":true,"pt":Function,"ps":1},{"n":"actionOnRelease","dv":null,"o":true,"pt":Function,"ps":2},{"n":"collectionCheck","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"defaultCapacity","dv":10,"o":true,"pt":$n[0].Int32,"ps":4},{"n":"maxSize","dv":10000,"o":true,"pt":$n[0].Int32,"ps":5}],"sn":"ctor"},{"a":2,"n":"Clear","t":8,"sn":"Clear","rt":$n[0].Void},{"a":2,"n":"Dispose","t":8,"sn":"Dispose","rt":$n[0].Void},{"a":2,"n":"Get","t":8,"sn":"Get","rt":T},{"a":2,"n":"Release","t":8,"pi":[{"n":"element","pt":T,"ps":0}],"sn":"Release","rt":$n[0].Void,"p":[T]},{"a":2,"n":"CountActive","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CountActive","t":8,"rt":$n[0].Int32,"fg":"CountActive","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CountActive"},{"a":2,"n":"CountAll","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CountAll","t":8,"rt":$n[0].Int32,"fg":"CountAll","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_CountAll","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"CountAll"},"fn":"CountAll"},{"a":2,"n":"CountInactive","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CountInactive","t":8,"rt":$n[0].Int32,"fg":"CountInactive","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CountInactive"},{"a":1,"n":"_actionOnGet","t":4,"rt":Function,"sn":"_actionOnGet","ro":true},{"a":1,"n":"_actionOnRelease","t":4,"rt":Function,"sn":"_actionOnRelease","ro":true},{"a":1,"n":"_collectionCheck","t":4,"rt":$n[0].Boolean,"sn":"_collectionCheck","ro":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_createFunc","t":4,"rt":Function,"sn":"_createFunc","ro":true},{"a":1,"n":"_list","t":4,"rt":$n[13].List$1(T),"sn":"_list","ro":true},{"a":1,"n":"_maxSize","t":4,"rt":$n[0].Int32,"sn":"_maxSize","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<CountAll>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"CountAll","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Pools.ObjectPool$1 end.*/

    /*Pools.ResourcePool start.*/
    $m("Pools.ResourcePool", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Create","t":8,"sn":"Create","rt":Resource},{"a":2,"n":"Get","t":8,"sn":"Get","rt":Resource},{"a":2,"n":"Release","t":8,"pi":[{"n":"resource","pt":Resource,"ps":0}],"sn":"Release","rt":$n[0].Void,"p":[Resource]},{"a":2,"n":"CountActive","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CountActive","t":8,"rt":$n[0].Int32,"fg":"CountActive","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CountActive"},{"a":2,"n":"Type","t":16,"rt":ResourceType,"g":{"a":2,"n":"get_Type","t":8,"rt":ResourceType,"fg":"Type","box":function ($v) { return Bridge.box($v, ResourceType, System.Enum.toStringFn(ResourceType));}},"fn":"Type"},{"a":1,"n":"_pool","t":4,"rt":$n[8].ObjectPool$1(Resource),"sn":"_pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_prefab","t":4,"rt":Resource,"sn":"_prefab"}]}; }, $n);
    /*Pools.ResourcePool end.*/

    /*Pools.ResourcesPools start.*/
    $m("Pools.ResourcesPools", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Get","t":8,"pi":[{"n":"type","pt":ResourceType,"ps":0}],"sn":"Get","rt":$n[8].ResourcePool,"p":[ResourceType]},{"a":2,"n":"GetResource","t":8,"pi":[{"n":"type","pt":ResourceType,"ps":0}],"tpc":1,"tprm":["T"],"sn":"GetResource","rt":System.Object,"p":[ResourceType]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pools","t":4,"rt":System.Array.type(Pools.ResourcePool),"sn":"_pools"}]}; }, $n);
    /*Pools.ResourcesPools end.*/

    /*PackShots.PackShot start.*/
    $m("PackShots.PackShot", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnButtonClick","t":8,"sn":"OnButtonClick","rt":$n[0].Void},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_background","t":4,"rt":$n[3].CanvasGroup,"sn":"_background"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_playButton","t":4,"rt":$n[1].Button,"sn":"_playButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_title","t":4,"rt":$n[1].Image,"sn":"_title"}]}; }, $n);
    /*PackShots.PackShot end.*/

    /*PackShots.PackShotChooser start.*/
    $m("PackShots.PackShotChooser", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_horizontalPackShot","t":4,"rt":$n[7].PackShot,"sn":"_horizontalPackShot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_verticalPackShot","t":4,"rt":$n[7].PackShot,"sn":"_verticalPackShot"}]}; }, $n);
    /*PackShots.PackShotChooser end.*/

    /*Inputs.ConveyorSelector start.*/
    $m("Inputs.ConveyorSelector", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_camera","t":4,"rt":$n[3].Camera,"sn":"_camera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_clickMask","t":4,"rt":$n[3].LayerMask,"sn":"_clickMask"},{"a":1,"n":"_previousSelected","t":4,"rt":$n[10].InteractiveConveyor,"sn":"_previousSelected"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_sound","t":4,"rt":$n[3].AudioClip,"sn":"_sound"},{"a":2,"n":"Selected","t":2,"ad":{"a":2,"n":"add_Selected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addSelected","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Selected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeSelected","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*Inputs.ConveyorSelector end.*/

    /*Inputs.JoystickAlphaController start.*/
    $m("Inputs.JoystickAlphaController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_canvasGroup","t":4,"rt":$n[3].CanvasGroup,"sn":"_canvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick"},{"a":1,"n":"_transparencyEnabled","t":4,"rt":$n[0].Boolean,"sn":"_transparencyEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Inputs.JoystickAlphaController end.*/

    /*Hero.HeroMaxStack start.*/
    $m("Hero.HeroMaxStack", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnyStackIsFull","t":8,"sn":"AnyStackIsFull","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_stacksToWatch","t":4,"rt":System.Array.type(Hero.HeroStack),"sn":"_stacksToWatch"},{"a":1,"n":"_visible","t":4,"rt":$n[0].Boolean,"sn":"_visible","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Hero.HeroMaxStack end.*/

    /*Hero.HeroMovement start.*/
    $m("Hero.HeroMovement", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Disable","t":8,"sn":"Disable","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_camera","t":4,"rt":$n[3].Transform,"sn":"_camera"},{"a":1,"n":"_enabled","t":4,"rt":$n[0].Boolean,"sn":"_enabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick"},{"a":1,"n":"_movedLastFrame","t":4,"rt":$n[0].Boolean,"sn":"_movedLastFrame","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_movementSpeed","t":4,"rt":$n[0].Single,"sn":"_movementSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rigidbody","t":4,"rt":$n[3].Rigidbody,"sn":"_rigidbody"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_wheelRotationMultiplier","t":4,"rt":$n[0].Single,"sn":"_wheelRotationMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_wheels","t":4,"rt":System.Array.type(Wheel),"sn":"_wheels"}]}; }, $n);
    /*Hero.HeroMovement end.*/

    /*Hero.HeroStack start.*/
    $m("Hero.HeroStack", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddItem","t":8,"pi":[{"n":"resource","pt":Resource,"ps":0},{"n":"jumpPower","dv":1.0,"o":true,"pt":$n[0].Single,"ps":1},{"n":"ignoreSound","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"AddItem","rt":$n[0].Void,"p":[Resource,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"AddItems","t":8,"pi":[{"n":"items","pt":System.Array.type(Resource),"ps":0},{"n":"ignoreSound","pt":$n[0].Boolean,"ps":1}],"sn":"AddItems","rt":$n[0].Void,"p":[System.Array.type(Resource),$n[0].Boolean]},{"a":2,"n":"Clear","t":8,"sn":"Clear","rt":$n[0].Void},{"a":2,"n":"RemoveItem","t":8,"pi":[{"n":"ignoreSound","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"RemoveItem","rt":Resource,"p":[$n[0].Boolean]},{"a":2,"n":"SpawnItems","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"SpawnItems","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"Amount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Amount","t":8,"rt":$n[0].Int32,"fg":"Amount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Amount"},{"a":2,"n":"FreeSpaceAmount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_FreeSpaceAmount","t":8,"rt":$n[0].Int32,"fg":"FreeSpaceAmount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"FreeSpaceAmount"},{"a":2,"n":"HasSpace","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_HasSpace","t":8,"rt":$n[0].Boolean,"fg":"HasSpace","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"HasSpace"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"LastTimeAdded","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_LastTimeAdded","t":8,"rt":$n[0].Single,"fg":"LastTimeAdded","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_LastTimeAdded","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"LastTimeAdded"},"fn":"LastTimeAdded"},{"a":2,"n":"Root","t":16,"rt":$n[3].Transform,"g":{"a":2,"n":"get_Root","t":8,"rt":$n[3].Transform,"fg":"Root"},"fn":"Root"},{"a":2,"n":"Type","t":16,"rt":ResourceType,"g":{"a":2,"n":"get_Type","t":8,"rt":ResourceType,"fg":"Type","box":function ($v) { return Bridge.box($v, ResourceType, System.Enum.toStringFn(ResourceType));}},"fn":"Type"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_addDuration","t":4,"rt":$n[0].Single,"sn":"_addDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_addSound","t":4,"rt":$n[3].AudioClip,"sn":"_addSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gridSize","t":4,"rt":$n[3].Vector2Int,"sn":"_gridSize"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_hasLimit","t":4,"rt":$n[0].Boolean,"sn":"_hasLimit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_isPlayerBackpack","t":4,"rt":$n[0].Boolean,"sn":"_isPlayerBackpack","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_items","t":4,"rt":$n[13].List$1(Resource),"sn":"_items","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_itemsRotation","t":4,"rt":$n[3].Vector3,"sn":"_itemsRotation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_maxItems","t":4,"rt":$n[0].Int32,"sn":"_maxItems","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_money","t":4,"rt":Money,"sn":"_money"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_offsets","t":4,"rt":$n[3].Vector3,"sn":"_offsets"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pools","t":4,"rt":$n[8].ResourcesPools,"sn":"_pools"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_removeSound","t":4,"rt":$n[3].AudioClip,"sn":"_removeSound"},{"a":1,"n":"_scaleTweens","t":4,"rt":$n[13].Dictionary$2(Resource,DG.Tweening.Tween),"sn":"_scaleTweens"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_stackRoot","t":4,"rt":$n[3].Transform,"sn":"_stackRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_type","t":4,"rt":ResourceType,"sn":"_type","box":function ($v) { return Bridge.box($v, ResourceType, System.Enum.toStringFn(ResourceType));}},{"a":1,"backing":true,"n":"<LastTimeAdded>k__BackingField","t":4,"rt":$n[0].Single,"sn":"LastTimeAdded","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Hero.HeroStack end.*/

    /*Hero.HeroStackManager start.*/
    $m("Hero.HeroStackManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CanAddItem","t":8,"pi":[{"n":"type","pt":ResourceType,"ps":0}],"sn":"CanAddItem","rt":$n[0].Boolean,"p":[ResourceType],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetStack","t":8,"pi":[{"n":"type","pt":ResourceType,"ps":0}],"sn":"GetStack","rt":$n[16].HeroStack,"p":[ResourceType]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_stacks","t":4,"rt":System.Array.type(Hero.HeroStack),"sn":"_stacks"}]}; }, $n);
    /*Hero.HeroStackManager end.*/

    /*Hero.LookAtCamera start.*/
    $m("Hero.LookAtCamera", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"_camera","t":4,"rt":$n[3].Camera,"sn":"_camera"}]}; }, $n);
    /*Hero.LookAtCamera end.*/

    /*GameResources.Bullet start.*/
    $m("GameResources.Bullet", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Move","t":8,"pi":[{"n":"nextPoint","pt":$n[10].InteractiveConveyorPoint,"ps":0},{"n":"speed","pt":$n[0].Single,"ps":1}],"sn":"Move","rt":$n[0].Void,"p":[$n[10].InteractiveConveyorPoint,$n[0].Single]},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_isMoving","t":4,"rt":$n[0].Boolean,"sn":"_isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_moveSpeed","t":4,"rt":$n[3].Vector3,"sn":"_moveSpeed"},{"a":1,"n":"_target","t":4,"rt":$n[10].InteractiveConveyorPoint,"sn":"_target"}]}; }, $n);
    /*GameResources.Bullet end.*/

    /*GameResources.ResourcePack start.*/
    $m("GameResources.ResourcePack", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Amount","t":4,"rt":$n[0].Int32,"sn":"Amount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Type","t":4,"rt":ResourceType,"sn":"Type","box":function ($v) { return Bridge.box($v, ResourceType, System.Enum.toStringFn(ResourceType));}}]}; }, $n);
    /*GameResources.ResourcePack end.*/

    /*GameResources.ResourceView start.*/
    $m("GameResources.ResourceView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ShowHideIfNeeded","t":8,"pi":[{"n":"newCount","pt":$n[0].Int32,"ps":0}],"sn":"ShowHideIfNeeded","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"ValueChanged","t":8,"pi":[{"n":"resourceType","pt":ResourceType,"ps":0}],"sn":"ValueChanged","rt":$n[0].Void,"p":[ResourceType]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_amount","t":4,"rt":$n[9].TextMeshProUGUI,"sn":"_amount"},{"at":[new UnityEngine.HeaderAttribute("Animation Tweaks"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_countChangeDuration","t":4,"rt":$n[0].Single,"sn":"_countChangeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_defaultColor","t":4,"rt":$n[3].Color,"sn":"_defaultColor"},{"a":1,"n":"_previousValue","t":4,"rt":$n[0].Int32,"sn":"_previousValue","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_punchColor","t":4,"rt":$n[3].Color,"sn":"_punchColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_punchDuration","t":4,"rt":$n[0].Single,"sn":"_punchDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_punchScale","t":4,"rt":$n[0].Single,"sn":"_punchScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_storage","t":4,"rt":$n[2].Storage,"sn":"_storage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_type","t":4,"rt":ResourceType,"sn":"_type","box":function ($v) { return Bridge.box($v, ResourceType, System.Enum.toStringFn(ResourceType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_useShowHide","t":4,"rt":$n[0].Boolean,"sn":"_useShowHide","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*GameResources.ResourceView end.*/

    /*GameResources.Storage start.*/
    $m("GameResources.Storage", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddResource","t":8,"pi":[{"n":"resourceType","pt":ResourceType,"ps":0},{"n":"amount","dv":1,"o":true,"pt":$n[0].Int32,"ps":1}],"sn":"AddResource","rt":$n[0].Void,"p":[ResourceType,$n[0].Int32]},{"a":2,"n":"AddResources","t":8,"pi":[{"n":"storage","pt":$n[2].Storage,"ps":0}],"sn":"AddResources","rt":$n[0].Void,"p":[$n[2].Storage]},{"a":2,"n":"AddResources","t":8,"pi":[{"n":"resources","pt":$n[13].Dictionary$2(ResourceType,System.Int32),"ps":0}],"sn":"AddResources$1","rt":$n[0].Void,"p":[$n[13].Dictionary$2(ResourceType,System.Int32)]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Clear","t":8,"sn":"Clear","rt":$n[0].Void},{"a":2,"n":"Empty","t":8,"sn":"Empty","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetResource","t":8,"pi":[{"n":"type","pt":ResourceType,"ps":0}],"sn":"GetResource","rt":$n[0].Int32,"p":[ResourceType],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"HasResource","t":8,"pi":[{"n":"resourceType","pt":ResourceType,"ps":0},{"n":"minAmount","dv":1,"o":true,"pt":$n[0].Int32,"ps":1}],"sn":"HasResource","rt":$n[0].Boolean,"p":[ResourceType,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasResources","t":8,"pi":[{"n":"resources","pt":$n[13].Dictionary$2(ResourceType,System.Int32),"ps":0}],"sn":"HasResources","rt":$n[0].Boolean,"p":[$n[13].Dictionary$2(ResourceType,System.Int32)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"RemoveResource","t":8,"pi":[{"n":"resourceType","pt":ResourceType,"ps":0},{"n":"amount","dv":1,"o":true,"pt":$n[0].Int32,"ps":1}],"sn":"RemoveResource","rt":$n[0].Void,"p":[ResourceType,$n[0].Int32]},{"a":2,"n":"RemoveResources","t":8,"pi":[{"n":"resourcesToRemove","pt":$n[13].Dictionary$2(ResourceType,System.Int32),"ps":0}],"sn":"RemoveResources","rt":$n[0].Void,"p":[$n[13].Dictionary$2(ResourceType,System.Int32)]},{"a":2,"n":"SetResource","t":8,"pi":[{"n":"type","pt":ResourceType,"ps":0},{"n":"amount","pt":$n[0].Int32,"ps":1}],"sn":"SetResource","rt":$n[0].Void,"p":[ResourceType,$n[0].Int32]},{"a":2,"n":"TotalAmount","t":8,"sn":"TotalAmount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_resources","t":4,"rt":$n[13].Dictionary$2(ResourceType,System.Int32),"sn":"_resources","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_startResources","t":4,"rt":$n[13].List$1(GameResources.ResourcePack),"sn":"_startResources"},{"a":2,"n":"ResourceChanged","t":2,"ad":{"a":2,"n":"add_ResourceChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addResourceChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_ResourceChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeResourceChanged","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*GameResources.Storage end.*/

    /*Factories.FactoryBuyActivator start.*/
    $m("Factories.FactoryBuyActivator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ActivateAfterDelay","t":8,"sn":"ActivateAfterDelay","rt":$n[5].IEnumerator},{"a":1,"n":"ActivateConveyor","t":8,"sn":"ActivateConveyor","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buyZone","t":4,"rt":$n[12].BuyZone,"sn":"_buyZone"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_delay","t":4,"rt":$n[0].Single,"sn":"_delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_factory","t":4,"rt":$n[20].LogFactory,"sn":"_factory"}]}; }, $n);
    /*Factories.FactoryBuyActivator end.*/

    /*Factories.FactoryUpgrade start.*/
    $m("Factories.FactoryUpgrade", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Disable","t":8,"sn":"Disable","rt":$n[5].IEnumerator},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"Upgrade","t":8,"sn":"Upgrade","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_logFactory","t":4,"rt":$n[20].LogFactory,"sn":"_logFactory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_plankFactory","t":4,"rt":$n[20].PlankFactory,"sn":"_plankFactory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_toDisable","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"_toDisable"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_trigger","t":4,"rt":$n[12].GameTrigger,"sn":"_trigger"}]}; }, $n);
    /*Factories.FactoryUpgrade end.*/

    /*Factories.ItemPickup start.*/
    $m("Factories.ItemPickup", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[3].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[3].Collider]},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[3].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[3].Collider]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"LastPickupTime","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_LastPickupTime","t":8,"rt":$n[0].Single,"fg":"LastPickupTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_LastPickupTime","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"LastPickupTime"},"fn":"LastPickupTime"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_delay","t":4,"rt":$n[0].Single,"sn":"_delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_from","t":4,"rt":$n[16].HeroStack,"sn":"_from"},{"a":1,"n":"_inside","t":4,"rt":$n[0].Boolean,"sn":"_inside","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_stackManager","t":4,"rt":$n[16].HeroStackManager,"sn":"_stackManager"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_type","t":4,"rt":ResourceType,"sn":"_type","box":function ($v) { return Bridge.box($v, ResourceType, System.Enum.toStringFn(ResourceType));}},{"a":2,"n":"PickedUp","t":2,"ad":{"a":2,"n":"add_PickedUp","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addPickedUp","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_PickedUp","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removePickedUp","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<LastPickupTime>k__BackingField","t":4,"rt":$n[0].Single,"sn":"LastPickupTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Factories.ItemPickup end.*/

    /*Factories.LogFactory start.*/
    $m("Factories.LogFactory", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"SpawnLog","t":8,"sn":"SpawnLog","rt":$n[5].IEnumerator},{"a":2,"n":"StartWork","t":8,"sn":"StartWork","rt":$n[0].Void},{"a":2,"n":"StopWork","t":8,"sn":"StopWork","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_inProcessCount","t":4,"rt":$n[0].Int32,"sn":"_inProcessCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_lastSpawnTime","t":4,"rt":$n[0].Single,"sn":"_lastSpawnTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_logPool","t":4,"rt":$n[8].ResourcePool,"sn":"_logPool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_midPoint","t":4,"rt":$n[3].Transform,"sn":"_midPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pickup","t":4,"rt":$n[20].ItemPickup,"sn":"_pickup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnDelay","t":4,"rt":$n[0].Single,"sn":"_spawnDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnDelayAfterPickup","t":4,"rt":$n[0].Single,"sn":"_spawnDelayAfterPickup","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnPoint","t":4,"rt":$n[3].Transform,"sn":"_spawnPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_stack","t":4,"rt":$n[16].HeroStack,"sn":"_stack"},{"a":1,"n":"_working","t":4,"rt":$n[0].Boolean,"sn":"_working","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Factories.LogFactory end.*/

    /*Factories.PlankFactory start.*/
    $m("Factories.PlankFactory", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnLogProceeds","t":8,"sn":"OnLogProceeds","rt":$n[0].Void},{"a":2,"n":"ProceedLog","t":8,"pi":[{"n":"resource","pt":Resource,"ps":0}],"sn":"ProceedLog","rt":$n[0].Void,"p":[Resource]},{"a":1,"n":"SpawnPlank","t":8,"sn":"SpawnPlank","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Upgrade","t":8,"sn":"Upgrade","rt":$n[0].Void},{"a":2,"n":"IsProcessing","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsProcessing","t":8,"rt":$n[0].Boolean,"fg":"IsProcessing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsProcessing","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsProcessing"},"fn":"IsProcessing"},{"a":1,"n":"_lastSpawnTime","t":4,"rt":$n[0].Single,"sn":"_lastSpawnTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_logTarget","t":4,"rt":$n[3].Transform,"sn":"_logTarget"},{"a":1,"n":"_logs","t":4,"rt":$n[13].Queue$1(Resource),"sn":"_logs","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pickup","t":4,"rt":$n[20].ItemPickup,"sn":"_pickup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_plankSpawnPoint","t":4,"rt":$n[3].Transform,"sn":"_plankSpawnPoint"},{"a":1,"n":"_playId","t":4,"rt":$n[0].Int32,"sn":"_playId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pool","t":4,"rt":$n[8].ResourcePool,"sn":"_pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_sawSound","t":4,"rt":$n[3].AudioClip,"sn":"_sawSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnDelayAfterPickup","t":4,"rt":$n[0].Single,"sn":"_spawnDelayAfterPickup","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_stack","t":4,"rt":$n[16].HeroStack,"sn":"_stack"},{"a":1,"n":"_tweenCallback","t":4,"rt":Function,"sn":"_tweenCallback"},{"a":1,"n":"_upgraded","t":4,"rt":$n[0].Boolean,"sn":"_upgraded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<IsProcessing>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsProcessing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Factories.PlankFactory end.*/

    /*Extensions.ArrayExtensions start.*/
    $m("Extensions.ArrayExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GetRandom","is":true,"t":8,"pi":[{"n":"enumerable","pt":$n[13].IEnumerable$1(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"GetRandom","rt":System.Object,"p":[$n[13].IEnumerable$1(System.Object)]},{"a":2,"n":"GetRandom","is":true,"t":8,"pi":[{"n":"list","pt":$n[13].IList$1(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"GetRandom$1","rt":System.Object,"p":[$n[13].IList$1(System.Object)]}]}; }, $n);
    /*Extensions.ArrayExtensions end.*/

    /*Extensions.DictionaryExtensions start.*/
    $m("Extensions.DictionaryExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Add","is":true,"t":8,"pi":[{"n":"dictionary","pt":$n[13].Dictionary$2(System.Object,System.Object),"ps":0},{"n":"dictionaryToCopyFrom","pt":$n[13].Dictionary$2(System.Object,System.Object),"ps":1}],"tpc":2,"tprm":["TKey","TValue"],"sn":"Add","rt":$n[0].Void,"p":[$n[13].Dictionary$2(System.Object,System.Object),$n[13].Dictionary$2(System.Object,System.Object)]},{"a":1,"n":"CloneObject","is":true,"t":8,"pi":[{"n":"obj","pt":System.Object,"ps":0}],"tpc":1,"tprm":["T"],"sn":"CloneObject","rt":System.Object,"p":[System.Object]},{"a":2,"n":"Copy","is":true,"t":8,"pi":[{"n":"dictionary","pt":$n[13].Dictionary$2(System.Object,System.Object),"ps":0},{"n":"toCopy","pt":$n[13].Dictionary$2(System.Object,System.Object),"ps":1}],"tpc":2,"tprm":["TKey","TValue"],"sn":"Copy","rt":$n[0].Void,"p":[$n[13].Dictionary$2(System.Object,System.Object),$n[13].Dictionary$2(System.Object,System.Object)]}]}; }, $n);
    /*Extensions.DictionaryExtensions end.*/

    /*Extensions.FloatExtensions start.*/
    $m("Extensions.FloatExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"ApproximatelyEqual","is":true,"t":8,"pi":[{"n":"a","pt":$n[0].Single,"ps":0},{"n":"b","pt":$n[0].Single,"ps":1}],"sn":"ApproximatelyEqual","rt":$n[0].Boolean,"p":[$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ApproximatelyEqual","is":true,"t":8,"pi":[{"n":"a","pt":$n[0].Single,"ps":0},{"n":"b","pt":$n[0].Single,"ps":1},{"n":"epsilon","pt":$n[0].Single,"ps":2}],"sn":"ApproximatelyEqual$1","rt":$n[0].Boolean,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Remap","is":true,"t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"from1","pt":$n[0].Single,"ps":1},{"n":"to1","pt":$n[0].Single,"ps":2},{"n":"from2","pt":$n[0].Single,"ps":3},{"n":"to2","pt":$n[0].Single,"ps":4}],"sn":"Remap","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Remap01","is":true,"t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"from","pt":$n[0].Single,"ps":1},{"n":"to","pt":$n[0].Single,"ps":2}],"sn":"Remap01","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ToMinutes","is":true,"t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"precision","dv":1,"o":true,"pt":$n[0].Int32,"ps":1}],"sn":"ToMinutes","rt":$n[0].String,"p":[$n[0].Single,$n[0].Int32]}]}; }, $n);
    /*Extensions.FloatExtensions end.*/

    /*Extensions.IntExtensions start.*/
    $m("Extensions.IntExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Remap","is":true,"t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0},{"n":"from1","pt":$n[0].Single,"ps":1},{"n":"to1","pt":$n[0].Single,"ps":2},{"n":"from2","pt":$n[0].Single,"ps":3},{"n":"to2","pt":$n[0].Single,"ps":4}],"sn":"Remap","rt":$n[0].Single,"p":[$n[0].Int32,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ToLayerMask","is":true,"t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"ToLayerMask","rt":$n[3].LayerMask,"p":[$n[0].Int32]},{"a":2,"n":"ToLayerMaskValue","is":true,"t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"ToLayerMaskValue","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Extensions.IntExtensions end.*/

    /*Extensions.LayerMaskExtensions start.*/
    $m("Extensions.LayerMaskExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Contains","is":true,"t":8,"pi":[{"n":"mask","pt":$n[3].LayerMask,"ps":0},{"n":"layer","pt":$n[0].Int32,"ps":1}],"sn":"Contains","rt":$n[0].Boolean,"p":[$n[3].LayerMask,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ToLayer","is":true,"t":8,"pi":[{"n":"mask","pt":$n[3].LayerMask,"ps":0}],"sn":"ToLayer","rt":$n[0].Int32,"p":[$n[3].LayerMask],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Extensions.LayerMaskExtensions end.*/

    /*Extensions.ListExtensions start.*/
    $m("Extensions.ListExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"AddIfNotContains","is":true,"t":8,"pi":[{"n":"list","pt":$n[13].IList$1(System.Object),"ps":0},{"n":"value","pt":System.Object,"ps":1}],"tpc":1,"tprm":["T"],"sn":"AddIfNotContains","rt":$n[0].Boolean,"p":[$n[13].IList$1(System.Object),System.Object],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Random","is":true,"t":8,"pi":[{"n":"list","pt":$n[13].IList$1(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"Random","rt":System.Object,"p":[$n[13].IList$1(System.Object)]},{"a":2,"n":"Shuffle","is":true,"t":8,"pi":[{"n":"list","pt":$n[13].IList$1(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"Shuffle","rt":$n[0].Void,"p":[$n[13].IList$1(System.Object)]}]}; }, $n);
    /*Extensions.ListExtensions end.*/

    /*Extensions.QuaternionExtensions start.*/
    $m("Extensions.QuaternionExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"IsEqualTo","is":true,"t":8,"pi":[{"n":"a","pt":$n[3].Quaternion,"ps":0},{"n":"b","pt":$n[3].Quaternion,"ps":1}],"sn":"IsEqualTo","rt":$n[0].Boolean,"p":[$n[3].Quaternion,$n[3].Quaternion],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SmoothDamp","is":true,"t":8,"pi":[{"n":"current","pt":$n[3].Quaternion,"ps":0},{"n":"target","pt":$n[3].Quaternion,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[3].Vector3,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3}],"sn":"SmoothDamp","rt":$n[3].Quaternion,"p":[$n[3].Quaternion,$n[3].Quaternion,$n[3].Vector3,$n[0].Single]}]}; }, $n);
    /*Extensions.QuaternionExtensions end.*/

    /*Extensions.ScriptableObjectExtensions start.*/
    $m("Extensions.ScriptableObjectExtensions", function () { return {"att":1048961,"a":2,"s":true}; }, $n);
    /*Extensions.ScriptableObjectExtensions end.*/

    /*Extensions.StringExtensions start.*/
    $m("Extensions.StringExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GetCachedAppend","is":true,"t":8,"pi":[{"n":"value","pt":$n[0].Double,"ps":0},{"n":"append","pt":$n[0].String,"ps":1}],"sn":"GetCachedAppend","rt":$n[0].String,"p":[$n[0].Double,$n[0].String]},{"a":2,"n":"GetCachedPrepend","is":true,"t":8,"pi":[{"n":"value","pt":$n[0].Double,"ps":0},{"n":"prepend","pt":$n[0].String,"ps":1}],"sn":"GetCachedPrepend","rt":$n[0].String,"p":[$n[0].Double,$n[0].String]},{"a":2,"n":"GetCachedPrepend","is":true,"t":8,"pi":[{"n":"number","pt":$n[0].UInt64,"ps":0},{"n":"prepend","pt":$n[0].String,"ps":1}],"sn":"GetCachedPrepend$1","rt":$n[0].String,"p":[$n[0].UInt64,$n[0].String]},{"a":1,"n":"GetPrettifiedNumber","is":true,"t":8,"pi":[{"n":"number","pt":$n[0].Double,"ps":0},{"n":"suffix","out":true,"pt":$n[0].String,"ps":1}],"sn":"GetPrettifiedNumber","rt":$n[0].Double,"p":[$n[0].Double,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Double, System.Double.format, System.Double.getHashCode);}},{"a":2,"n":"GetStateName","is":true,"t":8,"pi":[{"n":"type","pt":$n[0].Type,"ps":0}],"sn":"GetStateName","rt":$n[0].String,"p":[$n[0].Type]},{"a":2,"n":"IsNullOrWhitespace","is":true,"t":8,"pi":[{"n":"str","pt":$n[0].String,"ps":0}],"sn":"IsNullOrWhitespace","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"PrettifyNumber","is":true,"t":8,"pi":[{"n":"number","pt":$n[0].Double,"ps":0}],"sn":"PrettifyNumber","rt":$n[0].String,"p":[$n[0].Double]},{"a":2,"n":"PrettifyNumber","is":true,"t":8,"pi":[{"n":"number","pt":$n[0].Int32,"ps":0}],"sn":"PrettifyNumber$1","rt":$n[0].String,"p":[$n[0].Int32]},{"a":2,"n":"PrettifyNumber","is":true,"t":8,"pi":[{"n":"number","pt":$n[0].Single,"ps":0}],"sn":"PrettifyNumber$2","rt":$n[0].String,"p":[$n[0].Single]},{"a":2,"n":"PrettifyNumber","is":true,"t":8,"pi":[{"n":"number","pt":$n[0].UInt64,"ps":0}],"sn":"PrettifyNumber$3","rt":$n[0].String,"p":[$n[0].UInt64]},{"a":1,"n":"_cachedAppendString","is":true,"t":4,"rt":$n[13].Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.Double,System.String)),"sn":"_cachedAppendString","ro":true},{"a":1,"n":"_cachedPrependString","is":true,"t":4,"rt":$n[13].Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.Double,System.String)),"sn":"_cachedPrependString","ro":true},{"a":1,"n":"_cachedStateNames","is":true,"t":4,"rt":$n[13].Dictionary$2(System.Type,System.String),"sn":"_cachedStateNames","ro":true},{"a":1,"n":"_stringBuilder","is":true,"t":4,"rt":$n[22].StringBuilder,"sn":"_stringBuilder","ro":true},{"a":1,"n":"_suffixes","is":true,"t":4,"rt":$n[0].Array.type(System.String),"sn":"_suffixes"}]}; }, $n);
    /*Extensions.StringExtensions end.*/

    /*Extensions.TransformExtensions start.*/
    $m("Extensions.TransformExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DestroyAllChildren","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0}],"sn":"DestroyAllChildren","rt":$n[0].Void,"p":[$n[3].Transform]},{"a":2,"n":"SetPositionAndRotation","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"target","pt":$n[3].Transform,"ps":1}],"sn":"SetPositionAndRotation","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Transform]}]}; }, $n);
    /*Extensions.TransformExtensions end.*/

    /*Extensions.TweenExtensions start.*/
    $m("Extensions.TweenExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DoPopDown","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"onUpdate","pt":Function,"ps":2},{"n":"duration","dv":0.3,"o":true,"pt":$n[0].Single,"ps":3},{"n":"percent","dv":1.1,"o":true,"pt":$n[0].Single,"ps":4},{"n":"onPopped","dv":null,"o":true,"pt":Function,"ps":5}],"sn":"DoPopDown","rt":$n[21].Tween,"p":[$n[0].Single,$n[0].Single,Function,$n[0].Single,$n[0].Single,Function]},{"a":2,"n":"DoPopDown","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"duration","dv":0.3,"o":true,"pt":$n[0].Single,"ps":1},{"n":"percent","dv":1.1,"o":true,"pt":$n[0].Single,"ps":2},{"n":"onPopped","dv":null,"o":true,"pt":Function,"ps":3},{"n":"kill","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"targetScale","dv":0.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"startScale","dv":null,"o":true,"pt":$n[3].Vector3,"ps":6}],"sn":"DoPopDown$1","rt":$n[21].Tween,"p":[$n[3].Transform,$n[0].Single,$n[0].Single,Function,$n[0].Boolean,$n[0].Single,$n[3].Vector3]},{"a":2,"n":"DoPopUp","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"onUpdate","pt":Function,"ps":2},{"n":"duration","dv":0.3,"o":true,"pt":$n[0].Single,"ps":3},{"n":"percent","dv":1.1,"o":true,"pt":$n[0].Single,"ps":4},{"n":"onPopped","dv":null,"o":true,"pt":Function,"ps":5}],"sn":"DoPopUp","rt":$n[21].Tween,"p":[$n[0].Single,$n[0].Single,Function,$n[0].Single,$n[0].Single,Function]},{"a":2,"n":"DoPopUp","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"duration","dv":0.3,"o":true,"pt":$n[0].Single,"ps":1},{"n":"percent","dv":1.1,"o":true,"pt":$n[0].Single,"ps":2},{"n":"onPopped","dv":null,"o":true,"pt":Function,"ps":3},{"n":"targetScale","dv":null,"o":true,"pt":$n[3].Vector3,"ps":4},{"n":"fromZero","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"kill","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"ignoreYPercent","dv":false,"o":true,"pt":$n[0].Boolean,"ps":7}],"sn":"DoPopUp$1","rt":$n[21].Tween,"p":[$n[3].Transform,$n[0].Single,$n[0].Single,Function,$n[3].Vector3,$n[0].Boolean,$n[0].Boolean,$n[0].Boolean]}]}; }, $n);
    /*Extensions.TweenExtensions end.*/

    /*Extensions.VectorExtensions start.*/
    $m("Extensions.VectorExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GetRandom","is":true,"t":8,"pi":[{"n":"vector","pt":$n[3].Vector2,"ps":0}],"sn":"GetRandom","rt":$n[0].Single,"p":[$n[3].Vector2],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetRandomInRadiusXZ","is":true,"t":8,"pi":[{"n":"v","pt":$n[3].Vector3,"ps":0},{"n":"radius","pt":$n[0].Single,"ps":1}],"sn":"GetRandomInRadiusXZ","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[0].Single]},{"a":2,"n":"IsInRange","is":true,"t":8,"pi":[{"n":"v","pt":$n[3].Vector3,"ps":0},{"n":"other","pt":$n[3].Vector3,"ps":1},{"n":"range","pt":$n[0].Single,"ps":2}],"sn":"IsInRange","rt":$n[0].Boolean,"p":[$n[3].Vector3,$n[3].Vector3,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsInRangeXZ","is":true,"t":8,"pi":[{"n":"v","pt":$n[3].Vector3,"ps":0},{"n":"other","pt":$n[3].Vector3,"ps":1},{"n":"range","pt":$n[0].Single,"ps":2}],"sn":"IsInRangeXZ","rt":$n[0].Boolean,"p":[$n[3].Vector3,$n[3].Vector3,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsOnScreen","is":true,"t":8,"pi":[{"n":"pos","pt":$n[3].Vector3,"ps":0},{"n":"camera","pt":$n[3].Camera,"ps":1},{"n":"offset","dv":null,"o":true,"pt":$n[3].Vector2,"ps":2}],"sn":"IsOnScreen","rt":$n[0].Boolean,"p":[$n[3].Vector3,$n[3].Camera,$n[3].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"MoveByDistanceTo","is":true,"t":8,"pi":[{"n":"from","pt":$n[3].Vector3,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"distance","pt":$n[0].Single,"ps":2}],"sn":"MoveByDistanceTo","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"RandomPointOnLine","is":true,"t":8,"pi":[{"n":"from","pt":$n[3].Vector3,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1}],"sn":"RandomPointOnLine","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3]},{"a":2,"n":"Set","is":true,"t":8,"pi":[{"n":"v","pt":$n[3].Vector3,"ps":0},{"n":"value","pt":$n[0].Single,"ps":1}],"sn":"Set","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[0].Single]},{"a":2,"n":"SetX","is":true,"t":8,"pi":[{"n":"v","pt":$n[3].Vector3,"ps":0},{"n":"x","pt":$n[0].Single,"ps":1}],"sn":"SetX","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[0].Single]},{"a":2,"n":"SetY","is":true,"t":8,"pi":[{"n":"v","pt":$n[3].Vector3,"ps":0},{"n":"y","pt":$n[0].Single,"ps":1}],"sn":"SetY","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[0].Single]},{"a":2,"n":"SetZ","is":true,"t":8,"pi":[{"n":"v","pt":$n[3].Vector3,"ps":0},{"n":"z","pt":$n[0].Single,"ps":1}],"sn":"SetZ","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[0].Single]}]}; }, $n);
    /*Extensions.VectorExtensions end.*/

    /*Extensions.VectorFactory start.*/
    $m("Extensions.VectorFactory", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Create","is":true,"t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"Create","rt":$n[3].Vector3,"p":[$n[0].Single]},{"a":2,"n":"CreateX","is":true,"t":8,"pi":[{"n":"origin","pt":$n[3].Vector3,"ps":0},{"n":"x","pt":$n[0].Single,"ps":1}],"sn":"CreateX","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[0].Single]},{"a":2,"n":"CreateY","is":true,"t":8,"pi":[{"n":"origin","pt":$n[3].Vector3,"ps":0},{"n":"y","pt":$n[0].Single,"ps":1}],"sn":"CreateY","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[0].Single]}]}; }, $n);
    /*Extensions.VectorFactory end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[21].DOTweenCYInstruction.WaitForCompletion,$n[21].DOTweenCYInstruction.WaitForRewind,$n[21].DOTweenCYInstruction.WaitForKill,$n[21].DOTweenCYInstruction.WaitForElapsedLoops,$n[21].DOTweenCYInstruction.WaitForPosition,$n[21].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[21].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[21].Tween],"pi":[{"n":"tween","pt":$n[21].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[21].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[21].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[21].Tween],"pi":[{"n":"tween","pt":$n[21].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[21].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[21].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[21].Tween],"pi":[{"n":"tween","pt":$n[21].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[21].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[21].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[21].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[21].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[21].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[21].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[21].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[21].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[21].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[21].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[21].Tween],"pi":[{"n":"tween","pt":$n[21].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[21].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[23].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[3].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[23].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[23].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[3].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[23].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody,"ps":0},{"n":"endValue","pt":$n[3].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[21].Sequence,"p":[$n[3].Rigidbody,$n[3].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody,"ps":0},{"n":"path","pt":$n[25].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[21].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[3].Rigidbody,$n[25].Path,$n[0].Single,$n[21].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[21].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[21].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[3].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[21].PathType,$n[21].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody,"ps":0},{"n":"towards","pt":$n[3].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[21].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[24].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[3].Rigidbody,$n[3].Vector3,$n[0].Single,$n[21].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody,"ps":0},{"n":"endValue","pt":$n[3].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].Rigidbody,$n[3].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody,"ps":0},{"n":"path","pt":$n[25].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[21].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[3].Rigidbody,$n[25].Path,$n[0].Single,$n[21].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[21].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[21].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[3].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[21].PathType,$n[21].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody,"ps":0},{"n":"endValue","pt":$n[3].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[21].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[24].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[3].Rigidbody,$n[3].Vector3,$n[0].Single,$n[21].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[21].Sequence,"p":[$n[3].Rigidbody2D,$n[3].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody2D,"ps":0},{"n":"path","pt":$n[25].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[21].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[3].Rigidbody2D,$n[25].Path,$n[0].Single,$n[21].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[21].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[21].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[3].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[21].PathType,$n[21].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].Rigidbody2D,$n[3].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody2D,"ps":0},{"n":"path","pt":$n[25].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[21].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[3].Rigidbody2D,$n[25].Path,$n[0].Single,$n[21].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[21].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[21].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[3].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[21].PathType,$n[21].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[3].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[3].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[21].Tweener,"p":[$n[3].SpriteRenderer,$n[3].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[3].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].SpriteRenderer,$n[3].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[21].Sequence,"p":[$n[3].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[21].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].RectTransform,$n[3].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].RectTransform,$n[3].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].RectTransform,$n[3].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[3].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].RectTransform,$n[3].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Graphic,"ps":0},{"n":"endValue","pt":$n[3].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[21].Tweener,"p":[$n[1].Graphic,$n[3].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"endValue","pt":$n[3].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[21].Tweener,"p":[$n[1].Image,$n[3].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"endValue","pt":$n[3].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[21].Tweener,"p":[$n[1].Text,$n[3].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Graphic,"ps":0},{"n":"endValue","pt":$n[3].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Graphic,$n[3].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"endValue","pt":$n[3].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Image,$n[3].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Outline,"ps":0},{"n":"endValue","pt":$n[3].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Outline,$n[3].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"endValue","pt":$n[3].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Text,$n[3].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[26].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[24].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[1].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[26].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[3].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].LayoutElement,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].LayoutElement,$n[3].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[21].Sequence,"p":[$n[1].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[21].Tweener,"p":[$n[1].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[21].Sequence,"p":[$n[3].RectTransform,$n[3].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].LayoutElement,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].LayoutElement,$n[3].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].ScrollRect,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[21].Tweener,"p":[$n[1].ScrollRect,$n[3].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].RectTransform,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].LayoutElement,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].LayoutElement,$n[3].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"punch","pt":$n[3].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[21].Tweener,"p":[$n[3].RectTransform,$n[3].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Outline,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Outline,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[21].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[21].Tweener,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[21].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[3].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[21].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[21].Tweener,"p":[$n[3].RectTransform,$n[0].Single,$n[3].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[21].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"center","pt":$n[3].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[3].RectTransform,$n[3].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].RectTransform,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].RectTransform,$n[3].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[21].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[24].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[1].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[21].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[21].Tweener,"p":[$n[1].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[21].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[3].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[3].Vector2,"p":[$n[3].RectTransform,$n[3].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[21].Sequence,"p":[$n[3].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[21].Sequence,"p":[$n[3].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Material,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].Material,$n[3].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Material,"ps":0},{"n":"endValue","pt":$n[3].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].Material,$n[3].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[21].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[3].CustomYieldInstruction,"p":[$n[21].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[21].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[3].CustomYieldInstruction,"p":[$n[21].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[21].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[3].CustomYieldInstruction,"p":[$n[21].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[21].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[3].CustomYieldInstruction,"p":[$n[21].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[21].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[3].CustomYieldInstruction,"p":[$n[21].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[21].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[3].CustomYieldInstruction,"p":[$n[21].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[21].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[21].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[25].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[21].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[3].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[25].Path,$n[0].Single,$n[21].PathMode]},{"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[3].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[3].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[27].PathOptions,"ps":0},{"n":"t","pt":$n[21].Tween,"ps":1},{"n":"newRot","pt":$n[3].Quaternion,"ps":2},{"n":"trans","pt":$n[3].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[27].PathOptions,$n[21].Tween,$n[3].Quaternion,$n[3].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DefaultNamespace.MaskedFillBar start.*/
    $m("DefaultNamespace.MaskedFillBar", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"Render","rt":$n[0].Void,"p":[$n[0].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_emptyLocalPosition","t":4,"rt":$n[3].Vector3,"sn":"_emptyLocalPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_fillLocalPosition","t":4,"rt":$n[3].Vector3,"sn":"_fillLocalPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_maskTransform","t":4,"rt":$n[3].Transform,"sn":"_maskTransform"}]}; }, $n);
    /*DefaultNamespace.MaskedFillBar end.*/

    /*Conveyors.ConveyorBuyActivator start.*/
    $m("Conveyors.ConveyorBuyActivator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ActivateAfterDelay","t":8,"sn":"ActivateAfterDelay","rt":$n[5].IEnumerator},{"a":1,"n":"ActivateConveyor","t":8,"sn":"ActivateConveyor","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buyZone","t":4,"rt":$n[12].BuyZone,"sn":"_buyZone"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_conveyor","t":4,"rt":$n[10].VisualConveyor,"sn":"_conveyor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_delay","t":4,"rt":$n[0].Single,"sn":"_delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_waitDelay","t":4,"rt":$n[3].WaitForSeconds,"sn":"_waitDelay"}]}; }, $n);
    /*Conveyors.ConveyorBuyActivator end.*/

    /*Conveyors.ConveyorItem start.*/
    $m("Conveyors.ConveyorItem", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Construct","t":8,"pi":[{"n":"pool","pt":$n[8].IPool$1(Conveyors.ConveyorItem),"ps":0}],"sn":"Construct","rt":$n[0].Void,"p":[$n[8].IPool$1(Conveyors.ConveyorItem)]},{"a":2,"n":"Release","t":8,"sn":"Release","rt":$n[0].Void},{"a":2,"n":"StartMove","t":8,"pi":[{"n":"points","pt":System.Array.type(Conveyors.ConveyorPoint),"ps":0},{"n":"speed","pt":$n[0].Single,"ps":1}],"sn":"StartMove","rt":$n[0].Void,"p":[System.Array.type(Conveyors.ConveyorPoint),$n[0].Single]},{"a":2,"n":"StopMove","t":8,"sn":"StopMove","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_index","t":4,"rt":$n[0].Int32,"sn":"_index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_isMoving","t":4,"rt":$n[0].Boolean,"sn":"_isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_points","t":4,"rt":System.Array.type(Conveyors.ConveyorPoint),"sn":"_points"},{"a":1,"n":"_pool","t":4,"rt":$n[8].IPool$1(Conveyors.ConveyorItem),"sn":"_pool"},{"a":1,"n":"_speed","t":4,"rt":$n[0].Single,"sn":"_speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Conveyors.ConveyorItem end.*/

    /*Conveyors.ConveyorPoint start.*/
    $m("Conveyors.ConveyorPoint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*Conveyors.ConveyorPoint end.*/

    /*Conveyors.InteractiveConveyor start.*/
    $m("Conveyors.InteractiveConveyor", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnSelected","t":8,"sn":"OnSelected","rt":$n[0].Void},{"a":2,"n":"ReceiveBullet","t":8,"pi":[{"n":"bullet","pt":$n[2].Bullet,"ps":0}],"sn":"ReceiveBullet","rt":$n[0].Void,"p":[$n[2].Bullet]},{"a":2,"n":"InteractionPoint","t":16,"rt":$n[3].Transform,"g":{"a":2,"n":"get_InteractionPoint","t":8,"rt":$n[3].Transform,"fg":"InteractionPoint"},"fn":"InteractionPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_interactionPoint","t":4,"rt":$n[3].Transform,"sn":"_interactionPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_point","t":4,"rt":$n[10].InteractiveConveyorPoint,"sn":"_point"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_scaleOnSelect","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"_scaleOnSelect"},{"a":2,"n":"BulletReceived","t":2,"ad":{"a":2,"n":"add_BulletReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addBulletReceived","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_BulletReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeBulletReceived","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*Conveyors.InteractiveConveyor end.*/

    /*Conveyors.InteractiveConveyorAccelerator start.*/
    $m("Conveyors.InteractiveConveyorAccelerator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateSpriteRenderer","t":8,"sn":"AnimateSpriteRenderer","rt":$n[0].Void},{"ov":true,"a":2,"n":"ProcessBullet","t":8,"pi":[{"n":"originalBullet","pt":$n[2].Bullet,"ps":0}],"sn":"ProcessBullet","rt":$n[0].Void,"p":[$n[2].Bullet]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spriteRenderer","t":4,"rt":$n[3].SpriteRenderer,"sn":"_spriteRenderer"}]}; }, $n);
    /*Conveyors.InteractiveConveyorAccelerator end.*/

    /*Conveyors.InteractiveConveyorFinishZone start.*/
    $m("Conveyors.InteractiveConveyorFinishZone", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"other","pt":$n[3].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[3].Collider2D]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_sound","t":4,"rt":$n[3].AudioClip,"sn":"_sound"},{"a":1,"n":"_soundId","t":4,"rt":$n[0].Int32,"sn":"_soundId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_storage","t":4,"rt":$n[2].Storage,"sn":"_storage"}]}; }, $n);
    /*Conveyors.InteractiveConveyorFinishZone end.*/

    /*Conveyors.InteractiveConveyorMultiplier start.*/
    $m("Conveyors.InteractiveConveyorMultiplier", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateSpriteRenderer","t":8,"sn":"AnimateSpriteRenderer","rt":$n[0].Void},{"ov":true,"a":2,"n":"ProcessBullet","t":8,"pi":[{"n":"originalBullet","pt":$n[2].Bullet,"ps":0}],"sn":"ProcessBullet","rt":$n[0].Void,"p":[$n[2].Bullet]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bulletPool","t":4,"rt":$n[8].ResourcePool,"sn":"_bulletPool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spriteRenderer","t":4,"rt":$n[3].SpriteRenderer,"sn":"_spriteRenderer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_startPoints","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"_startPoints"}]}; }, $n);
    /*Conveyors.InteractiveConveyorMultiplier end.*/

    /*Conveyors.InteractiveConveyorPoint start.*/
    $m("Conveyors.InteractiveConveyorPoint", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":3,"n":"MoveBullet","t":8,"pi":[{"n":"bullet","pt":$n[2].Bullet,"ps":0}],"sn":"MoveBullet","rt":$n[0].Void,"p":[$n[2].Bullet]},{"ab":true,"a":2,"n":"ProcessBullet","t":8,"pi":[{"n":"bullet","pt":$n[2].Bullet,"ps":0}],"sn":"ProcessBullet","rt":$n[0].Void,"p":[$n[2].Bullet]},{"a":3,"n":"ProcessBulletByNextPoint","t":8,"pi":[{"n":"bullet","pt":$n[2].Bullet,"ps":0}],"sn":"ProcessBulletByNextPoint","rt":$n[0].Void,"p":[$n[2].Bullet]},{"a":2,"n":"InteractionPoint","t":16,"rt":$n[3].Transform,"g":{"a":2,"n":"get_InteractionPoint","t":8,"rt":$n[3].Transform,"fg":"InteractionPoint"},"fn":"InteractionPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_interactionPoint","t":4,"rt":$n[3].Transform,"sn":"_interactionPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_nextPoint","t":4,"rt":$n[10].InteractiveConveyorPoint,"sn":"_nextPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_speed","t":4,"rt":$n[0].Single,"sn":"_speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Conveyors.InteractiveConveyorPoint end.*/

    /*Conveyors.InteractiveConveyorUnlockPoint start.*/
    $m("Conveyors.InteractiveConveyorUnlockPoint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"ov":true,"a":2,"n":"ProcessBullet","t":8,"pi":[{"n":"bullet","pt":$n[2].Bullet,"ps":0}],"sn":"ProcessBullet","rt":$n[0].Void,"p":[$n[2].Bullet]},{"a":1,"n":"Unlock","t":8,"sn":"Unlock","rt":$n[5].IEnumerator},{"a":2,"n":"ProcessedAtLeastOneBullet","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_ProcessedAtLeastOneBullet","t":8,"rt":$n[0].Boolean,"fg":"ProcessedAtLeastOneBullet","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_ProcessedAtLeastOneBullet","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"ProcessedAtLeastOneBullet"},"fn":"ProcessedAtLeastOneBullet"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cost","t":4,"rt":$n[0].Int32,"sn":"_cost","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_costText","t":4,"rt":$n[9].TMP_Text,"sn":"_costText"},{"a":1,"n":"_currentCost","t":4,"rt":$n[0].Int32,"sn":"_currentCost","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_fillBar","t":4,"rt":$n[28].MaskedFillBar,"sn":"_fillBar"},{"a":1,"n":"_firstBulletProcessed","t":4,"rt":$n[0].Boolean,"sn":"_firstBulletProcessed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_highlightObject","t":4,"rt":$n[3].GameObject,"sn":"_highlightObject"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_lockObject","t":4,"rt":$n[3].GameObject,"sn":"_lockObject"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_mason","t":4,"rt":$n[6].Mason,"sn":"_mason"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_sound","t":4,"rt":$n[3].AudioClip,"sn":"_sound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_toUnlock","t":4,"rt":$n[3].GameObject,"sn":"_toUnlock"},{"a":1,"n":"_unlocked","t":4,"rt":$n[0].Boolean,"sn":"_unlocked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_zombieManager","t":4,"rt":$n[6].ZombieManager,"sn":"_zombieManager"},{"a":1,"backing":true,"n":"<ProcessedAtLeastOneBullet>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"ProcessedAtLeastOneBullet","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Conveyors.InteractiveConveyorUnlockPoint end.*/

    /*Conveyors.SimpleInteractiveConveyorPoint start.*/
    $m("Conveyors.SimpleInteractiveConveyorPoint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"ProcessBullet","t":8,"pi":[{"n":"originalBullet","pt":$n[2].Bullet,"ps":0}],"sn":"ProcessBullet","rt":$n[0].Void,"p":[$n[2].Bullet]}]}; }, $n);
    /*Conveyors.SimpleInteractiveConveyorPoint end.*/

    /*Conveyors.VisualConveyor start.*/
    $m("Conveyors.VisualConveyor", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CreateItem","t":8,"sn":"CreateItem","rt":$n[10].ConveyorItem},{"a":1,"n":"ReleaseItem","is":true,"t":8,"pi":[{"n":"item","pt":$n[10].ConveyorItem,"ps":0}],"sn":"ReleaseItem","rt":$n[0].Void,"p":[$n[10].ConveyorItem]},{"a":2,"n":"StartWork","t":8,"sn":"StartWork","rt":$n[0].Void},{"a":1,"n":"Warmup","t":8,"sn":"Warmup","rt":$n[0].Void},{"a":1,"n":"WorkRoutine","t":8,"sn":"WorkRoutine","rt":$n[5].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_autoStarkWork","t":4,"rt":$n[0].Boolean,"sn":"_autoStarkWork","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_initialAmount","t":4,"rt":$n[0].Int32,"sn":"_initialAmount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveSpeed","t":4,"rt":$n[0].Single,"sn":"_moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":System.Array.type(Conveyors.ConveyorPoint),"sn":"_points"},{"a":1,"n":"_pool","t":4,"rt":$n[8].ObjectPool$1(Conveyors.ConveyorItem),"sn":"_pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_prefab","t":4,"rt":$n[10].ConveyorItem,"sn":"_prefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnDelay","t":4,"rt":$n[0].Single,"sn":"_spawnDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_waitSpawn","t":4,"rt":$n[3].WaitForSeconds,"sn":"_waitSpawn"}]}; }, $n);
    /*Conveyors.VisualConveyor end.*/

    /*Conveyors.VisualConveyorEnd start.*/
    $m("Conveyors.VisualConveyorEnd", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"other","pt":$n[3].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[3].Collider2D]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_targets","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"_targets"}]}; }, $n);
    /*Conveyors.VisualConveyorEnd end.*/

    /*Characters.FailZombie start.*/
    $m("Characters.FailZombie", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AnimateMasonBite","t":8,"pi":[{"n":"zombieMason","pt":$n[6].ZombieMason,"ps":0},{"n":"masonBitePoint","pt":$n[3].Transform,"ps":1}],"sn":"AnimateMasonBite","rt":$n[5].IEnumerator,"p":[$n[6].ZombieMason,$n[3].Transform]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_animating","t":4,"rt":$n[0].Boolean,"sn":"_animating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[6].ZombieAnimator,"sn":"_animator"},{"a":1,"n":"_isWalking","t":4,"rt":$n[0].Boolean,"sn":"_isWalking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveSpeed","t":4,"rt":$n[0].Single,"sn":"_moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_renderer","t":4,"rt":$n[3].SpriteRenderer,"sn":"_renderer"}]}; }, $n);
    /*Characters.FailZombie end.*/

    /*Characters.Glen start.*/
    $m("Characters.Glen", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Disable","t":8,"sn":"Disable","rt":$n[0].Void},{"a":1,"n":"DropBullet","t":8,"sn":"DropBullet","rt":$n[0].Void},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"position","pt":$n[3].Vector3,"ps":0}],"sn":"MoveTo","rt":$n[0].Boolean,"p":[$n[3].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"MoveToConveyor","t":8,"sn":"MoveToConveyor","rt":$n[0].Void},{"a":1,"n":"MoveToWarehouse","t":8,"sn":"MoveToWarehouse","rt":$n[0].Void},{"a":1,"n":"OnConveyorSelected","t":8,"pi":[{"n":"conveyor","pt":$n[10].InteractiveConveyor,"ps":0}],"sn":"OnConveyorSelected","rt":$n[0].Void,"p":[$n[10].InteractiveConveyor]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"PickUpBullet","t":8,"sn":"PickUpBullet","rt":$n[0].Void},{"a":1,"n":"PlayUpgradeEffect","t":8,"sn":"PlayUpgradeEffect","rt":$n[0].Void},{"a":1,"n":"SwitchState","t":8,"pi":[{"n":"state","pt":$n[6].GlenState,"ps":0}],"sn":"SwitchState","rt":$n[0].Void,"p":[$n[6].GlenState]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Upgrade","t":8,"pi":[{"n":"moveSpeed","pt":$n[0].Single,"ps":0},{"n":"waitTime","pt":$n[0].Single,"ps":1}],"sn":"Upgrade","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[6].GlenAnimator,"sn":"_animator"},{"a":1,"n":"_bullet","t":4,"rt":$n[2].Bullet,"sn":"_bullet"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bulletHoldingPoint","t":4,"rt":$n[3].Transform,"sn":"_bulletHoldingPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bulletPickupPoint","t":4,"rt":$n[3].Transform,"sn":"_bulletPickupPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bulletPool","t":4,"rt":$n[8].ResourcePool,"sn":"_bulletPool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bulletSpawnPoint","t":4,"rt":$n[3].Transform,"sn":"_bulletSpawnPoint"},{"a":1,"n":"_inTransition","t":4,"rt":$n[0].Boolean,"sn":"_inTransition","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveSpeed","t":4,"rt":$n[0].Single,"sn":"_moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_selectedConveyor","t":4,"rt":$n[10].InteractiveConveyor,"sn":"_selectedConveyor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_selector","t":4,"rt":$n[11].ConveyorSelector,"sn":"_selector"},{"a":1,"n":"_state","t":4,"rt":$n[6].GlenState,"sn":"_state","box":function ($v) { return Bridge.box($v, Characters.GlenState, System.Enum.toStringFn(Characters.GlenState));}},{"a":1,"n":"_stopped","t":4,"rt":$n[0].Boolean,"sn":"_stopped","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_storage","t":4,"rt":$n[2].Storage,"sn":"_storage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_upgradeMaterial","t":4,"rt":$n[3].Material,"sn":"_upgradeMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_waitTime","t":4,"rt":$n[0].Single,"sn":"_waitTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Characters.Glen end.*/

    /*Characters.GlenAnimator start.*/
    $m("Characters.GlenAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Idle","t":8,"sn":"Idle","rt":$n[0].Void},{"a":2,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"SetTrigger","t":8,"pi":[{"n":"trigger","pt":$n[0].String,"ps":0}],"sn":"SetTrigger","rt":$n[0].Void,"p":[$n[0].String]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animators","t":4,"rt":System.Array.type(UnityEngine.Animator),"sn":"_animators"}]}; }, $n);
    /*Characters.GlenAnimator end.*/

    /*Characters.GlenState start.*/
    $m("Characters.GlenState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DroppingBullet","is":true,"t":4,"rt":$n[6].GlenState,"sn":"DroppingBullet","box":function ($v) { return Bridge.box($v, Characters.GlenState, System.Enum.toStringFn(Characters.GlenState));}},{"a":2,"n":"Idle","is":true,"t":4,"rt":$n[6].GlenState,"sn":"Idle","box":function ($v) { return Bridge.box($v, Characters.GlenState, System.Enum.toStringFn(Characters.GlenState));}},{"a":2,"n":"MovingToConveyor","is":true,"t":4,"rt":$n[6].GlenState,"sn":"MovingToConveyor","box":function ($v) { return Bridge.box($v, Characters.GlenState, System.Enum.toStringFn(Characters.GlenState));}},{"a":2,"n":"MovingToWarehouse","is":true,"t":4,"rt":$n[6].GlenState,"sn":"MovingToWarehouse","box":function ($v) { return Bridge.box($v, Characters.GlenState, System.Enum.toStringFn(Characters.GlenState));}},{"a":2,"n":"PickingUpBullet","is":true,"t":4,"rt":$n[6].GlenState,"sn":"PickingUpBullet","box":function ($v) { return Bridge.box($v, Characters.GlenState, System.Enum.toStringFn(Characters.GlenState));}}]}; }, $n);
    /*Characters.GlenState end.*/

    /*Characters.Mason start.*/
    $m("Characters.Mason", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"IncreaseShootingSpeed","t":8,"sn":"IncreaseShootingSpeed","rt":$n[0].Void},{"a":2,"n":"StopShooting","t":8,"sn":"StopShooting","rt":$n[0].Void},{"a":1,"n":"TryGetRandomZombieInRange","t":8,"pi":[{"n":"target","out":true,"pt":$n[6].Zombie,"ps":0}],"sn":"TryGetRandomZombieInRange","rt":$n[0].Boolean,"p":[$n[6].Zombie],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[6].MasonAnimator,"sn":"_animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_fireDelay","t":4,"rt":$n[0].Single,"sn":"_fireDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_lastTimeShoot","t":4,"rt":$n[0].Single,"sn":"_lastTimeShoot","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_shotSound","t":4,"rt":$n[3].AudioClip,"sn":"_shotSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_sqrFireRange","t":4,"rt":$n[0].Single,"sn":"_sqrFireRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_stopped","t":4,"rt":$n[0].Boolean,"sn":"_stopped","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_storage","t":4,"rt":$n[2].Storage,"sn":"_storage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_zombieManager","t":4,"rt":$n[6].ZombieManager,"sn":"_zombieManager"},{"a":1,"n":"_zombiesInRange","t":4,"rt":$n[13].List$1(Characters.Zombie),"sn":"_zombiesInRange","ro":true}]}; }, $n);
    /*Characters.Mason end.*/

    /*Characters.MasonAnimator start.*/
    $m("Characters.MasonAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"SetTrigger","t":8,"pi":[{"n":"trigger","pt":$n[0].String,"ps":0}],"sn":"SetTrigger","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"Shoot","t":8,"sn":"Shoot","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animators","t":4,"rt":System.Array.type(UnityEngine.Animator),"sn":"_animators"}]}; }, $n);
    /*Characters.MasonAnimator end.*/

    /*Characters.Zombie start.*/
    $m("Characters.Zombie", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Attack","t":8,"sn":"Attack","rt":$n[0].Void},{"a":2,"n":"Construct","t":8,"pi":[{"n":"pool","pt":$n[8].IPool$1(Characters.Zombie),"ps":0}],"sn":"Construct","rt":$n[0].Void,"p":[$n[8].IPool$1(Characters.Zombie)]},{"a":2,"n":"Die","t":8,"sn":"Die","rt":$n[5].IEnumerator},{"a":1,"n":"HasSpace","t":8,"sn":"HasSpace","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetTarget","t":8,"pi":[{"n":"targetPosition","pt":$n[3].Vector3,"ps":0}],"sn":"SetTarget","rt":$n[0].Void,"p":[$n[3].Vector3]},{"a":2,"n":"Tick","t":8,"sn":"Tick","rt":$n[0].Void},{"a":2,"n":"IsAttacking","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsAttacking","t":8,"rt":$n[0].Boolean,"fg":"IsAttacking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsAttacking","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsAttacking"},"fn":"IsAttacking"},{"a":1,"n":"SqrDistanceToTarget","t":16,"rt":$n[0].Single,"g":{"a":1,"n":"get_SqrDistanceToTarget","t":8,"rt":$n[0].Single,"fg":"SqrDistanceToTarget","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"SqrDistanceToTarget"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[6].ZombieAnimator,"sn":"_animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_checkSpacePoint","t":4,"rt":$n[3].Transform,"sn":"_checkSpacePoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_checkSpaceRadius","t":4,"rt":$n[0].Single,"sn":"_checkSpaceRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_coinsSound","t":4,"rt":$n[3].AudioClip,"sn":"_coinsSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_collider","t":4,"rt":$n[3].Collider2D,"sn":"_collider"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_deathMaterial","t":4,"rt":$n[3].Material,"sn":"_deathMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_defaultMaterial","t":4,"rt":$n[3].Material,"sn":"_defaultMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dieTime","t":4,"rt":$n[0].Single,"sn":"_dieTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_hits","t":4,"rt":System.Array.type(UnityEngine.Collider2D),"sn":"_hits","ro":true},{"a":1,"n":"_isWaiting","t":4,"rt":$n[0].Boolean,"sn":"_isWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isWalking","t":4,"rt":$n[0].Boolean,"sn":"_isWalking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveSpeed","t":4,"rt":$n[0].Single,"sn":"_moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_pool","t":4,"rt":$n[8].IPool$1(Characters.Zombie),"sn":"_pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_renderer","t":4,"rt":$n[3].SpriteRenderer,"sn":"_renderer"},{"a":1,"n":"_target","t":4,"rt":$n[3].Vector3,"sn":"_target"},{"a":1,"n":"_waitDieAnimation","t":4,"rt":$n[3].WaitForSeconds,"sn":"_waitDieAnimation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_zombieLayerMask","t":4,"rt":$n[3].LayerMask,"sn":"_zombieLayerMask"},{"a":1,"backing":true,"n":"<IsAttacking>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsAttacking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Characters.Zombie end.*/

    /*Characters.ZombieAnimator start.*/
    $m("Characters.ZombieAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Bite","t":8,"sn":"Bite","rt":$n[0].Void},{"a":2,"n":"Death","t":8,"sn":"Death","rt":$n[0].Void},{"a":2,"n":"Idle","t":8,"sn":"Idle","rt":$n[0].Void},{"a":1,"n":"SetTrigger","t":8,"pi":[{"n":"trigger","pt":$n[0].String,"ps":0}],"sn":"SetTrigger","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"Walk","t":8,"sn":"Walk","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animators","t":4,"rt":System.Array.type(UnityEngine.Animator),"sn":"_animators"}]}; }, $n);
    /*Characters.ZombieAnimator end.*/

    /*Characters.ZombieManager start.*/
    $m("Characters.ZombieManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ActionOnGet","t":8,"pi":[{"n":"zombie","pt":$n[6].Zombie,"ps":0}],"sn":"ActionOnGet","rt":$n[0].Void,"p":[$n[6].Zombie]},{"a":1,"n":"ActionOnRelease","is":true,"t":8,"pi":[{"n":"zombie","pt":$n[6].Zombie,"ps":0}],"sn":"ActionOnRelease","rt":$n[0].Void,"p":[$n[6].Zombie]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CreateZombie","t":8,"sn":"CreateZombie","rt":$n[6].Zombie},{"a":2,"n":"KillZombie","t":8,"pi":[{"n":"zombie","pt":$n[6].Zombie,"ps":0}],"sn":"KillZombie","rt":$n[0].Void,"p":[$n[6].Zombie]},{"a":1,"n":"SetZombieTarget","t":8,"pi":[{"n":"zombie","pt":$n[6].Zombie,"ps":0}],"sn":"SetZombieTarget","rt":$n[0].Void,"p":[$n[6].Zombie]},{"a":1,"n":"SpawnRoutine","t":8,"sn":"SpawnRoutine","rt":$n[5].IEnumerator},{"a":2,"n":"StopSpawn","t":8,"sn":"StopSpawn","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Alive","t":16,"rt":$n[13].HashSet$1(Characters.Zombie),"g":{"a":2,"n":"get_Alive","t":8,"rt":$n[13].HashSet$1(Characters.Zombie),"fg":"Alive"},"fn":"Alive"},{"a":1,"n":"__Property__Initializer__Alive","t":4,"rt":$n[13].HashSet$1(Characters.Zombie),"sn":"__Property__Initializer__Alive"},{"a":1,"n":"_enabled","t":4,"rt":$n[0].Boolean,"sn":"_enabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gameEnd","t":4,"rt":GameEnd,"sn":"_gameEnd"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_maximumOnScreen","t":4,"rt":$n[0].Int32,"sn":"_maximumOnScreen","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_pool","t":4,"rt":$n[8].ObjectPool$1(Characters.Zombie),"sn":"_pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_prefab","t":4,"rt":$n[6].Zombie,"sn":"_prefab"},{"a":1,"n":"_soundId","t":4,"rt":$n[0].Int32,"sn":"_soundId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnInterval","t":4,"rt":$n[3].Vector2,"sn":"_spawnInterval"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnPoints","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"_spawnPoints"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_storage","t":4,"rt":$n[2].Storage,"sn":"_storage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_targetPoints","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"_targetPoints"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_zombieBiteSound","t":4,"rt":$n[3].AudioClip,"sn":"_zombieBiteSound"},{"a":1,"backing":true,"n":"<Alive>k__BackingField","t":4,"rt":$n[13].HashSet$1(Characters.Zombie),"sn":"Alive"}]}; }, $n);
    /*Characters.ZombieManager end.*/

    /*Characters.ZombieMason start.*/
    $m("Characters.ZombieMason", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Transition","t":8,"sn":"Transition","rt":$n[5].IEnumerator},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[6].ZombieAnimator,"sn":"_animator"},{"a":1,"n":"_isWalking","t":4,"rt":$n[0].Boolean,"sn":"_isWalking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_mason","t":4,"rt":$n[6].Mason,"sn":"_mason"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_masonRenderer","t":4,"rt":$n[3].SpriteRenderer,"sn":"_masonRenderer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveSpeed","t":4,"rt":$n[0].Single,"sn":"_moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_renderer","t":4,"rt":$n[3].SpriteRenderer,"sn":"_renderer"}]}; }, $n);
    /*Characters.ZombieMason end.*/

    /*Audio.AudioEffect start.*/
    $m("Audio.AudioEffect", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Construct","t":8,"pi":[{"n":"audioService","pt":$n[29].IAudioService,"ps":0}],"sn":"Construct","rt":$n[0].Void,"p":[$n[29].IAudioService]},{"a":2,"n":"Pause","t":8,"sn":"Pause","rt":$n[0].Void},{"a":2,"n":"Play","t":8,"pi":[{"n":"clip","pt":$n[3].AudioClip,"ps":0},{"n":"loop","pt":$n[0].Boolean,"ps":1},{"n":"playId","pt":$n[0].Int32,"ps":2},{"n":"ignorePause","pt":$n[0].Boolean,"ps":3}],"sn":"Play","rt":$n[0].Void,"p":[$n[3].AudioClip,$n[0].Boolean,$n[0].Int32,$n[0].Boolean]},{"a":1,"n":"ReleaseAfterPlay","t":8,"pi":[{"n":"clip","pt":$n[3].AudioClip,"ps":0}],"sn":"ReleaseAfterPlay","rt":$n[5].IEnumerator,"p":[$n[3].AudioClip]},{"a":2,"n":"Stop","t":8,"pi":[{"n":"removeFromPlayingSounds","dv":true,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"Stop","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"Unpause","t":8,"sn":"Unpause","rt":$n[0].Void},{"a":2,"n":"IsPlaying","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsPlaying","t":8,"rt":$n[0].Boolean,"fg":"IsPlaying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsPlaying","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsPlaying"},"fn":"IsPlaying"},{"a":2,"n":"PlayId","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_PlayId","t":8,"rt":$n[0].Int32,"fg":"PlayId","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_PlayId","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"PlayId"},"fn":"PlayId"},{"a":1,"n":"_audioService","t":4,"rt":$n[29].IAudioService,"sn":"_audioService"},{"a":1,"n":"_ignorePause","t":4,"rt":$n[0].Boolean,"sn":"_ignorePause","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_source","t":4,"rt":$n[3].AudioSource,"sn":"_source"},{"a":1,"backing":true,"n":"<IsPlaying>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsPlaying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<PlayId>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"PlayId","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Audio.AudioEffect end.*/

    /*Audio.AudioService start.*/
    $m("Audio.AudioService", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ActionOnGet","is":true,"t":8,"pi":[{"n":"effect","pt":$n[29].AudioEffect,"ps":0}],"sn":"ActionOnGet","rt":$n[0].Void,"p":[$n[29].AudioEffect]},{"a":1,"n":"ActionOnRelease","is":true,"t":8,"pi":[{"n":"effect","pt":$n[29].AudioEffect,"ps":0}],"sn":"ActionOnRelease","rt":$n[0].Void,"p":[$n[29].AudioEffect]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CreateAudioEffect","t":8,"sn":"CreateAudioEffect","rt":$n[29].AudioEffect},{"a":2,"n":"IsPlaying","t":8,"pi":[{"n":"playId","pt":$n[0].Int32,"ps":0}],"sn":"IsPlaying","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"PauseEffects","t":8,"sn":"PauseEffects","rt":$n[0].Void},{"a":2,"n":"PauseMusic","t":8,"sn":"PauseMusic","rt":$n[0].Void},{"a":1,"n":"PlayEffect","t":8,"pi":[{"n":"clip","pt":$n[3].AudioClip,"ps":0},{"n":"loop","pt":$n[0].Boolean,"ps":1},{"n":"ignorePause","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"PlayEffect","rt":$n[0].Int32,"p":[$n[3].AudioClip,$n[0].Boolean,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"PlayMusic","t":8,"sn":"PlayMusic","rt":$n[0].Void},{"a":2,"n":"Release","t":8,"pi":[{"n":"element","pt":$n[29].AudioEffect,"ps":0},{"n":"removeFromPlayingSounds","pt":$n[0].Boolean,"ps":1}],"sn":"Release","rt":$n[0].Void,"p":[$n[29].AudioEffect,$n[0].Boolean]},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":2,"n":"ResumeEffects","t":8,"sn":"ResumeEffects","rt":$n[0].Void},{"a":2,"n":"StopAndClearEffects","t":8,"sn":"StopAndClearEffects","rt":$n[0].Void},{"a":2,"n":"TryPlayEffect","t":8,"pi":[{"n":"clip","pt":$n[3].AudioClip,"ps":0}],"sn":"TryPlayEffect$1","rt":$n[0].Void,"p":[$n[3].AudioClip]},{"a":2,"n":"TryPlayEffect","t":8,"pi":[{"n":"clip","pt":$n[3].AudioClip,"ps":0},{"n":"playId","out":true,"pt":$n[0].Int32,"ps":1},{"n":"loop","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"TryPlayEffect","rt":$n[0].Boolean,"p":[$n[3].AudioClip,$n[0].Int32,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TryStopEffect","t":8,"pi":[{"n":"playId","pt":$n[0].Int32,"ps":0}],"sn":"TryStopEffect","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"Instance","is":true,"t":4,"rt":$n[29].AudioService,"sn":"Instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_audioEffectPrefab","t":4,"rt":$n[29].AudioEffect,"sn":"_audioEffectPrefab"},{"a":1,"n":"_effectsPool","t":4,"rt":$n[8].ObjectPool$1(Audio.AudioEffect),"sn":"_effectsPool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_musicSource","t":4,"rt":$n[3].AudioSource,"sn":"_musicSource"},{"a":1,"n":"_playId","t":4,"rt":$n[0].Int32,"sn":"_playId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_playingSounds","t":4,"rt":$n[13].HashSet$1(Audio.AudioEffect),"sn":"_playingSounds","ro":true}]}; }, $n);
    /*Audio.AudioService end.*/

    /*Audio.IAudioService start.*/
    $m("Audio.IAudioService", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"PauseEffects","t":8,"sn":"Audio$IAudioService$PauseEffects","rt":$n[0].Void},{"ab":true,"a":2,"n":"PauseMusic","t":8,"sn":"Audio$IAudioService$PauseMusic","rt":$n[0].Void},{"ab":true,"a":2,"n":"PlayMusic","t":8,"sn":"Audio$IAudioService$PlayMusic","rt":$n[0].Void},{"ab":true,"a":2,"n":"Release","t":8,"pi":[{"n":"element","pt":$n[29].AudioEffect,"ps":0},{"n":"removeFromPlayingSounds","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"Audio$IAudioService$Release","rt":$n[0].Void,"p":[$n[29].AudioEffect,$n[0].Boolean]},{"ab":true,"a":2,"n":"Reset","t":8,"sn":"Audio$IAudioService$Reset","rt":$n[0].Void},{"ab":true,"a":2,"n":"ResumeEffects","t":8,"sn":"Audio$IAudioService$ResumeEffects","rt":$n[0].Void},{"ab":true,"a":2,"n":"StopAndClearEffects","t":8,"sn":"Audio$IAudioService$StopAndClearEffects","rt":$n[0].Void},{"ab":true,"a":2,"n":"TryPlayEffect","t":8,"pi":[{"n":"clip","pt":$n[3].AudioClip,"ps":0}],"sn":"Audio$IAudioService$TryPlayEffect$1","rt":$n[0].Void,"p":[$n[3].AudioClip]},{"ab":true,"a":2,"n":"TryPlayEffect","t":8,"pi":[{"n":"clip","pt":$n[3].AudioClip,"ps":0},{"n":"playId","out":true,"pt":$n[0].Int32,"ps":1},{"n":"loop","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"Audio$IAudioService$TryPlayEffect","rt":$n[0].Boolean,"p":[$n[3].AudioClip,$n[0].Int32,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ab":true,"a":2,"n":"TryStopEffect","t":8,"pi":[{"n":"playId","pt":$n[0].Int32,"ps":0}],"sn":"Audio$IAudioService$TryStopEffect","rt":$n[0].Void,"p":[$n[0].Int32]}]}; }, $n);
    /*Audio.IAudioService end.*/

    }});
