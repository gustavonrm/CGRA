/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
        super(scene);

        this.quad = new MyQuad(this.scene);

        this.top = new CGFappearance(this.scene);
        this.top.setAmbient(1, 1, 1, 1);
        this.top.setDiffuse(0.9, 0.9, 0.9, 1);
        this.top.setSpecular(0.1, 0.1, 0.1, 1);
        this.top.setShininess(10.0);
        this.top.loadTexture('images/sor_lake1/lake1_up.jpg');

        this.lfside = new CGFappearance(this.scene);
        this.lfside.setAmbient(1, 1, 1, 1);
        this.lfside.setDiffuse(0.9, 0.9, 0.9, 1);
        this.lfside.setSpecular(0.1, 0.1, 0.1, 1);
        this.lfside.setShininess(10.0);
        this.lfside.loadTexture('images/sor_lake1/lake1_lf.jpg');

        this.ftside = new CGFappearance(this.scene);
        this.ftside.setAmbient(1, 1, 1, 1);
        this.ftside.setDiffuse(0.9, 0.9, 0.9, 1);
        this.ftside.setSpecular(0.1, 0.1, 0.1, 1);
        this.ftside.setShininess(10.0);
        this.ftside.loadTexture('images/sor_lake1/lake1_ft.jpg');

        this.rtside = new CGFappearance(this.scene);
        this.rtside.setAmbient(1, 1, 1, 1);
        this.rtside.setDiffuse(0.9, 0.9, 0.9, 1);
        this.rtside.setSpecular(0.1, 0.1, 0.1, 1);
        this.rtside.setShininess(10.0);
        this.rtside.loadTexture('images/sor_lake1/lake1_rt.jpg');

        this.bkside = new CGFappearance(this.scene);
        this.bkside.setAmbient(1, 1, 1, 1);
        this.bkside.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bkside.setSpecular(0.1, 0.1, 0.1, 1);
        this.bkside.setShininess(10.0);
        this.bkside.loadTexture('images/sor_lake1/lake1_bk.jpg');

        this.bottom = new CGFappearance(this.scene);
        this.bottom.setAmbient(1, 1, 1, 1);
        this.bottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottom.setShininess(10.0);
        this.bottom.loadTexture('images/sor_lake1/lake1_dn.jpg');

        this.quad.initBuffers();

        this.initBuffers(); 
    }
    enableNormalViz(){
        this.quad1.enableNormalViz();    
    }
    enableDisableViz(){
        this.quad1.enableDisableViz(); 
    }

    display(){
        //quad1
        this.scene.pushMatrix();
        this.scene.translate(0,0,1/2);
        this.scene.rotate(Math.PI,0,1,0);
        this.lfside.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

         //quad2
        this.scene.pushMatrix();
        this.scene.translate(0,0,-1/2);
        this.scene.rotate(0,0,1,0);
        this.rtside.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        //quad3
        this.scene.pushMatrix();
        this.scene.translate(-1/2,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.bkside.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        //quad4
        this.scene.pushMatrix();
        this.scene.translate(1/2,0,0);
        this.scene.rotate(3*Math.PI/2,0,1,0);
        this.ftside.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        //quad5
        this.scene.pushMatrix();
        this.scene.translate(0,1/2,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.top.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        //quad6
        this.scene.pushMatrix();
        this.scene.translate(0,-1/2,0/2);
        this.scene.rotate(3*Math.PI/2,1,0,0);
        this.bottom.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();
        
    }
    updateBuffers() {
        
    }
}