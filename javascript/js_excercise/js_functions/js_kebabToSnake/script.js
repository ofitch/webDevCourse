//Using str.replace();

function kebabToSnake(str)
{
	var res;
	res = str.replace(/-/g, '_');
	console.log(res);
}

//From scratch

function replaceUnder(str)
{
	var i = 0;			//iteration starts;
	var char = "";		//character;
	var newStr = "";	//my new string;
	while(i < str.length)	//loop while str is not over 
	{
		if(str.charAt(i) === "-"){	//while char at str is a score;
			char = "_";				//define underscore to char;
			newStr = newStr + char;	//replace score with underscore;
		}
		else{
			char = str.charAt(i);	//if not "-" assign character to string;
			newStr = newStr + char;	//pass char to string;
		}

	i++;	//iterate one;
	}
	console.log(newStr);	//log newStr;
}