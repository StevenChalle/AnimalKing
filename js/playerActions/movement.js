/*
** movement.js
** --
** AnimalKing Game
*/

var oldX, oldY;
var mouseSensitivity = 0.3;

// adding camera controls
$(document).ready(function(){

  // playerCam.attachControl(canva, true);

  // on mousemove
  $(document).mousemove(function(event){

    //move camera view to the left then right
    if (event.pageX < oldX) {
        camTargetX -= mouseSensitivity;
        playerCam.setTarget(new BABYLON.Vector3(camTargetX, camTargetY, camTargetZ));
    } else if (event.pageX > oldX) {
        camTargetX += mouseSensitivity;
        playerCam.setTarget(new BABYLON.Vector3(camTargetX, camTargetY, camTargetZ));
    }

    //move camera view up then down
    if (event.pageY < oldY) {
        camTargetY += mouseSensitivity;
        playerCam.setTarget(new BABYLON.Vector3(camTargetX, camTargetY, camTargetZ));
    } else if (event.pageY > oldY) {
        camTargetY -= mouseSensitivity;
        playerCam.setTarget(new BABYLON.Vector3(camTargetX, camTargetY, camTargetZ));
    }

    oldX = event.pageX;
    oldY = event.pageY;
  });

});
