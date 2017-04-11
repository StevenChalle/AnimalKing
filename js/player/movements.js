/*
** movements.js
** --
** AnimalKing Game
*/

var oldX, oldY;
var mouseSensitivity = 0.015;
var mousePanelSensitivity = 0.06;

// adding camera controls
$(document).ready(function(){

  playerCam.attachControl(canva, false);
  playerCam.speed = 1;
  playerCam.keysUp.push(90);
  playerCam.keysDown.push(83);
  playerCam.keysLeft.push(81);
  playerCam.keysRight.push(68);
  playerCam.inputs.attached.mouse.detachControl();

  $("#gameCanva").mousemove(function(event){

    // move camera view to the left or right, then up and down
    if (event.pageX < oldX) {
      playerCam.rotation.y -= mouseSensitivity;
    } else if (event.pageX > oldX) {
      playerCam.rotation.y += mouseSensitivity;
    } if (event.pageY < oldY) {
      playerCam.rotation.x -= mouseSensitivity;
    } else if (event.pageY > oldY) {
      playerCam.rotation.x += mouseSensitivity;
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
