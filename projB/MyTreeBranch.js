/**
 * MyTreeBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeBranch extends CGFobject {
	constructor(scene,x,y,z,ang) {
		super(scene);
		this.initBuffers();

		this.x = x; 
		this.y=y; 
		this.z=z; 
		this.ang = ang;
		this.caught = false; 
		this.inNest = false; 
		
		this.branch = new MyCylinder(this.scene,10,1);

        this.woodTexture = new CGFtexture(this.scene, "images/wood.png");
		this.woodMaterial = new CGFappearance(this.scene);
		this.woodMaterial.setAmbient(1,1,1,1);
		this.woodMaterial.setDiffuse(0.8,0.4,0,1);
		this.woodMaterial.setDiffuse(0.4,0.2,0,1);
        this.woodMaterial.setShininess(10.0);
        this.woodMaterial.setTexture(this.woodTexture);
	}
	display(){
		if(!this.inNest){
			this.scene.pushMatrix();
			this.scene.translate(this.x,this.y,this.z); //for some reason is in -30 not -15this.translate(3,0,-15); //for some reason is in -30 not -15
			this.scene.rotate(this.ang,0,1,0);
			this.scene.translate(.75,0,0,)
			this.scene.scale(3/2,1/8,1/8);
			this.scene.rotate(Math.PI/2,0,0,1);
			this.woodMaterial.apply();
			this.branch.display();
			this.scene.popMatrix();
		}
		if(this.inNest){
			this.scene.pushMatrix();
			this.scene.translate(0,1,0); //for some reason is in -30 not -15this.translate(3,0,-15); //for some reason is in -30 not -15
			this.scene.rotate(this.ang,0,1,0);
			this.scene.translate(.75,0,0,)
			this.scene.scale(3/2,1/8,1/8);
			this.scene.rotate(Math.PI/2,0,0,1);
			this.woodMaterial.apply();
			this.branch.display();
			this.scene.popMatrix();
		}
	}
	
	updateBuffers() {

	}

}