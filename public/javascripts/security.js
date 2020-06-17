
var counter = 0;

let myAudio = $("#audio")[0];
let backgroundAudio = $("#backgroundaudio")[0];

let isPlaying = false;

["click", "touchmove"].forEach((eventName)=>{
  window.addEventListener(eventName, ()=>{
    if(!isPlaying){
      try{
        backgroundAudio.play()
        isPlaying = true;
      }catch(e){
        console.warn(e.message);
      }
      
    }
  }); 
});
var password = document.getElementById("password");
var form = document.getElementById("form");

var tries = 0;

function validatePassword(){
  tries++;
  if(password.value != "Betherightchoice" && password.value != 'betherightchoice') {
    if(tries === 1) alert('WRONG: TRY AGAIN');
    if(tries === 2) alert('HINT: NO SPACES');
    if(tries === 3) alert('HINT: betherightchoice');
		event.preventDefault();
		return;
  }
  myAudio.play();
  backgroundAudio.pause()
  if(counter < 4) event.preventDefault();
	if(counter === 0) {
    event.preventDefault();
    $("#submit").css({"position" : "relative", "left": "50%"})
  }
  if(counter === 1){
    event.preventDefault();
    $("#submit").css({ "left": "10%"})
  }
  if(counter === 2){
    event.preventDefault();
    $("#submit").css({ "left": "80%"})
  }
  if(counter === 3){
    event.preventDefault();
    $("#submit").css({ "left": "40%"})
  }
  counter++;
}

myAudio.addEventListener("ended", function(){
	myAudio.currentTime = 0;
	window.location.replace("/connectivity");
});

$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

form.addEventListener("submit", function(event){
    validatePassword();
  });



