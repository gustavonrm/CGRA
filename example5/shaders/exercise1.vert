#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float normScale;
varying vec4 coords;
varying vec4 normal;

uniform float timeFactor;


varying vec2 vTextureCoord;
uniform sampler2D uSampler2;



void main() {
	vec3 offset=vec3(1.0,0.0,0.0);
	
	offset=offset*2.0*normScale*0.1*sin(timeFactor); //animation to move on XX

	vTextureCoord = aTextureCoord;

	vec4 vertex=vec4(aVertexPosition+aVertexNormal+offset, 1.0);

	gl_Position = uPMatrix * uMVMatrix * vertex;

	normal = vec4(aVertexNormal, 1.0);

	coords=gl_Position;

}

	