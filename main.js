// Write your JavaScript code here!
var planets = [
  ['Sun', 27.9],
  ['Mercury', 0.377],
  ['Venus', 0.9032],
  ['Earth', 1],
  ['Moon', 0.1655],
  ['Mars', 0.3895],
  ['Jupiter', 2.640],
  ['Saturn', 1.139],
  ['Uranus', 0.917],
  ['Neptune', 1.148],
  ['Pluto', 0.06]  
];


for (var i = 0; i < planets.length; i++) {
    $("<option>").val(planets[i][1]).html(planets[i][0]).appendTo("#planets");
};

$(function() {
   $('#calculateButton').on('click', function() {
       var weight = $('#userWeight').val();
       var gravity = $('#planets').val();
       var total = weight * gravity;
       var names = $('#planets :selected').html();
       $('#convertedWeight').html('If you were on ' + names + ', you would weigh ' + parseInt(total) + 'lbs!');
   })

});