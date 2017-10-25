// If, else if and else

let people = 30;
let cars = 40;
let buses = 15;

if (cars > people)
	console.log("We should take the cars.");
/* The if statement writes the first string to the console because the
comparrison 40 > 30 is true. */
	else if (cars < people)
		console.log("We should not take the cars.");
	else
		console.log("We can't decide.");
// As a result it does not proceed to the 'else if' command and the 'else' command.


if (buses > cars)
	console.log("That's too many buses.");
/* The if statement does not write the first string to the console
because the comparrison 15 > 40 is false. */
	else if (buses < cars)
		console.log("Maybe we could take the buses.");
/* As a result it proceeds to the 'else if' command. It writes the second
string to the console because the comparrison 15 > 40 is true. */
	else
		console.log("We still can't decide.");
// As a result it does not proceed to the 'else' command.


if (people > buses)
	console.log("Alright, let's just take the buses.");
/* The if statement writes the first string to the console because the
comparrison 30 > 15 is true. */
	else
		console.log("Fine, let's stay home then.");
// As a result it does not proceed to the 'else' command.



// LOGICAL OPERATORS
if (people < 10 && buses > 14)
	console.log("People are not like buses.");
/* The if statement does not write the first string to the console
because only one of the comparrisons is false. */
	else if (buses == 15 || cars != 30)
		console.log("But can look like the back of buses.");
/* As a result it proceeds to the 'else if' command. It writes the second
string to the console because one of the comparrisons is true. */