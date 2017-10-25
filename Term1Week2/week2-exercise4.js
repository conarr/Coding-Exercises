// Choose your own adventure

console.log("You enter a dark room with two doors. Do you go through door #1, door #2 or door #3?");

var door = prompt("> ");

if (door == "1") {
	console.log("There's a giant bear here eating a cheese cake. What do you do?");
	console.log("1. Take the cake.");
	console.log("2. Scream at the bear.");

	var bear = prompt("> ");

	if (bear == "1")
		console.log("The bear eats your face off. Good job!");
	else if (bear == "2")
		console.log("The bear eats your legs off. Good job!");
	else
		console.log(`Well, doing ${bear} is probably better. Bear runs away.`);
}

else if (door == "2") {
	console.log("You stare into the endless abyss at Cthuhlu's retina.");
	console.log("1. Blueberries.");
	console.log("2. Yellow jacket clothespins.");
	console.log("3. Understanding revolvers yelling melodies.");

	var insanity = prompt("> ")

	if (insanity == "1" || insanity == "2"){
		console.log("Your body survives powered by a mind of jello. Good job!");
		}
	else {
		console.log("The insanity rots your eyes into a pool of muck. Good job!");
	}

else (door == "3") {
	console.log("There is a large snake ready to hug you. What do you do?");
	console.log("1. Give him a hug?");
	console.log("2. Take out your chainsaw and cut him up.");

	var snake = prompt("> ");

	if (snake == "1")
		console.log("The snake crushes you to death. Game over, man!");
	else if (snake == "2")
		console.log("The snake pieces are no longer a threat. Good job!");
	else
		console.log(`Well, doing ${snake} is better. Who knew.`);
}