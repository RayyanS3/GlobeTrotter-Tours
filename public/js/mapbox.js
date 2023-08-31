/* eslint-disable */

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoicmF5eWFuLTAzIiwiYSI6ImNsbHllZzFrcTFrMDUzaW85ZmVqdm0xdG4ifQ.0J66TJ05iJ4dVHRZY0QB1A';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/rayyan-03/cllyf9lvt01ik01magppd4y11',
});

const bounds = new mapboxgl.LatLngBounds();
