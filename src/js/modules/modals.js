const modals = () => {
  let btnChecked = false;

  //Popup modal by click on smth
  const bindmodal = (triggerSelector, modalSelector, closSelector, destroy = false) => {
    //Selectors of elements
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closSelector),
          windows = document.querySelectorAll('[data-modal]');

    //Realization of modal popup for all triggers
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if(e.target) {
          e.preventDefault();
        }

        //Something pressed at list one time
        btnChecked = true;

        //Destroing trigger for fixed gift
        if (destroy) {
          item.remove();
        }

        windows.forEach(item => {
          item.style.display = 'none';
        });

        modal.style.display = "block";//Modal's display from none to block(visible)
        document.body.style.overflow = "hidden";//Full body exept modal is hidden(no scroll)
        document.body.style.marginRight = `${hidePopupScroll()}px`;//Remove scroll line

        //normal margin for fized gift
        document.querySelector('.fixed-gift').style.marginRight = `${hidePopupScroll()}px`;
      });
    });

    //Close modal on click to crossbutton
    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });

      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = '0px';
      document.querySelector('.fixed-gift').style.marginRight = `0px`;
    });

    //Close modal on click to overflow of modal
    modal.addEventListener('click', e => {
      if(e.target === modal) {
        windows.forEach(item => {
          item.style.display = 'none';
        });

        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = '0px';
        document.querySelector('.fixed-gift').style.marginRight = `0px`;
      }
    });
  };

  //Popup modal by time function
  const modalByTime = (modalSelector, time) => {
    setTimeout(() => {
      let display;

      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });

      if (!display) {
        document.querySelector(modalSelector).style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${hidePopupScroll()}px`;

        document.querySelector('.fixed-gift').style.marginRight = `${hidePopupScroll()}px`;
      }
    }, time);
  };

  function hidePopupScroll() {
    //Create some element
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    //full window width minus client width equals scroll width
    let scrollWidth = div.offsetWidth - div.clientWidth;
    //after calculation scroll width removes helper element
    div.remove();

    return scrollWidth;
  }

  const openByScrolldown = selector => {
    window.addEventListener('scroll', () => {
      //This var for old browsers(documentElement for modern browsers but body for outdated)
      let scrollToBottom = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

      if (!btnChecked && (window.pageYOffset + document.documentElement.clientHeight >= scrollToBottom)) {
        document.querySelector(selector).click();//Just click the button artificially
      }
    });

  };

  bindmodal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindmodal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindmodal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

  openByScrolldown('.fixed-gift');
  modalByTime('.popup-consultation', 3000);
};

//Export main function of file
export default modals;