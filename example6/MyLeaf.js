/**
 * MyLSystem
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyLeaf extends CGFobject {
	constructor(scene) {
        super(scene);
        this.init();
    }

    init(){
        this.r = new MyRectangle(this.scene, 0.5, 0.5);

        // Material
        this.leafMaterial = new CGFappearance(this.scene);
        this.leafMaterial.setAmbient(1, 1, 1, 1);
        this.leafMaterial.setDiffuse(0.0, 0.8, 0.0, 1.0);
        this.leafMaterial.setSpecular(0.2, 0, 0, 1.0);
        this.leafMaterial.setShininess(10.0);
        
    }

    display(){
        this.scene.pushMatrix();
        this.leafMaterial.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.r.display();
        this.scene.popMatrix();
    }
}