/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
            -1/2, -1/2, 1/2,	    //0               7-------6         
            1/2, -1/2, 1/2,	    //1              /|      /|      
            1/2, -1/2, -1/2,	    //2             / |     / |
            -1/2, -1/2, -1/2,	    //3            4--|----5  |                            
            -1/2, 1/2, 1/2,	    //4            |  3----|--2
            1/2, 1/2, 1/2,	    //5            | /     | /
            1/2, 1/2, -1/2,	    //6            0-------1
            -1/2, 1/2, -1/2,	    //7           
            
            -1/2, -1/2, 1/2,	      //0 --> 8         FRONT
            1/2, -1/2, 1/2,	      //1 --> 9
            -1/2, 1/2, 1/2,	      //4 --> 10
            1/2, 1/2, 1/2,	      //5 --> 11    

            1/2, -1/2, -1/2,	      //2 --> 12           BACK
            -1/2, -1/2, -1/2,	      //3  --> 13                                   
            1/2, 1/2, -1/2,	      //6 --> 14
            -1/2, 1/2, -1/2,	      //7 --> 15        

            -1/2, -1/2, 1/2,	      //0 --> 16              LEFT
            -1/2, 1/2, 1/2,	      //4 --> 17       
            -1/2, 1/2, -1/2,	      //7 --> 18
            -1/2, -1/2, -1/2,	      //3 --> 19

            1/2, -1/2, 1/2,	      //1 --> 20       RIGHT
            1/2, -1/2, -1/2,	      //2 --> 21                                     
            1/2, 1/2, 1/2,	      //5 --> 22      
            1/2, 1/2, -1/2	      //6 --> 23
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            //down             
            0, 2, 1,            
            0, 3, 2,            //positive-> front, right, up
            //up                //negative-> back, left, down 
            4,5,6,
            4,6,7,
            //right
            20,21,23,
            20,23,22,
            //left
            16,18,19,
            16,17,18,
            //front
            8,9,11,
            8,11,10,
            //back
            13,14,12,
            13,15,14
            ];
            
            this.normals = [
            0,-1,0, 
            0,-1,0, 
            0,-1,0, 
            0,-1,0, 
            0,1,0, 
            0,1,0, 
            0,1,0, 
            0,1,0, 

            0,0,1, 
            0,0,1, 
            0,0,1, 
            0,0,1, 
            0,0,-1,
            0,0,-1, 
            0,0,-1, 
            0,0,-1,    

            -1,0,0, 
            -1,0,0, 
            -1,0,0, 
            -1,0,0, 
            1,0,0, 
            1,0,0, 
            1,0,0, 
            1,0,0
      ];
      this.texCoords=[
            
      ];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

