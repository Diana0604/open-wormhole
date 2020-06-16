var startMoving = null;

let myAudio = $("#audio")[0];
let incomingCall = $("#incomingCall")[0];
var called = false;
let maxX = window.innerWidth;
let maxY = window.innerHeight;

myAudio.addEventListener("ended", function(){
  myAudio.currentTime = 0;
  $(".fax").hide();
  window.location.href = "http://www.w3schools.com";
});

$(".fax").hide();
$("#call").hide();

$( "#call" ).click(function() {
    alert( "PLEASE LISTEN CAREFULLY" );
    myAudio.play();
    incomingCall.pause();
    $("#call").hide();
    startMoving = setInterval(moveElement, 2000);
});

function phoneCalling() {
    var call = $("#call");
    var destination = $('.next').offset();
    call.css({top: destination.top - 100, left: destination.left -10});
    call.show();
    shake(document.getElementById("call"));
}

$(".next").click(function() {
    if(!called) {
        called = true;
        incomingCall.play();
        phoneCalling();
    }
});





initialX = [1, 1, -1, -1];
initialY = [1, -1, 1, -1];



var movingElements = [];
var posX = [];
var posY = [];
var dirX = [];
var dirY = [];

var faxes = document.getElementsByClassName("fax");
var counter = 0;

function moveElement() {
    if(counter >= faxes.length) clearInterval(startMoving);
    var element = faxes[counter];
    element.style.display = "block";
    if(movingElements.indexOf(element) != -1) return;
    movingElements.push(element);
    var i = movingElements.indexOf(element);
    //get initial random variables
    posX[i] = Math.floor(Math.random()*maxX);
    posY[i] = Math.floor(Math.random()*maxY);
    var dirI = Math.floor(Math.random() * 4);
    dirX[i] = initialX[dirI];
    dirY[i] = initialY[dirI];
    movingElements[i].style.top = posY[i] + 'px';
    movingElements[i].style.left = posX[i] + 'px';
    counter++;
}

setInterval(frame, 5);
function frame() {
    for(var i = 0; i < movingElements.length; i++) {
        var elem = movingElements[i];
        function checkDir() {
            if(posX[i] + elem.width < 0) dirX[i] = 1;
            if(posX[i] > maxX) dirX[i] = -1;
            if(posY[i] + elem.height < 0) dirY[i] = 1;
            if(posY[i] > maxY) dirY[i] = -1;
        }
        checkDir();

        //move element
        posX[i] = posX[i] + dirX[i];
        posY[i] = posY[i] + dirY[i];
        elem.style.top = posY[i] + 'px';
        elem.style.left = posX[i] + 'px';
    }
}
//generate random dir every 2 seconds
setInterval(newDir, 5000)
function newDir(){
    var i = Math.floor(Math.random()*movingElements.length);
    var newI = Math.floor(Math.random() * 4);
    dirX[i] = initialX[newI];
    dirY[i] = initialY[newI];
}


/*
for (var i = 0; i < faxes.length; i++) {
    moveElement(faxes[i]);
}
*/
var shakingElements = [];
var shake = function (element, magnitude = 7, angular = false) {
    //First set the initial tilt angle to the right (+1) 
    var tiltAngle = 1;
  
    //A counter to count the number of shakes
    var counter = 1;
  
    //Capture the element's position and angle so you can
    //restore them after the shaking has finished
    var startX = 0,
        startY = 0,
        startAngle = 0;
  
    // Divide the magnitude into 10 units so that you can 
    // reduce the amount of shake by 10 percent each frame
  
    //The `randomInt` helper function
    var randomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    //Add the element to the `shakingElements` array if it
    //isn't already there
    if(shakingElements.indexOf(element) === -1) {
      //console.log("added")
      shakingElements.push(element);
  
      //Add an `updateShake` method to the element.
      //The `updateShake` method will be called each frame
      //in the game loop. The shake effect type can be either
      //up and down (x/y shaking) or angular (rotational shaking).
        upAndDownShake();
    }
  
    //The `upAndDownShake` function
    function upAndDownShake() {
  
      //Shake the element while the `counter` is less than 
      //the `numberOfShakes`
  
        //Reset the element's position at the start of each shake
        element.style.transform = 'translate(' + startX + 'px, ' + startY + 'px)';
  
        //Randomly change the element's position
        var randomX = randomInt(-magnitude, magnitude);
        var randomY = randomInt(-magnitude, magnitude);
  
        element.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';
  
        //Add 1 to the counter
  
        requestAnimationFrame(upAndDownShake);
  
      //When the shaking is finished, restore the element to its original 
      //position and remove it from the `shakingElements` array
    }
  
    //The `angularShake` function
    function angularShake() {
      if (counter < numberOfShakes) {
        console.log(tiltAngle);
        //Reset the element's rotation
        element.style.transform = 'rotate(' + startAngle + 'deg)';
  
        //Reduce the magnitude
        magnitude -= magnitudeUnit;
  
        //Rotate the element left or right, depending on the direction,
        //by an amount in radians that matches the magnitude
        var angle = Number(magnitude * tiltAngle).toFixed(2);
        console.log(angle);
        element.style.transform = 'rotate(' + angle + 'deg)';
        counter += 1;
  
        //Reverse the tilt angle so that the element is tilted
        //in the opposite direction for the next shake
        tiltAngle *= -1;
  
        requestAnimationFrame(angularShake);
      }
  
      //When the shaking is finished, reset the element's angle and
      //remove it from the `shakingElements` array
      if (counter >= numberOfShakes) {
        element.style.transform = 'rotate(' + startAngle + 'deg)';
        shakingElements.splice(shakingElements.indexOf(element), 1);
        //console.log("removed")
      }
    }
  
  };