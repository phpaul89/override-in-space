//pre-set
const speed = [0.1, 1, 2, 3];
const size = [140, 100, 60];

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
    this.health = calculateHealthAsteroid(
      this.speedX,
      this.speedY,
      this.height,
      this.width
    );
    this.points = this.health;
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
        uInterface.score += this.points;

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

    //console.log(this.points);

    // fill("grey");
    // rect(this.x, this.y, this.width, this.height);
    image(asteroid.img, this.x, this.y, this.width, this.height);
  }
}

/* additional functions*/

function calculateHealthAsteroid(speedX, speedY, height, width) {
  // +1 becaue of zero-indexing
  let speedPoints = speed.indexOf(speedX) + speed.indexOf(speedY) + 1;
  let sizePoints = size.indexOf(height) + size.indexOf(width) + 1;

  //   console.log(speedPoints);
  //   console.log(sizePoints);

  let pointsTotal = speedPoints * sizePoints;

  //console.log(pointsTotal);

  return pointsTotal;
}
