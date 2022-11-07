console.log(document.cookie);

let coookie = document.cookie;
let box = document.querySelector('.container');
let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;
let count = 0;


let flower1="./images/flower1.png";
let flower2="./images/flower2.png";
let flower3="./images/flower3.png"; 
let flower4="./images/flower4.png"; 
let flower5="./images/flower5.png";  
img = [flower1,flower2,flower3,flower4,flower5]
  console.log(img)

  document.addEventListener("click",flowersetup);

  

function flowersetup(){
    p = new flower(event.clientX, event.clientY, count)
    console.log(p)
    count++ ;
    let flowerimg = document.createElement('img');
    flowerimg.src = p.img;
    flowerimg.style.top = p.y+'px' ;
    flowerimg.style.left = p.x+'px' ;
    flowerimg.classList.add('flower');
    document.querySelector('.container').append(flowerimg)
}

class flower {
	constructor(x, y,c) {
		this.x = x ;
		this.y = y ;
        this.img = img[c% img.length];
	} 
    drawflower(){
      
    }
}
 

//set cookie 
function setFlower(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}