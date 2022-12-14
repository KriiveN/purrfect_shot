class SceneGame extends Phaser.Scene {
    constructor() {
        super({key:"SceneGame"});
    }
    
    /*init ()
    {
        //  Inject our CSS
        var element = document.createElement('style');

        document.head.appendChild(element);

        var sheet = element.sheet;

        var styles = '@font-face { font-family: "Bonzer"; src: url("assets/fonts/BonzerSanFrancisco.ttf") format("truetype"); }\n';
        
        sheet.insertRule(styles, 0);
    }*/
    init(data) {
        this.config = data;
        //this.config.setDataEnabled();
        console.log(this.config);
        //this.config.data.set('Escenario', data.Escenario);
        //this.config.data.set('Rondas', data.Rondas);
        //console.log(this.config.data.get('Escenario'));
    }
/************************************************************** P R E L O A D *****************************************************************/
    /*---------------------------------------------------------------------------------------------------------------------------------*/
   
    preload() {

        this.load.image('FondoGraneroDia', 'assets/Fondos/granerodia.png');
        this.load.image('Marco', 'assets/Menus/MenusJuego/inGame/marco2.png');
        this.load.image('Manecilla', 'assets/Menus/MenusJuego/inGame/manecilla.png');
        this.load.spritesheet('Diana', 'assets/Menus/MenusJuego/inGame/Diana.png', {frameWidth: 175, frameHeight: 300});
        
        this.load.image('Bueno1', 'assets/Personajes reescalados/Bueno1.png');
        this.load.image('Bueno1b', 'assets/Personajes reescalados/Bueno1b.png');
        this.load.image('Bueno2', 'assets/Personajes reescalados/Bueno2.png');
        this.load.image('Bueno2b', 'assets/Personajes reescalados/Bueno2b.png');
        this.load.image('Bueno3', 'assets/Personajes reescalados/Bueno3.png');
        this.load.image('Bueno3b', 'assets/Personajes reescalados/Bueno3b.png');
        
        this.load.image('Malo1', 'assets/Personajes reescalados/Malo1.png');
        this.load.image('Malo1b', 'assets/Personajes reescalados/Malo1b.png');
        this.load.image('Malo2', 'assets/Personajes reescalados/Malo2.png');
        this.load.image('Malo2b', 'assets/Personajes reescalados/Malo2b.png');
        this.load.image('Malo3', 'assets/Personajes reescalados/Malo3.png');
        this.load.image('Malo3b', 'assets/Personajes reescalados/Malo3b.png');
        this.load.image('Malo4', 'assets/Personajes reescalados/Malo4.png');
        this.load.image('Malo4b', 'assets/Personajes reescalados/Malo4b.png');
        
        this.load.image('Personaje1', 'assets/Personajes reescalados/BackGatoBlanco.png');
        this.load.image('Personaje2', 'assets/Personajes reescalados/BackGatoTricolor.png');
        this.load.image('Personaje3', 'assets/Personajes reescalados/BackGatoNegro.png');
        this.load.image('Personaje4', 'assets/Personajes reescalados/BackGatoNaranja.png');
        
        this.load.image('Hat1', 'assets/Personajes reescalados/Gorro Marron atras.png');
        this.load.image('Hat2', 'assets/Personajes reescalados/Gorro Beige atras.png');
        this.load.image('Hat3', 'assets/Personajes reescalados/Gorro Verde atras.png');
        this.load.image('Hat4', 'assets/Personajes reescalados/Gorro Gris atras.png');
        
        this.load.image('Scarf1', 'assets/Personajes reescalados/Panuelo Azul atras.png');
        this.load.image('Scarf2', 'assets/Personajes reescalados/Panuelo Violeta atras.png');
        this.load.image('Scarf3', 'assets/Personajes reescalados/Panuelo Rojo atras.png');
        this.load.image('Scarf4', 'assets/Personajes reescalados/Panuelo Verde atras.png');
        
        this.load.image('Mirilla1', 'assets/Menus/MenusJuego/inGame/MirillaJ1.png');
        this.load.image('Mirilla2', 'assets/Menus/MenusJuego/inGame/MirillaJ2.png');
        this.load.image('Bala', 'assets/Menus/MenusJuego/balaDer.png');
        this.load.image('Power', 'assets/Menus/MenusJuego/inGame/power.png');
        this.load.image('PU1', 'assets/Menus/MenusJuego/inGame/PU1.png');
        this.load.image('PU2', 'assets/Menus/MenusJuego/inGame/PU2.png');
        this.load.image('PU3', 'assets/Menus/MenusJuego/inGame/PU3.png');
        
        //this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
        this.load.bitmapFont('Bonzer', 'assets/fonts/BonzerSanFrancisco.png', 'assets/fonts/BonzerSanFrancisco.xml');
        this.load.bitmapFont('YW', 'assets/fonts/YatsuranoWestern.png', 'assets/fonts/YatsuranoWestern.xml');
        
        this.load.audio('Bang', ['assets/sounds/bang.ogg', 'assets/sounds/bang.mp3']);
        this.load.audio('Empty', ['assets/sounds/empty.ogg', 'assets/sounds/empty.mp3']);
        this.load.audio('Reload', ['assets/sounds/reload.ogg', 'assets/sounds/reload.mp3']);

    }
    
/*************************************************************** C R E A T E ******************************************************************/
    /*---------------------------------------------------------------------------------------------------------------------------------*/
   
    create() {            
        
        this.totalBulletsJ1 = 0;
        this.totalBulletsJ2 = 0;
        this.totalEnemiesJ1 = 0;
        this.totalEnemiesJ2 = 0;
        this.totalAlliesJ1 = 0;
        this.totalAlliesJ2 = 0;
        this.totalPowerJ1 = 0;
        this.totalPowerJ2 = 0;

        this.fondoGraneroDia = this.add.image(540,375,'FondoGraneroDia');
        this.marco = this.add.image(540,375,'Marco');
        this.manecilla = this.add.image(540,69,'Manecilla');
        
        this.globalClock = this.time.addEvent({ delay: 60000, callback: this.endGame, callbackScope: this, paused: true }); // min
        
        /*var add = this.add;
        WebFont.load({
            custom: {
                families: [ 'Bonzer' ]
            },
            active: function ()
            {
                add.text(150, 350, 'Prueba', { fontFamily: 'Bonzer', fontSize: 64, color: '#5656ee' });
            }
        });*/
        
    /*-----------------------------------------------------------------------------------------------------------------*/
        
        // Animaciones de las dianas
        this.anims.create({
            key: 'abajo',
            frames: this.anims.generateFrameNumbers('Diana', { start: 0, end: 23 }),
            frameRate: 24,
            repeat: 0
        });

        this.anims.create({
            key: 'arriba',
            frames: this.anims.generateFrameNumbers('Diana', { start: 24, end: 46 }),
            frameRate: 24,
            repeat: 0
        });
        
        // Grupo de 6 dianas
        this.dianas =  this.physics.add.group({
            key: 'Diana',
            repeat: 5,
            setXY: {x: 150, y: 550, stepX: 152}
        });
        
        // Hacer que las impares se muevan hacia arriba y cambiar las hitboxs
        var i=0;
        this.dianas.children.iterate(function(child){ // para todas las dianas
            if(i%2 == 1){
                child.y -= 100; // si es impar la subimos 100 px hacia arriba
            }
            child.body.setSize(95,125,false).setOffset(40,25); // cambiamos la hitbox
            
            child.anims.play('abajo', 'true'); // bajamos las dianas
            child.setDataEnabled();
            child.data.set('status', 0); //0 abajo, 1 arriba
            child.data.set('interactive', false);
            i++;
        });
        
        // Loop para comprobar qu?? dianas est??n tumbadas y hacerlas que suban
        this.loopDianas = this.time.addEvent({
            delay: 1000, // cada segundo
            callback: this.checkDianas,
            callbackScope: this,
            loop: true,
            paused: true
        });
        
    /*----------------------------------------------------------------------------------------------------------------------*/
        
        this.shooter1 = this.add.group();
        // skin jugador 1
        var skin1;
        if (this.config.Jugadores.Gato1 == 1) //Gato blanco
            skin1 = 'Personaje1';
        else if (this.config.Jugadores.Gato1 == 2) //Gato tricolor
            skin1 = 'Personaje2';
        else if (this.config.Jugadores.Gato1 == 3) //Gato tricolor
            skin1 = 'Personaje3';
        else if (this.config.Jugadores.Gato1 == 4)
            skin1 = 'Personaje4';
        else {
            skin1 = 'Personaje1';
        }
        
        this.shooter1.add(this.add.image(260, 730, skin1).setFlipX(true));
        
        // sombrero jugador 1
        var hat1;
        if(this.config.Jugadores.Sombrero1 == 1) //Gato blanco
            hat1 = 'Hat1';
        else if(this.config.Jugadores.Sombrero1 == 2) //Gato tricolor
            hat1 = 'Hat2';
        else if(this.config.Jugadores.Sombrero1 == 3) //Gato tricolor
            hat1 = 'Hat3';
        else if(this.config.Jugadores.Sombrero1 == 4)
            hat1 = 'Hat4';
        
        if(this.config.Jugadores.Sombrero1 != 0) //Gato blanco
            this.shooter1.add(this.add.image(260, 730, hat1).setFlipX(true));
        
        // pa??uelo jugador 1
        var scarf1;
        if(this.config.Jugadores.Panuelo1 == 1) //Gato blanco
            scarf1 = 'Scarf1';
        else if(this.config.Jugadores.Panuelo1 == 2) //Gato tricolor
            scarf1 = 'Scarf2';
        else if(this.config.Jugadores.Panuelo1 == 3) //Gato tricolor
            scarf1 = 'Scarf3';
        else if(this.config.Jugadores.Panuelo1 == 4)
            scarf1 = 'Scarf4';
        
        if(this.config.Jugadores.Panuelo1 != 0) //Gato blanco
            this.shooter1.add(this.add.image(260, 730, scarf1).setFlipX(true));
        
        
        
        this.shooter2 = this.add.group();
        // skin jugador 2
        var skin2;
        if (this.config.Jugadores.Gato2 == 1) //Gato blanco
            skin2 = 'Personaje1';
        else if (this.config.Jugadores.Gato2 == 2) //Gato tricolor
            skin2 = 'Personaje2';
        else if (this.config.Jugadores.Gato2 == 3) //Gato tricolor
            skin2 = 'Personaje3';
        else if (this.config.Jugadores.Gato2 == 4)
            skin2 = 'Personaje4';
        else
            skin2 = 'Personaje2';

        this.shooter2.add(this.add.image(820, 730, skin2));
        
        // sombrero jugador 2
        var hat2;
        if(this.config.Jugadores.Sombrero2 == 1) //marron 
            hat2 = 'Hat1';
        else if(this.config.Jugadores.Sombrero2 == 2) //beige
            hat2 = 'Hat2';
        else if(this.config.Jugadores.Sombrero2 == 3) //verde
            hat2 = 'Hat3';
        else if(this.config.Jugadores.Sombrero2 == 4) //gris
            hat2 = 'Hat4';
        
        if(this.config.Jugadores.Sombrero2 != 0) //sin sombrero
            this.shooter2.add(this.add.image(820, 730, hat2));
        
         // pa??uelo jugador 2
        var scarf2;
        if(this.config.Jugadores.Panuelo2 == 1) //azul
            scarf2 = 'Scarf1';
        else if(this.config.Jugadores.Panuelo2 == 2) //violeta
            scarf2 = 'Scarf2';
        else if(this.config.Jugadores.Panuelo2 == 3) //rojo
            scarf2 = 'Scarf3';
        else if(this.config.Jugadores.Panuelo2 == 4) // verde
            scarf2 = 'Scarf4';
        
        if(this.config.Jugadores.Panuelo2 != 0) //sin pa??uelo
            this.shooter1.add(this.add.image(820, 730, scarf2));
        
    /*--------------------------------------------------------------------------------------------------------------------*/
        
        // Creamos el grupo en donde se guardan los personajes que hay en pantalla
        this.cats = this.add.group();
        
        // Creamos el grupo en donde se guardan los regalos de los personajes buenos
        this.gifts = this.add.group();
        
    /*-----------------------------------------------------------------------------------------------------------------------*/
        
        // Mirilla Jugador 1 junto con sus arreglos de hitbox
        this.mirilla1 = this.physics.add.image(150,200,'Mirilla1');
        this.mirilla1.setCollideWorldBounds(true); // que no se salga de la pantalla
        this.mirilla1.body.setSize(10,10,true); // hitbox cuadrada centrada
        this.mirilla1.body.setCircle(5); // hitbox circular
        this.mirilla1.setDepth(50); // subimos la profundidad para que salga siempre por encima de los gatos de las dianas
        
        this.mirilla1.setDataEnabled();
        this.mirilla1.data.set('PU1', this.add.image(350, 75, 'PU1').setTint(0x333333));
        this.mirilla1.data.set('PU2', this.add.image(400, 75, 'PU2').setTint(0x333333));
        this.mirilla1.data.set('PU3', this.add.image(450, 75, 'PU3').setTint(0x333333));
        
        
        // Mirilla Jugador 2 junto con sus arreglos de hitbox
        this.mirilla2 = this.physics.add.image(930,200,'Mirilla2');
        this.mirilla2.setCollideWorldBounds(true);
        this.mirilla2.body.setSize(10,10,true);
        this.mirilla2.body.setCircle(5);
        this.mirilla2.setDepth(50);
        
        this.mirilla2.setDataEnabled();
        this.mirilla2.data.set('PU1', this.add.image(730, 75, 'PU1').setTint(0x333333));
        this.mirilla2.data.set('PU2', this.add.image(680, 75, 'PU2').setTint(0x333333));
        this.mirilla2.data.set('PU3', this.add.image(630, 75, 'PU3').setTint(0x333333));
        
        // Colisiones de las mirillas y las dianas
        this.physics.add.overlap(this.mirilla1, this.dianas, function(obj1, obj2){ // cuando hay overlap
            this.diana1 = obj2; // guardamos la ??ltima diana sobre la que ha estado el jugador
        }, null, this);
        
        this.physics.add.overlap(this.mirilla2, this.dianas, function(obj1, obj2){
            this.diana2 = obj2;
        }, null, this);
        
    /*-------------------------------------------------------------------------------------------------------------------*/
        
        // Puntuaciones
        this.scoreJ1 = 0;
        this.scoreJ2 = 0;
        this.scoreTextJ1 = this.add.bitmapText(100, 60, 'YW', 'Pts: 0', 30);
        this.scoreTextJ2 = this.add.bitmapText(880, 60, 'YW', 'Pts: 0', 30);
        
        // Balas
        this.bulletJ1 = 20;
        this.bulletJ2 = 20;
        this.bulletTextJ1 = this.add.bitmapText(63, 690, 'YW', this.bulletJ1, 40, 1).setTint(0x000000);
        this.bulletTextJ2 = this.add.bitmapText(995, 690, 'YW', this.bulletJ2, 40, 1).setTint(0x000000);
        
    /*---------------------------------------------------------------------------------------------------------------------*/
        
        // JUGADOR 1        
        this.key_W =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_F =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.key_C =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        
        var bang = this.sound.add('Bang');
        var empty = this.sound.add('Empty');
        this.input.keyboard.on('keydown_F', function(event){ // cada vez que se pulse F
            if(this.globalClock.paused == false && this.globalClock.hasDispatched == false){ //cuando est?? corriendo el tiempo
                if (this.mirilla1.data.get('infinite bullets') != true && this.bulletJ1 > 0){ // si el power up est?? desactivado y si hay balas en el cargador
                    this.bulletJ1 -=1 // dispares donde dispares se gasta una bala
                    this.bulletTextJ1.setText(this.bulletJ1);
                    bang.play();
                    this.totalBulletsJ1++;
                }
                else if(this.mirilla1.data.get('infinite bullets') == true){
                    bang.play();
                    this.totalBulletsJ1++;
                }
                else{
                    empty.play();
                }
            }
            else{
                empty.play();
            }
        }, this);
                
        // JUGADOR 2
        this.key_UP =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.key_LEFT =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.key_DOWN =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.key_RIGHT =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.key_HOME = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.HOME);
        this.key_END = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.END);
        
        this.input.keyboard.on('keydown_HOME', function(event){ // cada vez que se pulse INICIO
            if(this.globalClock.paused == false && this.globalClock.hasDispatched == false){ //cuando est?? corriendo el tiempo
                if (this.mirilla2.data.get('infinite bullets') != true && this.bulletJ2 > 0){ // si el power up est?? desactivado y si hay balas en el cargador
                    this.bulletJ2 -=1 // dispares donde dispares se gasta una bala
                    this.bulletTextJ2.setText(this.bulletJ2);
                    bang.play();
                    this.totalBulletsJ2++;
                }
                else if(this.mirilla2.data.get('infinite bullets') == true){
                    bang.play();
                    this.totalBulletsJ2++;
                }
                else{
                    empty.play();
                }
            }
            else{
                empty.play();
            }
        }, this);
        
        this.countDown = this.time.addEvent({ delay: 5000, callback: this.removeText, callbackScope: this });
        this.info = this.add.bitmapText(540, 200, 'YW', '', 70, 1).setOrigin(0.5);
    }
    
/*************************************************************** U P D A T E ******************************************************************/
    /*---------------------------------------------------------------------------------------------------------------------------------*/
    
    update(delta) {
        
        if(this.countDown.getOverallProgress() < 0.5) {
            this.info.setText('Preparados');
        }
        else if(this.countDown.getOverallProgress() < 0.8) {
            this.info.setText('Listos');
            this.startGame();
        }
        else if(this.countDown.getOverallProgress() < 1) {
            this.info.setText('????YA!!');
        }
        
        this.mirilla1.body.debugBodyColor = this.mirilla1.body.touching.none ? 0x00ffff : 0xffff00;
        this.displayClock();
                
        // JUGADOR 1
        if(this.key_W.isDown){
            this.mirilla1.setVelocityY(-350);
        }
        else if(this.key_S.isDown){
            this.mirilla1.setVelocityY(350);
        }
        else {
            this.mirilla1.setVelocityY(0);
        }
        
        if(this.key_A.isDown){
            this.mirilla1.setVelocityX(-350);
        }
        else if(this.key_D.isDown){
            this.mirilla1.setVelocityX(350);
        }
        else{
            this.mirilla1.setVelocityX(0);
        }
        
        
        // Si se pulsa la tecla de disparar y la mirilla est?? pasando por la diana o est?? dentro "parada"
        if(this.key_F.isDown && (!this.mirilla1.body.touching.none || this.mirilla1.body.embedded) && this.globalClock.hasDispatched == false){
            
            if (this.bulletJ1 > 0){ // si hay balas en el cargador

                if(this.diana1.data.get('status') == 1 && this.diana1.data.get('interactive') == true) { //si la diana est?? de pie y acepta disparos

                    this.diana1.anims.play('abajo', true); // la diana cae
                    this.diana1.data.set('status', 0);

                    this.removeDiana(this.mirilla1, this.diana1); // este jugador ha tirado esta diana
                    this.scoreTextJ1.setText("Pts:" + this.scoreJ1); // se actualiza la puntuaci??n
                }
            }
        }
        
        if(this.key_C.isDown && (!this.mirilla1.body.touching.none || this.mirilla1.body.embedded) && this.globalClock.hasDispatched == false){
            /*if(this.diana1.data.get('status') == 0) { //si la diana est?? tumbada
                this.diana1.anims.play('arriba', true);
                this.diana1.data.set('status', 1);
                this.time.delayedCall(1000, this.createDiana, [this.diana1], this);
                //this.createDiana(this.diana1);
            }*/
            
            if(this.diana1.data.get('status') == 1 && this.diana1.data.get('interactive') == true) { //si la diana est?? de pie y acepta interacci??n

                    this.acceptGift(this.mirilla1, this.diana1); // comprobar si hay regalo que recoger
                }
        }
        
        
        // JUGADOR 2
        if(this.key_UP.isDown){
            this.mirilla2.setVelocityY(-350);
        }
        else if(this.key_DOWN.isDown){
            this.mirilla2.setVelocityY(350);
        }
        else {
            this.mirilla2.setVelocityY(0);
        }
        
        if(this.key_LEFT.isDown){
            this.mirilla2.setVelocityX(-350);
        }
        else if(this.key_RIGHT.isDown){
            this.mirilla2.setVelocityX(350);
        }
        else{
            this.mirilla2.setVelocityX(0);
        }
        
        
        if(this.key_HOME.isDown && (!this.mirilla2.body.touching.none || this.mirilla2.body.embedded) && this.globalClock.hasDispatched == false){
            
            if (this.bulletJ2 > 0){ // si hay balas en el cargador
                
                if(this.diana2.data.get('status') == 1 && this.diana2.data.get('interactive') == true) { //si la diana est?? de pie y acepta disparos

                    this.diana2.anims.play('abajo', true); // la diana cae
                    this.diana2.data.set('status', 0);

                    this.removeDiana(this.mirilla2, this.diana2); // este jugador ha tirado esta diana
                    this.scoreTextJ2.setText("Pts:" + this.scoreJ2); // se actualiza la puntuaci??n

                }
            }
        }
        
        if(this.key_END.isDown && (!this.mirilla2.body.touching.none || this.mirilla2.body.embedded) && this.globalClock.hasDispatched == false){
            /*if(this.diana2.data.get('status') == 0) { //si la diana est?? tumbada
                this.diana2.anims.play('arriba', true);
                this.diana2.data.set('status', 1);
            }*/
            
            if(this.diana2.data.get('status') == 1 && this.diana2.data.get('interactive') == true) { //si la diana est?? de pie y acepta interacci??n

                    this.acceptGift(this.mirilla2, this.diana2); // comprobar si hay regalo que recoger
                }
        }
        
    }
    
/******************************************************** C R E A T E   D I A N A *************************************************************/
    /*--------------------------------------------------------------------------------------------------------------------------------*/
    
    createDiana(objetivo){ // crea el gato que va a aparecer en la diana objetivo
        //65 por encima
        //this.time.addEvent({delay: 10000});
        
        var gato; // gato que se va a crear
        var tiempo; // el tiempo que va a estar esta diana subida
        
        var tipo = Phaser.Math.Between(1, 10); // bueno o malo?
        
        if(tipo<=4) { //30% de posibilidades de bueno
            var bueno = Phaser.Math.Between(1, 6); // cual de todos los buenos?
            var regalo = Phaser.Math.Between(0,2); // el gato trae regalo? 0 no, 1 balas, 2 power-up
            
            if(bueno <= 1){ // beb?? 1
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Bueno1');
                gato.setDataEnabled();
                gato.data.set('type', 'baby');
                gato.data.set('points', -5);
                
                //this.cats.add(gato);
                
                tiempo = 7000;
            }
            else if(bueno > 1 && bueno <= 2){ // beb?? 2
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Bueno1b');
                gato.setDataEnabled();
                gato.data.set('type', 'baby');
                gato.data.set('points', -5);
                
                //this.cats.add(gato);
                
                tiempo = 7000;
            }
            else if(bueno > 2 && bueno <= 3){ // civil 1
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Bueno2');
                gato.setDataEnabled();
                gato.data.set('type', 'civil');
                gato.data.set('points', -10);
                
                //this.cats.add(gato);
                
                tiempo = 6000;
            }
            else if(bueno > 3 && bueno <= 4){ // civil 2
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Bueno2b');
                gato.setDataEnabled();
                gato.data.set('type', 'civil');
                gato.data.set('points', -10);
                
                //this.cats.add(gato);
                
                tiempo = 6000;
            }
            else if(bueno > 4 && bueno <= 5){ // m??dico 1
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Bueno3');
                gato.setDataEnabled();
                gato.data.set('type', 'doctor');
                gato.data.set('points', -50);
                
                //this.cats.add(gato);
                
                tiempo = 4000;
            }
            else if(bueno > 5 && bueno <= 6){ // m??dico 2
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Bueno3b');
                gato.setDataEnabled();
                gato.data.set('type', 'doctor');
                gato.data.set('points', -50);
                
                //this.cats.add(gato);
                
                tiempo = 4000;
            }
            
            // REGALOS
            
            if(regalo == 1){ // el gato trae balas
                var numBalas = Phaser.Math.Between(1,5); // cuantas balas da el gato bueno?
                var balas = this.add.image(objetivo.x, objetivo.y + 5, 'Bala');
                balas.setDataEnabled();
                balas.data.set('bullets', numBalas);
                gato.data.set('gifts', balas);
            }
            else if(regalo == 2){ // el gato trae un power-up
                var numPower = Phaser.Math.Between(1,3); // qu?? power-up da? 1. Balas inf, 2. Diplomacia, 3. Justicia
                var poder = this.add.image(objetivo.x, objetivo.y + 5, 'Power');
                poder.setDataEnabled();
                poder.data.set('power up', numPower);
                gato.data.set('gifts', poder);
            }
        }
        
        else { // 70% posibilidades de malo
            var malo = Phaser.Math.Between(1, 8); // qu?? malo de todos?
            
            if(malo <= 1){ //  1
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Malo1');
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 5);
                
                //this.cats.add(gato);
                
                tiempo = 7000;
            }
            else if(malo <= 2){ //  2
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Malo1b');
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 5);
                
                //this.cats.add(gato);
                
                tiempo = 7000;
            }
            else if(malo <= 3){ //  1
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Malo2');
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 10);
                
                //this.cats.add(gato);
                
                tiempo = 6000;
            }
            else if(malo <= 4){ //  2
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Malo2b');
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 10);
                
                //this.cats.add(gato);
                
                tiempo = 6000;
            }
            else if(malo <= 5){ //  1
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Malo3');
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 20);
                
                //this.cats.add(gato);
                
                tiempo = 5000;
            }
            else if(malo <= 6){ //  2
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Malo3b');
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 20);
                
                //this.cats.add(gato);
                
                tiempo = 5000;
            }
            else if(malo <= 7){ //  1
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Malo4');
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 50);
                
                //this.cats.add(gato);
                
                tiempo = 4000;
            }
            else if(malo <= 8){ //  2
                gato = this.add.image(objetivo.x, (objetivo.y -65), 'Malo4b');
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 50);
                
                //this.cats.add(gato);
                
                tiempo = 4000;
            }
        }
        
        var timer = this.time.delayedCall(tiempo, this.removeDiana, [null, objetivo], this);
        gato.data.set('timer', timer); // asociamos el timer al gato creado para saber cuanto esperar si no se le dispara
        this.cats.add(gato);
        objetivo.data.set('interactive', true);
        
    }
    
/******************************************************** R E M O V E   D I A N A *************************************************************/
    /*--------------------------------------------------------------------------------------------------------------------------------*/
    
    removeDiana(jugador, objetivo){ // eliminar al gato y bajar la diana
        
        if(objetivo.data.get('status') == 1){ // si se ha llamado a la funci??n desde el temporizador la diana est?? subida, si se ha disparado ya est?? bajada
            objetivo.anims.play('abajo', true);
            objetivo.data.set('status', 0);
        }
        
        var gato;
        this.cats.children.iterate(function(child){ // de todos los gatos de la escena
            if (child.x == objetivo.x && child.y == objetivo.y - 65) // sacamos el que se encuentra en la posici??n de la diana que se est?? bajando
                gato = child;
        });
        
        var timer = gato.data.get('timer'); // sacamos el temporizador creado para ese gato
        timer.remove(false); // borramos el temporizador para que no se llame a la funci??n otra vez
        
        var puntos = gato.data.get('points');
        
        if(jugador != null){ // si es un jugador quien tira la diana leemos si tiene algun power up
            console.log(jugador.data.get('diplomacy'))
            if(jugador.data.get('diplomacy') == true){ // si la diplomacia est?? activada
                if(puntos < 0) // todos los puntos negativos
                    puntos = 0;   // no se suman
            }
            if(jugador.data.get('justice') == true){ // si la justicia est?? activada
                if(puntos > 0) // todos los puntos positivos
                    puntos = Phaser.Math.CeilTo(puntos * 1.2); // se le suma el 20%
            }
        }
        
        if(jugador == this.mirilla1){ // si es el J1 el que dispara
            this.scoreJ1 += puntos; // se le suman sus puntos
            
            if (puntos > 0) {
                // color de la puntuaci??n
                this.points1 = this.add.bitmapText(130, 90, 'YW', '+' + puntos, 30, 1).setTint(0x95ff00);
                this.totalEnemiesJ1++;
            }
            else {
                this.points1 = this.add.bitmapText(130, 90, 'YW', puntos, 30, 1).setTint(0xff0000);
                this.totalAlliesJ1++;
            }
                
            
            this.time.delayedCall(600, this.removePoints, [this.points1], this);
        }
        
        else if(jugador == this.mirilla2){ // si es el J2 el que dispara
            this.scoreJ2 += puntos;
            
            if (puntos > 0) {
                this.points2 = this.add.bitmapText(900, 90, 'YW', '+' + puntos, 30, 1).setTint(0x95ff00);
                this.totalEnemiesJ2++;
            }

            else {
                this.points2 = this.add.bitmapText(900, 90, 'YW', puntos, 30, 1).setTint(0xff0000);
                this.totalAlliesJ2++;
            }
                
            
            this.time.delayedCall(600, this.removePoints, [this.points2], this);
        }
            
        if(gato.data.get('gifts') != undefined){ // si el gato viene con regalo
            gato.data.get('gifts').destroy(); // se elimina a la vez que el gato
        }
        
        this.cats.remove(gato, true, true);
        objetivo.data.set('interactive', false);
        
        //this.time.delayedCall(Phaser.Math.Between(2000, 7000), this.createDiana, [objetivo], this);
    }
    
/********************************************************* A C C E P T   G I F T **************************************************************/
    /*--------------------------------------------------------------------------------------------------------------------------------*/
    
    acceptGift(jugador, objetivo){ // se comprueba si el gato lleva un regalo y se le da al jugador
        
        var reload = this.sound.add('Reload');
        var gato;
        this.cats.children.iterate(function(child){ // de todos los gatos de la escena
            if (child.x == objetivo.x && child.y == objetivo.y - 65) // sacamos el que se encuentra en la posici??n de la diana que se est?? bajando
                gato = child;
        });
        
        if(gato.data.get('gifts') != undefined){ // si el gato viene con regalo
            
            objetivo.anims.play('abajo', true); // tiramos la diana
            objetivo.data.set('status', 0);
            objetivo.data.set('interactive', false);
            
            var timer = gato.data.get('timer'); // sacamos el temporizador creado para ese gato
            timer.remove(false); // borramos el temporizador para que no se llame a la funci??n remove
            
            var regalo = gato.data.get('gifts'); // recuperamos el regalo que trae el gato
            
            if(regalo.data.get('bullets') != undefined){ // si son balas
                if(jugador == this.mirilla1){ // si lo recoge el jugador 1
                    this.bulletJ1 += regalo.data.get('bullets'); // se le suman las balas al cargador
                    this.bulletTextJ1.setText(this.bulletJ1);
                }
                else {
                    this.bulletJ2 += regalo.data.get('bullets'); // se le suman las balas al cargador
                    this.bulletTextJ2.setText(this.bulletJ2);
                }
                reload.play();
            }
            else if(regalo.data.get('power up') != undefined){ // si es un power-up
                var tipo = regalo.data.get('power up');
                if(tipo == 1){ // si son balas infinitas
                    if(jugador.data.get('infinite bullets') != true){ // si ya tienes el power up activado no se reactiva
                        jugador.data.set('infinite bullets', true);
                        jugador.data.set('PU1', jugador.data.get('PU1').clearTint());
                        this.time.delayedCall(8000, this.powerDown, [jugador, 'infinite bullets', 'PU1'], this);
                    }
                }
                else if(tipo == 2){ // si es diplomacia con los residentes
                    if(jugador.data.get('dimoplacy') != true){
                        jugador.data.set('diplomacy', true);
                        jugador.data.set('PU2', jugador.data.get('PU2').clearTint());
                        this.time.delayedCall(8000, this.powerDown, [jugador, 'diplomacy', 'PU2'], this);
                    }
                }
                else if(tipo == 3){ // si es aumento de puntuaci??n
                    if(jugador.data.get('justice') != true){
                        jugador.data.set('justice', true);
                        jugador.data.set('PU2', jugador.data.get('PU3').clearTint());
                        this.time.delayedCall(10000, this.powerDown, [jugador, 'justice', 'PU3'], this);
                    }
                }
                if (jugador == this.mirilla1) {
                    this.totalPowerJ1++;
                } else if (jugador == this.mirilla2) {
                    this.totalPowerJ2++;
                }
            }
            
            gato.data.get('gifts').destroy(); // se elimina el regalo
            this.cats.remove(gato, true, true);
        }
    }
    
/********************************************************* C H E C K   D I A N A S ************************************************************/
    /*--------------------------------------------------------------------------------------------------------------------------------*/
  
    checkDianas(){ // comprueba las dianas que est??n bajadas y llama a una funci??n que las levanta
        
        this.dianas.children.iterate(function(child){ // comprobar todas las dianas
            if(child.data.get('status') == 0){ // si est??n abajo
                child.data.set('status', 1); // las ponemos como que van a subir para que no entren de nuevo en este bucle
                this.time.delayedCall(Phaser.Math.Between(20, 50) * 100, this.dianasUp, [child], this); // se crea un gato para la diana entre 2 y 7 segundos despu??s
            }
        }, this);
    }
    
/*********************************************************** D I A N A S   U P ****************************************************************/
    /*--------------------------------------------------------------------------------------------------------------------------------*/
    
    dianasUp(diana) {  
        
        diana.anims.play('arriba', 'true');
        this.time.delayedCall(850, this.createDiana, [diana], this);
    }
    
/******************************************************* R E M O V E   P O I N T S ************************************************************/
    /*--------------------------------------------------------------------------------------------------------------------------------*/
    
    removePoints(puntos){ // borrar el texto de sumar o restar puntos al marcador
        puntos.destroy();
    }
    
/*********************************************************** P O W E R   D O W N **************************************************************/
    /*--------------------------------------------------------------------------------------------------------------------------------*/
    
    powerDown(jugador, poder, icono){ // se desactiva el poder
        jugador.data.set(poder, false);
        jugador.data.set(icono, jugador.data.get(icono).setTint(0x333333));
    }

/******************************************************* D I S P L A Y   C L O C K ************************************************************/
    /*--------------------------------------------------------------------------------------------------------------------------------*/
    
    displayClock(){
        var angulo = 360 * this.globalClock.getOverallProgress();
        
        this.manecilla.setAngle(angulo);
    }
    
/*********************************************************** S T A R T   G A M E **************************************************************/
    /*--------------------------------------------------------------------------------------------------------------------------------*/
        
    startGame(){
        this.globalClock.paused = false;
        this.loopDianas.paused = false;
        //this.info.setText('');
        //this.countDown.remove(false);
    }

    removeText() {
        this.info.setText('');
    }
/************************************************************* E N D   G A M E ****************************************************************/
    /*--------------------------------------------------------------------------------------------------------------------------------*/
    
    endGame(){
        
        this.info.setText('Fin de partida');
        
        //this.time.removeAllEvents();
        //console.log(this.time);

        this.loopDianas.remove(false);
        
        this.time.delayedCall(5000, this.pasarEscena, [], this);
        
        /*this.dianas.children.iterate(function(child){
            if(child.data.get('interactive') == true){
                this.time.delayedCall(3000, this.removeDiana, [null, child], this);
            }
        }, this);*/
        
    }
    pasarEscena() {
        this.scene.start('PantallaVicDerr', {
            Configuracion: this.config,
            PuntosJ1: this.scoreJ1,
            PuntosJ2: this.scoreJ2,
            BJ1: this.totalBulletsJ1,
            BJ2: this.totalBulletsJ2,
            EnemiesJ1: this.totalEnemiesJ1,
            EnemiesJ2: this.totalEnemiesJ2,
            AlliesJ1: this.totalAlliesJ1,
            AlliesJ2: this.totalAlliesJ2,
            PUJ1: this.totalPowerJ1,
            PUJ2: this.totalPowerJ2

        });
    }
}