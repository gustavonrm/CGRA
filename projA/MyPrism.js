/**
* MyPrism
* @constructor
*/

class MyPrism extends CGFobject {
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

        var prismHeight = 1;
        
        var ang = 0;
        var delta = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            var xOne = Math.cos(ang);
            var zOne = - Math.sin(ang);
            var xTwo = Math.cos(ang + delta);
            var zTwo = - Math.sin(ang + delta);
            var xNorm = Math.cos(ang + delta / 2);
            var zNorm = - Math.sin(ang + delta / 2);
            this.vertices.push(xOne, 0 , zOne);
            this.vertices.push(xTwo, 0, zTwo);
            this.vertices.push(xTwo, prismHeight, zTwo);
            this.vertices.push(xOne, prismHeight, zOne);

            var normalOne= [
                xNorm,
                0,
                zNorm                
            ];

            var nOneSize=Math.sqrt(
                normalOne[0]*normalOne[0]+
                normalOne[1]*normalOne[1]+
                normalOne[2]*normalOne[2]
                );

            normalOne[0]/=nOneSize;
            normalOne[1]/=nOneSize;
            normalOne[2]/=nOneSize;           

            this.normals.push(...normalOne);
            this.normals.push(...normalOne);
            this.normals.push(...normalOne);
            this.normals.push(...normalOne);

            this.indices.push(4*i, (4*i+1) , (4*i+2) );
            this.indices.push(4*i, (4*i + 2), (4*i+3));

            ang+=delta;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}