class PantallaVicDerr extends Phaser.Scene{
    constructor(){
        super({key:'SceneConf'})
    }

    preload(){
        this.load.image('FondoDesierto', 'assets/Fondos/desiertodia.png'),
            
        this.load.image('FondoNombres', 'assets/Menus/MenusJuego/personalizacion.png'),
            
        this.load.image('botOpciones', 'assets/Menus/MenusJuego/inGame/botEstadisticas.png');  
    
}
    create(){
        
        this.add.image(540, 375, 'FondoDesierto'),
        
        this.add.image(540, 375, 'FondoNombres'),
            
        this.boton1 = this.add.image(550,670, 'botOpciones')
        .setInteractive()
        .on('pointerover',()=>this.enterButtonHoverState())
        .on('pointerout', () => this.enterButtonRestState()),
        
        this.Creditos = this.add.text(380, 100, "CRÉDITOS", { font: "70px Comic Sans", fill: "#FFFFFF", align: "center" }),
            
        this.Daniel = this.add.text(310, 200, "Daniel Borrego Cruz", { font: "60px Comic Sans", fill: "#FFFFFF", align: "center" }),
     
        this.Alicia = this.add.text(260, 280, "Alicia Enríquez Martínez", { font: "60px Comic Sans", fill: "#FFFFFF", align: "center" }),
     
        this.Puri = this.add.text(185, 360, "Purificación Méndez Peñalver", { font: "60px Comic Sans", fill: "#FFFFFF", align: "center" }),
        
        this.Andrea = this.add.text(290, 440, "Andrea Gallardo Lasso ", { font: "60px Comic Sans", fill: "#FFFFFF", align: "center" }),
        
        this.Gema = this.add.text(300, 520, "Gema López-Pozuelo", { font: "60px Comic Sans", fill: "#FFFFFF", align: "center" }),
        
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