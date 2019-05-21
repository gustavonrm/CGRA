/**
* MyTerrain
* @constructor
* @param scene - Reference to MyScene object
*/

class MyCubeMap extends CGFobject {
	constructor(scene,up,lf,ft,rt,bk,dn) {
        super(scene);

        this.plane = new Plane(this.scene);
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
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.plane.display();
        this.scene.popMatrix();
        
    }
    updateBuffers() {
        
    }
}