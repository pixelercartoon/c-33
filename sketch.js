const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow, snow1,snow2,snow3,snow4;
var boy,boyimg;
var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var snowCreatedFrame=0;
var bgImg;
//function preload(){
    //	boy1=loadImage("images/cl.png");
     // boy=loadImage("boy1.png");
     // }
     function preload(){
        snowSound = loadSound("Snow Falling HD (320 kbps).mp3");
     }
function setup(){
    engine = Engine.create();
    world = engine.world;
   
    createCanvas(800,500);
    bgImg = loadImage("snow3.jpg");
    
    snowSound.loop();
    

    //creating drops
    if(frameCount % 5000 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new snowflake(random(0,800), random(0,500)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(bgImg); 

    //creating thunder
    
    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }

    drawSprites();
    
}