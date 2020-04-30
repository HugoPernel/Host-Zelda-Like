    var player ;
    var cursors ;
    var laby;
    var collisionL;
    var collisionR;
    var collisionU;
    var collisionD;
    var vistesseX = 2;
    var vistesseY = 2;
    var collisionPorteH;
    var courage;
    var courageI;
    var pressF;




    class Scene2 extends Phaser.Scene {
      constructor() {
        super("deux");
      };


      init (){








      };

      preload (){

        this.load.image('laby', 'assets/Fond Labyrinthe Glauque.png');
        this.load.image('courage', 'assets/courage2.png');
        this.load.image('courageI', 'assets/courage2.png');

        this.load.image('collisionL', 'assets/collisionL.png');
        this.load.image('collisionR', 'assets/collisionR.png');
        this.load.image('collisionU', 'assets/collisionU.png');
        this.load.image('collisionD', 'assets/collisionD.png');
        this.load.image('collisionD', 'assets/collisionD.png');

        this.load.image('collisionPorte', 'assets/collisionPorte.png');

        this.load.spritesheet('perso','assets/joueurSPv2.png',
                { frameWidth: 50, frameHeight: 75 }
            );














      };

      create (){

        laby = this.add.image(400,950, "laby");

        courage = this.physics.add.image(400,1025, "courage");
        courageI = this.add.image(600,25, "courage");
        courageI.visible = false;

        collisionL = this.physics.add.image(-700,950, "collisionL");
        collisionL.visible = false;
        collisionR = this.physics.add.image(1500,950, "collisionR");
        collisionR.visible = false;
        collisionD = this.physics.add.image(500,1850, "collisionD");
        collisionD.visible = false;
        collisionU = this.physics.add.image(500,250, "collisionU");
        collisionU.visible = false;

        collisionPorteH = this.physics.add.image(400,275, "collisionPorte");
        collisionPorteH.visible = false;







        player = this.physics.add.sprite(400, 300, 'perso');
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'perso_left',
            frames: this.anims.generateFrameNumbers('perso', { start: 6, end: 7 }),
            frameRate: 7,
            repeat: -1
        });

        this.anims.create({
            key: 'perso_up',
            frames: this.anims.generateFrameNumbers('perso', { start: 3, end: 5 }),
            frameRate: 9,
            repeat: -1
        });

        this.anims.create({
            key: 'perso_right',
            frames: this.anims.generateFrameNumbers('perso', { start: 6, end: 7 }),
            frameRate: 7,
            repeat: -1
        });

        this.anims.create({
            key: 'perso_down',
            frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 2 }),
            frameRate: 9,
            repeat: -1
        });

        this.anims.create({
            key: 'stop',
            frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 0 }),
            frameRate: 1,

        });



        cursors = this.input.keyboard.createCursorKeys();
        pressF = this.input.keyboard.addKey('F');

        this.porteText = this.add.text(400,500, 'Sortir [f]', { fontSize: '25px', fill: 'red' });
        this.porteText.setOrigin(0.5);
        this.porteText.visible = false;
        this.courageText = this.add.text(400,500, 'Du courage et un Dash ?!', { fontSize: '25px', fill: 'red' });
        this.courageText.setOrigin(0.5);
        this.courageText.visible = false;

        this.physics.add.overlap(player, collisionL, this.bloqueL, null, this);
        this.physics.add.overlap(player, collisionR, this.bloqueR, null, this);
        this.physics.add.overlap(player, collisionD, this.bloqueD, null, this);
        this.physics.add.overlap(player, collisionU, this.bloqueU, null, this);

        this.physics.add.overlap(player, collisionPorteH, this.porteHaut, null, this);

        this.physics.add.overlap(player, courage, this.recupCourage, null, this);







      };

      update (){




        if(cursors.left.isDown && player.x >= 200){
          player.setFlipX(false);
          player.anims.play('perso_left', true);
          player.x -= vistesseX;

        }else if(cursors.left.isDown && player.x < 200){
          player.setFlipX(false);
          player.anims.play('perso_left', true);
          laby.x += vistesseX;
          collisionL.x += vistesseX;
          collisionR.x += vistesseX;
          collisionD.x += vistesseX;
          collisionU.x += vistesseX;
          collisionPorteH.x += vistesseX;
          courage.x += vistesseX;





        }else if(cursors.right.isDown && player.x <= 600){
          player.setFlipX(true);
          player.anims.play('perso_right', true);
          player.x += vistesseX;

        }else if(cursors.right.isDown && player.x > 600){
          player.setFlipX(true);
          player.anims.play('perso_right', true);
          laby.x -= vistesseX;
          collisionL.x -= vistesseX;
          collisionR.x -= vistesseX;
          collisionD.x -= vistesseX;
          collisionU.x -= vistesseX;
          collisionPorteH.x -= vistesseX;
          courage.x -= vistesseX;




        } else if(cursors.up.isDown && player.y >= 150){
          player.anims.play('perso_up', true);
          player.y -= vistesseY;

        }else if(cursors.up.isDown && player.y < 150){
          player.anims.play('perso_up', true);
          laby.y += vistesseY;
          collisionL.y += vistesseY;
          collisionR.y += vistesseY;
          collisionD.y += vistesseY;
          collisionU.y += vistesseY;
          collisionPorteH.y += vistesseY;
          courage.y += vistesseY;


        } else if(cursors.down.isDown && player.y <= 450){
          player.anims.play('perso_down', true);
          player.y += vistesseY;

        }else if(cursors.down.isDown && player.y > 450){
          player.anims.play('perso_down', true);
          laby.y -= vistesseY;
          collisionL.y -= vistesseY;
          collisionR.y -= vistesseY;
          collisionD.y -= vistesseY;
          collisionU.y -= vistesseY;
          collisionPorteH.y -= vistesseY;
          courage.y -= vistesseY;



        } else {
            player.anims.play('stop', true);
        }





      }

      bloqueL(player, collisionL){

        vistesseX = 0;
        if (cursors.right.isDown || pressF.isDown){
          vistesseX = 2;
        };

    }

      bloqueR(player, collisionR){

        vistesseX = 0;
        if (cursors.left.isDown || pressF.isDown){
          vistesseX = 2;
        };


      }
      bloqueD(player, collisionD){

        vistesseY = 0;
        if (cursors.up.isDown || pressF.isDown){
          vistesseY = 2;
        };

      }
      bloqueU(player, collisionU){

        vistesseY = 0;
        if (cursors.down.isDown || pressF.isDown){
          vistesseY = 2;
        };

    }
      porteHaut (player, collisionPorteH){
        this.porteText.visible = true;
        if(pressF.isDown){
          this.scene.start('trois');
        }
        else if (cursors.down.isDown || cursors.left.isDown || cursors.right.isDown){
          this.porteText.visible = false;
        }

      }

      recupCourage (player, courage){
        courage.disableBody(true, true);
        courageI.visible = true;
        this.time.addEvent({
      delay: 1000,
      callback: ()=>{
      this.courageText.visible = true;
      },
      loop: false
      });


      }








    };
