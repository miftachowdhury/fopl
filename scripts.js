mapboxgl.accessToken = 'pk.eyJ1IjoibWNob3dkaHVyeSIsImEiOiJjazZzdHJta2swNzN2M2tyeHBmZTcycTI4In0.StlNQAWNUjcDoPBeZyIvGw';

var initialCenterPoint = [-122.271, 37.804]
var initialZoom = 10

var map = new mapboxgl.Map({
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v10',
  center: initialCenterPoint,
  zoom: initialZoom
});

const apiKey = 'AIzaSyC-nbTvlTo7oKHTQIt9aYDOKiy7qIJglgc'

const ssEventsId = '17VEKYHBH4I5eAs7oQyaEbG27n8Euu_xickYszPtnRFE';
const sheetEvents = 'Current Events';

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${ssEventsId}/values/${sheetEvents}?key=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data.values))
  .catch(error => console.error('Error:', error));

console.log(branchList)




map.addControl(new mapboxgl.NavigationControl());
