// var mymap = L.map('map').setView([50.450001, 30.523333], 13);

var map = L.map('map').setView([50.450001, 30.523333], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([50.450001, 30.523333]).addTo(map)
    // .bindPopup('Our Store.')
    .openPopup();