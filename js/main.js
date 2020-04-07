// pre-set variables
const game = new Game();

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
  asteroid.img = loadImage("../img/asteroid.png");
  background.imgs = [
    { src: loadImage("../img/nebula_pink_2.png"), y: 0, speed: 0 },
    { src: loadImage("../img/stars_big_1.png"), y: 0, speed: 0.1 },
    { src: loadImage("../img/stars_small_1_1.png"), y: 0, speed: 0.4 },
  ];
}

function setup() {
  // setup happens after preload
  // setup everything you want to happen before the draw

  console.log("setup");

  createCanvas(800, 800);
}

function draw() {
  // draw repeats execution until program is stopped

  game.display();
}

function keyPressed() {
  if (keyCode === 32) {
    player.shoot();
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
