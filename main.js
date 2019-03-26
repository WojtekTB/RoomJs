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
  room = new Room(`rgb(100, 100, 100)`, `rgb(0, 0, 0)`);
}

function draw() {
  // image(img, 0, 0);
  room.show();

}


class Room{
  constructor(wallColor, floorColor){
    this.wallColor = wallColor;
    this.floorColor = floorColor;
    this.context = canvas.getContext('2d');
  }

  drawFloor(){
    this.context.fillStyle = this.floorColor;
    rect(0, window.innerHeight*(2/3), window.innerWidth, window.innerHeight/3);
  }

  drawWall(){
    this.context.fillStyle = this.wallColor;
    rect(0, 0, window.innerWidth, window.innerHeight*(2/3));
  }

  drawMisc(){

  }

  show(){
    this.drawWall();
    this.drawFloor();
    this.drawMisc();
  }
}
