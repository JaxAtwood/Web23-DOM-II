
//click event that changes all nav links multiple colors
const click = document.querySelectorAll("nav") [0];
      colors = ['hotpink', 'lime', 'teal', 'white', 'purple'];

let colorIndex  = 0;

click.addEventListener('click', (e) => {
  e.target.style.background = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
}, false);


//focus event
const logoEvent = document.querySelector("body");

logoEvent.addEventListener('focus', (doAThing) => {
  doAThing.target.style.color = 'magenta';    
}, true);


//mouseover
let test = document.querySelector("body");
test.addEventListener ('mouseover', function(event) {
    event.target.style.color = "teal";

    setTimeout (function () {
        event.target.style.color = "";
    }, 500);
}, false);


//keydown
let keyEvent = document.querySelector("body");
keyEvent.addEventListener("keydown", function (event) {
    event.target.style.backgroundColor = "hotpink";

    setTimeout (function () {
        event.target.style.backgroundColor = "white";
    }, 500);
}, false);

//keyup

let keyEvent2 = document.querySelector("body");
keyEvent2.addEventListener("keyup", function (event) {
    event.target.style.backgroundColor = "purple";
});

//mousedown
let mouseDown = document.querySelector("header");
mouseDown.addEventListener ('mousedown', function(e) {
    e.target.style.backgroundColor = "blue";

    setTimeout (function (event) {
        e.target.style.backgroundColor = "white";
    }, 500);
}, false);


//wheel

//*********wheel event listener
let wheelEvent = document.querySelector("h1");
wheelEvent.addEventListener("wheel", function (e) {
e.target.style.transform = "500px"; 
});

//mouseup
let unClickIt = document.getElementsByTagName("h2") [0];
unClickIt.addEventListener ('mouseup', function(unDoIt) {
    unDoIt.target.style.color = "black";
})

//blur event
const navClicker = document.querySelectorAll("nav") [0];

navClicker.addEventListener('blur', (doAThing) => {
  doAThing.target.style.color = 'black';    
}, true);




//********resize event listener
window.addEventListener("resize", function(){
    document.querySelector("body").style.backgroundColor = ("magenta");
  }, true);




//********click event listener
document.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = ("purple");
  }, true);




//preventdefault()
document.querySelector("nav").addEventListener("click", function(event){
    event.preventDefault()
    alert ("Nope");
  });