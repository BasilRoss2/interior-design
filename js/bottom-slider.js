let slidesToShow = 4;
const slidesToScroll = 1;
const slider = document.querySelector('.b-projects');
const sliderSlides = document.querySelector('.b-projects__slider');
const buttonPrev = document.querySelector('.slider__arrow_back');
const buttonNext = document.querySelector('.slider__arrow_forward');
const slides = document.querySelectorAll('.b-projects__slider-slide');

const page = document.querySelector('.page-wrapper');
let pageWidth = page.clientWidth;

if (pageWidth < 1540)
    slidesToShow = 3;

if (pageWidth < 1000)
    slidesToShow = 2;

if (pageWidth < 500)
    slidesToShow = 1;

let slideWidth = sliderSlides.clientWidth / slidesToShow;

let position = 0;


buttonNext.addEventListener('click', activateButtonNext);

function setSlideWidth() {

    slides.forEach(slide => {
        slide.style.minWidth = `${slideWidth}px`;
    })
}


function checkPrevButton() {
    if (position > -1) {
        buttonPrev.classList.add('slider__arrow_disabled');
        buttonPrev.removeEventListener('click', activateButtonPrev);
    } else {
        buttonPrev.classList.remove('slider__arrow_disabled');
        buttonPrev.addEventListener('click', activateButtonPrev)
    }
}

function checkNextButton() {
    const sliderWidth = document.getElementsByClassName("b-projects__slider")[0].childElementCount * slideWidth;
    const endPosition = -sliderWidth - position;

    if (endPosition >= -slider.clientWidth) {
        buttonNext.classList.add('slider__arrow_disabled');
        buttonNext.removeEventListener('click', activateButtonNext);
    } else {
        buttonNext.classList.remove('slider__arrow_disabled');
        buttonNext.addEventListener('click', activateButtonNext)
    }
}

function activateButtonNext() {
    const sliderStep = slidesToScroll * slideWidth;
    position -= sliderStep;
    sliderSlides.style.transform = `translateX(${position}px)`;
    checkNextButton()
    checkPrevButton()
}

function activateButtonPrev() {
    const sliderStep = slidesToScroll * slideWidth;
    position += sliderStep;
    sliderSlides.style.transform = `translateX(${position}px)`;
    checkPrevButton()
    checkNextButton()
}

setSlideWidth()