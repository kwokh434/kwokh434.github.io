let muoto;
let myUrl = 'https://world-clock.p.rapidapi.com/json/est/now'
let fontSize = 130;
let logoArray;
let checktime = 0;

function preload (){
  muoto = loadFont('MuotoTrial-Black.otf')
}

function setup() {
  createCanvas(1000,1000);
  textSize(fontSize);
  textFont(muoto);
  background('white');
  logoArray = muoto.textToPoints("Bloomberg",150,450,fontSize,{
    sampleFactor: 0.4});

}  
function time0(){
  background('white');

  for (let i=0; i < logoArray.length; i++){

    push()
    translate(logoArray[i].x,logoArray[i].y);

    strokeWeight(1);
    stroke('black');
    line (-6,9,7,-7); // original
    line (-5,5,9,9);   //orginal
    pop()
   }
 }

function time1() { //yellow
  background('white');
  for (let i=0; i < logoArray.length; i++){
   
    push()
    translate(logoArray[i].x,logoArray[i].y);
    strokeWeight(1);
    stroke('#FEC41F');
    line(-4,-4,9,9);            
    line(-5,9,9,-5);            
    pop()
   }
  }

 function time2() {  //light green
    background('white');

    for (let i=0; i < logoArray.length; i++){
      push()
    translate(logoArray[i].x,logoArray[i].y);
    strokeWeight(1);
    stroke('#0CE508');
    line(4,8,-8,-4);
    stroke('');
    line(-6,-5,-12,5);
    stroke('#11D82C');
    line(-1,7,7,-1);
    pop()
   }
  }

 
   function time3() {  //dark green
    background('white');
    for (let i=0; i < logoArray.length; i++){
  
      push()
      translate(logoArray[i].x,logoArray[i].y);
      strokeWeight(1);
      stroke('#11D82C');
      line(8,8,-4,-4);
      stroke('#87EB46');
      line(-3,5,-12,-5);
      stroke('#55D900');
      line(-8,7,7,-6);
      pop()
     }
   }

   function time4() {  //red
    background('white');

    
    for (let i=0; i < logoArray.length; i++){
      push()
      translate(logoArray[i].x,logoArray[i].y);
      strokeWeight(1);
      stroke('#DC0C02');
      line(9,9,-9,-9);          
      stroke('#');
      line(9,7,-8,-9); 
      stroke('#EF340A')
      line(3,8,-3,4); 

      pop()
     }
   }

function draw(){
  
  if (checktime === 1){
    time1() 
  } 
  else if (checktime === 2){
    time2()
  }
  else if (checktime === 3){
    time3()
  }
  else if (checktime === 4){
    time4()
  }

  //else if ...
  else {
    time0()
  }

 
}

console.log('hello')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e9b54c99b8msh6f1169ef9422f5ep1d8739jsn6f40989b7069',
		'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
	}
};

fetch('https://world-time2.p.rapidapi.com/ip', options)
	.then(response => response.json())
	.then (data => {console.log(data)

// fetch(myUrl,options)
// .then(response => {
//   return response.json();
// })
// .then(data => {console.log(data.currentDateTime)
  // let time = data.currentDateTime.substring(data.currentDateTime.length - 11,data.currentDateTime.length - 6);
  let time = data.datetime.substring(data.datetime.length-16,data.datetime.length-21);

  console.log(time);
  //US stock market 
  if (time === '9:30'){
   checktime = 1
  }
 
  else if (time === '11:30'){
   checktime = 2
  }

  else if( time === '13:00'){
    checktime = 3
  }

  else if( time === '15:00'){
    checktime = 4
  }

  else if( time === '16:00'){
  checktime = 1
  }
})

.catch(err => console.error(err));

// function map(value, low1, high1, low2, high2) {
//   return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
// }

