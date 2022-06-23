const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider__btn--prev');
const nextBtn = document.querySelector('.slider__btn--next');
const slides = slider && slider.querySelectorAll('.slider__item');
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

if (prevBtn !== null) {
  prevBtn.addEventListener('click', () => {
    if (isEnabled) {
      previousItem(slideIndex);
    }
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (isEnabled) {
      nextItem(slideIndex);
    }
  });
}
