/*
** dash.js
** --
** AnimalKing Game
*/

var cooldown = 100;

// addind dash control
$(document).ready(function(){

  scene.actionManager = new BABYLON.ActionManager(scene);
  scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (event){
  if (event.sourceEvent.key == "a") {
    if (dashCd == 0) {dashLeft = true; dashTime = 15;dashCd = cooldown;}
  }
  else if (event.sourceEvent.key == "e") {
    if (dashCd == 0) {dashRight = true; dashTime = 15;dashCd = cooldown;}
  }
  }));
});
