function keydownAction(event) {

  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  document.querySelector("#code").innerHTML = event.keyCode;
  document.querySelector("#key").innerHTML = event.code;
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
document.addEventListener("keyup", keyupAction);


