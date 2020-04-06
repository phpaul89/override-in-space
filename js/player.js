class Player {
  constructor() {
    this.x = 400;
    this.y = 400;
    this.heigth = 30;
    this.width = 30;
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
    image(this.img, this.x, this.y, this.heigth, this.width);
  }
}
