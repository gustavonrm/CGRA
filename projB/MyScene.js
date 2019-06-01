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
        
        //mi vars 
        this.ticks = 0; 
        this.oldTime = 0;
        this.birdOff;
        this.tolerance = 3;
        this.lightningActive = false;

        //GUI vars
        this.speedFactor = 0.1;
        this.scaleFactor = 0.5;

        
        this.initMaterials();
        //Textures
        this.initTextures();

        this.initShaders();


        // LSPlant
        this.axiom = "X"; //
        this.ruleF = "FF"; //
        this.ruleX = "F[-X][X]F[-X]+FX";
        //ex 3/4
        this.rule1 = "FF";
        this.rule2 = "F[-X][X]F[-X]+X";
        this.rule3 = "F[-X][x]+X";
        this.rule4 = "F[+X]-X";
        this.rule5 = "F[/X][X]F[\\X]+X";
        this.rule6 = "F[\X][X]/X";
        this.rule7 = "F[/X]\X";
        this.rule8 = "F[^X][X]F[&X]^X";
        this.rule9 = "F[^X]&X";
        this.rule10 = "F[&X]^X";

        // GUI
        this.speedFactor = 1.0;
        this.scaleFactor = 0.5;
        

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.cubeMap = new MyCubeMap(this,this.dayTimeUp,this.dayTimeLf,this.dayTimeFt,this.dayTimeRt,this.dayTimeBk,this.dayTimeDn);
        this.plane = new MyTerrain(this, 32);
        this.bird = new MyBird(this);
        this.house = new MyHouse(this, this.terrainTexture);  
        this.trees = [];
        this.lightning = new MyLightning(this);
        this.nest = new MyNest(this);
        //sticks
    
       this.treeBraches = [
           new MyTreeBranch(this,3,.01,-10,0),
           new MyTreeBranch(this,5,.5,5,Math.PI/4),
           new MyTreeBranch(this,-5,.5,-5,-Math.PI/4),
           new MyTreeBranch(this,7,.5,-5,Math.PI/2)
        ];
        

        this.angle = 30.0;
        this.iterations = 4;
        this.scaleFactor = 0.5;
        //this.lSystem = new MyLSystem(this);
        this.lightningAngle = 25.0;
        this.lightningIterations = 3.0;

        // do initial generation
        this.generateTrees(6);
        this.generateLightning();

        //this.lightning.startAnimation(0);
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

        this.heightMap = new CGFtexture(this, "images/newheightmap.jpg");
        this.terrain = new CGFtexture(this, "images/terrain.jpg");
        this.altimetry = new CGFtexture(this, "images/altimetry.jpg");

        this.material.setTexture(this.terrain);
    }
    initShaders(){
        this.shader = new CGFshader(this.gl, "shaders/shader.vert", "shaders/shader.frag");
        this.shader.setUniformsValues({ uSampler: 0, uSampler2: 1, uSampler3: 2 });
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    generateTrees(num){
        for (let i = 0; i < num; i++){
            this.trees.push(new MyLSPlant(this));
            this.trees[i].generate(
                this.axiom,
                {
                    "F" :[this.rule1],
                    "X" :[
                        this.rule2,
                        this.rule3,
                        this.rule4,
                        this.rule5,
                        this.rule6,
                        this.rule7,
                        this.rule8,
                        this.rule9,
                        this.rule10
                    
                    ]

                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
            }
    }

    generateLightning(){
        this.lightning.generate(
            this.axiom,
            {"F" :[this.ruleF],
             "X" :[this.ruleX]
            },
            this.lightningAngle,
            this.lightningIterations,
            this.scaleFactor
        );
    }

    checkKeys() {
        var text="Keys pressed: ";
        var keysPressed=false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text+=" W ";
            keysPressed=true;
            this.bird.accelerate(1.2);
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text+=" S ";
            keysPressed=true;
            this.bird.accelerate(0.8);  
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text+=" A ";
            keysPressed=true;
            this.bird.turn('+');
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text+=" D ";
            keysPressed=true;
            this.bird.turn('-');
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text+=" R ";
            keysPressed=true;
            this.bird.reset();
        }
        if (this.gui.isKeyPressed("KeyP")) {
            text+=" P ";
            if(!this.bird.diving){
                keysPressed=true;
                this.bird.diving = true;
                this.bird.oldTicks = this.ticks;
                this.bird.newTicks= this.bird.oldTicks + 40; 
                this.bird.oneSec = this.bird.oldTicks +20;
            }
        }
        if (this.gui.isKeyPressed("KeyL")) {
            text+=" L ";
            keysPressed=true;    
            if(!this.lightningActive)
            this.lightning.startAnimation(this.ticks/5);  
            this.lightningActive= true;   
        }
        if (keysPressed)   
            console.log(text);
        if(!keysPressed)
            this.lightningActive= false; 
        }
      
    update(t){
        this.ticks++;
        //20 ticks = 1 sec
        this.bird.update(this.ticks/5, this.speedFactor);
        this.checkKeys();
        if(this.lightningActive)
            this.lightning.update(this.ticks/5);
        else
            this.lightning.destroy();  //Se houve keypressed eventes isto era tao fucking mais facil 
        

        if(this.bird.diving){
            //to debug
            console.log(this.bird.offsetDive);
            this.bird.dropDown(this.ticks);
            for(var i =0; i<this.treeBraches.length; i++){
                if( (this.bird.offsetDive) <= -4.5 && //tolecane of 2
                    this.bird.offsetX/2 >= this.treeBraches[i].x-this.tolerance && this.bird.offsetX/2 <= this.treeBraches[i].x+this.tolerance &&
                    this.bird.offsetZ/2 >= this.treeBraches[i].z-this.tolerance && this.bird.offsetZ/2 <= this.treeBraches[i].z+this.tolerance){ 
                    if(!this.bird.caughtStick){
                        this.bird.caughtStick = true;
                        this.treeBraches[i].caught = true;
                        this.bird.branchIndex = i; 
                    }
                }
            }
        }

        if(this.bird.caughtStick){
            if(this.bird.diving){
                if( (this.bird.offsetZ+this.bird.offsetDive) <= -4.5 && //tolecane of 2
                    this.bird.offsetX >= 0-this.tolerance && this.bird.offsetX <= 0+this.tolerance &&
                    this.bird.offsetZ >= 0-this.tolerance && this.bird.offsetZ <= 0+this.tolerance ){ //giving 1 unit tolerance
                    this.treeBraches[this.bird.branchIndex].inNest=true;
                    this.bird.caughtStick = false; 
                }
            }
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

        //activate selected shader
		this.setActiveShader(this.shader);
		this.pushMatrix();
		// bind additional texture to texture unit 1
        this.altimetry.bind(0);
        this.heightMap.bind(1);
        this.terrain.bind(2);
        this.popMatrix();
/*
        this.material.apply();        
        this.setActiveShader(this.shader);
        this.pushMatrix();
*/
/*
        this.pushMatrix();
        this.translate(0,-3.2,0);
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.material.apply();  
        this.plane.display();
        this.popMatrix();
*/
        
        // activate selected shader
		this.setActiveShader(this.shader);
		this.pushMatrix();
		// bind additional texture to texture unit 1
        this.altimetry.bind(0);
        this.heightMap.bind(1);
        this.terrain.bind(2);
        this.popMatrix();

        this.setActiveShader(this.defaultShader);
        
        this.pushMatrix();
        this.translate(5,0,-5);
        this.scale(1/3, 1/3, 1/3);
        this.house.display();
        this.popMatrix();
        
        this.pushMatrix(); 
        this.translate(0,3,0);
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        this.scale(.75,.75,.75);
        this.bird.display();
        this.popMatrix(); 

        this.displayTrees();

        this.pushMatrix();
        this.translate(0, 8, 0);
        this.rotate(-Math.PI/2 * 1.5, 0, 1, 0);
        this.rotate(Math.PI, 1, 0, 0);
        this.lightning.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0,0.5,0);
        this.scale(1.5,1.5,1.5);
        this.nest.display();
        this.popMatrix();
        
        for( var i =0; i<this.treeBraches.length; i++){
           // this.pushMatrix();
            if(!this.treeBraches[i].caught)
                this.treeBraches[i].display();
            if(this.treeBraches[i].inNest)
                this.treeBraches[i].display();
            //this.popMatrix();
        }
       

        // ---- END Primitive drawing section
    }

    displayTrees(){ // TODO "ramdomize" position to display and improve tree display
        var x = 3;
        for (let i = 0; i < this.trees.length; i++) {
            this.pushMatrix();
            this.translate(x, 0, x);
            this.trees[i].display();
            this.popMatrix();
            x += 0.5;
        }
    }

}
