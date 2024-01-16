// EVENT LISTENERS

import * as Selector from "./selectors.js";
import * as Function from "./functions.js";

let playerOneCurrentScore = 0;
let playerTwoCurrentScore = 0;
let counter = 0;


// PLAYER WON

let playerWon = () => {
    if (Selector.playerOneScore >= 10) {
        console.log("Player 1 won!");
        Selector.btnHold.disabled = true;
        Selector.btnRollDice.disabled = true;
    }
    
    if (Selector.playerTwoScore >= 10) {
        console.log("Player 2 won!");
        Selector.btnHold.disabled = true;
        Selector.btnRollDice.disabled = true;
    } 
};


Selector.btnRollDice.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    Function.rollADice(randomNumber);
    if (counter % 2 === 0) {
        playerOneCurrentScore = Function.playerOneCurrent(randomNumber);
        Function.playerOneContainerColorSwitchOnTurn();
        Function.playerTwoContainerColorSwitchOffTurn();
    } else {
        playerTwoCurrentScore = Function.playerTwoCurrent(randomNumber);
        Function.playerOneContainerColorSwitchOffTurn();
        Function.playerTwoContainerColorSwitchOnTurn();
    }

    if (randomNumber === 1) {
        counter++;
        playerOneCurrentScore = 0
        playerTwoCurrentScore = 0;
        Function.playerOneCurrentReset();
        Function.playerTwoCurrentReset();
    }

    playerWon();
});

Selector.btnHold.addEventListener("click", () => {

    if (counter % 2 === 0) {
        Function.playerOneScore(playerOneCurrentScore);
        Function.playerOneCurrentReset();
        playerOneCurrentScore = 0;
        Function.playerOneContainerColorSwitchOffTurn();
        Function.playerTwoContainerColorSwitchOnTurn();
    } else {
        Function.playerTwoScore(playerTwoCurrentScore);
        Function.playerTwoCurrentReset();
        playerTwoCurrentScore = 0;
        Function.playerOneContainerColorSwitchOnTurn();
        Function.playerTwoContainerColorSwitchOffTurn();
    }
    counter++;
    playerWon();
});


Selector.btnNewGame.addEventListener("click", () => {
    location.reload();
});


