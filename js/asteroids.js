//pre-set
const speed = [0.1, 1, 2, 3];
const size = [30, 60, 90, 120];

//
class Asteroid {
  constructor() {
    this.x = Math.floor(Math.random() * 600);
    this.y = Math.floor(Math.random() * 600);
    this.targetX = Math.floor(Math.random() * 600);
    this.targetY = Math.floor(Math.random() * 600);
    this.speedX = speed[Math.floor(Math.random() * speed.length)];
    this.speedY = speed[Math.floor(Math.random() * speed.length)];
    this.plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    this.height = size[Math.floor(Math.random() * size.length)];
    this.width = size[Math.floor(Math.random() * size.length)];
    this.img;
    this.health = 5;
    this.boom = false;
  }

  checkCollision(beam) {
    let topEdgeAsteroid = this.y;
    let bottomEdgeAsteroid = this.y + this.height;
    let leftEdgeAsteroid = this.x;
    let rightEdgeAsteroid = this.x + this.width;

    let xCollision = leftEdgeAsteroid < beam.x && rightEdgeAsteroid > beam.x;
    let yCollision = topEdgeAsteroid < beam.y && bottomEdgeAsteroid > beam.y;

    let collision = xCollision + yCollision;

    if (collision == 2) {
      this.health--;
      console.log(this.health);

      if (this.health <= 0) {
        // asteroid exploded
        this.boom = true;

        if (game.asteroids.length < 10) {
          game.asteroids.push(new Asteroid());
          game.asteroids.push(new Asteroid());
        }
      }
    }

    return collision;
  }

  display() {
    if (this.x > 800) {
      this.x = 0;
    } else if (this.y > 800) {
      this.y = 0;
    } else if (this.x < 0) {
      this.x = 800;
    } else if (this.y < 0) {
      this.y = 800;
    }
    // asteroid trajectory
    this.x += this.speedX * this.plusOrMinus;
    this.y += this.speedY * this.plusOrMinus;

    fill("grey");
    rect(this.x, this.y, this.width, this.height);
  }
}
