console.log('connected');

var password = document.getElementById("password");
var form = document.getElementById("form");

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

function validatePassword(){
  if(password.value != "2" && password.value != "two" && password.value != "Two") {
		event.preventDefault();
		return;
	}
}

form.addEventListener("submit", function(event){
    validatePassword(
);
  });



