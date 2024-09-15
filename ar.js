import * as helpers from "./helpers.js"

const startingLocation = {
    latitude: 49.783392 + 0.00005,
    longitude: 19.057185 + 0.00005
}


export function attach() {
    //window.onload = function () {
        enableScene();

        let request = null;

        setInterval(() => {
            const text = document.querySelector("a-text");
            if (text) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const distanceInKm = helpers.distanceInKmBetweenEarthCoordinates(startingLocation.latitude, startingLocation.longitude, pos.coords.latitude, pos.coords.longitude);
                    const distanceInM = distanceInKm * 1000;
                    text.setAttribute("value", `${distanceInM.toFixed(2)}m`);
                });
            }
        }, 500);
   // }
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
                x: 2,
                y: 2,
                z: 2
            });
            entity.setAttribute("position", {
                x: 0,
                y: 2,
                z: 0
            });
            entity.setAttribute('material', { color: 'red' });

            const text = document.createElement("a-text");
            const textScale = 5;
            text.setAttribute("look-at", "[gps-new-camera]");
            text.setAttribute("scale", {
                x: textScale,
                y: textScale,
                z: textScale
            });

            const distanceInKm = helpers.distanceInKmBetweenEarthCoordinates(startingLocation.latitude, startingLocation.longitude, e.detail.position.latitude, e.detail.position.longitude);
            const distanceInM = distanceInKm * 1000;
            text.setAttribute("value", `${distanceInM.toFixed(2)}m`); 
            text.setAttribute("align", "center");

            compoundEntity.appendChild(entity);
            compoundEntity.appendChild(text);
            document.querySelector("a-scene").appendChild(compoundEntity);
        }
        testEntityAdded = true;
    });
};