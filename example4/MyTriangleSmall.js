/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene,id) {
		super(scene);
		switch(id){
			case 0: //for dark blue
			this.texCoords = [
				1/2, 1/2,
				1/4, 3/4,
				3/4,3/4,
	
				1/2, 1/2,
				1/4, 3/4,
				3/4,3/4
			];
			break;
			case 1: //for dark blue  
			this.texCoords = [
				1/4, 1/4,
				0, 0,
				0,1/2,
	
				1/4, 1/4,
				0, 0,
				0,1/2
				
			];
			break;
		}
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			1, 0, 0,	//0
			0, 1, 0,	//1
			-1, 0, 0,	//2
			1, 0, 0,	//0
			0, 1, 0,	//1
			-1, 0, 0	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0,1,2,
			2,1,0
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

