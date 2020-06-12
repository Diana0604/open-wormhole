console.log('hello world');

let myAudio = $("#audio")[0];

myAudio.addEventListener("ended", function(){
    myAudio.currentTime = 0;
    console.log('ended');
    //$("#fax").toggle();
    //$("#plug").toggle();
    $("#fax").show();
    $("#plug").show();
});

//$("#fax").toggle();