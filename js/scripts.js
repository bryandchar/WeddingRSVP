let slideIndex = 1;
let timer;
let startX;

showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
resetTimer();
}

function currentSlide(n) {
showSlides(slideIndex = n);
resetTimer();
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n==undefined){n = ++slideIndex}
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";

resetTimer();
}

function resetTimer() {
clearTimeout(timer);
timer = setTimeout(showSlides, 5000);
}

// Swipe functionality
document.addEventListener("touchstart", touchStart);
document.addEventListener("touchend", touchEnd);

function touchStart(event) {
startX = event.changedTouches[0].screenX;
}

function touchEnd(event) {
let endX = event.changedTouches[0].screenX;
let diffX = endX - startX;
if (diffX > 50) {
// Swipe right, go to previous slide
if (slideIndex == 1) {
showSlides(slideIndex = document.getElementsByClassName("mySlides").length);
} else {
showSlides(slideIndex -= 1);
}
} else if (diffX < -50) {
// Swipe left, go to next slide
if (slideIndex == document.getElementsByClassName("mySlides").length) {
showSlides(slideIndex = 1);
} else {
showSlides(slideIndex += 1);
}
}
}