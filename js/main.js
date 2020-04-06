// pre-set variables
const letters = new Letters();
const strokebar = new Strokebar();

//
function preload() {
  console.log("preload");
  //font = loadFont("assets/SourceSansPro-Regular.otf");
}

function setup() {
  // setup happens after preload
  // setup everything you want to happen before the draw

  console.log("setup");

  createCanvas(800, 800);
}

function draw() {
  // draw repeats execution until program is stopped
  //console.log("draw");
  clear();

  background(0); // sets background to black only

  letters.display();
  strokebar.display();

  //console.log(letters.y); // outputs the y coordinates
  //console.log(letters.height);

  if (strokebar.checkCollision(letters)) {
    console.log("Now!");
  }
}
