//Print reverse	input: printReverse([1,2,3,4]);
//4
//3
//2
//1
function	prntReverse(input){
	for(var i = input.length -1; i >= 0; i--){
		console.log(input[i]);
	}
}

//Write a function isUniform() which takes an array as an
//arguement and returns true if all elements in the array are identical
function	isUniform(arr){
	var result;
	for(var i = 0; i < arr.length; i++){
		if(arr[0] === arr[i])
			result = true;
		else if(arr[0] !== arr[i]){
			return false;	
		}
	}
	return result;
}

//Write function sumArray(); accepts an array of num. and
//returns the sum of all numbers in the array
function	sumArray(arr){
	var result = 0;
	for(var i = 0; i < arr.length; i++){
		if((typeof(arr[i]) !== "number"))
			return NaN;
		else
			result += arr[i];
	}
	return result;
}

//Write a function max() that accepts an array of numbers
//and returns the maximum number in the array

function	max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max)
			max = arr[i];
	}
	return max;
}