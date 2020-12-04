class Drop{
    constructor(){
       this.x = x;
       this.y = y;
       this.r = 2;
       this.circle = Matter.body.circle(this.x, this.y, this.r); 
    }
    update(){
    if(this.circle>500){
    this.circle.y = 0;
    }   
    }
}