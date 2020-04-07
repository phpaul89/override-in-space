class UInterface {
  constructor() {
    this.score = 0;
  }

  preload() {
    //
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
      gameSwitch = false;
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

    if (this.score > 10) {
      console.log("Next Phase");
      this.score = 0;
      gameSwitch = true;
    }
  }
}
