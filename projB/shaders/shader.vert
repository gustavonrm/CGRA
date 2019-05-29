attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

uniform float normScale;

void main() {
	vec3 offset=vec3(0.0,0.0,0.0);
	//vec3 offset=vec3(1.0,0.0,0.0);

	vTextureCoord = aTextureCoord;

	/*if (texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord).b > 0.5)
		//offset=aVertexNormal*normScale*0.1*sin(timeFactor);
	//offset=offset*2.0*normScale*0.1*sin(timeFactor); //animation to move on XX*/
	float height = (texture2D(uSampler2, vec2(0.0,0.0)+vTextureCoord).r + texture2D(uSampler2, vec2(0.0,0.0)+vTextureCoord).g + texture2D(uSampler2, vec2(0.0,0.0)+vTextureCoord).b);
	height *= 3.0;
	offset=aVertexNormal*normScale + vec3(0,0,height);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}

