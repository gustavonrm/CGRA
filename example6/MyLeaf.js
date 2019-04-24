	/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
    constructor(scene) {
		super(scene);
		this.initBuffers();

		this.leaf = new MyRectangle(this.scene,0.5,0.5);

		this.leafMaterial = new CGFappearance(this.scene);
		this.leafMaterial.setAmbient(1,1,1,1);
		this.leafMaterial.setDiffuse(0,1,0,1);
		this.leafMaterial.setDiffuse(0,0.8,0,1);
		this.leafMaterial.setShininess(10.0);
	}

	display(){
		this.scene.pushMatrix();
		// this.scene.rotate(Math.PI/4,0,0,1); // its indiferent 
		this.leafMaterial.apply();
		this.leaf.display();
		this.scene.popMatrix();
	}

	updateBuffers() {
        
	}

}

