const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector);

  menuElem.style.display = 'none';


  const showMenu = () => {
          menuElem.classList.remove('animated', 'fadeOutLeft');
          menuElem.classList.add('animated', 'fadeInLeft');

          menuElem.style.display = 'block';
        },
        hideMenu = () => {
          menuElem.classList.remove('animated', 'fadeInLeft');
          menuElem.classList.add('animated', 'fadeOutLeft');

          setTimeout(() => {
            menuElem.style.display = 'none';
          }, 500);
        };


  burgerElem.addEventListener('click', () => {
    if (document.documentElement.clientWidth < 993 && menuElem.style.display === 'none') { showMenu(); }
    else { hideMenu(); }
  });

  window.addEventListener('resize', () => {
    hideMenu();
  });
};

export default burger;