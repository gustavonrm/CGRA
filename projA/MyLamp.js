/**
 * MyLamp
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLamp extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initBuffers();
    //wood 
    this.cylinder = new MyCylinder(this.scene,4,1);
    this.cone = new MyCone(this.scene,10,1);

    this.aluminiumMaterial = new CGFappearance(this.scene);
    this.aluminiumMaterial.setAmbient(1, 1, 1, 1);
    this.aluminiumMaterial.setDiffuse(0.2, 0.2, 0.2, 1.0);
    this.aluminiumMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
    this.aluminiumMaterial.setShininess(10.0);
    this.aluminiumMaterial.loadTexture('images/aluminium.jpg');

    }
    enableNormalViz(){
        cylinder.enableNormalViz();
        cone.enableNormalViz();
    }
    enableDisableViz(){
        cylinder.enableDisableViz();       
        cone.enableDisableViz();       
    }
	display() {
        
        this.scene.pushMatrix();
        this.scene.translate(0,0,2.5); 
        this.scene.rotate(-Math.PI/4,1,0,0);
        this.scene.scale(0.25,4,0.25);
        this.aluminiumMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.cylinder.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(0,0,-2.5); 
        this.scene.rotate(Math.PI/4,1,0,0);
        this.scene.scale(0.25,4,0.25);
        this.aluminiumMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.cylinder.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(-2.5,0,0); 
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.scale(0.25,4,0.25);
        this.aluminiumMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.cylinder.display(); 
        this.scene.popMatrix(); 
 
        this.scene.pushMatrix();
        this.scene.translate(2.5,0,0); 
        this.scene.rotate(Math.PI/4,0,0,1);
        this.scene.scale(0.25,4,0.25);
        this.aluminiumMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.cylinder.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(0,2.8,0); 
        this.scene.scale(0.25,4,0.25);
        this.aluminiumMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.cylinder.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(0,6.5,0); 
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.translate(0,-1,0);
        this.scene.scale(1.2,1.75,1.2);
        this.aluminiumMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.cone.display(); 
        this.scene.popMatrix(); 

    }
    updateBuffers() {
        
    }
}
