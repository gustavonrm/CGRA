/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
            -1/2, -1/2, 1/2,	//0               7-------6         
            1/2, -1/2, 1/2,	    //1              /|      /|      
            1/2, -1/2, -1/2,	//2             / |     / |
            -1/2, -1/2, -1/2,	//3            4--|----5  |                            
            -1/2, 1/2, 1/2,	    //4            |  3----|--2
            1/2, 1/2, 1/2,	    //5            | /     | /
            1/2, 1/2, -1/2,	    //6            0-------1
            -1/2, 1/2, -1/2	    //7           
		
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            //down 
            0, 1, 2,
            0, 3, 2,
            //up
            4,5,6,
            4,6,7,
            //right
            1,2,6,
            1,6,5,
            //left
            0,3,7,
            0,7,4,
            //front
            0,1,5, 
            0,5,4,
            //back
            3,2,6,
            3,6,7
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

