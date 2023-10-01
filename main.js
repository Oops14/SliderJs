const allSlides = document.querySelectorAll('.mySlides');
const dot = document.querySelectorAll('.dot');
const leftBtn = document.querySelector(".prev");
const rightBtn = document.querySelector(".next");

let activeSlide = 0;

function setActiveSlides() {
    allSlides.forEach((el) => el.classList.remove("active"));
    dot.forEach((el) => el.classList.remove("active"));

    allSlides[activeSlide].classList.add("active");
    dot[activeSlide].classList.add("active");
}

leftBtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = allSlides.length - 1;
    }

    setActiveSlides();
})

rightBtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > allSlides.length - 1) {
        activeSlide = 0;
    }

    setActiveSlides();
})

setActiveSlides();