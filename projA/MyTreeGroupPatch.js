/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {
	constructor(scene) {
        super(scene);
    //wood 
    this.trunkTexture = new CGFtexture(this.scene, 'images/wood.png');
    //leaves 
    this.treeTopTexture = new CGFtexture(this.scene, 'images/leave.png');;
    
    this.tree1 = new MyTree(this.scene,2.5,1/4,4,2.5,this.trunkTexture,this.treeTopTexture);
    this.tree2 = new MyTree(this.scene,2,1/2,5,2.5,this.trunkTexture,this.treeTopTexture);
    this.tree5 = new MyTree(this.scene,1.8,1,4.5,2.5,this.trunkTexture,this.treeTopTexture);
    this.tree4 = new MyTree(this.scene,2.5,1/2,5,2.5,this.trunkTexture,this.treeTopTexture);
    this.tree5 = new MyTree(this.scene,1.5,1/2,5,2,this.trunkTexture,this.treeTopTexture);
    this.tree6 = new MyTree(this.scene,2.1,1/5,5,1.7,this.trunkTexture,this.treeTopTexture);
    this.tree7 = new MyTree(this.scene,2.1,1/2,5,5.5,this.trunkTexture,this.treeTopTexture);
    this.tree8 = new MyTree(this.scene,2.5,1/5,5,2.5,this.trunkTexture,this.treeTopTexture);
    this.tree9 = new MyTree(this.scene,2,1/2,5,2.5,this.trunkTexture,this.treeTopTexture);

    }
    enableNormalViz(){
        tree1.enableNormalViz(); 
        tree2.enableNormalViz();
        tree5.enableNormalViz();
        tree4.enableNormalViz();
        tree5.enableNormalViz();
        tree6.enableNormalViz();
        tree7.enableNormalViz();
        tree8.enableNormalViz();
        tree9.enableNormalViz();
    }
    enableDisableViz(){
        tree1.enableDisableViz(); 
        tree2.enableDisableViz(); 
        tree5.enableDisableViz(); 
        tree4.enableDisableViz(); 
        tree5.enableDisableViz(); 
        tree6.enableDisableViz(); 
        tree7.enableDisableViz(); 
        tree8.enableDisableViz(); 
        tree9.enableDisableViz(); 
      
    }
	display() {
        this.scene.pushMatrix();
        this.scene.translate(-5,0,-5); 
        this.tree1.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(0,0,-5); 
        this.tree2.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(5,0,-5); 
        this.tree5.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(-5,0,0); 
        this.tree4.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(0,0,0); 
        this.tree5.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(5,0,0); 
        this.tree6.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(-5,0,5); 
        this.tree7.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(0,0,5); 
        this.tree8.display(); 
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(5,0,5); 
        this.tree9.display(); 
        this.scene.popMatrix(); 

    }
    updateBuffers() {
        
    }
}
