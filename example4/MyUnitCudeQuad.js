/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);

        this.quad1 = new MyQuad(quad1);
        this.quad2 = new MyQuad(quad1);
        this.quad3 = new MyQuad(quad1);
        this.quad4 = new MyQuad(quad1);
        this.quad5 = new MyQuad(quad1);
        this.quad6 = new MyQuad(quad1);

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
        //transf
        this.scene.popMatrix();

         //quad2
         this.scene.pushMattrix();
         //transf
         this.scene.popMatrix();

          //quad3
        this.scene.pushMattrix();
        //transf
        this.scene.popMatrix();

         //quad4
         this.scene.pushMattrix();
         //transf
         this.scene.popMatrix();

          //quad5
        this.scene.pushMattrix();
        //transf
        this.scene.popMatrix();

         //quad6
         this.scene.pushMattrix();
         //transf
         this.scene.popMatrix();
    }
}