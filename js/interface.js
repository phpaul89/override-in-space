class UInterface {
  constructor() {
    this.scoreShooter = 0;
    this.scoreFlow = 0;
    this.score = 0;
    this.timer = 5;
  }

  preload() {
    //
  }

  displayTimer() {
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
    text(this.scoreShooter, 130, 41);

    fill("red");
    textFont("Consolas");
    textSize(30);
    text("Total:", 315, 40);

    fill("red");
    textFont("Consolas");
    textSize(30);
    text(this.score, 430, 41);

    fill("white");
    textFont("Consolas");
    textSize(30);
    text("Shield %:", 566, 40);

    fill("white");
    textFont("Consolas");
    textSize(30);
    text(player.shield, 730, 41);
  }

  displayFlow() {
    fill("white");
    textFont("Consolas");
    textSize(30);
    text("Score:", 15, 40);

    fill("white");
    textFont("Consolas");
    textSize(30);
    text(this.scoreFlow, 130, 41);

    fill("red");
    textFont("Consolas");
    textSize(30);
    text("Total:", 315, 40);

    fill("red");
    textFont("Consolas");
    textSize(30);
    text(this.score, 430, 41);

    fill("white");
    textFont("Consolas");
    textSize(30);
    text("Energy %:", 566, 40);

    fill("white");
    textFont("Consolas");
    textSize(30);
    text(player.energy, 730, 41);
  }
}
