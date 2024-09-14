export function initMap2D() {
    var map = L.map('map').fitWorld();

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
    map.locate({ setView: true, maxZoom: 16 });

    var aidIcon = L.icon({
        iconUrl: 'first_aid.png',
    
        iconSize:     [117/2, 117/2], // size of the icon
        iconAnchor:   [117/4, 0], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    L.marker([49.783392 + 0.001, 19.057185], {icon: aidIcon}).addTo(map);}
