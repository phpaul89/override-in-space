// pre-set variables
//const letter1 = new Letter();

//const letter2 = new Letter();
const strokebar = new Strokebar();
const player = new Player();

//

class Game {
  constructor() {
    this.letterFlow = [new Letter()];
    this.randomFrameCount = Math.floor(Math.random() * 200) + 30;
    this.beams = [];
  }

  //   init() {
  //     this.background = new Background();
  //   }

  display() {
    background(0); // sets background to black only

    player.display();

    if (
      frameCount % this.randomFrameCount === 0 &&
      game.letterFlow.length < 10
    ) {
      this.letterFlow.push(new Letter());
    }

    this.letterFlow.forEach((letter) => {
      letter.display();
    });

    if (this.beams.length > 0) {
      this.beams.forEach((beam) => {
        beam.display();
      });
    }

    strokebar.display();

    this.letterFlow.forEach((letter) => {
      if (strokebar.checkCollision(letter)) {
        //console.log("Now!");
        letter.strokeAble = true;
      } else {
        letter.strokeAble = false;
      }

      if (letter.strokeAble == true) {
        console.log("Press the button now!");
      }
    });

    game.letterFlow = game.letterFlow.filter(
      (letter) => letter.gotcha == false && letter.lose == false
    );

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
  }
}

/* additional functions */
