/**
* MyTerrain
* @constructor
* @param scene - Reference to MyScene object
*/

class MyTerrain extends CGFobject {
	constructor(scene, n) {
        super(scene);

        this.plane = new Plane(this.scene, n);
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
        this.plane.display();
        this.scene.popMatrix();
        
    }
    updateBuffers() {
        
    }
}