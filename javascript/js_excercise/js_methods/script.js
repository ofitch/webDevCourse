var obj = {
	name: "chuck",
	age: 45,
	isCool: false,
	friends: ["bob", "tina"],
	add: function(x, y){
		return x + y
	} 
};


function speak(){
	return "WOOF";
};

function speak(){
	return "MEOW";
}

var dogSpace = {};

dogSpace.speak = function(){
	return "WOOF";
}

var catSpace = {};

catSpace.speak = function(){
	return "MEOW";
}