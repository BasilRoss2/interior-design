const topBackgroundImage = document.querySelector('.b-top');
const sliderSwitcher1 = document.querySelector('#b-top__slder-switcher-1');
const sliderSwitcher2 = document.querySelector('#b-top__slder-switcher-2');
const sliderSwitcher3 = document.querySelector('#b-top__slder-switcher-3');
const activeSwitcher = 'b-top__slder-switcher_active';

sliderSwitcher1.addEventListener('click', changeBackground1);

function changeBackground1() {
    topBackgroundImage.style.background = 'center / cover no-repeat url(../images/b-top-background.jpg) scroll';

}

sliderSwitcher2.addEventListener('click', changeBackground2);

function changeBackground2() {
    topBackgroundImage.style.background = 'center / cover no-repeat url(../images/b-top-background-2.jpg) scroll';
    sliderSwitcher2.classList.add = ('b-top__slder-switcher_active');
}

sliderSwitcher3.addEventListener('click', changeBackground3);

function changeBackground3() {
    topBackgroundImage.style.background = 'center / cover no-repeat url(../images/b-top-background-3.jpg) scroll';
}