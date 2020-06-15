console.log('connected');

var password = document.getElementById("password");
var form = document.getElementById("form");

function validatePassword(){
  if(password.value != "betherightchoice") {
		event.preventDefault();
		return;
	}
	/*
	if(password.value == "betherightchoice") {
    console.log('correct password!');
	}
	*/
}

form.addEventListener("submit", function(event){
    validatePassword();
  });

//form.onsubmit = validatePassword;



