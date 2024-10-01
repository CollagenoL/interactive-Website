let face = [];
let hair = [];
let mouth = [];
let NumHair = 5;
let NumFace =5;
let NumMouth = 5;
let ClickCount=0;

function preload(){
  let Hair1 = loadImage('AD Hair.jpg');
  let Hair2 = loadImage('Jokic Hair.jpg');
  let Hair3 = loadImage('Lebron Hair.jpg');
  let Hair4 = loadImage('Steph Hair.jpg');
  let Hair5 = loadImage('Iverson Hair.jpg');
  let Face1 = loadImage('AD Face.jpg');
  let Face2 = loadImage('Jokic Face.jpg');
  let Face3 = loadImage('Lebron Face.jpg');
  let Face4 = loadImage('Steph Face.jpg');
  let Face5 = loadImage('Iverson Face.jpg');
  let Mouth1 = loadImage('AD Mouth.jpg');
  let Mouth2 = loadImage('Jokic Mouth.jpg');
  let Mouth3 = loadImage('Lebron Mouth.jpg');
  let Mouth4 = loadImage('Steph Mouth.jpg');
  let Mouth5 = loadImage('Iverson Mouth.jpg');
  hair=[Hair1,Hair2,Hair3,Hair4,Hair5];
  face=[Face1,Face2,Face3,Face4,Face5];
  mouth=[Mouth1,Mouth2,Mouth3,Mouth4,Mouth5];
  
}

function setup() {
  createCanvas(400, 400);
  background(255);
  noLoop();
}

function draw() {
 } 

function mousePressed() {
   let imgWidth = width ; 
  let imgHeight = height/3;
  ClickCount++;
       
  let randoImg = random(hair)
  let randoImg1 = random(face)
  let randoImg2 = random(mouth)
  
  if (ClickCount === 1) {
    image(randoImg , 0,0,imgWidth, imgHeight);
    
  } 
  else if (ClickCount === 2) {
    image(randoImg1 ,0,imgHeight, imgWidth, imgHeight);
  } 
  else if (ClickCount === 3) {
    image(randoImg2 ,0,imgHeight*2, imgWidth, imgHeight);
  }

  if (ClickCount > 3) {
    clickCount = 1;
    background(255); 
    
  }


}

  

  
  
