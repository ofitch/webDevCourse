window.setTimeout(function (){

var todo = [];
var usrInput = prompt("What would you like to do?");

while(usrInput !== "quit"){
	if(usrInput === "new"){
		addTodo();
	}else if(usrInput === "list"){
		showList();
	}else if(usrInput === "delete"){
		delTodo();
	};

	usrInput = prompt("What would you like to do?");
}

console.log("Bye Bye! Exiting!");

// 				FUNCTIONS
//Display list
function showList(){
	//Using forEach
	console.log("---------------");
	todo.forEach(function(elem, i){
		console.log("[" + i + "]", ": " + elem);
	});
	console.log("---------------");
}

//Add todo
function addTodo(){
	var newArr = prompt("Put your task: ");
	todo.push(newArr);
	console.log("Todo added!");
}

function delTodo(){
	var i = prompt("Input index you want to delete: ")
	todo.splice(i, 1);
}



}, 500);