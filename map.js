export function initMap2D() {
    var map = L.map('map').fitWorld();

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'OpenStreetMap'
    }).addTo(map);
    map.locate({ setView: true, maxZoom: 16 });

    var aidIcon = L.icon({
        iconUrl: 'assets/marker.png',
    
        iconSize:     [147/2, 134/2], // size of the icon
        iconAnchor:   [147/4, 134/2], // point of the icon which will correspond to marker's location
    });


    L.marker([49.783392 + 0.001, 19.057185], {icon: aidIcon}).addTo(map);
}