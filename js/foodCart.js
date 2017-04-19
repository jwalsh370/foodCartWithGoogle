var apiKey = require('./../.env').apiKey;

debugger;
function FoodCart(){ //this should be the constructor
};

FoodCart.prototype.findGeoLocation = function () {
    // Note: This example requires that you consent to location sharing when
    // prompted by your browser. If you see the error "The Geolocation service
    // failed.", it means you probably did not give permission for the browser to
    // locate you.
    var map, infoWindow;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 6
      });
      infoWindow = new google.maps.InfoWindow;

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    }
  $.get('https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=initMap').then(function(response) {
    console.log(response);
    // displayFoodCart(foodCartName, response.main);
  }).fail(function(error) {
    $('#map').text(error.responseJSON.message);
  });

};

FoodCart.prototype.addMarker = function(foodCartName){

};

// FoodCart.prototype.addDirections = function () {
//
// };
//
exports.foodCartModule = FoodCart;
