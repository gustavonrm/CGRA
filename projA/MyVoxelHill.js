/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
	constructor(scene,levels) {
        super(scene);

        this.cube = new MyUnitCubeQuad(this.scene);
        this.levels = levels; 
     
        this.cube.initBuffers();

        this.initBuffers(); 
        var side=1; 
        for (var i=1; i<this.levels; i++){
            side +=2; 
        }

    }
    enableNormalViz(){
        this.cube.enableNormalViz();    
    }
    enableDisableViz(){
        this.cube.enableDisableViz(); 
    }
    display(){
       for(var i = this.levels; i != 0; i-- ){
           var xt = -i+1; //x top
           var yt = -i+1;  //y top 
           var xb = i-1; //x bottom
           var yb = i-1;  //y bottom

           for( var j = 0; j < i*2-1;j++){
            //from top 
            this.scene.pushMatrix();
            this.scene.translate(xt,this.levels-i+0.5,yt+j);
            this.cube.display(); 
            this.scene.popMatrix(); 

            this.scene.pushMatrix();
            this.scene.translate(j+xt,this.levels-i+0.5,yt);
            this.cube.display(); 
            this.scene.popMatrix(); 

            //from bottom 
            this.scene.pushMatrix();
            this.scene.translate(xb,this.levels-i+0.5,yb-j);
            this.cube.display(); 
            this.scene.popMatrix(); 

            this.scene.pushMatrix();
            this.scene.translate(xb-j,this.levels-i+0.5,yb);
            this.cube.display(); 
            this.scene.popMatrix(); 

           }
       }
        
    }
    updateBuffers() {
        
    }
    
}