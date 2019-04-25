
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

uniform float normScale;

uniform float timeFactor;

void main() {
	vec3 offset=vec3(1.0,1.0,1.0);
	
	vTextureCoord = aTextureCoord;
	
	//if (texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord).r > 0.5)
		offset=offset*aVertexNormal*0.1*texture2D(uSampler2, vec2(timeFactor*.01,timeFactor*.01)+vTextureCoord).r; //only one of the componets 
		//*texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord).g
		//*texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord).b;	
	//vec4 offset= texture2D(uSampler2, vec2(0.0,0.1) + vTextureCoord);

	
	//TIMEFACTOR ON VEC2 ON OFFSET DEF WILL TRIGGER THE MOVE, DONT KNOW WHY TIME DOESNT START!!!!!

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}

