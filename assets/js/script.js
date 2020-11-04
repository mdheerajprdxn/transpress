/* Author: 

*/

var showNavButton = document.querySelector(".hamburger-icon");

var nav = document.querySelector("#nav");

function myFunction() {
  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

showNavButton.addEventListener("click", myFunction);
