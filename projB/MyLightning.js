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

    startAnimation(t){
        this.startTime = t;
        this.depth = 0;
    }
    update(t){
        var diff = t - this.startTime;
        if (diff < 0.25)
            this.depth = 0;
        else if (diff < 0.5)
            this.depth = 1;
        else if (diff < 0.75)
            this.depth = 2;
        else this.depth = 3;
    }

    display(){
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;

        // percorre a cadeia de caracteres
        for (i=0; i<this.axiom.length; ++i){

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
                    this.scene.popMatrix();
                    break;

                case "[":
                    // push
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
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }
}