/*
** scene.js
** --
** AnimalKing Game
*/

var canva = $("#gameCanva").get(0);
var camTargetX = 0, camTargetY = 0, camTargetZ = 0;
var engine, scene, playerCam;

// booleans for view control;
var viewUp = false, viewLeft = false, viewRight = false, viewDown = false;

// setting scene and running game loop
$(document).ready(function(){

  initScene();
  engine.runRenderLoop(gameLoop);
});

// setting scene, camera
function initScene() {

  engine = new BABYLON.Engine(canva, true);
  scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3.White();
  playerCam = new BABYLON.FreeCamera("playerCam", new BABYLON.Vector3(0, 0, -10), scene);
  playerCam.setTarget(new BABYLON.Vector3(camTargetX, camTargetY, camTargetZ));

  // adding random box
  var box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
}

function moveViewIfNeeded(){

  // move view
  if (viewUp) {
    playerCam.rotation.x -= mousePanelSensitivity;
    console.log("playerCamRotationX = " + playerCam.rotation.x);
  } else if (viewLeft) {
    playerCam.rotation.y -= mousePanelSensitivity;
    console.log("playerCamRotationY = " + playerCam.rotation.y);
  } else if (viewRight) {
    playerCam.rotation.y += mousePanelSensitivity;
    console.log("playerCamRotationY = " + playerCam.rotation.y);
  } else if (viewDown) {
      playerCam.rotation.x += mousePanelSensitivity;
      console.log("playerCamRotationX = " + playerCam.rotation.x);
  }
}

function gameLoop() {

  moveViewIfNeeded();

  scene.render();
}
