class Strokebar {
  constructor() {
    this.height = 40;
    this.width = 260;
    this.x = 270;
    this.y = 640;
    this.inputBox = 12;
  }

  checkCollision(letter) {
    let topEdgeBar = this.y;
    let bottomEdgeBar = this.y + this.height;
    let letterTop = letter.y;
    let yCollision = topEdgeBar < letterTop && bottomEdgeBar > letterTop;

    return yCollision;
  }

  display() {
    fill("red");
    textFont("Consolas");
    textSize(16);
    text("root", this.x - 160, this.y + 25);

    fill("white");
    textFont("Consolas");
    textSize(14);
    text("@", this.x - 120, this.y + 23);

    fill("white");
    textFont("Consolas");
    textSize(16);
    text("ship: ~ $", this.x - 106, this.y + 25);

    let barColor = color("grey");
    barColor.setAlpha(140);
    fill(barColor);
    rect(this.x - 10, this.y, this.width, this.height);

    if (frameCount % 6 == 0) {
      this.inputBox--;
    }

    if (this.inputBox > 6) {
      let inputBoxColor = color("green");
      inputBoxColor.setAlpha(140);
      fill(inputBoxColor);
      rect(this.x - 10, this.y, 20, this.height);
    }

    if (this.inputBox == 0) {
      this.inputBox = 12;
    }
  }
}
