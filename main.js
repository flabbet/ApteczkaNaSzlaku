import { initMap2D } from "./map.js"
import { attach } from "./ar.js";

const map = document.querySelector("#map");
const arScene = document.querySelector("#arFrame");
let handled = false;
let attached = false;

initMap2D(); 
window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  if(handled === true) return;
  if (event.beta > 45) {
    map.style.display = 'none';
    arScene.style.display = 'block';
    if(attached === false)
      {
        attach();
        attached = true;
      }
  }
  else {
    map.style.display = 'block';
    arScene.style.display = 'none';
  }
}