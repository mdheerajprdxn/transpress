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
