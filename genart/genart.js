// // let colors =['#F584C8','#72D482','#EB8F8A','#62D6A8','#FAAE91','#A8F3BF','#D6FFB7','#EBFBA0','#FFF689','#FFF794'];

// let colors =["#f2eb8a", "#fed000", "#fc8405", "#ed361a", "#e2f0f3", "#b3dce0", "#4464a1", "#203051", "#ffc5c7", "#f398c3", "#cf3895", "#6d358a", "#06b4b0", "#4b8a5f"];

// let canvasSize = 600;
// let squareSize = 40;

// function setup() {
//   createCanvas( canvasSize, canvasSize);
//   background(220);
//   noStroke()
//   blendMode(MULTIPLY);
//   colorMode (HSB);
//   noLoop()

// }

// function randomcolor(){
//   let randomPos = Math.floor(Math.random(0, color.length)*colors.length);
//   return colors [randomPos];
  
// }


// function drawSquare(x,y){
//   let middle = squareSize/2;
//   fill(randomcolor());
//   // rect(x,y,squareSize, squareSize);
  
//   fill(randomcolor());
//   circle(x+middle, y+middle, squareSize - 3);
  
//   fill(randomcolor());
//   circle(x+middle, y+middle, squareSize - 13);
  
//    fill(randomcolor());
//   circle(x+middle, y+middle, squareSize - 20);
  
//    fill(randomcolor());
//   circle(x+middle, y+middle, squareSize - 35);
  
// }

// function draw() {
//   for (let x=0;x<600; x+=squareSize){   
//     for (let y=0; y<600; y+=squareSize){

//       drawSquare(x,y);
//     }
//   }
// }

let pos = [];
// let colors =["#f2eb8a", "#fed000", "#fc8405", "#ed361a", "#e2f0f3", "#b3dce0", "#4464a1", "#203051", "#ffc5c7", "#f398c3", "#cf3895", "#6d358a", "#06b4b0", "#4b8a5f"];

function setup() {
	createCanvas(900, 900);
	for(let i=0; i<50; i++){
		let x = random(width);
		let y = random(height);
		let d = random(30, 80);
		pos.push(createVector(x, y, d));
	}

	background(0);

  // function randomcolor(){
  //   let randomPos = Math.floor(Math.random(0, color.length)*colors.length);
  //   return colors [randomPos];
  // }
  

	let dots = 250;
	let dw = width / dots;
	noStroke();
  colorMode (HSB);
  fill(random(255), random(255), random(255));
	for(let i=0; i<=dots; i++){
		for(let j=0; j<=dots; j++){
			let x = i * dw;
			let y = j * dw;
			let d = dw * 0.75;
				for(let k=0; k<pos.length; k++){
					let p = pos[k];
					let dst = dist(p.x, p.y, x, y);
					let n = norm(dst,0, p.z/2) ** 8;
					let a = atan2(y - p.y, x - p.x);
					let off = p.z * 0.4 * (n-1);
					if(dst < (p.z/2)){
						x -= off * cos(a);
						y -= off * sin(a);
					}
			circle(x, y, d);

		}
	}
}

function draw() {

	
}
}