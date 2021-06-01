function slider({slide,nextArrow,prevArrow}) {
    //Slider

const slides = document.querySelectorAll(slide),
current = document.querySelector('#current'),
total = document.querySelector('#total'),
next = document.querySelector(nextArrow),
prev = document.querySelector(prevArrow);
let slideIndex = 1;

showSlides(slideIndex);

if(slides.length < 10) {
    total.textContent = `0${slides.length}`;
} else {
    total.textContent = `${slides.length}`;
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';

    if(slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }

}

function plusSlides(n) {
showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
plusSlides(-1);
});

next.addEventListener('click', () => {
plusSlides(1);
});
}
export default slider;