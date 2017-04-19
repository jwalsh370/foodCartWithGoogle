var FoodCart = require('./../js/foodCart.js').foodCartModule;

// var displayFoodCart = function() {
//  $('.result').text("Displaying " + foodCartName + ".");
// };

$(document).ready(function() {
// code to display map with your geolocation
  var currentFoodCartObject = new FoodCart();
  $('#foodCart').submit(function() {
    var name = $('#foodCartName').val();
    $('#foodCartName').val("");
    currentFoodCartObject.addMarker(foodCartName);
  });
});
