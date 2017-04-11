/*
** dash.js
** --
** AnimalKing Game
*/

var time = 30;
var cooldown = time * 1.4;
jumpSpeed = 0.5;

// addind jump control
$(document).ready(function(){

  scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (event){
  if (event.sourceEvent.key == " ") {
    if (jumpCd == 0) {jump = true; jumpTime = time; jumpCd = cooldown;}
  }
  }));
});
