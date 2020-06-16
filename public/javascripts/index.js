let myAudio = $("#audio")[0];

$(".hidden").hide();

myAudio.addEventListener("ended", function(){
    myAudio.currentTime = 0;
    console.log('ended');
    $(".hidden").show();
});

//setInterval(increaseWidth, 50);

var posLeft = 470;
var posBot = 270;
function increaseWidth() {
    $("#open-wormhole").width($("#open-wormhole").width() + 5);
    posLeft -= 0.5;
    posBot -= 0.5;
    $("#open-wormhole").css({ 'left': posLeft + 'px', 'bottom': posBot + 'px'})
}