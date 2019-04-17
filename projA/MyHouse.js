/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
	constructor(scene, tex) {
		super(scene);
        this.pyramid = new MyPyramid(this.scene, 4, 1);
        this.unitCubeQuad = new MyUnitCubeQuad(this.scene, 1);
        this.topfloor = new MyUnitCubeQuad(this.scene, 1);
        this.prism1 = new MyPrism(this.scene, 5, 1);
        this.prism2 = new MyPrism(this.scene, 5, 1);
        this.prism3 = new MyPrism(this.scene, 5, 1);
        this.prism4 = new MyPrism(this.scene, 5, 1);
        this.prism5 = new MyPrism(this.scene, 5, 1);
        this.prism6 = new MyPrism(this.scene, 5, 1);
        this.prism7 = new MyPrism(this.scene, 5, 1);

        //texture
        this.tex = tex; 

        //roof material
        this.roof = new CGFappearance(this.scene);
        this.roof.setAmbient(1, 1, 1, 1);
        this.roof.setDiffuse(0.9, 0.9, 0.9, 1);
        this.roof.setSpecular(0.1, 0.1, 0.1, 1);
        this.roof.setShininess(10.0);
        this.roof.loadTexture('images/roof.png');

        this.column = new CGFappearance(this.scene);
        this.column.setAmbient(1, 1, 1, 1);
        this.column.setDiffuse(0.9, 0.9, 0.9, 1);
        this.column.setSpecular(0.1, 0.1, 0.1, 1);
        this.column.setShininess(10.0);
        this.column.loadTexture('images/column.jpg');

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
        this.roof.apply();
        this.pyramid.display();
        this.scene.popMatrix();

        // UnitCubeQuad -- Walls
        this.scene.pushMatrix();
        //this.scene.scale(2,2,2);
       // this.scene.rotate(Math.PI/4,0, 1, 0);
       this.scene.translate(0,0,-1)
        this.scene.scale(5,2,5);
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2, 0,1,0);
        this.unitCubeQuad.displayHouse();
        this.scene.popMatrix();   

        // TopFloor -- Walls
        this.scene.pushMatrix();
        //this.scene.scale(2,2,2);
       // this.scene.rotate(Math.PI/4,0, 1, 0);
        this.scene.translate(-3, 2, 0);
        this.scene.scale(5,2,7);
        this.scene.translate(0,0.5,0);
        this.unitCubeQuad.displayHouse();
        this.scene.popMatrix();   
    

        // Prism1 -- Column1
        this.scene.pushMatrix();
        this.scene.translate(2.2,2,1.2);
        this.scene.scale(0.2, 2, 0.2);
        this.column.apply();
        this.prism1.display();
        this.scene.popMatrix();
    
        // Prism2 -- Column2
        this.scene.pushMatrix();            
        this.scene.translate(2.2,2,-3.2);
        this.scene.scale(0.2, 2, 0.2);
        this.column.apply();
        this.prism2.display();
        this.scene.popMatrix();
    
        // Prism3 -- Column3
        this.scene.pushMatrix();
        this.scene.translate(-5.2, 0, 3.2);
        this.scene.scale(0.2, 2, 0.2);
        this.column.apply();
        this.prism3.display();
        this.scene.popMatrix();

        // Prism4 -- Column4
        this.scene.pushMatrix();
        this.scene.translate(-5.2,0,1.5);
        this.scene.scale(0.2, 2, 0.2);
        this.column.apply();
        this.prism4.display();
        this.scene.popMatrix();    

        // Prism5 -- Column5
        this.scene.pushMatrix();
        this.scene.translate(-5.2, 0, -1.5);
        this.scene.scale(0.2, 2, 0.2);
        this.column.apply();
        this.prism5.display();
        this.scene.popMatrix();

        // Prism6 -- Column6
        this.scene.pushMatrix();
        this.scene.translate(-5.2,0,-3.2);
        this.scene.scale(0.2, 2, 0.2);
        this.column.apply();
        this.prism6.display();
        this.scene.popMatrix();  

        // Prism7 -- Column7
        this.scene.pushMatrix();
        this.scene.translate(-5.2,0,0);
        this.scene.scale(0.2, 2, 0.2);
        this.column.apply();
        this.prism7.display();
        this.scene.popMatrix();
    }
    updateBuffers() {
        
    }
}