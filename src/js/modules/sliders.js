const sliders = (slides, prev, next, updown = false) => {
  const items = document.querySelectorAll(slides);
  let slideIndex = 1,//Counter of slides
      paused = false;//Id for intervals


  const showSlides = n => {
    //If current slide index more then slides length, then shows the first slide
    if (n > items.length) {
      slideIndex = 1;
    }
    //If current slide index less then the first slide, then shows the last slide
    if (n < 1) {
    slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });

    items[slideIndex - 1].style.display = 'block';//Shows current slide
  };
  showSlides(slideIndex);


  const changeSlides = n => {
    showSlides(slideIndex += n);
  };

  const changeClasses = (firstClass, secondClass) => {
    items[slideIndex - 1].classList.remove(firstClass);
    items[slideIndex - 1].classList.add(secondClass);
  };


  //Changing slides for slider with arrows
  try { //To prevent the code from stopping
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);

    //Functional for prev button
    prevBtn.addEventListener('click', () => {
      changeSlides(-1);
      changeClasses('slideInRight', 'slideInLeft');
    });

    //Functional for next button
    nextBtn.addEventListener('click', () => {
      changeSlides(1);
      changeClasses( 'slideInLeft', 'slideInRight');
    });
  }
  catch(e) {}


  //Autochange slides in sliders
  const AutoAtnimate = () => {
    if(updown) {//for vertical slider
      paused = setInterval(() => {
        changeSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    }
    else {//for horizontal sliders
      paused = setInterval(() => {
        changeSlides(1);
        changeClasses('slideInLeft', 'slideInRight');
      }, 3000);
    }
  };
  AutoAtnimate();


  //Stops autochange when mouse is on the slider
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    AutoAtnimate();
  });
};

export default sliders;