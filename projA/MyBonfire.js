/**
 * MyBonfire
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBonfire extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initBuffers();
    //wood 
    this.woodBlock = new MyCylinder(this.scene,4,1);
    this.flame= new MyFlame(this.scene);

    this.woodMaterial = new CGFappearance(this.scene);
    this.woodMaterial.setAmbient(1, 1, 1, 1);
    this.woodMaterial.setDiffuse(0.8, 0.4, 0, 1.0);
    this.woodMaterial.setSpecular(0.2, 0, 0, 1.0);
    this.woodMaterial.setShininess(10.0);
    this.woodMaterial.loadTexture('images/wood.png');

    this.fireMaterial = new CGFappearance(this.scene);
    this.fireMaterial.setAmbient(1, 1, 1, 1);
    this.fireMaterial.setDiffuse(0.8, 0.4, 0, 1.0);
    this.fireMaterial.setSpecular(0.2, 0, 0, 1.0);
    this.fireMaterial.setShininess(10.0);
    this.fireMaterial.setEmission(1.0,0.0,0.0,1.0); //PROV E ISTO CHECKAR
    this.fireMaterial.loadTexture('images/fire.png');

    }
    enableNormalViz(){
        woodBlock.enableNormalViz();
    }
    enableDisableViz(){
        woodBlock.enableDisableViz();       
    }
	display() {
        this.scene.lights[2].update();

        this.scene.pushMatrix();
        this.scene.translate(0,0,2.5); 
        this.scene.rotate(-Math.PI/4,1,0,0);
        this.scene.scale(0.5,4,0.5);
        this.woodMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.woodBlock.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(0,0,-2.5); 
        this.scene.rotate(Math.PI/4,1,0,0);
        this.scene.scale(0.5,4,0.5);
        this.woodMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.woodBlock.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(-2.5,0,0); 
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.scale(0.5,4,0.5);
        this.woodMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.woodBlock.display(); 
        this.scene.popMatrix(); 
 
        this.scene.pushMatrix();
        this.scene.translate(2.5,0,0); 
        this.scene.rotate(Math.PI/4,0,0,1);
        this.scene.scale(0.5,4,0.5);
        this.woodMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.woodBlock.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(1.9,0,-1.9); 
        this.scene.rotate(Math.PI/4,0,1,0);
        this.scene.rotate(Math.PI/4,0,0,1);
        this.scene.scale(0.5,4,0.5);
        this.woodMaterial.apply();1
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.woodBlock.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(-1.9,0,1.9); 
        this.scene.rotate(Math.PI/4,0,1,0);
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.scale(0.5,4,0.5);
        this.woodMaterial.apply();1
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.woodBlock.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(1.9,0,1.9); 
        this.scene.rotate(-Math.PI/4,0,1,0);
        this.scene.rotate(Math.PI/4,0,0,1);
        this.scene.scale(0.5,4,0.5);
        this.woodMaterial.apply();1
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.woodBlock.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(-1.9,0,-1.9); 
        this.scene.rotate(-Math.PI/4,0,1,0);
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.scale(0.5,4,0.5);
        this.woodMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.woodBlock.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(0,2.5,0); 
        this.fireMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.flame.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,2.5,0); 
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.fireMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.flame.display();
        this.scene.popMatrix();
    }
    updateBuffers() {
        
    }
}
