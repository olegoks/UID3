//pk.eyJ1Ijoib2xlZ29rcyIsImEiOiJja294MGlnc2cwOW5qMm9wY3lwams2cGZ1In0.bHU3WH1wpH-muUAvQArzUg

mapboxgl.accessToken = 'pk.eyJ1Ijoib2xlZ29rcyIsImEiOiJja294MGlnc2cwOW5qMm9wY3lwams2cGZ1In0.bHU3WH1wpH-muUAvQArzUg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});