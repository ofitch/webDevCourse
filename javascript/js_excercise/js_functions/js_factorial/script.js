//FACTORIAL
var x = prompt("Enter a number");
function factorial(x){
	var result = x;

	if (x === 0 || x === 1)
		return 1;

	while (x > 1)
	{
		x--;
		result = x * result;
	}
	return result;
}

document.write("your result: " + factorial(x));