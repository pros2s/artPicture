const sliders = (slides, dir, prev, next) => {
  const items = document.querySelectorAll(slides),
        prevBtn = document.querySelector(prev),
        nextBtn = document.querySelector(next);

  let slideIndex = 1;//Counter of slides

  const showSlides = n => {
    //If current slide index more then slides length, then shows the first slide
    if (n > items.length) {
      slideIndex = 1;
    }
    //If current slide index less then the first slide, then shows the last slide
    else if (n < 1) {
      slideIndex = items.length;
    }
    else {
      items.forEach(item => {
        item.classList.add('animated');
        item.style.display = 'none';
      });
    }

    items[slideIndex - 1].style.display = 'block';//Shows current slide
  };

  showSlides(slideIndex);
};

export default sliders;