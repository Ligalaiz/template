const menuBtn = document.getElementById('menuBtn');
const followSubmenu = document.getElementById('followSubmenu');
const aboutSubmenu = document.getElementById('aboutSubmenu');
const follow = document.getElementById('follow');
const about = document.getElementById('about');
const nav = document.getElementById('nav');

window.addEventListener('load', () => {
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

    if (target.closest('.navLink')) {
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

  document.addEventListener('click', handleClick);
});
