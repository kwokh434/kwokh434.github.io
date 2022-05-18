let apiData =[];

let apiURL ="https://api.airtable.com/v0/appOnLwrJVMiV220B/tblmCJWBcL7jGcjbt?api_key=keygBtntXbgrX9pfc"

// array to hold all image shows based on the table
let imageShows = [];
let image_holder = document.querySelector(".image_holder")
let Items = [];
let text = document.querySelector(".Items")


// the html elements we want to access
//const Categories=document.getElementById('Categorise');
//const Price=document.getElementById('Price');

var All= document.getElementById('all')
var Book= document.getElementById("Book");
var Beauty= document.getElementById("Beauty");
var Clothes= document.getElementById("Clothes");
var Electronics= document.getElementById("Electronics");
var Food= document.getElementById("Food");
var Health= document.getElementById("Health");
var Household= document.getElementById("Household");
var Personal= document.getElementById("Personal");
var Stationary= document.getElementById("Stationary");

var Dor1= document.getElementById("10");
var Dor2= document.getElementById("20");
var Dor3= document.getElementById("30");
var Dor4= document.getElementById("40");
var Dor5= document.getElementById("50");
var Dor6= document.getElementById("60");
var Dor7= document.getElementById("70");
var Dor8= document.getElementById("80");
var Dor9= document.getElementById("90");
var Dor100= document.getElementById("100");
var Dor200= document.getElementById("200");



//fetching the data from airtable base 
async function fetchData(url){
  let response = await fetch(url); 
  let jsonData = await response.json();
  return jsonData; 
}



//storing that fetched data into our array 'apiData'
async function getData (){
	let data = await fetchData(apiURL); //call the fetchData function and store json in 'data' variable
    for (let i=0; i<data.records.length; i++){
        let record = data.records[i]. fields; 
        apiData.push(record);
 }
 console.log(apiData)
 imageDisplay()
 makeMultiselect();
}

//function to search for correct items and display the correct image
function imageDisplay(){
	console.log()

for (var i = 0;i< apiData.length; i++) {
if (apiData[i]){

//All image 
var elem=document.createElement("img");
   elem.setAttribute("src",apiData[i].Images[0].url);
   elem.setAttribute("height","300");
   elem.setAttribute("width","200");
   image_holder.appendChild(elem);
 }
}
}


// function makeMultiselect(){
//     for(let i = 0; i<apiData.length;i++){
//         for(let j=0;j<apiData[i].Items.length;j++){
//             // if (apiData[i] && apiData[i].Items == search){
//             let caption_holder = apiData[i].Items[j];
//             Items.push(caption_holder);
//             let captions = document.createElement('p');
//            captions.setAttribute("src",apiData[i].Items[0].url)
//             captions.setAttribute("height","30");
//             captions.setAttribute("width","20");
//            // captions.innerHTML = Items;
//            // captions.classList.add('captions');
//            text.appendChild(captions)

//         // }
//     }
//   }
// }
//Categories

function filter(search){
while (image_holder.firstChild) {
  image_holder.removeChild(image_holder.firstChild);
}

	for (var i = 0;i< apiData.length; i++) {
	    if (apiData[i] && apiData[i].Categories == search){
	    console.log(apiData[i].Images[0].url)
        var elem=document.createElement("img");
        elem.setAttribute("src",apiData[i].Images[0].url);
        elem.setAttribute("height","300");
        elem.setAttribute("width","200");
        image_holder.appendChild(elem);
	    }
	}

}
Book.addEventListener("click",()=>{filter("Book")})
Beauty.addEventListener("click",()=>{filter("Beauty")})
Clothes.addEventListener("click",()=>{filter("Clothes")})
Electronics.addEventListener("click",()=>{filter("Electronics")})
Food.addEventListener("click",()=>{filter("Food")})
Health.addEventListener("click",()=>{filter("Health & Medicine")})
Household.addEventListener("click",()=>{filter("Household")})
Personal.addEventListener("click",()=>{filter("Personal care")})
Stationary.addEventListener("click",()=>{filter("Stationary")})
All.addEventListener("click",()=>{imageDisplay()})


//Price 

function Pricefilter(search){
while (image_holder.firstChild) {
  image_holder.removeChild(image_holder.firstChild);
}

	for (var i = 0;i< apiData.length; i++) {
	    if (apiData[i] && apiData[i].Price == search){
	    console.log(apiData[i].Images[0].url)
        var elem=document.createElement("img");
        elem.setAttribute("src",apiData[i].Images[0].url);
        elem.setAttribute("height","300");
        elem.setAttribute("width","200");
        image_holder.appendChild(elem);
	    }
	}
}
    Dor1.addEventListener("click",()=>{Pricefilter("$1-10")})
    Dor2.addEventListener("click",()=>{Pricefilter("$11-20")})
    Dor3.addEventListener("click",()=>{Pricefilter("$21-30")})
    Dor4.addEventListener("click",()=>{Pricefilter("$31-40")})
    Dor5.addEventListener("click",()=>{Pricefilter("$41-50")})
    Dor6.addEventListener("click",()=>{Pricefilter("$51-60")})
    Dor7.addEventListener("click",()=>{Pricefilter("$61-70")})
    Dor8.addEventListener("click",()=>{Pricefilter("$71-80")})
    Dor9.addEventListener("click",()=>{Pricefilter("$81-90")})
    Dor100.addEventListener("click",()=>{Pricefilter("$91-100")})
    Dor200.addEventListener("click",()=>{Pricefilter("<$100")})


getData()

//   // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// // var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
