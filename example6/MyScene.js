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
        this.gl.clearColor(1.0, 1.0, 1.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Objects connected to MyInterface
        // this.axiom = "F--F--F"; // "X"; //
        // this.ruleF = "F+F--F+F"; // "FF"; //
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
        this.rule10 = " F[&X]^X";

        //ex3
        this.angle = 30.0;
        this.iterations = 4;
        this.scaleFactor = 0.5;
        //this.lSystem = new MyLSystem(this);
        this.lSystem = new MyLSPlant(this);

        this.doGenerate = function () {
            this.lSystem.generate(
                this.axiom,
                {
                    /* 
                    "F": [ this.ruleF ],
                    "X": [ this.ruleX ]
                    */
                   //exercise 3/4
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

        // do initial generation
        this.doGenerate();

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        
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
        this.axis.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        this.lSystem.display();

        // ---- END Primitive drawing section
    }
}