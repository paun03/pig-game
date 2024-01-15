import * as Selector from "./selectors.js";

let getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    return randomNumber;
};

let rollADice = () => {
    let image = document.createElement("img");
    image.src = `images/dice-${getRandomNumber()}.png`;
    image.width = 100;
    image.height = 100;
    Selector.containerDivMain.appendChild(image);
};

let currentCounterPlayerOne = () => {

};

