/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);

        this.quad = new MyQuad(this.scene);
    
        //materials  
        this.top = new CGFappearance(this.scene);
        this.top.setAmbient(1, 1, 1, 1);
        this.top.setDiffuse(0.9, 0.9, 0.9, 1);
        this.top.setSpecular(0.1, 0.1, 0.1, 1);
        this.top.setShininess(10.0);
      //  this.top.loadTexture('images/mineTop.png');

        this.side = new CGFappearance(this.scene);
        this.side.setAmbient(1, 1, 1, 1);
        this.side.setDiffuse(0.9, 0.9, 0.9, 1);
        this.side.setSpecular(0.1, 0.1, 0.1, 1);
        this.side.setShininess(10.0);
        //this.side.loadTexture('images/mineSide.png');

        this.bottom = new CGFappearance(this.scene);
        this.bottom.setAmbient(1, 1, 1, 1);
        this.bottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottom.setShininess(10.0);
        //this.bottom.loadTexture('images/mineBottom.png');

        this.houseWall = new CGFappearance(this.scene);
        this.houseWall.setAmbient(1, 1, 1, 1);
        this.houseWall.setDiffuse(0.8, 0.8, 0.8, 1);
        this.houseWall.setSpecular(0.1, 0.1, 0.1, 1);
        this.houseWall.setShininess(10.0);
        this.houseWall.loadTexture('images/house/wall.jpg');

        this.houseFloor = new CGFappearance(this.scene);
        this.houseFloor.setAmbient(1, 1, 1, 1);
        this.houseFloor.setDiffuse(0.4, 0.2, 0.0, 1);
        this.houseFloor.setSpecular(0.1, 0.1, 0.1, 1);
        this.houseFloor.setShininess(10.0);
        this.houseFloor.loadTexture('images/house/floor.jpg');

        this.houseWindow = new CGFappearance(this.scene);
        this.houseWindow.setAmbient(1, 1, 1, 1);
        this.houseWindow.setDiffuse(0.2, 0.2, 0.2, 1);
        this.houseWindow.setSpecular(1, 1, 1, 1);
        this.houseWindow.setShininess(10.0);
        this.houseWindow.loadTexture('images/house/window.jpg');

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
        this.side.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

         //quad2
         this.scene.pushMatrix();
         this.scene.translate(0,0,-1/2);
         this.scene.rotate(-Math.PI,0,1,0);
         this.side.apply();
         this.quad.display();
         this.scene.popMatrix();

        //quad3
        this.scene.pushMatrix();
        this.scene.translate(-1/2,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.side.apply();
        this.quad.display();
        this.scene.popMatrix();

        //quad4
        this.scene.pushMatrix();
        this.scene.translate(1/2,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.side.apply();
        this.quad.display();
        this.scene.popMatrix();

        //quad5
        this.scene.pushMatrix();
        this.scene.translate(0,1/2,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.top.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        //quad6
        this.scene.pushMatrix();
        this.scene.translate(0,-1/2,0/2);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.bottom.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();
        
    }
    displayHouse(){
        //quad1
        this.scene.pushMatrix();
        this.scene.translate(0,0,1/2);
        this.houseWindow.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

         //quad2
         this.scene.pushMatrix();
         this.scene.translate(0,0,-1/2);
         this.scene.rotate(-Math.PI,0,1,0);
         this.houseWall.apply();
         this.quad.display();
         this.scene.popMatrix();

        //quad3
        this.scene.pushMatrix();
        this.scene.translate(-1/2,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.houseWindow.apply();
        this.quad.display();
        this.scene.popMatrix();

        //quad4
        this.scene.pushMatrix();
        this.scene.translate(1/2,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.houseWall.apply();
        this.quad.display();
        this.scene.popMatrix();

        //quad5
        this.scene.pushMatrix();
        this.scene.translate(0,1/2,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.houseFloor.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        //quad6
        this.scene.pushMatrix();
        this.scene.translate(0,-1/2,0/2);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.bottom.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();
        
    }
    updateBuffers() {
        
    }
    
}