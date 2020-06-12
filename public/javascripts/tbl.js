let myAudio = $("#audio")[0];

$("#faxcontainer").hide();

$( "#call" ).click(function() {
    console.log('image clicked');
    myAudio.play();
    alert( "PLEASE LISTEN CAREFULLY" );
});



myAudio.addEventListener("ended", function(){
    myAudio.currentTime = 0;
    $("#faxcontainer").show();
});

function moveCall() {
    var elem = document.getElementById("call");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 600) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
}

moveCall();