// The number of cars
var cars = 100;
// The spaces in the car
var space_in_a_car = 4.0;
// There are 30 drivers
var drivers = 30;
// There are 90 passengers
var passengers = 90;
// Empty cars
var cars_not_driven = cars - drivers;
// Cars with drivers
var cars_driven = drivers;
// Carpool capacity
var carpool_capacity = cars_driven * space_in_a_car;
// Average people in the cars
var average_passengers_per_car = passengers / cars_driven;

console.log("There are", cars, "cars available.");
console.log("There are only", drivers, "drivers available.");
console.log("There will be", cars_not_driven, "empty cars today.");
console.log("We can transport", carpool_capacity, "people today.");
console.log("We have", passengers, "to carpool today.");
console.log("We need to put about", average_passengers_per_car, "in each car.");



// All changed to Camel Case
var cars = 100;
var spaceInACar = 4.0;
var drivers = 30;
var passengers = 90;
var carsNotDriven = cars - drivers;
var carsDriven = drivers;
var carpoolCapacity = carsDriven * spaceInACar;
var averagePassengersPerCar = passengers / carsDriven;

console.log("There are", cars, "cars available.");
console.log("There are only", drivers, "drivers available.");
console.log("There will be", carsNotDriven, "empty cars today.");
console.log("We can transport", carpoolCapacity, "people today.");
console.log("We have", passengers, "to carpool today.");
console.log("We need to put about", averagePassengersPerCar, "in each car.");