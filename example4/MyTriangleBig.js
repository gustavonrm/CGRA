/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene,id) {
		super(scene);
		switch(id){
			case 0: //for pink
			this.texCoords = [
				1/2, 1/2,
				1, 1,
				1,0,
	
				1/2, 1/2,
				1, 1,
				1,0
			];
			break;
			case 1: //for red 
			this.texCoords = [
				1/2, 1/2,
				1, 0,
				0,0,
	
				1/2, 1/2,
				1, 0,
				0,0
				
			];
			break;
		}
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			2, 0, 0,	//0
			0, 2, 0,	//1
			-2, 0, 0,	//2
			2, 0, 0,	//0
			0, 2, 0,	//1
			-2, 0, 0	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			2,0,1,
			1,0,2
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateTexCoord(coords){
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

