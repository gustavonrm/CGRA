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

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
<<<<<<< HEAD

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayTriangle').name('Display Traingle');
        this.gui.add(this.scene, 'displaySquare').name('Display Square');
        this.gui.add(this.scene, 'displayParalelogramo').name('Display Palalelo');
=======
        
     
       //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        //Did on class 
        this.gui.add(this.scene, 'displayDiamond').name('Diamond');
        this.gui.add(this.scene, 'displayTriangle').name('Triangle');
        this.gui.add(this.scene, 'displayParallelogram').name('Parallelogram');
        this.gui.add(this.scene, 'displayTriangleSmall').name('Triangle small');
        this.gui.add(this.scene, 'displayTriangleBig').name('Triangle big');
>>>>>>> 43e17b155fba82094b6aab1d0e9604b73fb49a13

        return true;
    }
}