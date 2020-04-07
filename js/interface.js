class UInterface {
  constructor() {
    this.score = 0;
  }

  preload() {
    //
  }
  displayShooter() {
    //console.log("test");

    fill("white");
    textSize(30);
    text("Score:", 15, 40);

    fill("white");
    textSize(30);
    text(this.score, 110, 41);

    fill("white");
    textSize(30);
    text("Shield %:", 596, 40);

    fill("white");
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
    textSize(30);
    text("Score:", 15, 40);

    fill("white");
    textSize(30);
    text(this.score, 110, 41);

    if (this.score > 10) {
      console.log("Next Phase");
      this.score = 0;
      gameSwitch = true;
    }
  }
}
