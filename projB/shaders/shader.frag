#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;  // altimetry 
uniform sampler2D uSampler2; // heightmap
uniform sampler2D uSampler3; // texz
uniform float timeFactor;

void main() {
	vec4 color = texture2D(uSampler2, vec2(0.0,0.0)+vTextureCoord);	

	float height = color.r + color.g + color.g;

	vec4 altimetryColor = texture2D(uSampler, vec2(1.0 - height*0.33, 0.0));
	vec4 imageColor = texture2D(uSampler3, vec2(0.0,0.0)+vTextureCoord);
	
	vec4 newcolor = altimetryColor + imageColor * 0.5;
	//vec4 newcolor = vec4(altimetryColor.r + imageColor.r * 0.5, altimetryColor.g + imageColor.g * 0.5, altimetryColor.b + imageColor.b * 0.5, 1.0);

	gl_FragColor = newcolor;
}
