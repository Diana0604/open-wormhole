console.log('connected');

var password = document.getElementById("password");
var form = document.getElementById("form");

function validatePassword(){
  if(password.value != "2") {
		event.preventDefault();
		return;
	}
}

form.addEventListener("submit", function(event){
    validatePassword();
  });


