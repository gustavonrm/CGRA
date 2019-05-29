/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
	constructor(scene) {
        super(scene);

        this.lightningMaterial = new CGFappearance(this.scene);
		this.lightningMaterial.setAmbient(1,1,1,1);
        this.lightningMaterial.setDiffuse(0.9, 0.9, 0.01, 1);
		this.lightningMaterial.setShininess(10.0);

        this.init();
    }
    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyRectangle(this.scene,0.1, 1.0),
            "X": new MyRectangle(this.scene,0.1, 1.0)
        };
    }

    startAnimation(t){
        //this.iterate();
        this.startTime = t;
        this.depth = /*this.axiom.length*/0;
    }
    update(t){
        var diff = t - this.startTime;
        if (diff >= 1.2)
            this.depth = 0;
        else if (diff >= 1.0)
            this.depth = this.axiom.length;
        else this.depth = Number(diff * this.axiom.length);
        //this.depth = this.axiom.length;
    }

    display(){
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;
        var pushpopController = 0;

        // percorre a cadeia de caracteres
        for (i=0; i<this.depth; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;
                    
                    //TODO REEVER SENTIDO 
                case "\ ":
                    // ”rotação em sentido positivo sobre o eixo dos XX"
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;
                
                case "/":
                    // "rotação em sentido negativo sobre o eixo dos XX"
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;
                
                case "^":
                    // "rotação em sentido positivo sobre o eixo dos YY"
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;

                case "&":
                    // "rotação em sentido negativo sobre o eixo dos YY"
                    this.scene.rotate(-this.angle, 0, 1, 0);
                    break;
                    
                case "]":
                    // pop
                    pushpopController--;
                    this.scene.popMatrix();
                    break;

                case "[":
                    // push
                    pushpopController++;
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if ( primitive )
                    {
                        this.lightningMaterial.apply();
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }

        for (i = 0; i <= pushpopController; i++)
            this.scene.popMatrix();
        
        
    }
}