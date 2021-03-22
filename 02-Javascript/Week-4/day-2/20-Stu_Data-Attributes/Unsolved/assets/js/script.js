var container = document.querySelector(".container")


container.addEventListener("click", function(event) {
  var element = event.target;
  console.log(element.getAttribute("data-state"));
  element.setAttribute("data-state","hidden")
  console.log(element.getAttribute("data-state"));


  // TODO: Complete function
});


