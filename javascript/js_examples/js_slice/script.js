var fruits = ['Bananas', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3rd fruits;
//specify index where the new array starts(1) and ends(3);
var citrus = fruits.slice(1, 3);

console.log("This are fruits: " + fruits);
console.log("This fruits are citrus: " + citrus);

var nums = [1, 2, 3];
var otherNums = nums.slice();

var array = ["this", "is", 1, 3, "a", 2, "random", "quote"];
var letters = array.slice(0, 2);
var letters2 = array.slice(4, 5);
var letters3 = array.slice(6,8);