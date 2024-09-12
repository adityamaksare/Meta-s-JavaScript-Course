/*
 If the function is a property of an object,
 it is then referred to as a method. 
*/

var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()


car.turnKey = function() {   // method
  console.log('engine running');  
}

console.log(car);
