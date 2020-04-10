// pre-set variables
const game = new Game();
let gameEvent = 0; // 0: loading screen, 1: shooting game, 2: flow game, 3: game over screen,11: phase out, 12: intro, 13: phase in
let gameStage = 0;
let strokeStatus = false;

//
function preload() {
  // preload executes 1x at the beginning

  player.imgUp = loadImage("../img/spaceship_up.png");
  player.imgDown = loadImage("../img/spaceship_down.png");
  player.imgLeft = loadImage("../img/spaceship_left.png");
  player.imgRight = loadImage("../img/spaceship_right.png");
  player.imgUpLeft = loadImage("../img/spaceship_upleft.png");
  player.imgUpRight = loadImage("../img/spaceship_upright.png");
  player.imgDownLeft = loadImage("../img/spaceship_downleft.png");
  player.imgDownRight = loadImage("../img/spaceship_downright.png");
  player.img = player.imgUp;
  asteroid.img = loadImage("../img/asteroids/asteroid.png");

  // parallax effect in Shooting phase:
  background.imgsShooter = [
    { src: loadImage("../img/nebula_pink_2.png"), y: 0, speed: 0 },
    { src: loadImage("../img/stars_big_1.png"), y: 0, speed: 0.1 },
    { src: loadImage("../img/stars_small_1_1.png"), y: 0, speed: 0.4 },
  ];

  //static background in Flow phase:
  background.imgTerminal = loadImage("../img/terminal-ani-slow-dark.gif");
  background.imgStart = loadImage("../img/loading-screen-pixelized.png");
  background.imgOver = loadImage("../img/game-over-screen.png");
  retroFont = loadFont("../css/RetroGaming.ttf");

  beamSound = loadSound("../audio/laserbeam.mp3");
  explosion = loadSound("../audio/explosion.mp3");

  // song drags too much performance
  // song = loadSound("../audio/bk-lnd.mp3");
}

function setup() {
  // setup executes 1x  after preload, before draw()

  // song.loop();
  // song.pause();

  createCanvas(800, 800);
}

function draw() {
  // draw repeats execution until program is stopped

  if (gameEvent == 0) {
    gameStage = 0;
    game.loadingScreen();
  }
  if (gameEvent == 1) {
    gameStage = 1;
    game.displayShooter();
  }

  if (gameEvent == 2) {
    // song.play();
    gameStage = 2;
    game.displayFlow();
  }

  if (gameEvent == 3) {
    gameStage = 3;
    game.over();
  }
  if (gameEvent == 11) {
    game.phaseOut();
  }

  if (gameEvent == 12) {
    game.intro();
  }

  if (gameEvent == 13) {
    clear();
    game.phaseIn();
  }
}

function keyPressed() {
  if (gameEvent == 0 && keyCode === 13) {
    gameEvent = 11;
  }

  if (gameEvent == 1 && keyCode === 32) {
    beamSound.play();
    player.shoot();
  }

  if (gameEvent == 3 && keyCode === 13) {
    uInterface.scoreShooter = 0;
    uInterface.scoreFlow = 0;
    uInterface.score = 0;
    player.shield = 100;
    player.energy = 100;
    player.img = player.imgUp;
    game.roundSwitch = true;
    gameStage = 0;
    gameEvent = 13;
  }

  game.letterFlow.forEach((letter) => {
    let randomLetterCode = letter.randomLetter.charCodeAt(0);

    if (letter.strokeAble == true) {
      // compare keyboard keycode input to keycode of random letter
      if (keyCode === randomLetterCode) {
        console.log("Haha yes!"); // if true
        letter.gotcha = true;
        uInterface.scoreFlow++;
        uInterface.score++;
      }
    }
  });
}

/* additional functions */
