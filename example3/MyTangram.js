/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
       
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene); 
        this.parallelogram = new MyParallelogram(this.scene); 
        this.small_triangle_1 = new MyTriangleSmall(this.scene); 
        this.big_triangle_1 = new MyTriangleBig(this.scene); 
        this.small_triangle_2 = new MyTriangleSmall(this.scene); 
        this.big_triangle_2 = new MyTriangleBig(this.scene); 
        
        this.diamond.initBuffers();
        this.triangle.initBuffers();
        this.parallelogram.initBuffers();
        this.small_triangle_1.initBuffers();
        this.big_triangle_1.initBuffers();
        this.small_triangle_2.initBuffers();
        this.big_triangle_2.initBuffers(); 
    }
    
    initBuffers(){
        this.normals = [];

        //this.normals.push(...diamond.normals);

    }
	display() {
      

		var mT=[
            1,  0,  0,  0,
            0,  1,  0,  0,
            0,  0,  1,  0,
            -1.5* Math.sqrt(2), Math.sqrt(2)*0.5, 0,  1
        ];

        var mR=[
           Math.cos(Math.PI/4),     Math.sin(Math.PI/4),    0,  0,
           -(Math.sin(Math.PI/4)),  Math.cos(Math.PI/4),    0,  0,
           0,                       0,                      1,  0,
           0,                       0,                      0,  1
        ];

        // Square
        this.scene.pushMatrix();
        this.scene.multMatrix(mT);
        this.scene.multMatrix(mR);
        this.diamond.display();
        this.scene.popMatrix();

        // Triangle
        this.scene.pushMatrix();
        this.scene.translate(-3,-1,0); 
        this.triangle.display();
        this.scene.popMatrix();   
    

        // Parallelogram
        this.scene.pushMatrix();
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(Math.PI/4, 0,0,1);
        this.parallelogram.display();
        this.scene.popMatrix();
    
        // Small Triangle 1
        this.scene.pushMatrix();            
        this.scene.rotate(Math.PI/2 + Math.PI/4, 0,0,1);
        this.scene.translate(1,0,0);
        this.small_triangle_1.display();
        this.scene.popMatrix();
    
        
        // Big Triangle 1
        this.scene.pushMatrix();
        this.scene.translate(-2,0,0); 
        this.scene.rotate(Math.PI,0,0,1);
        this.big_triangle_1.display();
        this.scene.popMatrix();
    
        // Small Triangle 2    
        this.scene.pushMatrix();
        this.scene.translate(0,Math.sqrt(2),0);
        this.scene.rotate(-Math.PI/4, 0,0,1);
        this.scene.translate(-1,0,0);
        this.small_triangle_2.display();
        this.scene.popMatrix();

        // Big Triangle 2
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2),Math.sqrt(2),0); 
        this.scene.rotate(Math.PI/4,0,0,1);
        this.big_triangle_2.display();
        this.scene.popMatrix();
    
    }
}
