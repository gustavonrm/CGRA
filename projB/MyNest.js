/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyNest extends CGFobject {
	constructor(scene) {
        super(scene);

        //test sphere
        this.Sphere = new MySemiSphere(this.scene,100,100);
        this.irregularSphere= new MySemiSphere(this.scene,5,5);

        //textures

        //materials
        this.eggMaterial = new CGFappearance(this.scene);
        this.eggMaterial.setAmbient(1, 1, 1, 1);
        this.eggMaterial.setDiffuse(.99,.90,.79, 1);
        this.eggMaterial.setSpecular(.99,.90,.79, 1);
        this.eggMaterial.setShininess(10.0);

        this.woodMaterial = new CGFappearance(this.scene);
		this.woodMaterial.setAmbient(1,1,1,1);
		this.woodMaterial.setDiffuse(0.8,0.4,0,1);
		this.woodMaterial.setDiffuse(0.4,0.2,0,1);
		this.woodMaterial.setShininess(10.0);

        this.initBuffers();

    }
    initBuffers(){

        this.vertices = [];
        this.normals = [];
        this.indices = [];

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
        //eggs
        //1
        this.scene.pushMatrix(); 
        this.scene.translate(-1.5,1.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.eggMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); 
        this.scene.translate(-1.5,1.5,0);
        this.scene.scale(1,1.5,1)
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.eggMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();
//2
        this.scene.pushMatrix(); 
        this.scene.translate(-0.5,1.5,-1.5);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.eggMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); 
        this.scene.translate(-0.5,1.5,-1.5);
        this.scene.scale(1,1.5,1)
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.eggMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();
//3
        this.scene.pushMatrix(); 
        this.scene.translate(-0,1,0);
        this.scene.scale(0.75,0.75,0.75)
        this.scene.rotate(Math.PI/2,1,0,0);
        this.eggMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); 
        this.scene.translate(-0,1,0);
        this.scene.scale(0.75,1,0.75)
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.eggMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();
        
        // nest 
        this.scene.pushMatrix(); 
        this.scene.translate(0,2,0);
        this.scene.scale(3,2,3);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.woodMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();

        
    }
    updateBuffers() {
        
    }
}