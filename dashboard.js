import { beginListenNfc, cancelListenNfc } from "./nfc.js";

const nameSpan = document.querySelector("#nameSpan");

const userName = localStorage.getItem("name");

if (userName) {
    nameSpan.innerText = userName;
}

const nfcOverlay = document.querySelector("#nfc-overlay");
const nfcButton = document.querySelector("#nfc-button");
const nfcCloseButton = document.querySelector("#nfc-close-button");
const mapButton = document.querySelector("#map-button");

mapButton.addEventListener("click", () => {
    window.location = "/map.html";
});

let riveAnimation;

nfcCloseButton.addEventListener("click", () => {
    cancelListenNfc();
    nfcOverlay.style.display = "none";
});

nfcButton.addEventListener("click", () => {
    beginListenNfc(() => {
        window.location = "/opened.html";
    });
    nfcOverlay.style.display = "block";

    if (!riveAnimation) {
        riveAnimation = new rive.Rive({
            src: "/assets/nfc.riv",
            canvas: document.getElementById("nfc-canvas"),
            autoplay: true,
            stateMachines: "Idle",
            onLoad: () => {
                riveAnimation.resizeDrawingSurfaceToCanvas();
            },
        });
    }
});
