class Background {
  constructor() {
    //this.img = loadImage("..");
    // this.imgs = [
    //   { src: loadImage("../img/nebula_pink.png"), x: 0, speed: 0 },
    //   { src: loadImage("../img/stars_big_1.png"), x: 0, speed: 1 },
    //   { src: loadImage("../img/stars_small1.png"), x: 0, speed: 2 },
    // ];
    this.imgsShooter;
    this.imgsFlow;
    this.yStarsWhite = 0;
    this.yStarsRed = 0;
    this.warpWhite;
    this.warpRed;
  }

  move(img) {
    img.y -= img.speed;

    // image(we get the source of image, x coordinate, y coordinate )
    image(img.src, 0, img.y);
    if (img.y <= -height) {
      img.y = 0;
    }
  }

  displayShooter() {
    this.imgsShooter.forEach((image) => {
      this.move(image);
    });
  }

  displayFlow() {
    /*this.imgsShooter.forEach((image) => {
        this.move(image);
      });*/

    //this.yStarsRed++;
    //this.yStarsWhite++;

    image(this.imgsFlow, 0, 0);

    // gif works, but drags performance too much
    // tint(255, 50);
    // image(background.warp, 0, 0);

    //image(background.warpRed, 0, this.yStarsRed);
    //image(background.warpWhite, 0, this.yStarsWhite);

    /*this.yStarsWhite++;

    image(background.stars, 0, this.yStars);*/
  }
}
