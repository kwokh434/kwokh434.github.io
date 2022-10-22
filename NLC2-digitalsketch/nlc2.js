let l1 = 'GIVE YOURSELF A BEDTIME';
let l2 = 'CREATE A BACK-UP SLOT';
let l3 = 'MAKE PLANS ON FRIDAY!';
let l4 = 'BATCH THE LITTLE THINGS';
let l5 = 'TAKE ONE NIGHT FOR YOURSELF';
let l6 ='DO FUN STUFF BY 3PM';
let l7 = 'EFFORTFUL BEFORE EFFORTLESS';
let l8 = '3 TIMES A WEEK IS A HABIT';
let l9 = '1BIG ADVENTURE,  1SMALL ADVENTURE';

let  notes = [];
let maxnotes = 170;
let noteheight = 200;
let notewidth = 175;
let notetext = ['SEND FILES ', 'Make dinner reservations ', 'PREPARE PRESENTATION' ,'REVIEW REPORTS', 'MEETING @5:00','Plan friday event','Urgent! Call manager @2:00']

function setup() { 
  createCanvas(850, 850);
  background('white'); 
  for (let i = 0; i < maxnotes; i++) {
    notes[i] = new Note(random(width - notewidth),random(height - noteheight));
  }
}

function draw() { 
   background('#FFF9C9');
 
  //note1
  fill('#FFF700');
  strokeWeight(1);
  rect(100, 80, 175, 200);
  strokeWeight(1);
  fill('black');
  text(l1, 150, 170, 70, 90);
  strokeWeight(0);
  fill('rgb(5,5,5)');
  ellipse(175.6, 111.6, 22, 22);
  ellipse(195.2, 111.6, 22, 22);
  strokeWeight(0);
  triangle(165.6, 116.6, 205.2, 116.6, 185.6, 140);
  // textFont("Preconnct");

  
  
  //note2
   fill('#ff9900');
  strokeWeight(1);
  rect(335, 80, 175, 200); 
  fill('black');
  textSize(15);
  text(l2, 375, 180, 100, 100);
  strokeWeight(0);
  fill('black');
  ellipse(415.6, 111.6, 22, 22);
  ellipse(435.2, 111.6, 22, 22);
  strokeWeight(0);
  triangle(405.6, 116.6, 445.2, 116.6, 425.6, 140);
  
  //note3
   fill('#028738');
  strokeWeight(1);
  rect(570, 80, 175, 200); 
  fill('black');
  text(l3, 585, 180, 150, 100);
  strokeWeight(0);
  ellipse(645.6, 111.6, 22, 22);
  ellipse(665.2, 111.6, 22, 22);
  strokeWeight(0);
  triangle(635.6, 116.6, 675.2, 116.6, 655.6, 140);
  
  
  //note4
  strokeWeight(1);
  fill(255,75,0);
  rect(100, 330, 175, 200); 
  fill('black');
  textAlign(CENTER);
  text(l4, 160, 420, 50, 100);
  ellipse(175.6,366.6, 22, 22);
  ellipse(195.2, 366.6, 22, 22);
  triangle(165.6, 371.6, 205.2, 371.6, 185.6, 395);
  
  //note5
  fill('#E91E63');
  rect(335, 330, 175, 200); 
  fill('black');
  text(l5,400,415, 50, 100);
  ellipse(415.6,366.6, 22, 22);
  ellipse(435.2, 366.6, 22, 22);
  triangle(405.6, 371.6, 445.2, 371.6, 425.6, 395);
  
  //note6
  fill('#37C93D');
  rect(570, 330, 175, 200); 
  fill('black');
  text(l6,625,420, 60, 100); 
  ellipse(645.6, 366.6, 22, 22);
  ellipse(665.2, 366.6, 22, 22);
  triangle(635.6, 371.6, 675.2, 371.6, 655.6, 395);
  
  //note7
  fill(255,107,156);
  rect(100, 580, 175, 200); 
  fill('black');
  text(l7,160, 675, 50, 100);
  ellipse(175.6,619.6, 22, 22);
  ellipse(195.2, 619.6, 22, 22);
  triangle(165.6, 624.6, 205.2, 624.6, 185.6, 650);
  
  
  //note8
  fill('#CF6EF2');
  rect(335, 580, 175, 200); 
  fill('black');
  text(l8,365, 679, 110, 135);
  ellipse(415.6,619.6, 22, 22);
  ellipse(435.2, 619.6, 22, 22);
  triangle(405.6, 624.6, 445.2, 624.6, 425.6, 650);
  
  //note9
  fill('#61C6F3');
  rect(570, 580, 175, 200); 
  fill('black');
  text(l9,600, 667, 110, 155); 
  ellipse(645.6,619.6, 22, 22);
  ellipse(665.2, 619.6, 22, 22);
  triangle(635.6, 624.6, 675.2, 624.6, 655.6, 650);
  

  for (var i = 0; i < notes.length; i++) {
    notes[i].move();
    notes[i].display();

  }
}

function mouseMoved() {
  for (var i = notes.length - 1; i >= 0; i--) {
    if (notes[i].mouseOver()) {
      notes.splice(i, 1);
    }
  }
}

function Note(inX, inY) {
  this.x = inX;
  this.y = inY;
  this.speed = 3;
  this.col = color(255);
  this.w = notewidth;
  this.h = noteheight;
  this.text = notetext[int(random(notetext.length))];
  
  this.mouseOver = function () {
    return dist(this.x, this.y, mouseX, mouseY) < this.w;
  }
  
  this.move = function () {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  this.display = function () {
    // if (this.mouseOver()) {
    //   // this.col = color(255, 0, 255);
    // } else {
    //   this.col = color(255);
    // }
    fill(this.col);
    stroke(2);
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    // textFont("Preconnct")
    text(this.text,this.x + 50, this.y + 80, this.w-100, this.h-100)
    
  }
}