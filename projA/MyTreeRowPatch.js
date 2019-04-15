/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeRowPatch extends CGFobject {
	constructor(scene) {
        super(scene);
    //wood 
    this.trunkTexture = new CGFtexture(this.scene, 'images/wood.png');
    //leaves 
    this.treeTopTexture = new CGFtexture(this.scene, 'images/mineLeaves.png');;
    
    this.tree1 = new MyTree(this.scene,2.3,1/4,4,2.3,this.trunkTexture,this.treeTopTexture);
    this.tree2 = new MyTree(this.scene,2,1/2,5,2.5,this.trunkTexture,this.treeTopTexture);
    this.tree3 = new MyTree(this.scene,1.8,1,4.5,2.5,this.trunkTexture,this.treeTopTexture);
    this.tree4 = new MyTree(this.scene,2.5,1/2,5,2.5,this.trunkTexture,this.treeTopTexture);
    this.tree5 = new MyTree(this.scene,1.5,1/2,5,2,this.trunkTexture,this.treeTopTexture);
    this.tree6 = new MyTree(this.scene,2.1,1/3,5,1.7,this.trunkTexture,this.treeTopTexture);

    }
    enableNormalViz(){
        tree1.enableNormalViz(); 
        tree2.enableNormalViz();
        tree3.enableNormalViz();
        tree4.enableNormalViz();
        tree5.enableNormalViz();
        tree6.enableNormalViz();
    
    }
    enableDisableViz(){
        tree1.enableDisableViz(); 
        tree2.enableDisableViz(); 
        tree3.enableDisableViz(); 
        tree4.enableDisableViz(); 
        tree5.enableDisableViz(); 
        tree6.enableDisableViz(); 
     
    }
	display() {
        this.scene.pushMatrix();
        this.scene.translate(-15,0,0); 
        this.tree1.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(-10,0,-2/3); 
        this.tree2.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(-5,0,0); 
        this.tree3.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(0,0,1); 
        this.tree4.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(5,0,0); 
        this.tree5.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(10,0,-1/2); 
        this.tree6.display(); 
        this.scene.popMatrix(); 

    }
    updateBuffers() {
        
    }
}
