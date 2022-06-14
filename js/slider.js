const topBackgroundImage = document.querySelector('.b-top');
const backgroundSwitchers = document.querySelectorAll('.b-top__slder-switcher')
const sliderSwitcher1 = document.querySelector('#b-top__slder-switcher-1');
const sliderSwitcher2 = document.querySelector('#b-top__slder-switcher-2');
const sliderSwitcher3 = document.querySelector('#b-top__slder-switcher-3');
const activeSwitcherClass = 'b-top__slder-switcher_active';
const backgroundOne = 'center / cover no-repeat url(../images/b-top-background.jpg) scroll';
const backgroundTwo = 'center / cover no-repeat url(../images/b-top-background-2.jpg) scroll';
const backgroundThree = 'center / cover no-repeat url(../images/b-top-background-3.jpg) scroll';

function switcherDisable() {
    backgroundSwitchers.forEach(switcher => {
        switcher.classList.remove(activeSwitcherClass)
    })
}

function changeBackground1() {
    topBackgroundImage.style.background = backgroundOne;
    switcherDisable();
    sliderSwitcher1.classList.add(activeSwitcherClass);

}

function changeBackground2() {
    topBackgroundImage.style.background = backgroundTwo;
    switcherDisable();
    sliderSwitcher2.classList.add(activeSwitcherClass);
}

function changeBackground3() {
    topBackgroundImage.style.background = backgroundThree;
    switcherDisable();
    sliderSwitcher3.classList.add(activeSwitcherClass);
}


sliderSwitcher1.addEventListener('click', changeBackground1);

sliderSwitcher2.addEventListener('click', changeBackground2);

sliderSwitcher3.addEventListener('click', changeBackground3);

AOS.init({
    duration: 1200,
})