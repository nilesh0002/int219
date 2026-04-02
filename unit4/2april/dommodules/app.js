

import { getmessage } from "./message.js";
import { changeColor } from "./style.js";

window.changetext = function() {
    let element = document.getElementById("title");
    element.innerText = getmessage();
    element.style.color = changeColor();
}