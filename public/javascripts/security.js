
counter = 0;

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



