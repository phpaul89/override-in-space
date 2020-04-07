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
  }

  move(img) {
    img.y -= img.speed;

    // image(we get the source of image, x coordinate, y coordinate )
    image(img.src, 0, img.y);
    //image(img.src, 0, img.y + height);
    if (img.y <= -height) {
      img.y = 0;
    }
  }

  displayShooter() {
    this.imgs.forEach((image) => {
      this.move(image);
    });
  }

  displayFlow() {}
}
