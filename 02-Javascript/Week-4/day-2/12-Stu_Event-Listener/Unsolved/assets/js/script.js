
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");


// TODO: Add event listener to increment button

let count = 0;

incrementEl.addEventListener("click",function (){
    count++;
    countEl.textContent = count;
});

decrementEl.addEventListener("click",function() {
    if(count > 0)
    {
    count--;
    countEl.textContent = count;
    }
});





// TODO: Add event listener to decrement button 

