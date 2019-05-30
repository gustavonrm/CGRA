/**
* MyNest
* @constructor
* @param scene - Reference to MyScene object
*/

class MyNest extends CGFobject {
	constructor(scene, slices, stacks) {
        super(scene);

        this.nestBase = new MySemiSphere(this.scene, slices, stacks);
        this.initBuffers();
    }
    enableNormalViz(){
        this.plane.enableNormalViz();    
    }
    enableDisableViz(){
        this.plane.enableDisableViz(); 
    }

    display(){
        this.scene.pushMatrix();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.nestBase.display();
        this.scene.popMatrix();
        
    }
    updateBuffers() {
        
    }
}