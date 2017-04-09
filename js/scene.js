/*
** scene.js
** --
** AnimalKing Game
*/

var canva = $("#gamePlayer").get(0);
var camTargetX = 0, camTargetY = 0, camTargetZ = 0;
var engine, scene, playerCam;

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

function gameLoop() {

  scene.render();
}
