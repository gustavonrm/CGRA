/**
* MyTree
* @constructor
*/

class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
        treeTopTexture) {
        super(scene);
        //transformations 
        this.trunkHeight = trunkHeight; 
        this.trunkRadius = trunkRadius; 
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;  
        //textures 
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture; 
        //objects 
        this.cilinder = new MyCylinder(this.scene,10,1); 
        this.cone = new MyCone(this.scene,6,1); 

        //materials
        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(1, 1, 1, 1);
        this.woodMaterial.setDiffuse(0.8, 0.4, 0, 1.0);
        this.woodMaterial.setSpecular(0.2, 0, 0, 1.0);
        this.woodMaterial.setShininess(10.0);
        this.woodMaterial.setTexture(trunkTexture);

        this.leaveMaterial = new CGFappearance(this.scene);
        this.leaveMaterial.setAmbient(1, 1, 1, 1);
        this.leaveMaterial.setDiffuse(0.1, 0.9, 0.1, 1);
        this.leaveMaterial.setSpecular(0.1, 0.5, 0.1, 1);
        this.leaveMaterial.setShininess(10.0);
        this.leaveMaterial.setTexture(treeTopTexture);

        this.initBuffers();
   }
    
    enableNormalViz(){
        this.cilinder.enableNormalViz(); 
        this.cone.enableNormalViz(); 
    }
    
    disableNormalViz(){
        this.cilinder.disableNormalViz(); 
        this.cone.disableNormalViz(); 
    }
    
    display(){
        //trunk 
        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius,this.trunkHeight,this.trunkRadius);
        this.woodMaterial.apply(); 
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.cilinder.display(); 
        this.scene.popMatrix(); 

        //treeTop
        this.scene.pushMatrix(); 
        this.scene.translate(0,this.trunkHeight,0);
        this.scene.scale(this.treeTopRadius,this.treeTopHeight,this.treeTopRadius);
        this.leaveMaterial.apply(); 
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.cone.display(); 
        this.scene.popMatrix(); 
    }
  
}