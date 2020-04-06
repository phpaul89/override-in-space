// pre-set variables
const game = new Game();
let strokeStatus = true;

//
function preload() {
  console.log("preload");
}

function setup() {
  // setup happens after preload
  // setup everything you want to happen before the draw

  console.log("setup");

  //console.log(randomLetter);

  createCanvas(800, 800);
}

function draw() {
  // draw repeats execution until program is stopped

  game.display();
}

function keyPressed() {
  /*
  let spaceBarCode = 32;
  let letterACode = 65;
  let letterDCode = 68;
  let letterWCode = 87;
  let letterSCode = 83;
  */

  /* TO BE IMPLEMENTED:
  FUNCTION TO CHECK IF strokeAble == true
  IF NOT -> -POINTS
  IF YES:*/

  game.letterFlow.forEach((letter) => {
    let randomLetterCode = letter.randomLetter.charCodeAt(0);
    //console.log(randomLetterCode);

    if (letter.strokeAble == true) {
      // compare keyboard keycode input to keycode of random letter
      if (keyCode === randomLetterCode) {
        console.log("Haha yes!"); // if true
        letter.gotcha = true;
      }
    }
  });
}

/* additional functions */
