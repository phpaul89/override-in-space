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
  // console.log("draw");
  //clear();

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

  game.letterFlow.forEach((letter) => {
    let randomLetterCode = letter.randomLetter.charCodeAt(0);
    //console.log(randomLetterCode);

    if (strokeStatus == true) {
      // compare keyboard keycode input to keycode of random letter
      if (keyCode === randomLetterCode) {
        console.log("Haha yes!"); // if true
        letter.gotcha = true;
      }
    }
  });

  // get keyCode of the randomized letter
  // let randomLetterCode = game.letterFlow[0].randomLetter.charCodeAt(0);

  // if (strokeStatus == true) {
  //   // compare keyboard keycode input to keycode of random letter
  //   if (keyCode === randomLetterCode) {
  //     console.log("Haha yes!"); // if true
  //     game.letterFlow[0].gotcha = true;
  //     game.letterFlow.push(new Letter());
  //     //console.log(game.letterFlow[0].gotcha);
  //     // game.letterFlow = game.letterFlow.filter(
  //     //   (letter) => letter.gotcha == false
  //     // );
  //     //game.letterFlow[0].randomLetter = randomizeLetter();
  //   }
  // }
}

/* additional functions */
