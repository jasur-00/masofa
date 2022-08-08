var elForm = document.querySelector(".site-form");
var elInput = document.querySelector(".site-input");
// var elBtn = document.querySelector(".way-btn");
var elSiteList = document.querySelector(".site-list");
var elTimeFoot = elSiteList.querySelector(".site-foot");
var elTimeBike = elSiteList.querySelector(".site-bike");
var elTimeCar = elSiteList.querySelector(".site-car");
var elTimeTrain = elSiteList.querySelector(".site-train");

var minValue = 0;

var footSpeed = 15;
var bikeSpeed = 35;
var carSpeed = 80;
var trainSpeed = 120;

elForm.addEventListener("submit", function(evt){
  evt.preventDefault()

  elInputValue = Number(elInput.value);
  elInput.value = "";

  var footTime = (elInputValue / footSpeed).toFixed(1);
  var bikeTime = (elInputValue / bikeSpeed).toFixed(1);
  var carTime = (elInputValue / carSpeed).toFixed(1);
  var trainTime = (elInputValue / trainSpeed).toFixed(1);

  if (elInputValue <= minValue) {
    alert("Add positive numbers!")
  } else {
    document.querySelector(".site-foot").textContent = `${footTime} soat`;
    document.querySelector(".site-bike").textContent = `${bikeTime} soat`;
    document.querySelector(".site-car").textContent = `${carTime} soat`;
    document.querySelector(".site-train").textContent = `${trainTime} soat`;
  }
})