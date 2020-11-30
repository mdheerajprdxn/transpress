/* Author: 

*/

var showNavButton = document.querySelector(".hamburger-icon");
let backdrop = document.querySelector(".backdrop");
var nav = document.querySelector("#nav");

function showNav() {
  nav.style.transform = "translateX(0%)";
  backdrop.style.display = "block";
}

backdrop.addEventListener("click", hideNav);
function hideNav() {
  nav.style.transform = "translateX(-100%)";
  backdrop.style.display = "none";
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
  console.log(e.target);
  if (e.target == modal) {
    modal.style.display = "none";
    video.pause();
  }
}
