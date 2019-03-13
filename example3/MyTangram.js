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

        //pink component 
		this.pink = new CGFappearance(this.scene);
        this.pink.setAmbient(0.8, 0.41, 0.79, 1.0);
        this.pink.setDiffuse(0, 0, 0, 1.0);
        this.pink.setSpecular(1, 0, 0, 1.0);
        this.pink.setShininess(10.0);
        
        //green component
        this.green = new CGFappearance(this.scene);
        this.green.setAmbient(0, 1, 0, 1.0);
        this.green.setDiffuse(0, 0, 0, 1.0);
        this.green.setSpecular(1, 0, 0, 1.0);
        this.green.setShininess(10.0);
        
        //blue component
        this.blue = new CGFappearance(this.scene);
        this.blue.setAmbient(0, 0, 1, 1.0);
        this.blue.setDiffuse(0, 0, 0, 1.0);
        this.blue.setSpecular(1, 0, 0, 1.0);
        this.blue.setShininess(10.0);
        
        //purple component
        this.purple = new CGFappearance(this.scene);
        this.purple.setAmbient(0.54, 0.41, 0.80, 1.0);
        this.purple.setDiffuse(0, 0, 0, 1.0);
        this.purple.setSpecular(1, 0, 0, 1.0);
        this.purple.setShininess(10.0);
        
        //yellow component 
        this.yellow = new CGFappearance(this.scene);
        this.yellow.setAmbient(0.98, 0.86, 0.05, 1.0);
        this.yellow.setDiffuse(0, 0, 0, 1.0);
        this.yellow.setSpecular(1, 0, 0, 1.0);
        this.yellow.setShininess(10.0);
        
        //red component
        this.red = new CGFappearance(this.scene);
        this.red.setAmbient(1, 0, 0, 1.0);
        this.red.setDiffuse(0, 0, 0, 1.0);
        this.red.setSpecular(1, 0, 0, 1.0);
		this.red.setShininess(10.0);

        //orange component
        this.orange = new CGFappearance(this.scene);
        this.orange.setAmbient(0.93, 0.46, 0, 1.0);
        this.orange.setDiffuse(0, 0, 0, 1.0);
        this.orange.setSpecular(1, 0, 0, 1.0);
		this.orange.setShininess(10.0);
        
        this.diamond.initBuffers();
        this.triangle.initBuffers();
        this.parallelogram.initBuffers();
        this.small_triangle_1.initBuffers();
        this.big_triangle_1.initBuffers();
        this.small_triangle_2.initBuffers();
        this.big_triangle_2.initBuffers();

        this.initBuffers();

    }
    initBuffers(){

        this.vertices = [];
        this.normals = [];
        this.indices = [];
        
        this.vertices.push(this.diamond.vertices);
        this.normals.push(this.diamond.normals);
        this.indices.push(this.diamond.indices);
        

        this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    enableNormalViz(){
        this.diamond.enableNormalViz(); 
        this.triangle.enableNormalViz();
        this.big_triangle_1.enableNormalViz();
        this.big_triangle_2.enableNormalViz();
        this.small_triangle_1.enableNormalViz();
        this.small_triangle_2.enableNormalViz();
        this.parallelogram.enableNormalViz();
    }
    enableDisableViz(){
        this.diamond.enableDisableViz(); 
        this.triangle.enableNormalViz();
        this.big_triangle_1.enableDisableViz();
        this.big_triangle_2.enableDisableViz();
        this.small_triangle_1.enableDisableViz();
        this.small_triangle_2.enableDisableViz();
        this.parallelogram.enableDisableViz();
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
        this.scene.customMaterial.apply(); 
        this.diamond.display();
        this.scene.popMatrix();

        // Triangle
        this.scene.pushMatrix();
        this.scene.translate(-3,-1,0); 
        this.pink.apply();
        this.triangle.display();
        this.scene.popMatrix();   
    

        // Parallelogram
        this.scene.pushMatrix();
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(Math.PI/4, 0,0,1);
        this.yellow.apply();
        this.parallelogram.display();
        this.scene.popMatrix();
    
        // Small Triangle 1
        this.scene.pushMatrix();            
        this.scene.rotate(Math.PI/2 + Math.PI/4, 0,0,1);
        this.scene.translate(1,0,0);
        this.purple.apply();
        this.small_triangle_1.display();
        this.scene.popMatrix();
    
        
        // Big Triangle 1
        this.scene.pushMatrix();
        this.scene.translate(-2,0,0); 
        this.scene.rotate(Math.PI,0,0,1);
        this.blue.apply();
        this.big_triangle_1.display();
        this.scene.popMatrix();
    
        // Small Triangle 2    
        this.scene.pushMatrix();
        this.scene.translate(0,Math.sqrt(2),0);
        this.scene.rotate(-Math.PI/4, 0,0,1);
        this.scene.translate(-1,0,0);
        this.red.apply();
        this.small_triangle_2.display();
        this.scene.popMatrix();

        // Big Triangle 2
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2),Math.sqrt(2),0); 
        this.scene.rotate(Math.PI/4,0,0,1);
        this.orange.apply();
        this.big_triangle_2.display();
        this.scene.popMatrix();
    
    }
}
