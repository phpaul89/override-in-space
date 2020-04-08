// pre-set variables
let fontsize = 32;
const letterSpace = ["Q", "W", "E", "7", "8", "9", "C"];
const letterRows = [200, 240, 280, 320, 360];

class Letter {
  constructor() {
    this.height = 40;
    this.width = 40;
    this.x = letterRows[Math.floor(Math.random() * letterRows.length)];
    this.y = Math.floor(Math.random() * 100);
    this.randomLetter =
      letterSpace[Math.floor(Math.random() * letterSpace.length)];
    this.gotcha = false;
    this.lose = false;
    this.strokeAble = strokebar.checkCollision(this);
  }

  display() {
    // Moving the 'Letter' to the bottom, reset to top when bottom is reached
    // PARAMETERS: actual position of letter in relation to strokebar
    // remove letter, if it does not got stroked in time
    // letterflow input 2/2, check game.js for 1/2
    if (this.y > strokebar.y + strokebar.height + 40) {
      if (game.letterFlow.length < 10) {
        this.lose = true;
        game.letterFlow.push(new Letter());
      } else {
        this.lose = true;
      }
    }

    // movement speed of letter
    this.y += 2;

    // Draw the letter to the screen
    fill("green");
    textFont("Arial Black");
    //textStyle(BOLD);
    textSize(fontsize);
    strokeWeight(2);
    stroke(0);
    text(this.randomLetter, this.x, this.y);
  }
}

/* additional functions */
