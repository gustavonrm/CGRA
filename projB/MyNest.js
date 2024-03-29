/**    
* MyNest
* @constructor
* @param scene - Reference to MyScene object
*/

class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);
        this.stick = new MyCylinder(this.scene, 30, 1);
        this.nestmaterial = new CGFappearance(this.scene);
        this.nestTexture = new CGFtexture(this.scene, "images/nestTexture.jpg");
        this.initMaterial();
        this.initBuffers();    
        
        //test sphere
        this.Sphere = new MySemiSphere(this.scene);

        //textures

        //materials
        this.eggMaterial = new CGFappearance(this.scene);
        this.eggMaterial.setAmbient(1, 1, 1, 1);
        this.eggMaterial.setDiffuse(.99,.90,.79, 1);
        this.eggMaterial.setSpecular(.99,.90,.79, 1);
        this.eggMaterial.setShininess(10.0);

        this.woodMaterial = new CGFappearance(this.scene);
		this.woodMaterial.setAmbient(1,1,1,1);
		this.woodMaterial.setDiffuse(0.8,0.4,0,1);
		this.woodMaterial.setDiffuse(0.4,0.2,0,1);
		this.woodMaterial.setShininess(10.0);


    }
    enableNormalViz() {
        this.plane.enableNormalViz();
    }
    enableDisableViz() {
        this.plane.enableDisableViz();
    }
    initMaterial() {
		this.nestmaterial.setAmbient(0.3, 0.3, 0.3, 1);
		this.nestmaterial.setDiffuse(0.70, 0.4, 0.2, 1);
		this.nestmaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.nestmaterial.setShininess(120);
        this.nestmaterial.setTexture(this.nestTexture);
    }
    
    display() {

        //eggs
        //1
        this.scene.pushMatrix(); 
        this.scene.translate(0,.25,.35);
        this.scene.scale(.15,.15,.15);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.eggMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); 
        this.scene.translate(0,.25,.35);
        this.scene.scale(.15,.25,.15);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.eggMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();
//2
        this.scene.pushMatrix(); 
        this.scene.translate(.25,.25,.20);
        this.scene.scale(.15,.15,.15);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.eggMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); 
        this.scene.translate(.25,.25,.20);
        this.scene.scale(.15,.25,.15);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.eggMaterial.apply();
        this.Sphere.display();
        this.scene.popMatrix();

        var ang = 0;
        var i;
        for (i = 0; i < 16; i++) {
            this.scene.pushMatrix();
            this.scene.rotate(ang, 0, 1, 0);
            this.scene.rotate(-Math.PI / 2, 0, 0, 1);
            this.scene.translate(0, -0.5, 0);
            this.scene.scale(0.02, 1, 0.02);
            this.nestmaterial.apply();
            this.stick.display();
            this.scene.popMatrix();

            ang += Math.PI / 16;
        }

        var levelheight = 0;
        for (var j = 0; j < 5; j++) {
            for (i = 0; i < 16; i++) {
                this.scene.pushMatrix();
                this.scene.translate(0.5 * Math.cos(ang + Math.PI / 2), levelheight, -0.5 * Math.sin(ang + Math.PI / 2));
                this.scene.rotate(Math.PI/32, 0, 0, 1);
                this.scene.rotate(ang, 0, 1, 0);
                this.scene.rotate(-Math.PI / 2, 0, 0, 1);
                this.scene.translate(0, -0.25, 0);
                this.scene.scale(0.02, 0.5, 0.02);
                this.nestmaterial.apply();
                this.stick.display();
                this.scene.popMatrix();
                ang += Math.PI / 8;
            }
            levelheight += 0.05;
            ang += Math.PI / 21;
        }
        this.scene.setDefaultAppearance();
    }
    updateBuffers() {

    }
}