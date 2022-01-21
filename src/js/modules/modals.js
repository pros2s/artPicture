const modals = () => {
  //Popup modal by click on smth
  const bindmodal = (triggerSelector, modalSelector, closSelector, closeClickOverlay = true) => {
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

        windows.forEach(item => {
          item.style.display = 'none';
        });

        modal.style.display = "block";//Modal's display from none to block(visible)
        document.body.style.overflow = "hidden";//Full body exept modal is hidden(no scroll)
        document.body.style.marginRight = `${hidePopupScroll()}px`;//Remove scroll line
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
    });

    //Close modal on click to overflow of modal
    modal.addEventListener('click', e => {
      if(e.target === modal && closeClickOverlay) {
        windows.forEach(item => {
          item.style.display = 'none';
        });

        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = '0px';
      }
    });
  };

  //Popup modal by time function
  const modalByTime = (modalSelector, time) => {
    setTimeout(() => {
      document.querySelector(modalSelector).style.display = "block";
      document.body.style.overflow = "hidden";
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

  bindmodal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindmodal('.phone_link', '.popup', '.popup .popup_close');
  bindmodal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindmodal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindmodal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

  modalByTime('.popup', 60000);
};

//Export main function of file
export default modals;