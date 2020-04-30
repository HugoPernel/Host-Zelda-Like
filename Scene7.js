var player ;
var cursors ;
var fondBB;
var collisionL;
var collisionR;
var collisionU;
var collisionD;



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

var missileA;

var bb;
var bb1;
var bb2;
var bb3;
var bb4;

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

var dbb1 = 0;
var dbb2 = 0;
var dbb3 = 0;
var dbb4 = 0;

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


class Scene7 extends Phaser.Scene {
  constructor() {
    super("sept");
  };


  init (){








  };

  preload (){

    this.load.image('fondBB', 'assets/Fond bebe Glauque.png');

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

    this.load.spritesheet('bb','assets/ennemieSPv2.png',
                { frameWidth: 50, frameHeight: 50 }
            );

    this.load.spritesheet('missile','assets/missileSP glauque.png',
                { frameWidth: 25, frameHeight: 25 }
            );












  };

  create (){

    fondBB = this.add.image(-650,225, "fondBB");

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

    missileA = this.physics.add.sprite(125,25, "missile");

    detectH = this.physics.add.image(400,195, "detectH");
    detectH.visible = false;
    detectG = this.physics.add.image(295,300, "detectHB");
    detectG.visible = false;
    detectB = this.physics.add.image(405,400, "detectH");
    detectB.visible = false;
    detectD = this.physics.add.image(500,305, "detectHB");
    detectD.visible = false;

    collisionL = this.physics.add.image(-1750,225, "collisionL");
    collisionL.visible = false;
    collisionR = this.physics.add.image(450,225, "collisionR");
    collisionR.visible = false;
    collisionD = this.physics.add.image(-550,1125, "collisionD");
    collisionD.visible = false;
    collisionU = this.physics.add.image(-550,-475, "collisionU");
    collisionU.visible = false;


    collisionPorteD = this.physics.add.image(425,325, "collisionPorte");
    collisionPorteD.visible = false;



    this.anims.create({
        key: 'bb_left',
        frames: this.anims.generateFrameNumbers('bb', { start: 0, end: 1 }),
        frameRate: 7,
        repeat: 0
    });

    this.anims.create({
        key: 'bb_up',
        frames: this.anims.generateFrameNumbers('bb', { start: 2, end: 3 }),
        frameRate: 9,
        repeat: 0
    });

    this.anims.create({
        key: 'bb_right',
        frames: this.anims.generateFrameNumbers('bb', { start: 0, end: 1 }),
        frameRate: 7,
        repeat: 0
    });

    this.anims.create({
        key: 'bb_down',
        frames: this.anims.generateFrameNumbers('bb', { start: 2, end: 3 }),
        frameRate: 9,
        repeat: 0
    });

    missile = this.physics.add.sprite(-200, 200, 'missile');
    missile.visible = false;

    missile1 = this.physics.add.sprite(-100, 200, 'missile');
    missile1.visible = false;

    missile2 = this.physics.add.sprite(0, 200, 'missile');
    missile2.visible = false;

    missile3 = this.physics.add.sprite(100, 200, 'missile');
    missile3.visible = false;

    missile4 = this.physics.add.sprite(200, 200, 'missile');
    missile4.visible = false;

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

    bb = this.physics.add.sprite(-200, 500, 'bb');
    bb1 = this.physics.add.sprite(-100, 200, 'bb');
    bb2 = this.physics.add.sprite(0, 300, 'bb');
    bb3 = this.physics.add.sprite(100, -200, 'bb');
    bb4 = this.physics.add.sprite(200, -400, 'bb');

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

    this.plusCText = this.add.text(400,300, 'Vous avez récuperé plus de Courage !', { fontSize: '30px', fill: 'red' });
    this.plusCText.setOrigin(0.5);
    this.plusCText.visible = false;

    this.vieText = this.add.text(400,300, 'Vous avez récupéré autant de courage que vous pouviez', { fontSize: '30px', fill: 'red' });
    this.vieText.setOrigin(0.5);
    this.vieText.visible = false;

    this.porteText = this.add.text(400,500, 'Sortir [F]', { fontSize: '25px', fill: 'red' });
    this.porteText.setOrigin(0.5);
    this.porteText.visible = false;

    this.scoreText = this.add.text(650, 5, '100', { fontSize: '50px', fill: 'red' });
    this.dashNiveau = this.add.text(250, 5, 'Dash Full', { fontSize: '50px', fill: 'red' });


    this.physics.add.overlap(pB, bb, this.degatBBB, null, this);
    this.physics.add.overlap(pH, bb, this.degatBBH, null, this);
    this.physics.add.overlap(pD, bb, this.degatBBD, null, this);
    this.physics.add.overlap(pG, bb, this.degatBBG, null, this);

    this.physics.add.overlap(pB, bb1, this.degatBBB1, null, this);
    this.physics.add.overlap(pH, bb1, this.degatBBH1, null, this);
    this.physics.add.overlap(pD, bb1, this.degatBBD1, null, this);
    this.physics.add.overlap(pG, bb1, this.degatBBG1, null, this);

    this.physics.add.overlap(pB, bb2, this.degatBBB2, null, this);
    this.physics.add.overlap(pH, bb2, this.degatBBH2, null, this);
    this.physics.add.overlap(pD, bb2, this.degatBBD2, null, this);
    this.physics.add.overlap(pG, bb2, this.degatBBG2, null, this);

    this.physics.add.overlap(pB, bb3, this.degatBBB3, null, this);
    this.physics.add.overlap(pH, bb3, this.degatBBH3, null, this);
    this.physics.add.overlap(pD, bb3, this.degatBBD3, null, this);
    this.physics.add.overlap(pG, bb3, this.degatBBG3, null, this);

    this.physics.add.overlap(pB, bb4, this.degatBBB4, null, this);
    this.physics.add.overlap(pH, bb4, this.degatBBH4, null, this);
    this.physics.add.overlap(pD, bb4, this.degatBBD4, null, this);
    this.physics.add.overlap(pG, bb4, this.degatBBG4, null, this);

    this.physics.add.overlap(player, collisionL, this.bloqueL, null, this);
    this.physics.add.overlap(player, collisionR, this.bloqueR, null, this);
    this.physics.add.overlap(player, collisionD, this.bloqueD, null, this);
    this.physics.add.overlap(player, collisionU, this.bloqueU, null, this);


    this.physics.add.overlap(player, collisionPorteD, this.porteDroite, null, this);

    this.physics.add.overlap(bb, tirDetectB, this.tir, null, this);
    this.physics.add.overlap(bb, tirDetectG, this.tirG, null, this);
    this.physics.add.overlap(bb, tirDetectD, this.tirD, null, this);
    this.physics.add.overlap(bb, tirDetectH, this.tirH, null, this);

    this.physics.add.overlap(bb1, tirDetectB, this.tir1, null, this);
    this.physics.add.overlap(bb1, tirDetectG, this.tirG1, null, this);
    this.physics.add.overlap(bb1, tirDetectD, this.tirD1, null, this);
    this.physics.add.overlap(bb1, tirDetectH, this.tirH1, null, this);

    this.physics.add.overlap(bb2, tirDetectB, this.tir2, null, this);
    this.physics.add.overlap(bb2, tirDetectG, this.tirG2, null, this);
    this.physics.add.overlap(bb2, tirDetectD, this.tirD2, null, this);
    this.physics.add.overlap(bb2, tirDetectH, this.tirH2, null, this);

    this.physics.add.overlap(bb3, tirDetectB, this.tir3, null, this);
    this.physics.add.overlap(bb3, tirDetectG, this.tirG3, null, this);
    this.physics.add.overlap(bb3, tirDetectD, this.tirD3, null, this);
    this.physics.add.overlap(bb3, tirDetectH, this.tirH3, null, this);

    this.physics.add.overlap(bb4, tirDetectB, this.tir4, null, this);
    this.physics.add.overlap(bb4, tirDetectG, this.tirG4, null, this);
    this.physics.add.overlap(bb4, tirDetectD, this.tirD4, null, this);
    this.physics.add.overlap(bb4, tirDetectH, this.tirH4, null, this);

    this.physics.add.overlap(missile, collisionU, this.touch, null, this);
    this.physics.add.overlap(missile, collisionD, this.touchD, null, this);
    this.physics.add.overlap(missile, collisionL, this.touchL, null, this);
    this.physics.add.overlap(missile, collisionR, this.touchR, null, this);

    this.physics.add.overlap(missile1, collisionU, this.touch1, null, this);
    this.physics.add.overlap(missile1, collisionD, this.touchD1, null, this);
    this.physics.add.overlap(missile1, collisionL, this.touchL1, null, this);
    this.physics.add.overlap(missile1, collisionR, this.touchR1, null, this);

    this.physics.add.overlap(missile2, collisionU, this.touch2, null, this);
    this.physics.add.overlap(missile2, collisionD, this.touchD2, null, this);
    this.physics.add.overlap(missile2, collisionL, this.touchL2, null, this);
    this.physics.add.overlap(missile2, collisionR, this.touchR2, null, this);

    this.physics.add.overlap(missile3, collisionU, this.touch3, null, this);
    this.physics.add.overlap(missile3, collisionD, this.touchD3, null, this);
    this.physics.add.overlap(missile3, collisionL, this.touchL3, null, this);
    this.physics.add.overlap(missile3, collisionR, this.touchR3, null, this);

    this.physics.add.overlap(missile4, collisionU, this.touch4, null, this);
    this.physics.add.overlap(missile4, collisionD, this.touchD4, null, this);
    this.physics.add.overlap(missile4, collisionL, this.touchL4, null, this);
    this.physics.add.overlap(missile4, collisionR, this.touchR4, null, this);

    this.physics.add.overlap(detectH, bb, this.agro, null, this);
    this.physics.add.overlap(detectG, bb, this.agro2, null, this);
    this.physics.add.overlap(detectB, bb, this.agro3, null, this);
    this.physics.add.overlap(detectD, bb, this.agro4, null, this);

    this.physics.add.overlap(detectH, bb1, this.agro1, null, this);
    this.physics.add.overlap(detectG, bb1, this.agro21, null, this);
    this.physics.add.overlap(detectB, bb1, this.agro31, null, this);
    this.physics.add.overlap(detectD, bb1, this.agro41, null, this);

    this.physics.add.overlap(detectH, bb2, this.agro2, null, this);
    this.physics.add.overlap(detectG, bb2, this.agro22, null, this);
    this.physics.add.overlap(detectB, bb2, this.agro32, null, this);
    this.physics.add.overlap(detectD, bb2, this.agro42, null, this);

    this.physics.add.overlap(detectH, bb3, this.agro3, null, this);
    this.physics.add.overlap(detectG, bb3, this.agro23, null, this);
    this.physics.add.overlap(detectB, bb3, this.agro33, null, this);
    this.physics.add.overlap(detectD, bb3, this.agro43, null, this);

    this.physics.add.overlap(detectH, bb4, this.agro4, null, this);
    this.physics.add.overlap(detectG, bb4, this.agro24, null, this);
    this.physics.add.overlap(detectB, bb4, this.agro34, null, this);
    this.physics.add.overlap(detectD, bb4, this.agro44, null, this);

    this.physics.add.overlap(player, missile, this.degatM, null, this);
    this.physics.add.overlap(player, missile1, this.degatM1, null, this);
    this.physics.add.overlap(player, missile2, this.degatM2, null, this);
    this.physics.add.overlap(player, missile3, this.degatM3, null, this);
    this.physics.add.overlap(player, missile4, this.degatM4, null, this);

    this.physics.add.overlap(bb, missileJ, this.degatMJ, null, this);
    this.physics.add.overlap(bb1, missileJ, this.degatMJ, null, this);
    this.physics.add.overlap(bb2, missileJ, this.degatMJ, null, this);
    this.physics.add.overlap(bb3, missileJ, this.degatMJ, null, this);
    this.physics.add.overlap(bb4, missileJ, this.degatMJ, null, this);

    this.physics.add.overlap(player, detectB, this.tirJ, null, this);
    this.physics.add.overlap(missileJ, collisionL, this.touchJ, null, this);
    this.physics.add.overlap(player, detectB, this.tirJD, null, this);
    this.physics.add.overlap(missileJ, collisionL, this.touchJD, null, this);
    this.physics.add.overlap(player, detectB, this.tirJH, null, this);
    this.physics.add.overlap(missileJ, collisionL, this.touchJH, null, this);
    this.physics.add.overlap(player, detectB, this.tirJB, null, this);
    this.physics.add.overlap(missileJ, collisionL, this.touchJB, null, this);






  };

  update (){

    missile.y -= positionY;
    missile.x -= positionX;
    missile.y += positionY1;
    missile.x += positionX1;

    missile1.y -= positionY1;
    missile1.x -= positionX1;
    missile1.y += positionY11;
    missile1.x += positionX11;

    missile2.y -= positionY2;
    missile2.x -= positionX2;
    missile2.y += positionY12;
    missile2.x += positionX12;

    missile3.y -= positionY3;
    missile3.x -= positionX3;
    missile3.y += positionY13;
    missile3.x += positionX13;

    missile4.y -= positionY4;
    missile4.x -= positionX4;
    missile4.y += positionY14;
    missile4.x += positionX14;

    missileJ.x -= positionXJ;
    missileJ.y -= positionYJ;
    missileJ.x += positionXJ1;
    missileJ.y += positionYJ1;




    if (dScore <= 0){
      this.GOText.visible = true;

      this.time.addEvent({
  delay: 2500,
  callback: ()=>{
    this.scene.start('cinq');
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
      missile1.x -= vistesseXm;
      missile2.x -= vistesseXm;
      missile3.x -= vistesseXm;
      missile4.x -= vistesseXm;

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
        missile1.x -= vistesseDm;
        missile2.x -= vistesseDm;
        missile3.x -= vistesseDm;
        missile4.x -= vistesseDm;

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
      fondBB.x += vistesseX;
      collisionL.x += vistesseX;
      collisionR.x += vistesseX;
      collisionD.x += vistesseX;
      collisionU.x += vistesseX;


      collisionPorteD.x += vistesseX;
      bb.x += vistesseX;
      bb1.x += vistesseX;
      bb2.x += vistesseX;
      bb3.x += vistesseX;
      bb4.x += vistesseX;

      missile.x += vistesseXm;
      missileJ.x += vistesseXm;
      missile1.x += vistesseXm;
      missile2.x += vistesseXm;
      missile3.x += vistesseXm;
      missile4.x += vistesseXm;

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
      fondBB.x += vistesseD;
      collisionL.x += vistesseD;
      collisionR.x += vistesseD;
      collisionD.x += vistesseD;
      collisionU.x += vistesseD;


      collisionPorteD.x += vistesseD;
      bb.x += vistesseD;
      bb1.x += vistesseD;
      bb2.x += vistesseD;
      bb3.x += vistesseD;
      bb4.x += vistesseD;

      missile.x += vistesseDm;
      missileJ.x += vistesseDm;
      missile1.x += vistesseDm;
      missile2.x += vistesseDm;
      missile3.x += vistesseDm;
      missile4.x += vistesseDm;

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
      missile1.x += vistesseXm;
      missile2.x += vistesseXm;
      missile3.x += vistesseXm;
      missile4.x += vistesseXm;

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
      missile1.x += vistesseDm;
      missile2.x += vistesseDm;
      missile3.x += vistesseDm;
      missile4.x += vistesseDm;

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
      fondBB.x -= vistesseX;
      collisionL.x -= vistesseX;
      collisionR.x -= vistesseX;
      collisionD.x -= vistesseX;
      collisionU.x -= vistesseX;


      collisionPorteD.x -= vistesseX;
      bb.x -= vistesseX;
      bb1.x -= vistesseX;
      bb3.x -= vistesseX;
      bb4.x -= vistesseX;

      missile.x -= vistesseXm;
      missileJ.x -= vistesseXm;
      missile1.x -= vistesseXm;
      missile2.x -= vistesseXm;
      missile3.x -= vistesseXm;
      missile4.x -= vistesseXm;

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
      fondBB.x -= vistesseD;
      collisionL.x -= vistesseD;
      collisionR.x -= vistesseD;
      collisionD.x -= vistesseD;
      collisionU.x -= vistesseD;


      collisionPorteD.x -= vistesseD;
      bb.x -= vistesseD;
      bb1.x -= vistesseD;
      bb2.x -= vistesseD;
      bb3.x -= vistesseD;
      bb4.x -= vistesseD;

      missile.x -= vistesseDm;
      missileJ.x -= vistesseDm;
      missile1.x -= vistesseDm;
      missile2.x -= vistesseDm;
      missile3.x -= vistesseDm;
      missile4.x -= vistesseDm;

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
      missile1.y -= vistesseYm;
      missile2.y -= vistesseYm;
      missile3.y -= vistesseYm;
      missile4.y -= vistesseYm;

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
      missile1.y -= vistesseDm;
      missile2.y -= vistesseDm;
      missile3.y -= vistesseDm;
      missile4.y -= vistesseDm;

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
      fondBB.y += vistesseY;
      collisionL.y += vistesseY;
      collisionR.y += vistesseY;
      collisionD.y += vistesseY;
      collisionU.y += vistesseY;


      collisionPorteD.y += vistesseY;
      bb.y += vistesseY;
      bb1.y += vistesseY;
      bb2.y += vistesseY;
      bb3.y += vistesseY;
      bb4.y += vistesseY;

      missile.y += vistesseYm;
      missileJ.y += vistesseYm;
      missile1.y += vistesseYm;
      missile2.y += vistesseYm;
      missile3.y += vistesseYm;
      missile4.y += vistesseYm;

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
      fondBB.y += vistesseD;
      collisionL.y += vistesseD;
      collisionR.y += vistesseD;
      collisionD.y += vistesseD;
      collisionU.y += vistesseD;


      collisionPorteD.y += vistesseD;
      bb.y += vistesseD;
      bb1.y += vistesseD;
      bb2.y += vistesseD;
      bb3.y += vistesseD;
      bb4.y += vistesseD;

      missile.y += vistesseDm;
      missile1.y += vistesseDm;
      missile2.y += vistesseDm;
      missile3.y += vistesseDm;
      missile4.y += vistesseDm;
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
      missile1.y += vistesseYm;
      missile2.y += vistesseYm;
      missile3.y += vistesseYm;
      missile4.y += vistesseYm;
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
      missile1.y += vistesseDm;
      missile2.y += vistesseDm;
      missile3.y += vistesseDm;
      missile4.y += vistesseDm;

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
      fondBB.y -= vistesseY;
      collisionL.y -= vistesseY;
      collisionR.y -= vistesseY;
      collisionD.y -= vistesseY;
      collisionU.y -= vistesseY;


      collisionPorteD.y -= vistesseY;
      bb.y -= vistesseY;
      bb1.y -= vistesseY;
      bb2.y -= vistesseY;
      bb3.y -= vistesseY;
      bb4.y -= vistesseY;

      missile.y -= vistesseYm;
      missileJ.y -= vistesseYm;
      missile1.y -= vistesseYm;
      missile2.y -= vistesseYm;
      missile3.y -= vistesseYm;
      missile4.y -= vistesseYm;

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
      fondBB.y -= vistesseD;
      collisionL.y -= vistesseD;
      collisionR.y -= vistesseD;
      collisionD.y -= vistesseD;
      collisionU.y -= vistesseD;



      collisionPorteD.y -= vistesseD;
      bb.y -= vistesseD;
      bb1.y -= vistesseD;
      bb2.y -= vistesseD;
      bb3.y -= vistesseD;
      bb4.y -= vistesseD;

      missile.y -= vistesseDm;
      missile1.y -= vistesseDm;
      missile2.y -= vistesseDm;
      missile3.y -= vistesseDm;
      missile4.y -= vistesseDm;
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
      this.scene.start('huit');
    }
    else if (cursors.down.isDown || cursors.left.isDown || cursors.up.isDown){
      this.porteText.visible = false;
    }

  }

  degatBBB(pB, bb){

    dScore = dScore - 10;
    bb.y += 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBB1(pB, bb1){

    dScore = dScore - 10;
    bb1.y += 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBB2(pB, bb2){

    dScore = dScore - 10;
    bb2.y += 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBB3(pB, bb3){

    dScore = dScore - 10;
    bb3.y += 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBB4(pB, bb4){

    dScore = dScore - 10;
    bb4.y += 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBH(pH, bb){

    dScore = dScore - 10;
    bb.y -= 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBH1(pH, bb1){

    dScore = dScore - 10;
    bb1.y -= 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBH2(pH, bb2){

    dScore = dScore - 10;
    bb2.y -= 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBH3(pH, bb3){

    dScore = dScore - 10;
    bb3.y -= 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBH4(pH, bb4){

    dScore = dScore - 10;
    bb4.y -= 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBD(pD, bb){

    dScore = dScore - 10;
    bb.x += 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBD1(pD, bb1){

    dScore = dScore - 10;
    bb1.x += 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBD2(pD, bb2){

    dScore = dScore - 10;
    bb2.x += 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBD3(pD, bb3){

    dScore = dScore - 10;
    bb3.x += 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBD4(pD, bb4){

    dScore = dScore - 10;
    bb4.x += 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBG(pG, bb){

    dScore = dScore - 10;
    bb.x -= 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBG1(pG, bb1){

    dScore = dScore - 10;
    bb1.x -= 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBG2(pG, bb2){

    dScore = dScore - 10;
    bb2.x -= 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBG3(pG, bb3){

    dScore = dScore - 10;
    bb3.x -= 100;

    this.scoreText.setText('' + dScore);

  }
  degatBBG4(pG, bb4){

    dScore = dScore - 10;
    bb4.x -= 100;

    this.scoreText.setText('' + dScore);

  }




  tir(bb, tirDetectB){
      missile.visible = true;
      missile.anims.play('missile_up', true);
      missile.angle = -90;
      positionY1 = 2;

      positionY = 0;
      positionX = 0;

      positionX1 = 0;

      missile.x = bb.x;
      missile.y += positionY1;


      }
      tir1(bb1, tirDetectB){
          missile1.visible = true;
          missile1.anims.play('missile_up', true);
          missile1.angle = -90;
          positionY11 = 2;

          positionY1 = 0;
          positionX1 = 0;

          positionX11 = 0;

          missile1.x = bb1.x;
          missile1.y += positionY11;


          }
          tir2(bb2, tirDetectB){
              missile2.visible = true;
              missile2.anims.play('missile_up', true);
              missile2.angle = -90;
              positionY12 = 2;

              positionY2 = 0;
              positionX2 = 0;

              positionX12 = 0;

              missile2.x = bb2.x;
              missile2.y += positionY12;


              }
              tir3(bb3, tirDetectB){
                  missile3.visible = true;
                  missile3.anims.play('missile_up', true);
                  missile3.angle = -90;
                  positionY13 = 2;

                  positionY3 = 0;
                  positionX3 = 0;

                  positionX13 = 0;

                  missile3.x = bb3.x;
                  missile3.y += positionY13;


                  }
                  tir4(bb4, tirDetectB){
                      missile4.visible = true;
                      missile4.anims.play('missile_up', true);
                      missile4.angle = -90;
                      positionY14 = 2;

                      positionY4 = 0;
                      positionX4 = 0;

                      positionX14 = 0;

                      missile4.x = bb4.x;
                      missile4.y += positionY14;


                      }

      tirG(bb, tirDetectG){
          missile.visible = true;
          missile.anims.play('missile_up', true);
          missile.angle = -90;
          positionX = 2;

          positionY = 0;

          positionY1 = 0;
          positionX1 = 0;
          missile.y = bb.y;

          missile.x -= positionX;


          }
          tirG1(bb1, tirDetectG){
              missile1.visible = true;
              missile1.anims.play('missile_up', true);
              missile1.angle = -90;
              positionX1 = 2;

              positionY1 = 0;

              positionY11 = 0;
              positionX11 = 0;
              missile1.y = bb1.y;

              missile1.x -= positionX1;


              }
              tirG2(bb2, tirDetectG){
                  missile2.visible = true;
                  missile2.anims.play('missile_up', true);
                  missile2.angle = -90;
                  positionX2 = 2;

                  positionY = 0;

                  positionY12 = 0;
                  positionX12 = 0;
                  missile2.y = bb2.y;

                  missile2.x -= positionX2;


                  }
                  tirG3(bb3, tirDetectG){
                      missile3.visible = true;
                      missile3.anims.play('missile_up', true);
                      missile3.angle = -90;
                      positionX3 = 2;

                      positionY3 = 0;

                      positionY13 = 0;
                      positionX13 = 0;
                      missile3.y = bb3.y;

                      missile3.x -= positionX3;


                      }
                      tirG4(bb4, tirDetectG){
                          missile4.visible = true;
                          missile4.anims.play('missile_up', true);
                          missile4.angle = -90;
                          positionX4 = 2;

                          positionY4 = 0;

                          positionY14 = 0;
                          positionX14 = 0;
                          missile4.y = bb4.y;

                          missile4.x -= positionX4;


                          }
          tirD(bb, tirDetectD){
              missile.visible = true;
              missile.anims.play('missile_up', true);
              missile.angle = -90;
              positionX1 = 2;

              positionY = 0;
              positionX = 0;
              positionY1 = 0;

              missile.y = bb.y;

              missile.x += positionX1;


              }
              tirD1(bb1, tirDetectD){
                  missile1.visible = true;
                  missile1.anims.play('missile_up', true);
                  missile1.angle = -90;
                  positionX11 = 2;

                  positionY1 = 0;
                  positionX1 = 0;
                  positionY11 = 0;

                  missile1.y = bb1.y;

                  missile1.x += positionX11;


                  }
                  tirD2(bb2, tirDetectD){
                      missile2.visible = true;
                      missile2.anims.play('missile_up', true);
                      missile2.angle = -90;
                      positionX12 = 2;

                      positionY2 = 0;
                      positionX2 = 0;
                      positionY12 = 0;

                      missile2.y = bb2.y;

                      missile2.x += positionX12;

                      }
                      tirD3(bb3, tirDetectD){
                          missile3.visible = true;
                          missile3.anims.play('missile_up', true);
                          missile3.angle = -90;
                          positionX13 = 2;

                          positionY3 = 0;
                          positionX3 = 0;
                          positionY13 = 0;

                          missile3.y = bb3.y;

                          missile3.x += positionX13;


                          }
                          tirD4(bb4, tirDetectD){
                              missile4.visible = true;
                              missile4.anims.play('missile_up', true);
                              missile4.angle = -90;
                              positionX14 = 2;

                              positionY4 = 0;
                              positionX4 = 0;
                              positionY14 = 0;

                              missile4.y = bb4.y;

                              missile4.x += positionX14;


                              }
              tirH(bb, tirDetectH){
                  missile.visible = true;
                  missile.anims.play('missile_up', true);
                  missile.angle = -90;
                  positionY = 2;


                  positionX = 0;
                  positionY1 = 0;
                  positionX1 = 0;

                  missile.x = bb.x;
                  missile.y -= positionY;


                  }
                  tirH1(bb1, tirDetectH){
                      missile1.visible = true;
                      missile1.anims.play('missile_up', true);
                      missile1.angle = -90;
                      positionY1 = 2;


                      positionX1 = 0;
                      positionY11 = 0;
                      positionX11 = 0;

                      missile1.x = bb1.x;
                      missile1.y -= positionY1;


                      }
                      tirH2(bb2, tirDetectH){
                          missile2.visible = true;
                          missile2.anims.play('missile_up', true);
                          missile2.angle = -90;
                          positionY2 = 2;


                          positionX2 = 0;
                          positionY12 = 0;
                          positionX12 = 0;

                          missile2.x = bb2.x;
                          missile2.y -= positionY2;


                          }
                          tirH3(bb3, tirDetectH){
                              missile3.visible = true;
                              missile3.anims.play('missile_up', true);
                              missile3.angle = -90;
                              positionY3 = 2;


                              positionX3 = 0;
                              positionY13 = 0;
                              positionX13 = 0;

                              missile3.x = bb3.x;
                              missile3.y -= positionY3;


                              }
                              tirH4(bb4, tirDetectH){
                                  missile4.visible = true;
                                  missile.anims.play('missile_up', true);
                                  missile4.angle = -90;
                                  positionY4 = 2;


                                  positionX4 = 0;
                                  positionY14 = 0;
                                  positionX14 = 0;

                                  missile4.x = bb4.x;
                                  missile4.y -= positionY4;


                                  }

    tirJ(player, detectB){
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

tirJD(player, detectB){
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
tirJH(player, detectB){
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
tirJB(player, detectB){
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
    missile.y = bb.y
    missile.x = bb.x
    positionY = 0;
    positionX = 0;
    positionY1 = 0;
    positionX1 = 0;
  }
  touch1(missile1, collisionU){

    missile1.body.enable = true;
    missile1.anims.play('missile_up', true);
    missile1.visible = false;
    missile1.y = bb1.y
    missile1.x = bb1.x
    positionY1 = 0;
    positionX1 = 0;
    positionY11 = 0;
    positionX11 = 0;
  }
  touch2(missile2, collisionU){

    missile2.body.enable = true;
    missile2.anims.play('missile_up', true);
    missile2.visible = false;
    missile2.y = bb2.y
    missile2.x = bb2.x
    positionY2 = 0;
    positionX2 = 0;
    positionY12 = 0;
    positionX12 = 0;
  }
  touch3(missile3, collisionU){

    missile3.body.enable = true;
    missile3.anims.play('missile_up', true);
    missile3.visible = false;
    missile3.y = bb3.y
    missile3.x = bb3.x
    positionY3 = 0;
    positionX3 = 0;
    positionY13 = 0;
    positionX13 = 0;
  }
  touch4(missile4, collisionU){

    missile4.body.enable = true;
    missile4.anims.play('missile_up', true);
    missile4.visible = false;
    missile4.y = bb4.y
    missile4.x = bb4.x
    positionY4 = 0;
    positionX4 = 0;
    positionY14 = 0;
    positionX14 = 0;
  }
  touchD(missile, collisionD){

    missile.body.enable = true;
    missile.anims.play('missile_up', true);
    missile.visible = false;
    missile.y = bb.y
    missile.x = bb.x
    positionY = 0;
    positionX = 0;
    positionY1 = 0;
    positionX1 = 0;
  }
  touchD1(missile1, collisionD){

    missile1.body.enable = true;
    missile1.anims.play('missile_up', true);
    missile1.visible = false;
    missile1.y = bb1.y
    missile1.x = bb1.x
    positionY1 = 0;
    positionX1 = 0;
    positionY11 = 0;
    positionX11 = 0;
  }
  touchD2(missile2, collisionD){

    missile2.body.enable = true;
    missile2.anims.play('missile_up', true);
    missile2.visible = false;
    missile2.y = bb2.y
    missile2.x = bb2.x
    positionY2 = 0;
    positionX2 = 0;
    positionY12 = 0;
    positionX12 = 0;
  }
  touchD3(missile3, collisionD){

    missile3.body.enable = true;
    missile3.anims.play('missile_up', true);
    missile3.visible = false;
    missile3.y = bb3.y
    missile3.x = bb3.x
    positionY3 = 0;
    positionX3 = 0;
    positionY13 = 0;
    positionX13 = 0;
  }
  touchD4(missile4, collisionD){

    missile4.body.enable = true;
    missile4.anims.play('missile_up', true);
    missile4.visible = false;
    missile4.y = bb4.y
    missile4.x = bb4.x
    positionY4 = 0;
    positionX4 = 0;
    positionY14 = 0;
    positionX14 = 0;
  }
  touchL(missile, collisionL){

    missile.body.enable = true;
    missile.anims.play('missile_up', true);
    missile.visible = false;
    missile.y = bb.y
    missile.x = bb.x
    positionY = 0;
    positionX = 0;
    positionY1 = 0;
    positionX1 = 0;
  }
  touchL1(missile1, collisionL){

    missile1.body.enable = true;
    missile1.anims.play('missile_up', true);
    missile1.visible = false;
    missile1.y = bb1.y
    missile1.x = bb1.x
    positionY1 = 0;
    positionX1 = 0;
    positionY11 = 0;
    positionX11 = 0;
  }
  touchL2(missile2, collisionL){

    missile2.body.enable = true;
    missile2.anims.play('missile_up', true);
    missile2.visible = false;
    missile2.y = bb2.y
    missile2.x = bb2.x
    positionY2 = 0;
    positionX2 = 0;
    positionY12 = 0;
    positionX12 = 0;
  }
  touchL3(missile3, collisionL){

    missile3.body.enable = true;
    missile3.anims.play('missile_up', true);
    missile3.visible = false;
    missile3.y = bb3.y
    missile3.x = bb3.x
    positionY3 = 0;
    positionX3 = 0;
    positionY13 = 0;
    positionX13 = 0;
  }
  touchL4(missile4, collisionL){

    missile4.body.enable = true;
    missile4.anims.play('missile_up', true);
    missile4.visible = false;
    missile4.y = bb4.y
    missile4.x = bb4.x
    positionY4 = 0;
    positionX4 = 0;
    positionY14 = 0;
    positionX14 = 0;
  }
  touchR(missile, collisionR){

    missile.body.enable = true;
    missile.anims.play('missile_up', true);
    missile.visible = false;
    missile.y = bb.y
    missile.x = bb.x
    positionY = 0;
    positionX = 0;
    positionY1 = 0;
    positionX1 = 0;
  }
  touchR1(missile1, collisionR){

    missile1.body.enable = true;
    missile1.anims.play('missile_up', true);
    missile1.visible = false;
    missile1.y = bb1.y
    missile1.x = bb1.x
    positionY1 = 0;
    positionX1 = 0;
    positionY11 = 0;
    positionX11 = 0;
  }
  touchR2(missile2, collisionR){

    missile2.body.enable = true;
    missile2.anims.play('missile_up', true);
    missile2.visible = false;
    missile2.y = bb2.y
    missile2.x = bb2.x
    positionY2 = 0;
    positionX2 = 0;
    positionY12 = 0;
    positionX12 = 0;
  }
  touchR3(missile3, collisionR){

    missile3.body.enable = true;
    missile3.anims.play('missile_up', true);
    missile3.visible = false;
    missile3.y = bb3.y
    missile3.x = bb3.x
    positionY = 0;
    positionX3 = 0;
    positionY13 = 0;
    positionX13 = 0;
  }
  touchR4(missile4, collisionR){

    missile4.body.enable = true;
    missile4.anims.play('missile_up', true);
    missile4.visible = false;
    missile4.y = bb4.y
    missile4.x = bb4.x
    positionY4 = 0;
    positionX4 = 0;
    positionY14 = 0;
    positionX14 = 0;
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
degatM1(player, missile1){
  dScore = dScore - 10;
  missile1.body.enable = false;
  this.scoreText.setText('' + dScore);
  this.touch(missile1, collisionU);


}
degatM2(player, missile2){
  dScore = dScore - 10;
  missile2.body.enable = false;
  this.scoreText.setText('' + dScore);
  this.touch(missile2, collisionU);


}
degatM3(player, missile3){
  dScore = dScore - 10;
  missile3.body.enable = false;
  this.scoreText.setText('' + dScore);
  this.touch(missile3, collisionU);


}
degatM4(player, missile4){
  dScore = dScore - 10;
  missile4.body.enable = false;
  this.scoreText.setText('' + dScore);
  this.touch(missile4, collisionU);


}

degatMJ(bb, missileJ){
  bb.disableBody(true, true);
  missile.disableBody(true, true);
  missileJ.body.enable = false;
  this.touchJ(missileJ, collisionL);
  dScore = dScore + 10;

  this.scoreText.setText('' + dScore);
  this.plusCText.visible = true;
  this.time.addEvent({
delay: 1000,
callback: ()=>{
this.plusCText.visible = false;
},
loop: false
});




}

  agro(detectH, bb){
    bb.anims.play('bb_right', true);
    bb.y += 2;

  }

  agro1(detectH, bb1){
    bb1.anims.play('bb_right', true);
    bb1.y += 2;

  }
  agro2(detectH, bb2){
    bb2.anims.play('bb_right', true);
    bb2.y += 2;

  }
  agro3(detectH, bb3){
    bb3.anims.play('bb_right', true);
    bb3.y += 2;

  }
  agro4(detectH, bb4){
    bb4.anims.play('bb_right', true);
    bb4.y += 2;

  }

  agro2(detectG, bb){

    bb.anims.play('bb_down', true);
    bb.x += 2;

  }
  agro21(detectG, bb1){

    bb1.anims.play('bb_down', true);
    bb1.x += 2;

  }
  agro22(detectG, bb2){

    bb2.anims.play('bb_down', true);
    bb2.x += 2;

  }
  agro23(detectG, bb3){

    bb3.anims.play('bb_down', true);
    bb3.x += 2;

  }
  agro24(detectG, bb4){

    bb4.anims.play('bb_down', true);
    bb4.x += 2;

  }

  agro3(detectB, bb){
    bb.anims.play('bb_right', true);
    bb.y -= 2;

  }
  agro31(detectB, bb1){
    bb1.anims.play('bb_right', true);
    bb1.y -= 2;

  }
  agro32(detectB, bb2){
    bb2.anims.play('bb_right', true);
    bb2.y -= 2;

  }
  agro33(detectB, bb3){
    bb3.anims.play('bb_right', true);
    bb3.y -= 2;

  }
  agro34(detectB, bb4){
    bb4.anims.play('bb_right', true);
    bb4.y -= 2;

  }

  agro4(detectD, bb){

    bb.anims.play('bb_down', true);
    bb.x -= 2;

  }
  agro41(detectD, bb1){

    bb1.anims.play('bb_down', true);
    bb1.x -= 2;

  }
  agro42(detectD, bb2){

    bb2.anims.play('bb_down', true);
    bb2.x -= 2;

  }
  agro43(detectD, bb3){

    bb3.anims.play('bb_down', true);
    bb3.x -= 2;

  }
  agro44(detectD, bb4){

    bb4.anims.play('bb_down', true);
    bb4.x -= 2;

  }



};
