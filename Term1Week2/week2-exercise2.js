// If Statements

let people = 20;
let cats = 30;
let dogs = 15;

if (people < cats)
	console.log("Too many cats! The world is doomed!")
/* The if statement writes the string to the console because the
comparrison 20 < 30 is true. */

if (people > cats)
	console.log("Not many cats! The world is saved!")
// The if statement does nothing because the comparrison 20 > 30 is false.

if (people < dogs)
	console.log("The world is drooled on!")
// The if statement does nothing because the comparrison 20 < 15 is false.

if (people > dogs)
	console.log("The world is dry!")
/* The if statement writes the string to the console because the
comparrison 20 > 15 is true. */

dogs += 5
if (people >= dogs)
	console.log("People are greater than equal to dogs.")
/* The if statement writes the string to the console because the
comparrison 20 >= 20 is true. */

if (people <= dogs)
	console.log("People are less than equal to dogs.")
/* The if statement writes the string to the console because the
comparrison 20 <= 20 is true. */

if (people == dogs)
	console.log("People are dogs.")
/* The if statement writes the string to the console because the
comparrison 20 == 20 is true. */


// OTHER BOOLEAN STATEMENTS
let people = 20;
let cats = 30;
let dogs = 15;

if (people != dogs)
	console.log("People are not like dogs.")
/* The if statement writes the string to the console because the
comparrison 20 != 15 is true. */

if (people == dogs)
	console.log("People are not like dogs.")
// The if statement does nothing because the comparrison 20 == 15 is false.

if (dogs === dogs)
	console.log("Dogs are dogs.")
/* The if statement writes the string to the console because the
comparrisons 20 === 15 and dogs === dogs are both true. */

if (dogs === dogs)
	console.log("Dogs are dogs.")
	console.log("What I said above!!")
	console.log(`${dogs} + ${cats}`)
/* The if statement writes the string to the console because the
comparrisons 20 === 15 and dogs === dogs are both true. */



// OTHER BOOLEAN STATEMENTS
var people = 20;
var cats = 30;
var dogs = 15;

if (dogs === cats)
	console.log("Dogs are dogs.")

	else if (dogs === dogs)
		console.log("What I said above!!")
		console.log(`If I add ${dogs} and ${cats} I get ${dogs + cats}`);
/* The if statement writes the string three strings to the console because the
comparrisons 15 === 15 and dogs === dogs are true. */