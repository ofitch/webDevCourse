var text = "This is my text <br>";
var i = 0;

while (++i < 10)
	document.write(text);


var loopText = "Loop through this text";
var x = 0;
while (x < loopText.length)
	document.write(loopText[x++] + " - is position #: "+ x + "<br>");