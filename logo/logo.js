let muoto;
let myUrl = 'https://world-clock.p.rapidapi.com/json/est/now'
let fontSize = 130;
let logoArray;
let checktime = 0;

function preload (){
  muoto = loadFont('MuotoTrial-Black.otf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(fontSize);
  textFont(muoto);
  background(220);
  logoArray = muoto.textToPoints("Bloomberg",150,450,fontSize,{
    sampleFactor: 0.2});

}

function time0() {
    for (let i=0; i < logoArray.length; i++){

      push()
      translate(logoArray[i].x,logoArray[i].y);
      strokeWeight(1);
      line (6,6,5,-5);
      pop()
}

function time1() {
  console.log('correct function call')
  // text('Bloomberg',width/2,height/2);
  // text(t1,140,270,100, 100);
  // text(t2,180,270,100, 100);
  // text(t3,213,263,100, 100);
  
  // push();
  // translate(180,180);
  // rotate(radians(4));
  // text(t4,79,67,100, 100);
  // pop();

  // text(t5,330,270,100, 100);
}

function draw(){
  
  if (checktime === 1){
    time1() 
  } 
  else if (checktime === 2){
    // time2()
  }
  //else if ...
  else {
    time0()
  }

 
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e9b54c99b8msh6f1169ef9422f5ep1d8739jsn6f40989b7069',
		'X-RapidAPI-Host': 'world-clock.p.rapidapi.com'
	}
};

fetch(myUrl,options)
.then(response => {
  return response.json();
})
.then(data => {console.log(data.currentDateTime)
  let time = data.currentDateTime.substring(data.currentDateTime.length - 11,data.currentDateTime.length - 6);
   
  console.log(time);
  //US stock market 
  // if (time === '9:30'){
  //  checktime = 1
  // }
 
  // else if (time === '11:30'){
  //  checktime = 2
  // }

  // else if( time === '15:00'){
  //   checktime = 3
  // }

  // else if( time === '16:00'){
  //   checktime = 4
  // }

  // //HK stock market 
  // if (time === '21:30'){
  //  checktime = 5
  // }
 
  // else if (time === '23:30'){
  //  checktime = 6
  // }

  // else if( time === '3:00'){
  //   checktime = 7
  // }

  // else if( time === '4:00'){
  //   checktime = 8
  // }

})
}
// .catch(err => console.error(err));

// function map(value, low1, high1, low2, high2) {
//   return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
// }

