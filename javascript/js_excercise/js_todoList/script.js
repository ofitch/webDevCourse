window.setTimeout(function(){
var todos = ["Buy new turtle!"];

var input = prompt("What would you like to do?");

while (input !== "quit"){
		// handle input
	if (input === "list"){
		console.log(todos);
	} else if (input === "new"){
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		//add new todo array
		todos.push(newTodo);
	}
//ask for new input
input = prompt("What would you like to do?");
}
console.log("APP IS CLOSING");

}, 500);
