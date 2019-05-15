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

        //GUI variables
        this.displayAxis = true;
        this.displayTextures = true;
        this.scaleFactor = 0.5;

        //------ Material
        //DAY TIME
        this.dayTimeBk = new CGFtexture(this, 'images/ely_nevada/nevada_bk.jpg');
        this.dayTimeDn = new CGFtexture(this, 'images/ely_nevada/nevada_dn.jpg');
        this.dayTimeFt = new CGFtexture(this, 'images/ely_nevada/nevada_ft.jpg');
        this.dayTimeLf = new CGFtexture(this, 'images/ely_nevada/nevada_lf.jpg');
        this.dayTimeRt = new CGFtexture(this, 'images/ely_nevada/nevada_rt.jpg');
        this.dayTimeUp = new CGFtexture(this, 'images/ely_nevada/nevada_up.jpg');
        //NIGHT TIME
        this.nightTimeBk = new CGFtexture(this, 'images/mp_rip/rip_bk.jpg');
        this.nightTimeDn = new CGFtexture(this, 'images/mp_rip/rip_dn.jpg');
        this.nightTimeFt = new CGFtexture(this, 'images/mp_rip/rip_ft.jpg');
        this.nightTimeLf = new CGFtexture(this, 'images/mp_rip/rip_lf.jpg');
        this.nightTimeRt = new CGFtexture(this, 'images/mp_rip/rip_rt.jpg');
        this.nightTimeUp = new CGFtexture(this, 'images/mp_rip/rip_up.jpg');
        //wood 
        this.trunkTexture = new CGFtexture(this, 'images/wood.png');
        //leaves 
        this.treeTopTexture = new CGFtexture(this, 'images/mineLeaves.png');
        //terrain
        this.terrainTexture = new CGFtexture(this,'images/grass.png');
    
        
        //terrain
        this.terrainMaterial = new CGFappearance(this);
        this.terrainMaterial.setAmbient(1, 1, 1, 1);
        this.terrainMaterial.setDiffuse(0.8, 0.4, 0, 1.0);
        this.terrainMaterial.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.terrainMaterial.setShininess(10.0);
        this.terrainMaterial.setTexture(this.terrainTexture);
        this.terrainMaterial.setTextureWrap('REPEAT','REPEAT');


        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.cylinder = new MyCylinder(this, 100, 1);
        this.prism = new MyPrism(this, 5, 1);
        this.house = new MyHouse(this, this.terrainTexture);
        this.terrain =  new MyQuad(this);
        this.tree = new MyTree(this,2,1/2,5,2.5,this.trunkTexture,this.treeTopTexture);
        this.treeGroupPatch = new MyTreeGroupPatch(this); 
        this.treeRowPatch = new MyTreeRowPatch(this);
        this.biiigCube = new MyCubeMap(this);
        this.hill = new MyVoxelHill(this,4);
        this.highhill = new MyVoxelHill(this, 10);
        this.bonfire = new MyBonfire(this);
        this.lamp = new MyLamp(this);

        //background
        this.cubeMapDay = new MyCubeMap(this,this.dayTimeUp,this.dayTimeLf,this.dayTimeFt,this.dayTimeRt,this.dayTimeBk,this.dayTimeDn); 
        this.cubeMapNight = new MyCubeMap(this,this.nightTimeUp,this.nightTimeLf,this.nightTimeFt,this.nightTimeRt,this.nightTimeBk,this.nightTimeDn); 
        
        // Objects connected to MyInterface
        // lights
        this.lightIDs = {'Day': 0 ,'Night': 1};

        this.selectedLight = 0;
    }
    initLights() {
        this.setGlobalAmbientLight(0.2, 0.2, 0.2, 1);

        // Sol
        this.lights[0].setPosition(-10.0, 80.0, 10.0, 1.0);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setConstantAttenuation(1);
        this.lights[0].enable();
        //this.lights[0].setVisible(true);
        this.lights[0].update();

        // Lua
        this.lights[1].setPosition(-10, 70, 10, 1); 
        this.lights[1].setDiffuse(0.0,0.0,1.0,1.0);
        this.lights[1].setSpecular(0.1,0.1,0.5,1.0);
        this.lights[1].setConstantAttenuation(0.8);
        this.lights[1].disable();
        //this.lights[1].setVisible(true);
        this.lights[1].update();

        // Fogueira
        this.lights[2].setPosition(4, 0.5, -2, 1);
        this.lights[2].setDiffuse(1.0,0.1,0.0,1.0);
        this.lights[2].setSpecular(1.0,0.1,0.1,1.0);
        //this.lights[2].setSpecular(0.1,0.1,0.5,1.0);
        this.lights[2].setQuadraticAttenuation(0.5);
        this.lights[2].disable();
        //this.lights[2].setVisible(true);
        this.lights[2].update();

        // Candeeiro
        this.lights[3].setPosition(-1.5, 6*0.2, 6, 1);
        this.lights[3].setDiffuse(1.0, 1.0, 0.4, 1.0);
        this.lights[3].setSpecular(1.0, 1.0, 0.4, 1.0);
        this.lights[3].setLinearAttenuation(1);
        this.lights[3].disable();
        //this.lights[3].setVisible(true);
        this.lights[3].update();

    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 800, vec3.fromValues(22, 22, 22), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    updateLights() {

        if(this.selectedLight == 0){
            this.lights[0].enable();
            this.lights[1].disable();
            this.lights[2].disable();
            this.lights[3].disable();
        }
        if(this.selectedLight == 1){
            this.lights[0].disable();
            this.lights[1].enable();
            this.lights[2].enable();
            this.lights[3].enable();
        }
    
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
       
        //LIGHTS
        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();
        this.lights[3].update();

        //GUI
        // Draw axis
        if (this.displayAxis)
            this.axis.display();
        
        if(this.displayTextures)
            this.enableTextures(true);
        else this.enableTextures(false); 

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        //background 
        this.pushMatrix();
        this.scale(700,1,700);
        this.rotate(-Math.PI/2, 1,0,0);
        this.terrainTexCoords = [0.0, 50.0, 50.0, 50.0, 0.0, 0.0, 50.0, 0.0];
        this.terrain.updateTexCoords(this.terrainTexCoords);
        this.terrainMaterial.apply();  //TDO tratar da retpeticao de textura
        this.terrain.updateTexCoordsGLBuffers();
        this.terrain.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(0,49.9,0); //cant be 50 bc if colides with plane cant write
        this.scale(700,100,700);
        if(this.selectedLight == 0 )
            this.cubeMapDay.display();
        if(this.selectedLight == 1)
            this.cubeMapNight.display();
        this.popMatrix();
       
// remove after tests

        //scene objects 
        this.pushMatrix();
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        this.house.display();
        this.popMatrix();

        //HILLS
        this.pushMatrix();
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        this.translate(15,0,5);
        this.hill.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        this.translate(-10,0,15);
        this.hill.display();
        this.popMatrix();

        this.pushMatrix();
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        this.translate(-14,0,-16);
        this.rotate(Math.PI/4, 0,1,0);
        this.highhill.display();
        this.popMatrix();
        
        //TREES
        this.pushMatrix();
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        this.translate(-20,0,5);
        this.treeGroupPatch.display(); 
        this.popMatrix();

        this.pushMatrix();
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        this.translate(18,0,-14);
        this.rotate(-Math.PI/6, 0,1,0);
        this.treeRowPatch.display();
        this.popMatrix();
     
        this.pushMatrix();
        this.translate(4,0,-2);
        this.scale(0.15*this.scaleFactor,0.15*this.scaleFactor,0.15*this.scaleFactor);
        this.bonfire.display();
        this.popMatrix();

        this.pushMatrix();        
        this.translate(-1.5,0,6);
        this.scale(0.3*this.scaleFactor,0.3*this.scaleFactor,0.3*this.scaleFactor);
        this.lamp.display();
        this.popMatrix();

        // ---- END Primitive drawing section
    }
}