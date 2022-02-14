const scrolling = (upSelector) => {
  const upBtn = document.querySelector(upSelector);

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 849) {
      upBtn.classList.add('animated', 'fadeInUpBig');
      upBtn.classList.remove('fadeOutDown');
    }
    else {
      upBtn.classList.add('fadeOutDown');
      upBtn.classList.remove('fadeInUpBig');
    }
  });


  // Scrolling with raf
  let links = document.querySelectorAll('[href^="#"]'),//all links which first symbol(^) is '#'
      speed = 0.15;

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      //document.body.scrollTop for old browsers
      let scrollTop = Math.round(document.body.scrollTop || document.documentElement.scrollTop),
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,//height of the hash element(px)
          start = null;

      requestAnimationFrame(step);//Interface for simple animation in js

      function step(time) {
        if (!start) { start = time; }

        let progress = time - start,
          r = (toBlock < 0 ? Math.max(scrollTop - progress / speed, scrollTop + toBlock) : Math.min(scrollTop + progress / speed, scrollTop + toBlock));

          document.documentElement.scrollTo(0, r);

        if (r != scrollTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });


  // Pure js scrolling
  // const calcScroll = () => {
  //   upBtn.addEventListener('click', function(event) {
  //     //document.body.scrollTop for old browsers
  //     let scrollTop = Math.round(document.body.scrollTop || document.documentElement.scrollTop);

  //     if (this.hash !== '') {
  //       event.preventDefault();
  //       let hashElement = document.querySelector(this.hash),//this.hash == this id
  //           hashElementTop = 0;

  //       //while current element has parent(until body or html, or static positioned element)
  //       while (hashElement.offsetParent) {
  //         hashElementTop += hashElement.offsetTop;//calculate scrollTop value of element
  //         hashElement = hashElement.offsetParent;
  //       }

  //       hashElementTop = Math.round(hashElementTop);
  //       smoothScroll(scrollTop, hashElementTop, this.hash);
  //     }
  //   });
  // };


  // const smoothScroll = (from, to, hash) => {
  //   let timeInterval = 1,
  //       prevScrollTop,
  //       speed;

  //   //if element below click position(scroll down), else (scroll up)
  //   to > from ? speed = 50 : speed = -50;

  //   //id of interval
  //   let move = setInterval(() => {
  //     let scrollTop = Math.round(document.body.scrollTop || document.documentElement.scrollTop);

  //     if (
  //       //already did smooth scroll
  //       prevScrollTop === scrollTop ||
  //       (to > from && scrollTop >= to) ||
  //       (to < from && scrollTop <= to)
  //       //
  //     ) {
  //       clearInterval(move);
  //       history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
  //     }
  //     else {
  //       //does smooth scroll
  //       document.body.scrollTop += speed;
  //       document.documentElement.scrollTop += speed;
  //       prevScrollTop = scrollTop;
  //       //
  //     }
  //   }, timeInterval);
  // };

  // calcScroll();
};

export default scrolling;