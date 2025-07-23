Shader "Custom/AxisFill"
{
    Properties
    {
        _Color ("Fill Color", Color) = (1,1,1,1)
        _Axis ("Axis (0=X,1=Y,2=Z)", Float) = 1
        _FillAmount ("Fill Amount", Float) = 0.5
        _InvertFill ("Invert Fill", Float) = 0
    }

    SubShader
    {
        Tags { "Queue"="Transparent" "RenderType"="Transparent" }
        Lighting Off
        ZWrite Off
        Blend SrcAlpha OneMinusSrcAlpha
        Cull Back

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            fixed4 _Color;
            float _Axis;
            float _FillAmount;
            float _InvertFill;

            struct appdata
            {
                float4 vertex : POSITION;
            };

            struct v2f
            {
                float4 pos : SV_POSITION;
                float3 worldPos : TEXCOORD0;
            };

            v2f vert(appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                o.worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                float axisVal = (_Axis < 0.5) ? i.worldPos.x :
                                (_Axis < 1.5) ? i.worldPos.y :
                                                i.worldPos.z;

                float filled = _InvertFill > 0.5 ? step(_FillAmount, axisVal) : step(axisVal, _FillAmount);

                return fixed4(_Color.rgb, filled * _Color.a);
            }
            ENDCG
        }
    }
}
