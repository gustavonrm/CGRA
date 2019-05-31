/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyBird extends CGFobject {
	constructor(scene) {
        super(scene);
        //objects
        this.offsetDive =0;
        this.offsetY=0;
        this.offsetX=0;
        this.offsetZ=0; 
        this.speed = 0;
        this.offsetWing1 =0; 
        this.offsetWing2 =0; 

        this.turnFactor = 0;

        this.beak = new MyCone(this.scene, 100, 1);
        this.body= new MyUnitCube(this.scene);
        this.head = new MyUnitCube(this.scene);
        this.wing1 = new MyQuad(this.scene);
        this.wing2 = new MyTriangle(this.scene);
        this.tail = new MyTriangle(this.scene);
        this.leg = new MyCylinder(this.scene,5,1);
        this.crest = new MyTriangle(this.scene);

        this.stick = new MyCylinder(this.scene,5,1);


        //test sphere
        this.Sphere = new MySemiSphere(this.scene,15,10);
        this.Sphere = new MySemiSphere(this.scene,15,10);

        //textures
        //this.beakTexture = new CGFTexture(this.scene)
        //this.eyeTexture = new CGFTexture(this.scene)
        this.featherTexture = new CGFtexture(this.scene, "images/bird.jpg");

        //materials
        this.beakMaterial = new CGFappearance(this.scene);
        this.beakMaterial.setAmbient(1, 1, 1, 1);
        this.beakMaterial.setDiffuse(1, 0.5, 0, 1);
        this.beakMaterial.setSpecular(1, 0.5, 0, 1);
        this.beakMaterial.setShininess(10.0);

        this.featherMaterial = new CGFappearance(this.scene);
        this.featherMaterial.setAmbient(1, 1, 1, 1);
        this.featherMaterial.setDiffuse(0, 0.75, 1, 1);
        this.featherMaterial.setSpecular(0, 0.75, 1, 1);
        this.featherMaterial.setShininess(10.0);
        this.featherMaterial.setTexture(this.featherTexture);

        this.eyeMaterial=new CGFappearance(this.scene);
        this.eyeMaterial.setAmbient(1, 1, 1, 1);
        this.eyeMaterial.setDiffuse(0, 0, 0, 1);
        this.eyeMaterial.setSpecular(1, 1, 1, 1);
        this.eyeMaterial.setShininess(10.0);
       
        this.eyeMaterial2 = new CGFappearance(this.scene);
		this.eyeMaterial2.setAmbient(1,1,1,1);
		this.eyeMaterial2.setDiffuse(1,1.1,1,1);
		this.eyeMaterial2.setDiffuse(1,1,1,1);
        this.eyeMaterial2.setShininess(10.0);

        this.woodMaterial = new CGFappearance(this.scene);
		this.woodMaterial.setAmbient(1,1,1,1);
		this.woodMaterial.setDiffuse(0.8,0.4,0,1);
		this.woodMaterial.setDiffuse(0.4,0.2,0,1);
        this.woodMaterial.setShininess(10.0);
        

        //states
        var diving = false;
        var caughtStick=false;

        //utils
        var oldTicks = this.scene.ticks ;
        var oneSec = oldTicks+20; //1 sec 20 ticks 50ms refresh rate 
        var newTicks = oldTicks+40; //1 sec 20 ticks 50ms refresh rate 

        this.initBuffers();

    }
    initBuffers(){

        this.vertices = [];
        this.normals = [];
        this.indices = [];
    
        this.vertices.push(this.beak.vertices);
        this.normals.push(this.beak.normals);
        this.indices.push(this.beak.indices);

        this.vertices.push(this.body.vertices);
        this.normals.push(this.body.indices);
        this.indices.push(this.body.indices);

        this.vertices.push(this.head.vertices);
        this.normals.push(this.head.indices);
        this.indices.push(this.head.indices);

        this.vertices.push(this.Sphere.vertices);
        this.normals.push(this.Sphere.indices);
        this.indices.push(this.Sphere.indices);

        this.vertices.push(this.wing1.vertices);
        this.normals.push(this.wing1.indices);
        this.indices.push(this.wing1.indices);

        this.vertices.push(this.wing2.vertices);
        this.normals.push(this.wing2.indices);
        this.indices.push(this.wing2.indices);

        this.vertices.push(this.tail.vertices);
        this.normals.push(this.tail.indices);
        this.indices.push(this.tail.indices);

        this.vertices.push(this.leg.vertices);
        this.normals.push(this.leg.indices);
        this.indices.push(this.leg.indices);

        this.vertices.push(this.crest.vertices);
        this.normals.push(this.crest.indices);
        this.indices.push(this.crest.indices);

        this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    enableNormalViz(){
        this.beak.enableNormalViz(); 
    }
    enableDisableViz(){
        this.beak.enableDisableViz(); 
    }
    update(time, speedFactor){
        var wingoffset = Math.sin(time*speedFactor);
        this.offsetY=Math.sin(time);
        this.offsetWing1 = 2*Math.PI+wingoffset/2; //*speedFactor;  // todo wing clap speed
        this.offsetWing2 = 2*Math.PI+wingoffset/1.5;// *speedFactor; 
        this.offsetX += Math.sin(this.turnFactor) * this.speed * speedFactor;
        this.offsetZ += Math.cos(this.turnFactor) * this.speed * speedFactor;
    }
    turn(v){    
        switch(v){
            case '+':
                this.turnFactor += Math.PI/32;
                break; 
            case '-':
                this.turnFactor += -Math.PI/32;
                break; 
        }
    }
    accelerate(v){
        this.speed *= v;
        if( this.speed <= 0.1 ){
            this.speed = 0.1; 
        }
    }
    dropDown(ticks){
        //3 height divided by 20 ticks = 0.15 (0,.15,0) 
        //ill try with 5pp
        if(ticks >= this.newTicks){
            this.offsetDive = 0; 
            this.diving = false;  
        }
        if(ticks <= this.oneSec){
            this.offsetDive -= 0.25;
        }
        if(ticks > this.oneSec){
            this.offsetDive += 0.25;
        }

    }
        reset(){
        this.offsetY=0;
        this.offsetX=0;
        this.offsetZ=0; 
        this.speed = 0;
        this.offsetWing1 =0; 
        this.offsetWing2 =0; 
        this.turnFactor = 0;
    }
	display() {
        this.scene.pushMatrix(); 
        this.scene.translate(this.offsetX,this.offsetY+this.offsetDive,this.offsetZ);
        this.scene.rotate(this.turnFactor,0, 1, 0); //turn
      
        //left wing 
        
        this.scene.pushMatrix();
        this.scene.rotate(this.offsetWing1,0,0,1);

        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.scale(1.7,1,1.3);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.scene.translate(0.5,0,0);
        this.featherMaterial.apply();
        this.wing1.display();
        this.scene.popMatrix(); 
      
        this.scene.pushMatrix();
        this.scene.translate(2.2,0,-0.65);
        this.scene.scale(1,1,0.65);
        this.scene.rotate(this.offsetWing2,0,0,1);
        this.scene.rotate(-Math.PI/8,0,0,1);
        this.scene.translate(1.0,0.0,1.0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.featherMaterial.apply();
        this.wing2.display();
        this.scene.popMatrix(); 

        this.scene.popMatrix(); 
         
         //right wing
        this.scene.pushMatrix();
        this.scene.rotate(-this.offsetWing1,0,0,1);
     
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.scale(1.7,1,1.3);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.scene.translate(-0.5,0,0);
        this.featherMaterial.apply();
        this.wing1.display();
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(-2.2,0,-0.65);
        this.scene.scale(1,1,0.65);
        this.scene.rotate(-this.offsetWing2,0,0,1);
        this.scene.rotate(Math.PI/8,0,0,1);
        this.scene.translate(-1.0,-0.0,1.0);
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.featherMaterial.apply();
        this.wing2.display();
        this.scene.popMatrix(); 

        this.scene.popMatrix(); 
       
        //beak
        this.scene.pushMatrix();
        this.scene.translate(0,0.7,1.7);
        this.scene.rotate(Math.PI/2,1, 0, 0); 
        this.scene.scale(0.25,0.75,0.25);
        this.beakMaterial.apply();
        this.beak.display();
        this.scene.popMatrix();  

        //body with sphere with sphere 
      
        this.scene.pushMatrix();
        this.scene.translate(0,0,0);
        this.scene.scale(0.7,0.6,1.2);
        this.scene.rotate(Math.PI/2,1, 0, 0);
        this.featherMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,0);
        this.scene.scale(0.7,0.6,1.2);
        this.scene.rotate(-Math.PI/2,1, 0, 0);
        this.featherMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();
       
       //head with sphere 
       this.scene.pushMatrix();
       this.scene.translate(0,0.7,1.1);
       this.scene.scale(0.7,0.7,0.7);
       this.scene.rotate(Math.PI/2,1, 0, 0);
       this.featherMaterial.apply();
       this.Sphere.display();
       this.scene.popMatrix();

       this.scene.pushMatrix();
       this.scene.translate(0,0.7,1.1);
       this.scene.scale(0.7,0.7,0.7);
       this.scene.rotate(-Math.PI/2,1, 0, 0);
       //this.featherMaterial.apply();
       this.Sphere.display();
       this.scene.popMatrix();
        
        //left eye white
        this.scene.pushMatrix();
        this.scene.translate(0.4,1,1.5);
        this.scene.scale(0.2,0.2,0.2);
        this.scene.rotate(Math.PI/3,0, 1, 0);
        this.eyeMaterial2.apply();
        this.Sphere.display();
        this.scene.popMatrix();

         //left eye pupil
         this.scene.pushMatrix();
         this.scene.translate(0.5,1.,1.6);
         this.scene.scale(0.08,0.08,0.08);
         this.scene.rotate(Math.PI/3,0, 1, 0);
         this.eyeMaterial.apply();
         this.Sphere.display();
         this.scene.popMatrix();

         //left eyelid
         this.scene.pushMatrix();
         this.scene.translate(0.4,1.02,1.5);
         this.scene.scale(0.2,0.2,0.2);
         this.scene.rotate(Math.PI/8,0, 0, 1);
         this.scene.rotate(-Math.PI/2,1, 0, 0);
         this.eyeMaterial.apply();
         //this.featherMaterial.apply();
         this.Sphere.display();
         this.scene.popMatrix();
        
        //right eye  white
        this.scene.pushMatrix();
        this.scene.translate(-0.4,1,1.5);
        this.scene.scale(0.2,0.2,0.2);
        this.scene.rotate(-Math.PI/3,0, 1, 0);
        this.eyeMaterial2.apply();
        this.Sphere.display();
        this.scene.popMatrix();

        //right eye  pupil
        this.scene.pushMatrix();
        this.scene.translate(-0.5,1,1.6);
        this.scene.scale(0.08,0.08,0.08);
        this.scene.rotate(-Math.PI/3,0, 1, 0);
        this.eyeMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();

        //right eyelid
        this.scene.pushMatrix();
        this.scene.translate(-0.4,1.02,1.5);
        this.scene.scale(0.2,0.2,0.2);
        this.scene.rotate(-Math.PI/8,0, 0, 1);
        this.scene.rotate(-Math.PI/2,1, 0, 0);
        this.eyeMaterial.apply();
        //this.featherMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();
        
        //tail 
        this.scene.pushMatrix();
        this.scene.translate(0,0,-3);
        this.scene.scale(0.75,1,2);
        this.scene.rotate(Math.PI/4,0, 1, 0);
        this.scene.rotate(-Math.PI/2,1, 0, 0);
        this.featherMaterial.apply();
        this.tail.display();
        this.scene.popMatrix();

        //Rleg
        this.scene.pushMatrix();
        this.scene.translate(-0.3,-0.7,-1.2);
        this.scene.rotate(Math.PI/3,1,0,0);
        this.scene.scale(0.1,0.75,0.1);
        this.beakMaterial.apply();
        this.leg.display();
        this.scene.popMatrix();

        //Lleg
        this.scene.pushMatrix();
        this.scene.translate(0.3,-0.7,-1.2);
        this.scene.rotate(Math.PI/3,1,0,0);
        this.scene.scale(0.1,0.75,0.1);
        this.beakMaterial.apply();
        this.leg.display();
        this.scene.popMatrix();
       
        //Crest
        this.scene.pushMatrix();
        this.scene.translate(0,1.25,1.0);
        this.scene.scale(0.30,1,1);
        this.scene.rotate(Math.PI/8,1,0,0);
        this.scene.rotate(5*Math.PI/4,0,1,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.featherMaterial.apply();
        this.crest.display();
        this.scene.popMatrix();

       if(this.caughtStick){
            this.scene.pushMatrix();
            this.scene.translate(1,.65,2.1);
            this.scene.scale(2,0.05,0.05);
            this.scene.rotate(-Math.PI,0,1,0);
            this.scene.rotate(-Math.PI/2,0,0,1);
            this.woodMaterial.apply();
            this.stick.display();
            this.scene.popMatrix();
       }

        this.scene.popMatrix();
    }
    updateBuffers() {
        
    }
}