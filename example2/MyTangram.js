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


        this.scene.pushMatrix();
        this.scene.multMatrix(mT);
        this.scene.multMatrix(mR);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3,-1,0); 
        this.triangle.display();
        this.scene.popMatrix();   
    
    //TODO
   
        this.parallelogram.display();
    //TODO
   
        this.small_triangle_1.display();
    
  
        this.scene.pushMatrix();
        this.scene.translate(-2,0,0); 
        this.scene.rotate(Math.PI,0,0,1);
        this.big_triangle_1.display();
        this.scene.popMatrix();
    
    //TODO 
    
        this.small_triangle_2.display();


        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2),Math.sqrt(2),0); 
        this.scene.rotate(Math.PI/4,0,0,1);
        this.big_triangle_2.display();
        this.scene.popMatrix();
    
    }
}
