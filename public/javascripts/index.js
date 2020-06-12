let myAudio = $("#audio")[0];

myAudio.addEventListener("ended", function(){
    myAudio.currentTime = 0;
    console.log('ended');
    $("#fax").show();
    $("#plug").show();
});