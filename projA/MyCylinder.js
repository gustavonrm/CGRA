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

        var ang = 0;
        var delta = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            var x = Math.cos(ang);
            var z = - Math.sin(ang);

            this.vertices.push(x, 0 , z);

            var normal= [
                
            ];

            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;


            this.indices.push(3*i, (3*i+1) , (3*i+2) );
            ang+=alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}