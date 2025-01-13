mapboxgl.accessToken = 'pk.eyJ1IjoibWNob3dkaHVyeSIsImEiOiJjazZzdHJta2swNzN2M2tyeHBmZTcycTI4In0.StlNQAWNUjcDoPBeZyIvGw';

var initialCenterPoint = [-122.26754159329454, 37.804]
var initialZoom = 12 

var map = new mapboxgl.Map({
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v10',
  center: initialCenterPoint,
  zoom: initialZoom
});

map.addControl(new mapboxgl.NavigationControl());

const apiKey = 'AIzaSyC-nbTvlTo7oKHTQIt9aYDOKiy7qIJglgc'

const ssEventsId = '17VEKYHBH4I5eAs7oQyaEbG27n8Euu_xickYszPtnRFE';
const sheetEvents = 'Current Events';

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${ssEventsId}/values/${sheetEvents}?key=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data.values))
  .catch(error => console.error('Error:', error));

  $(document).ready(function() {

        // Counter
        var counter=0;

        // Current markers
        var currentMarkers = [];

        // Set default checks to Hospital and Bronx
            // $( window ).on( "load", function() {
            //   $("#X").click()
            //   $("#hosp").click()


      // Create and map markers
      branchList.forEach((item) => {

              oneMarker = new mapboxgl.Marker()
              .setLngLat([item.long, item.lat])
              .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML(`<b>${item.name}</b><br>${item.phone}`))
              .addTo(map);
             currentMarkers.push(oneMarker);

            // Fit bounds after load (i.e. after two clicks 1) Bronx and 2) Hospital)
            // if (counter>2) {
            //   var bounds = new mapboxgl.LngLatBounds();
            //   arrDisp.forEach(function(item) {
            //     bounds.extend([item.long, item.lat]);
            //   });
            //   map.fitBounds(bounds, {padding: {top: 50, bottom: 50, left: 50, right: 50}});
            // }
            // counter += 1;

            // For early epxloration
            console.log(oneMarker);
            console.log(oneMarker["_lngLat"]);
          });


    });
