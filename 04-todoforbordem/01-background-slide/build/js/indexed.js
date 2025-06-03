"use strict";
let slideIndex = 1; // Slayd indeksinin tipi `number` olaraq təyin olunur
showSlices(slideIndex);
function plusSlides(n) {
    showSlices(slideIndex += n);
}
function currentSlice(n) {
    showSlices(slideIndex = n);
}
function showSlices(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // `HTMLElement` tipi ilə kast edilir
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1] && dots[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    console.log(dots.length);
}
