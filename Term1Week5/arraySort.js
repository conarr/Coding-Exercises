// .sort arranges alphabetically
var fruit = ['cherries', 'apples', 'bananas', 'peaches'];
fruit.sort();

// .sort also arranges numerically but note that 10 comes before 2,
// because '10' is mix of two characters '1' and '0' so '10' is before '2' in Unicode code point order.

var scores = [1, 10, 21, 2]; 
scores.sort();

var scores = [1, 10, 21, 2]; 
scores.reverse(); // [1, 10, 2, 21]
// Note that 10 comes before 2,
// because '10' is mix of two characters '1' and '0' so '10' is before '2' in Unicode code point order.

var things = ['word', 'Word', '1 Word', '2 Words'];
things.reverse(); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters,
// which come before lower case letters.

