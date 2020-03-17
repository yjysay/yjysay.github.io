// CSD 122 - DataValidation.js - Junyeong Yoo

/**
 * showStatement - A function that will validate numbers and names that you've entered
 * @return false if any of name, int1, int2, num3, num4, or num5 has been entered incorrectly and displays a cross picture that represents "false"
 * @return true if all of name, int1, int2, num3, num4, and num5 have been entered correctly and displays a tick picture that represents "true"
 */
function showStatement() {
	var name = document.dataValidation.fullName.value;
	var int1 = Number(document.dataValidation.integer1.value);
	var int2 = Number(document.dataValidation.integer2.value);
	var num3 = Number(document.dataValidation.number3.value);
	var num4 = Number(document.dataValidation.number4.value);
	var num5 = Number(document.dataValidation.number5.value);
	if (name.length < 3) {
		document.getElementById("statement").innerHTML = "Try again! Your name (no pun intended) is too short! It needs to be longer than 2 characters!";
		document.getElementById("statement").style.color = "red";
		document.getElementById("pictureResult").src = "../images/False.png"
	}
	else if (!/^[a-z.\s]+$/i.test(name)) {
		document.getElementById("statement").innerHTML = "Try again! Your name (no pun intended) has been entered incorrectly!";
		document.getElementById("statement").style.color = "red";
		document.getElementById("pictureResult").src = "../images/False.png"
	}
	else if (int1 == "" || int2 == "" || num3 == "" || num4 == "" || num5 == "") {
		document.getElementById("statement").innerHTML = "Try again! You must enter all 5 numbers!"
		document.getElementById("statement").style.color = "red";
		document.getElementById("pictureResult").src = "../images/False.png"
	}
	else if (isNaN(num3) || isNaN(num4) || isNaN(num5)) {
		document.getElementById("statement").innerHTML = "Try again! At least one of Number 3, Number 4, and Number 5 is not a number!";
		document.getElementById("statement").style.color = "red";
		document.getElementById("pictureResult").src = "../images/False.png"
	}
	else if (int1 < 1 || int1 > 100) {
		document.getElementById("statement").innerHTML = "Try again! Integer 1 is out of range! It needs to be between 1 and 100!";
		document.getElementById("statement").style.color = "red";
		document.getElementById("pictureResult").src = "../images/False.png"
	}
	else if (int2 < 50 || int2 > 150) {
		document.getElementById("statement").innerHTML = "Try again! Integer 2 is out of range! It needs to be between 50 and 150!";
		document.getElementById("statement").style.color = "red";
		document.getElementById("pictureResult").src = "../images/False.png"
	}
	else if (! Number.isInteger(int1)) {
		document.getElementById("statement").innerHTML = "Try again! You're supposed to enter an integer for Integer 1!";
		document.getElementById("statement").style.color = "red";
		document.getElementById("pictureResult").src = "../images/False.png"
	}
	else if (! Number.isInteger(int2)) {
		document.getElementById("statement").innerHTML = "Try again! You're supposed to enter an integer for Integer 2!";
		document.getElementById("statement").style.color = "red";
		document.getElementById("pictureResult").src = "../images/False.png"
	}
	else if (num3 > -1) {
		document.getElementById("statement").innerHTML = "Try again! Number 3 must be negative!";
		document.getElementById("statement").style.color = "red";
		document.getElementById("pictureResult").src = "../images/False.png"
	}
	else {
		document.getElementById("statement").innerHTML = "Hello, " + name + ". You entered: " + int1 + ", " + int2 + ", " + num3 + ", " + num4 + ", and " + num5 + 
		". The smallest number you entered was " + Math.min(num3, num4, num5) + " while the largest number you entered was " + Math.max(int1, int2, num4, num5) + 
		". And the sum of all of the numbers was " + (int1 + int2 + num3 + num4 + num5) + ".";
		document.getElementById("statement").style.color = "black";
		document.getElementById("pictureResult").src = "../images/True.png"
	}
}