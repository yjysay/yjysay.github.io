/* CSD 122 - main.js - Junyeong Yoo */

/**
 * The JQuery statement that allows the index.html to fade in when it opens
 */
$("html").css("opacity", 0).slideDown(1000).animate({opacity: 1}, {queue: false, duration: 1000});

/** 
  * allInputs - The function that allows username, email, and messages to be entered
  * All of them must be entered and if not, an error message will be displayed
  */
function allInputs() {
	var writtenUsername = document.getElementById("username").value;
	var writtenEmail = document.getElementById("email").value;
	var writtenComment = document.getElementById("messages").value;
	if (writtenUsername === "") {
		document.getElementById("alert").innerHTML = "You must enter your username!";
	}
	else if (writtenEmail === "") {
		document.getElementById("alert").innerHTML = "You must enter your email!";
	}
	else if (writtenComment === "") {
		document.getElementById("alert").innerHTML = "You must enter your messages!";
	}
	else {
		document.getElementById("alert").innerHTML = "Message sent successfully!";
	}
}