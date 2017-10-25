// A way to exit a While Loop

var fish = 1;
console.log("I now have 1 fish.<br>");
         
while (fish < 30)
	{
	if (fish == 15){
	break; // breaks out of loop completely
	}
	fish = fish + 1;
        console.log("I now have " + fish + " fish.<br>");
        }
        console.log("Exiting the loop!<br>");