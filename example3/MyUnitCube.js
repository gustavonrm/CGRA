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
            0, 2, 1,            //why are there clockwise??
            0, 3, 2,            //positive-> front, right, up
            //up                //negative-> back, left, down 
            4,5,6,
            4,6,7,
            //right
            1,2,6,
            1,6,5,
            //left
            0,7,3,
            0,4,7,
            //front
            0,1,5, 
            0,5,4,
            //back
            3,6,2,
            3,7,6
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

