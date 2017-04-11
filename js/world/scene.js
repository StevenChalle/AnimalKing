/*
** scene.js
** --
** AnimalKing Game
*/

var canva = $("#gameCanva").get(0);
var engine, scene, playerCam;

// booleans for view control; dash;
var viewUp = false, viewLeft = false, viewRight = false, viewDown = false;
var dashLeft = false, dashRight = false, dashSpeed = 1, dashTime = 0, dashCd = 0, dashOn = false;

// setting scene and running game loop
$(document).ready(function(){

  initScene();
  engine.runRenderLoop(gameLoop);
});

function initScene() {

  engine = new BABYLON.Engine(canva, true);
  scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3.White();
  playerCam = new BABYLON.FreeCamera("playerCam", new BABYLON.Vector3(0, 10, -10), scene);
  playerCam.setTarget(new BABYLON.Vector3(0, 0, 0));
}

function moveViewIfNeeded(){

  // move view
  if (viewUp) {
    playerCam.rotation.x -= mousePanelSensitivity;
  } else if (viewLeft) {
    playerCam.rotation.y -= mousePanelSensitivity;
  } else if (viewRight) {
    playerCam.rotation.y += mousePanelSensitivity;
  } else if (viewDown) {
      playerCam.rotation.x += mousePanelSensitivity;
  }
}

function dashIfNeeded(){

  if (dashCd > 0) dashCd--;
  if (dashTime > 0)
  {
    dashTime--;
    if (dashLeft == true) {playerCam.position.x -= dashSpeed;console.log("left")}
    else if (dashRight == true) {playerCam.position.x += dashSpeed;console.log("right")}
    if (dashTime == 0) {dashLeft = false; dashRight = false;}
  }
}

function gameLoop() {

  moveViewIfNeeded();
  dashIfNeeded();

  scene.render();
}
