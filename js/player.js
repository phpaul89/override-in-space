//pre-set variables

class Player {
  constructor() {
    this.x = 400;
    this.y = 400;
    this.height = 30;
    this.width = 30;
    this.direction = "N";
    this.img;
    this.imgUp;
    this.imgDown;
    this.imgLeft;
    this.imgRight;
    this.imgUpLeft;
    this.imgUpRight;
    this.imgDownLeft;
    this.imgDownRight;
  }

  display() {
    image(this.img, this.x, this.y, this.height, this.width);
  }

  shoot() {
    let beam = new Beam();
    game.beams.push(new Beam());
    beam.display();
  }
}
