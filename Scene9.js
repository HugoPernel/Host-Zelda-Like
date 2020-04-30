var player ;
var cursors ;
var fondboss;
var collisionL;
var collisionR;
var collisionU;
var collisionD;

var missileA;

var vie = 100;

var vistesseX = 2;
var vistesseY = 2;
var vistesseD = 5;

var vistesseXm = 2;
var vistesseYm = 2;
var vistesseDm = 5;

var missile;
var missile1;
var missile2;
var missile3;
var missile4;
var missileJ;

var positionY1;
var positionX1;
var positionY11;
var positionX11;
var positionY2;
var positionX2;
var positionY12;
var positionX12;
var positionY3;
var positionX3;
var positionY13;
var positionX13;
var positionY4;
var positionX4;
var positionY14;
var positionX14;


var boss;


var positionY = 0;
var positionX = 0;
var positionY1 = 0;
var positionX1 = 0;

var positionXJ = 0;
var positionYJ = 0;
var positionXJ1 = 0;
var positionYJ1 = 0;

var collisionPorteD;

var pressF;
var pressD;
var pressS;
var pressZ;
var pressQ;
var pressSpace;

var courageI;

var dScore = 100;

var dboss1 = 0;
var dboss2 = 0;
var dboss3 = 0;
var dboss4 = 0;

var dash = 200;

var scoreText = null;



var tirDetectB;
var tirDetectG;
var tirDetectH;
var tirDetectD;

var detectH;
var detectG;
var detectB;
var detectD;

var pH;
var pB;
var pG;
var pD;

class Scene9 extends Phaser.Scene {
  constructor() {
    super("neuf");
    }







      init (){








      };

      preload (){

        this.load.image('fondboss', 'assets/Fond Boss Glauque.png');

        this.load.image('tirDetectB', 'assets/tirDetectB.png');
        this.load.image('tirDetectG', 'assets/tirDetectG.png');
        this.load.image('tirDetectD', 'assets/tirDetectD.png');
        this.load.image('tirDetectH', 'assets/tirDetectHH.png');
        this.load.image('detectH', 'assets/detectBH.png');
        this.load.image('detectHB', 'assets/detectB.png');

        this.load.image('pH', 'assets/PH.png');
        this.load.image('pD', 'assets/PD.png');
        this.load.image('pB', 'assets/PB.png');
        this.load.image('pG', 'assets/PG.png');



        this.load.image('collisionL', 'assets/collisionL.png');
        this.load.image('collisionR', 'assets/collisionR.png');
        this.load.image('collisionU', 'assets/collisionU.png');
        this.load.image('collisionD', 'assets/collisionD.png');

        this.load.image('collisionPorte', 'assets/collisionPorte.png');

        this.load.spritesheet('perso','assets/joueurSPv2.png',
                { frameWidth: 50, frameHeight: 75 }
            );

        this.load.image('courage', 'assets/courage2.png');

        this.load.spritesheet('boss','assets/BossSP.png',
                    { frameWidth: 150, frameHeight: 150 }
                );

        this.load.spritesheet('missile','assets/missileSP glauque.png',
                    { frameWidth: 25, frameHeight: 25 }
                );












      };

      create (){

        fondboss = this.add.image(375,-550, "fondboss");

        tirDetectB = this.physics.add.image(400,150, "tirDetectB");
        tirDetectB.visible = false;
        tirDetectG = this.physics.add.image(550,300, "tirDetectG");
        tirDetectG.visible = false;
        tirDetectH = this.physics.add.image(400,450, "tirDetectH");
        tirDetectH.visible = false;
        tirDetectD = this.physics.add.image(250,300, "tirDetectD");
        tirDetectD.visible = false;

        pH = this.physics.add.image(400,260, "pH");
        pH.visible = false;
        pD = this.physics.add.image(428,300, "pD");
        pD.visible = false;
        pB = this.physics.add.image(400,340, "pB");
        pB.visible = false;
        pG = this.physics.add.image(372,300, "pG");
        pG.visible = false;

        detectH = this.physics.add.image(400,50, "detectH");
        detectH.visible = false;
        detectG = this.physics.add.image(150,300, "detectHB");
        detectG.visible = false;
        detectB = this.physics.add.image(405,550, "detectH");
        detectB.visible = false;
        detectD = this.physics.add.image(650,305, "detectHB");
        detectD.visible = false;

        collisionL = this.physics.add.image(-725,-550, "collisionL");
        collisionL.visible = false;
        collisionR = this.physics.add.image(1475,-550, "collisionR");
        collisionR.visible = false;
        collisionD = this.physics.add.image(475,350, "collisionD");
        collisionD.visible = false;
        collisionU = this.physics.add.image(475,-1250, "collisionU");
        collisionU.visible = false;


        collisionPorteD = this.physics.add.image(400,325, "collisionPorte");
        collisionPorteD.visible = false;



        this.anims.create({
            key: 'boss_left',
            frames: this.anims.generateFrameNumbers('boss', { start: 6, end: 7 }),
            frameRate: 7,
            repeat: 0
        });

        this.anims.create({
            key: 'boss_up',
            frames: this.anims.generateFrameNumbers('boss', { start: 3, end: 5 }),
            frameRate: 9,
            repeat: 0
        });

        this.anims.create({
            key: 'boss_right',
            frames: this.anims.generateFrameNumbers('boss', { start: 6, end: 7 }),
            frameRate: 7,
            repeat: 0
        });

        this.anims.create({
            key: 'boss_down',
            frames: this.anims.generateFrameNumbers('boss', { start: 0, end: 2 }),
            frameRate: 9,
            repeat: 0
        });

        this.anims.create({
            key: 'boss_stop',
            frames: this.anims.generateFrameNumbers('boss', { start: 0, end: 0 }),
            frameRate: 1,

        });

        missile = this.physics.add.sprite(-200, 200, 'missile');
        missile.visible = false;



        missileJ = this.physics.add.sprite(400, 300, 'missile');
        missileJ.visible = false;


        this.anims.create({
            key: 'missile_left',
            frames: this.anims.generateFrameNumbers('missile', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: 0
        });

        this.anims.create({
            key: 'missile_up',
            frames: this.anims.generateFrameNumbers('missile', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: 0
        });

        this.anims.create({
            key: 'missile_right',
            frames: this.anims.generateFrameNumbers('missile', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: 0
        });

        this.anims.create({
            key: 'missile_down',
            frames: this.anims.generateFrameNumbers('missile', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: 0
        });

        courageI = this.add.image(600,25, "courage");

        boss = this.physics.add.sprite(400, -500, 'boss');

        missileA = this.physics.add.sprite(285,25, "missile");

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
        pressD = this.input.keyboard.addKey('D');
        pressZ = this.input.keyboard.addKey('Z');
        pressS = this.input.keyboard.addKey('S');
        pressQ = this.input.keyboard.addKey('Q');
        pressSpace = this.input.keyboard.addKey('SPACE');

        this.GOText = this.add.text(400,300, 'Je ne suis pas assez courageux pour ça !', { fontSize: '30px', fill: 'red' });
        this.GOText.setOrigin(0.5);
        this.GOText.visible = false;

        this.plusCText = this.add.text(400,300, 'La Hôte a été vaincue !' , { fontSize: '30px', fill: 'red' });
        this.plusCText.setOrigin(0.5);
        this.plusCText.visible = false;

        this.vieText = this.add.text(15,15, 'Hôte Santé:'+ vie, { fontSize: '30px', fill: 'red' });


        this.porteText = this.add.text(400,500, 'Sortir [F]', { fontSize: '25px', fill: 'red' });
        this.porteText.setOrigin(0.5);
        this.porteText.visible = false;

        this.scoreText = this.add.text(650, 5, '150', { fontSize: '50px', fill: 'red' });
        this.dashNiveau = this.add.text(300, 5, 'Dash Full', { fontSize: '50px', fill: 'red' });


        this.physics.add.overlap(pB, boss, this.degatbossB, null, this);
        this.physics.add.overlap(pH, boss, this.degatbossH, null, this);
        this.physics.add.overlap(pD, boss, this.degatbossD, null, this);
        this.physics.add.overlap(pG, boss, this.degatbossG, null, this);



        this.physics.add.overlap(player, collisionL, this.bloqueL, null, this);
        this.physics.add.overlap(player, collisionR, this.bloqueR, null, this);
        this.physics.add.overlap(player, collisionD, this.bloqueD, null, this);
        this.physics.add.overlap(player, collisionU, this.bloqueU, null, this);


        this.physics.add.overlap(player, collisionPorteD, this.porteDroite, null, this);

        this.physics.add.overlap(boss, tirDetectB, this.tir, null, this);
        this.physics.add.overlap(boss, tirDetectG, this.tirG, null, this);
        this.physics.add.overlap(boss, tirDetectD, this.tirD, null, this);
        this.physics.add.overlap(boss, tirDetectH, this.tirH, null, this);



        this.physics.add.overlap(missile, collisionU, this.touch, null, this);
        this.physics.add.overlap(missile, collisionD, this.touchD, null, this);
        this.physics.add.overlap(missile, collisionL, this.touchL, null, this);
        this.physics.add.overlap(missile, collisionR, this.touchR, null, this);



        this.physics.add.overlap(detectH, boss, this.agro, null, this);
        this.physics.add.overlap(detectG, boss, this.agro2, null, this);
        this.physics.add.overlap(detectB, boss, this.agro3, null, this);
        this.physics.add.overlap(detectD, boss, this.agro4, null, this);



        this.physics.add.overlap(player, missile, this.degatM, null, this);


        this.physics.add.overlap(boss, missileJ, this.degatMJ, null, this);


        this.physics.add.overlap(player, tirDetectB, this.tirJ, null, this);
        this.physics.add.overlap(missileJ, collisionL, this.touchJ, null, this);
        this.physics.add.overlap(player, tirDetectB, this.tirJD, null, this);
        this.physics.add.overlap(missileJ, collisionL, this.touchJD, null, this);
        this.physics.add.overlap(player, tirDetectB, this.tirJH, null, this);
        this.physics.add.overlap(missileJ, collisionL, this.touchJH, null, this);
        this.physics.add.overlap(player, tirDetectB, this.tirJB, null, this);
        this.physics.add.overlap(missileJ, collisionL, this.touchJB, null, this);






      };

      update (){

        missile.y -= positionY;
        missile.x -= positionX;
        missile.y += positionY1;
        missile.x += positionX1;



        missileJ.x -= positionXJ;
        missileJ.y -= positionYJ;
        missileJ.x += positionXJ1;
        missileJ.y += positionYJ1;




        if (dScore <= 0){
          this.GOText.visible = true;

          this.time.addEvent({
      delay: 2500,
      callback: ()=>{
        this.scene.start('huit');
        this.GOText.visible = false;
        dScore = 100;
      },
      loop: false
    });
        }


        if(cursors.left.isDown && player.x >= 200){
          player.setFlipX(false);
          player.anims.play('perso_left', true);
          player.x -= vistesseX;
          detectH.x -= vistesseX;
          detectG.x -= vistesseX;
          detectB.x -= vistesseX;
          detectD.x -= vistesseX;
          tirDetectB.x -= vistesseX;
          tirDetectG.x -= vistesseX;
          tirDetectH.x -= vistesseX;
          tirDetectD.x -= vistesseX;
          pH.x -= vistesseX;
          pD.x -= vistesseX;
          pB.x -= vistesseX;
          pG.x -= vistesseX;
          missileJ.x -= vistesseXm;
          missile.x -= vistesseXm;


          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }

        }  else if(pressQ.isDown && player.x >= 200 && dash >= 0){
            player.setFlipX(false);
            player.anims.play('perso_left', true);
            player.x -= vistesseD;
            detectH.x -= vistesseD;
            detectG.x -= vistesseD;
            detectB.x -= vistesseD;
            detectD.x -= vistesseD;
            tirDetectH.x -= vistesseD;
            tirDetectG.x -= vistesseD;
            tirDetectB.x -= vistesseD;
            tirDetectD.x -= vistesseD;
            pH.x -= vistesseD;
            pG.x -= vistesseD;
            pB.x -= vistesseD;
            pD.x -= vistesseD;
            missileJ.x -= vistesseDm;
            missile.x -= vistesseDm;


            if(this.tirJ || this.tirG){
              vistesseDm = 0;
              vistesseYm = 0;
              vistesseXm = 0;
            }else if(this.tirJD || this.tirD){
              vistesseDm = 0;
              vistesseYm = 0;
              vistesseXm = 0;
            }else if (this.tirJH || this.tirH){
              vistesseDm = 0;
              vistesseYm = 0;
              vistesseXm = 0;
            }else if (this.tirJB || this.tir){
              vistesseDm = 0;
              vistesseYm = 0;
              vistesseXm = 0;
            }

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
          fondboss.x += vistesseX;
          collisionL.x += vistesseX;
          collisionR.x += vistesseX;
          collisionD.x += vistesseX;
          collisionU.x += vistesseX;


          collisionPorteD.x += vistesseX;
          boss.x += vistesseX;


          missile.x += vistesseXm;
          missileJ.x += vistesseXm;


          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }

        }else if(pressQ.isDown && player.x < 200 && dash >= 0){
          player.setFlipX(false);
          player.anims.play('perso_left', true);

          dash -= 5;
          fondboss.x += vistesseD;
          collisionL.x += vistesseD;
          collisionR.x += vistesseD;
          collisionD.x += vistesseD;
          collisionU.x += vistesseD;


          collisionPorteD.x += vistesseD;
          boss.x += vistesseD;


          missile.x += vistesseDm;
          missileJ.x += vistesseDm;


          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }


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
          detectH.x += vistesseX;
          detectG.x += vistesseX;
          detectB.x += vistesseX;
          detectD.x += vistesseX;
          tirDetectH.x += vistesseX;
          tirDetectG.x += vistesseX;
          tirDetectB.x += vistesseX;
          tirDetectD.x += vistesseX;
          pH.x += vistesseX;
          pG.x += vistesseX;
          pB.x += vistesseX;
          pD.x += vistesseX;
          missileJ.x += vistesseXm;
          missile.x += vistesseXm;


          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }

        }else if(pressD.isDown && player.x <= 600 && dash >= 0){
          player.setFlipX(true);
          player.anims.play('perso_right', true);
          player.x += vistesseD;
          detectH.x += vistesseD;
          detectG.x += vistesseD;
          detectB.x += vistesseD;
          detectD.x += vistesseD;
          tirDetectH.x += vistesseD;
          tirDetectG.x += vistesseD;
          tirDetectB.x += vistesseD;
          tirDetectD.x += vistesseD;
          pH.x += vistesseD;
          pG.x += vistesseD;
          pB.x += vistesseD;
          pD.x += vistesseD;
          missileJ.x += vistesseDm;
          missile.x += vistesseDm;


          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }

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
          fondboss.x -= vistesseX;
          collisionL.x -= vistesseX;
          collisionR.x -= vistesseX;
          collisionD.x -= vistesseX;
          collisionU.x -= vistesseX;


          collisionPorteD.x -= vistesseX;
          boss.x -= vistesseX;


          missile.x -= vistesseXm;
          missileJ.x -= vistesseXm;


          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }

        }else if(pressD.isDown && player.x > 600 && dash >= 0){
          player.setFlipX(true);
          player.anims.play('perso_right', true);
          fondboss.x -= vistesseD;
          collisionL.x -= vistesseD;
          collisionR.x -= vistesseD;
          collisionD.x -= vistesseD;
          collisionU.x -= vistesseD;


          collisionPorteD.x -= vistesseD;
          boss.x -= vistesseD;


          missile.x -= vistesseDm;
          missileJ.x -= vistesseDm;


          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }

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
          detectH.y -= vistesseY;
          detectG.y -= vistesseY;
          detectB.y -= vistesseY;
          detectD.y -= vistesseY;
          tirDetectH.y -= vistesseY;
          tirDetectG.y -= vistesseY;
          tirDetectB.y -= vistesseY;
          tirDetectD.y -= vistesseY;
          pH.y -= vistesseY;
          pG.y -= vistesseY;
          pB.y -= vistesseY;
          pD.y -= vistesseY;
          missileJ.y -= vistesseYm;
          missile.y -= vistesseYm;


          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }

        } else if(pressZ.isDown && player.y >= 150 && dash >= 0){
          player.anims.play('perso_up', true);
          player.y -= vistesseD;
          detectH.y -= vistesseD;
          detectG.y -= vistesseD;
          detectB.y -= vistesseD;
          detectD.y -= vistesseD;
          tirDetectH.y -= vistesseD;
          tirDetectG.y -= vistesseD;
          tirDetectB.y -= vistesseD;
          tirDetectD.y -= vistesseD;
          pH.y -= vistesseD;
          pG.y -= vistesseD;
          pB.y -= vistesseD;
          pD.y -= vistesseD;
          missileJ.y -= vistesseDm;
          missile.y -= vistesseDm;


          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }

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
          fondboss.y += vistesseY;
          collisionL.y += vistesseY;
          collisionR.y += vistesseY;
          collisionD.y += vistesseY;
          collisionU.y += vistesseY;


          collisionPorteD.y += vistesseY;
          boss.y += vistesseY;


          missile.y += vistesseYm;
          missileJ.y += vistesseYm;


          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }


        }else if(pressZ.isDown && player.y < 150 && dash >= 0){
          player.anims.play('perso_up', true);
          fondboss.y += vistesseD;
          collisionL.y += vistesseD;
          collisionR.y += vistesseD;
          collisionD.y += vistesseD;
          collisionU.y += vistesseD;


          collisionPorteD.y += vistesseD;
          boss.y += vistesseD;


          missile.y += vistesseDm;

          missileJ.y += vistesseDm;

          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }

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
          detectH.y += vistesseY;
          detectG.y += vistesseY;
          detectB.y += vistesseY;
          detectD.y += vistesseY;
          tirDetectH.y += vistesseY;
          tirDetectG.y += vistesseY;
          tirDetectB.y += vistesseY;
          tirDetectD.y += vistesseY;
          pH.y += vistesseY;
          pG.y += vistesseY;
          pB.y += vistesseY;
          pD.y += vistesseY;
          missileJ.y += vistesseYm;
          missile.y += vistesseYm;

          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }

        } else if(pressS.isDown && player.y <= 450 && dash >= 0){
          player.anims.play('perso_down', true);
          player.y += vistesseD;
          detectH.y += vistesseD;
          detectG.y += vistesseD;
          detectB.y += vistesseD;
          detectD.y += vistesseD;
          tirDetectH.y += vistesseD;
          tirDetectG.y += vistesseD;
          tirDetectB.y += vistesseD;
          tirDetectD.y += vistesseD;
          pH.y += vistesseD;
          pG.y += vistesseD;
          pB.y += vistesseD;
          pD.y += vistesseD;
          missileJ.y += vistesseDm;
          missile.y += vistesseDm;


          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }

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
          fondboss.y -= vistesseY;
          collisionL.y -= vistesseY;
          collisionR.y -= vistesseY;
          collisionD.y -= vistesseY;
          collisionU.y -= vistesseY;


          collisionPorteD.y -= vistesseY;
          boss.y -= vistesseY;


          missile.y -= vistesseYm;
          missileJ.y -= vistesseYm;


          if(this.tirJ || this.tirG){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
            vistesseYm = 0;
            vistesseXm = 0;
          }


        }else if(pressS.isDown && player.y > 450 && dash >= 0){
          player.anims.play('perso_down', true);
          fondboss.y -= vistesseD;
          collisionL.y -= vistesseD;
          collisionR.y -= vistesseD;
          collisionD.y -= vistesseD;
          collisionU.y -= vistesseD;



          collisionPorteD.y -= vistesseD;
          boss.y -= vistesseD;


          missile.y -= vistesseDm;

          missileJ.y -= vistesseDm;

          if(this.tirJ || this.tirG){
            vistesseDm = 0;
          }else if(this.tirJD || this.tirD){
            vistesseDm = 0;
          }else if (this.tirJH || this.tirH){
            vistesseDm = 0;
          }else if (this.tirJB || this.tir){
            vistesseDm = 0;
          }


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






      porteDroite (player, collisionPorteD){
        this.porteText.visible = true;
        if(pressF.isDown){
          this.scene.start('six');
        }
        else if (cursors.down.isDown || cursors.left.isDown || cursors.up.isDown){
          this.porteText.visible = false;
        }

      }

      degatbossB(pB, boss){

        dScore = dScore - 10;
        boss.y += 100;

        this.scoreText.setText('' + dScore);

      }

      degatbossH(pH, boss){

        dScore = dScore - 10;
        boss.y -= 100;

        this.scoreText.setText('' + dScore);

      }

      degatbossD(pD, boss){

        dScore = dScore - 10;
        boss.x += 100;

        this.scoreText.setText('' + dScore);

      }

      degatbossG(pG, boss){

        dScore = dScore - 10;
        boss.x -= 100;

        this.scoreText.setText('' + dScore);

      }




      tir(boss, tirDetectB){
          missile.visible = true;
          missile.anims.play('missile_up', true);
          missile.angle = -90;
          positionY1 = 2;

          positionY = 0;
          positionX = 0;

          positionX1 = 0;

          missile.x = boss.x;
          missile.y += positionY1;


          }



          tirG(boss, tirDetectG){
              missile.visible = true;
              missile.anims.play('missile_up', true);
              missile.angle = -90;
              positionX = 2;

              positionY = 0;

              positionY1 = 0;
              positionX1 = 0;
              missile.y = boss.y;

              missile.x -= positionX;


              }

              tirD(boss, tirDetectD){
                  missile.visible = true;
                  missile.anims.play('missile_up', true);
                  missile.angle = -90;
                  positionX1 = 2;

                  positionY = 0;
                  positionX = 0;
                  positionY1 = 0;

                  missile.y = boss.y;

                  missile.x += positionX1;


                  }

                  tirH(boss, tirDetectH){
                      missile.visible = true;
                      missile.anims.play('missile_up', true);
                      missile.angle = -90;
                      positionY = 2;


                      positionX = 0;
                      positionY1 = 0;
                      positionX1 = 0;

                      missile.x = boss.x;
                      missile.y -= positionY;


                      }


        tirJ(player, tirDetectB){
          if (pressSpace.isDown && cursors.left.isDown){
              missileJ.visible = true;
              missileJ.anims.play('missile_left', true);
              missileJ.angle = 180;
              positionXJ = 5;

              positionXJ1 = 0;
              positionYJ = 0;
              positionYJ1 = 0;
              missileJ.y = player.y
              missileJ.x = player.x
              missileJ.x -= positionXJ;

          }

    }

    tirJD(player, tirDetectB){
      if (pressSpace.isDown && cursors.right.isDown){
          missileJ.visible = true;
          missileJ.anims.play('missile_left', true);
          missileJ.angle = 180;
          positionXJ1 = 5;

          positionXJ = 0;
          positionYJ1 = 0;
          positionYJ = 0;

          missileJ.y = player.y
          missileJ.x = player.x
          missileJ.x -= positionXJ1;

    }

    }
    tirJH(player, tirDetectB){
      if (pressSpace.isDown && cursors.up.isDown){
          missileJ.visible = true;
          missileJ.anims.play('missile_left', true);
          missileJ.angle = 180;
          positionYJ = 5;

          positionXJ = 0;
          positionXJ1 = 0;

          positionYJ1 = 0;
          missileJ.y = player.y
          missileJ.x = player.x
          missileJ.x -= positionYJ;

    }

    }
    tirJB(player, tirDetectB){
      if (pressSpace.isDown && cursors.down.isDown){
          missileJ.visible = true;
          missileJ.anims.play('missile_left', true);
          missileJ.angle = 180;
          positionYJ1 = 5;

          positionXJ = 0;
          positionXJ1 = 0;
          positionYJ = 0;

          missileJ.y = player.y
          missileJ.x = player.x
          missileJ.x += positionYJ1;

    }

    }

      touch(missile, collisionU){

        missile.body.enable = true;
        missile.anims.play('missile_up', true);
        missile.visible = false;
        missile.y = boss.y
        missile.x = boss.x
        positionY = 0;
        positionX = 0;
        positionY1 = 0;
        positionX1 = 0;
      }




      touchD(missile, collisionD){

        missile.body.enable = true;
        missile.anims.play('missile_up', true);
        missile.visible = false;
        missile.y = boss.y
        missile.x = boss.x
        positionY = 0;
        positionX = 0;
        positionY1 = 0;
        positionX1 = 0;
      }

      touchL(missile, collisionL){

        missile.body.enable = true;
        missile.anims.play('missile_up', true);
        missile.visible = false;
        missile.y = boss.y
        missile.x = boss.x
        positionY = 0;
        positionX = 0;
        positionY1 = 0;
        positionX1 = 0;
      }

      touchR(missile, collisionR){

        missile.body.enable = true;
        missile.anims.play('missile_up', true);
        missile.visible = false;
        missile.y = boss.y
        missile.x = boss.x
        positionY = 0;
        positionX = 0;
        positionY1 = 0;
        positionX1 = 0;
      }


      touchJ(missileJ, collisionL){

        missileJ.body.enable = true;
        missileJ.anims.play('missile_left', true);
        missileJ.visible = false;
        missileJ.y = player.y
        missileJ.x = player.x
        positionXJ = 0;
        positionXJ1 = 0;
        positionYJ = 0;
        positionYJ1 = 0;
      }

      touchJD(missileJ, collisionR){

        missileJ.body.enable = true;
        missileJ.anims.play('missile_left', true);
        missileJ.visible = false;
        missileJ.y = player.y
        missileJ.x = player.x
        positionXJ = 0;
        positionXJ1 = 0;
        positionYJ = 0;
        positionYJ1 = 0;
      }
      touchJH(missileJ, collisionU){

        missileJ.body.enable = true;
        missileJ.anims.play('missile_left', true);
        missileJ.visible = false;
        missileJ.y = player.y
        missileJ.x = player.x
        positionXJ = 0;
        positionXJ1 = 0;
        positionYJ = 0;
        positionYJ1 = 0;
      }
      touchJB(missileJ, collisionD){

        missileJ.body.enable = true;
        missileJ.anims.play('missile_left', true);
        missileJ.visible = false;
        missileJ.y = player.y
        missileJ.x = player.x
        positionXJ = 0;
        positionXJ1 = 0;
        positionYJ = 0;
        positionYJ1 = 0;
      }

      degatM(player, missile){
        dScore = dScore - 10;
        missile.body.enable = false;
        this.scoreText.setText('' + dScore);
        this.touch(missile, collisionU);


    }


    degatMJ(boss, missileJ){

      missile.disableBody(true, true);
      missileJ.body.enable = false;
      this.touchJ(missileJ, collisionL);
      dScore = dScore + 10;
      vie -= 10;
      this.vieText.setText('Santé:' + vie);
      this.scoreText.setText('' + dScore);

      if (vie <= 0){
      this.time.addEvent({
    delay: 1000,
    callback: ()=>{
    this.plusCText.visible = true;
    boss.disableBody(true, true);
    },
    loop: false
    });
}



    }

      agro(detectH, boss){
        boss.anims.play('boss_down', true);
        boss.y += 2;

      }



      agro2(detectG, boss){

        boss.anims.play('boss_right', true);
        boss.setFlipX(true);
        boss.x += 2;

      }


      agro3(detectB, boss){
        boss.anims.play('boss_up', true);
        boss.y -= 2;

      }


      agro4(detectD, boss){

        boss.anims.play('boss_left', true);
        boss.setFlipX(false);
        boss.x -= 2;

      }




    };
