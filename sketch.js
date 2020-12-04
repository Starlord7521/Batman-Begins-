const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
    
}

function setup(){
 createCanvas(500, 1000);  
 engine = Engine.create();
 world = engine.world;
 umbrella = new Umbrella(500, 250);
}

function draw(){
 background("black");   
}   

