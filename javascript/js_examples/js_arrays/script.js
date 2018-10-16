var friends = ["charlie", "liz", "david", "matias"];
var i = 0;
while (i < friends.length)
{
	console.log(friends[i]);
	i++;
}

friends[4] = "amalie";


//Initialize an empty array two ways
var newFriends = [];
var newFriends = new Array();

//Arrays can hold any type of data
var random_collection = [49, true, "Hermione", null];
console.log(random_collection);

//Arrays have a length property
var nums = [45, 39, 89, 24];
console.log(nums.length);