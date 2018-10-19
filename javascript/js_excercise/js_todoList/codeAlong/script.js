window.setTimeout(function(){
var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit"){
		// handle input
	if (input === "list"){
		//with forloops
		console.log("-------------------");
		for(var i = 0; i < todos.length; i++){
			console.log(i + ": " + todos[i]);
		}
		console.log("-------------------");		
		//with method forEach
		todos.forEach(function(elem, i){
			console.log(i + ": " + elem);
		});
		console.log("-------------------")
	} else if (input === "new"){
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		//add new todo array
		todos.push(newTodo);
		console.log("Added todo");
		//If delete is type
	} else if (input === "delete"){
		//Take index that we want to delete
		var i = prompt("Select todo index (number)");
		//splice(index, Number of elements)
		todos.splice(i, 1);
		console.log("Item deleted");
	}
//ask for new input
input = prompt("What would you like to do?");
}
console.log("APP IS CLOSING NOW, THANK YOU!");

}, 500);
