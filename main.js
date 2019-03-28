var screenX = window.innerWidth;
var screenY = window.innerHeight;
var room;
var timer = 0;


var img;
function preload(){
  // img = loadImage('dino.png'); // Load the image
}

function setup() {
  createCanvas(screenX, screenY);
  background(100);
  room = new Room(`rgb(59, 218, 239)`, `rgb(222,184,135)`);
  testPerson = new Person(500, 500, `rgb(255, 0, 0)`, "Jared");
  console.log("test!");
}

function draw() {
  if(timer === 100)
  {
    testPerson.pickRandomDirection();
    timer = 0;
  }
  timer++;
  // image(img, 0, 0);
  room.show();
  testPerson.show();
}
