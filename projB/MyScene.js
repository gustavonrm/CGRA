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
        this.setUpdatePeriod(50);

        // GUI
        this.speedFactor = 1.0;
        this.scaleFactor = 1.0;
        

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.cubeMap = new MyCubeMap(this,this.dayTimeUp,this.dayTimeLf,this.dayTimeFt,this.dayTimeRt,this.dayTimeBk,this.dayTimeDn);
        this.plane = new Plane(this, 32);
        this.house = new MyHouse(this, this.terrainTexture);

        this.initMaterials();
        this.initTextures();
        this.initShaders();

        //Objects connected to MyInterface
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    initMaterials(){
        this.material = new CGFappearance(this);
		this.material.setAmbient(0.3, 0.3, 0.3, 1);
		this.material.setDiffuse(0.7, 0.7, 0.7, 1);
		this.material.setSpecular(0.0, 0.0, 0.0, 1);
		this.material.setShininess(120);
    }
    initTextures(){
        this.dayTimeBk = new CGFtexture(this, 'images/ely_nevada/nevada_bk.jpg');
        this.dayTimeDn = new CGFtexture(this, 'images/ely_nevada/nevada_dn.jpg');
        this.dayTimeFt = new CGFtexture(this, 'images/ely_nevada/nevada_ft.jpg');
        this.dayTimeLf = new CGFtexture(this, 'images/ely_nevada/nevada_lf.jpg');
        this.dayTimeRt = new CGFtexture(this, 'images/ely_nevada/nevada_rt.jpg');
        this.dayTimeUp = new CGFtexture(this, 'images/ely_nevada/nevada_up.jpg');

        this.heightMap = new CGFtexture(this, "images/heightmap.jpg");
        this.terrain = new CGFtexture(this, "images/terrain.jpg");
        this.altimetry = new CGFtexture(this, "images/altimetry.jpg");

        this.material.setTexture(this.terrain);
		//this.material.setTextureWrap('REPEAT', 'REPEAT');        
    }
    initShaders(){
        this.shader = new CGFshader(this.gl, "shaders/shader.vert", "shaders/shader.frag");
        this.shader.setUniformsValues({ uSampler2: 1 });

        /*// shader code panels references
		this.shadersDiv = document.getElementById("shaders");
		this.vShaderDiv = document.getElementById("vshader");
		this.fShaderDiv = document.getElementById("fshader");

		// force initial setup of shader code panels

		this.onShaderCodeVizChanged(this.showShaderCode);
		this.onSelectedShaderChanged(this.selectedExampleShader);*/
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    update(t){
        this.checkKeys();
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
        //this.setDefaultAppearance();
        this.material.apply();

        // activate selected shader
		this.setActiveShader(this.shader);
		this.pushMatrix();

		// bind additional texture to texture unit 1
		this.heightMap.bind(1);

        // ---- BEGIN Primitive drawing section
        /*this.pushMatrix();
        this.translate(0,49.9,0); //cant be 50 bc if colides with plane cant write
        this.scale(400,100,400);
        this.cubeMap.display();
        this.popMatrix();*/

        //this.setActiveShader(this.shader);

        this.pushMatrix();
        this.translate(0,0,0);
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();

        this.setActiveShader(this.defaultShader);

        this.pushMatrix();
        this.scale(1/3, 1/3, 1/3);
        this.house.display();
        this.popMatrix();
        // ---- END Primitive drawing section
    }
    
    checkKeys() {
        var text="Keys pressed: ";
        var keysPressed=false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
        text+=" W ";
        keysPressed=true;
        }
        if (this.gui.isKeyPressed("KeyS")) {
        text+=" S ";
        keysPressed=true;
        }
        if (keysPressed)
        console.log(text);
    }
}