/* This is an example of SWITCH CONDITIONAL OPERATOR where a value is assigned to
a variable based on a condition. In my example the variable 'date' is assigned by the
new Date() function and the variable 'day' is assigned by the date.getDate() function.
The string will be written to the screen depending on the result of the date.getDay()
function. For example Sunday would be 0 so the string "Today is Sunday." would be
written to the screen. */

var date = new Date(),
    day = date.getDay();

switch (day) {
    case 0:
        console.log("Today is Sunday.");
        break;
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;
    case 5:
        console.log("Today is Friday.");
        break;
    case 6:
        console.log("Today is Saturday.");
        break;
}