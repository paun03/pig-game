// EVENT LISTENERS

import * as Selector from "./selectors.js";
import * as Function from "./functions.js";

let counterPlayerOneCurrent = 0;
let counterPlayerTwoCurrent = 0;
let counterPlayerOneScore = 0;
let counterPlayerTwoScore = 0;

Selector.btnRollDice.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 6 + 1);

    let image = document.createElement("img");
    image.src = `images/dice-${randomNumber}.png`;
    image.width = 100;
    image.height = 100;
    Selector.containerDivMain.appendChild(image);
    
    counterPlayerOneCurrent += randomNumber;
    Selector.playerOneCurrent.innerHTML = `${counterPlayerOneCurrent}`;

});