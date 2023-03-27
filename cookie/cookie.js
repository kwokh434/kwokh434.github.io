console.log(document.cookie);

// var dragItem = document.querySelector("f1");
// var container = document.querySelector("container");
// let active = false;
// var currentX;
// var currentY;
// var initialX;
// var initialY;
// var xOffset = 0;
// var yOffset = 0;

// container.addEventListener("touchstart", dragStart, false);
// container.addEventListener("touchend", dragEnd, false);
// container.addEventListener("touchmove", drag, false);

// container.addEventListener("mousedown", dragStart, false);
// container.addEventListener("mouseup", dragEnd, false);
// container.addEventListener("mousemove", drag, false);


let size = parseInt(getCookie("flower_size")) || 100;
let flowerArray = document.querySelectorAll(".flowers");
let index = 0;
flowerArray.forEach(flowerElement => { 
flowerElement.style.width = size + "px";
flowerElement.style.height = size + "px";


  flowerElement.addEventListener("mousedown",function(){
    size++;
    this.style.width = size + "px";
    this.style.height = size + "px";

    setFlower(index, size, 999);
   index++;
});


  
})






//delete all cookies
function checkCookie(cname) {
    if (!getCookie(cname) === undefined) {
        return true;
    } else {
        return false;
    }
}


//set cookie 
function setFlower(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//get cookie

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

function checkCookie(cname) {
    if (!getCookie(cname) === undefined) {
        return true;
    } else {
        return false;
    }
}
