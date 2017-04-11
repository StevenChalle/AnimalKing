/*
** physics.js
** --
** AnimalKing Game
*/

// physics variable
var light0, light1;
var ground;

function setLights()
{
  light0 = new BABYLON.DirectionalLight("Omni", new BABYLON.Vector3(-2, -5, 2), scene);
  light1 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 5, 0), scene);
  light0.intensity = 0.7; light1.intensity = 0.7;
}

function setGround()
{
  ground = BABYLON.Mesh.CreatePlane("ground", 100.0, scene);
  ground.material = new BABYLON.StandardMaterial("groundMat", scene);
  ground.material.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1);
  ground.material.backFaceCulling = false;
  ground.position = new BABYLON.Vector3(5, -0.7, -15);
  ground.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);
  ground.checkCollisions = true;
}

function SetGravityCollisions()
{
  // Set gravity for the scene (G force like, on Y-axis)
  scene.gravity = new BABYLON.Vector3(0, -0.25, 0);
  scene.collisionsEnabled = true;

  //Then apply collisions and gravity to the active camera
  playerCam.checkCollisions = true;
  playerCam.applyGravity = true;
  playerCam.angularSensibility = 1000;
  playerCam.ellipsoid = new BABYLON.Vector3(1, 1, 1);
}

$(document).ready(function(){

  setLights();

  // adding random box
  var box = new BABYLON.Mesh.CreateBox("crate", 2, scene);
  box.material = new BABYLON.StandardMaterial("Mat", scene);
  box.material.diffuseColor = new BABYLON.Color3(0.25, 0.25, 0.25);
  // box.material.diffuseTexture = new BABYLON.Texture("assets/crate.png", scene);
  // box.material.diffuseTexture.hasAlpha = true;
  box.position = new BABYLON.Vector3(0, 0, 0);
  box.checkCollisions = true;

  setGround();
  SetGravityCollisions();

});
