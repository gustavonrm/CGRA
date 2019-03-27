/**
* MyTree
* @constructor
*/

class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
        treeTopTexture) {
        super(scene);

        this.cilinder = new MyCylinder(scene,10,1); 
        this.cone = new MyCone(scene,10,1); 

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
        this.scene.pushmatrix(); 
        this.cilinder.display(); 
        this.scene.popmatrix(); 

        this.scene.pushmatrix(); 
        this.cone.display(); 
        this.scene.popmatrix(); 
    }
  
}