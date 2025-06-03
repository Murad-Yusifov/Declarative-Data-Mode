let slideIndex: number = 1; // Slayd indeksinin tipi `number` olaraq təyin olunur
showSlices(slideIndex);

function plusSlides(n: number): void {
    showSlices(slideIndex += n);
}

function currentSlice(n: number): void {
    showSlices(slideIndex = n);
}

function showSlices(n: number): void {
    let slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
    let dots: HTMLCollectionOf<Element> = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i: number = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none"; // `HTMLElement` tipi ilə kast edilir
    }

    for (let i: number = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex - 1] && dots[slideIndex - 1]) {
        (slides[slideIndex - 1] as HTMLElement).style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    console.log(dots.length);
}
