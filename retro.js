

var config = {
  width: 800,
  height: 600,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
          }
    },
    scene: [Scene1,Scene8, Scene6, Scene2, Scene4, Scene3, Scene7, Scene9, Scene5]
  }


var game = new Phaser.Game(config);
