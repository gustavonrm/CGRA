/**
 * MyLSystem
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyBranch extends CGFobject {
	constructor(scene) {
        super(scene);
        //this.init();
        this.c = new MyCylinder(this.scene, 4, 1);

        // Material
        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(1, 1, 1, 1);
        this.woodMaterial.setDiffuse(0.8, 0.4, 0, 1.0);
        this.woodMaterial.setSpecular(0.4, 0.2, 0, 1.0);
        this.woodMaterial.setShininess(10.0);
    }

   /* init(){
        this.c = new MyCylinder(this.scene, 4, 1);

        // Material
        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(1, 1, 1, 1);
        this.woodMaterial.setDiffuse(0.8, 0.4, 0, 1.0);
        this.woodMaterial.setSpecular(0.4, 0.2, 0, 1.0);
        this.woodMaterial.setShininess(10.0);

    }*/

    display(){
        this.scene.pushMatrix();
        this.woodMaterial.apply();
        // this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.c.display();
        this.scene.popMatrix();
    }
}
