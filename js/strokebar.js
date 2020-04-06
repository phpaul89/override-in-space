class Strokebar {
  constructor() {
    this.height = 100;
    this.width = 100;
    this.x = 100;
    this.y = 600;
  }

  checkCollision(letters) {
    let topEdgeBar = this.y;
    let bottomEdgeBar = this.y + this.height;

    let letterTop = letters.y;
    //let letterBottom = letters.y + letters.height;

    //console.log(topEdgeBar);
    //console.log(bottomEdgeBar);
    //console.log(letterTop);

    let yCollision = topEdgeBar < letterTop && bottomEdgeBar > letterTop;
    //console.log(yCollision);

    return yCollision;
  }

  display() {
    fill("green");
    rect(this.x, this.y, this.width, this.height);
  }
}
