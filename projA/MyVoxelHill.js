/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene,levels) {
        super(scene);

        this.cube = new MyUnitCubeQuad(this.scene);
     
        this.cube.initBuffers();

        this.initBuffers(); 
        var side=1; 
        for (var i=1; i<levels; i++){
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
       for(var i =0; i<){

       }
        
    }
    updateBuffers() {
        
    }
    
}