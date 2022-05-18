let apiData =[];

let apiURL ="https://api.airtable.com/v0/appOnLwrJVMiV220B/tblmCJWBcL7jGcjbt?api_key=keygBtntXbgrX9pfc"

// array to hold all image shows based on the table
let imageShows = [];
let image_holder = document.querySelector(".image_holder")
let caption_holder=document.querySelector(".caption_holder")

// the html elements we want to access
//const Categorise=document.getElementById('Categorise');
//const Price=document.getElementById('Price');

//not sure
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
var $21= document.getElementById("30");
var $31= document.getElementById("40");
var $41= document.getElementById("50");
var $51= document.getElementById("60");
var $61= document.getElementById("70");
var $71= document.getElementById("80");
var $81= document.getElementById("90");
var $91= document.getElementById("100");
var $100= document.getElementById("200");



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

//Categorise

function filter(search){
while (image_holder.firstChild) {
  image_holder.removeChild(image_holder.firstChild);
}

  for (var i = 0;i< apiData.length; i++) {
      if (apiData[i] && apiData[i].Categorise == search){
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
Book.addEventListener("click",()=>{filter("Book")})
Beauty.addEventListener("click",()=>{filter("Beauty")})
Book.addEventListener("click",()=>{filter("Book")})
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

    Dor1.addEventListener("click",()=>{Pricefilter("20")})
    Dor2.addEventListener("click",()=>{Pricefilter("2")})
    Beauty.addEventListener("click",()=>{filter("Beauty")})




  
  getData()
