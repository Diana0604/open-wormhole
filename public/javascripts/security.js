console.log('connected');

counter = 0;

let myAudio = $("#audio")[0];
var password = document.getElementById("password");
var form = document.getElementById("form");

function validatePassword(){
  if(password.value != "Betherightchoice") {
		alert('WRONG: TRY AGAIN');
		event.preventDefault();
		return;
	}
	myAudio.play();
	if(counter === 0) {
		event.preventDefault();
	}
	counter++;
}

myAudio.addEventListener("ended", function(){
	myAudio.currentTime = 0;
	window.location.replace("/connectivity");
});

form.addEventListener("submit", function(event){
    validatePassword();
  });

//form.onsubmit = validatePassword;



