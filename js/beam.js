class Beam {
  constructor() {
    this.x = player.x;
    this.y = player.y;
    this.direction = player.direction;
    this.radius = 5;
  }

  display() {
    //console.log("pew");

    switch (this.direction) {
      case "U":
        this.y -= 5;
        fill("yellow");
        circle(this.x + player.width / 2, this.y, this.radius);
        break;
      case "D":
        this.y += 5;
        fill("yellow");
        circle(this.x + player.width / 2, this.y + player.height, this.radius);
        break;
      case "L":
        this.x -= 5;
        fill("yellow");
        circle(this.x, this.y + player.height / 2, this.radius);
        break;
      case "R":
        this.x += 5;
        fill("yellow");
        circle(this.x + player.width, this.y + player.height / 2, this.radius);
        break;
      case "UL":
        this.x -= 5;
        this.y -= 5;
        fill("yellow");
        circle(this.x, this.y, this.radius);
        break;
      case "UR":
        this.x += 5;
        this.y -= 5;
        fill("yellow");
        circle(this.x + player.width, this.y, this.radius);
        break;
      case "DL":
        this.x -= 5;
        this.y += 5;
        fill("yellow");
        circle(this.x, this.y + player.height, this.radius);
        break;
      case "DR":
        this.x += 5;
        this.y += 5;
        fill("yellow");
        circle(this.x + player.width, this.y + player.height, this.radius);
        break;
    }
  }
}
