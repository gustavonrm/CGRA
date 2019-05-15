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

        //Textures
        //DAY TIME
        this.dayTimeBk = new CGFtexture(this, 'images/ely_nevada/nevada_bk.jpg');
        this.dayTimeDn = new CGFtexture(this, 'images/ely_nevada/nevada_dn.jpg');
        this.dayTimeFt = new CGFtexture(this, 'images/ely_nevada/nevada_ft.jpg');
        this.dayTimeLf = new CGFtexture(this, 'images/ely_nevada/nevada_lf.jpg');
        this.dayTimeRt = new CGFtexture(this, 'images/ely_nevada/nevada_rt.jpg');
        this.dayTimeUp = new CGFtexture(this, 'images/ely_nevada/nevada_up.jpg');

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.cubeMap = new MyCubeMap(this,this.dayTimeUp,this.dayTimeLf,this.dayTimeFt,this.dayTimeRt,this.dayTimeBk,this.dayTimeDn);
        this.plane = new Plane(this, 32);
        this.house = new MyHouse(this, this.terrainTexture);


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
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    update(t){
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
        this.pushMatrix();
        this.translate(0,49.9,0); //cant be 50 bc if colides with plane cant write
        this.scale(400,100,400);
        this.cubeMap.display();
        this.popMatrix();

        /*this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();*/

        this.pushMatrix();
        this.scale(1/3, 1/3, 1/3);
        this.house.display();
        this.popMatrix();
        // ---- END Primitive drawing section
    }

}