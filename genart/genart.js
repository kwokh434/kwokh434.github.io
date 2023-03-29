let colors =["#f2eb8a", "#fed000", "#fc8405", "#ed361a", "#e2f0f3", "#b3dce0", "#4464a1", "#ffc5c7", "#f398c3", "#cf3895", "#6d358a", "#06b4b0", "#4b8a5f"];


function setup() {
	createCanvas(850, 850);
    background(255);
    noStroke()
    blendMode(MULTIPLY);
    colorMode(HSB, 255);
	  tiling()
}

function tiling() {
	let offset = 30;
	let gridCountW = 20;
	let gridCountH =20;
	let gridW = (width - (offset *2)) / gridCountW;
	let gridH = (height - (offset *2)) / gridCountH;
	let emp = gridCountW * gridCountH;
	let grids = [];
	// let rects = [];

//create the double array with false values ->setting the grid 
	for (let j = 0; j < gridCountW; j++) {
		let arr = []
		 for (let i = 0; i < gridCountH; i++) {
			arr[i] = false;
		}
		grids[j] = arr;
	}
//fill the grid with rectangles -> 
	while (emp > 0) {
		let w = int(random(1, gridCountW));
		let h = w;
		let x = int(random(gridCountW - w + 1));
		let y = int(random(gridCountH - h + 1));
		let lap = true;
		for (let j = 0; j < h; j++) {
			for (let i = 0; i < w; i++) {
				if (grids[x + i][y + j]) {
					lap = false;
					break;
				}
			}
		}

		if (lap) {
			for (let j = 0; j < h; j++) {
				for (let i = 0; i < w; i++) {
					grids[x + i][y + j] = true;
				}
			}
			let xx = offset + x * gridW;
			let yy = offset + y * gridH;
			let ww = w * gridW;
			// let hh = h * gridH;
			form(xx, yy, ww);
			emp -= w * h;
		}
	}
}


function randomcolor(){
  let randomPos = Math.floor(Math.random(0, color.length)*colors.length);
  return colors [randomPos];
  
}


function form(x, y, w) {
squareSize = w/2;
let middle = w/2;
  
  fill(randomcolor());
  circle(x+middle, y+middle, squareSize - 10);
  
  fill(randomcolor());
  circle(x+middle, y+middle, squareSize - 15);
  
   fill(randomcolor());
  circle(x+middle, y+middle, squareSize - 20);
  
   fill(randomcolor());
  circle(x+middle, y+middle, squareSize - 35);

  fill(randomcolor());
  circle(x+middle, y+middle, squareSize - 45);




}







