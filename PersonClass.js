class Person{
  constructor(x, y, shirtColor, name) {
    this.x = x;
    this.y = y;
    this.shirtColor = shirtColor;
    this.name = name;
    this.scale = 10;
    this.context = canvas.getContext('2d');
  }

  show(){
    this.context.fillStyle = this.shirtColor;
    triangle(this.x-this.scale*2, this.y+this.scale*4, this.x, this.y, this.x+this.scale*2, this.y+this.scale*4);
    this.context.fillStyle = `rgb(255,227,159)`;
    circle(this.x, this.y, this.scale*1.2);
    this.context.fillStyle = `rgb(0, 0, 0)`;
    text(this.name, this.x - this.name.length * 3, this.y - this.scale * 2)
  }
}
