const key = document.getElementById('key')
let image = document.getElementById("img")

document.addEventListener('keypress', logKey)

function logKey(e) {
  key.textContent += `${e.code} pressed! `
}

window.addEventListener('keyup', function(event) {
  if (event.code == 'KeyA') {
    window.location ="https://www.youtube.com/watch?v=xm3YgoEiEDc"
  }
  if (event.code == 'KeyB') {
    window.location = "http://make-everything-ok.com/"
  }
  if (event.code == 'KeyC') {
    window.location = "https://momspaghetti.ytmnd.com/"
  }
  if (event.code == 'KeyD') {
    window.location = "http://www.donothingfor2minutes.com/"
  }
  if (event.code == 'KeyE') {
    window.location = "https://smashthewalls.com/"

   }

  if (event.code == 'KeyF') {
    image.src = "flower/f1.png"
   
    }
   if (event.code == 'KeyG') {
    image.src = "flower/f2.png"
    }
    if (event.code == 'KeyH') {
    image.src = "flower/f3.png"

    }
    if (event.code == 'KeyI') {
    image.src = "flower/f4.png"
}

   if (event.code == 'KeyJ') {
    window.location = "https://www.youtube.com/watch?v=Az_KJBowdX4"
    
   }


},true);

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// for(let i=0;i<buttonlist.length; i++){ 
   

   
//    let margin=getRandomInt(300)

// buttonlist[i].style.marginLeft=margin +'px'
// buttonlist[i].style.opacity='100%';


// let title = document.getElementById("changing-text");
// let image = document.getElementById("changing-img");
// // const btn = document.getElementById("addimage");

// let keyspressed = []

// let codeArray = ["f","b","c","d","e","f"];

// void (evt.key){
//         case 'a':
//             //title.innerHTML = codeArray[5];
//             image.src = "flower/f1.png";
//             break;
//         case 'b':
//             //title.innerHTML = codeArray[0];
//             image.src = "flower/f2.png";
//             break;
//         case 'c':
//             //title.innerHTML = codeArray[1];
//             image.src = "flower/f3.png";
//             break;
//         case 'd':
//             //title.innerHTML = codeArray[1];
//     ;
//             break;
//     }