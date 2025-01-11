mapboxgl.accessToken = 'pk.eyJ1IjoibWNob3dkaHVyeSIsImEiOiJjazZzdHJta2swNzN2M2tyeHBmZTcycTI4In0.StlNQAWNUjcDoPBeZyIvGw';

var initialCenterPoint = [-122.271, 37.804]
var initialZoom = 10

var map = new mapboxgl.Map({
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v10',
  center: initialCenterPoint,
  zoom: initialZoom
});


const urlRoot = "https://gateway.bibliocommons.com/v2/libraries/oaklandlibrary/rss/events?audiences=60af9e2853a5bd4500c9a385"

for (var pageNum=1; pageNum <=1; pageNum++){
  var xml = fetch(urlRoot+'&page='+pageNum);
  var json = xml.json();
  console.log(json);
}



map.addControl(new mapboxgl.NavigationControl());
