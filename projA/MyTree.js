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
        this.trunkTexture = new CGFappearance(this.trunkTexture);
        this.treeTopTexture = treeTopTexture; 
        //objects 
        this.cilinder = new MyCylinder(this.scene,10,1); 
        this.cone = new MyCone(this.scene,10,1); 

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
       // this.trunkTexture.apply(); 
        this.cilinder.display(); 
        this.scene.popMatrix(); 

        //treeTop
        this.scene.pushMatrix(); 
        this.scene.translate(0,this.trunkHeight,0);
        this.scene.scale(this.treeTopRadius,this.treeTopHeight,this.treeTopRadius);
       // this.treeTopTexture.apply(); 
        this.cone.display(); 
        this.scene.popMatrix(); 
    }
  
}