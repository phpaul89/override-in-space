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
  }

  //   init() {
  //     this.background = new Background();
  //   }

  display() {
    background(0); // sets background to black only
    angleMode(DEGREES); // for player rotation

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
      player.y -= 5;
      player.img = player.imgUp;
    }

    if (keyIsDown(DOWN_ARROW)) {
      player.y += 5;
      player.img = player.imgDown;
    }

    if (keyIsDown(LEFT_ARROW)) {
      player.x -= 5;
      player.img = player.imgLeft;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      player.x += 5;
      player.img = player.imgRight;
    }

    if (keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)) {
      player.img = player.imgUpLeft;
    }

    if (keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)) {
      player.img = player.imgUpRight;
    }

    if (keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)) {
      player.img = player.imgDownLeft;
    }

    if (keyIsDown(DOWN_ARROW) && keyIsDown(RIGHT_ARROW)) {
      player.img = player.imgDownRight;
    }
  }
}

/* additional functions */
