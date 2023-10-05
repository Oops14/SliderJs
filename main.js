/*
* Slider.
*/
const allSlides = document.querySelectorAll('.mySlides');
const dot = document.querySelectorAll('.dot');

// Sliders buttons.
const leftBtn = document.querySelector(".prev");
const rightBtn = document.querySelector(".next");
let activeSlide = 0;

/*
* Popup.
*/
const popup_bg = document.querySelector('.popup-bg');
const popupButton = document.querySelector('.header-my-account');
const innerPopup = document.querySelector('.inner-popup');
const registerBtn = document.querySelector('.sign-up-btn');
const registerPopup = document.querySelector('.register-inner-popup');

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

/*
* Show the popup form.
*/
popupButton.addEventListener('click', (e) => {
    e.preventDefault();

    innerPopup.classList.toggle('popup-active');
})

/*
* Show bg for the popup.
*/
popupButton.addEventListener('click', (e) => {
    e.preventDefault();

    popup_bg.classList.add('popup-bg-show');
})

/*
* Hide popup with the bg.
*/
popup_bg.addEventListener('click', (e) => {
    e.preventDefault();

    popup_bg.classList.remove('popup-bg-show');
    innerPopup.classList.remove('popup-active');
    registerPopup.classList.remove('register-active');
})

/*
* Register button click.
*/
registerBtn.addEventListener('click', (e) => {
    e.preventDefault();

    innerPopup.classList.remove('popup-active');
    registerPopup.classList.add('register-active');
})