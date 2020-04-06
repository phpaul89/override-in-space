// pre-set variables
let fontsize = 32;
const letterSpace = ["W", "A", "S", "D"];

class Letter {
  constructor() {
    this.height = 30;
    this.width = 30;
    //this.x = 100;
    this.x =
      Math.floor(Math.random() * strokebar.width) + strokebar.x - this.width;
    this.y = 100;
    this.randomLetter = randomizeLetter();
    this.gotcha = false;
    this.lose = false;
  }

  display() {
    // Moving the 'Letter' to the bottom, reset to top when bottom is reached
    // PARAMETERS: actual position of letter in relation to strokebar
    // remove letter, if it does not got stroked in time
    if (this.y > strokebar.y + strokebar.height + 40) {
      this.lose = true;
      game.letterFlow.push(new Letter());
    }

    this.y++;
    //console.log(this.lose);

    //textFont("Arial");
    textSize(fontsize);
    //textAlign(CENTER, CENTER);

    // Draw the letter to the screen
    fill("red");
    text(this.randomLetter, this.x, this.y);
  }
}

/* additional functions */
function randomizeLetter() {
  return letterSpace[Math.floor(Math.random() * letterSpace.length)];
}
