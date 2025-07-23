var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3100 = root || request.c( 'UnityEngine.JointSpring' )
  var i3101 = data
  i3100.spring = i3101[0]
  i3100.damper = i3101[1]
  i3100.targetPosition = i3101[2]
  return i3100
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3102 = root || request.c( 'UnityEngine.JointMotor' )
  var i3103 = data
  i3102.m_TargetVelocity = i3103[0]
  i3102.m_Force = i3103[1]
  i3102.m_FreeSpin = i3103[2]
  return i3102
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3104 = root || request.c( 'UnityEngine.JointLimits' )
  var i3105 = data
  i3104.m_Min = i3105[0]
  i3104.m_Max = i3105[1]
  i3104.m_Bounciness = i3105[2]
  i3104.m_BounceMinVelocity = i3105[3]
  i3104.m_ContactDistance = i3105[4]
  i3104.minBounce = i3105[5]
  i3104.maxBounce = i3105[6]
  return i3104
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3106 = root || request.c( 'UnityEngine.JointDrive' )
  var i3107 = data
  i3106.m_PositionSpring = i3107[0]
  i3106.m_PositionDamper = i3107[1]
  i3106.m_MaximumForce = i3107[2]
  i3106.m_UseAcceleration = i3107[3]
  return i3106
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3108 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3109 = data
  i3108.m_Spring = i3109[0]
  i3108.m_Damper = i3109[1]
  return i3108
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3111 = data
  i3110.m_Limit = i3111[0]
  i3110.m_Bounciness = i3111[1]
  i3110.m_ContactDistance = i3111[2]
  return i3110
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3112 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3113 = data
  i3112.m_ExtremumSlip = i3113[0]
  i3112.m_ExtremumValue = i3113[1]
  i3112.m_AsymptoteSlip = i3113[2]
  i3112.m_AsymptoteValue = i3113[3]
  i3112.m_Stiffness = i3113[4]
  return i3112
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3114 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3115 = data
  i3114.m_LowerAngle = i3115[0]
  i3114.m_UpperAngle = i3115[1]
  return i3114
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3116 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3117 = data
  i3116.m_MotorSpeed = i3117[0]
  i3116.m_MaximumMotorTorque = i3117[1]
  return i3116
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3118 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3119 = data
  i3118.m_DampingRatio = i3119[0]
  i3118.m_Frequency = i3119[1]
  i3118.m_Angle = i3119[2]
  return i3118
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3120 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3121 = data
  i3120.m_LowerTranslation = i3121[0]
  i3120.m_UpperTranslation = i3121[1]
  return i3120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3123 = data
  i3122.position = new pc.Vec3( i3123[0], i3123[1], i3123[2] )
  i3122.scale = new pc.Vec3( i3123[3], i3123[4], i3123[5] )
  i3122.rotation = new pc.Quat(i3123[6], i3123[7], i3123[8], i3123[9])
  return i3122
}

Deserializers["Audio.AudioEffect"] = function (request, data, root) {
  var i3124 = root || request.c( 'Audio.AudioEffect' )
  var i3125 = data
  request.r(i3125[0], i3125[1], 0, i3124, '_source')
  return i3124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3127 = data
  request.r(i3127[0], i3127[1], 0, i3126, 'clip')
  request.r(i3127[2], i3127[3], 0, i3126, 'outputAudioMixerGroup')
  i3126.playOnAwake = !!i3127[4]
  i3126.loop = !!i3127[5]
  i3126.time = i3127[6]
  i3126.volume = i3127[7]
  i3126.pitch = i3127[8]
  i3126.enabled = !!i3127[9]
  return i3126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3129 = data
  i3128.name = i3129[0]
  i3128.tagId = i3129[1]
  i3128.enabled = !!i3129[2]
  i3128.isStatic = !!i3129[3]
  i3128.layer = i3129[4]
  return i3128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3131 = data
  i3130.enabled = !!i3131[0]
  request.r(i3131[1], i3131[2], 0, i3130, 'sharedMaterial')
  var i3133 = i3131[3]
  var i3132 = []
  for(var i = 0; i < i3133.length; i += 2) {
  request.r(i3133[i + 0], i3133[i + 1], 2, i3132, '')
  }
  i3130.sharedMaterials = i3132
  i3130.receiveShadows = !!i3131[4]
  i3130.shadowCastingMode = i3131[5]
  i3130.sortingLayerID = i3131[6]
  i3130.sortingOrder = i3131[7]
  i3130.lightmapIndex = i3131[8]
  i3130.lightmapSceneIndex = i3131[9]
  i3130.lightmapScaleOffset = new pc.Vec4( i3131[10], i3131[11], i3131[12], i3131[13] )
  i3130.lightProbeUsage = i3131[14]
  i3130.reflectionProbeUsage = i3131[15]
  i3130.color = new pc.Color(i3131[16], i3131[17], i3131[18], i3131[19])
  request.r(i3131[20], i3131[21], 0, i3130, 'sprite')
  i3130.flipX = !!i3131[22]
  i3130.flipY = !!i3131[23]
  i3130.drawMode = i3131[24]
  i3130.size = new pc.Vec2( i3131[25], i3131[26] )
  i3130.tileMode = i3131[27]
  i3130.adaptiveModeThreshold = i3131[28]
  i3130.maskInteraction = i3131[29]
  i3130.spriteSortPoint = i3131[30]
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3137 = data
  request.r(i3137[0], i3137[1], 0, i3136, 'animatorController')
  request.r(i3137[2], i3137[3], 0, i3136, 'avatar')
  i3136.updateMode = i3137[4]
  i3136.hasTransformHierarchy = !!i3137[5]
  i3136.applyRootMotion = !!i3137[6]
  var i3139 = i3137[7]
  var i3138 = []
  for(var i = 0; i < i3139.length; i += 2) {
  request.r(i3139[i + 0], i3139[i + 1], 2, i3138, '')
  }
  i3136.humanBones = i3138
  i3136.enabled = !!i3137[8]
  return i3136
}

Deserializers["SpriteVfx.SpriteVfx"] = function (request, data, root) {
  var i3142 = root || request.c( 'SpriteVfx.SpriteVfx' )
  var i3143 = data
  request.r(i3143[0], i3143[1], 0, i3142, '_clip')
  return i3142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3144 = root || new pc.UnityMaterial()
  var i3145 = data
  i3144.name = i3145[0]
  request.r(i3145[1], i3145[2], 0, i3144, 'shader')
  i3144.renderQueue = i3145[3]
  i3144.enableInstancing = !!i3145[4]
  var i3147 = i3145[5]
  var i3146 = []
  for(var i = 0; i < i3147.length; i += 1) {
    i3146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3147[i + 0]) );
  }
  i3144.floatParameters = i3146
  var i3149 = i3145[6]
  var i3148 = []
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3149[i + 0]) );
  }
  i3144.colorParameters = i3148
  var i3151 = i3145[7]
  var i3150 = []
  for(var i = 0; i < i3151.length; i += 1) {
    i3150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3151[i + 0]) );
  }
  i3144.vectorParameters = i3150
  var i3153 = i3145[8]
  var i3152 = []
  for(var i = 0; i < i3153.length; i += 1) {
    i3152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3153[i + 0]) );
  }
  i3144.textureParameters = i3152
  var i3155 = i3145[9]
  var i3154 = []
  for(var i = 0; i < i3155.length; i += 1) {
    i3154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3155[i + 0]) );
  }
  i3144.materialFlags = i3154
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3159 = data
  i3158.name = i3159[0]
  i3158.value = i3159[1]
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3163 = data
  i3162.name = i3163[0]
  i3162.value = new pc.Color(i3163[1], i3163[2], i3163[3], i3163[4])
  return i3162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3167 = data
  i3166.name = i3167[0]
  i3166.value = new pc.Vec4( i3167[1], i3167[2], i3167[3], i3167[4] )
  return i3166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3171 = data
  i3170.name = i3171[0]
  request.r(i3171[1], i3171[2], 0, i3170, 'value')
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3175 = data
  i3174.name = i3175[0]
  i3174.enabled = !!i3175[1]
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3177 = data
  i3176.name = i3177[0]
  i3176.width = i3177[1]
  i3176.height = i3177[2]
  i3176.mipmapCount = i3177[3]
  i3176.anisoLevel = i3177[4]
  i3176.filterMode = i3177[5]
  i3176.hdr = !!i3177[6]
  i3176.format = i3177[7]
  i3176.wrapMode = i3177[8]
  i3176.alphaIsTransparency = !!i3177[9]
  i3176.alphaSource = i3177[10]
  i3176.graphicsFormat = i3177[11]
  i3176.sRGBTexture = !!i3177[12]
  i3176.desiredColorSpace = i3177[13]
  i3176.wrapU = i3177[14]
  i3176.wrapV = i3177[15]
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3179 = data
  i3178.bodyType = i3179[0]
  request.r(i3179[1], i3179[2], 0, i3178, 'material')
  i3178.simulated = !!i3179[3]
  i3178.useAutoMass = !!i3179[4]
  i3178.mass = i3179[5]
  i3178.drag = i3179[6]
  i3178.angularDrag = i3179[7]
  i3178.gravityScale = i3179[8]
  i3178.collisionDetectionMode = i3179[9]
  i3178.sleepMode = i3179[10]
  i3178.constraints = i3179[11]
  return i3178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3181 = data
  i3180.usedByComposite = !!i3181[0]
  i3180.autoTiling = !!i3181[1]
  i3180.size = new pc.Vec2( i3181[2], i3181[3] )
  i3180.edgeRadius = i3181[4]
  i3180.enabled = !!i3181[5]
  i3180.isTrigger = !!i3181[6]
  i3180.usedByEffector = !!i3181[7]
  i3180.density = i3181[8]
  i3180.offset = new pc.Vec2( i3181[9], i3181[10] )
  request.r(i3181[11], i3181[12], 0, i3180, 'material')
  return i3180
}

Deserializers["GameResources.Bullet"] = function (request, data, root) {
  var i3182 = root || request.c( 'GameResources.Bullet' )
  var i3183 = data
  i3182._type = i3183[0]
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3185 = data
  i3184.pivot = new pc.Vec2( i3185[0], i3185[1] )
  i3184.anchorMin = new pc.Vec2( i3185[2], i3185[3] )
  i3184.anchorMax = new pc.Vec2( i3185[4], i3185[5] )
  i3184.sizeDelta = new pc.Vec2( i3185[6], i3185[7] )
  i3184.anchoredPosition3D = new pc.Vec3( i3185[8], i3185[9], i3185[10] )
  i3184.rotation = new pc.Quat(i3185[11], i3185[12], i3185[13], i3185[14])
  i3184.scale = new pc.Vec3( i3185[15], i3185[16], i3185[17] )
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3187 = data
  i3186.cullTransparentMesh = !!i3187[0]
  return i3186
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3188 = root || request.c( 'UnityEngine.UI.Image' )
  var i3189 = data
  request.r(i3189[0], i3189[1], 0, i3188, 'm_Sprite')
  i3188.m_Type = i3189[2]
  i3188.m_PreserveAspect = !!i3189[3]
  i3188.m_FillCenter = !!i3189[4]
  i3188.m_FillMethod = i3189[5]
  i3188.m_FillAmount = i3189[6]
  i3188.m_FillClockwise = !!i3189[7]
  i3188.m_FillOrigin = i3189[8]
  i3188.m_UseSpriteMesh = !!i3189[9]
  i3188.m_PixelsPerUnitMultiplier = i3189[10]
  request.r(i3189[11], i3189[12], 0, i3188, 'm_Material')
  i3188.m_Maskable = !!i3189[13]
  i3188.m_Color = new pc.Color(i3189[14], i3189[15], i3189[16], i3189[17])
  i3188.m_RaycastTarget = !!i3189[18]
  i3188.m_RaycastPadding = new pc.Vec4( i3189[19], i3189[20], i3189[21], i3189[22] )
  return i3188
}

Deserializers["Characters.Zombie"] = function (request, data, root) {
  var i3190 = root || request.c( 'Characters.Zombie' )
  var i3191 = data
  request.r(i3191[0], i3191[1], 0, i3190, '_renderer')
  request.r(i3191[2], i3191[3], 0, i3190, '_collider')
  request.r(i3191[4], i3191[5], 0, i3190, '_animator')
  i3190._moveSpeed = i3191[6]
  i3190._dieTime = i3191[7]
  request.r(i3191[8], i3191[9], 0, i3190, '_defaultMaterial')
  request.r(i3191[10], i3191[11], 0, i3190, '_deathMaterial')
  request.r(i3191[12], i3191[13], 0, i3190, '_coinsSound')
  request.r(i3191[14], i3191[15], 0, i3190, '_checkSpacePoint')
  i3190._zombieLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3191[16] )
  i3190._checkSpaceRadius = i3191[17]
  return i3190
}

Deserializers["Characters.ZombieAnimator"] = function (request, data, root) {
  var i3192 = root || request.c( 'Characters.ZombieAnimator' )
  var i3193 = data
  var i3195 = i3193[0]
  var i3194 = []
  for(var i = 0; i < i3195.length; i += 2) {
  request.r(i3195[i + 0], i3195[i + 1], 2, i3194, '')
  }
  i3192._animators = i3194
  return i3192
}

Deserializers["Characters.FailZombie"] = function (request, data, root) {
  var i3198 = root || request.c( 'Characters.FailZombie' )
  var i3199 = data
  request.r(i3199[0], i3199[1], 0, i3198, '_animator')
  request.r(i3199[2], i3199[3], 0, i3198, '_renderer')
  i3198._moveSpeed = i3199[4]
  return i3198
}

Deserializers["Conveyors.ConveyorItem"] = function (request, data, root) {
  var i3200 = root || request.c( 'Conveyors.ConveyorItem' )
  var i3201 = data
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3203 = data
  i3202.name = i3203[0]
  i3202.index = i3203[1]
  i3202.startup = !!i3203[2]
  return i3202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3205 = data
  i3204.enabled = !!i3205[0]
  i3204.aspect = i3205[1]
  i3204.orthographic = !!i3205[2]
  i3204.orthographicSize = i3205[3]
  i3204.backgroundColor = new pc.Color(i3205[4], i3205[5], i3205[6], i3205[7])
  i3204.nearClipPlane = i3205[8]
  i3204.farClipPlane = i3205[9]
  i3204.fieldOfView = i3205[10]
  i3204.depth = i3205[11]
  i3204.clearFlags = i3205[12]
  i3204.cullingMask = i3205[13]
  i3204.rect = i3205[14]
  request.r(i3205[15], i3205[16], 0, i3204, 'targetTexture')
  i3204.usePhysicalProperties = !!i3205[17]
  i3204.focalLength = i3205[18]
  i3204.sensorSize = new pc.Vec2( i3205[19], i3205[20] )
  i3204.lensShift = new pc.Vec2( i3205[21], i3205[22] )
  i3204.gateFit = i3205[23]
  i3204.commandBufferCount = i3205[24]
  i3204.cameraType = i3205[25]
  return i3204
}

Deserializers["FixedWidthCamera"] = function (request, data, root) {
  var i3206 = root || request.c( 'FixedWidthCamera' )
  var i3207 = data
  i3206._targetWidth = i3207[0]
  i3206._targetHeight = i3207[1]
  return i3206
}

Deserializers["Audio.AudioService"] = function (request, data, root) {
  var i3208 = root || request.c( 'Audio.AudioService' )
  var i3209 = data
  request.r(i3209[0], i3209[1], 0, i3208, '_musicSource')
  request.r(i3209[2], i3209[3], 0, i3208, '_audioEffectPrefab')
  return i3208
}

Deserializers["SpriteVfx.SpriteVfxService"] = function (request, data, root) {
  var i3210 = root || request.c( 'SpriteVfx.SpriteVfxService' )
  var i3211 = data
  var i3213 = i3211[0]
  var i3212 = []
  for(var i = 0; i < i3213.length; i += 2) {
  request.r(i3213[i + 0], i3213[i + 1], 2, i3212, '')
  }
  i3210._pools = i3212
  return i3210
}

Deserializers["SpriteVfx.SpriteVfxPool"] = function (request, data, root) {
  var i3216 = root || request.c( 'SpriteVfx.SpriteVfxPool' )
  var i3217 = data
  i3216._type = i3217[0]
  request.r(i3217[1], i3217[2], 0, i3216, '_prefab')
  return i3216
}

Deserializers["Pools.ResourcesPools"] = function (request, data, root) {
  var i3218 = root || request.c( 'Pools.ResourcesPools' )
  var i3219 = data
  var i3221 = i3219[0]
  var i3220 = []
  for(var i = 0; i < i3221.length; i += 2) {
  request.r(i3221[i + 0], i3221[i + 1], 2, i3220, '')
  }
  i3218._pools = i3220
  return i3218
}

Deserializers["Pools.ResourcePool"] = function (request, data, root) {
  var i3224 = root || request.c( 'Pools.ResourcePool' )
  var i3225 = data
  request.r(i3225[0], i3225[1], 0, i3224, '_prefab')
  return i3224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3227 = data
  i3226.enabled = !!i3227[0]
  i3226.planeDistance = i3227[1]
  i3226.referencePixelsPerUnit = i3227[2]
  i3226.isFallbackOverlay = !!i3227[3]
  i3226.renderMode = i3227[4]
  i3226.renderOrder = i3227[5]
  i3226.sortingLayerName = i3227[6]
  i3226.sortingOrder = i3227[7]
  i3226.scaleFactor = i3227[8]
  request.r(i3227[9], i3227[10], 0, i3226, 'worldCamera')
  i3226.overrideSorting = !!i3227[11]
  i3226.pixelPerfect = !!i3227[12]
  i3226.targetDisplay = i3227[13]
  i3226.overridePixelPerfect = !!i3227[14]
  return i3226
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3228 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3229 = data
  i3228.m_UiScaleMode = i3229[0]
  i3228.m_ReferencePixelsPerUnit = i3229[1]
  i3228.m_ScaleFactor = i3229[2]
  i3228.m_ReferenceResolution = new pc.Vec2( i3229[3], i3229[4] )
  i3228.m_ScreenMatchMode = i3229[5]
  i3228.m_MatchWidthOrHeight = i3229[6]
  i3228.m_PhysicalUnit = i3229[7]
  i3228.m_FallbackScreenDPI = i3229[8]
  i3228.m_DefaultSpriteDPI = i3229[9]
  i3228.m_DynamicPixelsPerUnit = i3229[10]
  i3228.m_PresetInfoIsWorld = !!i3229[11]
  return i3228
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3230 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3231 = data
  i3230.m_IgnoreReversedGraphics = !!i3231[0]
  i3230.m_BlockingObjects = i3231[1]
  i3230.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3231[2] )
  return i3230
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3232 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3233 = data
  request.r(i3233[0], i3233[1], 0, i3232, 'm_FirstSelected')
  i3232.m_sendNavigationEvents = !!i3233[2]
  i3232.m_DragThreshold = i3233[3]
  return i3232
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3234 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3235 = data
  i3234.m_HorizontalAxis = i3235[0]
  i3234.m_VerticalAxis = i3235[1]
  i3234.m_SubmitButton = i3235[2]
  i3234.m_CancelButton = i3235[3]
  i3234.m_InputActionsPerSecond = i3235[4]
  i3234.m_RepeatDelay = i3235[5]
  i3234.m_ForceModuleActive = !!i3235[6]
  i3234.m_SendPointerHoverToParent = !!i3235[7]
  return i3234
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3236 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3237 = data
  i3236.m_hasFontAssetChanged = !!i3237[0]
  request.r(i3237[1], i3237[2], 0, i3236, 'm_baseMaterial')
  i3236.m_maskOffset = new pc.Vec4( i3237[3], i3237[4], i3237[5], i3237[6] )
  i3236.m_text = i3237[7]
  i3236.m_isRightToLeft = !!i3237[8]
  request.r(i3237[9], i3237[10], 0, i3236, 'm_fontAsset')
  request.r(i3237[11], i3237[12], 0, i3236, 'm_sharedMaterial')
  var i3239 = i3237[13]
  var i3238 = []
  for(var i = 0; i < i3239.length; i += 2) {
  request.r(i3239[i + 0], i3239[i + 1], 2, i3238, '')
  }
  i3236.m_fontSharedMaterials = i3238
  request.r(i3237[14], i3237[15], 0, i3236, 'm_fontMaterial')
  var i3241 = i3237[16]
  var i3240 = []
  for(var i = 0; i < i3241.length; i += 2) {
  request.r(i3241[i + 0], i3241[i + 1], 2, i3240, '')
  }
  i3236.m_fontMaterials = i3240
  i3236.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3237[17], i3237[18], i3237[19], i3237[20])
  i3236.m_fontColor = new pc.Color(i3237[21], i3237[22], i3237[23], i3237[24])
  i3236.m_enableVertexGradient = !!i3237[25]
  i3236.m_colorMode = i3237[26]
  i3236.m_fontColorGradient = request.d('TMPro.VertexGradient', i3237[27], i3236.m_fontColorGradient)
  request.r(i3237[28], i3237[29], 0, i3236, 'm_fontColorGradientPreset')
  request.r(i3237[30], i3237[31], 0, i3236, 'm_spriteAsset')
  i3236.m_tintAllSprites = !!i3237[32]
  request.r(i3237[33], i3237[34], 0, i3236, 'm_StyleSheet')
  i3236.m_TextStyleHashCode = i3237[35]
  i3236.m_overrideHtmlColors = !!i3237[36]
  i3236.m_faceColor = UnityEngine.Color32.ConstructColor(i3237[37], i3237[38], i3237[39], i3237[40])
  i3236.m_fontSize = i3237[41]
  i3236.m_fontSizeBase = i3237[42]
  i3236.m_fontWeight = i3237[43]
  i3236.m_enableAutoSizing = !!i3237[44]
  i3236.m_fontSizeMin = i3237[45]
  i3236.m_fontSizeMax = i3237[46]
  i3236.m_fontStyle = i3237[47]
  i3236.m_HorizontalAlignment = i3237[48]
  i3236.m_VerticalAlignment = i3237[49]
  i3236.m_textAlignment = i3237[50]
  i3236.m_characterSpacing = i3237[51]
  i3236.m_wordSpacing = i3237[52]
  i3236.m_lineSpacing = i3237[53]
  i3236.m_lineSpacingMax = i3237[54]
  i3236.m_paragraphSpacing = i3237[55]
  i3236.m_charWidthMaxAdj = i3237[56]
  i3236.m_enableWordWrapping = !!i3237[57]
  i3236.m_wordWrappingRatios = i3237[58]
  i3236.m_overflowMode = i3237[59]
  request.r(i3237[60], i3237[61], 0, i3236, 'm_linkedTextComponent')
  request.r(i3237[62], i3237[63], 0, i3236, 'parentLinkedComponent')
  i3236.m_enableKerning = !!i3237[64]
  i3236.m_enableExtraPadding = !!i3237[65]
  i3236.checkPaddingRequired = !!i3237[66]
  i3236.m_isRichText = !!i3237[67]
  i3236.m_parseCtrlCharacters = !!i3237[68]
  i3236.m_isOrthographic = !!i3237[69]
  i3236.m_isCullingEnabled = !!i3237[70]
  i3236.m_horizontalMapping = i3237[71]
  i3236.m_verticalMapping = i3237[72]
  i3236.m_uvLineOffset = i3237[73]
  i3236.m_geometrySortingOrder = i3237[74]
  i3236.m_IsTextObjectScaleStatic = !!i3237[75]
  i3236.m_VertexBufferAutoSizeReduction = !!i3237[76]
  i3236.m_useMaxVisibleDescender = !!i3237[77]
  i3236.m_pageToDisplay = i3237[78]
  i3236.m_margin = new pc.Vec4( i3237[79], i3237[80], i3237[81], i3237[82] )
  i3236.m_isUsingLegacyAnimationComponent = !!i3237[83]
  i3236.m_isVolumetricText = !!i3237[84]
  request.r(i3237[85], i3237[86], 0, i3236, 'm_Material')
  i3236.m_Maskable = !!i3237[87]
  i3236.m_Color = new pc.Color(i3237[88], i3237[89], i3237[90], i3237[91])
  i3236.m_RaycastTarget = !!i3237[92]
  i3236.m_RaycastPadding = new pc.Vec4( i3237[93], i3237[94], i3237[95], i3237[96] )
  return i3236
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3242 = root || request.c( 'TMPro.VertexGradient' )
  var i3243 = data
  i3242.topLeft = new pc.Color(i3243[0], i3243[1], i3243[2], i3243[3])
  i3242.topRight = new pc.Color(i3243[4], i3243[5], i3243[6], i3243[7])
  i3242.bottomLeft = new pc.Color(i3243[8], i3243[9], i3243[10], i3243[11])
  i3242.bottomRight = new pc.Color(i3243[12], i3243[13], i3243[14], i3243[15])
  return i3242
}

Deserializers["Money"] = function (request, data, root) {
  var i3244 = root || request.c( 'Money' )
  var i3245 = data
  request.r(i3245[0], i3245[1], 0, i3244, '_text')
  return i3244
}

Deserializers["GameResources.ResourceView"] = function (request, data, root) {
  var i3246 = root || request.c( 'GameResources.ResourceView' )
  var i3247 = data
  request.r(i3247[0], i3247[1], 0, i3246, '_storage')
  i3246._type = i3247[2]
  request.r(i3247[3], i3247[4], 0, i3246, '_amount')
  i3246._useShowHide = !!i3247[5]
  i3246._countChangeDuration = i3247[6]
  i3246._punchScale = i3247[7]
  i3246._punchDuration = i3247[8]
  i3246._punchColor = new pc.Color(i3247[9], i3247[10], i3247[11], i3247[12])
  return i3246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3249 = data
  i3248.m_Alpha = i3249[0]
  i3248.m_Interactable = !!i3249[1]
  i3248.m_BlocksRaycasts = !!i3249[2]
  i3248.m_IgnoreParentGroups = !!i3249[3]
  i3248.enabled = !!i3249[4]
  return i3248
}

Deserializers["PackShots.PackShotChooser"] = function (request, data, root) {
  var i3250 = root || request.c( 'PackShots.PackShotChooser' )
  var i3251 = data
  request.r(i3251[0], i3251[1], 0, i3250, '_horizontalPackShot')
  request.r(i3251[2], i3251[3], 0, i3250, '_verticalPackShot')
  return i3250
}

Deserializers["PackShots.PackShot"] = function (request, data, root) {
  var i3252 = root || request.c( 'PackShots.PackShot' )
  var i3253 = data
  request.r(i3253[0], i3253[1], 0, i3252, '_background')
  request.r(i3253[2], i3253[3], 0, i3252, '_title')
  request.r(i3253[4], i3253[5], 0, i3252, '_playButton')
  return i3252
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i3254 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i3255 = data
  i3254.m_AspectMode = i3255[0]
  i3254.m_AspectRatio = i3255[1]
  return i3254
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3256 = root || request.c( 'UnityEngine.UI.Button' )
  var i3257 = data
  i3256.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3257[0], i3256.m_OnClick)
  i3256.m_Navigation = request.d('UnityEngine.UI.Navigation', i3257[1], i3256.m_Navigation)
  i3256.m_Transition = i3257[2]
  i3256.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3257[3], i3256.m_Colors)
  i3256.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3257[4], i3256.m_SpriteState)
  i3256.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3257[5], i3256.m_AnimationTriggers)
  i3256.m_Interactable = !!i3257[6]
  request.r(i3257[7], i3257[8], 0, i3256, 'm_TargetGraphic')
  return i3256
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3258 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3259 = data
  i3258.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3259[0], i3258.m_PersistentCalls)
  return i3258
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3260 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3261 = data
  var i3263 = i3261[0]
  var i3262 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3263.length; i += 1) {
    i3262.add(request.d('UnityEngine.Events.PersistentCall', i3263[i + 0]));
  }
  i3260.m_Calls = i3262
  return i3260
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3266 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3267 = data
  request.r(i3267[0], i3267[1], 0, i3266, 'm_Target')
  i3266.m_TargetAssemblyTypeName = i3267[2]
  i3266.m_MethodName = i3267[3]
  i3266.m_Mode = i3267[4]
  i3266.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3267[5], i3266.m_Arguments)
  i3266.m_CallState = i3267[6]
  return i3266
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3268 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3269 = data
  i3268.m_Mode = i3269[0]
  i3268.m_WrapAround = !!i3269[1]
  request.r(i3269[2], i3269[3], 0, i3268, 'm_SelectOnUp')
  request.r(i3269[4], i3269[5], 0, i3268, 'm_SelectOnDown')
  request.r(i3269[6], i3269[7], 0, i3268, 'm_SelectOnLeft')
  request.r(i3269[8], i3269[9], 0, i3268, 'm_SelectOnRight')
  return i3268
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3270 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3271 = data
  i3270.m_NormalColor = new pc.Color(i3271[0], i3271[1], i3271[2], i3271[3])
  i3270.m_HighlightedColor = new pc.Color(i3271[4], i3271[5], i3271[6], i3271[7])
  i3270.m_PressedColor = new pc.Color(i3271[8], i3271[9], i3271[10], i3271[11])
  i3270.m_SelectedColor = new pc.Color(i3271[12], i3271[13], i3271[14], i3271[15])
  i3270.m_DisabledColor = new pc.Color(i3271[16], i3271[17], i3271[18], i3271[19])
  i3270.m_ColorMultiplier = i3271[20]
  i3270.m_FadeDuration = i3271[21]
  return i3270
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3272 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3273 = data
  request.r(i3273[0], i3273[1], 0, i3272, 'm_HighlightedSprite')
  request.r(i3273[2], i3273[3], 0, i3272, 'm_PressedSprite')
  request.r(i3273[4], i3273[5], 0, i3272, 'm_SelectedSprite')
  request.r(i3273[6], i3273[7], 0, i3272, 'm_DisabledSprite')
  return i3272
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3274 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3275 = data
  i3274.m_NormalTrigger = i3275[0]
  i3274.m_HighlightedTrigger = i3275[1]
  i3274.m_PressedTrigger = i3275[2]
  i3274.m_SelectedTrigger = i3275[3]
  i3274.m_DisabledTrigger = i3275[4]
  return i3274
}

Deserializers["ZombieTransition"] = function (request, data, root) {
  var i3276 = root || request.c( 'ZombieTransition' )
  var i3277 = data
  request.r(i3277[0], i3277[1], 0, i3276, '_canvasRect')
  request.r(i3277[2], i3277[3], 0, i3276, '_imagePrefab')
  i3276._spacing = new pc.Vec2( i3277[4], i3277[5] )
  i3276._randomOffset = new pc.Vec2( i3277[6], i3277[7] )
  i3276._transitionDuration = i3277[8]
  request.r(i3277[9], i3277[10], 0, i3276, '_packShot')
  request.r(i3277[11], i3277[12], 0, i3276, '_zombieManager')
  var i3279 = i3277[13]
  var i3278 = []
  for(var i = 0; i < i3279.length; i += 2) {
  request.r(i3279[i + 0], i3279[i + 1], 2, i3278, '')
  }
  i3276._children = i3278
  return i3276
}

Deserializers["Scenario"] = function (request, data, root) {
  var i3282 = root || request.c( 'Scenario' )
  var i3283 = data
  request.r(i3283[0], i3283[1], 0, i3282, '_conveyorSelector')
  request.r(i3283[2], i3283[3], 0, i3282, '_gameEnd')
  request.r(i3283[4], i3283[5], 0, i3282, '_storage')
  request.r(i3283[6], i3283[7], 0, i3282, '_bulletsPool')
  request.r(i3283[8], i3283[9], 0, i3282, '_zombieManager')
  request.r(i3283[10], i3283[11], 0, i3282, '_unlockPoint')
  request.r(i3283[12], i3283[13], 0, i3282, '_closedConveyor')
  var i3285 = i3283[14]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 2) {
  request.r(i3285[i + 0], i3285[i + 1], 2, i3284, '')
  }
  i3282._conveyors = i3284
  return i3282
}

Deserializers["GameEnd"] = function (request, data, root) {
  var i3288 = root || request.c( 'GameEnd' )
  var i3289 = data
  request.r(i3289[0], i3289[1], 0, i3288, '_zombieTransition')
  request.r(i3289[2], i3289[3], 0, i3288, '_packShot')
  request.r(i3289[4], i3289[5], 0, i3288, '_explosionPoint')
  request.r(i3289[6], i3289[7], 0, i3288, '_borderToDisable')
  request.r(i3289[8], i3289[9], 0, i3288, '_borderToEnable')
  var i3291 = i3289[10]
  var i3290 = []
  for(var i = 0; i < i3291.length; i += 2) {
  request.r(i3291[i + 0], i3291[i + 1], 2, i3290, '')
  }
  i3288._zombieSpawnPoints = i3290
  var i3293 = i3289[11]
  var i3292 = []
  for(var i = 0; i < i3293.length; i += 2) {
  request.r(i3293[i + 0], i3293[i + 1], 2, i3292, '')
  }
  i3288._toDisable = i3292
  request.r(i3289[12], i3289[13], 0, i3288, '_failZombiePrefab')
  request.r(i3289[14], i3289[15], 0, i3288, '_masonZombie')
  request.r(i3289[16], i3289[17], 0, i3288, '_masonBitePoint')
  request.r(i3289[18], i3289[19], 0, i3288, '_glen')
  request.r(i3289[20], i3289[21], 0, i3288, '_explosionSound')
  request.r(i3289[22], i3289[23], 0, i3288, '_failSound')
  return i3288
}

Deserializers["Inputs.ConveyorSelector"] = function (request, data, root) {
  var i3294 = root || request.c( 'Inputs.ConveyorSelector' )
  var i3295 = data
  i3294._clickMask = UnityEngine.LayerMask.FromIntegerValue( i3295[0] )
  request.r(i3295[1], i3295[2], 0, i3294, '_sound')
  return i3294
}

Deserializers["GameResources.Storage"] = function (request, data, root) {
  var i3296 = root || request.c( 'GameResources.Storage' )
  var i3297 = data
  var i3299 = i3297[0]
  var i3298 = new (System.Collections.Generic.List$1(Bridge.ns('GameResources.ResourcePack')))
  for(var i = 0; i < i3299.length; i += 1) {
    i3298.add(request.d('GameResources.ResourcePack', i3299[i + 0]));
  }
  i3296._startResources = i3298
  return i3296
}

Deserializers["GameResources.ResourcePack"] = function (request, data, root) {
  var i3302 = root || request.c( 'GameResources.ResourcePack' )
  var i3303 = data
  i3302.Type = i3303[0]
  i3302.Amount = i3303[1]
  return i3302
}

Deserializers["Conveyors.VisualConveyor"] = function (request, data, root) {
  var i3304 = root || request.c( 'Conveyors.VisualConveyor' )
  var i3305 = data
  i3304._autoStarkWork = !!i3305[0]
  request.r(i3305[1], i3305[2], 0, i3304, '_prefab')
  i3304._spawnDelay = i3305[3]
  i3304._moveSpeed = i3305[4]
  i3304._initialAmount = i3305[5]
  var i3307 = i3305[6]
  var i3306 = []
  for(var i = 0; i < i3307.length; i += 2) {
  request.r(i3307[i + 0], i3307[i + 1], 2, i3306, '')
  }
  i3304._points = i3306
  return i3304
}

Deserializers["Scroller.SpriteScroller"] = function (request, data, root) {
  var i3310 = root || request.c( 'Scroller.SpriteScroller' )
  var i3311 = data
  request.r(i3311[0], i3311[1], 0, i3310, '_renderer')
  i3310._useSharedMaterial = !!i3311[2]
  i3310._speedX = i3311[3]
  i3310._speedY = i3311[4]
  return i3310
}

Deserializers["Conveyors.ConveyorPoint"] = function (request, data, root) {
  var i3312 = root || request.c( 'Conveyors.ConveyorPoint' )
  var i3313 = data
  return i3312
}

Deserializers["Conveyors.VisualConveyorEnd"] = function (request, data, root) {
  var i3314 = root || request.c( 'Conveyors.VisualConveyorEnd' )
  var i3315 = data
  var i3317 = i3315[0]
  var i3316 = []
  for(var i = 0; i < i3317.length; i += 2) {
  request.r(i3317[i + 0], i3317[i + 1], 2, i3316, '')
  }
  i3314._targets = i3316
  return i3314
}

Deserializers["Conveyors.InteractiveConveyor"] = function (request, data, root) {
  var i3318 = root || request.c( 'Conveyors.InteractiveConveyor' )
  var i3319 = data
  request.r(i3319[0], i3319[1], 0, i3318, '_interactionPoint')
  request.r(i3319[2], i3319[3], 0, i3318, '_point')
  var i3321 = i3319[4]
  var i3320 = []
  for(var i = 0; i < i3321.length; i += 2) {
  request.r(i3321[i + 0], i3321[i + 1], 2, i3320, '')
  }
  i3318._scaleOnSelect = i3320
  return i3318
}

Deserializers["SpriteFlash"] = function (request, data, root) {
  var i3322 = root || request.c( 'SpriteFlash' )
  var i3323 = data
  request.r(i3323[0], i3323[1], 0, i3322, '_spriteRenderer')
  i3322._duration = i3323[2]
  i3322._alwaysOnAfterClick = !!i3323[3]
  request.r(i3323[4], i3323[5], 0, i3322, '_selector')
  return i3322
}

Deserializers["Conveyors.InteractiveConveyorMultiplier"] = function (request, data, root) {
  var i3324 = root || request.c( 'Conveyors.InteractiveConveyorMultiplier' )
  var i3325 = data
  request.r(i3325[0], i3325[1], 0, i3324, '_bulletPool')
  request.r(i3325[2], i3325[3], 0, i3324, '_spriteRenderer')
  var i3327 = i3325[4]
  var i3326 = []
  for(var i = 0; i < i3327.length; i += 2) {
  request.r(i3327[i + 0], i3327[i + 1], 2, i3326, '')
  }
  i3324._startPoints = i3326
  i3324._speed = i3325[5]
  request.r(i3325[6], i3325[7], 0, i3324, '_nextPoint')
  request.r(i3325[8], i3325[9], 0, i3324, '_interactionPoint')
  return i3324
}

Deserializers["Conveyors.SimpleInteractiveConveyorPoint"] = function (request, data, root) {
  var i3328 = root || request.c( 'Conveyors.SimpleInteractiveConveyorPoint' )
  var i3329 = data
  i3328._speed = i3329[0]
  request.r(i3329[1], i3329[2], 0, i3328, '_nextPoint')
  request.r(i3329[3], i3329[4], 0, i3328, '_interactionPoint')
  return i3328
}

Deserializers["Conveyors.InteractiveConveyorAccelerator"] = function (request, data, root) {
  var i3330 = root || request.c( 'Conveyors.InteractiveConveyorAccelerator' )
  var i3331 = data
  request.r(i3331[0], i3331[1], 0, i3330, '_spriteRenderer')
  i3330._speed = i3331[2]
  request.r(i3331[3], i3331[4], 0, i3330, '_nextPoint')
  request.r(i3331[5], i3331[6], 0, i3330, '_interactionPoint')
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3333 = data
  i3332.enabled = !!i3333[0]
  request.r(i3333[1], i3333[2], 0, i3332, 'sharedMaterial')
  var i3335 = i3333[3]
  var i3334 = []
  for(var i = 0; i < i3335.length; i += 2) {
  request.r(i3335[i + 0], i3335[i + 1], 2, i3334, '')
  }
  i3332.sharedMaterials = i3334
  i3332.receiveShadows = !!i3333[4]
  i3332.shadowCastingMode = i3333[5]
  i3332.sortingLayerID = i3333[6]
  i3332.sortingOrder = i3333[7]
  i3332.lightmapIndex = i3333[8]
  i3332.lightmapSceneIndex = i3333[9]
  i3332.lightmapScaleOffset = new pc.Vec4( i3333[10], i3333[11], i3333[12], i3333[13] )
  i3332.lightProbeUsage = i3333[14]
  i3332.reflectionProbeUsage = i3333[15]
  i3332.frontSortingLayerID = i3333[16]
  i3332.frontSortingOrder = i3333[17]
  i3332.backSortingLayerID = i3333[18]
  i3332.backSortingOrder = i3333[19]
  i3332.alphaCutoff = i3333[20]
  request.r(i3333[21], i3333[22], 0, i3332, 'sprite')
  i3332.tileMode = i3333[23]
  i3332.isCustomRangeActive = !!i3333[24]
  i3332.spriteSortPoint = i3333[25]
  return i3332
}

Deserializers["DefaultNamespace.MaskedFillBar"] = function (request, data, root) {
  var i3336 = root || request.c( 'DefaultNamespace.MaskedFillBar' )
  var i3337 = data
  request.r(i3337[0], i3337[1], 0, i3336, '_maskTransform')
  i3336._emptyLocalPosition = new pc.Vec3( i3337[2], i3337[3], i3337[4] )
  i3336._fillLocalPosition = new pc.Vec3( i3337[5], i3337[6], i3337[7] )
  return i3336
}

Deserializers["Conveyors.InteractiveConveyorUnlockPoint"] = function (request, data, root) {
  var i3338 = root || request.c( 'Conveyors.InteractiveConveyorUnlockPoint' )
  var i3339 = data
  request.r(i3339[0], i3339[1], 0, i3338, '_toUnlock')
  request.r(i3339[2], i3339[3], 0, i3338, '_lockObject')
  request.r(i3339[4], i3339[5], 0, i3338, '_highlightObject')
  request.r(i3339[6], i3339[7], 0, i3338, '_fillBar')
  request.r(i3339[8], i3339[9], 0, i3338, '_costText')
  i3338._cost = i3339[10]
  request.r(i3339[11], i3339[12], 0, i3338, '_zombieManager')
  request.r(i3339[13], i3339[14], 0, i3338, '_sound')
  request.r(i3339[15], i3339[16], 0, i3338, '_mason')
  i3338._speed = i3339[17]
  request.r(i3339[18], i3339[19], 0, i3338, '_nextPoint')
  request.r(i3339[20], i3339[21], 0, i3338, '_interactionPoint')
  return i3338
}

Deserializers["PointsPlacer"] = function (request, data, root) {
  var i3340 = root || request.c( 'PointsPlacer' )
  var i3341 = data
  request.r(i3341[0], i3341[1], 0, i3340, '_parent')
  i3340._offset = new pc.Vec3( i3341[2], i3341[3], i3341[4] )
  return i3340
}

Deserializers["Conveyors.InteractiveConveyorFinishZone"] = function (request, data, root) {
  var i3342 = root || request.c( 'Conveyors.InteractiveConveyorFinishZone' )
  var i3343 = data
  request.r(i3343[0], i3343[1], 0, i3342, '_storage')
  request.r(i3343[2], i3343[3], 0, i3342, '_sound')
  return i3342
}

Deserializers["Characters.Mason"] = function (request, data, root) {
  var i3344 = root || request.c( 'Characters.Mason' )
  var i3345 = data
  request.r(i3345[0], i3345[1], 0, i3344, '_animator')
  i3344._fireDelay = i3345[2]
  i3344._sqrFireRange = i3345[3]
  request.r(i3345[4], i3345[5], 0, i3344, '_storage')
  request.r(i3345[6], i3345[7], 0, i3344, '_zombieManager')
  request.r(i3345[8], i3345[9], 0, i3344, '_shotSound')
  return i3344
}

Deserializers["Characters.MasonAnimator"] = function (request, data, root) {
  var i3346 = root || request.c( 'Characters.MasonAnimator' )
  var i3347 = data
  var i3349 = i3347[0]
  var i3348 = []
  for(var i = 0; i < i3349.length; i += 2) {
  request.r(i3349[i + 0], i3349[i + 1], 2, i3348, '')
  }
  i3346._animators = i3348
  return i3346
}

Deserializers["Characters.ZombieMason"] = function (request, data, root) {
  var i3350 = root || request.c( 'Characters.ZombieMason' )
  var i3351 = data
  request.r(i3351[0], i3351[1], 0, i3350, '_renderer')
  request.r(i3351[2], i3351[3], 0, i3350, '_masonRenderer')
  request.r(i3351[4], i3351[5], 0, i3350, '_animator')
  request.r(i3351[6], i3351[7], 0, i3350, '_mason')
  i3350._moveSpeed = i3351[8]
  return i3350
}

Deserializers["BulletBubble"] = function (request, data, root) {
  var i3352 = root || request.c( 'BulletBubble' )
  var i3353 = data
  request.r(i3353[0], i3353[1], 0, i3352, '_glowImage')
  request.r(i3353[2], i3353[3], 0, i3352, '_storage')
  return i3352
}

Deserializers["Characters.Glen"] = function (request, data, root) {
  var i3354 = root || request.c( 'Characters.Glen' )
  var i3355 = data
  request.r(i3355[0], i3355[1], 0, i3354, '_selector')
  request.r(i3355[2], i3355[3], 0, i3354, '_animator')
  request.r(i3355[4], i3355[5], 0, i3354, '_upgradeMaterial')
  i3354._moveSpeed = i3355[6]
  i3354._waitTime = i3355[7]
  request.r(i3355[8], i3355[9], 0, i3354, '_bulletPool')
  request.r(i3355[10], i3355[11], 0, i3354, '_bulletPickupPoint')
  request.r(i3355[12], i3355[13], 0, i3354, '_bulletSpawnPoint')
  request.r(i3355[14], i3355[15], 0, i3354, '_bulletHoldingPoint')
  request.r(i3355[16], i3355[17], 0, i3354, '_storage')
  return i3354
}

Deserializers["Characters.GlenAnimator"] = function (request, data, root) {
  var i3356 = root || request.c( 'Characters.GlenAnimator' )
  var i3357 = data
  var i3359 = i3357[0]
  var i3358 = []
  for(var i = 0; i < i3359.length; i += 2) {
  request.r(i3359[i + 0], i3359[i + 1], 2, i3358, '')
  }
  i3356._animators = i3358
  return i3356
}

Deserializers["Characters.ZombieManager"] = function (request, data, root) {
  var i3360 = root || request.c( 'Characters.ZombieManager' )
  var i3361 = data
  request.r(i3361[0], i3361[1], 0, i3360, '_storage')
  request.r(i3361[2], i3361[3], 0, i3360, '_prefab')
  var i3363 = i3361[4]
  var i3362 = []
  for(var i = 0; i < i3363.length; i += 2) {
  request.r(i3363[i + 0], i3363[i + 1], 2, i3362, '')
  }
  i3360._spawnPoints = i3362
  var i3365 = i3361[5]
  var i3364 = []
  for(var i = 0; i < i3365.length; i += 2) {
  request.r(i3365[i + 0], i3365[i + 1], 2, i3364, '')
  }
  i3360._targetPoints = i3364
  i3360._spawnInterval = new pc.Vec2( i3361[6], i3361[7] )
  i3360._maximumOnScreen = i3361[8]
  request.r(i3361[9], i3361[10], 0, i3360, '_zombieBiteSound')
  request.r(i3361[11], i3361[12], 0, i3360, '_gameEnd')
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3367 = data
  i3366.ambientIntensity = i3367[0]
  i3366.reflectionIntensity = i3367[1]
  i3366.ambientMode = i3367[2]
  i3366.ambientLight = new pc.Color(i3367[3], i3367[4], i3367[5], i3367[6])
  i3366.ambientSkyColor = new pc.Color(i3367[7], i3367[8], i3367[9], i3367[10])
  i3366.ambientGroundColor = new pc.Color(i3367[11], i3367[12], i3367[13], i3367[14])
  i3366.ambientEquatorColor = new pc.Color(i3367[15], i3367[16], i3367[17], i3367[18])
  i3366.fogColor = new pc.Color(i3367[19], i3367[20], i3367[21], i3367[22])
  i3366.fogEndDistance = i3367[23]
  i3366.fogStartDistance = i3367[24]
  i3366.fogDensity = i3367[25]
  i3366.fog = !!i3367[26]
  request.r(i3367[27], i3367[28], 0, i3366, 'skybox')
  i3366.fogMode = i3367[29]
  var i3369 = i3367[30]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3369[i + 0]) );
  }
  i3366.lightmaps = i3368
  i3366.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3367[31], i3366.lightProbes)
  i3366.lightmapsMode = i3367[32]
  i3366.mixedBakeMode = i3367[33]
  i3366.environmentLightingMode = i3367[34]
  i3366.ambientProbe = new pc.SphericalHarmonicsL2(i3367[35])
  i3366.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3367[36])
  i3366.useReferenceAmbientProbe = !!i3367[37]
  request.r(i3367[38], i3367[39], 0, i3366, 'customReflection')
  request.r(i3367[40], i3367[41], 0, i3366, 'defaultReflection')
  i3366.defaultReflectionMode = i3367[42]
  i3366.defaultReflectionResolution = i3367[43]
  i3366.sunLightObjectId = i3367[44]
  i3366.pixelLightCount = i3367[45]
  i3366.defaultReflectionHDR = !!i3367[46]
  i3366.hasLightDataAsset = !!i3367[47]
  i3366.hasManualGenerate = !!i3367[48]
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3373 = data
  request.r(i3373[0], i3373[1], 0, i3372, 'lightmapColor')
  request.r(i3373[2], i3373[3], 0, i3372, 'lightmapDirection')
  return i3372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3374 = root || new UnityEngine.LightProbes()
  var i3375 = data
  return i3374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3383 = data
  var i3385 = i3383[0]
  var i3384 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3385.length; i += 1) {
    i3384.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3385[i + 0]));
  }
  i3382.ShaderCompilationErrors = i3384
  i3382.name = i3383[1]
  i3382.guid = i3383[2]
  var i3387 = i3383[3]
  var i3386 = []
  for(var i = 0; i < i3387.length; i += 1) {
    i3386.push( i3387[i + 0] );
  }
  i3382.shaderDefinedKeywords = i3386
  var i3389 = i3383[4]
  var i3388 = []
  for(var i = 0; i < i3389.length; i += 1) {
    i3388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3389[i + 0]) );
  }
  i3382.passes = i3388
  var i3391 = i3383[5]
  var i3390 = []
  for(var i = 0; i < i3391.length; i += 1) {
    i3390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3391[i + 0]) );
  }
  i3382.usePasses = i3390
  var i3393 = i3383[6]
  var i3392 = []
  for(var i = 0; i < i3393.length; i += 1) {
    i3392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3393[i + 0]) );
  }
  i3382.defaultParameterValues = i3392
  request.r(i3383[7], i3383[8], 0, i3382, 'unityFallbackShader')
  i3382.readDepth = !!i3383[9]
  i3382.isCreatedByShaderGraph = !!i3383[10]
  i3382.compiled = !!i3383[11]
  return i3382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3397 = data
  i3396.shaderName = i3397[0]
  i3396.errorMessage = i3397[1]
  return i3396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3402 = root || new pc.UnityShaderPass()
  var i3403 = data
  i3402.id = i3403[0]
  i3402.subShaderIndex = i3403[1]
  i3402.name = i3403[2]
  i3402.passType = i3403[3]
  i3402.grabPassTextureName = i3403[4]
  i3402.usePass = !!i3403[5]
  i3402.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3403[6], i3402.zTest)
  i3402.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3403[7], i3402.zWrite)
  i3402.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3403[8], i3402.culling)
  i3402.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3403[9], i3402.blending)
  i3402.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3403[10], i3402.alphaBlending)
  i3402.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3403[11], i3402.colorWriteMask)
  i3402.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3403[12], i3402.offsetUnits)
  i3402.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3403[13], i3402.offsetFactor)
  i3402.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3403[14], i3402.stencilRef)
  i3402.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3403[15], i3402.stencilReadMask)
  i3402.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3403[16], i3402.stencilWriteMask)
  i3402.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3403[17], i3402.stencilOp)
  i3402.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3403[18], i3402.stencilOpFront)
  i3402.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3403[19], i3402.stencilOpBack)
  var i3405 = i3403[20]
  var i3404 = []
  for(var i = 0; i < i3405.length; i += 1) {
    i3404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3405[i + 0]) );
  }
  i3402.tags = i3404
  var i3407 = i3403[21]
  var i3406 = []
  for(var i = 0; i < i3407.length; i += 1) {
    i3406.push( i3407[i + 0] );
  }
  i3402.passDefinedKeywords = i3406
  var i3409 = i3403[22]
  var i3408 = []
  for(var i = 0; i < i3409.length; i += 1) {
    i3408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3409[i + 0]) );
  }
  i3402.passDefinedKeywordGroups = i3408
  var i3411 = i3403[23]
  var i3410 = []
  for(var i = 0; i < i3411.length; i += 1) {
    i3410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3411[i + 0]) );
  }
  i3402.variants = i3410
  var i3413 = i3403[24]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3413[i + 0]) );
  }
  i3402.excludedVariants = i3412
  i3402.hasDepthReader = !!i3403[25]
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3415 = data
  i3414.val = i3415[0]
  i3414.name = i3415[1]
  return i3414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3417 = data
  i3416.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3417[0], i3416.src)
  i3416.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3417[1], i3416.dst)
  i3416.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3417[2], i3416.op)
  return i3416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3419 = data
  i3418.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3419[0], i3418.pass)
  i3418.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3419[1], i3418.fail)
  i3418.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3419[2], i3418.zFail)
  i3418.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3419[3], i3418.comp)
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3423 = data
  i3422.name = i3423[0]
  i3422.value = i3423[1]
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3427 = data
  var i3429 = i3427[0]
  var i3428 = []
  for(var i = 0; i < i3429.length; i += 1) {
    i3428.push( i3429[i + 0] );
  }
  i3426.keywords = i3428
  i3426.hasDiscard = !!i3427[1]
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3433 = data
  i3432.passId = i3433[0]
  i3432.subShaderIndex = i3433[1]
  var i3435 = i3433[2]
  var i3434 = []
  for(var i = 0; i < i3435.length; i += 1) {
    i3434.push( i3435[i + 0] );
  }
  i3432.keywords = i3434
  i3432.vertexProgram = i3433[3]
  i3432.fragmentProgram = i3433[4]
  i3432.exportedForWebGl2 = !!i3433[5]
  i3432.readDepth = !!i3433[6]
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3439 = data
  request.r(i3439[0], i3439[1], 0, i3438, 'shader')
  i3438.pass = i3439[2]
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3443 = data
  i3442.name = i3443[0]
  i3442.type = i3443[1]
  i3442.value = new pc.Vec4( i3443[2], i3443[3], i3443[4], i3443[5] )
  i3442.textureValue = i3443[6]
  i3442.shaderPropertyFlag = i3443[7]
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3445 = data
  i3444.name = i3445[0]
  request.r(i3445[1], i3445[2], 0, i3444, 'texture')
  i3444.aabb = i3445[3]
  i3444.vertices = i3445[4]
  i3444.triangles = i3445[5]
  i3444.textureRect = UnityEngine.Rect.MinMaxRect(i3445[6], i3445[7], i3445[8], i3445[9])
  i3444.packedRect = UnityEngine.Rect.MinMaxRect(i3445[10], i3445[11], i3445[12], i3445[13])
  i3444.border = new pc.Vec4( i3445[14], i3445[15], i3445[16], i3445[17] )
  i3444.transparency = i3445[18]
  i3444.bounds = i3445[19]
  i3444.pixelsPerUnit = i3445[20]
  i3444.textureWidth = i3445[21]
  i3444.textureHeight = i3445[22]
  i3444.nativeSize = new pc.Vec2( i3445[23], i3445[24] )
  i3444.pivot = new pc.Vec2( i3445[25], i3445[26] )
  i3444.textureRectOffset = new pc.Vec2( i3445[27], i3445[28] )
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3447 = data
  i3446.name = i3447[0]
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3449 = data
  i3448.name = i3449[0]
  i3448.wrapMode = i3449[1]
  i3448.isLooping = !!i3449[2]
  i3448.length = i3449[3]
  var i3451 = i3449[4]
  var i3450 = []
  for(var i = 0; i < i3451.length; i += 1) {
    i3450.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3451[i + 0]) );
  }
  i3448.curves = i3450
  var i3453 = i3449[5]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 1) {
    i3452.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3453[i + 0]) );
  }
  i3448.events = i3452
  i3448.halfPrecision = !!i3449[6]
  i3448._frameRate = i3449[7]
  i3448.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3449[8], i3448.localBounds)
  i3448.hasMuscleCurves = !!i3449[9]
  var i3455 = i3449[10]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.push( i3455[i + 0] );
  }
  i3448.clipMuscleConstant = i3454
  i3448.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3449[11], i3448.clipBindingConstant)
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3459 = data
  i3458.path = i3459[0]
  i3458.hash = i3459[1]
  i3458.componentType = i3459[2]
  i3458.property = i3459[3]
  i3458.keys = i3459[4]
  var i3461 = i3459[5]
  var i3460 = []
  for(var i = 0; i < i3461.length; i += 1) {
    i3460.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3461[i + 0]) );
  }
  i3458.objectReferenceKeys = i3460
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3465 = data
  i3464.time = i3465[0]
  request.r(i3465[1], i3465[2], 0, i3464, 'value')
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3469 = data
  i3468.functionName = i3469[0]
  i3468.floatParameter = i3469[1]
  i3468.intParameter = i3469[2]
  i3468.stringParameter = i3469[3]
  request.r(i3469[4], i3469[5], 0, i3468, 'objectReferenceParameter')
  i3468.time = i3469[6]
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3471 = data
  i3470.center = new pc.Vec3( i3471[0], i3471[1], i3471[2] )
  i3470.extends = new pc.Vec3( i3471[3], i3471[4], i3471[5] )
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3475 = data
  var i3477 = i3475[0]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.push( i3477[i + 0] );
  }
  i3474.genericBindings = i3476
  var i3479 = i3475[1]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.push( i3479[i + 0] );
  }
  i3474.pptrCurveMapping = i3478
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3481 = data
  i3480.name = i3481[0]
  i3480.ascent = i3481[1]
  i3480.originalLineHeight = i3481[2]
  i3480.fontSize = i3481[3]
  var i3483 = i3481[4]
  var i3482 = []
  for(var i = 0; i < i3483.length; i += 1) {
    i3482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3483[i + 0]) );
  }
  i3480.characterInfo = i3482
  request.r(i3481[5], i3481[6], 0, i3480, 'texture')
  i3480.originalFontSize = i3481[7]
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3487 = data
  i3486.index = i3487[0]
  i3486.advance = i3487[1]
  i3486.bearing = i3487[2]
  i3486.glyphWidth = i3487[3]
  i3486.glyphHeight = i3487[4]
  i3486.minX = i3487[5]
  i3486.maxX = i3487[6]
  i3486.minY = i3487[7]
  i3486.maxY = i3487[8]
  i3486.uvBottomLeftX = i3487[9]
  i3486.uvBottomLeftY = i3487[10]
  i3486.uvBottomRightX = i3487[11]
  i3486.uvBottomRightY = i3487[12]
  i3486.uvTopLeftX = i3487[13]
  i3486.uvTopLeftY = i3487[14]
  i3486.uvTopRightX = i3487[15]
  i3486.uvTopRightY = i3487[16]
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3489 = data
  i3488.name = i3489[0]
  var i3491 = i3489[1]
  var i3490 = []
  for(var i = 0; i < i3491.length; i += 1) {
    i3490.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3491[i + 0]) );
  }
  i3488.layers = i3490
  var i3493 = i3489[2]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3493[i + 0]) );
  }
  i3488.parameters = i3492
  i3488.animationClips = i3489[3]
  i3488.avatarUnsupported = i3489[4]
  return i3488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3497 = data
  i3496.name = i3497[0]
  i3496.defaultWeight = i3497[1]
  i3496.blendingMode = i3497[2]
  i3496.avatarMask = i3497[3]
  i3496.syncedLayerIndex = i3497[4]
  i3496.syncedLayerAffectsTiming = !!i3497[5]
  i3496.syncedLayers = i3497[6]
  i3496.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3497[7], i3496.stateMachine)
  return i3496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3499 = data
  i3498.id = i3499[0]
  i3498.name = i3499[1]
  i3498.path = i3499[2]
  var i3501 = i3499[3]
  var i3500 = []
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3501[i + 0]) );
  }
  i3498.states = i3500
  var i3503 = i3499[4]
  var i3502 = []
  for(var i = 0; i < i3503.length; i += 1) {
    i3502.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3503[i + 0]) );
  }
  i3498.machines = i3502
  var i3505 = i3499[5]
  var i3504 = []
  for(var i = 0; i < i3505.length; i += 1) {
    i3504.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3505[i + 0]) );
  }
  i3498.entryStateTransitions = i3504
  var i3507 = i3499[6]
  var i3506 = []
  for(var i = 0; i < i3507.length; i += 1) {
    i3506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3507[i + 0]) );
  }
  i3498.exitStateTransitions = i3506
  var i3509 = i3499[7]
  var i3508 = []
  for(var i = 0; i < i3509.length; i += 1) {
    i3508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3509[i + 0]) );
  }
  i3498.anyStateTransitions = i3508
  i3498.defaultStateId = i3499[8]
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3513 = data
  i3512.id = i3513[0]
  i3512.name = i3513[1]
  i3512.cycleOffset = i3513[2]
  i3512.cycleOffsetParameter = i3513[3]
  i3512.cycleOffsetParameterActive = !!i3513[4]
  i3512.mirror = !!i3513[5]
  i3512.mirrorParameter = i3513[6]
  i3512.mirrorParameterActive = !!i3513[7]
  i3512.motionId = i3513[8]
  i3512.nameHash = i3513[9]
  i3512.fullPathHash = i3513[10]
  i3512.speed = i3513[11]
  i3512.speedParameter = i3513[12]
  i3512.speedParameterActive = !!i3513[13]
  i3512.tag = i3513[14]
  i3512.tagHash = i3513[15]
  i3512.writeDefaultValues = !!i3513[16]
  var i3515 = i3513[17]
  var i3514 = []
  for(var i = 0; i < i3515.length; i += 2) {
  request.r(i3515[i + 0], i3515[i + 1], 2, i3514, '')
  }
  i3512.behaviours = i3514
  var i3517 = i3513[18]
  var i3516 = []
  for(var i = 0; i < i3517.length; i += 1) {
    i3516.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3517[i + 0]) );
  }
  i3512.transitions = i3516
  return i3512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3523 = data
  i3522.fullPath = i3523[0]
  i3522.canTransitionToSelf = !!i3523[1]
  i3522.duration = i3523[2]
  i3522.exitTime = i3523[3]
  i3522.hasExitTime = !!i3523[4]
  i3522.hasFixedDuration = !!i3523[5]
  i3522.interruptionSource = i3523[6]
  i3522.offset = i3523[7]
  i3522.orderedInterruption = !!i3523[8]
  i3522.destinationStateId = i3523[9]
  i3522.isExit = !!i3523[10]
  i3522.mute = !!i3523[11]
  i3522.solo = !!i3523[12]
  var i3525 = i3523[13]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3525[i + 0]) );
  }
  i3522.conditions = i3524
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3531 = data
  i3530.destinationStateId = i3531[0]
  i3530.isExit = !!i3531[1]
  i3530.mute = !!i3531[2]
  i3530.solo = !!i3531[3]
  var i3533 = i3531[4]
  var i3532 = []
  for(var i = 0; i < i3533.length; i += 1) {
    i3532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3533[i + 0]) );
  }
  i3530.conditions = i3532
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3537 = data
  i3536.defaultBool = !!i3537[0]
  i3536.defaultFloat = i3537[1]
  i3536.defaultInt = i3537[2]
  i3536.name = i3537[3]
  i3536.nameHash = i3537[4]
  i3536.type = i3537[5]
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3541 = data
  i3540.mode = i3541[0]
  i3540.parameter = i3541[1]
  i3540.threshold = i3541[2]
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3543 = data
  i3542.name = i3543[0]
  i3542.bytes64 = i3543[1]
  i3542.data = i3543[2]
  return i3542
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3544 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3545 = data
  i3544.hashCode = i3545[0]
  request.r(i3545[1], i3545[2], 0, i3544, 'material')
  i3544.materialHashCode = i3545[3]
  request.r(i3545[4], i3545[5], 0, i3544, 'atlas')
  i3544.normalStyle = i3545[6]
  i3544.normalSpacingOffset = i3545[7]
  i3544.boldStyle = i3545[8]
  i3544.boldSpacing = i3545[9]
  i3544.italicStyle = i3545[10]
  i3544.tabSize = i3545[11]
  i3544.m_Version = i3545[12]
  i3544.m_SourceFontFileGUID = i3545[13]
  request.r(i3545[14], i3545[15], 0, i3544, 'm_SourceFontFile_EditorRef')
  request.r(i3545[16], i3545[17], 0, i3544, 'm_SourceFontFile')
  i3544.m_AtlasPopulationMode = i3545[18]
  i3544.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3545[19], i3544.m_FaceInfo)
  var i3547 = i3545[20]
  var i3546 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.add(request.d('UnityEngine.TextCore.Glyph', i3547[i + 0]));
  }
  i3544.m_GlyphTable = i3546
  var i3549 = i3545[21]
  var i3548 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.add(request.d('TMPro.TMP_Character', i3549[i + 0]));
  }
  i3544.m_CharacterTable = i3548
  var i3551 = i3545[22]
  var i3550 = []
  for(var i = 0; i < i3551.length; i += 2) {
  request.r(i3551[i + 0], i3551[i + 1], 2, i3550, '')
  }
  i3544.m_AtlasTextures = i3550
  i3544.m_AtlasTextureIndex = i3545[23]
  i3544.m_IsMultiAtlasTexturesEnabled = !!i3545[24]
  i3544.m_ClearDynamicDataOnBuild = !!i3545[25]
  var i3553 = i3545[26]
  var i3552 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3553.length; i += 1) {
    i3552.add(request.d('UnityEngine.TextCore.GlyphRect', i3553[i + 0]));
  }
  i3544.m_UsedGlyphRects = i3552
  var i3555 = i3545[27]
  var i3554 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3555.length; i += 1) {
    i3554.add(request.d('UnityEngine.TextCore.GlyphRect', i3555[i + 0]));
  }
  i3544.m_FreeGlyphRects = i3554
  i3544.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3545[28], i3544.m_fontInfo)
  i3544.m_AtlasWidth = i3545[29]
  i3544.m_AtlasHeight = i3545[30]
  i3544.m_AtlasPadding = i3545[31]
  i3544.m_AtlasRenderMode = i3545[32]
  var i3557 = i3545[33]
  var i3556 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3557.length; i += 1) {
    i3556.add(request.d('TMPro.TMP_Glyph', i3557[i + 0]));
  }
  i3544.m_glyphInfoList = i3556
  i3544.m_KerningTable = request.d('TMPro.KerningTable', i3545[34], i3544.m_KerningTable)
  i3544.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3545[35], i3544.m_FontFeatureTable)
  var i3559 = i3545[36]
  var i3558 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3559.length; i += 2) {
  request.r(i3559[i + 0], i3559[i + 1], 1, i3558, '')
  }
  i3544.fallbackFontAssets = i3558
  var i3561 = i3545[37]
  var i3560 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3561.length; i += 2) {
  request.r(i3561[i + 0], i3561[i + 1], 1, i3560, '')
  }
  i3544.m_FallbackFontAssetTable = i3560
  i3544.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3545[38], i3544.m_CreationSettings)
  var i3563 = i3545[39]
  var i3562 = []
  for(var i = 0; i < i3563.length; i += 1) {
    i3562.push( request.d('TMPro.TMP_FontWeightPair', i3563[i + 0]) );
  }
  i3544.m_FontWeightTable = i3562
  var i3565 = i3545[40]
  var i3564 = []
  for(var i = 0; i < i3565.length; i += 1) {
    i3564.push( request.d('TMPro.TMP_FontWeightPair', i3565[i + 0]) );
  }
  i3544.fontWeights = i3564
  return i3544
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3566 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3567 = data
  i3566.m_FaceIndex = i3567[0]
  i3566.m_FamilyName = i3567[1]
  i3566.m_StyleName = i3567[2]
  i3566.m_PointSize = i3567[3]
  i3566.m_Scale = i3567[4]
  i3566.m_UnitsPerEM = i3567[5]
  i3566.m_LineHeight = i3567[6]
  i3566.m_AscentLine = i3567[7]
  i3566.m_CapLine = i3567[8]
  i3566.m_MeanLine = i3567[9]
  i3566.m_Baseline = i3567[10]
  i3566.m_DescentLine = i3567[11]
  i3566.m_SuperscriptOffset = i3567[12]
  i3566.m_SuperscriptSize = i3567[13]
  i3566.m_SubscriptOffset = i3567[14]
  i3566.m_SubscriptSize = i3567[15]
  i3566.m_UnderlineOffset = i3567[16]
  i3566.m_UnderlineThickness = i3567[17]
  i3566.m_StrikethroughOffset = i3567[18]
  i3566.m_StrikethroughThickness = i3567[19]
  i3566.m_TabWidth = i3567[20]
  return i3566
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3570 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3571 = data
  i3570.m_Index = i3571[0]
  i3570.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3571[1], i3570.m_Metrics)
  i3570.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3571[2], i3570.m_GlyphRect)
  i3570.m_Scale = i3571[3]
  i3570.m_AtlasIndex = i3571[4]
  i3570.m_ClassDefinitionType = i3571[5]
  return i3570
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3572 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3573 = data
  i3572.m_Width = i3573[0]
  i3572.m_Height = i3573[1]
  i3572.m_HorizontalBearingX = i3573[2]
  i3572.m_HorizontalBearingY = i3573[3]
  i3572.m_HorizontalAdvance = i3573[4]
  return i3572
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3574 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3575 = data
  i3574.m_X = i3575[0]
  i3574.m_Y = i3575[1]
  i3574.m_Width = i3575[2]
  i3574.m_Height = i3575[3]
  return i3574
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3578 = root || request.c( 'TMPro.TMP_Character' )
  var i3579 = data
  i3578.m_ElementType = i3579[0]
  i3578.m_Unicode = i3579[1]
  i3578.m_GlyphIndex = i3579[2]
  i3578.m_Scale = i3579[3]
  return i3578
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3584 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3585 = data
  i3584.Name = i3585[0]
  i3584.PointSize = i3585[1]
  i3584.Scale = i3585[2]
  i3584.CharacterCount = i3585[3]
  i3584.LineHeight = i3585[4]
  i3584.Baseline = i3585[5]
  i3584.Ascender = i3585[6]
  i3584.CapHeight = i3585[7]
  i3584.Descender = i3585[8]
  i3584.CenterLine = i3585[9]
  i3584.SuperscriptOffset = i3585[10]
  i3584.SubscriptOffset = i3585[11]
  i3584.SubSize = i3585[12]
  i3584.Underline = i3585[13]
  i3584.UnderlineThickness = i3585[14]
  i3584.strikethrough = i3585[15]
  i3584.strikethroughThickness = i3585[16]
  i3584.TabWidth = i3585[17]
  i3584.Padding = i3585[18]
  i3584.AtlasWidth = i3585[19]
  i3584.AtlasHeight = i3585[20]
  return i3584
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3588 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3589 = data
  i3588.id = i3589[0]
  i3588.x = i3589[1]
  i3588.y = i3589[2]
  i3588.width = i3589[3]
  i3588.height = i3589[4]
  i3588.xOffset = i3589[5]
  i3588.yOffset = i3589[6]
  i3588.xAdvance = i3589[7]
  i3588.scale = i3589[8]
  return i3588
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3590 = root || request.c( 'TMPro.KerningTable' )
  var i3591 = data
  var i3593 = i3591[0]
  var i3592 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3593.length; i += 1) {
    i3592.add(request.d('TMPro.KerningPair', i3593[i + 0]));
  }
  i3590.kerningPairs = i3592
  return i3590
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3596 = root || request.c( 'TMPro.KerningPair' )
  var i3597 = data
  i3596.xOffset = i3597[0]
  i3596.m_FirstGlyph = i3597[1]
  i3596.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3597[2], i3596.m_FirstGlyphAdjustments)
  i3596.m_SecondGlyph = i3597[3]
  i3596.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3597[4], i3596.m_SecondGlyphAdjustments)
  i3596.m_IgnoreSpacingAdjustments = !!i3597[5]
  return i3596
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3598 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3599 = data
  var i3601 = i3599[0]
  var i3600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3601.length; i += 1) {
    i3600.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3601[i + 0]));
  }
  i3598.m_GlyphPairAdjustmentRecords = i3600
  return i3598
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3604 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3605 = data
  i3604.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3605[0], i3604.m_FirstAdjustmentRecord)
  i3604.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3605[1], i3604.m_SecondAdjustmentRecord)
  i3604.m_FeatureLookupFlags = i3605[2]
  return i3604
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3608 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3609 = data
  i3608.sourceFontFileName = i3609[0]
  i3608.sourceFontFileGUID = i3609[1]
  i3608.pointSizeSamplingMode = i3609[2]
  i3608.pointSize = i3609[3]
  i3608.padding = i3609[4]
  i3608.packingMode = i3609[5]
  i3608.atlasWidth = i3609[6]
  i3608.atlasHeight = i3609[7]
  i3608.characterSetSelectionMode = i3609[8]
  i3608.characterSequence = i3609[9]
  i3608.referencedFontAssetGUID = i3609[10]
  i3608.referencedTextAssetGUID = i3609[11]
  i3608.fontStyle = i3609[12]
  i3608.fontStyleModifier = i3609[13]
  i3608.renderMode = i3609[14]
  i3608.includeFontFeatures = !!i3609[15]
  return i3608
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3612 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3613 = data
  request.r(i3613[0], i3613[1], 0, i3612, 'regularTypeface')
  request.r(i3613[2], i3613[3], 0, i3612, 'italicTypeface')
  return i3612
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3614 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3615 = data
  i3614.useSafeMode = !!i3615[0]
  i3614.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3615[1], i3614.safeModeOptions)
  i3614.timeScale = i3615[2]
  i3614.unscaledTimeScale = i3615[3]
  i3614.useSmoothDeltaTime = !!i3615[4]
  i3614.maxSmoothUnscaledTime = i3615[5]
  i3614.rewindCallbackMode = i3615[6]
  i3614.showUnityEditorReport = !!i3615[7]
  i3614.logBehaviour = i3615[8]
  i3614.drawGizmos = !!i3615[9]
  i3614.defaultRecyclable = !!i3615[10]
  i3614.defaultAutoPlay = i3615[11]
  i3614.defaultUpdateType = i3615[12]
  i3614.defaultTimeScaleIndependent = !!i3615[13]
  i3614.defaultEaseType = i3615[14]
  i3614.defaultEaseOvershootOrAmplitude = i3615[15]
  i3614.defaultEasePeriod = i3615[16]
  i3614.defaultAutoKill = !!i3615[17]
  i3614.defaultLoopType = i3615[18]
  i3614.debugMode = !!i3615[19]
  i3614.debugStoreTargetId = !!i3615[20]
  i3614.showPreviewPanel = !!i3615[21]
  i3614.storeSettingsLocation = i3615[22]
  i3614.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3615[23], i3614.modules)
  i3614.createASMDEF = !!i3615[24]
  i3614.showPlayingTweens = !!i3615[25]
  i3614.showPausedTweens = !!i3615[26]
  return i3614
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3616 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3617 = data
  i3616.logBehaviour = i3617[0]
  i3616.nestedTweenFailureBehaviour = i3617[1]
  return i3616
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3618 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3619 = data
  i3618.showPanel = !!i3619[0]
  i3618.audioEnabled = !!i3619[1]
  i3618.physicsEnabled = !!i3619[2]
  i3618.physics2DEnabled = !!i3619[3]
  i3618.spriteEnabled = !!i3619[4]
  i3618.uiEnabled = !!i3619[5]
  i3618.textMeshProEnabled = !!i3619[6]
  i3618.tk2DEnabled = !!i3619[7]
  i3618.deAudioEnabled = !!i3619[8]
  i3618.deUnityExtendedEnabled = !!i3619[9]
  i3618.epoOutlineEnabled = !!i3619[10]
  return i3618
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3620 = root || request.c( 'TMPro.TMP_Settings' )
  var i3621 = data
  i3620.m_enableWordWrapping = !!i3621[0]
  i3620.m_enableKerning = !!i3621[1]
  i3620.m_enableExtraPadding = !!i3621[2]
  i3620.m_enableTintAllSprites = !!i3621[3]
  i3620.m_enableParseEscapeCharacters = !!i3621[4]
  i3620.m_EnableRaycastTarget = !!i3621[5]
  i3620.m_GetFontFeaturesAtRuntime = !!i3621[6]
  i3620.m_missingGlyphCharacter = i3621[7]
  i3620.m_warningsDisabled = !!i3621[8]
  request.r(i3621[9], i3621[10], 0, i3620, 'm_defaultFontAsset')
  i3620.m_defaultFontAssetPath = i3621[11]
  i3620.m_defaultFontSize = i3621[12]
  i3620.m_defaultAutoSizeMinRatio = i3621[13]
  i3620.m_defaultAutoSizeMaxRatio = i3621[14]
  i3620.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3621[15], i3621[16] )
  i3620.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3621[17], i3621[18] )
  i3620.m_autoSizeTextContainer = !!i3621[19]
  i3620.m_IsTextObjectScaleStatic = !!i3621[20]
  var i3623 = i3621[21]
  var i3622 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3623.length; i += 2) {
  request.r(i3623[i + 0], i3623[i + 1], 1, i3622, '')
  }
  i3620.m_fallbackFontAssets = i3622
  i3620.m_matchMaterialPreset = !!i3621[22]
  request.r(i3621[23], i3621[24], 0, i3620, 'm_defaultSpriteAsset')
  i3620.m_defaultSpriteAssetPath = i3621[25]
  i3620.m_enableEmojiSupport = !!i3621[26]
  i3620.m_MissingCharacterSpriteUnicode = i3621[27]
  i3620.m_defaultColorGradientPresetsPath = i3621[28]
  request.r(i3621[29], i3621[30], 0, i3620, 'm_defaultStyleSheet')
  i3620.m_StyleSheetsResourcePath = i3621[31]
  request.r(i3621[32], i3621[33], 0, i3620, 'm_leadingCharacters')
  request.r(i3621[34], i3621[35], 0, i3620, 'm_followingCharacters')
  i3620.m_UseModernHangulLineBreakingRules = !!i3621[36]
  return i3620
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3624 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3625 = data
  i3624.hashCode = i3625[0]
  request.r(i3625[1], i3625[2], 0, i3624, 'material')
  i3624.materialHashCode = i3625[3]
  request.r(i3625[4], i3625[5], 0, i3624, 'spriteSheet')
  var i3627 = i3625[6]
  var i3626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3627.length; i += 1) {
    i3626.add(request.d('TMPro.TMP_Sprite', i3627[i + 0]));
  }
  i3624.spriteInfoList = i3626
  var i3629 = i3625[7]
  var i3628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3629.length; i += 2) {
  request.r(i3629[i + 0], i3629[i + 1], 1, i3628, '')
  }
  i3624.fallbackSpriteAssets = i3628
  i3624.m_Version = i3625[8]
  i3624.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3625[9], i3624.m_FaceInfo)
  var i3631 = i3625[10]
  var i3630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.add(request.d('TMPro.TMP_SpriteCharacter', i3631[i + 0]));
  }
  i3624.m_SpriteCharacterTable = i3630
  var i3633 = i3625[11]
  var i3632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3633.length; i += 1) {
    i3632.add(request.d('TMPro.TMP_SpriteGlyph', i3633[i + 0]));
  }
  i3624.m_SpriteGlyphTable = i3632
  return i3624
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3636 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3637 = data
  i3636.name = i3637[0]
  i3636.hashCode = i3637[1]
  i3636.unicode = i3637[2]
  i3636.pivot = new pc.Vec2( i3637[3], i3637[4] )
  request.r(i3637[5], i3637[6], 0, i3636, 'sprite')
  i3636.id = i3637[7]
  i3636.x = i3637[8]
  i3636.y = i3637[9]
  i3636.width = i3637[10]
  i3636.height = i3637[11]
  i3636.xOffset = i3637[12]
  i3636.yOffset = i3637[13]
  i3636.xAdvance = i3637[14]
  i3636.scale = i3637[15]
  return i3636
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3642 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3643 = data
  i3642.m_Name = i3643[0]
  i3642.m_HashCode = i3643[1]
  i3642.m_ElementType = i3643[2]
  i3642.m_Unicode = i3643[3]
  i3642.m_GlyphIndex = i3643[4]
  i3642.m_Scale = i3643[5]
  return i3642
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3646 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3647 = data
  request.r(i3647[0], i3647[1], 0, i3646, 'sprite')
  i3646.m_Index = i3647[2]
  i3646.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3647[3], i3646.m_Metrics)
  i3646.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3647[4], i3646.m_GlyphRect)
  i3646.m_Scale = i3647[5]
  i3646.m_AtlasIndex = i3647[6]
  i3646.m_ClassDefinitionType = i3647[7]
  return i3646
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3648 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3649 = data
  var i3651 = i3649[0]
  var i3650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.add(request.d('TMPro.TMP_Style', i3651[i + 0]));
  }
  i3648.m_StyleList = i3650
  return i3648
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3654 = root || request.c( 'TMPro.TMP_Style' )
  var i3655 = data
  i3654.m_Name = i3655[0]
  i3654.m_HashCode = i3655[1]
  i3654.m_OpeningDefinition = i3655[2]
  i3654.m_ClosingDefinition = i3655[3]
  i3654.m_OpeningTagArray = i3655[4]
  i3654.m_ClosingTagArray = i3655[5]
  i3654.m_OpeningTagUnicodeArray = i3655[6]
  i3654.m_ClosingTagUnicodeArray = i3655[7]
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3657 = data
  var i3659 = i3657[0]
  var i3658 = []
  for(var i = 0; i < i3659.length; i += 1) {
    i3658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3659[i + 0]) );
  }
  i3656.files = i3658
  i3656.componentToPrefabIds = i3657[1]
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3663 = data
  i3662.path = i3663[0]
  request.r(i3663[1], i3663[2], 0, i3662, 'unityObject')
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3665 = data
  var i3667 = i3665[0]
  var i3666 = []
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3667[i + 0]) );
  }
  i3664.scriptsExecutionOrder = i3666
  var i3669 = i3665[1]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3669[i + 0]) );
  }
  i3664.sortingLayers = i3668
  var i3671 = i3665[2]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 1) {
    i3670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3671[i + 0]) );
  }
  i3664.cullingLayers = i3670
  i3664.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3665[3], i3664.timeSettings)
  i3664.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3665[4], i3664.physicsSettings)
  i3664.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3665[5], i3664.physics2DSettings)
  i3664.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3665[6], i3664.qualitySettings)
  i3664.enableRealtimeShadows = !!i3665[7]
  i3664.enableAutoInstancing = !!i3665[8]
  i3664.enableDynamicBatching = !!i3665[9]
  i3664.lightmapEncodingQuality = i3665[10]
  i3664.desiredColorSpace = i3665[11]
  var i3673 = i3665[12]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 1) {
    i3672.push( i3673[i + 0] );
  }
  i3664.allTags = i3672
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3677 = data
  i3676.name = i3677[0]
  i3676.value = i3677[1]
  return i3676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3681 = data
  i3680.id = i3681[0]
  i3680.name = i3681[1]
  i3680.value = i3681[2]
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3685 = data
  i3684.id = i3685[0]
  i3684.name = i3685[1]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3687 = data
  i3686.fixedDeltaTime = i3687[0]
  i3686.maximumDeltaTime = i3687[1]
  i3686.timeScale = i3687[2]
  i3686.maximumParticleTimestep = i3687[3]
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3689 = data
  i3688.gravity = new pc.Vec3( i3689[0], i3689[1], i3689[2] )
  i3688.defaultSolverIterations = i3689[3]
  i3688.bounceThreshold = i3689[4]
  i3688.autoSyncTransforms = !!i3689[5]
  i3688.autoSimulation = !!i3689[6]
  var i3691 = i3689[7]
  var i3690 = []
  for(var i = 0; i < i3691.length; i += 1) {
    i3690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3691[i + 0]) );
  }
  i3688.collisionMatrix = i3690
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3695 = data
  i3694.enabled = !!i3695[0]
  i3694.layerId = i3695[1]
  i3694.otherLayerId = i3695[2]
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3697 = data
  request.r(i3697[0], i3697[1], 0, i3696, 'material')
  i3696.gravity = new pc.Vec2( i3697[2], i3697[3] )
  i3696.positionIterations = i3697[4]
  i3696.velocityIterations = i3697[5]
  i3696.velocityThreshold = i3697[6]
  i3696.maxLinearCorrection = i3697[7]
  i3696.maxAngularCorrection = i3697[8]
  i3696.maxTranslationSpeed = i3697[9]
  i3696.maxRotationSpeed = i3697[10]
  i3696.baumgarteScale = i3697[11]
  i3696.baumgarteTOIScale = i3697[12]
  i3696.timeToSleep = i3697[13]
  i3696.linearSleepTolerance = i3697[14]
  i3696.angularSleepTolerance = i3697[15]
  i3696.defaultContactOffset = i3697[16]
  i3696.autoSimulation = !!i3697[17]
  i3696.queriesHitTriggers = !!i3697[18]
  i3696.queriesStartInColliders = !!i3697[19]
  i3696.callbacksOnDisable = !!i3697[20]
  i3696.reuseCollisionCallbacks = !!i3697[21]
  i3696.autoSyncTransforms = !!i3697[22]
  var i3699 = i3697[23]
  var i3698 = []
  for(var i = 0; i < i3699.length; i += 1) {
    i3698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3699[i + 0]) );
  }
  i3696.collisionMatrix = i3698
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3703 = data
  i3702.enabled = !!i3703[0]
  i3702.layerId = i3703[1]
  i3702.otherLayerId = i3703[2]
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3705 = data
  var i3707 = i3705[0]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3707[i + 0]) );
  }
  i3704.qualityLevels = i3706
  var i3709 = i3705[1]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.push( i3709[i + 0] );
  }
  i3704.names = i3708
  i3704.shadows = i3705[2]
  i3704.anisotropicFiltering = i3705[3]
  i3704.antiAliasing = i3705[4]
  i3704.lodBias = i3705[5]
  i3704.shadowCascades = i3705[6]
  i3704.shadowDistance = i3705[7]
  i3704.shadowmaskMode = i3705[8]
  i3704.shadowProjection = i3705[9]
  i3704.shadowResolution = i3705[10]
  i3704.softParticles = !!i3705[11]
  i3704.softVegetation = !!i3705[12]
  i3704.activeColorSpace = i3705[13]
  i3704.desiredColorSpace = i3705[14]
  i3704.masterTextureLimit = i3705[15]
  i3704.maxQueuedFrames = i3705[16]
  i3704.particleRaycastBudget = i3705[17]
  i3704.pixelLightCount = i3705[18]
  i3704.realtimeReflectionProbes = !!i3705[19]
  i3704.shadowCascade2Split = i3705[20]
  i3704.shadowCascade4Split = new pc.Vec3( i3705[21], i3705[22], i3705[23] )
  i3704.streamingMipmapsActive = !!i3705[24]
  i3704.vSyncCount = i3705[25]
  i3704.asyncUploadBufferSize = i3705[26]
  i3704.asyncUploadTimeSlice = i3705[27]
  i3704.billboardsFaceCameraPosition = !!i3705[28]
  i3704.shadowNearPlaneOffset = i3705[29]
  i3704.streamingMipmapsMemoryBudget = i3705[30]
  i3704.maximumLODLevel = i3705[31]
  i3704.streamingMipmapsAddAllCameras = !!i3705[32]
  i3704.streamingMipmapsMaxLevelReduction = i3705[33]
  i3704.streamingMipmapsRenderersPerFrame = i3705[34]
  i3704.resolutionScalingFixedDPIFactor = i3705[35]
  i3704.streamingMipmapsMaxFileIORequests = i3705[36]
  i3704.currentQualityLevel = i3705[37]
  return i3704
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3712 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3713 = data
  request.r(i3713[0], i3713[1], 0, i3712, 'm_ObjectArgument')
  i3712.m_ObjectArgumentAssemblyTypeName = i3713[2]
  i3712.m_IntArgument = i3713[3]
  i3712.m_FloatArgument = i3713[4]
  i3712.m_StringArgument = i3713[5]
  i3712.m_BoolArgument = !!i3713[6]
  return i3712
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3714 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3715 = data
  i3714.xPlacement = i3715[0]
  i3714.yPlacement = i3715[1]
  i3714.xAdvance = i3715[2]
  i3714.yAdvance = i3715[3]
  return i3714
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3716 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3717 = data
  i3716.m_GlyphIndex = i3717[0]
  i3716.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3717[1], i3716.m_GlyphValueRecord)
  return i3716
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3718 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3719 = data
  i3718.m_XPlacement = i3719[0]
  i3718.m_YPlacement = i3719[1]
  i3718.m_XAdvance = i3719[2]
  i3718.m_YAdvance = i3719[3]
  return i3718
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"frontSortingLayerID":16,"frontSortingOrder":17,"backSortingLayerID":18,"backSortingOrder":19,"alphaCutoff":20,"sprite":21,"tileMode":23,"isCustomRangeActive":24,"spriteSortPoint":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[88],"89":[25],"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[91],"98":[11],"99":[11],"100":[11],"101":[11],"102":[11],"103":[11],"104":[11],"105":[11],"106":[11],"107":[11],"108":[11],"109":[11],"110":[11],"111":[25],"112":[113],"114":[115],"116":[115],"33":[16],"27":[25],"117":[118],"119":[120],"121":[25],"122":[16],"123":[113,16],"38":[16,17],"124":[16],"125":[17,16],"126":[113],"127":[17,16],"128":[16],"129":[118],"130":[4],"131":[16],"132":[16],"35":[33],"19":[17,16],"47":[16],"34":[33],"133":[16],"134":[16],"135":[16],"136":[16],"137":[16],"138":[16],"139":[16],"140":[16],"141":[16],"142":[17,16],"143":[16],"144":[16],"145":[16],"146":[16],"147":[17,16],"148":[16],"149":[36],"150":[36],"37":[36],"151":[36],"152":[25],"153":[25],"154":[118]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","Audio.AudioEffect","UnityEngine.AudioSource","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","SpriteVfx.SpriteVfx","UnityEngine.AnimationClip","UnityEngine.Shader","UnityEngine.Rigidbody2D","UnityEngine.BoxCollider2D","GameResources.Bullet","UnityEngine.Sprite","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","Characters.Zombie","Characters.ZombieAnimator","UnityEngine.AudioClip","Characters.FailZombie","Conveyors.ConveyorItem","UnityEngine.Camera","UnityEngine.AudioListener","FixedWidthCamera","Audio.AudioService","SpriteVfx.SpriteVfxService","SpriteVfx.SpriteVfxPool","Pools.ResourcesPools","Pools.ResourcePool","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","Money","GameResources.ResourceView","GameResources.Storage","UnityEngine.CanvasGroup","PackShots.PackShotChooser","PackShots.PackShot","UnityEngine.UI.Button","UnityEngine.UI.AspectRatioFitter","ZombieTransition","UnityEngine.GameObject","Characters.ZombieManager","Scenario","Inputs.ConveyorSelector","GameEnd","Conveyors.InteractiveConveyorUnlockPoint","Conveyors.InteractiveConveyor","Characters.ZombieMason","Characters.Glen","Conveyors.VisualConveyor","Conveyors.ConveyorPoint","Scroller.SpriteScroller","Conveyors.VisualConveyorEnd","Conveyors.InteractiveConveyorMultiplier","SpriteFlash","Conveyors.SimpleInteractiveConveyorPoint","Conveyors.InteractiveConveyorAccelerator","UnityEngine.SpriteMask","DefaultNamespace.MaskedFillBar","Characters.Mason","PointsPlacer","Conveyors.InteractiveConveyorFinishZone","Characters.MasonAnimator","BulletBubble","Characters.GlenAnimator","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.56f1";

Deserializers.productName = "Playworks";

Deserializers.lunaInitializationTime = "07/22/2025 10:14:57";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "test-1";

Deserializers.lunaAppID = "31588";

Deserializers.projectId = "2cbeff7f7add5a14fbff6350d0fa31ad";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1782";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4448";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Playworks";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "d3f3433f-e030-4165-a7c8-b2c2181fd685";

Deserializers.runtimeInitializeOnLoadInfos = [[["SingularityGroup","HotReload","CodePatcher","WarnOnSceneLoad"],["SingularityGroup","HotReload","PlayerEntrypoint","InitOnAppLoad"],["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["SingularityGroup","HotReload","CodePatcher","InitializeUnityEvents"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

