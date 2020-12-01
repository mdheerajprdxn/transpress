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
let closeVideo = document.querySelector(".close-modal");
videoElement.addEventListener("click", showModal);

function showModal(e) {
  modal.style.display = "flex";
  video.play();
}

// window.addEventListener("click", closeModal);
closeVideo.addEventListener("click", closeModal);

function closeModal(e) {
  console.log("close modal");
  modal.style.display = "none";
  video.pause();
}

// nav dropdown click

let dropDownMenu = document.querySelectorAll("li.dropdown-menu");
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

// accordian
let accordianCounter = 0;

let accordianHeaders = document.querySelectorAll(".accordian-header");
accordianHeaders.forEach((item) => {
  item.addEventListener("click", accordianHandler);
});

function accordianHandler(e) {
  let accordianItem = e.target.parentElement;
  let accordianContent = accordianItem.nextElementSibling;
  resetAccordian();
  console.log(accordianContent);
  accordianContent.style.display = "block";
}

function resetAccordian() {
  accordianHeaders.forEach((item) => {
    let accordianItem = item;
    let accordianContent = accordianItem.nextElementSibling;

    console.log(accordianContent);
    accordianContent.style.display = "none";
  });
}
