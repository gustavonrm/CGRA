/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        this.gui.add(this.scene,'displayAxis').name("Display Axis");
        this.gui.add(this.scene,'displayTextures').name("Enable Textures");
        this.gui.add(this.scene, 'scaleFactor', 0.1, 10.0).name('Scale');

        this.gui.add(this.scene, 'selectedLight', this.scene.lightIDs).name('Select Light').onChange(this.scene.updateLights.bind(this.scene));


        return true;
    }
}