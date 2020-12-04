class Umbrella{
    constructor(x, y){
     this.x = x;
     this.y = y;
     this.r = 4;
     this.circle = Matter.Bodies.ellipse(this.x, this.y, this.r);
     this.image = loadImage("images/images/Walking Frame/walking_1.png");  
    }
    display(){
        image(this.image, 200, 200);
    }
}