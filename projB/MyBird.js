/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyBird extends CGFobject {
	constructor(scene) {
        super(scene);
        //objects
        this.y=0;
        this.offsetX=0;
        this.offsetZ=0;

        this.beak = new MyCone(this.scene, 100, 1);
        this.body= new MyUnitCube(this.scene);
        this.head = new MyUnitCube(this.scene);
        this.wing1 = new MyQuad(this.scene);
        this.wing2 = new MyTriangle(this.scene);
        this.tail = new MyTriangle(this.scene);

        //test sphere
        this.Sphere = new MySemiSphere(this.scene,100,100);
        this.Sphere = new MySemiSphere(this.scene,100,100);

        //textures

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

        this.eyeMaterial=new CGFappearance(this.scene);
        this.eyeMaterial.setAmbient(1, 1, 1, 1);
        this.eyeMaterial.setDiffuse(0, 0, 0, 1);
        this.eyeMaterial.setSpecular(1, 1, 1, 1);
        this.eyeMaterial.setShininess(10.0);

        this.initBuffers();

    }
    initBuffers(){

        this.vertices = [];
        this.normals = [];
        this.indices = [];
    
        this.vertices.push(this.beak.vertices);
        this.normals.push(this.beak.normals);
        this.indices.push(this.beak.indices);

        this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    enableNormalViz(){
        this.beak.enableNormalViz(); 
    }
    enableDisableViz(){
        this.beak.enableDisableViz(); 
    }
    update(time){
      this.y=time;
    }
    keyMove(key){
        switch (key){
            case "W":
                 this.offsetZ++;
                 break;
            case "S":
                    this.offsetZ--;
            break;
            case "A":
                    this.offsetX++;
            break;
            case "D":
                    this.offsetX--;
            break;

        }
    }
	display() {

        //left wing 
        this.scene.pushMatrix();
        this.scene.translate(1.2+this.offsetX,0+this.y,0+this.offsetZ);
        this.scene.scale(1.7,1,1.3);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.featherMaterial.apply();
        this.wing1.display();
        this.scene.popMatrix(); 
      
        this.scene.pushMatrix();
        this.scene.translate(3.0+this.offsetX,0+this.y,0+this.offsetZ);
        this.scene.scale(1,1,0.65);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.featherMaterial.apply();
        this.wing2.display();
        this.scene.popMatrix(); 

        //right wing
        this.scene.pushMatrix();
        this.scene.translate(-1.2+this.offsetX,0+this.y,0+this.offsetZ);
        this.scene.scale(1.7,1,1.3);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.featherMaterial.apply();
        this.wing1.display();
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(-3.0+this.offsetX,0+this.y,0+this.offsetZ);
        this.scene.scale(1,1,0.65);
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.featherMaterial.apply();
        this.wing2.display();
        this.scene.popMatrix(); 

        //beak
        this.scene.pushMatrix();
        this.scene.translate(0+this.offsetX,0.7+this.y,1.7+this.offsetZ);
        this.scene.rotate(Math.PI/2,1, 0, 0); 
        this.scene.scale(0.25,1,0.25);
        this.beakMaterial.apply();
        this.beak.display();
        this.scene.popMatrix();  

        //body with sphere with sphere 
      
        this.scene.pushMatrix();
        this.scene.translate(0+this.offsetX,0+this.y,0+this.offsetZ);
        this.scene.scale(0.7,0.6,1.2);
        this.scene.rotate(Math.PI/2,1, 0, 0);
        this.featherMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0+this.offsetX,0+this.y,0+this.offsetZ);
        this.scene.scale(0.7,0.6,1.2);
        this.scene.rotate(-Math.PI/2,1, 0, 0);
        this.featherMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();
        
       //head with sphere 
       this.scene.pushMatrix();
       this.scene.translate(0+this.offsetX,0.7+this.y,1.1+this.offsetZ);
       this.scene.scale(0.7,0.7,0.7);
       this.scene.rotate(Math.PI/2,1, 0, 0);
       this.featherMaterial.apply();
       this.Sphere.display();
       this.scene.popMatrix();

       this.scene.pushMatrix();
       this.scene.translate(0+this.offsetX,0.7+this.y,1.1+this.offsetZ);
       this.scene.scale(0.7,0.7,0.7);
       this.scene.rotate(-Math.PI/2,1, 0, 0);
       this.featherMaterial.apply();
       this.Sphere.display();
       this.scene.popMatrix();
        
        //left eye
        this.scene.pushMatrix();
        this.scene.translate(0.4+this.offsetX,1+this.y,1.5+this.offsetZ);
        this.scene.scale(0.2,0.2,0.2);
        this.scene.rotate(Math.PI/3,0, 1, 0);
        this.eyeMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();
        
        //right eye  
        this.scene.pushMatrix();
        this.scene.translate(-0.4+this.offsetX,1+this.y,1.5+this.offsetZ);
        this.scene.scale(0.2,0.2,0.2);
        this.scene.rotate(-Math.PI/3,0, 1, 0);
        this.eyeMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();

        //tail 
        this.scene.pushMatrix();
        this.scene.translate(0+this.offsetX,0+this.y,-2+this.offsetZ);
        this.scene.scale(1,1,1);
        this.scene.rotate(Math.PI/4,0, 1, 0);
        this.scene.rotate(-Math.PI/2,1, 0, 0);
        this.featherMaterial.apply();
        this.tail.display();
        this.scene.popMatrix();
       
    }
    updateBuffers() {
        
    }
}