// pre-set variables
//const letter1 = new Letter();

//const letter2 = new Letter();
const strokebar = new Strokebar();
const player = new Player();
const asteroid = new Asteroid();

//

class Game {
  constructor() {
    this.letterFlow = [new Letter()];
    this.randomFrameCount = Math.floor(Math.random() * 200) + 30;
    this.beams = [];
    this.asteroids = [new Asteroid(), new Asteroid()];
  }

  //   init() {
  //     this.background = new Background();
  //   }

  display() {
    // 0 layer: background
    background(0); // sets background to black only

    // 1 layer: player, beams, asteroids, enemies
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

    //console.log(this.beams.length);

    this.asteroids.forEach((asteroid) => {
      asteroid.display();
    });

    // check if any beam hits any asteroid
    if (this.beams.length > 0) {
      this.beams.forEach((beam) => {
        this.asteroids.forEach((asteroid) => {
          if (asteroid.checkCollision(beam) == 2) {
            console.log(asteroid.boom);
            console.log("Hit");

            // beam should use up his power if asteroid is hit
            beam.power--;
          }
        });
      });
    }

    // asteroid doesn't get removed ??:
    //console.log(this.asteroids);
    this.asteroids = this.asteroids.filter(
      (asteroid) => asteroid.boom == false
    );

    //console.log(this.asteroids.length);

    // if (frameCount % 120 === 0 && this.asteroids.length < 10) {
    //   this.asteroids.push(new Asteroid());
    // }

    /*if (
      frameCount % this.randomFrameCount === 0 &&
      this.asteroids.length < 10
    ) {
      this.asteroids.push(new Asteroid());
    }*/

    // 2 layer: strokebar, letters
    strokebar.display();

    this.letterFlow.forEach((letter) => {
      letter.display();
    });

    /* letterflow input 1/2, check letter.js for 2/2 */
    if (
      frameCount % this.randomFrameCount === 0 &&
      game.letterFlow.length < 10
    ) {
      this.letterFlow.push(new Letter());
    }

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
  }
}

/* additional functions */
