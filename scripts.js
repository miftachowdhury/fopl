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

const spreadsheetId = '17VEKYHBH4I5eAs7oQyaEbG27n8Euu_xickYszPtnRFE'; // Replace with your spreadsheet ID
const sheetName = 'Current Events'; // Replace with your sheet name

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data.values))
  .catch(error => console.error('Error:', error));

            // var response = [];
            //
            // var publicSpreadsheetUrl =
            //   'https://docs.google.com/spreadsheets/d/e/2PACX-1vQzEFL7PU3aOBAbemk7gjwYQ5rPS1ujik9ixPVaf9eppTut-AZy3lekvcNyDeWBGbuR9Y8uYX30sv2q/pubhtml';
            //
            // function init() {
            //   Tabletop.init({
            //     key: publicSpreadsheetUrl,
            //     callback: showInfo,
            //     simpleSheet: true
            //   })
            // }
            //
            // function showInfo(data, tabletop) {
            //   alert('Successfully processed!')
            //   console.log(data);
            // }
            //
            // window.addEventListener('DOMContentLoaded', init)


map.addControl(new mapboxgl.NavigationControl());
