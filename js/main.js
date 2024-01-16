// EVENT LISTENERS

import * as Selector from "./selectors.js";
import * as Function from "./functions.js";

let playerOneCurrentScore = 0;
let playerTwoCurrentScore = 0;
let counter = 0;


Selector.btnRollDice.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    Function.rollADice(randomNumber);
    if (counter % 2 === 0) {
        playerOneCurrentScore = Function.playerOneCurrent(randomNumber);
    } else {
        playerTwoCurrentScore = Function.playerTwoCurrent(randomNumber);
    }

    if (randomNumber === 1) {
        counter++;
        playerOneCurrentScore = 0
        playerTwoCurrentScore = 0;
        Function.playerOneCurrentReset();
        Function.playerTwoCurrentReset();
    }
});

Selector.btnHold.addEventListener("click", () => {
    if (counter % 2 === 0) {
        Function.playerOneScore(playerOneCurrentScore);
        Function.playerOneCurrentReset();
        counter++;
    } else {
        Function.playerTwoScore(playerTwoCurrentScore);
        Function.playerTwoCurrentReset();
        counter++;
    }
});

Selector.btnNewGame.addEventListener("click", () => {
    location.reload();
});

// CHANGING COLORS

