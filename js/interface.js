class UInterface {
  constructor() {
    this.score = 0;
    this.timer = 5;
  }

  preload() {
    //
  }

  displayTimer() {
    //console.log("Test message after 10s");
    fill("white");
    textFont(retroFont);
    textSize(60);
    text(this.timer, 376, 260);

    if (frameCount % 60 == 0 && this.timer > 0) {
      // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      this.timer--;
    }

    if (this.timer == 0) {
      if (gameStage == 0) {
        background.alphaMax = 255;
        gameEvent = 1;
      }

      if (gameStage == 2) {
        background.alphaMax = 255;
        gameEvent = 1;
      }
    }
  }

  displayShooter() {
    fill("white");
    textFont("Consolas");
    textSize(30);
    text("Score:", 15, 40);

    fill("white");
    textFont("Consolas");
    textSize(30);
    text(this.score, 130, 41);

    fill("white");
    textFont("Consolas");
    textSize(30);
    text("Shield %:", 566, 40);

    fill("white");
    textFont("Consolas");
    textSize(30);
    text(player.shield, 730, 41);

    if (this.score > 10) {
      console.log("Next Phase");
      this.score = 0;
      gameEvent = 11;
    }

    if (player.shield <= 0) {
      gameEvent = 3;
    }
  }

  displayFlow() {
    fill("white");
    textFont("Consolas");
    textSize(30);
    text("Score:", 15, 40);

    fill("white");
    textFont("Consolas");
    textSize(30);
    text(this.score, 130, 41);

    if (this.score > 5) {
      console.log("Next Phase");
      this.score = 0;
      gameEvent = 11;
    }
  }
}
