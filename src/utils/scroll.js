window.addEventListener('load', () => {
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });
});
