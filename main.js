var screenX = window.innerWidth;
var screenY = window.innerHeight;
var room;

var img;
function preload(){
  img = loadImage('dino.png'); // Load the image
}

function setup() {
  createCanvas(screenX, screenY);
  background(100);
  room = new Room(`rgb(59, 218, 239)`, `rgb(222,184,135)`);
}

function draw() {
  // image(img, 0, 0);
  room.show();

}
