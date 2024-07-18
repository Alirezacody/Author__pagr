'use strict';

// btn menu opan & close ;
const btnMenu = document.querySelector('.lable__menu');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const btnDiv = document.querySelectorAll('.btn__menu');
const lableMenu = document.querySelector('#lable__menu--click');
const overlay = document.querySelector('.overlay');
let state = 'noset';

const Btn = function (opacity, rotate, margin, display) {
  bar2.style.opacity = opacity;
  bar2.style.display = String(display);
  bar1.style.transform = `rotate(-${rotate}deg)`;
  bar3.style.transform = `rotate(${rotate}deg)`;
  if (state === 'noset') {
    lableMenu.classList.remove('close__menu');
    lableMenu.classList.add('open__menu');
    overlay.classList.remove('close__menu');
    overlay.classList.add('open__menu');
    document.body.style.overflow = 'hidden';
  } else if (state === 'set') {
    lableMenu.classList.remove('open__menu');
    lableMenu.classList.add('close__menu');
    overlay.classList.remove('open__menu');
    overlay.classList.add('close__menu');
    document.body.style.overflow = 'auto';
  }
  btnDiv.forEach(el => (el.style.margin = `${margin}px 0px`));
  state = state === 'noset' ? (state = 'set') : 'noset';
};

btnMenu.addEventListener('click', () =>
  state === 'noset' ? Btn(0, 50, 0, 'none') : Btn(100, 0, 4, 'block')
);

//slider 1&2 :
const slides = document.querySelectorAll('.slide');
const slides2 = document.querySelectorAll('.slide__data');

const btnLeft = document.querySelector('.btn__left');
const btnRight = document.querySelector('.btn__right');
const btn1 = document.querySelector('.btn__1');
const btn2 = document.querySelector('.btn__2');

const maxSlide = slides.length;
let currentSlide = 0;

const goToSlide = function (slide) {
  slides.forEach(
    (el, i) => (el.style.transform = `translate(${(i - slide) * 100}%)`)
  );
};
const goToSlide2 = function (slide) {
  slides2.forEach(
    (el, i) => (el.style.transform = `translate(${(i - slide) * 100}%)`)
  );
};

goToSlide(currentSlide);
goToSlide2(currentSlide);

btnLeft.addEventListener('click', function () {
  if (currentSlide !== 0) {
    currentSlide--;
  } else {
    currentSlide = maxSlide - 1;
  }

  goToSlide(currentSlide);
  goToSlide2(currentSlide);
});

btnRight.addEventListener('click', function () {
  if (currentSlide !== maxSlide - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }

  goToSlide(currentSlide);
  goToSlide2(currentSlide);
});

btn1.addEventListener('click', function () {
  if (currentSlide !== 0) {
    currentSlide--;
  } else {
    currentSlide = maxSlide - 1;
  }

  goToSlide2(currentSlide);
});

btn2.addEventListener('click', function () {
  if (currentSlide !== maxSlide - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }

  goToSlide2(currentSlide);
});

// color themes :
const btnColor = document.querySelector('.btn__color--state');
const lableColor = document.querySelector('#lable__color--theme');

const colorRed = document.querySelector('.color__red');
const colorYellow = document.querySelector('.color__yellow');
const colorBlue = document.querySelector('.color__blue');
const colorGreen = document.querySelector('.color__green');
const colorPrimary = document.querySelector('.color__primary');

const textTheme = document.querySelectorAll('.text-theme');
const bgTheme = document.querySelectorAll('.bg-theme');
const borderTheme = document.querySelector('.border-theme');

btnColor.addEventListener('click', function () {
  if (!btnColor.classList.contains('btn__active')) {
    btnColor.classList.add('btn__active');
    lableColor.classList.add('lable__active');
  } else {
    btnColor.classList.remove('btn__active');
    lableColor.classList.remove('lable__active');
  }
});

const colorThemefun = function (color) {
  textTheme.forEach(el => (el.style.color = `${color}`));
  bgTheme.forEach(el => (el.style.backgroundColor = `${color}`));
  borderTheme.style.border = `1px solid ${color}`;
};

colorRed.addEventListener('click', () => colorThemefun('#b82b2b'));

colorYellow.addEventListener('click', () => colorThemefun('#e5de08'));

colorBlue.addEventListener('click', () => colorThemefun('#0c08e5'));

colorGreen.addEventListener('click', () => colorThemefun('#249819'));

colorPrimary.addEventListener('click', () => colorThemefun('#c18f59'));
