//create secretNumber
// var secretNumber = 2;
//ask user for guess
// var guessNum = prompt("Guess the number:");

//check guess is right

// if(Number(guessNum) === secretNumber)
// {
// 	alert("you got it right");
// } else if(Number(guessNum) < secretNumber) {
// 	alert("You are low; guess higher");
// } else {
// 	alert("Too high; guess lower");
// }

	//Neater

// var secretNumber = 2;

// var guessNum = Number(prompt("Guess the number:"));

// if (guessNumber === secretNumber){
// 	alert("You got it right!");
// }else if (guessNumber < secretNumber){
// 	alert("The number is too low; guess again!");
// }else {
// 	alert("You are too high; guess again!");
// }

	//better

var secretNumber = 2;

var guessNum = prompt("Guess the number:");
var num = Number(guessNum);

if(num === secretNumber)
{
	alert("You got it right");
}else if(num < secretNumber){
	alert("low;try again");
}else {
	alert("high;try again");
}


