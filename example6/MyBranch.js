/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		
		this.branch = new MyCylinder(this.scene,4,1);

		this.woodMaterial = new CGFappearance(this.scene);
		this.woodMaterial.setAmbient(1,1,1,1);
		this.woodMaterial.setDiffuse(0.8,0.4,0,1);
		this.woodMaterial.setDiffuse(0.4,0.2,0,1);
		this.woodMaterial.setShininess(10.0);
	}
	display(){
		this.scene.pushMatrix();
		this.scene.scale(1/3,1,1/3);
		this.woodMaterial.apply();
		this.branch.display();
		this.scene.popMatrix();
	}
	
	updateBuffers() {

	}

}
	
