//map calls the provided callback function once per element of an array, in order, and builds a new array with the results.
//use case: The following code takes an array of cars and creates a new array containing the new formatted cars.

var kvArray = [{id:1, value:100000},
               {id:2, value:200000},
               {id:3, value: 300000}];

var reformattedArray = kvArray.map(function(car){
   var rcar = {};
   rcar[car.id] = obj.value;
   return rcar;
});