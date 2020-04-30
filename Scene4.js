var player ;
var cursors ;
var dashBB;
var collisionL;
var collisionR;
var collisionU;
var collisionD;
var vistesseX = 2;
var vistesseY = 2;
var vistesseD = 5;

var bb;
var bb2;
var bb3;
var bb4;
var detectB;
var detectB2;
var detectH3;
var detectB4;

var missileA;

var collisionPorteG;

var pressF;
var pressD;
var pressS;
var pressZ;
var pressQ;

var missile;

var courageI;

var dScore = 100;

var dash = 200;

var scoreText = null;

var objectif = 0;

class Scene4 extends Phaser.Scene {
  constructor() {
    super("quatre");
    }





      init (){








      };

      preload (){

        this.load.image('dashBB', 'assets/Fond dash bebe glauque.png');

        this.load.image('detectB', 'assets/detectB.png');

        this.load.spritesheet('missile','assets/missileSP glauque.png',
                { frameWidth: 25, frameHeight: 25 }
            );



        this.load.image('detectBH', 'assets/detectBH.png');

        this.load.image('courage', 'assets/courage2.png');

        this.load.image('collisionL', 'assets/collisionL.png');
        this.load.image('collisionR', 'assets/collisionR.png');
        this.load.image('collisionU', 'assets/collisionU.png');
        this.load.image('collisionD', 'assets/collisionD.png');

        this.load.image('collisionPorte', 'assets/collisionPorte.png');

        this.load.spritesheet('bb','assets/ennemieSPv2.png',
                { frameWidth: 50, frameHeight: 50 }
            );
            this.load.spritesheet('bb','assets/ennemieSPv2.png',
                    { frameWidth: 50, frameHeight: 50 }
                );
                this.load.spritesheet('bb','assets/ennemieSPv2.png',
                        { frameWidth: 50, frameHeight: 50 }
                    );
                    this.load.spritesheet('bb','assets/ennemieSPv2.png',
                            { frameWidth: 50, frameHeight: 50 }
                        );

        this.load.spritesheet('perso','assets/joueurSPv2.png',
                { frameWidth: 50, frameHeight: 75 }
            );














      };

      create (){

        dashBB = this.add.image(1450,175, "dashBB");



        detectB = this.physics.add.image(625,275, "detectB");
        detectB.visible = false;
        detectB2 = this.physics.add.image(650,-200, "detectB");
        detectB2.visible = false;
        detectH3 = this.physics.add.image(1400,-25, "detectBH");
        detectH3.visible = false;
        detectB4 = this.physics.add.image(2350,850, "detectB");
        detectB4.visible = false;

        missile = this.physics.add.sprite(2500,150, "missile");
        this.anims.create({
            key: 'missile_play',
            frames: this.anims.generateFrameNumbers('missile', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: 0
        });

        collisionL = this.physics.add.image(350,225, "collisionL");
        collisionL.visible = false;
        collisionR = this.physics.add.image(2550,225, "collisionR");
        collisionR.visible = false;
        collisionD = this.physics.add.image(1550,1075, "collisionD");
        collisionD.visible = false;
        collisionU = this.physics.add.image(1550,-525, "collisionU");
        collisionU.visible = false;


        collisionPorteG = this.physics.add.image(375,300, "collisionPorte");
        collisionPorteG.visible = false;


        bb = this.physics.add.sprite(625, 500, 'bb');
        bb2 = this.physics.add.sprite(650, -450, 'bb');
        bb3 = this.physics.add.sprite(1600, -25, 'bb');
        bb4 = this.physics.add.sprite(2350, 600, 'bb');


        this.anims.create({
            key: 'bb_left',
            frames: this.anims.generateFrameNumbers('bb', { start: 0, end: 1 }),
            frameRate: 7,
            repeat: -1
        });

        this.anims.create({
            key: 'bb_up',
            frames: this.anims.generateFrameNumbers('bb', { start: 2, end: 3 }),
            frameRate: 9,
            repeat: -1
        });

        this.anims.create({
            key: 'bb_right',
            frames: this.anims.generateFrameNumbers('bb', { start: 0, end: 1 }),
            frameRate: 7,
            repeat: -1
        });

        this.anims.create({
            key: 'bb_down',
            frames: this.anims.generateFrameNumbers('bb', { start: 2, end: 3 }),
            frameRate: 9,
            repeat: -1
        });


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

        courageI = this.add.image(625,25, "courage");
        missileA = this.add.image(100,25, "missile");
        missileA.visible = false;

        cursors = this.input.keyboard.createCursorKeys();
        pressF = this.input.keyboard.addKey('F');
        pressD = this.input.keyboard.addKey('D');
        pressZ = this.input.keyboard.addKey('Z');
        pressS = this.input.keyboard.addKey('S');
        pressQ = this.input.keyboard.addKey('Q');

        this.scoreText = this.add.text(650, 5, '100', { fontSize: '50px', fill: 'red' });

        this.dashNiveau = this.add.text(375, 10, 'Dash Full', { fontSize: '40px', fill: 'red' });


        this.porteText = this.add.text(400,500, 'Sortir [F]', { fontSize: '25px', fill: 'red' });
        this.porteText.setOrigin(0.5);
        this.porteText.visible = false;

        this.GOText = this.add.text(400,300, 'Je ne suis pas assez courageux pour ça !', { fontSize: '30px', fill: 'red' });
        this.GOText.setOrigin(0.5);
        this.GOText.visible = false;

        this.prendreText = this.add.text(400,500, 'Prendre [F]', { fontSize: '25px', fill: 'red' });
        this.prendreText.setOrigin(0.5);
        this.prendreText.visible = false;

        this.physics.add.overlap(player, collisionL, this.bloqueL, null, this);
        this.physics.add.overlap(player, collisionR, this.bloqueR, null, this);
        this.physics.add.overlap(player, collisionD, this.bloqueD, null, this);
        this.physics.add.overlap(player, collisionU, this.bloqueU, null, this);


        this.physics.add.overlap(player, collisionPorteG, this.porteGauche, null, this);

        this.physics.add.overlap(player, detectB, this.bbD, null, this);
        this.physics.add.overlap(player, detectB2, this.bbD2, null, this);
        this.physics.add.overlap(player, detectH3, this.bbD3, null, this);
        this.physics.add.overlap(player, detectB4, this.bbD4, null, this);

        this.physics.add.overlap(player, bb, this.degatBB, null, this);
        this.physics.add.overlap(player, bb2, this.degatBB2, null, this);
        this.physics.add.overlap(player, bb3, this.degatBB3, null, this);
        this.physics.add.overlap(player, bb4,this.degatBB4, null, this);

        this.physics.add.overlap(player, missile,this.prendre, null, this);






      };

      update (){

        if (dScore <= 0){
          this.GOText.visible = true;
          this.time.addEvent({
      delay: 2500,
      callback: ()=>{
        this.scene.start('trois');
      },
      loop: false
    });
        }

        missile.anims.play('missile_play', true);

        if(cursors.left.isDown && player.x >= 200){
          player.setFlipX(false);
          player.anims.play('perso_left', true);
          player.x -= vistesseX;

        }  else if(pressQ.isDown && player.x >= 200 && dash >= 0){
            player.setFlipX(false);
            player.anims.play('perso_left', true);
            player.x -= vistesseD;

            dash -= 5;
            if(dash <= 0){
              this.dashNiveau.setText('Dash load');
              this.time.addEvent({
          delay: 500,
          callback: ()=>{
            dash = 200;
            this.dashNiveau.setText('Dash Full');
          },
          loop: false
        });


            }

        }else if(cursors.left.isDown && player.x < 200){
          player.setFlipX(false);
          player.anims.play('perso_left', true);
          dashBB.x += vistesseX;
          collisionL.x += vistesseX;
          collisionR.x += vistesseX;
          collisionD.x += vistesseX;
          collisionU.x += vistesseX;

          collisionPorteG.x += vistesseX;
          bb.x += vistesseX;
          bb2.x += vistesseX;
          bb3.x += vistesseX;
          bb4.x += vistesseX;
          detectB.x +=vistesseX;
          detectB2.x +=vistesseX;
          detectH3.x +=vistesseX;
          detectB4.x +=vistesseX;
          missile.x +=vistesseX;

        }else if(pressQ.isDown && player.x < 200 && dash >= 0){
          player.setFlipX(false);
          player.anims.play('perso_left', true);

          dash -= 5;
          dashBB.x += vistesseD;
          collisionL.x += vistesseD;
          collisionR.x += vistesseD;
          collisionD.x += vistesseD;
          collisionU.x += vistesseD;

          collisionPorteG.x += vistesseD;
          bb.x += vistesseD;
          bb2.x += vistesseD;
          bb3.x += vistesseD;
          bb4.x += vistesseD;
          detectB.x += vistesseD;
          detectB2.x += vistesseD;
          detectH3.x += vistesseD;
          detectB4.x += vistesseD;
          missile.x += vistesseD;
          if(dash <= 0){
            this.dashNiveau.setText('Dash load');
            this.time.addEvent({
        delay: 500,
        callback: ()=>{
          dash = 200;
          this.dashNiveau.setText('Dash Full');
        },
        loop: false
      });


          }




        }else if(cursors.right.isDown && player.x <= 600){
          player.setFlipX(true);
          player.anims.play('perso_right', true);
          player.x += vistesseX;

        }else if(pressD.isDown && player.x <= 600 && dash >= 0){
          player.setFlipX(true);
          player.anims.play('perso_right', true);
          player.x += vistesseD;

          dash -= 5;
          if(dash <= 0){
            this.dashNiveau.setText('Dash load');
            this.time.addEvent({
        delay: 500,
        callback: ()=>{
          dash = 200;
          this.dashNiveau.setText('Dash Full');
        },
        loop: false
      });


          }



        }else if(cursors.right.isDown && player.x > 600){
          player.setFlipX(true);
          player.anims.play('perso_right', true);
          dashBB.x -= vistesseX;
          collisionL.x -= vistesseX;
          collisionR.x -= vistesseX;
          collisionD.x -= vistesseX;
          collisionU.x -= vistesseX;

          collisionPorteG.x -= vistesseX;
          bb.x -= vistesseX;
          bb2.x -= vistesseX;
          bb3.x -= vistesseX;
          bb4.x -= vistesseX;
          detectB.x -= vistesseX;
          detectB2.x -= vistesseX;
          detectH3.x -= vistesseX;
          detectB4.x -= vistesseX;
          missile.x -= vistesseX;

        }else if(pressD.isDown && player.x > 600 && dash >= 0){
          player.setFlipX(true);
          player.anims.play('perso_right', true);
          dashBB.x -= vistesseD;
          collisionL.x -= vistesseD;
          collisionR.x -= vistesseD;
          collisionD.x -= vistesseD;
          collisionU.x -= vistesseD;

          collisionPorteG.x -= vistesseD;
          bb.x -= vistesseD;
          bb2.x -= vistesseD;
          bb3.x -= vistesseD;
          bb4.x -= vistesseD;
          detectB.x -= vistesseD;
          detectB2.x -= vistesseD;
          detectH3.x -= vistesseD;
          detectB4.x -= vistesseD;
          missile.x -= vistesseD;

          dash -= 5;
          if(dash <= 0){
            this.dashNiveau.setText('Dash load');
            this.time.addEvent({
        delay: 500,
        callback: ()=>{
          dash = 200;
          this.dashNiveau.setText('Dash Full');
        },
        loop: false
      });


          }

        } else if(cursors.up.isDown && player.y >= 150){
          player.anims.play('perso_up', true);
          player.y -= vistesseY;

        } else if(pressZ.isDown && player.y >= 150 && dash >= 0){
          player.anims.play('perso_up', true);
          player.y -= vistesseD;

          dash -= 5;
          if(dash <= 0){
            this.dashNiveau.setText('Dash load');
            this.time.addEvent({
        delay: 500,
        callback: ()=>{
          dash = 200;
          this.dashNiveau.setText('Dash Full');
        },
        loop: false
      });


          }

        }else if(cursors.up.isDown && player.y < 150){
          player.anims.play('perso_up', true);
          dashBB.y += vistesseY;
          collisionL.y += vistesseY;
          collisionR.y += vistesseY;
          collisionD.y += vistesseY;
          collisionU.y += vistesseY;

          collisionPorteG.y += vistesseY;
          bb.y += vistesseY;
          bb2.y += vistesseY;
          bb3.y += vistesseY;
          bb4.y += vistesseY;
          detectB.y += vistesseY;
          detectB2.y += vistesseY;
          detectH3.y += vistesseY;
          detectB4.y += vistesseY;
          missile.y += vistesseY;


        }else if(pressZ.isDown && player.y < 150 && dash >= 0){
          player.anims.play('perso_up', true);
          dashBB.y += vistesseD;
          collisionL.y += vistesseD;
          collisionR.y += vistesseD;
          collisionD.y += vistesseD;
          collisionU.y += vistesseD;

          collisionPorteG.y += vistesseD;
          bb.y += vistesseD;
          bb2.y += vistesseD;
          bb3.y += vistesseD;
          bb4.y += vistesseD;
          detectB.y += vistesseD;
          detectB2.y += vistesseD;
          detectH3.y += vistesseD;
          detectB4.y += vistesseD;
          missile.y += vistesseD;

          dash -= 5;
          if(dash <= 0){
            this.dashNiveau.setText('Dash load');
            this.time.addEvent({
        delay: 500,
        callback: ()=>{
          dash = 200;
          this.dashNiveau.setText('Dash Full');
        },
        loop: false
      });


          }

        } else if(cursors.down.isDown && player.y <= 450){
          player.anims.play('perso_down', true);
          player.y += vistesseY;

        } else if(pressS.isDown && player.y <= 450 && dash >= 0){
          player.anims.play('perso_down', true);
          player.y += vistesseD;

          dash -= 5;
          if(dash <= 0){
            this.dashNiveau.setText('Dash load');
            this.time.addEvent({
        delay: 500,
        callback: ()=>{
          dash = 200;
          this.dashNiveau.setText('Dash Full');
        },
        loop: false
      });


          }

        }else if(cursors.down.isDown && player.y > 450){
          player.anims.play('perso_down', true);
          dashBB.y -= vistesseY;
          collisionL.y -= vistesseY;
          collisionR.y -= vistesseY;
          collisionD.y -= vistesseY;
          collisionU.y -= vistesseY;

          collisionPorteG.y -= vistesseY;
          bb.y -= vistesseY;
          bb2.y -= vistesseY;
          bb3.y -= vistesseY;
          bb4.y -= vistesseY;
          detectB.y -= vistesseY;
          detectB2.y -= vistesseY;
          detectH3.y -= vistesseY;
          detectB4.y -= vistesseY;
          missile.y -= vistesseY;

        }else if(pressS.isDown && player.y > 450 && dash >= 0){
          player.anims.play('perso_down', true);
          dashBB.y -= vistesseD;
          collisionL.y -= vistesseD;
          collisionR.y -= vistesseD;
          collisionD.y -= vistesseD;
          collisionU.y -= vistesseD;

          collisionPorteG.y -= vistesseD;
          bb.y -= vistesseD;
          bb2.y -= vistesseD;
          bb3.y -= vistesseD;
          bb4.y -= vistesseD;
          detectB.y -= vistesseD;
          detectB2.y -= vistesseD;
          detectH3.y -= vistesseD;
          detectB4.y -= vistesseD;
          missile.y -= vistesseD;

          dash -= 5;
          if(dash <= 0){
            this.dashNiveau.setText('Dash load');
            this.time.addEvent({
        delay: 500,
        callback: ()=>{
          dash = 200;
          this.dashNiveau.setText('Dash Full');
        },
        loop: false
      });


          }

        } else {
            player.anims.play('stop', true);
        }





      }

      bloqueL(player, collisionL){

        vistesseX = 0;
        vistesseD = 0;
        if (cursors.right.isDown || pressF.isDown){
          vistesseX = 2;
          vistesseD = 5;
        };

    }

      bloqueR(player, collisionR){

        vistesseX = 0;
        vistesseD = 0;
        if (cursors.left.isDown || pressF.isDown){
          vistesseX = 2;
          vistesseD = 5;
        };


      }
      bloqueD(player, collisionD){

        vistesseY = 0;
        vistesseD = 0;
        if (cursors.up.isDown || pressF.isDown){
          vistesseY = 2;
          vistesseD = 5;
        };

      }
      bloqueU(player, collisionU){

        vistesseY = 0;
        vistesseD = 0;
        if (cursors.down.isDown || pressF.isDown){
          vistesseY = 2;
          vistesseD = 5;
        };

    }






      porteGauche (player, collisionPorteG){
        this.porteText.visible = true;
        if(pressF.isDown){
          this.scene.start('cinq');
        }
        else if (cursors.down.isDown || cursors.right.isDown || cursors.up.isDown){
          this.porteText.visible = false;
        };

      }

      bbD (player, detectB){
        bb.anims.play('bb_up', true);
        bb.y -= 6;
      }
      bbD2 (player, detectB2){
        bb2.anims.play('bb_up', true);
        bb2.y += 6;
      }
      bbD3 (player, detectH3){
        bb3.anims.play('bb_up', true);
        bb3.x -= 6;
      }
      bbD4 (player, detectB4){
        bb4.anims.play('bb_up', true);
        bb4.y += 6;
      }

      degatBB(player, bb){
        dScore = dScore - 10;
        bb.y += 100;
        this.scoreText.setText('' + dScore);
      }
      degatBB2(player, bb2){
        dScore = dScore - 10;
        bb2.y -= 100;
        this.scoreText.setText('' + dScore);
      }
      degatBB3(player, bb3){
        dScore = dScore - 10;
        bb3.x += 100;
        this.scoreText.setText('' + dScore);
      }
      degatBB4(player, bb4){
        dScore = dScore - 10;
        bb4.y -= 100;
        this.scoreText.setText('' + dScore);
      }
      prendre(player, missile){
        this.prendreText.visible = true;
        if (pressF.isDown){
          missile.disableBody(true,true);
          this.prendreText.visible = false;
          missileA.visible = true;
        }else if (cursors.down.isDown || cursors.right.isDown || cursors.left.isDown){
          this.prendreText.visible = false;
        };
      }







    };
