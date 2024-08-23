let apiUrl = '';
fetch('/api')
    .then(response => response.json())
    .then(data => apiUrl = data.apiUrl);

let map;
let polygonLayer;
let flightBoundary;

document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('map');
    map = L.map(mapElement).setView([40.7128, -74.0060], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
    }).addTo(map);

    polygonLayer = L.layerGroup().addTo(map);

    map.on('click', (e) => {
        const latLng = e.latlng;
        const marker = L.marker(latLng).addTo(map);
        fetch(`${apiUrl}/flightBoundary`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lat: latLng.lat, lng: latLng.lng })
        })
            .then(response => response.json())
            .then(data => {
                flightBoundary = data.flightBoundary;
                polygonLayer.clearLayers();
                L.polygon(flightBoundary.boundary).addTo(polygonLayer);
            })
            .catch(err => console.error(err));
    });
});