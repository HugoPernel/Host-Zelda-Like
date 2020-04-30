var player ;
var cursors ;
var principale;
var collisionL;
var collisionR;
var collisionU;
var collisionD;
var vistesseX = 2;
var vistesseY = 2;
var collisionPorteH;
var collisionPorteB;
var collisionPorteD;
var collisionPorteG;
var pressF;
var prisonierB;
var prisonierH;
var prisonierG;
var prisonierD;
var echelle;


class Scene1 extends Phaser.Scene {
  constructor() {
    super("un");
  };


  init (){








  };

  preload (){

    this.load.image('principale', 'assets/Fond Principale Glauque.png');

    this.load.image('prisonier', 'assets/prisonier.png');
    this.load.image('echelle', 'assets/echelle.png');

    this.load.image('collisionL', 'assets/collisionL.png');
    this.load.image('collisionR', 'assets/collisionR.png');
    this.load.image('collisionU', 'assets/collisionU.png');
    this.load.image('collisionD', 'assets/collisionD.png');

    this.load.image('collisionPorte', 'assets/collisionPorte.png');

    this.load.spritesheet('perso','assets/joueurSPv2.png',
            { frameWidth: 50, frameHeight: 75 }
        );














  };

  create (){

    principale = this.add.image(400,350, "principale");

    collisionL = this.physics.add.image(-700,350, "collisionL");
    collisionL.visible = false;
    collisionR = this.physics.add.image(1500,350, "collisionR");
    collisionR.visible = false;
    collisionD = this.physics.add.image(500,1250, "collisionD");
    collisionD.visible = false;
    collisionU = this.physics.add.image(500,-350, "collisionU");
    collisionU.visible = false;

    collisionPorteH = this.physics.add.image(400,-325, "collisionPorte");
    collisionPorteH.visible = false;
    collisionPorteB = this.physics.add.image(400,1225, "collisionPorte");
    collisionPorteB.visible = false;
    collisionPorteD = this.physics.add.image(1475,350, "collisionPorte");
    collisionPorteD.visible = false;
    collisionPorteG = this.physics.add.image(-675,350, "collisionPorte");
    collisionPorteG.visible = false;


    prisonierH = this.physics.add.image(475,-275, "prisonier");
    prisonierB = this.physics.add.image(475,1175, "prisonier");
    prisonierD = this.physics.add.image(1425,250, "prisonier");
    prisonierG = this.physics.add.image(-625,250, "prisonier");

    echelle = this.physics.add.image(400,300, "echelle");




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



    this.porteTextH = this.add.text(400,500, 'Impossible de rentrer', { fontSize: '25px', fill: 'red' });
    this.porteTextH.setOrigin(0.5);
    this.porteTextH.visible = false;

    this.porteTextB = this.add.text(400,500, 'Entrer [F]', { fontSize: '25px', fill: 'red' });
    this.porteTextB.setOrigin(0.5);
    this.porteTextB.visible = false;

    this.porteTextG = this.add.text(400,500, 'Impossible de rentrer', { fontSize: '25px', fill: 'red' });
    this.porteTextG.setOrigin(0.5);
    this.porteTextG.visible = false;

    this.porteTextD = this.add.text(400,500, 'Impossible de rentrer', { fontSize: '25px', fill: 'red' });
    this.porteTextD.setOrigin(0.5);
    this.porteTextD.visible = false;

    this.prisonierTextD = this.add.text(400,400, 'Un survivant disait que la pièce au sud contient un pouvoir', { fontSize: '13px', fill: 'red' });
    this.prisonierTextD.setOrigin(0.5);
    this.prisonierTextD.visible = false;

    this.prisonierTextG = this.add.text(400,400, 'Il faut ce mettre à égalité de ces monstruosités si tu veux les battres, est ce que ça vaut le coup ?', { fontSize: '13px', fill: 'red' });
    this.prisonierTextG.setOrigin(0.5);
    this.prisonierTextG.visible = false;

    this.prisonierTextB = this.add.text(400,400, 'Un pièce à droite contient un horrible pouvoir', { fontSize: '13px', fill: 'red' });
    this.prisonierTextB.setOrigin(0.5);
    this.prisonierTextB.visible = false;

    this.prisonierTextH = this.add.text(400,400, 'Si tu ne te trouves pas préparer tu mourras, et si tu est pret il va te falloir beaucoup de courage', { fontSize: '13px', fill: 'red' });
    this.prisonierTextH.setOrigin(0.5);
    this.prisonierTextH.visible = false;

    this.echelleText = this.add.text(400,500, 'Il faut que je trouve un moyen pour ouvrir la trappe qui surplombe cette echelle', { fontSize: '15px', fill: 'red' });
    this.echelleText.setOrigin(0.5);
    this.echelleText.visible = false;

    this.physics.add.overlap(player, collisionL, this.bloqueL, null, this);
    this.physics.add.overlap(player, collisionR, this.bloqueR, null, this);
    this.physics.add.overlap(player, collisionD, this.bloqueD, null, this);
    this.physics.add.overlap(player, collisionU, this.bloqueU, null, this);

    this.physics.add.overlap(player, collisionPorteH, this.porteHaut, null, this);
    this.physics.add.overlap(player, collisionPorteB, this.porteBas, null, this);
    this.physics.add.overlap(player, collisionPorteD, this.porteDroite, null, this);
    this.physics.add.overlap(player, collisionPorteG, this.porteGauche, null, this);

    this.physics.add.overlap(player, prisonierD, this.dialogueD, null, this);
    this.physics.add.overlap(player, prisonierH, this.dialogueH, null, this);
    this.physics.add.overlap(player, prisonierG, this.dialogueG, null, this);
    this.physics.add.overlap(player, prisonierB, this.dialogueB, null, this);

    this.physics.add.overlap(player, echelle, this.echelleSorti, null, this);






  };

  update (){

    if(cursors.left.isDown && player.x >= 200){
      player.setFlipX(false);
      player.anims.play('perso_left', true);
      player.x -= vistesseX;

    }else if(cursors.left.isDown && player.x < 200){
      player.setFlipX(false);
      player.anims.play('perso_left', true);
      principale.x += vistesseX;
      collisionL.x += vistesseX;
      collisionR.x += vistesseX;
      collisionD.x += vistesseX;
      collisionU.x += vistesseX;
      collisionPorteH.x += vistesseX;
      collisionPorteB.x += vistesseX;
      collisionPorteG.x += vistesseX;
      collisionPorteD.x += vistesseX;
      prisonierH.x += vistesseX;
      prisonierB.x += vistesseX;
      prisonierD.x += vistesseX;
      prisonierG.x += vistesseX;
      echelle.x += vistesseX;




    }else if(cursors.right.isDown && player.x <= 600){
      player.setFlipX(true);
      player.anims.play('perso_right', true);
      player.x += vistesseX;

    }else if(cursors.right.isDown && player.x > 600){
      player.setFlipX(true);
      player.anims.play('perso_right', true);
      principale.x -= vistesseX;
      collisionL.x -= vistesseX;
      collisionR.x -= vistesseX;
      collisionD.x -= vistesseX;
      collisionU.x -= vistesseX;
      collisionPorteH.x -= vistesseX;
      collisionPorteB.x -= vistesseX;
      collisionPorteG.x -= vistesseX;
      collisionPorteD.x -= vistesseX;
      prisonierH.x -= vistesseX;
      prisonierD.x -= vistesseX;
      prisonierB.x -= vistesseX;
      prisonierG.x -= vistesseX;
      echelle.x -= vistesseX;



    } else if(cursors.up.isDown && player.y >= 150){
      player.anims.play('perso_up', true);
      player.y -= vistesseY;

    }else if(cursors.up.isDown && player.y < 150){
      player.anims.play('perso_up', true);
      principale.y += vistesseY;
      collisionL.y += vistesseY;
      collisionR.y += vistesseY;
      collisionD.y += vistesseY;
      collisionU.y += vistesseY;
      collisionPorteH.y += vistesseY;
      collisionPorteB.y += vistesseY;
      collisionPorteG.y += vistesseY;
      collisionPorteD.y += vistesseY;
      prisonierH.y += vistesseY;
      prisonierD.y += vistesseY;
      prisonierG.y += vistesseY;
      prisonierB.y += vistesseY;
      echelle.y += vistesseY;

    } else if(cursors.down.isDown && player.y <= 450){
      player.anims.play('perso_down', true);
      player.y += vistesseY;

    }else if(cursors.down.isDown && player.y > 450){
      player.anims.play('perso_down', true);
      principale.y -= vistesseY;
      collisionL.y -= vistesseY;
      collisionR.y -= vistesseY;
      collisionD.y -= vistesseY;
      collisionU.y -= vistesseY;
      collisionPorteH.y -= vistesseY;
      collisionPorteB.y -= vistesseY;
      collisionPorteG.y -= vistesseY;
      collisionPorteD.y -= vistesseY;
      prisonierH.y -= vistesseY;
      prisonierD.y -= vistesseY;
      prisonierG.y -= vistesseY;
      prisonierB.y -= vistesseY;
      echelle.y -= vistesseY;



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
    this.porteTextH.visible = true;
    if (cursors.down.isDown || cursors.left.isDown || cursors.right.isDown){
      this.porteTextH.visible = false;
    }

  }

  porteBas (player, collisionPorteB){
    this.porteTextB.visible = true;
    if(pressF.isDown){
      this.scene.start('deux');
    }
    else if (cursors.up.isDown || cursors.left.isDown || cursors.right.isDown){
      this.porteTextB.visible = false;
    }

  }

  porteGauche (player, collisionPorteG){
    this.porteTextG.visible = true;
    if (cursors.down.isDown || cursors.up.isDown || cursors.right.isDown){
      this.porteTextG.visible = false;
    }

  }

  porteDroite (player, collisionPorteD){
    this.porteTextD.visible = true;
    if (cursors.down.isDown || cursors.left.isDown || cursors.up.isDown){
      this.porteTextD.visible = false;
    }

  }

  dialogueH (player, prisonierH){
    this.prisonierTextH.visible = true;
    if (cursors.down.isDown || cursors.left.isDown || cursors.right.isDown){
      this.prisonierTextH.visible = false;
    }

  }
  dialogueG (player, prisonierG){
    this.prisonierTextG.visible = true;
    if (cursors.down.isDown || cursors.up.isDown || cursors.right.isDown){
      this.prisonierTextG.visible = false;
    }

  }
  dialogueD (player, prisonierD){
    this.prisonierTextD.visible = true;
    if (cursors.down.isDown || cursors.left.isDown || cursors.up.isDown){
      this.prisonierTextD.visible = false;
    }

  }
  dialogueB (player, prisonierB){
    this.prisonierTextB.visible = true;
    if (cursors.up.isDown || cursors.left.isDown || cursors.right.isDown){
      this.prisonierTextB.visible = false;
    }

  }
  echelleSorti (player, echelle){
    this.echelleText.visible = true;
    if (cursors.up.isDown || cursors.left.isDown || cursors.right.isDown || cursors.down.isDown){
      this.echelleText.visible = false;
    }

  }






};
