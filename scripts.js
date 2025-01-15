mapboxgl.accessToken = 'pk.eyJ1IjoibWNob3dkaHVyeSIsImEiOiJjazZzdHJta2swNzN2M2tyeHBmZTcycTI4In0.StlNQAWNUjcDoPBeZyIvGw';

var initialCenterPoint = [ -122.23, 37.8]
var initialZoom = 11.5


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

events = [];

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${ssEventsId}/values/${sheetEvents}?key=${apiKey}`)
  .then(response => response.json())
  .then(data => events.push(data.values))
  .catch(error => console.error('Error:', error));

  console.log(events);

  $(document).ready(function() {

        // Counter
        var counter=0;

        // Current markers
        var currentMarkers = [];


  for (i=0; i <= 5;){
    events.forEach((item) => {
      branchList.forEach((branchItem) => {
        if (item[3] == branchItem.branch_id){
          branchItem[`event${i+1}`] =
              {evDate: item[5]
                ,evTime: item[6]
                ,evTitle: item[7]
                ,evDescrip: item[8]
                ,evPageUrl: item[2]
                ,evFormUrl: item[1]
              }
          i++;
        }
      });
    });
  }

      // Create and map markers
      branchList.forEach((item) => {

              oneMarker = new mapboxgl.Marker()
              .setLngLat([item.long, item.lat])
              .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML(`<b>${item.branch}</b><br>
                                  <br${event1.evDate} - ${event1.evTime}: ${event1.evTitle}
                                  <br${event2.evDate} - ${event2.evTime}: ${event2.evTitle}
                                  <br${event3.evDate} - ${event3.evTime}: ${event3.evTitle}
                                  <br${event4.evDate} - ${event4.evTime}: ${event4.evTitle}
                                  <br${event5.evDate} - ${event5.evTime}: ${event5.evTitle}
                                `)
                      )
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
