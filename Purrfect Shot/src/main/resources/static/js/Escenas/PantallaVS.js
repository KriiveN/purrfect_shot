class PantallaVS extends Phaser.Scene{
    constructor(){
        super({key:'PantallaVS'})
    }

    preload(){
        this.load.image('FondoDesierto', 'assets/Fondos/desiertodia.png'),
            
        this.load.image('FondoVS', 'assets/Menus/MenusJuego/inGame/vs.png'),
            
        this.load.image('botOpciones', 'assets/Menus/MenusJuego/inGame/botEstadisticas.png');  
    
}
    create(){
        
        this.add.image(540, 375, 'FondoDesierto'),
        
        this.add.image(540, 375, 'FondoVS'),
            
        this.boton1 = this.add.image(550,670, 'botOpciones')
        .setInteractive()
        .on('pointerover',()=>this.enterButtonHoverState())
        .on('pointerout', () => this.enterButtonRestState()),
        
        
        this.Atras = this.add.text(490, 635, "Atrás", { font: "60px Comic Sans", fill: "#000000", align: "center" });

      
    
}
    
enterButtonHoverState(){
this.boton1.setScale(1.1);
}
    
enterButtonRestState(){
this.boton1.setScale(1);
}
 
    update(){
    
}
}