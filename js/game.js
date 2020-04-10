// pre-set variables
const strokebar = new Strokebar();
const player = new Player();
const asteroid = new Asteroid();
const uInterface = new UInterface();
const background = new Background();
let gameSwitch = true;
let m = 0;

//

class Game {
  constructor() {
    this.letterFlow = [new Letter()];
    //this.randomFrameCount = Math.floor(Math.random() * 200) + 30;
    this.letterSpawnRate = [90, 45, 30, 20];
    this.flowLevel = 0;
    this.letterSpeed = 2;
    this.roundSwitch = false;
    this.beams = [];
    this.asteroids = [new Asteroid(), new Asteroid(), new Asteroid()];
  }

  loadingScreen() {
    //console.log("Loading Screen");
    background.displayLoadingScreen();
  }

  phaseOut() {
    background.displayPhaseOut();
  }

  intro() {
    background.displayIntro();
  }

  phaseIn() {
    background.displayPhaseIn();
  }

  over() {
    //console.log("Game Over");
    background.displayOver();
  }

  displayShooter() {
    //console.log("Shooter Mode");
    // layer: background
    //background(0); // sets background to black only

    background.displayShooter();

    // layer: player, beams, asteroids, enemies
    player.display();

    /* player control with arrow keys */

    if (keyIsDown(UP_ARROW)) {
      player.y -= 3;
      player.img = player.imgUp;
      player.direction = "U";
    }

    if (keyIsDown(DOWN_ARROW)) {
      player.y += 3;
      player.img = player.imgDown;
      player.direction = "D";
    }

    if (keyIsDown(LEFT_ARROW)) {
      player.x -= 3;
      player.img = player.imgLeft;
      player.direction = "L";
    }

    if (keyIsDown(RIGHT_ARROW)) {
      player.x += 3;
      player.img = player.imgRight;
      player.direction = "R";
    }

    // beam UL doesnt work when in motion
    if (keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)) {
      player.img = player.imgUpLeft;
      player.direction = "UL";
    }

    if (keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)) {
      player.img = player.imgUpRight;
      player.direction = "UR";
    }

    if (keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)) {
      player.img = player.imgDownLeft;
      player.direction = "DL";
    }

    if (keyIsDown(DOWN_ARROW) && keyIsDown(RIGHT_ARROW)) {
      player.img = player.imgDownRight;
      player.direction = "DR";
    }

    if (this.beams.length > 0) {
      this.beams.forEach((beam) => {
        beam.display();
      });
    }

    this.beams = this.beams.filter((beam) => beam.power > 0);

    this.asteroids.forEach((asteroid) => {
      asteroid.display();
    });

    // check if any beam hits any asteroid
    if (this.beams.length > 0) {
      this.beams.forEach((beam) => {
        this.asteroids.forEach((asteroid) => {
          if (asteroid.checkCollision(beam) == 2) {
            // console.log(asteroid.boom);
            // console.log("Hit");

            // beam should use up his power if asteroid is hit
            if (this.roundSwitch == false) {
              beam.power--;
            } else if (this.roundSwitch == true) {
              beam.power -= 2;
            }
          }
        });
      });
    }

    // timeout or framecount until explosion animation finished:
    // before timeout -> change image of asteroid, set image to explosion image, then filter
    this.asteroids = this.asteroids.filter(
      (asteroid) => asteroid.boom == false
    );

    this.asteroids.forEach((asteroid) => player.checkCollision(asteroid) == 2);

    if (this.roundSwitch == true && frameCount % 300 === 0) {
      this.asteroids.push(new Asteroid());
      console.log("new asteroid");
    }

    // layer: interface
    uInterface.displayShooter();

    if (uInterface.scoreShooter > 30) {
      //console.log("Next Phase");
      //uInterface.score += uInterface.scoreShooter;
      uInterface.scoreShooter = 0;
      uInterface.timer = 5;
      this.letterFlow = [new Letter()];
      gameStage = 1;
      gameEvent = 11;
      return;
    }

    if (player.shield <= 0) {
      // phase out, in
      console.log(uInterface.score);
      shipexplosion.play();
      gameStage = 3;
      gameEvent = 11;
    }
  }

  displayFlow() {
    //console.log("Flow Mode");
    // layer: background

    background.displayFlow();

    // layer: strokebar, letters
    strokebar.display();

    this.letterFlow.forEach((letter) => {
      letter.display();
    });

    /* letterflow control, check main.js */
    this.letterFlow.forEach((letter) => {
      if (strokebar.checkCollision(letter)) {
        letter.strokeAble = true;
      } else {
        letter.strokeAble = false;
      }

      if (letter.strokeAble == true) {
        console.log("Press the button now!");
      }
    });

    this.letterFlow = this.letterFlow.filter(
      (letter) => letter.gotcha == false && letter.lose == false
    );

    uInterface.displayFlow();

    /* letterflow input 1/2, check letter.js for 2/2 */

    if (this.roundSwitch == false) {
      m = 0;
    } else {
      m = 1;
    }

    if (uInterface.scoreFlow <= 5) {
      if (
        frameCount % this.letterSpawnRate[0 + m] === 0 &&
        this.letterFlow.length < 5
      ) {
        this.letterFlow.push(new Letter());
      }
    }

    if (uInterface.scoreFlow > 5 && uInterface.scoreFlow <= 15) {
      if (
        frameCount % this.letterSpawnRate[1 + m] === 0 &&
        this.letterFlow.length < 10
      ) {
        this.letterFlow.push(new Letter());
      }
    }

    if (uInterface.scoreFlow > 15 && uInterface.scoreFlow <= 35 + m * 20) {
      if (
        frameCount % this.letterSpawnRate[2 + m] === 0 &&
        this.letterFlow.length < 10
      ) {
        this.letterFlow.push(new Letter());
      }
    }

    if (uInterface.scoreFlow > 35 + m * 20) {
      // roundSwitch = true to skip intro text when restarting Shooter Mode
      game.roundSwitch = true;
      //uInterface.score += uInterface.scoreFlow;
      uInterface.scoreFlow = 0;
      uInterface.timer = 5;
      this.asteroids = [
        new Asteroid(),
        new Asteroid(),
        new Asteroid(),
        new Asteroid(),
      ];
      player.x = 385;
      player.y = 400;
      player.img = player.imgUp;
      gameStage = 0;
      gameEvent = 11;
      return;
    }

    if (player.energy <= 0) {
      // phase out, in
      console.log(uInterface.score);
      shipexplosion.play();
      gameStage = 3;
      gameEvent = 11;
    }
  }
}

/* additional functions */
