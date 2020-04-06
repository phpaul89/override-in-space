// pre-set variables
//const letter1 = new Letter();
//const letter2 = new Letter();
const strokebar = new Strokebar();

//

class Game {
  constructor() {
    this.letterFlow = [new Letter()];
    this.randomFrameCount = Math.floor(Math.random() * 600) + 30;
  }

  //   init() {
  //     this.background = new Background();
  //   }

  //   setup() {

  //     }

  display() {
    background(0); // sets background to black only

    if (frameCount % this.randomFrameCount === 0) {
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
        strokeStatus = true;
      } else {
        strokeStatus = false;
      }

      if (strokeStatus == true) {
        console.log("Press the button now!");
      }
    });

    game.letterFlow = game.letterFlow.filter(
      (letter) => letter.gotcha == false && letter.lose == false
    );
  }
}
