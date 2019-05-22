/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
	constructor(scene) {
        super(scene);

        this.init();
    }
    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyRectangle(this.scene),
            "X": new MyRectangle(this.scene)
        };
    }
}