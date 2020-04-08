//pre-set variables

class Player {
  constructor() {
    this.x = 385;
    this.y = 400;
    this.height = 30;
    this.width = 30;
    this.direction = "N";
    this.life = 1;
    this.shield = 100;
    this.xEngage = 385;
    this.yEngage = 700;
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
    image(this.img, this.x, this.y, this.width, this.height);
  }

  engage() {
    image(this.img, this.xEngage, this.yEngage, this.width, this.height);

    if (this.yEngage > 400) {
      this.yEngage--;
    }
  }

  shoot() {
    let beam = new Beam();
    game.beams.push(new Beam());
    beam.display();
  }

  checkCollision(asteroid) {
    let topEdgeAsteroid = asteroid.y;
    let bottomEdgeAsteroid = asteroid.y + asteroid.height;
    let leftEdgeAsteroid = asteroid.x;
    let rightEdgeAsteroid = asteroid.x + asteroid.width;

    let xCollision = leftEdgeAsteroid < this.x && rightEdgeAsteroid > this.x;
    let yCollision = topEdgeAsteroid < this.y && bottomEdgeAsteroid > this.y;

    let collision = xCollision + yCollision;

    if (collision == 2) {
      this.shield--;
    }

    return collision;
  }
}
