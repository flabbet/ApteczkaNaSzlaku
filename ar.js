import * as helpers from "./helpers.js"

const startingLocation = {
    latitude: 49.783392 + 0.001,
    longitude: 19.057185
}

export function attach() {
    window.onload = function () {
        enableScene();

        // update text

        let request = null;

        setInterval(() => {
            const text = document.querySelector("a-text");
            if (request) {
                navigator.geolocation.clearWatch(request);
            }
            if (text) {
                request = navigator.geolocation.getCurrentPosition((pos) => {
                    const distanceInKm = helpers.distanceInKmBetweenEarthCoordinates(startingLocation.latitude, startingLocation.longitude, pos.coords.latitude, pos.coords.longitude);
                    text.setAttribute("value", `${distanceInKm.toFixed(2)}km`);
                });
            }
        }, 500);
    }
}

function enableScene() {


    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if (!testEntityAdded) {
            const compoundEntity = document.createElement("a-entity")

            compoundEntity.setAttribute('gps-new-entity-place', {
                latitude: startingLocation.latitude,
                longitude: startingLocation.longitude
            });

            const entity = document.createElement("a-box");
            entity.setAttribute("scale", {
                x: 20,
                y: 20,
                z: 20
            });
            entity.setAttribute("position", {
                x: 0,
                y: 20,
                z: 0
            });
            entity.setAttribute('material', { color: 'red' });

            const text = document.createElement("a-text");
            const textScale = 100;
            text.setAttribute("look-at", "[gps-new-camera]");
            text.setAttribute("scale", {
                x: textScale,
                y: textScale,
                z: textScale
            });

            text.setAttribute("align", "center");

            compoundEntity.appendChild(entity);
            compoundEntity.appendChild(text);
            document.querySelector("a-scene").appendChild(compoundEntity);
        }
        testEntityAdded = true;
    });
};