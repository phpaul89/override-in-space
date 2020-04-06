class Beam {
  constructor() {
    this.x = player.x;
    this.y = player.y;
    this.height = 15;
    this.width = 4;
  }

  display() {
    //console.log("pew");
    this.y += 5;
    fill("yellow");
    rect(this.x, this.y, this.height, this.width);
  }
}
