/*
** characterMovements.js
** --
** AnimalKing Game
*/

var oldX, oldY;
var mouseSensitivity = 0.015;
var mousePanelSensitivity = 0.04;

// adding camera controls
$(document).ready(function(){

  playerCam.attachControl(canva, true);

  // on mousemove
  $("#gameCanva").mousemove(function(event){

    // move camera view to the left or right, then up and down
    if (event.pageX < oldX) {
      playerCam.rotation.y -= mouseSensitivity;
      console.log("playerCamRotationY = " + playerCam.rotation.y);
    } else if (event.pageX > oldX) {
      playerCam.rotation.y += mouseSensitivity;
      console.log("playerCamRotationY = " + playerCam.rotation.y);
    } if (event.pageY < oldY) {
      playerCam.rotation.x -= mouseSensitivity;
      console.log("playerCamRotationX = " + playerCam.rotation.x);
    } else if (event.pageY > oldY) {
      playerCam.rotation.x += mouseSensitivity;
      console.log("playerCamRotationX = " + playerCam.rotation.x);
    }

    oldX = event.pageX;
    oldY = event.pageY;
  });

  // move camera view when mouse on topPanel
  $("#topPanel").mouseenter(function(){
    viewUp = true;
  }).mouseleave(function(){
    viewUp = false;
  }); $("#leftPanel").mouseenter(function(){
    viewLeft = true;
  }).mouseleave(function(){
    viewLeft = false;
  }); $("#rightPanel").mouseenter(function(){
    viewRight = true;
  }).mouseleave(function(){
    viewRight = false;
  }); $("#botPanel").mouseenter(function(){
    viewDown = true;
  }).mouseleave(function(){
    viewDown = false;
  });


});
