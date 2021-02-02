const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var LT = 150, RT = 150

let a = []

var xB = 400, yB = 600
var xT = 400, yT = 300
var xL = 150, yL = 460
var xR = 650, yR = 460

var c = 0, s = 6


function preload(){

 

}


function setup() {
  createCanvas(800,800);
  engine = Engine.create()
  world = engine.world

   
    
for(let i = 0; i < 200; i++){
    a.push(new Water(random(300, 500), random(400, 600)))
}

gB = new Ground(400, 600 + 180, 600, 100)
gT = new Ground(400, 600 + 180, 600, 100)
gL = new Ground(100, 460, 100, 300)
gR = new Ground(600, 460, 100, 300)



    

 
  
  
}
function draw() {
  engine.world.gravity.y = 3
  background("white")
 Engine.update(engine)

 push()
 strokeWeight(5)
 rectMode(CENTER)
 noFill()
rect(400, 400, 800, 800)
 pop()



Matter.Body.setPosition(gB.body, {x:xB, y: yB})
Matter.Body.setPosition(gL.body, {x:xL, y: yL})
Matter.Body.setPosition(gR.body, {x:xR, y: yR})
Matter.Body.setPosition(gT.body, {x:xT, y: yT})


if(c === 0){
xL += s
xB += s
xR += s
xT += s
engine.world.gravity.x = 3
}
else if(c === 1){
  xL -= s
  xB -= s
  xR -= s
  xT -= s
  engine.world.gravity.x = -3
}

if(xR > 800){
  c = 1
}
if(xL < 0){
  c = 0
}
 
 

 noStroke()
 fill(150, 150, 255, LT)
 rect(3, 3, 200, 100)
 fill(255, 150, 150, RT)
 rect(597, 3, 200, 100)






 


  
   
   
gB.display()
gL.display()
gR.display()
gT.display()
    

    for(let i = 0; i < a.length; i++){
    a[i].display()
    }
    

}



