// pre-set variables
//const letter1 = new Letter();
//const letter2 = new Letter();
const strokebar = new Strokebar();

//

class Game {
  constructor() {
    this.letterFlow = [new Letter()];
    this.randomFrameCount = Math.floor(Math.random() * 200) + 30;
  }

  //   init() {
  //     this.background = new Background();
  //   }

  //   setup() {

  //     }

  display() {
    background(0); // sets background to black only
    //console.log(this.letterFlow.length);

    if (
      frameCount % this.randomFrameCount === 0 &&
      game.letterFlow.length < 10
    ) {
      this.letterFlow.push(new Letter());
    }

    this.letterFlow.forEach((letter) => {
      letter.display();
    });

    //this.letterFlow[0].display();
    //letter2.display();
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
  }
}

/* additional functions */
