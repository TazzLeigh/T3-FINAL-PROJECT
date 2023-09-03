


//Checkout//
  //Remove Item Button
  // Remove Item Button

 
function removeItem(itemId) {
  // Find the table row with the given itemId
  var row = document.getElementById(itemId);
  
  // Check if the row exists
  if (row) {
    // Remove the row from the table
    row.remove();
  }
}



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
var btns = btnContainer.getElementsByClassName("butt");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Success Modal//

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
