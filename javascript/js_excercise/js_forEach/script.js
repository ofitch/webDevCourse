var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ["red", "orange", "yellow", "green"];

//print the array colors for each element in numbers (10 times);
numbers.forEach(function(){
	console.log(colors);
});

//print element at position[x] in the array colors

colors.forEach(function(color){
	console.log("color: " + color);
});

//print element in array numbers for each color

colors.forEach(function(){
	console.log(numbers);
});

//print multiple of 3

numbers.forEach(function(num){
	if(num % 3 === 0)
		console.log("using forEach:" + num);
});

//print multiple of 3 using for loop

for(var i = 0; i < numbers.length; i++){
	if(numbers[i] % 3 === 0)
		console.log("Using forLoops: " + numbers[i]);
}

//print multiple of 3 using a while loop
var count = 0;
while(count < numbers.length){
	if(numbers[count] % 3 === 0)
		console.log("using while loops: " + numbers[count]);
	count++;
}

//forEach takes three arguements
numbers.forEach(function(el, i, arr){
	console.log("element = " + el + " ","array[" + i + "]", arr);
});