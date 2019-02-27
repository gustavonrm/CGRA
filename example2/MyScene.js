/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.diamond = new MyDiamond(this);
        this.triangle = new MyTriangle(this); 
        this.parallelogram = new MyParallelogram(this); 
        this.small_triangle_1 = new MyTriangleSmall(this); 
        this.big_triangle_1 = new MyTriangleBig(this); 
        this.small_triangle_2 = new MyTriangleSmall(this); 
        this.big_triangle_2 = new MyTriangleBig(this); 
        
        //Objects connected to MyInterface
        this.displayAxis = true;
        this.scaleFactor = 1;
        this.displayDiamond =true; 
        this.displayTriangle =true;
        this.displayParallelogram =false;  
        this.displayTriangleSmall1 =false;  
        this.displayTriangleBig1 =true;  
        this.displayTriangleSmall2 =false;  
        this.displayTriangleBig2 =true;  

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.multMatrix(sca);


        // ---- BEGIN Primitive drawing section
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


        if (this.displayDiamond){
            this.pushMatrix();
            this.multMatrix(mT);
            this.multMatrix(mR);
            this.diamond.display();
            this.popMatrix();
        }
         
        if (this.displayTriangle){
            this.pushMatrix();
            this.translate(-3,-1,0); 
            this.triangle.display();
            this.popMatrix();   
        }
        //TODO
        if (this.displayParallelogram)
            this.parallelogram.display();
        //TODO
        if (this.displayTriangleSmall1)
            this.small_triangle_1.display();
        
        if (this.displayTriangleBig1){
            this.pushMatrix();
            this.translate(-2,0,0); 
            this.rotate(Math.PI,0,0,1);
            this.big_triangle_1.display();
             this.popMatrix();
        }
        //TODO 
        if (this.displayTriangleSmall2)
            this.small_triangle_2.display();

        if (this.displayTriangleBig2){
            this.pushMatrix();
            this.translate(Math.sqrt(2),Math.sqrt(2),0); 
            this.rotate(Math.PI/4,0,0,1);
            this.big_triangle_2.display();
            this.popMatrix();
        }

        // ---- END Primitive drawing section
    }
}