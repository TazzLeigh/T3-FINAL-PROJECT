$(document).ready(function() {
  getWeather();
  });

//Checkout//
  //Remove Item Button
  $(".btn1").click(function(){
    $("#item1").remove();
    })
  $(".btn2").click(function(){
    $("#item2").remove();
      })
  $(".btn3").click(function(){
    $("#item3").remove();
        })
// Search Filter//
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Sucess Modal//

 // Get the modal and buttons
 var modal = document.getElementById("successModal");
 var checkoutButton = document.getElementById("checkoutButton");
 var closeModalButton = document.getElementById("closeModalButton");

 // When the user clicks the "Checkout" button, display the modal
 checkoutButton.onclick = function() {
     modal.style.display = "block";
 }

 // When the user clicks the "Close" button, hide the modal
 closeModalButton.onclick = function() {
     modal.style.display = "none";
 }

 // Close the modal if the user clicks outside of it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

 //Sucess Modal//
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

//Weather Widget//
function loadWeather (){

  for(let i = 0; i < weatherArray.length; i++){
      const weather = weatherArray[i];
      
      $.ajax({
          type: "GET",
          url: "https://api.openweathermap.org/data/2.5/weather?q=" + weather.city +"&appid=2e69876c9344bbafe48bcf1b99faf2b1",
          success: function(data){
              temp = data
              console.log(data);
          }
        }).done(function(){
          $(currentWeather).find("#minMaxTemp").text(Math
function loadWeather (){

  for(let i = 0; i < weatherArray.length; i++){
      const weather = weatherArray[i];
      
      $.ajax({
          type: "GET",
          url: "https://api.openweathermap.org/data/2.5/weather?q=" + weather.city +"&appid=2e69876c9344bbafe48bcf1b99faf2b1",
          success: function(data){
              temp = data
              console.log(data);
          }
        }).done(function(){
          $(currentWeather).find("#minMaxTemp").text(Math