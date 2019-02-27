/**
<<<<<<< HEAD
 * MyTriangleBig
=======
 * MyTriangle
>>>>>>> 43e17b155fba82094b6aab1d0e9604b73fb49a13
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
<<<<<<< HEAD
			-1, 0, 0,	//0
			1, 0, 0,	//1
			0, 1, 0//,	//2
			//1, 0, 0		//3
=======
			1, 0, 0,	//0
			0, 1, 0,	//1
			0, -1, 0	//2
>>>>>>> 43e17b155fba82094b6aab1d0e9604b73fb49a13
		];

		//Counter-clockwise reference of vertices
		this.indices = [
<<<<<<< HEAD
			2, 1, 0//,
			//1, 3, 2
=======
			0,1,2
>>>>>>> 43e17b155fba82094b6aab1d0e9604b73fb49a13
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

