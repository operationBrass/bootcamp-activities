// TODO: Which element is the following line of code selecting? //div
var carousel = document.querySelector(".carouselbox"); 
// TODO: Which element is the following line of code selecting?
var next = carousel.querySelector(".next"); //button
var prev = carousel.querySelector(".prev"); //button
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
carousel.addEventListener("click", function() {
  window.location.href = images[index];
}); // when the div is clicked, the url of the window changes to the url indicated in the images array.

// TODO: Describe the functionality of the following event listener.
next.addEventListener("click", function(event) { //click event on the next element
  // TODO: What is the purpose of the following line of code?
  event.stopPropagation(); // stop this click event 'bubbling up' to the parent div which also has a click event. 

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation(); 

  navigate(-1);
});

navigate(0);
