#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;
varying vec4 normal;
varying vec4 yellow;
varying vec4 blue;

void main() {
	if (coords.y > 0.5)
		gl_FragColor =  yellow;
	else
	{
		//gl_FragColor.rgb = abs(coords.xyz)/3.0;
        gl_FragColor = blue;
		gl_FragColor.a = 1.0;
	}
}