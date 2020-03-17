/* CSD 122 - TemperatureConversion.js - Junyeong Yoo */

/**
 * ConvertCtoF - The function that converts degrees Celsius to degrees Fahrenheit and posts a gif image depending on the temperature
 * @param degreesCelsius the temperature in degrees Celsius that has been entered by a user
 * @return fahrenheit the temperature that has been converted from Celsius to Fahrenheit.
 * Initial function "ConvertCtoF" provided by ZyBooks with rest of the codes written by Junyeong Yoo
 */
function ConvertCtoF(degreesCelsius) {
	var fahrenheit = degreesCelsius * (9 / 5) + 32;
	if (isNaN(fahrenheit)) {
		document.getElementById("ErrDiv").innerHTML = "You need to type in a number! Try again!";
	}
	else if (fahrenheit < 32) {
		document.getElementById("WeatherImage").src = "../images/Snowy.gif";
		document.getElementById("FilmSource").innerHTML = "Gif image from '5 Centimeters Per Second'";
	}
	else if (fahrenheit <= 50) {
		document.getElementById("WeatherImage").src = "../images/Rainy.gif";
		document.getElementById("FilmSource").innerHTML = "Gif image from 'The Garden of Words'";
	}
	else {
		document.getElementById("WeatherImage").src = "../images/Sunny.gif";
		document.getElementById("FilmSource").innerHTML = "Gif image from 'Weathering with You'";
	}
	return fahrenheit;
}

/**
 * ConvertFtoC - The function that converts degrees Fahrenheit to degrees Celsius and posts a gif image depending on the temperature
 * @param degreesFahrenheit the temperature in degrees Fahrenheit that has been entered by a user
 * @return celsius the temperature that has been converted from Fahrenheit to Celsius.
 * Initial function "ConvertFtoC" provided by ZyBooks with rest of the codes written by Junyeong Yoo
 */
function ConvertFtoC(degreesFahrenheit) {
	var celsius = (degreesFahrenheit - 32) * (5 / 9);
	if (isNaN(celsius)) {
		document.getElementById("ErrDiv").innerHTML = "You need to enter a number! Try again!";
	}
	else if (celsius < 0) {
		document.getElementById("WeatherImage").src = "../images/Snowy.gif";
		document.getElementById("FilmSource").innerHTML = "Image from 5 Centimeters Per Second";
	}
	else if (celsius <= 10) {
		document.getElementById("WeatherImage").src = "../images/Rainy.gif";
		document.getElementById("FilmSource").innerHTML = "Gif image from 'The Garden of Words'";
	}
	else {
		document.getElementById("WeatherImage").src = "../images/Sunny.gif";
		document.getElementById("FilmSource").innerHTML = "Gif image from 'Weathering with You'";
	}
	return celsius;
}

/**
 * bodyLoaded - The function that validates the input by checking if the entered input is a number or not.
 * Displays an error message if the input is not a number.
 * Initial function "bodyLoaded" provided by ZyBooks with rest of the codes written by Junyeong Yoo
 */
function bodyLoaded() {
	document.getElementById("ConvertButton").onclick = function() {
		var celsius = document.getElementById("CInput").value;
		if (celsius != "") {
			if (isNaN(parseFloat(celsius))) {
				document.getElementById("ErrDiv").innerHTML = "You need to enter a number! Try again!";
			}
			else {
				document.getElementById("ErrDiv").innerHTML = "";
				document.getElementById("FInput").value = ConvertCtoF(celsius);
			}
		}
		else {
			var fahrenheit = document.getElementById("FInput").value;
			if (isNaN(parseFloat(fahrenheit))) {
				document.getElementById("ErrDiv").innerHTML = "You need to enter a number! Try again!";
			}
			else {
				document.getElementById("ErrDiv").innerHTML = "";
				document.getElementById("CInput").value = ConvertFtoC(fahrenheit);
			}
		}
	}
	document.getElementById("CInput").oninput = function() {
		document.getElementById("FInput").value = "";
	}
	document.getElementById("FInput").oninput = function() {
		document.getElementById("CInput").value = "";
	}
}