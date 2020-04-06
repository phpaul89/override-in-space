class Strokebar {
  constructor() {
    this.height = 40;
    this.width = 200;
    this.x = 100;
    this.y = 600;
  }

  checkCollision(letter) {
    let topEdgeBar = this.y;
    let bottomEdgeBar = this.y + this.height;

    let letterTop = letter.y;
    //let letterBottom = letters.y + letters.height;

    //console.log(topEdgeBar);
    //console.log(bottomEdgeBar);
    //console.log(letterTop);

    let yCollision = topEdgeBar < letterTop && bottomEdgeBar > letterTop;
    //console.log(yCollision);

    return yCollision;
  }

  display() {
    let barColor = color("green");
    barColor.setAlpha(150);
    fill(barColor);
    rect(this.x, this.y, this.width, this.height);
  }
}
