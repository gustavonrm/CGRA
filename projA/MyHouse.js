/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
	constructor(scene, tex) {
		super(scene);
        this.pyramid = new MyPyramid(this.scene, 4, 1);
        this.unitCubeQuad = new MyUnitCubeQuad(this.scene);
        this.topfloor = new MyUnitCubeQuad(this.scene);
        this.prism1 = new MyPrism(this.scene, 5, 1);
        this.prism2 = new MyPrism(this.scene, 5, 1);
        this.prism3 = new MyPrism(this.scene, 5, 1);
        this.prism4 = new MyPrism(this.scene, 5, 1);

      //  this.doorTexture = new CFGtexture(this.scene, 'images/door.png');

        this.door = new CGFappearance(this.scene);
        this.door.setAmbient(1, 1, 1, 1);
        this.door.setDiffuse(0.8, 0.4, 0, 1.0);
        this.door.setSpecular(0.2, 0, 0, 1.0);
        this.door.setShininess(10.0);
        this.door.setTexture(tex);

        this.initBuffers();

    }
    initBuffers(){

        this.vertices = [];
        this.normals = [];
        this.indices = [];
                
        this.vertices.push(this.pyramid.vertices);
        this.normals.push(this.pyramid.normals);
        this.indices.push(this.pyramid.indices);

        this.vertices.push(this.unitCubeQuad.vertices);
        this.normals.push(this.unitCubeQuad.normals);
        this.indices.push(this.unitCubeQuad.indices);

        this.vertices.push(this.prism1.vertices);
        this.normals.push(this.prism1.normals);
        this.indices.push(this.prism1.indices);

        this.vertices.push(this.prism2.vertices);
        this.normals.push(this.prism2.normals);
        this.indices.push(this.prism2.indices);
        
        this.vertices.push(this.prism3.vertices);
        this.normals.push(this.prism3.normals);
        this.indices.push(this.prism3.indices);

        this.vertices.push(this.prism4.vertices);
        this.normals.push(this.prism4.normals);
        this.indices.push(this.prism4.indices);

        this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    enableNormalViz(){
        this.pyramid.enableNormalViz(); 
        this.unitCubeQuad.enableNormalViz();
        this.prism1.enableNormalViz();
        this.prism2.enableNormalViz();
        this.prism3.enableNormalViz();
        this.prism4.enableNormalViz();
        this.parallelogram.enableNormalViz();
    }
    enableDisableViz(){
        this.pyramid.enableDisableViz(); 
        this.unitCubeQuad.enableDisableViz();
        this.prism1.enableDisableViz();
        this.prism2.enableDisableViz();
        this.prism3.enableDisableViz();
        this.prism4.enableDisableViz();
        this.parallelogram.enableDisableViz();
    }
	display() {
        // Pyramid -- Roof
        this.scene.pushMatrix();
        this.scene.translate(-1.5,4,0);
        this.scene.scale(6,1,5);
        this.scene.rotate(Math.PI/4,0, 1, 0); 
        this.pyramid.display();
        this.scene.popMatrix();

        // UnitCubeQuad -- Walls
        this.scene.pushMatrix();
        //this.scene.scale(2,2,2);
       // this.scene.rotate(Math.PI/4,0, 1, 0);
       this.scene.translate(0,0,-1)
        this.scene.scale(5,2,5);
        this.scene.translate(0,0.5,0);
        this.unitCubeQuad.display();
        this.scene.popMatrix();   

        // TopFloor -- Walls
        this.scene.pushMatrix();
        //this.scene.scale(2,2,2);
       // this.scene.rotate(Math.PI/4,0, 1, 0);
       this.scene.translate(-3, 2, 0);
        this.scene.scale(5,2,7);
        this.scene.translate(0,0.5,0);
        this.door.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.unitCubeQuad.display();
        this.scene.popMatrix();   
    

        // Prism1 -- Column1
        this.scene.pushMatrix();
        this.scene.translate(2.2,2,1.2);
        this.scene.scale(0.2, 2, 0.2);
        this.prism1.display();
        this.scene.popMatrix();
    
        // Prism2 -- Column2
        this.scene.pushMatrix();            
        this.scene.translate(2.2,2,-3.2);
        this.scene.scale(0.2, 2, 0.2);
        this.prism2.display();
        this.scene.popMatrix();
    
        // Prism3 -- Column3
        this.scene.pushMatrix();
        this.scene.translate(-5.2, 0, 0);
        this.scene.scale(0.2, 2, 0.2);
        this.prism3.display();
        this.scene.popMatrix();

        // Prism4 -- Column4
        this.scene.pushMatrix();
        this.scene.translate(-5.2,0,1);
        this.scene.scale(0.2, 2, 0.2);
        this.prism4.display();
        this.scene.popMatrix();    
    }
}