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
        this.enableTextures(true);

        //------ Material
        //wood 
        this.trunkTexture = new CGFtexture(this, 'images/wood.png');
        //leaves 
        this.treeTopTexture = new CGFtexture(this, 'images/mineLeaves.png');
        //door
        //this.doorTexture = new CFGtexture(this, 'images/door.png');

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.cylinder = new MyCylinder(this, 100, 1);
        this.prism = new MyPrism(this, 5, 1);
        this.house = new MyHouse(this, this.trunkTexture);
        this.terrain =  new MyQuad(this);
        this.tree = new MyTree(this,2,1/2,5,2.5,this.trunkTexture,this.treeTopTexture);
        this.treeGroupPatch = new MyTreeGroupPatch(this); 
        this.treeRowPatch = new MyTreeRowPatch(this);
        this.biiigCube = new MyCubeMap(this);
        this.hill = new MyVoxelHill(this,4);

        //background
        this.cubeMap = new MyCubeMap(this); 
        //Objects connected to MyInterface
    }
    initLights() {
        /*this.setGlobalAmbientLight(0.1, 0.1, 0.1, 1);

        this.lights[0].setPosition(5, 2, 5, 1);
        this.lights[0].setDiffuse(0.8, 0.7, 0.6, 1.0);
        this.lights[0].enable();
        this.lights[0].disable();
        this.lights[0].setVisible(true);
        this.lights[0].update();

        this.lights[1].setPosition(15, 50, 15, 1);
        this.lights[1].setDiffuse(1.0,1.0,1.0,1.0);
        this.lights[1].setSpecular(0.2,0.2,0.2,0.2);
        this.lights[1].enable();
        //this.lights[1].disable();
        this.lights[1].setVisible(true);
        this.lights[1].update();*/

        this.setGlobalAmbientLight(0.3, 0.3, 0.3, 1);

        this.lights[0].setPosition(2.0, 2.0, -1.0, 1.0);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        //this.lights[0].disable();
        this.lights[0].setVisible(true);
        this.lights[0].update();


    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 800, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
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
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        //background 

        // this.cylinder.display();
       // this.cylinder.display();
        //this.prism.display();
       // this.house.display();

        this.pushMatrix();
        this.scale(30,0,30);
        this.rotate(-Math.PI/2, 1,0,0);
        this.terrain.display();
        this.popMatrix();
        
        
        this.pushMatrix();
        this.translate(0,50,0);
        this.scale(500,100,500);
        this.cubeMap.display();
        this.popMatrix();
        console.log(this.lights[0].position);
        //this.tree.display(); 
        //this.treeGroupPatch.display(); 
       // this.treeRowPatch.display();
       this.hill.display();
        

        // ---- END Primitive drawing section
    }
}