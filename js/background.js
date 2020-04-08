class Background {
  constructor() {
    this.imgsShooter;
    this.imgTerminal;
    this.imgStart;
    this.imgOver;
    this.xTextOver = 442;
    this.yTextOver = 322;
    this.xTextLoad = 260;
    this.yTextLoad = 460;
    this.textAnimationCounter = 10;
    this.alphaControl = 0;
    this.inputBox = 12;
  }

  move(img) {
    img.y -= img.speed;

    // image(we get the source of image, x coordinate, y coordinate )
    image(img.src, 0, img.y);
    if (img.y <= -height) {
      img.y = 0;
    }
  }

  displayLoadingScreen() {
    //console.log("background -> display loading screen");
    // tint(255, frameCount);
    // translate(width / 2, height / 2);
    // rotate((PI / 180) * 45);
    // imageMode(CENTER);

    image(this.imgStart, 0, 0);

    if (frameCount % 6 == 0) {
      this.textAnimationCounter--;
    }

    if (this.textAnimationCounter > 5) {
      this.xTextLoad = 262;
      this.yTextLoad = 462;
    } else {
      this.xTextLoad = 260;
      this.yTextLoad = 460;
    }

    if (this.textAnimationCounter == 0) {
      this.textAnimationCounter = 10;
    }

    fill("black");
    textFont(retroFont);
    textSize(20);
    text("Press ENTER to start", this.xTextLoad + 2, this.yTextLoad + 2);

    fill("white");
    textFont(retroFont);
    textSize(20);
    text("Press ENTER to start", this.xTextLoad, this.yTextLoad);

    fill("black");
    textFont(retroFont);
    textSize(46);
    text("Override in Space", 146, 86);

    fill("grey");
    textFont(retroFont);
    textSize(46);
    text("Override in Space", 143, 83);

    fill("white");
    textFont(retroFont);
    textSize(46);
    text("Override in Space", 140, 80);

    fill("white");
    textFont(retroFont);
    textSize(11);
    text("'Adventures on board the USS Threepwood'", 356, 110);

    fill("black");
    textFont(retroFont);
    textSize(16);
    text("Navigate: ARROW Keys", 22, 782);

    fill("white");
    textFont(retroFont);
    textSize(16);
    text("Navigate: ARROW Keys", 20, 780);

    fill("black");
    textFont(retroFont);
    textSize(16);
    text("Shoot: SPACEBAR", 312, 782);

    fill("white");
    textFont(retroFont);
    textSize(16);
    text("Shoot: SPACEBAR", 310, 780);

    fill("black");
    textFont(retroFont);
    textSize(16);
    text("Code: Hit Q W E C 7 8 or 9", 532, 782);

    fill("white");
    textFont(retroFont);
    textSize(16);
    text("Code: Hit Q W E C 7 8 or 9", 530, 780);
  }

  displayPhaseOut() {
    //clear(); // clears background settings
    // let c = color(0, 0, 0, this.alphaControl); // Define color 'c'
    let c = color(0, this.alphaControl);
    fill(c);
    rect(0, 0, 800, 800);

    // duration of phase out => 3 seconds, at 60 frames per second via 6 * 30 = 180 frames
    if (frameCount % 6 == 0) {
      this.alphaControl++;
    }

    if (this.alphaControl >= 30) {
      // end phase out, start new event after duration, see above
      gameEvent = 12;
    }
  }

  displayIntro() {
    fill("black");
    rect(0, 0, 800, 800);

    fill("white");
    textFont(retroFont);
    textSize(30);
    text("Survive the asteroid belt!", 150, 370);

    // if (frameCount % 6 == 0) {
    //   this.inputBox--;
    // }

    // if (this.inputBox > 6) {
    //   let inputBoxColor = color("white");
    //   inputBoxColor.setAlpha(140);
    //   fill(inputBoxColor);
    //   rect(490, 344, 16, 30);
    // }

    // if (this.inputBox == 0) {
    //   this.inputBox = 12;
    // }

    if (frameCount % 12 == 0) {
      this.textAnimationCounter--;
    }

    if (this.textAnimationCounter <= 0) {
      fill("white");
      textFont(retroFont);
      textSize(12);
      text("(The warp drive is almost ready ...)", 260, 410);
    }
  }

  displayOver() {
    image(this.imgOver, 0, 0);
    fill("black");
    textFont(retroFont);
    textSize(60);
    text("GAME OVER", 26, 66);

    fill("grey");
    textFont(retroFont);
    textSize(60);
    text("GAME OVER", 23, 63);

    fill("white");
    textFont(retroFont);
    textSize(60);
    text("GAME OVER", 20, 60);

    fill("grey");
    textFont(retroFont);
    textSize(20);
    text("... rest a bit.", 82, 322);

    fill("white");
    textFont(retroFont);
    textSize(20);
    text("... rest a bit.", 80, 320);

    if (frameCount % 6 == 0) {
      this.textAnimationCounter--;
    }

    if (this.textAnimationCounter > 5) {
      this.xTextOver = 443;
      this.yTextOver = 324;
    } else {
      this.xTextOver = 442;
      this.yTextOver = 322;
    }

    if (this.textAnimationCounter == 0) {
      this.textAnimationCounter = 10;
    }

    fill("grey");
    textFont(retroFont);
    textSize(20);
    text("Press ENTER to restart", this.xTextOver + 2, this.yTextOver + 2);

    fill("black");
    textFont(retroFont);
    textSize(20);
    text("Press ENTER to restart", this.xTextOver, this.yTextOver);
  }

  displayShooter() {
    this.imgsShooter.forEach((image) => {
      this.move(image);
    });
  }

  displayFlow() {
    // clear();
    // if (frameCount % 60 == 0) {
    //   tint(255, 255);
    // }

    image(this.imgTerminal, 0, 0);

    // gif works, but drags performance too much
    // tint(255, 25);
    // image(background.warp, 0, 0);
  }
}
