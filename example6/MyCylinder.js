/**
* MyCylinder
* @constructor
*/

class MyCylinder extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords=[];

        var cylinderHeight = 1;
        
        var ang = 0;
        var delta = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            var xOne = Math.cos(ang);
            var zOne = - Math.sin(ang);
            var xTwo = Math.cos(ang + delta);
            var zTwo = - Math.sin(ang + delta);

            this.vertices.push(xOne, 0 , zOne);
            this.vertices.push(xTwo, 0, zTwo);
            this.vertices.push(xTwo, cylinderHeight, zTwo);
            this.vertices.push(xOne, cylinderHeight, zOne);

            this.texCoords.push(0, 1);
            this.texCoords.push(1, 1);
            this.texCoords.push(0, 0);
            this.texCoords.push(1, 0);

            var normalOne= [
                xOne,
                0,
                zOne                
            ];

            var normalTwo= [
                xTwo,
                0,
                zTwo
            ];

            var nOneSize=Math.sqrt(
                normalOne[0]*normalOne[0]+
                normalOne[1]*normalOne[1]+
                normalOne[2]*normalOne[2]
                );

            normalOne[0]/=nOneSize;
            normalOne[1]/=nOneSize;
            normalOne[2]/=nOneSize;

            var nTwoSize=Math.sqrt(
                normalTwo[0]*normalTwo[0]+
                normalTwo[1]*normalTwo[1]+
                normalTwo[2]*normalTwo[2]
                );

            normalTwo[0]/=nTwoSize;
            normalTwo[1]/=nTwoSize;
            normalTwo[2]/=nTwoSize;

            this.normals.push(...normalOne);
            this.normals.push(...normalTwo);
            this.normals.push(...normalTwo);
            this.normals.push(...normalOne);

            this.indices.push(4*i, (4*i+1) , (4*i+2) );
            this.indices.push(4*i, (4*i + 2), (4*i+3));

            ang+=delta;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    updateTexCoord(coords){
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}