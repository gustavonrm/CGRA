/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			0, -1, 0,	//1
			0, 1, 0,	//2
			1, 0, 0,		//3

			-1, 0, 0,	//0
			0, -1, 0,	//1
			0, 1, 0,	//2
			1, 0, 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2,
			2,1,0,
			2,3,1
		];

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
		
		this.texCoords = [
			0, 1/2,
			1/4, 3/4,
			1/4,1/4,
			1/2,1/2,

			0, 1/2,
			1/4, 3/4,		
			1/4, 1/4,
			1/2,1/2

			
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateTexCoord(coords){
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

