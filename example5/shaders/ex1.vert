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
varying vec4 yellow;
varying vec4 blue;

uniform float timeFactor;

void main() {
	varying mv = aVertexNormal*normScale*0.1*sin(timeFactor);
	vec3 offset=vec3(mv,0.0,0.0);

	vec4 vertex=vec4(aVertexPosition+offset, 1.0);

	gl_Position = uPMatrix * uMVMatrix * vertex;

	normal = vec4(aVertexNormal, 1.0);
	yellow = vec4(1,1,0,1);
	blue = vec4(0,0,1,1);

	coords=gl_Position/10.0;
}
