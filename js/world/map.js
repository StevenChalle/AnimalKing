/*
** map.js
** --
** AnimalKing Game
*/

var ground;
var animal;

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

function setAnimal()
{
    var box = new BABYLON.Mesh.CreateBox("crate", 2, scene);
    box.material = new BABYLON.StandardMaterial("Mat", scene);
    box.material.diffuseColor = new BABYLON.Color3(0.25, 0.25, 0.25);
    // box.material.diffuseTexture = new BABYLON.Texture("assets/crate.png", scene);
    // box.material.diffuseTexture.hasAlpha = true;
    box.position = new BABYLON.Vector3(0, 0, 0);
    box.checkCollisions = true;
}

$(document).ready(function(){

  setGround();
  setAnimal();
});
