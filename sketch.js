const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, stand, world;
var block1,block2,block3,block4,block5,block6,block7
var block8,block9,block10,block11,block12,block13;
var block14,block15,block16,polygon;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    myEngine = Engine.create();
    world = myEngine.world;

    //console.log("1.." + stand);
    stand = new Ground(390,300,240,20);
    //console.log("2.." + stand);

    block1 = new Block(300, 275, 30, 40);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);
    //1layer
    block8 = new Block(330,235,30,40);  
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    //2layer
    block13 = new Block(360,195,30,40);               
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    //top layer
    block16 = new Block(390,155,30,40);

    polygon = new poly(50,200,30,40);
   
   
    ground = new Ground(600,height,1200,20);
    slingshot = new SlingShot(polygon.body,{x : 100, y: 200});
}

function draw(){
    background("blue");
    Engine.update(myEngine);
    
    stand.display();    
    ground.display();
    
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
   polygon.display();
    slingshot.display();

    
}

function mouseDragged(){
 
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }


function mouseReleased(){
    slingshot.fly();

}
