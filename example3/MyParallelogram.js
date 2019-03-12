/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			2, 0, 0,	//1
			1, 1, 0,	//2
			3, 1, 0		//3
		];
		
		//Counter-clockwise reference of vertices
		this.indices = [
			0,1,2,
			1,3,2,
			2,1,0,
			2,3,1
		];
<<<<<<< HEAD
=======

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1
		];
		
>>>>>>> 9bb08d830827ff762f0e5b1535a0d9315a0ce320
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

