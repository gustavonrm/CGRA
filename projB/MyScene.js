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
        this.birdOff

        //GUI vars
        this.speedFactor = 0.1;
        this.scaleFactor = 0.5;

        //Textures
        this.loadTextures()


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


        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.cubeMap = new MyCubeMap(this,this.dayTimeUp,this.dayTimeLf,this.dayTimeFt,this.dayTimeRt,this.dayTimeBk,this.dayTimeDn);
        this.plane = new Plane(this, 32);
        this.bird = new MyBird(this);
        this.house = new MyHouse(this, this.terrainTexture);  
        this.trees = [];  
        /*this.trees.push(new MyLSPlant(this));
        this.trees.push(new MyLSPlant(this));
        this.trees.push(new MyLSPlant(this));
        this.trees.push(new MyLSPlant(this));
        this.trees.push(new MyLSPlant(this));
        this.trees.push(new MyLSPlant(this));*/

        this.angle = 35.0;
        this.iterations = 4;
        this.scaleFactor = 0.5;
        //this.lSystem = new MyLSystem(this);
        

        this.doGenerate = function (num, array) {
            for (let i = 0; i < 6; i++){
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

        // do initial generation
        //this.doGenerate();
        this.generateTrees(6);
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
        this.camera = new CGFcamera(0.2, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    loadTextures(){
        this.dayTimeBk = new CGFtexture(this, 'images/ely_nevada/nevada_bk.jpg');
        this.dayTimeDn = new CGFtexture(this, 'images/ely_nevada/nevada_dn.jpg');
        this.dayTimeFt = new CGFtexture(this, 'images/ely_nevada/nevada_ft.jpg');
        this.dayTimeLf = new CGFtexture(this, 'images/ely_nevada/nevada_lf.jpg');
        this.dayTimeRt = new CGFtexture(this, 'images/ely_nevada/nevada_rt.jpg');
        this.dayTimeUp = new CGFtexture(this, 'images/ely_nevada/nevada_up.jpg');
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

    checkKeys() {
        var text="Keys pressed: ";
        var keysPressed=false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
        text+=" W ";
        keysPressed=true;
        this.bird.accelerate(this.speedFactor);  
        }
        if (this.gui.isKeyPressed("KeyS")) {
        text+=" S ";
        keysPressed=true;
        this.bird.accelerate(-this.speedFactor);  
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
        if (keysPressed)
        console.log(text);
        }
        
    update(t){
        this.ticks++; 
        //20 ticks = 1 sec
        this.bird.update(Math.sin(this.ticks/5));
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
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        /*
        this.pushMatrix();
        this.translate(0,49.9,0); //cant be 50 bc if colides with plane cant write
        this.scale(400,100,400);
        this.cubeMap.display();
        this.popMatrix();
        */
        /*
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();*/

        /*
        this.pushMatrix();
        this.scale(1/3, 1/3, 1/3);
        this.house.display();
        this.popMatrix();
        */
        this.pushMatrix(); 
        //this.translate(0,3,0);
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        this.bird.display();
        this.popMatrix(); 

        this.displayTrees();

        // ---- END Primitive drawing section
    }

    displayTrees(){ // TODO "ramdomize" position to display and improve tree display
        var x = 4;
        for (let i = 0; i < 6; i++) {
            this.pushMatrix();
            this.translate(x, 0, 0);
            this.trees[i].display();
            this.popMatrix();
            x += 2;
        }
    }

}
