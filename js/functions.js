import * as Selector from "./selectors.js";

// COUNTERS

let counterPlayerOneCurrent = 0;
let counterPlayerTwoCurrent = 0;
let counterPlayerOneScore = 0;
let counterPlayerTwoScore = 0;

// FUNCTIONS

let rollADice = (value) => {
    let image = document.createElement("img");
    image.src = `images/dice-${value}.png`;
    image.width = 100;
    image.height = 100;
    Selector.containerDivMain.appendChild(image);
};

let playerOneCurrent = (value) => {
    counterPlayerOneCurrent += value;
    Selector.playerOneCurrent.innerHTML = `${counterPlayerOneCurrent}`;
    return counterPlayerOneCurrent;
};

let playerOneCurrentReset = () => {
    counterPlayerOneCurrent = 0;
    Selector.playerOneCurrent.innerHTML = `${counterPlayerOneCurrent}`;
};

let playerTwoCurrent = (value) => {
    counterPlayerTwoCurrent += value;
    Selector.playerTwoCurrent.innerHTML = `${counterPlayerTwoCurrent}`;
    return counterPlayerTwoCurrent;
};

let playerTwoCurrentReset = () => {
    counterPlayerTwoCurrent = 0;
    Selector.playerTwoCurrent.innerHTML = `${counterPlayerTwoCurrent}`;
};

let playerOneScore = (value) => {
    counterPlayerOneScore += value;
    Selector.playerOneScore.innerHTML = `${counterPlayerOneScore}`;
    return value;
};

let playerTwoScore = (value) => {
    counterPlayerTwoScore += value;
    Selector.playerTwoScore.innerHTML = `${counterPlayerTwoScore}`;
    return value;
};

export {counterPlayerOneCurrent, rollADice, playerOneCurrent, playerOneCurrentReset, playerTwoCurrent, playerTwoCurrentReset, playerOneScore, playerTwoScore};