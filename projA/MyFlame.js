/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFlame extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			1, 0, 0,	//0
			2, 1, 0,	//1
			1, 2, 0,	//2
			0, 5, 0,	//3
			-1, 2, 0,	//4
			-2, 1, 0,	//5
			-1, 0, 0,	//6

			1, 0, 0,	//0
			2, 1, 0,	//1
			1, 2, 0,	//2
			0, 5, 0,	//3
			-1, 2, 0,	//4
			-2, 1, 0,	//5
			-1, 0, 0	//6
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0,1,2,
			6,0,2,
			6,2,4,
			6,4,5,
			4,2,3,

			2,1,0,
			2,0,6,
			4,2,6,
			5,4,6,
			3,2,4

		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1
		];

		this.texCoords = [
			0, 3/4, //0
			1/5, 1, 
			2/5,3/4,  //2
			1, 1/2,
			2/5,1/4,
			1/5, 1/4,
			0,1/4,
			
			0, 3/4, //0
			1/5, 1, 
			2/5,3/4,  //2
			1, 1/2,
			2/5,1/4,
			1/5, 1/4,
			0,1/4

		];
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateTexCoord(coords){
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

