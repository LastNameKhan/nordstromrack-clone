let loggedin = localStorage.getItem("isLoggedIn");
let loggedinuser = JSON.parse(localStorage.getItem("user"));

let signedin = document.getElementById("sign");

console.log(signedin);
console.log(loggedinuser);
console.log(loggedin);

if (loggedin && loggedinuser.name.length > 0) {
  signedin.textContent = loggedinuser.name;
}

function showPopup() {
  const popup = document.getElementById("popup_container");
  popup.style.display = "block";
}
function hidePopup() {
  const popup = document.getElementById("popup_container");
  popup.style.display = "none";
}

var slidePosition = 1;
SlideShow(slidePosition);

function plusSlides(n) {
  SlideShow((slidePosition += n));
}

function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}
var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {
    slidePosition = 1;
  }
  slides[slidePosition - 1].style.display = "block";
  setTimeout(SlideShow, 3000); // Change image every 2 seconds
}
