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
