/* Author: 

*/

var showNavButton = document.querySelector(".hamburger-icon");
let cross = document.querySelector("#closeNav");
var nav = document.querySelector("#nav");

function showNav() {
  nav.style.transform = "translateX(0%)";
  cross.style.display = "block";
}

cross.addEventListener("click", hideNav);
function hideNav() {
  nav.style.transform = "translateX(-100%)";
  cross.style.display = "none";
}

showNavButton.addEventListener("click", showNav);

// Video Modal
let modal = document.querySelector("#modal");
let videoElement = document.querySelector(".about-video");
let video = document.querySelector("#modal video");
videoElement.addEventListener("click", showModal);

function showModal(e) {
  modal.style.display = "block";
  video.play();
}

window.addEventListener("click", closeModal);

function closeModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    video.pause();
  }
}

let dropDownMenu = document.querySelectorAll(".dropdown-menu");

// nav dropdown click

dropDownMenu.forEach((item) => {
  item.addEventListener("click", showDropDown);
});

function showDropDown(e) {
  let dropdownContent = e.target.nextElementSibling;
  if (dropdownContent.style.display.toLowerCase() == "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}
