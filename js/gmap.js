var map;
var center = new google.maps.LatLng(53.906564, 27.450043);
var myLatlng = new google.maps.LatLng(53.905616, 27.450118);
var infoboxcoord = new google.maps.LatLng(53.909318, 27.443461);
function initialize() {
  var mapOptions = {
    zoom: 16,
    center: center
  };
  map = new google.maps.Map(document.getElementById('gmap'),
      mapOptions);
  var marker = new google.maps.Marker({
      position: myLatlng
  });
  // To add the marker to the map, call setMap();
  marker.setMap(map);

  /*var contentString = '<div class="gmap_info"><div class="gmap_title">Контакты</div><div class="gmap_text"><p>Ул. Притыцкого, 83</p><p>пом. 33н, каб. 2</p><p>Минск, 220140, Беларусь</p></div></div>';
  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      position: center
  });
  //infowindow.open(map,marker);
  infowindow.setMap(map);*/



  var infobox = new InfoBox({
    position: infoboxcoord,
    content: '<div class="gmap_info"><div class="gmap_title">Контакты</div><div class="gmap_text"><p>Ул. Притыцкого, 83</p><p>пом. 33н, каб. 2</p><p>Минск, 220140, Беларусь</p></div></div>',
    disableAutoPan: false,
    maxWidth: 150,
    pixelOffset: new google.maps.Size(0, 0),
    zIndex: null,
    boxStyle: {
      background: "url('../image/infobox.png') no-repeat",
      width: "332px",
      height: "208px"
    },
    closeBoxMargin: "12px 12px 2px 2px",
    closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
    infoBoxClearance: new google.maps.Size(1, 1)
  });
  infobox.setMap(map);
  

  // Define a symbol using a predefined path (an arrow)
  // supplied by the Google Maps JavaScript API.
  var lineSymbol1 = {
    path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
    strokeColor: '#3498db',
    fillColor: '#3498db',
    strokeWeight: 4
  };
  var lineSymbol2 = {
    path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
    strokeColor: '#29c333',
    fillColor: '#29c333',
    strokeWeight: 4
  };


  // Create the polyline and add the symbol via the 'icons' property.
  var line1 = new google.maps.Polyline({
    path: [{lat: 53.906454, lng: 27.455470}, {lat: 53.906423, lng: 27.454270}],
    strokeColor: '#3498db',
    fillColor: '#3498db',
    strokeWeight: 4,
    icons: [{
      icon: lineSymbol1,
      offset: '100%'
    }],
    map: map
  });
  var line2 = new google.maps.Polyline({
    path: [{lat: 53.906339, lng: 27.452403}, {lat: 53.906341, lng: 27.451204}],
    strokeColor: '#3498db',
    fillColor: '#3498db',
    strokeWeight: 4,
    icons: [{
      icon: lineSymbol1,
      offset: '100%'
    }],
    map: map
  });
  var line3 = new google.maps.Polyline({
    path: [{lat: 53.906386, lng: 27.449308}, {lat: 53.906423, lng: 27.448176}],
    strokeColor: '#3498db',
    fillColor: '#3498db',
    strokeWeight: 4,
    icons: [{
      icon: lineSymbol1,
      offset: '100%'
    }],
    map: map
  });
  var line4 = new google.maps.Polyline({
    path: [{lat: 53.906546, lng: 27.445508}, {lat: 53.906614, lng: 27.444308}],
    strokeColor: '#3498db',
    fillColor: '#3498db',
    strokeWeight: 4,
    icons: [{
      icon: lineSymbol1,
      offset: '100%'
    }],
    map: map
  });
  var line5 = new google.maps.Polyline({
    path: [{lat: 53.906759, lng: 27.441519}, {lat: 53.906834, lng: 27.440319}],
    strokeColor: '#3498db',
    fillColor: '#3498db',
    strokeWeight: 4,
    icons: [{
      icon: lineSymbol1,
      offset: '100%'
    }],
    map: map
  });
  var line6 = new google.maps.Polyline({
    path: [{lat: 53.907031, lng: 27.435699}, {lat: 53.906836, lng: 27.435691}],
    strokeColor: '#3498db',
    fillColor: '#3498db',
    strokeWeight: 4,
    /*icons: [{
      icon: lineSymbol1,
      offset: '100%'
    }],*/
    map: map
  });
  var line7 = new google.maps.Polyline({
    path: [{lat: 53.907012, lng: 27.436176}, {lat: 53.907031, lng: 27.435699}],
    strokeColor: '#3498db',
    fillColor: '#3498db',
    strokeWeight: 4,
    /*icons: [{
      icon: lineSymbol1,
      offset: '100%'
    }],*/
    map: map
  });
  var line8 = new google.maps.Polyline({
    path: [{lat: 53.906836, lng: 27.435691}, {lat: 53.906785, lng: 27.436581}],
    strokeColor: '#3498db',
    fillColor: '#3498db',
    strokeWeight: 4,
    icons: [{
      icon: lineSymbol1,
      offset: '100%'
    }],
    map: map
  });
  var line9 = new google.maps.Polyline({
    path: [{lat: 53.906611, lng: 27.440274}, {lat: 53.906550, lng: 27.441495}],
    strokeColor: '#3498db',
    fillColor: '#3498db',
    strokeWeight: 4,
    icons: [{
      icon: lineSymbol1,
      offset: '100%'
    }],
    map: map
  });
  var line10 = new google.maps.Polyline({
    path: [{lat: 53.906196, lng: 27.444258}, {lat: 53.906126, lng: 27.445448}],
    strokeColor: '#3498db',
    fillColor: '#3498db',
    strokeWeight: 4,
    icons: [{
      icon: lineSymbol1,
      offset: '100%'
    }],
    map: map
  });
  var line11 = new google.maps.Polyline({
    path: [{lat: 53.905979, lng: 27.448131}, {lat: 53.905934, lng: 27.449260}],
    strokeColor: '#29c333',
    fillColor: '#29c333',
    strokeWeight: 4,
    icons: [{
      icon: lineSymbol2,
      offset: '100%'
    }],
    map: map
  });


  var line12 = new google.maps.Polyline({
    path: [{lat: 53.906727, lng: 27.437657}, {lat: 53.906664, lng: 27.438909}],
    strokeColor: '#29c333',
    fillColor: '#29c333',
    strokeWeight: 4,
    icons: [{
      icon: lineSymbol2,
      offset: '100%'
    }],
    map: map
  });
  var line13 = new google.maps.Polyline({
    path: [{lat: 53.906544, lng: 27.441711}, {lat: 53.906354, lng: 27.441736}],
    strokeColor: '#29c333',
    fillColor: '#29c333',
    strokeWeight: 4,
    /*icons: [{
      icon: lineSymbol2,
      offset: '100%'
    }],*/
    map: map
  });
  var line14 = new google.maps.Polyline({
    path: [{lat: 53.906354, lng: 27.441736}, {lat: 53.906273, lng: 27.442943}],
    strokeColor: '#29c333',
    fillColor: '#29c333',
    strokeWeight: 4,
    icons: [{
      icon: lineSymbol2,
      offset: '100%'
    }],
    map: map
  });
  var line15 = new google.maps.Polyline({
    path: [{lat: 53.906972, lng: 27.433360}, {lat: 53.906896, lng: 27.434610}],
    strokeColor: '#29c333',
    fillColor: '#29c333',
    strokeWeight: 4,
    icons: [{
      icon: lineSymbol2,
      offset: '100%'
    }],
    map: map
  });



google.maps.event.addListener(map, "rightclick", function(event) {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    // populate yor box/field with lat, lng
    console.log("Lat=" + lat + "; Lng=" + lng);
});
}
google.maps.event.addDomListener(window, 'load', initialize);
