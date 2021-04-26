var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods

let favFoods = ["Fish (Snapper)","Cat Biscuits","Catniss Everdean", "Mice with Rice"];  

// set the OL styles
listEl.style.background = "#333333";
listEl.style.padding = "20px";


for (i=0; i <4; i++)
{   
    listEl.appendChild(document.createElement("li"));
    listEl.children[i].textContent = favFoods[i];
    listEl.children[i].style.color = "white";
    listEl.children[i].style.padding = "5px";
    listEl.children[i].style.marginLeft = "35px";
}

// apply backgrounds manually..

listEl.children[0].style.background = "rgb(90,90,90)";
listEl.children[1].style.background = "rgb(70,70,70)";
listEl.children[2].style.background = "rgb(50,50,50)";
listEl.children[3].style.background = "rgb(30,30,30)";

