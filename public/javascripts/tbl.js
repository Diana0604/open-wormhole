let myAudio = $("#audio")[0];

$( "button" ).click(function() {
    myAudio.play();
    alert( "PLEASE LISTEN CAREFULLY" );
});

$("#clickcontainer").hide();

myAudio.addEventListener("ended", function(){
    myAudio.currentTime = 0;
    $("#clickcontainer").show();
});