// // let frames = 400;


function setup() {
  createCanvas(700,700);
  angleMode(DEGREES)
  // p2 = createP('Stroke weight').position(20,768)
  // s2 = createSlider(1,10,5,1).position(20,805)
  // s2.style('width', '110px');

  color_picker = createColorPicker("#f0ead6").position(1560,515);
  color_picker1 = createP('Background').position(1440,500)

  checkbox1 = createP('Loop / Pause').position(1440,539);
  checkbox = createCheckbox().position(1575,560)
  checkbox.changed(checkLoop)

  save1 = createP('S = Save as PNG').position(1440,575);
  save2 = createP('G = Save as GIF').position(1440,605);



  spy1 = createP('Outter Wheel').position(145,411).style('font-size','32px')
  p1 = createP('Number of elements').position(55,473)
  s1 = createSlider(3,15,5).position(55,518)
  
  
  //SIN
  a1 = createP('Size').position(255,535)
  a2 = createSlider(0.1,30,0.1).position(255,583)


  spy2 = createP('Inner Wheel').position(145,685).style('font-size','32px')
  p2 = createP('Number of elements').position(55,742)
  s2 = createSlider(5,10,20).position(55,787)

 //COS
  b1 = createP('Size').position(255,800)
  b2 = createSlider(10,340,10).position(255,847)

  // color1
  c4 = createP('Colors').position(55,535)
  c12 = createP('R').position(50,565)
  c13 = createP('G').position(49,590)
  c14 = createP('B').position(50,615)

  c1 = createSlider(0,255,0).position(85,584)
  c2 = createSlider(0,255,0).position(85,608)
  c3 = createSlider(0,255,0).position(85,632)
  
  //color2
  c5 = createP('Colors').position(55,800)
  c9 = createP('R').position(50,828)
  c10 = createP('G').position(49,852)
  c11 = createP('B').position(50,875)
  c6 = createSlider(0,255,0).position(85,848)
  c7 = createSlider(0,255,0).position(85,870)
  c8 = createSlider(0,255,0).position(85,893)

  // e2 = createP('Scale').position(20,915)
  // e1 = createSlider(1,1,50,240).position(20,955)
  // e1 = createSlider(0,100,50).position(20,955)




}


function draw() {
  // background(253,251,235);
  background(color_picker.color());
  // fill('black')
  translate(width/2,height/2)
  // stroke('white')
  noFill()
  
  // strokeWeight(s2.value())
  strokeWeight(1.5)
  for (var n = 0; n<s1.value(); n++){
    stroke(c1.value(),c2.value(),c3.value()+ n*10, c5.value())
    // stroke(240,119+ n*10, 80)
   beginShape()
    for(var i =0; i< 360;i+=s1.value()) {
      var rad = map(sin(i*33+frameCount),-1,1,50,120)
      var x=rad*cos(i)*a2.value()
      var y=rad*sin(i)//*b2.value()
      vertex(x,y)
    }
   endShape(CLOSE)
   rotate (frameCount/10)
  }

  for (var n = 0; n<s1.value(); n++){
    stroke(c6.value(),c7.value(),c8.value()+ n*10, c4.value())
    // stroke(240,119+ n*10, 80)
   beginShape()
      for(var j=0; j< 360;j+=s2.value()) {
      var rad = map(cos(j*20+frameCount),-1,1,50,b2.value())
      var x=rad*cos(j)
      var y=rad*sin(j)
      vertex(x,y)
    }
   endShape(CLOSE)
   rotate (frameCount/20)
  }

}

// function keyPressed() {
//   if (key === 's') {
//     const options = {
//       units: "frames",
//       delay: 0
//     }
//     saveGif('mySketch', frames, options);
//   }
//     // angle -=TWO_PI / frames;
// }
function keyPressed() {
  if (key === 'g') {
    saveGif('01.gif', 5); // 1 sec
  }
}


function keyTyped() {
  if (key === 's') {
    saveCanvas('photo', 'png');
  }
}

function checkLoop() {
  if (this.checked()) {
    loop();
  } else {
    noLoop();
  }
}

// function saveImg() {
//   btnSave.save("new-gif", 5);
// }

