import './styles/index.scss';

const menuBtn = document.getElementById('menuBtn');
const followSubmenu = document.getElementById('followSubmenu');
const aboutSubmenu = document.getElementById('aboutSubmenu');
const follow = document.getElementById('follow');
const about = document.getElementById('about');
const nav = document.getElementById('nav');
const header = document.getElementById('header');
const form = document.getElementById('form');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

const handleClick = (e) => {
  const { target } = e;

  if (target.closest('#menuBtn')) {
    if (menuBtn.classList.contains('opened')) {
      menuBtn.classList.remove('opened');
      nav.classList.remove('active');

      followSubmenu.classList.add('close');
      followSubmenu.classList.remove('active');
      follow.classList.remove('active');

      aboutSubmenu.classList.remove('active');
      aboutSubmenu.classList.add('close');
      about.classList.remove('active');
    } else {
      menuBtn.classList.add('opened');
      nav.classList.add('active');
    }
  }

  if (target.closest('#follow')) {
    if (followSubmenu.classList.contains('active')) {
      followSubmenu.classList.add('close');
      followSubmenu.classList.remove('active');
      follow.classList.remove('active');
    } else {
      follow.classList.add('active');
      followSubmenu.classList.add('active');
      followSubmenu.classList.remove('close');
    }
  }

  if (target.closest('#about')) {
    if (aboutSubmenu.classList.contains('active')) {
      aboutSubmenu.classList.remove('active');
      aboutSubmenu.classList.add('close');
      about.classList.remove('active');
    } else {
      about.classList.add('active');
      aboutSubmenu.classList.remove('close');
      aboutSubmenu.classList.add('active');
    }
  }

  if (target.closest('#navLink')) {
    followSubmenu.classList.add('close');
    followSubmenu.classList.remove('active');
    follow.classList.remove('active');
    aboutSubmenu.classList.remove('active');
    aboutSubmenu.classList.add('close');
    about.classList.remove('active');
    menuBtn.classList.remove('opened');
    nav.classList.remove('active');
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  form.reset();
};

if (form) form.addEventListener('submit', handleSubmit);
document.addEventListener('click', handleClick);

// Slider
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider__btn--prev');
const nextBtn = document.querySelector('.slider__btn--next');
const slides = slider.querySelectorAll('.slider__item');
let slideIndex = 0;
let isEnabled = true;

const slideShow = (n) => {
  slideIndex = (n + slides.length) % slides.length;
};

const hideItem = (direction) => {
  isEnabled = false;
  slides[slideIndex].classList.add(direction);
  slides[slideIndex].addEventListener('animationend', function () {
    this.classList.remove('active', direction);
  });
};

const showItem = (direction) => {
  slides[slideIndex].classList.add('next', direction);
  slides[slideIndex].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
};

const nextItem = (n) => {
  hideItem('to-left');
  slideShow(n + 1);
  showItem('from-right');
};

const previousItem = (n) => {
  hideItem('to-right');
  slideShow(n - 1);
  showItem('from-left');
};

prevBtn.addEventListener('click', () => {
  if (isEnabled) {
    previousItem(slideIndex);
  }
});

nextBtn.addEventListener('click', () => {
  if (isEnabled) {
    nextItem(slideIndex);
  }
});
