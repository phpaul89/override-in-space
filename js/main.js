// pre-set variables
const letters = new Letters();
const strokebar = new Strokebar();
let strokeStatus = false;
const letterSpace = ["W", "A", "S", "D"];
let randomLetter = letterSpace[Math.floor(Math.random() * letterSpace.length)];

//
function preload() {
  console.log("preload");
  //font = loadFont("assets/SourceSansPro-Regular.otf");
}

function setup() {
  // setup happens after preload
  // setup everything you want to happen before the draw

  console.log("setup");

  console.log(randomLetter);
  createCanvas(800, 800);
}

function draw() {
  // draw repeats execution until program is stopped
  //console.log("draw");
  clear();

  background(0); // sets background to black only

  letters.display();
  strokebar.display();

  //console.log(randomLetter);
  //console.log(letters.y); // outputs the y coordinates
  //console.log(letters.height);

  if (strokebar.checkCollision(letters)) {
    //console.log("Now!");
    strokeStatus = true;
  } else {
    strokeStatus = false;
  }

  if (strokeStatus == true) {
    console.log("Press the button now!");
  }
}

function keyPressed() {
  /*
  let spaceBarCode = 32;
  let letterACode = 65;
  let letterDCode = 68;
  let letterWCode = 87;
  let letterSCode = 83;
  */

  // get keyCode of the randomized letter
  let randomLetterCode = randomLetter.charCodeAt(0);

  if (strokeStatus == true) {
    // compare keyboard keycode input to keycode of random letter
    if (keyCode === randomLetterCode) {
      console.log("Haha yes!"); // if true
    }
    /*
    if (keyCode === spaceBarCode) {
      console.log("Haha yes!");
    }*/
  }
}
