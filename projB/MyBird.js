/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
	constructor(scene) {
        super(scene);
        //objects
        this.beak = new MyCone(this.scene, 100, 1);
        this.body= new MyUnitCube(this.scene);
        this.head = new MyUnitCube(this.scene);
        this.eye = new MyUnitCube(this.scene,5,1);
        this.tail = new MyTriangle(this.scene);

        //test sphere
        this.headS = new MySemiSphere(this.scene,100,100);

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
	display() {

        //beak
        this.scene.pushMatrix();
        this.scene.translate(0,4,1.2);
        this.scene.rotate(Math.PI/2,1, 0, 0); 
        this.scene.scale(0.2,1,0.2);
        this.beakMaterial.apply();
        this.beak.display();
        this.scene.popMatrix();  

        //body
        this.scene.pushMatrix();
        this.scene.translate(0,3,0,1);
        this.featherMaterial.apply();
        this.body.display();
        this.scene.popMatrix();
        
        //head/
        /* 
        this.scene.pushMatrix();
        this.scene.translate(0,4,0.7,1);
        this.featherMaterial.apply();
        this.head.display();
        this.scene.popMatrix();
        */
       //head with sphere 
       this.scene.pushMatrix();
       this.scene.translate(0,4,0.7,1);
       this.scene.scale(0.7,0.7,0.7);
       this.scene.rotate(Math.PI/2,1, 0, 0);
       this.featherMaterial.apply();
       this.headS.display();
       this.scene.popMatrix();

       this.scene.pushMatrix();
       this.scene.translate(0,4,0.7,1);
       this.scene.scale(0.7,0.7,0.7);
       this.scene.rotate(-Math.PI/2,1, 0, 0);
       this.featherMaterial.apply();
       this.headS.display();
       this.scene.popMatrix();
        
        //left eye
        this.scene.pushMatrix();
        this.scene.translate(0.7,4,0.9);
        this.scene.scale(0.2,0.2,0.2);
        this.eyeMaterial.apply();
        this.eye.display();
        this.scene.popMatrix();
        
        //right eye  
        this.scene.pushMatrix();
        this.scene.translate(-0.7,4,0.9);
        this.scene.scale(0.2,0.2,0.2);
        this.eyeMaterial.apply();
        this.eye.display();
        this.scene.popMatrix();

        //tail 
        this.scene.pushMatrix();
        this.scene.translate(0,3,-1.3);
        this.scene.rotate(-5*Math.PI/4,0, 1, 0);
        this.scene.rotate(Math.PI/2,1, 0, 0); 
        this.scene.scale(0.5,0.5,0.5);
        this.featherMaterial.apply();
        this.tail.display();
        this.scene.popMatrix();

       
    }
    updateBuffers() {
        
    }
}