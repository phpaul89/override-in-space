// pre-set variables
const game = new Game();
let gameEvent = 0; // 0: loading screen, 1: main game, 2: game over screen

let strokeStatus = true;

//
function preload() {
  console.log("preload");
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

  // asteroid.imgPack = [
  //   { src: loadImage("../img/asteroids/01.png") },
  //   { src: loadImage("../img/asteroids/03.png") },
  //   { src: loadImage("../img/asteroids/04.png") },
  //   { src: loadImage("../img/asteroids/06.png") },
  //   { src: loadImage("../img/asteroids/07.png") },
  //   { src: loadImage("../img/asteroids/08.png") },
  // ];

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
}

function setup() {
  // setup happens after preload
  // setup everything you want to happen before the draw

  console.log("setup");

  createCanvas(800, 800);
}

function draw() {
  // draw repeats execution until program is stopped

  if (gameEvent == 0) {
    //mySound.play();
    clear();
    game.loadingScreen();
  }
  if (gameEvent == 1) {
    clear();
    //game.asteroids = [];
    game.displayShooter();
  }

  if (gameEvent == 2) {
    clear();
    game.displayFlow();
  }

  if (gameEvent == 3) {
    clear();
    game.over();
  }
}

function keyPressed() {
  if (gameEvent == 0 && keyCode === 13) {
    gameEvent = 1;
  }

  if (keyCode === 32) {
    player.shoot();
  }

  if (gameEvent == 3 && keyCode === 13) {
    gameEvent = 1;
  }

  game.letterFlow.forEach((letter) => {
    let randomLetterCode = letter.randomLetter.charCodeAt(0);

    if (letter.strokeAble == true) {
      // compare keyboard keycode input to keycode of random letter
      if (keyCode === randomLetterCode) {
        console.log("Haha yes!"); // if true
        letter.gotcha = true;
        uInterface.score++;
      }
    }
  });
}

/* additional functions */
