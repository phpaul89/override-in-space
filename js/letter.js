// pre-set variables
let fontsize = 32;
const letterSpace = ["Q", "W", "E", "7", "8", "9"];
const letterRows = [286, 326, 366, 406, 446, 486];

class Letter {
  constructor() {
    this.height = 40;
    this.width = 40;
    this.randomLetter =
      letterSpace[Math.floor(Math.random() * letterSpace.length)];
    //this.x = letterRows[Math.floor(Math.random() * letterRows.length)];
    this.x = letterRows[letterSpace.indexOf(this.randomLetter)];
    this.y = 120; //Math.floor(Math.random() * 100);
    this.gotcha = false;
    this.lose = false;
    this.strokeAble = strokebar.checkCollision(this);
  }

  display() {
    // Moving the 'Letter' to the strokebar, reset to top when letter passes strokebar
    // remove letter with .lose, if it does not got stroked in time, spawn another letter on top
    // letterflow input 2/2, check game.js for 1/2
    if (this.y > strokebar.y + strokebar.height + 40) {
      this.lose = true;
      player.energy -= 4;
    }

    // movement speed of letter
    this.y += game.letterSpeed;

    // Draw the letter to the screen
    fill("black");
    textFont("Arial Black");
    textSize(fontsize);
    text(this.randomLetter, this.x + 2, this.y + 3);

    let customGreen = color("#1cbf1c");
    fill(customGreen);
    textFont("Arial Black");
    textSize(fontsize);
    text(this.randomLetter, this.x, this.y);
  }
}

/* additional functions */
