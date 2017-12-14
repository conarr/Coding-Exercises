var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

//ES6 example
const numbers = [2, 4, 8, 10];
const halves = numbers.map(x => x / 2);
// halves is now [1, 2, 4, 5]
// numbers is still [2, 4, 8, 10]

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]