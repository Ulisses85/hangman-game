var password = "Angelina Jolie";
password = password.toUpperCase();

var length = password.length;
var fails = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var password1 = "";

for (i=0; i<length; i++)
{
	if (password.charAt(i)==" ") password1 = password1 + " ";
	else password1 = password1 + "-";
}

function writePassword()
{
	document.getElementById("stage").innerHTML = password1;
}

window.onload = start;

var letters = new Array(25);

letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";



function start()
{
	
	var divContent ="";
	
	for (i=0; i<=25; i++)
	{
		var element = "lit" + i;
		divContent = divContent + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+letters[i]+'</div>';
		if ((i+1) % 7 ==0) divContent = divContent + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alphabet").innerHTML = divContent;
	
	
	writePassword();
}

String.prototype.setSign = function(index, sign)
{
	if (index > this.length - 1) return this.toString();
	else return this.substr(0, index) + sign + this.substr(index+1);
}


function check(nr)
{
	
	var scored = false;
	
	for(i=0; i<length; i++)
	{
		if (password.charAt(i) == letters[nr]) 
		{
			password1 = password1.setSign(i,letters[nr]);
			scored = true;
		}
	}
	
	if(scored == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		writePassword();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//fail
		fails++;
		var picture = "img/s"+ fails + ".jpg";
		document.getElementById("hangman").innerHTML = '<img src="'+picture+'" alt="" />';
	}
	
	//win
	if (password == password1)
	document.getElementById("alphabet").innerHTML  = "Hell Yeah Correct Password: "+password+'<br /><br /><span class="reset" onclick="location.reload()">Try Again?</span>';
	
	//loss
	if (fails>=9)
	document.getElementById("alphabet").innerHTML  = "Loser!! Correct Password: "+password+'<br /><br /><span class="reset" onclick="location.reload()">Try one more time?</span>';
}
