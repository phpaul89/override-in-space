// pre-set variables
let fontsize = 32;

class Letters {
  constructor() {
    this.height = 30;
    this.width = 30;
    this.x = 100;
    this.y = 100;
  }

  display() {
    // Moving the 'Letter' to the bottom, reset to top when bottom is reached
    // PARAMETERS: actual position of letter and CANVAS_HEIGHT
    if (this.y > 800) {
      this.y = 0;
    }

    this.y++;
    //console.log(this.y);

    //textFont("Arial");
    textSize(fontsize);
    //textAlign(CENTER, CENTER);

    // Draw the letter to the screen
    fill("red");
    text(randomLetter, 100, this.y);
  }
}
