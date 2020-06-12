let myAudio = $("#audio")[0];

$( "button" ).click(function() {
    myAudio.play();
    alert( "Handler for .click() called." );
});

/*
myAudio.addEventListener("ended", function(){
    myAudio.currentTime = 0;
    //$(".clickcontainer").show();
    //$("#call").hide();
});


*/