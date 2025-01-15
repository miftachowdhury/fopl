
const apiKey = 'AIzaSyC-nbTvlTo7oKHTQIt9aYDOKiy7qIJglgc'
const ssEventsId = '17VEKYHBH4I5eAs7oQyaEbG27n8Euu_xickYszPtnRFE';
const sheetEvents = 'Current Events';

(async () => {
  const getData = async () => {
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${ssEventsId}/values/${sheetEvents}?key=${apiKey}`);
    const data = await response.json();
    dataGlobal = data;
    return data;
  };

  let data_local = await getData();
  console.log(data_local);

  events = data_local.values;
  events.shift();

  console.log(events);
  console.log(events[0]);
  console.log(events[0][0]);
  console.log(events[1]);
  console.log(events[1][0]);

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

        // var obj;
        // fetch(`https://sheets.googleapis.com/v4/spreadsheets/${ssEventsId}/values/${sheetEvents}?key=${apiKey}`)
        //   .then(response => response.json())
        //   // .then(data => console.log(data.values))
        //   .then(data => obj = data.values)
        //   .then(() => callback(obj))
        //   .catch(error => console.error('Error:', error));
        //
        // console.log(obj);


          $(document).ready(function() {

                // Counter
                var counter=0;

                // Current markers
                var currentMarkers = [];


          for (i=0; i <= 5;){
            events.forEach((item) => {
              branchList.forEach((branchItem) => {
                console.log('item[3]:', item[3]);
                console.log('branchItem.branch_id:', branchItem.branch_id);
                if (item[3] == branchItem.branch_id){
                  console.log(item[3], '==', branchItem.branch_id);
                  console.log(`event${i+1}`);
                  branchItem[`event${i+1}`] =
                      {evDate: item[5]
                        ,evTime: item[6]
                        ,evTitle: item[7]
                        ,evDescrip: item[8]
                        ,evPageUrl: item[2]
                        ,evFormUrl: item[1]
                      }
                  console.log(branchItem.properties);
                  console.log(branchItem.values);
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

                                          <br${item.event1.evDate} - ${item.event1.evTime}:
                                          <a href=${item.event1.evPageUrl}> ${item.event1.evTitle} </a>
                                          <a href=${item.event1.evFormUrl}> Sign Up </a>

                                          <br${item.event2.evDate} - ${item.event2.evTime}: ${item.event2.evTitle}
                                          <a href=${item.event2.evPageUrl}> ${item.event2.evTitle} </a>
                                          <a href=${item.event2.evFormUrl}> Sign Up </a>

                                          <br${item.event3.evDate} - ${item.event3.evTime}: ${item.event3.evTitle}
                                          <a href=${item.event3.evPageUrl}> ${item.event3.evTitle} </a>
                                          <a href=${item.event3.evFormUrl}> Sign Up </a>

                                          <br${item.event4.evDate} - ${item.event4.evTime}: ${item.event4.evTitle}
                                          <a href=${item.event4.evPageUrl}> ${item.event4.evTitle} </a>
                                          <a href=${item.event4.evFormUrl}> Sign Up </a>

                                          <br${item.event5.evDate} - ${item.event5.evTime}: ${item.event5.evTitle}
                                          <a href=${item.event5.evPageUrl}> ${item.event5.evTitle} </a>
                                          <a href=${item.event5.evFormUrl}> Sign Up </a>
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

})();
