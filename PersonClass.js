class Person{
  constructor(x, y, shirtColor, name) {
    this.x = x;
    this.y = y;
    this.shirtColor = shirtColor;
    this.name = name;
    this.scale = 10;
    this.context = canvas.getContext('2d');
    this.speed = 14;
  }

  pickRandomDirection(){
    if(this.x < this.scale*5) // stop if almost at edge
    {
      this.speed = random([0, 1, 7]);
      console.log("reached left");
    }
    else if (this.x > screenX - this.scale*5)
    {
      this.speed = random([3, 4, 5]);
      console.log("reached right");
    }
    else if(this.y < screenY*(2/3) + this.scale*4)
    {
      this.speed = random([5, 6, 7]);
      console.log("reached top");
    }
    else if(this.y > screenY - this.scale*6)
    {
      this.speed = random([1, 2, 3]);
      console.log("reached bottom");
    }
    else {
      this.speed = floor(random(0, 15));
    }
    console.log(this.name + " moves " + this.speed);
  }

  move(){
    if(this.speed === 0){//move to the right
      this.x += 0.5;
    }
    else if(this.speed === 1){
      this.x += 0.5;
      this.y -= 0.5;
    }
    else if(this.speed === 2){
      this.y -= 0.5;
    }
    else if(this.speed === 3){
      this.x -= 0.5;
      this.y -= 0.5;
    }
    else if(this.speed === 4){
      this.x -= 0.5;
    }
    else if(this.speed === 5){
      this.x -= 0.5;
      this.y += 0.5;
    }
    else if(this.speed === 6){
      this.y += 0.5;
    }
    else if(this.speed === 7){
      this.x += 0.5;
      this.y += 0.5;
    }
  }

  show(){
    this.context.fillStyle = this.shirtColor;
    triangle(this.x-this.scale*2, this.y+this.scale*4, this.x, this.y, this.x+this.scale*2, this.y+this.scale*4);
    this.context.fillStyle = `rgb(255,227,159)`;
    circle(this.x, this.y, this.scale*1.2);
    this.context.fillStyle = `rgb(0, 0, 0)`;
    text(this.name, this.x - this.name.length * 3, this.y - this.scale * 2);
    this.move();
  }
}
