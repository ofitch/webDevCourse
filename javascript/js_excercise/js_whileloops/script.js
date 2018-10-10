
//Numbers 9 through 20
var x = 9;

while(x < 21)
	document.write(x++ + ", ");

document.write("<br>");

//Numbers that are even
var even = 8;

while (even < 40)
	document.write((even+=2) + ", ");

document.write("<br>");

//Numbers that are odd
var odd = 300;

while (odd <= 333)
{
	if ( odd % 2 === 1){
		document.write(odd++ + ", ");
	}else{
		odd++;
	}
}

document.write("<br>");

//Numbers that are divisible by 3 and 5 up to 50
var i = 5;

while (i <= 50)
{
	if ((i%5) === 0 && (i%3) === 0)
		document.write(i++ + ", ");
	else
		i++;
}