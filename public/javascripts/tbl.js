let myAudio = $("#audio")[0];

$( "button" ).click(function() {
    myAudio.play();
    alert( "Handler for .click() called." );
});

$("#clickcontainer").hide();

myAudio.addEventListener("ended", function(){
    myAudio.currentTime = 0;
    $("#clickcontainer").show();
});