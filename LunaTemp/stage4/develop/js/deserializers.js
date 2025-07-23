var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.JointSpring' )
  var i1861 = data
  i1860.spring = i1861[0]
  i1860.damper = i1861[1]
  i1860.targetPosition = i1861[2]
  return i1860
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.JointMotor' )
  var i1863 = data
  i1862.m_TargetVelocity = i1863[0]
  i1862.m_Force = i1863[1]
  i1862.m_FreeSpin = i1863[2]
  return i1862
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1864 = root || request.c( 'UnityEngine.JointLimits' )
  var i1865 = data
  i1864.m_Min = i1865[0]
  i1864.m_Max = i1865[1]
  i1864.m_Bounciness = i1865[2]
  i1864.m_BounceMinVelocity = i1865[3]
  i1864.m_ContactDistance = i1865[4]
  i1864.minBounce = i1865[5]
  i1864.maxBounce = i1865[6]
  return i1864
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1866 = root || request.c( 'UnityEngine.JointDrive' )
  var i1867 = data
  i1866.m_PositionSpring = i1867[0]
  i1866.m_PositionDamper = i1867[1]
  i1866.m_MaximumForce = i1867[2]
  i1866.m_UseAcceleration = i1867[3]
  return i1866
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1869 = data
  i1868.m_Spring = i1869[0]
  i1868.m_Damper = i1869[1]
  return i1868
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1871 = data
  i1870.m_Limit = i1871[0]
  i1870.m_Bounciness = i1871[1]
  i1870.m_ContactDistance = i1871[2]
  return i1870
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1873 = data
  i1872.m_ExtremumSlip = i1873[0]
  i1872.m_ExtremumValue = i1873[1]
  i1872.m_AsymptoteSlip = i1873[2]
  i1872.m_AsymptoteValue = i1873[3]
  i1872.m_Stiffness = i1873[4]
  return i1872
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1875 = data
  i1874.m_LowerAngle = i1875[0]
  i1874.m_UpperAngle = i1875[1]
  return i1874
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1876 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1877 = data
  i1876.m_MotorSpeed = i1877[0]
  i1876.m_MaximumMotorTorque = i1877[1]
  return i1876
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1878 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1879 = data
  i1878.m_DampingRatio = i1879[0]
  i1878.m_Frequency = i1879[1]
  i1878.m_Angle = i1879[2]
  return i1878
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1880 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1881 = data
  i1880.m_LowerTranslation = i1881[0]
  i1880.m_UpperTranslation = i1881[1]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1883 = data
  i1882.position = new pc.Vec3( i1883[0], i1883[1], i1883[2] )
  i1882.scale = new pc.Vec3( i1883[3], i1883[4], i1883[5] )
  i1882.rotation = new pc.Quat(i1883[6], i1883[7], i1883[8], i1883[9])
  return i1882
}

Deserializers["Audio.AudioEffect"] = function (request, data, root) {
  var i1884 = root || request.c( 'Audio.AudioEffect' )
  var i1885 = data
  request.r(i1885[0], i1885[1], 0, i1884, '_source')
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1887 = data
  request.r(i1887[0], i1887[1], 0, i1886, 'clip')
  request.r(i1887[2], i1887[3], 0, i1886, 'outputAudioMixerGroup')
  i1886.playOnAwake = !!i1887[4]
  i1886.loop = !!i1887[5]
  i1886.time = i1887[6]
  i1886.volume = i1887[7]
  i1886.pitch = i1887[8]
  i1886.enabled = !!i1887[9]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1889 = data
  i1888.name = i1889[0]
  i1888.tagId = i1889[1]
  i1888.enabled = !!i1889[2]
  i1888.isStatic = !!i1889[3]
  i1888.layer = i1889[4]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1891 = data
  i1890.enabled = !!i1891[0]
  request.r(i1891[1], i1891[2], 0, i1890, 'sharedMaterial')
  var i1893 = i1891[3]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 2) {
  request.r(i1893[i + 0], i1893[i + 1], 2, i1892, '')
  }
  i1890.sharedMaterials = i1892
  i1890.receiveShadows = !!i1891[4]
  i1890.shadowCastingMode = i1891[5]
  i1890.sortingLayerID = i1891[6]
  i1890.sortingOrder = i1891[7]
  i1890.lightmapIndex = i1891[8]
  i1890.lightmapSceneIndex = i1891[9]
  i1890.lightmapScaleOffset = new pc.Vec4( i1891[10], i1891[11], i1891[12], i1891[13] )
  i1890.lightProbeUsage = i1891[14]
  i1890.reflectionProbeUsage = i1891[15]
  i1890.color = new pc.Color(i1891[16], i1891[17], i1891[18], i1891[19])
  request.r(i1891[20], i1891[21], 0, i1890, 'sprite')
  i1890.flipX = !!i1891[22]
  i1890.flipY = !!i1891[23]
  i1890.drawMode = i1891[24]
  i1890.size = new pc.Vec2( i1891[25], i1891[26] )
  i1890.tileMode = i1891[27]
  i1890.adaptiveModeThreshold = i1891[28]
  i1890.maskInteraction = i1891[29]
  i1890.spriteSortPoint = i1891[30]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1897 = data
  request.r(i1897[0], i1897[1], 0, i1896, 'animatorController')
  request.r(i1897[2], i1897[3], 0, i1896, 'avatar')
  i1896.updateMode = i1897[4]
  i1896.hasTransformHierarchy = !!i1897[5]
  i1896.applyRootMotion = !!i1897[6]
  var i1899 = i1897[7]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 2) {
  request.r(i1899[i + 0], i1899[i + 1], 2, i1898, '')
  }
  i1896.humanBones = i1898
  i1896.enabled = !!i1897[8]
  return i1896
}

Deserializers["SpriteVfx.SpriteVfx"] = function (request, data, root) {
  var i1902 = root || request.c( 'SpriteVfx.SpriteVfx' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, '_clip')
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1904 = root || new pc.UnityMaterial()
  var i1905 = data
  i1904.name = i1905[0]
  request.r(i1905[1], i1905[2], 0, i1904, 'shader')
  i1904.renderQueue = i1905[3]
  i1904.enableInstancing = !!i1905[4]
  var i1907 = i1905[5]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1907[i + 0]) );
  }
  i1904.floatParameters = i1906
  var i1909 = i1905[6]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1909[i + 0]) );
  }
  i1904.colorParameters = i1908
  var i1911 = i1905[7]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1911[i + 0]) );
  }
  i1904.vectorParameters = i1910
  var i1913 = i1905[8]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1913[i + 0]) );
  }
  i1904.textureParameters = i1912
  var i1915 = i1905[9]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1915[i + 0]) );
  }
  i1904.materialFlags = i1914
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1919 = data
  i1918.name = i1919[0]
  i1918.value = i1919[1]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1923 = data
  i1922.name = i1923[0]
  i1922.value = new pc.Color(i1923[1], i1923[2], i1923[3], i1923[4])
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1927 = data
  i1926.name = i1927[0]
  i1926.value = new pc.Vec4( i1927[1], i1927[2], i1927[3], i1927[4] )
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1931 = data
  i1930.name = i1931[0]
  request.r(i1931[1], i1931[2], 0, i1930, 'value')
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1935 = data
  i1934.name = i1935[0]
  i1934.enabled = !!i1935[1]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1937 = data
  i1936.name = i1937[0]
  i1936.width = i1937[1]
  i1936.height = i1937[2]
  i1936.mipmapCount = i1937[3]
  i1936.anisoLevel = i1937[4]
  i1936.filterMode = i1937[5]
  i1936.hdr = !!i1937[6]
  i1936.format = i1937[7]
  i1936.wrapMode = i1937[8]
  i1936.alphaIsTransparency = !!i1937[9]
  i1936.alphaSource = i1937[10]
  i1936.graphicsFormat = i1937[11]
  i1936.sRGBTexture = !!i1937[12]
  i1936.desiredColorSpace = i1937[13]
  i1936.wrapU = i1937[14]
  i1936.wrapV = i1937[15]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1939 = data
  i1938.bodyType = i1939[0]
  request.r(i1939[1], i1939[2], 0, i1938, 'material')
  i1938.simulated = !!i1939[3]
  i1938.useAutoMass = !!i1939[4]
  i1938.mass = i1939[5]
  i1938.drag = i1939[6]
  i1938.angularDrag = i1939[7]
  i1938.gravityScale = i1939[8]
  i1938.collisionDetectionMode = i1939[9]
  i1938.sleepMode = i1939[10]
  i1938.constraints = i1939[11]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1941 = data
  i1940.usedByComposite = !!i1941[0]
  i1940.autoTiling = !!i1941[1]
  i1940.size = new pc.Vec2( i1941[2], i1941[3] )
  i1940.edgeRadius = i1941[4]
  i1940.enabled = !!i1941[5]
  i1940.isTrigger = !!i1941[6]
  i1940.usedByEffector = !!i1941[7]
  i1940.density = i1941[8]
  i1940.offset = new pc.Vec2( i1941[9], i1941[10] )
  request.r(i1941[11], i1941[12], 0, i1940, 'material')
  return i1940
}

Deserializers["GameResources.Bullet"] = function (request, data, root) {
  var i1942 = root || request.c( 'GameResources.Bullet' )
  var i1943 = data
  i1942._type = i1943[0]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1945 = data
  i1944.pivot = new pc.Vec2( i1945[0], i1945[1] )
  i1944.anchorMin = new pc.Vec2( i1945[2], i1945[3] )
  i1944.anchorMax = new pc.Vec2( i1945[4], i1945[5] )
  i1944.sizeDelta = new pc.Vec2( i1945[6], i1945[7] )
  i1944.anchoredPosition3D = new pc.Vec3( i1945[8], i1945[9], i1945[10] )
  i1944.rotation = new pc.Quat(i1945[11], i1945[12], i1945[13], i1945[14])
  i1944.scale = new pc.Vec3( i1945[15], i1945[16], i1945[17] )
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1947 = data
  i1946.cullTransparentMesh = !!i1947[0]
  return i1946
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.UI.Image' )
  var i1949 = data
  request.r(i1949[0], i1949[1], 0, i1948, 'm_Sprite')
  i1948.m_Type = i1949[2]
  i1948.m_PreserveAspect = !!i1949[3]
  i1948.m_FillCenter = !!i1949[4]
  i1948.m_FillMethod = i1949[5]
  i1948.m_FillAmount = i1949[6]
  i1948.m_FillClockwise = !!i1949[7]
  i1948.m_FillOrigin = i1949[8]
  i1948.m_UseSpriteMesh = !!i1949[9]
  i1948.m_PixelsPerUnitMultiplier = i1949[10]
  request.r(i1949[11], i1949[12], 0, i1948, 'm_Material')
  i1948.m_Maskable = !!i1949[13]
  i1948.m_Color = new pc.Color(i1949[14], i1949[15], i1949[16], i1949[17])
  i1948.m_RaycastTarget = !!i1949[18]
  i1948.m_RaycastPadding = new pc.Vec4( i1949[19], i1949[20], i1949[21], i1949[22] )
  return i1948
}

Deserializers["Characters.Zombie"] = function (request, data, root) {
  var i1950 = root || request.c( 'Characters.Zombie' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, '_renderer')
  request.r(i1951[2], i1951[3], 0, i1950, '_collider')
  request.r(i1951[4], i1951[5], 0, i1950, '_animator')
  i1950._moveSpeed = i1951[6]
  i1950._dieTime = i1951[7]
  request.r(i1951[8], i1951[9], 0, i1950, '_defaultMaterial')
  request.r(i1951[10], i1951[11], 0, i1950, '_deathMaterial')
  request.r(i1951[12], i1951[13], 0, i1950, '_coinsSound')
  request.r(i1951[14], i1951[15], 0, i1950, '_checkSpacePoint')
  i1950._zombieLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1951[16] )
  i1950._checkSpaceRadius = i1951[17]
  return i1950
}

Deserializers["Characters.ZombieAnimator"] = function (request, data, root) {
  var i1952 = root || request.c( 'Characters.ZombieAnimator' )
  var i1953 = data
  var i1955 = i1953[0]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 2) {
  request.r(i1955[i + 0], i1955[i + 1], 2, i1954, '')
  }
  i1952._animators = i1954
  return i1952
}

Deserializers["Characters.FailZombie"] = function (request, data, root) {
  var i1958 = root || request.c( 'Characters.FailZombie' )
  var i1959 = data
  request.r(i1959[0], i1959[1], 0, i1958, '_animator')
  request.r(i1959[2], i1959[3], 0, i1958, '_renderer')
  i1958._moveSpeed = i1959[4]
  return i1958
}

Deserializers["Conveyors.ConveyorItem"] = function (request, data, root) {
  var i1960 = root || request.c( 'Conveyors.ConveyorItem' )
  var i1961 = data
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1963 = data
  i1962.name = i1963[0]
  i1962.index = i1963[1]
  i1962.startup = !!i1963[2]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1965 = data
  i1964.enabled = !!i1965[0]
  i1964.aspect = i1965[1]
  i1964.orthographic = !!i1965[2]
  i1964.orthographicSize = i1965[3]
  i1964.backgroundColor = new pc.Color(i1965[4], i1965[5], i1965[6], i1965[7])
  i1964.nearClipPlane = i1965[8]
  i1964.farClipPlane = i1965[9]
  i1964.fieldOfView = i1965[10]
  i1964.depth = i1965[11]
  i1964.clearFlags = i1965[12]
  i1964.cullingMask = i1965[13]
  i1964.rect = i1965[14]
  request.r(i1965[15], i1965[16], 0, i1964, 'targetTexture')
  i1964.usePhysicalProperties = !!i1965[17]
  i1964.focalLength = i1965[18]
  i1964.sensorSize = new pc.Vec2( i1965[19], i1965[20] )
  i1964.lensShift = new pc.Vec2( i1965[21], i1965[22] )
  i1964.gateFit = i1965[23]
  i1964.commandBufferCount = i1965[24]
  i1964.cameraType = i1965[25]
  return i1964
}

Deserializers["FixedWidthCamera"] = function (request, data, root) {
  var i1966 = root || request.c( 'FixedWidthCamera' )
  var i1967 = data
  i1966._targetWidth = i1967[0]
  i1966._targetHeight = i1967[1]
  return i1966
}

Deserializers["Audio.AudioService"] = function (request, data, root) {
  var i1968 = root || request.c( 'Audio.AudioService' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, '_musicSource')
  request.r(i1969[2], i1969[3], 0, i1968, '_audioEffectPrefab')
  return i1968
}

Deserializers["SpriteVfx.SpriteVfxService"] = function (request, data, root) {
  var i1970 = root || request.c( 'SpriteVfx.SpriteVfxService' )
  var i1971 = data
  var i1973 = i1971[0]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 2) {
  request.r(i1973[i + 0], i1973[i + 1], 2, i1972, '')
  }
  i1970._pools = i1972
  return i1970
}

Deserializers["SpriteVfx.SpriteVfxPool"] = function (request, data, root) {
  var i1976 = root || request.c( 'SpriteVfx.SpriteVfxPool' )
  var i1977 = data
  i1976._type = i1977[0]
  request.r(i1977[1], i1977[2], 0, i1976, '_prefab')
  return i1976
}

Deserializers["Pools.ResourcesPools"] = function (request, data, root) {
  var i1978 = root || request.c( 'Pools.ResourcesPools' )
  var i1979 = data
  var i1981 = i1979[0]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 2) {
  request.r(i1981[i + 0], i1981[i + 1], 2, i1980, '')
  }
  i1978._pools = i1980
  return i1978
}

Deserializers["Pools.ResourcePool"] = function (request, data, root) {
  var i1984 = root || request.c( 'Pools.ResourcePool' )
  var i1985 = data
  request.r(i1985[0], i1985[1], 0, i1984, '_prefab')
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1987 = data
  i1986.enabled = !!i1987[0]
  i1986.planeDistance = i1987[1]
  i1986.referencePixelsPerUnit = i1987[2]
  i1986.isFallbackOverlay = !!i1987[3]
  i1986.renderMode = i1987[4]
  i1986.renderOrder = i1987[5]
  i1986.sortingLayerName = i1987[6]
  i1986.sortingOrder = i1987[7]
  i1986.scaleFactor = i1987[8]
  request.r(i1987[9], i1987[10], 0, i1986, 'worldCamera')
  i1986.overrideSorting = !!i1987[11]
  i1986.pixelPerfect = !!i1987[12]
  i1986.targetDisplay = i1987[13]
  i1986.overridePixelPerfect = !!i1987[14]
  return i1986
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1989 = data
  i1988.m_UiScaleMode = i1989[0]
  i1988.m_ReferencePixelsPerUnit = i1989[1]
  i1988.m_ScaleFactor = i1989[2]
  i1988.m_ReferenceResolution = new pc.Vec2( i1989[3], i1989[4] )
  i1988.m_ScreenMatchMode = i1989[5]
  i1988.m_MatchWidthOrHeight = i1989[6]
  i1988.m_PhysicalUnit = i1989[7]
  i1988.m_FallbackScreenDPI = i1989[8]
  i1988.m_DefaultSpriteDPI = i1989[9]
  i1988.m_DynamicPixelsPerUnit = i1989[10]
  i1988.m_PresetInfoIsWorld = !!i1989[11]
  return i1988
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1991 = data
  i1990.m_IgnoreReversedGraphics = !!i1991[0]
  i1990.m_BlockingObjects = i1991[1]
  i1990.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1991[2] )
  return i1990
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1993 = data
  request.r(i1993[0], i1993[1], 0, i1992, 'm_FirstSelected')
  i1992.m_sendNavigationEvents = !!i1993[2]
  i1992.m_DragThreshold = i1993[3]
  return i1992
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1995 = data
  i1994.m_HorizontalAxis = i1995[0]
  i1994.m_VerticalAxis = i1995[1]
  i1994.m_SubmitButton = i1995[2]
  i1994.m_CancelButton = i1995[3]
  i1994.m_InputActionsPerSecond = i1995[4]
  i1994.m_RepeatDelay = i1995[5]
  i1994.m_ForceModuleActive = !!i1995[6]
  i1994.m_SendPointerHoverToParent = !!i1995[7]
  return i1994
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1996 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1997 = data
  i1996.m_hasFontAssetChanged = !!i1997[0]
  request.r(i1997[1], i1997[2], 0, i1996, 'm_baseMaterial')
  i1996.m_maskOffset = new pc.Vec4( i1997[3], i1997[4], i1997[5], i1997[6] )
  i1996.m_text = i1997[7]
  i1996.m_isRightToLeft = !!i1997[8]
  request.r(i1997[9], i1997[10], 0, i1996, 'm_fontAsset')
  request.r(i1997[11], i1997[12], 0, i1996, 'm_sharedMaterial')
  var i1999 = i1997[13]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 2) {
  request.r(i1999[i + 0], i1999[i + 1], 2, i1998, '')
  }
  i1996.m_fontSharedMaterials = i1998
  request.r(i1997[14], i1997[15], 0, i1996, 'm_fontMaterial')
  var i2001 = i1997[16]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 2) {
  request.r(i2001[i + 0], i2001[i + 1], 2, i2000, '')
  }
  i1996.m_fontMaterials = i2000
  i1996.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1997[17], i1997[18], i1997[19], i1997[20])
  i1996.m_fontColor = new pc.Color(i1997[21], i1997[22], i1997[23], i1997[24])
  i1996.m_enableVertexGradient = !!i1997[25]
  i1996.m_colorMode = i1997[26]
  i1996.m_fontColorGradient = request.d('TMPro.VertexGradient', i1997[27], i1996.m_fontColorGradient)
  request.r(i1997[28], i1997[29], 0, i1996, 'm_fontColorGradientPreset')
  request.r(i1997[30], i1997[31], 0, i1996, 'm_spriteAsset')
  i1996.m_tintAllSprites = !!i1997[32]
  request.r(i1997[33], i1997[34], 0, i1996, 'm_StyleSheet')
  i1996.m_TextStyleHashCode = i1997[35]
  i1996.m_overrideHtmlColors = !!i1997[36]
  i1996.m_faceColor = UnityEngine.Color32.ConstructColor(i1997[37], i1997[38], i1997[39], i1997[40])
  i1996.m_fontSize = i1997[41]
  i1996.m_fontSizeBase = i1997[42]
  i1996.m_fontWeight = i1997[43]
  i1996.m_enableAutoSizing = !!i1997[44]
  i1996.m_fontSizeMin = i1997[45]
  i1996.m_fontSizeMax = i1997[46]
  i1996.m_fontStyle = i1997[47]
  i1996.m_HorizontalAlignment = i1997[48]
  i1996.m_VerticalAlignment = i1997[49]
  i1996.m_textAlignment = i1997[50]
  i1996.m_characterSpacing = i1997[51]
  i1996.m_wordSpacing = i1997[52]
  i1996.m_lineSpacing = i1997[53]
  i1996.m_lineSpacingMax = i1997[54]
  i1996.m_paragraphSpacing = i1997[55]
  i1996.m_charWidthMaxAdj = i1997[56]
  i1996.m_enableWordWrapping = !!i1997[57]
  i1996.m_wordWrappingRatios = i1997[58]
  i1996.m_overflowMode = i1997[59]
  request.r(i1997[60], i1997[61], 0, i1996, 'm_linkedTextComponent')
  request.r(i1997[62], i1997[63], 0, i1996, 'parentLinkedComponent')
  i1996.m_enableKerning = !!i1997[64]
  i1996.m_enableExtraPadding = !!i1997[65]
  i1996.checkPaddingRequired = !!i1997[66]
  i1996.m_isRichText = !!i1997[67]
  i1996.m_parseCtrlCharacters = !!i1997[68]
  i1996.m_isOrthographic = !!i1997[69]
  i1996.m_isCullingEnabled = !!i1997[70]
  i1996.m_horizontalMapping = i1997[71]
  i1996.m_verticalMapping = i1997[72]
  i1996.m_uvLineOffset = i1997[73]
  i1996.m_geometrySortingOrder = i1997[74]
  i1996.m_IsTextObjectScaleStatic = !!i1997[75]
  i1996.m_VertexBufferAutoSizeReduction = !!i1997[76]
  i1996.m_useMaxVisibleDescender = !!i1997[77]
  i1996.m_pageToDisplay = i1997[78]
  i1996.m_margin = new pc.Vec4( i1997[79], i1997[80], i1997[81], i1997[82] )
  i1996.m_isUsingLegacyAnimationComponent = !!i1997[83]
  i1996.m_isVolumetricText = !!i1997[84]
  request.r(i1997[85], i1997[86], 0, i1996, 'm_Material')
  i1996.m_Maskable = !!i1997[87]
  i1996.m_Color = new pc.Color(i1997[88], i1997[89], i1997[90], i1997[91])
  i1996.m_RaycastTarget = !!i1997[92]
  i1996.m_RaycastPadding = new pc.Vec4( i1997[93], i1997[94], i1997[95], i1997[96] )
  return i1996
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2002 = root || request.c( 'TMPro.VertexGradient' )
  var i2003 = data
  i2002.topLeft = new pc.Color(i2003[0], i2003[1], i2003[2], i2003[3])
  i2002.topRight = new pc.Color(i2003[4], i2003[5], i2003[6], i2003[7])
  i2002.bottomLeft = new pc.Color(i2003[8], i2003[9], i2003[10], i2003[11])
  i2002.bottomRight = new pc.Color(i2003[12], i2003[13], i2003[14], i2003[15])
  return i2002
}

Deserializers["Money"] = function (request, data, root) {
  var i2004 = root || request.c( 'Money' )
  var i2005 = data
  request.r(i2005[0], i2005[1], 0, i2004, '_text')
  return i2004
}

Deserializers["GameResources.ResourceView"] = function (request, data, root) {
  var i2006 = root || request.c( 'GameResources.ResourceView' )
  var i2007 = data
  request.r(i2007[0], i2007[1], 0, i2006, '_storage')
  i2006._type = i2007[2]
  request.r(i2007[3], i2007[4], 0, i2006, '_amount')
  i2006._useShowHide = !!i2007[5]
  i2006._countChangeDuration = i2007[6]
  i2006._punchScale = i2007[7]
  i2006._punchDuration = i2007[8]
  i2006._punchColor = new pc.Color(i2007[9], i2007[10], i2007[11], i2007[12])
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2009 = data
  i2008.m_Alpha = i2009[0]
  i2008.m_Interactable = !!i2009[1]
  i2008.m_BlocksRaycasts = !!i2009[2]
  i2008.m_IgnoreParentGroups = !!i2009[3]
  i2008.enabled = !!i2009[4]
  return i2008
}

Deserializers["PackShots.PackShotChooser"] = function (request, data, root) {
  var i2010 = root || request.c( 'PackShots.PackShotChooser' )
  var i2011 = data
  request.r(i2011[0], i2011[1], 0, i2010, '_horizontalPackShot')
  request.r(i2011[2], i2011[3], 0, i2010, '_verticalPackShot')
  return i2010
}

Deserializers["PackShots.PackShot"] = function (request, data, root) {
  var i2012 = root || request.c( 'PackShots.PackShot' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, '_background')
  request.r(i2013[2], i2013[3], 0, i2012, '_title')
  request.r(i2013[4], i2013[5], 0, i2012, '_playButton')
  return i2012
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i2014 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i2015 = data
  i2014.m_AspectMode = i2015[0]
  i2014.m_AspectRatio = i2015[1]
  return i2014
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2016 = root || request.c( 'UnityEngine.UI.Button' )
  var i2017 = data
  i2016.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2017[0], i2016.m_OnClick)
  i2016.m_Navigation = request.d('UnityEngine.UI.Navigation', i2017[1], i2016.m_Navigation)
  i2016.m_Transition = i2017[2]
  i2016.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2017[3], i2016.m_Colors)
  i2016.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2017[4], i2016.m_SpriteState)
  i2016.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2017[5], i2016.m_AnimationTriggers)
  i2016.m_Interactable = !!i2017[6]
  request.r(i2017[7], i2017[8], 0, i2016, 'm_TargetGraphic')
  return i2016
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2019 = data
  i2018.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2019[0], i2018.m_PersistentCalls)
  return i2018
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2020 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2021 = data
  var i2023 = i2021[0]
  var i2022 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.add(request.d('UnityEngine.Events.PersistentCall', i2023[i + 0]));
  }
  i2020.m_Calls = i2022
  return i2020
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2026 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2027 = data
  request.r(i2027[0], i2027[1], 0, i2026, 'm_Target')
  i2026.m_TargetAssemblyTypeName = i2027[2]
  i2026.m_MethodName = i2027[3]
  i2026.m_Mode = i2027[4]
  i2026.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2027[5], i2026.m_Arguments)
  i2026.m_CallState = i2027[6]
  return i2026
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2029 = data
  i2028.m_Mode = i2029[0]
  i2028.m_WrapAround = !!i2029[1]
  request.r(i2029[2], i2029[3], 0, i2028, 'm_SelectOnUp')
  request.r(i2029[4], i2029[5], 0, i2028, 'm_SelectOnDown')
  request.r(i2029[6], i2029[7], 0, i2028, 'm_SelectOnLeft')
  request.r(i2029[8], i2029[9], 0, i2028, 'm_SelectOnRight')
  return i2028
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2030 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2031 = data
  i2030.m_NormalColor = new pc.Color(i2031[0], i2031[1], i2031[2], i2031[3])
  i2030.m_HighlightedColor = new pc.Color(i2031[4], i2031[5], i2031[6], i2031[7])
  i2030.m_PressedColor = new pc.Color(i2031[8], i2031[9], i2031[10], i2031[11])
  i2030.m_SelectedColor = new pc.Color(i2031[12], i2031[13], i2031[14], i2031[15])
  i2030.m_DisabledColor = new pc.Color(i2031[16], i2031[17], i2031[18], i2031[19])
  i2030.m_ColorMultiplier = i2031[20]
  i2030.m_FadeDuration = i2031[21]
  return i2030
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'm_HighlightedSprite')
  request.r(i2033[2], i2033[3], 0, i2032, 'm_PressedSprite')
  request.r(i2033[4], i2033[5], 0, i2032, 'm_SelectedSprite')
  request.r(i2033[6], i2033[7], 0, i2032, 'm_DisabledSprite')
  return i2032
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2034 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2035 = data
  i2034.m_NormalTrigger = i2035[0]
  i2034.m_HighlightedTrigger = i2035[1]
  i2034.m_PressedTrigger = i2035[2]
  i2034.m_SelectedTrigger = i2035[3]
  i2034.m_DisabledTrigger = i2035[4]
  return i2034
}

Deserializers["ZombieTransition"] = function (request, data, root) {
  var i2036 = root || request.c( 'ZombieTransition' )
  var i2037 = data
  request.r(i2037[0], i2037[1], 0, i2036, '_canvasRect')
  request.r(i2037[2], i2037[3], 0, i2036, '_imagePrefab')
  i2036._spacing = new pc.Vec2( i2037[4], i2037[5] )
  i2036._randomOffset = new pc.Vec2( i2037[6], i2037[7] )
  i2036._transitionDuration = i2037[8]
  request.r(i2037[9], i2037[10], 0, i2036, '_packShot')
  request.r(i2037[11], i2037[12], 0, i2036, '_zombieManager')
  var i2039 = i2037[13]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 2) {
  request.r(i2039[i + 0], i2039[i + 1], 2, i2038, '')
  }
  i2036._children = i2038
  return i2036
}

Deserializers["Scenario"] = function (request, data, root) {
  var i2042 = root || request.c( 'Scenario' )
  var i2043 = data
  request.r(i2043[0], i2043[1], 0, i2042, '_conveyorSelector')
  request.r(i2043[2], i2043[3], 0, i2042, '_gameEnd')
  request.r(i2043[4], i2043[5], 0, i2042, '_storage')
  request.r(i2043[6], i2043[7], 0, i2042, '_bulletsPool')
  request.r(i2043[8], i2043[9], 0, i2042, '_zombieManager')
  request.r(i2043[10], i2043[11], 0, i2042, '_unlockPoint')
  request.r(i2043[12], i2043[13], 0, i2042, '_closedConveyor')
  var i2045 = i2043[14]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 2) {
  request.r(i2045[i + 0], i2045[i + 1], 2, i2044, '')
  }
  i2042._conveyors = i2044
  return i2042
}

Deserializers["GameEnd"] = function (request, data, root) {
  var i2048 = root || request.c( 'GameEnd' )
  var i2049 = data
  request.r(i2049[0], i2049[1], 0, i2048, '_zombieTransition')
  request.r(i2049[2], i2049[3], 0, i2048, '_packShot')
  request.r(i2049[4], i2049[5], 0, i2048, '_explosionPoint')
  request.r(i2049[6], i2049[7], 0, i2048, '_borderToDisable')
  request.r(i2049[8], i2049[9], 0, i2048, '_borderToEnable')
  var i2051 = i2049[10]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 2) {
  request.r(i2051[i + 0], i2051[i + 1], 2, i2050, '')
  }
  i2048._zombieSpawnPoints = i2050
  var i2053 = i2049[11]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 2) {
  request.r(i2053[i + 0], i2053[i + 1], 2, i2052, '')
  }
  i2048._toDisable = i2052
  request.r(i2049[12], i2049[13], 0, i2048, '_failZombiePrefab')
  request.r(i2049[14], i2049[15], 0, i2048, '_masonZombie')
  request.r(i2049[16], i2049[17], 0, i2048, '_masonBitePoint')
  request.r(i2049[18], i2049[19], 0, i2048, '_glen')
  request.r(i2049[20], i2049[21], 0, i2048, '_explosionSound')
  request.r(i2049[22], i2049[23], 0, i2048, '_failSound')
  return i2048
}

Deserializers["Inputs.ConveyorSelector"] = function (request, data, root) {
  var i2054 = root || request.c( 'Inputs.ConveyorSelector' )
  var i2055 = data
  i2054._clickMask = UnityEngine.LayerMask.FromIntegerValue( i2055[0] )
  request.r(i2055[1], i2055[2], 0, i2054, '_sound')
  return i2054
}

Deserializers["GameResources.Storage"] = function (request, data, root) {
  var i2056 = root || request.c( 'GameResources.Storage' )
  var i2057 = data
  var i2059 = i2057[0]
  var i2058 = new (System.Collections.Generic.List$1(Bridge.ns('GameResources.ResourcePack')))
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.add(request.d('GameResources.ResourcePack', i2059[i + 0]));
  }
  i2056._startResources = i2058
  return i2056
}

Deserializers["GameResources.ResourcePack"] = function (request, data, root) {
  var i2062 = root || request.c( 'GameResources.ResourcePack' )
  var i2063 = data
  i2062.Type = i2063[0]
  i2062.Amount = i2063[1]
  return i2062
}

Deserializers["Conveyors.VisualConveyor"] = function (request, data, root) {
  var i2064 = root || request.c( 'Conveyors.VisualConveyor' )
  var i2065 = data
  i2064._autoStarkWork = !!i2065[0]
  request.r(i2065[1], i2065[2], 0, i2064, '_prefab')
  i2064._spawnDelay = i2065[3]
  i2064._moveSpeed = i2065[4]
  i2064._initialAmount = i2065[5]
  var i2067 = i2065[6]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 2) {
  request.r(i2067[i + 0], i2067[i + 1], 2, i2066, '')
  }
  i2064._points = i2066
  return i2064
}

Deserializers["Scroller.SpriteScroller"] = function (request, data, root) {
  var i2070 = root || request.c( 'Scroller.SpriteScroller' )
  var i2071 = data
  request.r(i2071[0], i2071[1], 0, i2070, '_renderer')
  i2070._useSharedMaterial = !!i2071[2]
  i2070._speedX = i2071[3]
  i2070._speedY = i2071[4]
  return i2070
}

Deserializers["Conveyors.ConveyorPoint"] = function (request, data, root) {
  var i2072 = root || request.c( 'Conveyors.ConveyorPoint' )
  var i2073 = data
  return i2072
}

Deserializers["Conveyors.VisualConveyorEnd"] = function (request, data, root) {
  var i2074 = root || request.c( 'Conveyors.VisualConveyorEnd' )
  var i2075 = data
  var i2077 = i2075[0]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 2) {
  request.r(i2077[i + 0], i2077[i + 1], 2, i2076, '')
  }
  i2074._targets = i2076
  return i2074
}

Deserializers["Conveyors.InteractiveConveyor"] = function (request, data, root) {
  var i2078 = root || request.c( 'Conveyors.InteractiveConveyor' )
  var i2079 = data
  request.r(i2079[0], i2079[1], 0, i2078, '_interactionPoint')
  request.r(i2079[2], i2079[3], 0, i2078, '_point')
  var i2081 = i2079[4]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 2) {
  request.r(i2081[i + 0], i2081[i + 1], 2, i2080, '')
  }
  i2078._scaleOnSelect = i2080
  return i2078
}

Deserializers["SpriteFlash"] = function (request, data, root) {
  var i2082 = root || request.c( 'SpriteFlash' )
  var i2083 = data
  request.r(i2083[0], i2083[1], 0, i2082, '_spriteRenderer')
  i2082._duration = i2083[2]
  i2082._alwaysOnAfterClick = !!i2083[3]
  request.r(i2083[4], i2083[5], 0, i2082, '_selector')
  return i2082
}

Deserializers["Conveyors.InteractiveConveyorMultiplier"] = function (request, data, root) {
  var i2084 = root || request.c( 'Conveyors.InteractiveConveyorMultiplier' )
  var i2085 = data
  request.r(i2085[0], i2085[1], 0, i2084, '_bulletPool')
  request.r(i2085[2], i2085[3], 0, i2084, '_spriteRenderer')
  var i2087 = i2085[4]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 2) {
  request.r(i2087[i + 0], i2087[i + 1], 2, i2086, '')
  }
  i2084._startPoints = i2086
  i2084._speed = i2085[5]
  request.r(i2085[6], i2085[7], 0, i2084, '_nextPoint')
  request.r(i2085[8], i2085[9], 0, i2084, '_interactionPoint')
  return i2084
}

Deserializers["Conveyors.SimpleInteractiveConveyorPoint"] = function (request, data, root) {
  var i2088 = root || request.c( 'Conveyors.SimpleInteractiveConveyorPoint' )
  var i2089 = data
  i2088._speed = i2089[0]
  request.r(i2089[1], i2089[2], 0, i2088, '_nextPoint')
  request.r(i2089[3], i2089[4], 0, i2088, '_interactionPoint')
  return i2088
}

Deserializers["Conveyors.InteractiveConveyorAccelerator"] = function (request, data, root) {
  var i2090 = root || request.c( 'Conveyors.InteractiveConveyorAccelerator' )
  var i2091 = data
  request.r(i2091[0], i2091[1], 0, i2090, '_spriteRenderer')
  i2090._speed = i2091[2]
  request.r(i2091[3], i2091[4], 0, i2090, '_nextPoint')
  request.r(i2091[5], i2091[6], 0, i2090, '_interactionPoint')
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2093 = data
  i2092.enabled = !!i2093[0]
  request.r(i2093[1], i2093[2], 0, i2092, 'sharedMaterial')
  var i2095 = i2093[3]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 2) {
  request.r(i2095[i + 0], i2095[i + 1], 2, i2094, '')
  }
  i2092.sharedMaterials = i2094
  i2092.receiveShadows = !!i2093[4]
  i2092.shadowCastingMode = i2093[5]
  i2092.sortingLayerID = i2093[6]
  i2092.sortingOrder = i2093[7]
  i2092.lightmapIndex = i2093[8]
  i2092.lightmapSceneIndex = i2093[9]
  i2092.lightmapScaleOffset = new pc.Vec4( i2093[10], i2093[11], i2093[12], i2093[13] )
  i2092.lightProbeUsage = i2093[14]
  i2092.reflectionProbeUsage = i2093[15]
  i2092.frontSortingLayerID = i2093[16]
  i2092.frontSortingOrder = i2093[17]
  i2092.backSortingLayerID = i2093[18]
  i2092.backSortingOrder = i2093[19]
  i2092.alphaCutoff = i2093[20]
  request.r(i2093[21], i2093[22], 0, i2092, 'sprite')
  i2092.tileMode = i2093[23]
  i2092.isCustomRangeActive = !!i2093[24]
  i2092.spriteSortPoint = i2093[25]
  return i2092
}

Deserializers["DefaultNamespace.MaskedFillBar"] = function (request, data, root) {
  var i2096 = root || request.c( 'DefaultNamespace.MaskedFillBar' )
  var i2097 = data
  request.r(i2097[0], i2097[1], 0, i2096, '_maskTransform')
  i2096._emptyLocalPosition = new pc.Vec3( i2097[2], i2097[3], i2097[4] )
  i2096._fillLocalPosition = new pc.Vec3( i2097[5], i2097[6], i2097[7] )
  return i2096
}

Deserializers["Conveyors.InteractiveConveyorUnlockPoint"] = function (request, data, root) {
  var i2098 = root || request.c( 'Conveyors.InteractiveConveyorUnlockPoint' )
  var i2099 = data
  request.r(i2099[0], i2099[1], 0, i2098, '_toUnlock')
  request.r(i2099[2], i2099[3], 0, i2098, '_lockObject')
  request.r(i2099[4], i2099[5], 0, i2098, '_highlightObject')
  request.r(i2099[6], i2099[7], 0, i2098, '_fillBar')
  request.r(i2099[8], i2099[9], 0, i2098, '_costText')
  i2098._cost = i2099[10]
  request.r(i2099[11], i2099[12], 0, i2098, '_zombieManager')
  request.r(i2099[13], i2099[14], 0, i2098, '_sound')
  request.r(i2099[15], i2099[16], 0, i2098, '_mason')
  i2098._speed = i2099[17]
  request.r(i2099[18], i2099[19], 0, i2098, '_nextPoint')
  request.r(i2099[20], i2099[21], 0, i2098, '_interactionPoint')
  return i2098
}

Deserializers["PointsPlacer"] = function (request, data, root) {
  var i2100 = root || request.c( 'PointsPlacer' )
  var i2101 = data
  request.r(i2101[0], i2101[1], 0, i2100, '_parent')
  i2100._offset = new pc.Vec3( i2101[2], i2101[3], i2101[4] )
  return i2100
}

Deserializers["Conveyors.InteractiveConveyorFinishZone"] = function (request, data, root) {
  var i2102 = root || request.c( 'Conveyors.InteractiveConveyorFinishZone' )
  var i2103 = data
  request.r(i2103[0], i2103[1], 0, i2102, '_storage')
  request.r(i2103[2], i2103[3], 0, i2102, '_sound')
  return i2102
}

Deserializers["Characters.Mason"] = function (request, data, root) {
  var i2104 = root || request.c( 'Characters.Mason' )
  var i2105 = data
  request.r(i2105[0], i2105[1], 0, i2104, '_animator')
  i2104._fireDelay = i2105[2]
  i2104._sqrFireRange = i2105[3]
  request.r(i2105[4], i2105[5], 0, i2104, '_storage')
  request.r(i2105[6], i2105[7], 0, i2104, '_zombieManager')
  request.r(i2105[8], i2105[9], 0, i2104, '_shotSound')
  return i2104
}

Deserializers["Characters.MasonAnimator"] = function (request, data, root) {
  var i2106 = root || request.c( 'Characters.MasonAnimator' )
  var i2107 = data
  var i2109 = i2107[0]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 2) {
  request.r(i2109[i + 0], i2109[i + 1], 2, i2108, '')
  }
  i2106._animators = i2108
  return i2106
}

Deserializers["Characters.ZombieMason"] = function (request, data, root) {
  var i2110 = root || request.c( 'Characters.ZombieMason' )
  var i2111 = data
  request.r(i2111[0], i2111[1], 0, i2110, '_renderer')
  request.r(i2111[2], i2111[3], 0, i2110, '_masonRenderer')
  request.r(i2111[4], i2111[5], 0, i2110, '_animator')
  request.r(i2111[6], i2111[7], 0, i2110, '_mason')
  i2110._moveSpeed = i2111[8]
  return i2110
}

Deserializers["BulletBubble"] = function (request, data, root) {
  var i2112 = root || request.c( 'BulletBubble' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, '_glowImage')
  request.r(i2113[2], i2113[3], 0, i2112, '_storage')
  return i2112
}

Deserializers["Characters.Glen"] = function (request, data, root) {
  var i2114 = root || request.c( 'Characters.Glen' )
  var i2115 = data
  request.r(i2115[0], i2115[1], 0, i2114, '_selector')
  request.r(i2115[2], i2115[3], 0, i2114, '_animator')
  request.r(i2115[4], i2115[5], 0, i2114, '_upgradeMaterial')
  i2114._moveSpeed = i2115[6]
  i2114._waitTime = i2115[7]
  request.r(i2115[8], i2115[9], 0, i2114, '_bulletPool')
  request.r(i2115[10], i2115[11], 0, i2114, '_bulletPickupPoint')
  request.r(i2115[12], i2115[13], 0, i2114, '_bulletSpawnPoint')
  request.r(i2115[14], i2115[15], 0, i2114, '_bulletHoldingPoint')
  request.r(i2115[16], i2115[17], 0, i2114, '_storage')
  return i2114
}

Deserializers["Characters.GlenAnimator"] = function (request, data, root) {
  var i2116 = root || request.c( 'Characters.GlenAnimator' )
  var i2117 = data
  var i2119 = i2117[0]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 2) {
  request.r(i2119[i + 0], i2119[i + 1], 2, i2118, '')
  }
  i2116._animators = i2118
  return i2116
}

Deserializers["Characters.ZombieManager"] = function (request, data, root) {
  var i2120 = root || request.c( 'Characters.ZombieManager' )
  var i2121 = data
  request.r(i2121[0], i2121[1], 0, i2120, '_storage')
  request.r(i2121[2], i2121[3], 0, i2120, '_prefab')
  var i2123 = i2121[4]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 2) {
  request.r(i2123[i + 0], i2123[i + 1], 2, i2122, '')
  }
  i2120._spawnPoints = i2122
  var i2125 = i2121[5]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 2) {
  request.r(i2125[i + 0], i2125[i + 1], 2, i2124, '')
  }
  i2120._targetPoints = i2124
  i2120._spawnInterval = new pc.Vec2( i2121[6], i2121[7] )
  i2120._maximumOnScreen = i2121[8]
  request.r(i2121[9], i2121[10], 0, i2120, '_zombieBiteSound')
  request.r(i2121[11], i2121[12], 0, i2120, '_gameEnd')
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2127 = data
  i2126.ambientIntensity = i2127[0]
  i2126.reflectionIntensity = i2127[1]
  i2126.ambientMode = i2127[2]
  i2126.ambientLight = new pc.Color(i2127[3], i2127[4], i2127[5], i2127[6])
  i2126.ambientSkyColor = new pc.Color(i2127[7], i2127[8], i2127[9], i2127[10])
  i2126.ambientGroundColor = new pc.Color(i2127[11], i2127[12], i2127[13], i2127[14])
  i2126.ambientEquatorColor = new pc.Color(i2127[15], i2127[16], i2127[17], i2127[18])
  i2126.fogColor = new pc.Color(i2127[19], i2127[20], i2127[21], i2127[22])
  i2126.fogEndDistance = i2127[23]
  i2126.fogStartDistance = i2127[24]
  i2126.fogDensity = i2127[25]
  i2126.fog = !!i2127[26]
  request.r(i2127[27], i2127[28], 0, i2126, 'skybox')
  i2126.fogMode = i2127[29]
  var i2129 = i2127[30]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2129[i + 0]) );
  }
  i2126.lightmaps = i2128
  i2126.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2127[31], i2126.lightProbes)
  i2126.lightmapsMode = i2127[32]
  i2126.mixedBakeMode = i2127[33]
  i2126.environmentLightingMode = i2127[34]
  i2126.ambientProbe = new pc.SphericalHarmonicsL2(i2127[35])
  i2126.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2127[36])
  i2126.useReferenceAmbientProbe = !!i2127[37]
  request.r(i2127[38], i2127[39], 0, i2126, 'customReflection')
  request.r(i2127[40], i2127[41], 0, i2126, 'defaultReflection')
  i2126.defaultReflectionMode = i2127[42]
  i2126.defaultReflectionResolution = i2127[43]
  i2126.sunLightObjectId = i2127[44]
  i2126.pixelLightCount = i2127[45]
  i2126.defaultReflectionHDR = !!i2127[46]
  i2126.hasLightDataAsset = !!i2127[47]
  i2126.hasManualGenerate = !!i2127[48]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'lightmapColor')
  request.r(i2133[2], i2133[3], 0, i2132, 'lightmapDirection')
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2134 = root || new UnityEngine.LightProbes()
  var i2135 = data
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2143 = data
  var i2145 = i2143[0]
  var i2144 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2145[i + 0]));
  }
  i2142.ShaderCompilationErrors = i2144
  i2142.name = i2143[1]
  i2142.guid = i2143[2]
  var i2147 = i2143[3]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( i2147[i + 0] );
  }
  i2142.shaderDefinedKeywords = i2146
  var i2149 = i2143[4]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2149[i + 0]) );
  }
  i2142.passes = i2148
  var i2151 = i2143[5]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2151[i + 0]) );
  }
  i2142.usePasses = i2150
  var i2153 = i2143[6]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2153[i + 0]) );
  }
  i2142.defaultParameterValues = i2152
  request.r(i2143[7], i2143[8], 0, i2142, 'unityFallbackShader')
  i2142.readDepth = !!i2143[9]
  i2142.isCreatedByShaderGraph = !!i2143[10]
  i2142.compiled = !!i2143[11]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2157 = data
  i2156.shaderName = i2157[0]
  i2156.errorMessage = i2157[1]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2162 = root || new pc.UnityShaderPass()
  var i2163 = data
  i2162.id = i2163[0]
  i2162.subShaderIndex = i2163[1]
  i2162.name = i2163[2]
  i2162.passType = i2163[3]
  i2162.grabPassTextureName = i2163[4]
  i2162.usePass = !!i2163[5]
  i2162.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2163[6], i2162.zTest)
  i2162.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2163[7], i2162.zWrite)
  i2162.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2163[8], i2162.culling)
  i2162.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2163[9], i2162.blending)
  i2162.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2163[10], i2162.alphaBlending)
  i2162.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2163[11], i2162.colorWriteMask)
  i2162.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2163[12], i2162.offsetUnits)
  i2162.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2163[13], i2162.offsetFactor)
  i2162.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2163[14], i2162.stencilRef)
  i2162.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2163[15], i2162.stencilReadMask)
  i2162.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2163[16], i2162.stencilWriteMask)
  i2162.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2163[17], i2162.stencilOp)
  i2162.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2163[18], i2162.stencilOpFront)
  i2162.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2163[19], i2162.stencilOpBack)
  var i2165 = i2163[20]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2165[i + 0]) );
  }
  i2162.tags = i2164
  var i2167 = i2163[21]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( i2167[i + 0] );
  }
  i2162.passDefinedKeywords = i2166
  var i2169 = i2163[22]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2169[i + 0]) );
  }
  i2162.passDefinedKeywordGroups = i2168
  var i2171 = i2163[23]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2171[i + 0]) );
  }
  i2162.variants = i2170
  var i2173 = i2163[24]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2173[i + 0]) );
  }
  i2162.excludedVariants = i2172
  i2162.hasDepthReader = !!i2163[25]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2175 = data
  i2174.val = i2175[0]
  i2174.name = i2175[1]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2177 = data
  i2176.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2177[0], i2176.src)
  i2176.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2177[1], i2176.dst)
  i2176.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2177[2], i2176.op)
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2179 = data
  i2178.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2179[0], i2178.pass)
  i2178.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2179[1], i2178.fail)
  i2178.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2179[2], i2178.zFail)
  i2178.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2179[3], i2178.comp)
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2183 = data
  i2182.name = i2183[0]
  i2182.value = i2183[1]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2187 = data
  var i2189 = i2187[0]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( i2189[i + 0] );
  }
  i2186.keywords = i2188
  i2186.hasDiscard = !!i2187[1]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2193 = data
  i2192.passId = i2193[0]
  i2192.subShaderIndex = i2193[1]
  var i2195 = i2193[2]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.push( i2195[i + 0] );
  }
  i2192.keywords = i2194
  i2192.vertexProgram = i2193[3]
  i2192.fragmentProgram = i2193[4]
  i2192.exportedForWebGl2 = !!i2193[5]
  i2192.readDepth = !!i2193[6]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'shader')
  i2198.pass = i2199[2]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2203 = data
  i2202.name = i2203[0]
  i2202.type = i2203[1]
  i2202.value = new pc.Vec4( i2203[2], i2203[3], i2203[4], i2203[5] )
  i2202.textureValue = i2203[6]
  i2202.shaderPropertyFlag = i2203[7]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2205 = data
  i2204.name = i2205[0]
  request.r(i2205[1], i2205[2], 0, i2204, 'texture')
  i2204.aabb = i2205[3]
  i2204.vertices = i2205[4]
  i2204.triangles = i2205[5]
  i2204.textureRect = UnityEngine.Rect.MinMaxRect(i2205[6], i2205[7], i2205[8], i2205[9])
  i2204.packedRect = UnityEngine.Rect.MinMaxRect(i2205[10], i2205[11], i2205[12], i2205[13])
  i2204.border = new pc.Vec4( i2205[14], i2205[15], i2205[16], i2205[17] )
  i2204.transparency = i2205[18]
  i2204.bounds = i2205[19]
  i2204.pixelsPerUnit = i2205[20]
  i2204.textureWidth = i2205[21]
  i2204.textureHeight = i2205[22]
  i2204.nativeSize = new pc.Vec2( i2205[23], i2205[24] )
  i2204.pivot = new pc.Vec2( i2205[25], i2205[26] )
  i2204.textureRectOffset = new pc.Vec2( i2205[27], i2205[28] )
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2207 = data
  i2206.name = i2207[0]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2209 = data
  i2208.name = i2209[0]
  i2208.wrapMode = i2209[1]
  i2208.isLooping = !!i2209[2]
  i2208.length = i2209[3]
  var i2211 = i2209[4]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2211[i + 0]) );
  }
  i2208.curves = i2210
  var i2213 = i2209[5]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2213[i + 0]) );
  }
  i2208.events = i2212
  i2208.halfPrecision = !!i2209[6]
  i2208._frameRate = i2209[7]
  i2208.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2209[8], i2208.localBounds)
  i2208.hasMuscleCurves = !!i2209[9]
  var i2215 = i2209[10]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( i2215[i + 0] );
  }
  i2208.clipMuscleConstant = i2214
  i2208.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2209[11], i2208.clipBindingConstant)
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2219 = data
  i2218.path = i2219[0]
  i2218.hash = i2219[1]
  i2218.componentType = i2219[2]
  i2218.property = i2219[3]
  i2218.keys = i2219[4]
  var i2221 = i2219[5]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2221[i + 0]) );
  }
  i2218.objectReferenceKeys = i2220
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2225 = data
  i2224.time = i2225[0]
  request.r(i2225[1], i2225[2], 0, i2224, 'value')
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2229 = data
  i2228.functionName = i2229[0]
  i2228.floatParameter = i2229[1]
  i2228.intParameter = i2229[2]
  i2228.stringParameter = i2229[3]
  request.r(i2229[4], i2229[5], 0, i2228, 'objectReferenceParameter')
  i2228.time = i2229[6]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2231 = data
  i2230.center = new pc.Vec3( i2231[0], i2231[1], i2231[2] )
  i2230.extends = new pc.Vec3( i2231[3], i2231[4], i2231[5] )
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2235 = data
  var i2237 = i2235[0]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( i2237[i + 0] );
  }
  i2234.genericBindings = i2236
  var i2239 = i2235[1]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( i2239[i + 0] );
  }
  i2234.pptrCurveMapping = i2238
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2241 = data
  i2240.name = i2241[0]
  i2240.ascent = i2241[1]
  i2240.originalLineHeight = i2241[2]
  i2240.fontSize = i2241[3]
  var i2243 = i2241[4]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2243[i + 0]) );
  }
  i2240.characterInfo = i2242
  request.r(i2241[5], i2241[6], 0, i2240, 'texture')
  i2240.originalFontSize = i2241[7]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2247 = data
  i2246.index = i2247[0]
  i2246.advance = i2247[1]
  i2246.bearing = i2247[2]
  i2246.glyphWidth = i2247[3]
  i2246.glyphHeight = i2247[4]
  i2246.minX = i2247[5]
  i2246.maxX = i2247[6]
  i2246.minY = i2247[7]
  i2246.maxY = i2247[8]
  i2246.uvBottomLeftX = i2247[9]
  i2246.uvBottomLeftY = i2247[10]
  i2246.uvBottomRightX = i2247[11]
  i2246.uvBottomRightY = i2247[12]
  i2246.uvTopLeftX = i2247[13]
  i2246.uvTopLeftY = i2247[14]
  i2246.uvTopRightX = i2247[15]
  i2246.uvTopRightY = i2247[16]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2249 = data
  i2248.name = i2249[0]
  var i2251 = i2249[1]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2251[i + 0]) );
  }
  i2248.layers = i2250
  var i2253 = i2249[2]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2253[i + 0]) );
  }
  i2248.parameters = i2252
  i2248.animationClips = i2249[3]
  i2248.avatarUnsupported = i2249[4]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2257 = data
  i2256.name = i2257[0]
  i2256.defaultWeight = i2257[1]
  i2256.blendingMode = i2257[2]
  i2256.avatarMask = i2257[3]
  i2256.syncedLayerIndex = i2257[4]
  i2256.syncedLayerAffectsTiming = !!i2257[5]
  i2256.syncedLayers = i2257[6]
  i2256.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2257[7], i2256.stateMachine)
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2259 = data
  i2258.id = i2259[0]
  i2258.name = i2259[1]
  i2258.path = i2259[2]
  var i2261 = i2259[3]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2261[i + 0]) );
  }
  i2258.states = i2260
  var i2263 = i2259[4]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2263[i + 0]) );
  }
  i2258.machines = i2262
  var i2265 = i2259[5]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2265[i + 0]) );
  }
  i2258.entryStateTransitions = i2264
  var i2267 = i2259[6]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2267[i + 0]) );
  }
  i2258.exitStateTransitions = i2266
  var i2269 = i2259[7]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2269[i + 0]) );
  }
  i2258.anyStateTransitions = i2268
  i2258.defaultStateId = i2259[8]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2273 = data
  i2272.id = i2273[0]
  i2272.name = i2273[1]
  i2272.cycleOffset = i2273[2]
  i2272.cycleOffsetParameter = i2273[3]
  i2272.cycleOffsetParameterActive = !!i2273[4]
  i2272.mirror = !!i2273[5]
  i2272.mirrorParameter = i2273[6]
  i2272.mirrorParameterActive = !!i2273[7]
  i2272.motionId = i2273[8]
  i2272.nameHash = i2273[9]
  i2272.fullPathHash = i2273[10]
  i2272.speed = i2273[11]
  i2272.speedParameter = i2273[12]
  i2272.speedParameterActive = !!i2273[13]
  i2272.tag = i2273[14]
  i2272.tagHash = i2273[15]
  i2272.writeDefaultValues = !!i2273[16]
  var i2275 = i2273[17]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 2) {
  request.r(i2275[i + 0], i2275[i + 1], 2, i2274, '')
  }
  i2272.behaviours = i2274
  var i2277 = i2273[18]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2277[i + 0]) );
  }
  i2272.transitions = i2276
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2283 = data
  i2282.fullPath = i2283[0]
  i2282.canTransitionToSelf = !!i2283[1]
  i2282.duration = i2283[2]
  i2282.exitTime = i2283[3]
  i2282.hasExitTime = !!i2283[4]
  i2282.hasFixedDuration = !!i2283[5]
  i2282.interruptionSource = i2283[6]
  i2282.offset = i2283[7]
  i2282.orderedInterruption = !!i2283[8]
  i2282.destinationStateId = i2283[9]
  i2282.isExit = !!i2283[10]
  i2282.mute = !!i2283[11]
  i2282.solo = !!i2283[12]
  var i2285 = i2283[13]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2285[i + 0]) );
  }
  i2282.conditions = i2284
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2291 = data
  i2290.destinationStateId = i2291[0]
  i2290.isExit = !!i2291[1]
  i2290.mute = !!i2291[2]
  i2290.solo = !!i2291[3]
  var i2293 = i2291[4]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2293[i + 0]) );
  }
  i2290.conditions = i2292
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2297 = data
  i2296.defaultBool = !!i2297[0]
  i2296.defaultFloat = i2297[1]
  i2296.defaultInt = i2297[2]
  i2296.name = i2297[3]
  i2296.nameHash = i2297[4]
  i2296.type = i2297[5]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2301 = data
  i2300.mode = i2301[0]
  i2300.parameter = i2301[1]
  i2300.threshold = i2301[2]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2303 = data
  i2302.name = i2303[0]
  i2302.bytes64 = i2303[1]
  i2302.data = i2303[2]
  return i2302
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2304 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2305 = data
  i2304.hashCode = i2305[0]
  request.r(i2305[1], i2305[2], 0, i2304, 'material')
  i2304.materialHashCode = i2305[3]
  request.r(i2305[4], i2305[5], 0, i2304, 'atlas')
  i2304.normalStyle = i2305[6]
  i2304.normalSpacingOffset = i2305[7]
  i2304.boldStyle = i2305[8]
  i2304.boldSpacing = i2305[9]
  i2304.italicStyle = i2305[10]
  i2304.tabSize = i2305[11]
  i2304.m_Version = i2305[12]
  i2304.m_SourceFontFileGUID = i2305[13]
  request.r(i2305[14], i2305[15], 0, i2304, 'm_SourceFontFile_EditorRef')
  request.r(i2305[16], i2305[17], 0, i2304, 'm_SourceFontFile')
  i2304.m_AtlasPopulationMode = i2305[18]
  i2304.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2305[19], i2304.m_FaceInfo)
  var i2307 = i2305[20]
  var i2306 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.add(request.d('UnityEngine.TextCore.Glyph', i2307[i + 0]));
  }
  i2304.m_GlyphTable = i2306
  var i2309 = i2305[21]
  var i2308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.add(request.d('TMPro.TMP_Character', i2309[i + 0]));
  }
  i2304.m_CharacterTable = i2308
  var i2311 = i2305[22]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 2) {
  request.r(i2311[i + 0], i2311[i + 1], 2, i2310, '')
  }
  i2304.m_AtlasTextures = i2310
  i2304.m_AtlasTextureIndex = i2305[23]
  i2304.m_IsMultiAtlasTexturesEnabled = !!i2305[24]
  i2304.m_ClearDynamicDataOnBuild = !!i2305[25]
  var i2313 = i2305[26]
  var i2312 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.add(request.d('UnityEngine.TextCore.GlyphRect', i2313[i + 0]));
  }
  i2304.m_UsedGlyphRects = i2312
  var i2315 = i2305[27]
  var i2314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.add(request.d('UnityEngine.TextCore.GlyphRect', i2315[i + 0]));
  }
  i2304.m_FreeGlyphRects = i2314
  i2304.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2305[28], i2304.m_fontInfo)
  i2304.m_AtlasWidth = i2305[29]
  i2304.m_AtlasHeight = i2305[30]
  i2304.m_AtlasPadding = i2305[31]
  i2304.m_AtlasRenderMode = i2305[32]
  var i2317 = i2305[33]
  var i2316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.add(request.d('TMPro.TMP_Glyph', i2317[i + 0]));
  }
  i2304.m_glyphInfoList = i2316
  i2304.m_KerningTable = request.d('TMPro.KerningTable', i2305[34], i2304.m_KerningTable)
  i2304.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2305[35], i2304.m_FontFeatureTable)
  var i2319 = i2305[36]
  var i2318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2319.length; i += 2) {
  request.r(i2319[i + 0], i2319[i + 1], 1, i2318, '')
  }
  i2304.fallbackFontAssets = i2318
  var i2321 = i2305[37]
  var i2320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2321.length; i += 2) {
  request.r(i2321[i + 0], i2321[i + 1], 1, i2320, '')
  }
  i2304.m_FallbackFontAssetTable = i2320
  i2304.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2305[38], i2304.m_CreationSettings)
  var i2323 = i2305[39]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('TMPro.TMP_FontWeightPair', i2323[i + 0]) );
  }
  i2304.m_FontWeightTable = i2322
  var i2325 = i2305[40]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( request.d('TMPro.TMP_FontWeightPair', i2325[i + 0]) );
  }
  i2304.fontWeights = i2324
  return i2304
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2327 = data
  i2326.m_FaceIndex = i2327[0]
  i2326.m_FamilyName = i2327[1]
  i2326.m_StyleName = i2327[2]
  i2326.m_PointSize = i2327[3]
  i2326.m_Scale = i2327[4]
  i2326.m_UnitsPerEM = i2327[5]
  i2326.m_LineHeight = i2327[6]
  i2326.m_AscentLine = i2327[7]
  i2326.m_CapLine = i2327[8]
  i2326.m_MeanLine = i2327[9]
  i2326.m_Baseline = i2327[10]
  i2326.m_DescentLine = i2327[11]
  i2326.m_SuperscriptOffset = i2327[12]
  i2326.m_SuperscriptSize = i2327[13]
  i2326.m_SubscriptOffset = i2327[14]
  i2326.m_SubscriptSize = i2327[15]
  i2326.m_UnderlineOffset = i2327[16]
  i2326.m_UnderlineThickness = i2327[17]
  i2326.m_StrikethroughOffset = i2327[18]
  i2326.m_StrikethroughThickness = i2327[19]
  i2326.m_TabWidth = i2327[20]
  return i2326
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2331 = data
  i2330.m_Index = i2331[0]
  i2330.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2331[1], i2330.m_Metrics)
  i2330.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2331[2], i2330.m_GlyphRect)
  i2330.m_Scale = i2331[3]
  i2330.m_AtlasIndex = i2331[4]
  i2330.m_ClassDefinitionType = i2331[5]
  return i2330
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2333 = data
  i2332.m_Width = i2333[0]
  i2332.m_Height = i2333[1]
  i2332.m_HorizontalBearingX = i2333[2]
  i2332.m_HorizontalBearingY = i2333[3]
  i2332.m_HorizontalAdvance = i2333[4]
  return i2332
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2335 = data
  i2334.m_X = i2335[0]
  i2334.m_Y = i2335[1]
  i2334.m_Width = i2335[2]
  i2334.m_Height = i2335[3]
  return i2334
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2338 = root || request.c( 'TMPro.TMP_Character' )
  var i2339 = data
  i2338.m_ElementType = i2339[0]
  i2338.m_Unicode = i2339[1]
  i2338.m_GlyphIndex = i2339[2]
  i2338.m_Scale = i2339[3]
  return i2338
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2344 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2345 = data
  i2344.Name = i2345[0]
  i2344.PointSize = i2345[1]
  i2344.Scale = i2345[2]
  i2344.CharacterCount = i2345[3]
  i2344.LineHeight = i2345[4]
  i2344.Baseline = i2345[5]
  i2344.Ascender = i2345[6]
  i2344.CapHeight = i2345[7]
  i2344.Descender = i2345[8]
  i2344.CenterLine = i2345[9]
  i2344.SuperscriptOffset = i2345[10]
  i2344.SubscriptOffset = i2345[11]
  i2344.SubSize = i2345[12]
  i2344.Underline = i2345[13]
  i2344.UnderlineThickness = i2345[14]
  i2344.strikethrough = i2345[15]
  i2344.strikethroughThickness = i2345[16]
  i2344.TabWidth = i2345[17]
  i2344.Padding = i2345[18]
  i2344.AtlasWidth = i2345[19]
  i2344.AtlasHeight = i2345[20]
  return i2344
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2348 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2349 = data
  i2348.id = i2349[0]
  i2348.x = i2349[1]
  i2348.y = i2349[2]
  i2348.width = i2349[3]
  i2348.height = i2349[4]
  i2348.xOffset = i2349[5]
  i2348.yOffset = i2349[6]
  i2348.xAdvance = i2349[7]
  i2348.scale = i2349[8]
  return i2348
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2350 = root || request.c( 'TMPro.KerningTable' )
  var i2351 = data
  var i2353 = i2351[0]
  var i2352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.add(request.d('TMPro.KerningPair', i2353[i + 0]));
  }
  i2350.kerningPairs = i2352
  return i2350
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2356 = root || request.c( 'TMPro.KerningPair' )
  var i2357 = data
  i2356.xOffset = i2357[0]
  i2356.m_FirstGlyph = i2357[1]
  i2356.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2357[2], i2356.m_FirstGlyphAdjustments)
  i2356.m_SecondGlyph = i2357[3]
  i2356.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2357[4], i2356.m_SecondGlyphAdjustments)
  i2356.m_IgnoreSpacingAdjustments = !!i2357[5]
  return i2356
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2358 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2359 = data
  var i2361 = i2359[0]
  var i2360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2361[i + 0]));
  }
  i2358.m_GlyphPairAdjustmentRecords = i2360
  return i2358
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2364 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2365 = data
  i2364.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2365[0], i2364.m_FirstAdjustmentRecord)
  i2364.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2365[1], i2364.m_SecondAdjustmentRecord)
  i2364.m_FeatureLookupFlags = i2365[2]
  return i2364
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2368 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2369 = data
  i2368.sourceFontFileName = i2369[0]
  i2368.sourceFontFileGUID = i2369[1]
  i2368.pointSizeSamplingMode = i2369[2]
  i2368.pointSize = i2369[3]
  i2368.padding = i2369[4]
  i2368.packingMode = i2369[5]
  i2368.atlasWidth = i2369[6]
  i2368.atlasHeight = i2369[7]
  i2368.characterSetSelectionMode = i2369[8]
  i2368.characterSequence = i2369[9]
  i2368.referencedFontAssetGUID = i2369[10]
  i2368.referencedTextAssetGUID = i2369[11]
  i2368.fontStyle = i2369[12]
  i2368.fontStyleModifier = i2369[13]
  i2368.renderMode = i2369[14]
  i2368.includeFontFeatures = !!i2369[15]
  return i2368
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2372 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2373 = data
  request.r(i2373[0], i2373[1], 0, i2372, 'regularTypeface')
  request.r(i2373[2], i2373[3], 0, i2372, 'italicTypeface')
  return i2372
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2374 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2375 = data
  i2374.useSafeMode = !!i2375[0]
  i2374.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2375[1], i2374.safeModeOptions)
  i2374.timeScale = i2375[2]
  i2374.unscaledTimeScale = i2375[3]
  i2374.useSmoothDeltaTime = !!i2375[4]
  i2374.maxSmoothUnscaledTime = i2375[5]
  i2374.rewindCallbackMode = i2375[6]
  i2374.showUnityEditorReport = !!i2375[7]
  i2374.logBehaviour = i2375[8]
  i2374.drawGizmos = !!i2375[9]
  i2374.defaultRecyclable = !!i2375[10]
  i2374.defaultAutoPlay = i2375[11]
  i2374.defaultUpdateType = i2375[12]
  i2374.defaultTimeScaleIndependent = !!i2375[13]
  i2374.defaultEaseType = i2375[14]
  i2374.defaultEaseOvershootOrAmplitude = i2375[15]
  i2374.defaultEasePeriod = i2375[16]
  i2374.defaultAutoKill = !!i2375[17]
  i2374.defaultLoopType = i2375[18]
  i2374.debugMode = !!i2375[19]
  i2374.debugStoreTargetId = !!i2375[20]
  i2374.showPreviewPanel = !!i2375[21]
  i2374.storeSettingsLocation = i2375[22]
  i2374.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2375[23], i2374.modules)
  i2374.createASMDEF = !!i2375[24]
  i2374.showPlayingTweens = !!i2375[25]
  i2374.showPausedTweens = !!i2375[26]
  return i2374
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2376 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2377 = data
  i2376.logBehaviour = i2377[0]
  i2376.nestedTweenFailureBehaviour = i2377[1]
  return i2376
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2378 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2379 = data
  i2378.showPanel = !!i2379[0]
  i2378.audioEnabled = !!i2379[1]
  i2378.physicsEnabled = !!i2379[2]
  i2378.physics2DEnabled = !!i2379[3]
  i2378.spriteEnabled = !!i2379[4]
  i2378.uiEnabled = !!i2379[5]
  i2378.textMeshProEnabled = !!i2379[6]
  i2378.tk2DEnabled = !!i2379[7]
  i2378.deAudioEnabled = !!i2379[8]
  i2378.deUnityExtendedEnabled = !!i2379[9]
  i2378.epoOutlineEnabled = !!i2379[10]
  return i2378
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2380 = root || request.c( 'TMPro.TMP_Settings' )
  var i2381 = data
  i2380.m_enableWordWrapping = !!i2381[0]
  i2380.m_enableKerning = !!i2381[1]
  i2380.m_enableExtraPadding = !!i2381[2]
  i2380.m_enableTintAllSprites = !!i2381[3]
  i2380.m_enableParseEscapeCharacters = !!i2381[4]
  i2380.m_EnableRaycastTarget = !!i2381[5]
  i2380.m_GetFontFeaturesAtRuntime = !!i2381[6]
  i2380.m_missingGlyphCharacter = i2381[7]
  i2380.m_warningsDisabled = !!i2381[8]
  request.r(i2381[9], i2381[10], 0, i2380, 'm_defaultFontAsset')
  i2380.m_defaultFontAssetPath = i2381[11]
  i2380.m_defaultFontSize = i2381[12]
  i2380.m_defaultAutoSizeMinRatio = i2381[13]
  i2380.m_defaultAutoSizeMaxRatio = i2381[14]
  i2380.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2381[15], i2381[16] )
  i2380.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2381[17], i2381[18] )
  i2380.m_autoSizeTextContainer = !!i2381[19]
  i2380.m_IsTextObjectScaleStatic = !!i2381[20]
  var i2383 = i2381[21]
  var i2382 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2383.length; i += 2) {
  request.r(i2383[i + 0], i2383[i + 1], 1, i2382, '')
  }
  i2380.m_fallbackFontAssets = i2382
  i2380.m_matchMaterialPreset = !!i2381[22]
  request.r(i2381[23], i2381[24], 0, i2380, 'm_defaultSpriteAsset')
  i2380.m_defaultSpriteAssetPath = i2381[25]
  i2380.m_enableEmojiSupport = !!i2381[26]
  i2380.m_MissingCharacterSpriteUnicode = i2381[27]
  i2380.m_defaultColorGradientPresetsPath = i2381[28]
  request.r(i2381[29], i2381[30], 0, i2380, 'm_defaultStyleSheet')
  i2380.m_StyleSheetsResourcePath = i2381[31]
  request.r(i2381[32], i2381[33], 0, i2380, 'm_leadingCharacters')
  request.r(i2381[34], i2381[35], 0, i2380, 'm_followingCharacters')
  i2380.m_UseModernHangulLineBreakingRules = !!i2381[36]
  return i2380
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2384 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2385 = data
  i2384.hashCode = i2385[0]
  request.r(i2385[1], i2385[2], 0, i2384, 'material')
  i2384.materialHashCode = i2385[3]
  request.r(i2385[4], i2385[5], 0, i2384, 'spriteSheet')
  var i2387 = i2385[6]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.add(request.d('TMPro.TMP_Sprite', i2387[i + 0]));
  }
  i2384.spriteInfoList = i2386
  var i2389 = i2385[7]
  var i2388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2389.length; i += 2) {
  request.r(i2389[i + 0], i2389[i + 1], 1, i2388, '')
  }
  i2384.fallbackSpriteAssets = i2388
  i2384.m_Version = i2385[8]
  i2384.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2385[9], i2384.m_FaceInfo)
  var i2391 = i2385[10]
  var i2390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.add(request.d('TMPro.TMP_SpriteCharacter', i2391[i + 0]));
  }
  i2384.m_SpriteCharacterTable = i2390
  var i2393 = i2385[11]
  var i2392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.add(request.d('TMPro.TMP_SpriteGlyph', i2393[i + 0]));
  }
  i2384.m_SpriteGlyphTable = i2392
  return i2384
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2396 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2397 = data
  i2396.name = i2397[0]
  i2396.hashCode = i2397[1]
  i2396.unicode = i2397[2]
  i2396.pivot = new pc.Vec2( i2397[3], i2397[4] )
  request.r(i2397[5], i2397[6], 0, i2396, 'sprite')
  i2396.id = i2397[7]
  i2396.x = i2397[8]
  i2396.y = i2397[9]
  i2396.width = i2397[10]
  i2396.height = i2397[11]
  i2396.xOffset = i2397[12]
  i2396.yOffset = i2397[13]
  i2396.xAdvance = i2397[14]
  i2396.scale = i2397[15]
  return i2396
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2402 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2403 = data
  i2402.m_Name = i2403[0]
  i2402.m_HashCode = i2403[1]
  i2402.m_ElementType = i2403[2]
  i2402.m_Unicode = i2403[3]
  i2402.m_GlyphIndex = i2403[4]
  i2402.m_Scale = i2403[5]
  return i2402
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2406 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'sprite')
  i2406.m_Index = i2407[2]
  i2406.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2407[3], i2406.m_Metrics)
  i2406.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2407[4], i2406.m_GlyphRect)
  i2406.m_Scale = i2407[5]
  i2406.m_AtlasIndex = i2407[6]
  i2406.m_ClassDefinitionType = i2407[7]
  return i2406
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2408 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2409 = data
  var i2411 = i2409[0]
  var i2410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.add(request.d('TMPro.TMP_Style', i2411[i + 0]));
  }
  i2408.m_StyleList = i2410
  return i2408
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2414 = root || request.c( 'TMPro.TMP_Style' )
  var i2415 = data
  i2414.m_Name = i2415[0]
  i2414.m_HashCode = i2415[1]
  i2414.m_OpeningDefinition = i2415[2]
  i2414.m_ClosingDefinition = i2415[3]
  i2414.m_OpeningTagArray = i2415[4]
  i2414.m_ClosingTagArray = i2415[5]
  i2414.m_OpeningTagUnicodeArray = i2415[6]
  i2414.m_ClosingTagUnicodeArray = i2415[7]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2417 = data
  var i2419 = i2417[0]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2419[i + 0]) );
  }
  i2416.files = i2418
  i2416.componentToPrefabIds = i2417[1]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2423 = data
  i2422.path = i2423[0]
  request.r(i2423[1], i2423[2], 0, i2422, 'unityObject')
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2425 = data
  var i2427 = i2425[0]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2427[i + 0]) );
  }
  i2424.scriptsExecutionOrder = i2426
  var i2429 = i2425[1]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2429[i + 0]) );
  }
  i2424.sortingLayers = i2428
  var i2431 = i2425[2]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2431[i + 0]) );
  }
  i2424.cullingLayers = i2430
  i2424.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2425[3], i2424.timeSettings)
  i2424.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2425[4], i2424.physicsSettings)
  i2424.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2425[5], i2424.physics2DSettings)
  i2424.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2425[6], i2424.qualitySettings)
  i2424.enableRealtimeShadows = !!i2425[7]
  i2424.enableAutoInstancing = !!i2425[8]
  i2424.enableDynamicBatching = !!i2425[9]
  i2424.lightmapEncodingQuality = i2425[10]
  i2424.desiredColorSpace = i2425[11]
  var i2433 = i2425[12]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( i2433[i + 0] );
  }
  i2424.allTags = i2432
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2437 = data
  i2436.name = i2437[0]
  i2436.value = i2437[1]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2441 = data
  i2440.id = i2441[0]
  i2440.name = i2441[1]
  i2440.value = i2441[2]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2445 = data
  i2444.id = i2445[0]
  i2444.name = i2445[1]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2447 = data
  i2446.fixedDeltaTime = i2447[0]
  i2446.maximumDeltaTime = i2447[1]
  i2446.timeScale = i2447[2]
  i2446.maximumParticleTimestep = i2447[3]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2449 = data
  i2448.gravity = new pc.Vec3( i2449[0], i2449[1], i2449[2] )
  i2448.defaultSolverIterations = i2449[3]
  i2448.bounceThreshold = i2449[4]
  i2448.autoSyncTransforms = !!i2449[5]
  i2448.autoSimulation = !!i2449[6]
  var i2451 = i2449[7]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2451[i + 0]) );
  }
  i2448.collisionMatrix = i2450
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2455 = data
  i2454.enabled = !!i2455[0]
  i2454.layerId = i2455[1]
  i2454.otherLayerId = i2455[2]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'material')
  i2456.gravity = new pc.Vec2( i2457[2], i2457[3] )
  i2456.positionIterations = i2457[4]
  i2456.velocityIterations = i2457[5]
  i2456.velocityThreshold = i2457[6]
  i2456.maxLinearCorrection = i2457[7]
  i2456.maxAngularCorrection = i2457[8]
  i2456.maxTranslationSpeed = i2457[9]
  i2456.maxRotationSpeed = i2457[10]
  i2456.baumgarteScale = i2457[11]
  i2456.baumgarteTOIScale = i2457[12]
  i2456.timeToSleep = i2457[13]
  i2456.linearSleepTolerance = i2457[14]
  i2456.angularSleepTolerance = i2457[15]
  i2456.defaultContactOffset = i2457[16]
  i2456.autoSimulation = !!i2457[17]
  i2456.queriesHitTriggers = !!i2457[18]
  i2456.queriesStartInColliders = !!i2457[19]
  i2456.callbacksOnDisable = !!i2457[20]
  i2456.reuseCollisionCallbacks = !!i2457[21]
  i2456.autoSyncTransforms = !!i2457[22]
  var i2459 = i2457[23]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2459[i + 0]) );
  }
  i2456.collisionMatrix = i2458
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2463 = data
  i2462.enabled = !!i2463[0]
  i2462.layerId = i2463[1]
  i2462.otherLayerId = i2463[2]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2465 = data
  var i2467 = i2465[0]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2467[i + 0]) );
  }
  i2464.qualityLevels = i2466
  var i2469 = i2465[1]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( i2469[i + 0] );
  }
  i2464.names = i2468
  i2464.shadows = i2465[2]
  i2464.anisotropicFiltering = i2465[3]
  i2464.antiAliasing = i2465[4]
  i2464.lodBias = i2465[5]
  i2464.shadowCascades = i2465[6]
  i2464.shadowDistance = i2465[7]
  i2464.shadowmaskMode = i2465[8]
  i2464.shadowProjection = i2465[9]
  i2464.shadowResolution = i2465[10]
  i2464.softParticles = !!i2465[11]
  i2464.softVegetation = !!i2465[12]
  i2464.activeColorSpace = i2465[13]
  i2464.desiredColorSpace = i2465[14]
  i2464.masterTextureLimit = i2465[15]
  i2464.maxQueuedFrames = i2465[16]
  i2464.particleRaycastBudget = i2465[17]
  i2464.pixelLightCount = i2465[18]
  i2464.realtimeReflectionProbes = !!i2465[19]
  i2464.shadowCascade2Split = i2465[20]
  i2464.shadowCascade4Split = new pc.Vec3( i2465[21], i2465[22], i2465[23] )
  i2464.streamingMipmapsActive = !!i2465[24]
  i2464.vSyncCount = i2465[25]
  i2464.asyncUploadBufferSize = i2465[26]
  i2464.asyncUploadTimeSlice = i2465[27]
  i2464.billboardsFaceCameraPosition = !!i2465[28]
  i2464.shadowNearPlaneOffset = i2465[29]
  i2464.streamingMipmapsMemoryBudget = i2465[30]
  i2464.maximumLODLevel = i2465[31]
  i2464.streamingMipmapsAddAllCameras = !!i2465[32]
  i2464.streamingMipmapsMaxLevelReduction = i2465[33]
  i2464.streamingMipmapsRenderersPerFrame = i2465[34]
  i2464.resolutionScalingFixedDPIFactor = i2465[35]
  i2464.streamingMipmapsMaxFileIORequests = i2465[36]
  i2464.currentQualityLevel = i2465[37]
  return i2464
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2472 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'm_ObjectArgument')
  i2472.m_ObjectArgumentAssemblyTypeName = i2473[2]
  i2472.m_IntArgument = i2473[3]
  i2472.m_FloatArgument = i2473[4]
  i2472.m_StringArgument = i2473[5]
  i2472.m_BoolArgument = !!i2473[6]
  return i2472
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2474 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2475 = data
  i2474.xPlacement = i2475[0]
  i2474.yPlacement = i2475[1]
  i2474.xAdvance = i2475[2]
  i2474.yAdvance = i2475[3]
  return i2474
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2476 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2477 = data
  i2476.m_GlyphIndex = i2477[0]
  i2476.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2477[1], i2476.m_GlyphValueRecord)
  return i2476
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2478 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2479 = data
  i2478.m_XPlacement = i2479[0]
  i2478.m_YPlacement = i2479[1]
  i2478.m_XAdvance = i2479[2]
  i2478.m_YAdvance = i2479[3]
  return i2478
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

Deserializers.creativeName = "";

Deserializers.lunaAppID = "31033";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1804";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4563";

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

Deserializers.buildID = "e033610c-f417-45f9-bf9c-a93043de58e6";

Deserializers.runtimeInitializeOnLoadInfos = [[["SingularityGroup","HotReload","CodePatcher","WarnOnSceneLoad"],["SingularityGroup","HotReload","PlayerEntrypoint","InitOnAppLoad"],["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["SingularityGroup","HotReload","CodePatcher","InitializeUnityEvents"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

