    /**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);

        this.quad1 = new MyQuad(this.scene);
        this.quad2 = new MyQuad(this.scene);
        this.quad3 = new MyQuad(this.scene);
        this.quad4 = new MyQuad(this.scene);
        this.quad5 = new MyQuad(this.scene);
        this.quad6 = new MyQuad(this.scene);

        //materials  
        this.top = new CGFappearance(this.scene);
        this.top.setAmbient(0.1, 0.1, 0.1, 1);
        this.top.setDiffuse(0.9, 0.9, 0.9, 1);
        this.top.setSpecular(0.1, 0.1, 0.1, 1);
        this.top.setShininess(10.0);
        this.top.loadTexture('images/mineTop.png');

        this.side = new CGFappearance(this.scene);
        this.side.setAmbient(0.1, 0.1, 0.1, 1);
        this.side.setDiffuse(0.9, 0.9, 0.9, 1);
        this.side.setSpecular(0.1, 0.1, 0.1, 1);
        this.side.setShininess(10.0);
        this.side.loadTexture('images/mineSide.png');

        this.bottom = new CGFappearance(this.scene);
        this.bottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottom.setShininess(10.0);
        this.bottom.loadTexture('images/mineBottom.png');

        this.quad1.initBuffers();
        this.quad2.initBuffers();
        this.quad3.initBuffers();
        this.quad4.initBuffers();
        this.quad5.initBuffers();
        this.quad6.initBuffers();

        this.initBuffers(); 
    }
    initBuffers(){

        this.vertices = [];
        this.normals = [];
        this.indices = [];
        this.texCoords =[];

        this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    enableNormalViz(){
        this.quad1.enableNormalViz(); 
        this.quad2.enableNormalViz();
        this.quad3.enableNormalViz();
        this.qaud4.enableNormalViz();
        this.quad5.enableNormalViz();
        this.quad6.enableNormalViz();
      
    }
    enableDisableViz(){
        this.quad1.enableDisableViz(); 
        this.quad2.enableNormalViz();
        this.quad3.enableDisableViz();
        this.quad4.enableDisableViz();
        this.quad5.enableDisableViz();
        this.quad6.enableDisableViz();

    }

    display(){
        //quad1
        this.scene.pushMattrix();
        this.translate(0,0,1/2);
        this.side.apply();
        this.quad1.display();
        this.scene.popMatrix();

         //quad2
         this.scene.pushMattrix();
         this.translate(0,0,-1/2);
         this.side.apply();
         this.quad2.display();
         this.scene.popMatrix();

        //quad3
        this.scene.pushMattrix();
        this.translate(0,0,1/2);
        this.rotate(-Math.PI/2,0,1,0);
        this.side.apply();
        this.quad3.display();
        this.scene.popMatrix();

         //quad4
         this.scene.pushMattrix();
         this.translate(0,0,1/2);
         this.rotate(Math.PI/2,0,1,0);
         this.side.apply();
         this.quad4.display();
         this.scene.popMatrix();

          //quad5
        this.scene.pushMattrix();
        this.translate(0,0,1/2);
        this.rotate(-Math.PI/2,1,0,0);
        this.top.apply();
        this.quad5.display();
        this.scene.popMatrix();

         //quad6
         this.scene.pushMattrix();
         this.translate(0,0,1/2);
        this.rotate(Math.PI/2,1,0,0);
        this.top.apply();
        this.quad6.display();
         this.scene.popMatrix();
    }
    updateBuffers() {
        
    }
}