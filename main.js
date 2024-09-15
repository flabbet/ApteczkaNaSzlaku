import './style.css'
import { initMap2D } from "./map.js"
import { attach } from "./ar.js";
import { beginListenNfc } from "./nfc.js";

const map = document.querySelector("#map");
const arScene = document.querySelector("#arFrame");

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  if (event.beta > 45) {
    map.style.display = 'none';
    arScene.style.display = 'block';
  }
  else {
    map.style.display = 'block';
    arScene.style.display = 'none';
  }
}

initMap2D(); 
attach();

document.querySelector("#nfcButton").addEventListener("click", beginListenNfc);