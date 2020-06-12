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

dirX = [1, 1, -1, -1];
dirY = [1, -1, 1, -1];

dirI = 3;

var looping = true;

function moveCall() {
    var elem = document.getElementById("call");
    var posX = 0;
    var posY = 0;
    var id = setInterval(frame, 5);
    function frame() {
        //console.log(looping);
      if ((posX%600 <= 0.3 && posX%600 >= -0.3) || (posY%600 <= 0.3 && posY%600 >= -0.3) && !looping) {
        //console.log('arrived');
        dirI++;
        if(dirI === 4) dirI = 0;
        looping = true;
      }
      if(!(posX%600 <= 0.3 && posX%600 >= -0.3) || (posY%600 <= 0.3 && posY%600 >= -0.3)) looping = false;
        posX = posX + dirX[dirI];
        posY = posY + dirY[dirI];
        elem.style.top = posY + 'px';
        elem.style.left = posX + 'px';
    }
}

moveCall();