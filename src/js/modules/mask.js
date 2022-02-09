const mask = selector => {
  //function to set cursour at right position
  const setCursourPosition = (position, elem) => {
    elem.focus(); //forced focus

    //if browser has method 'setSelectionRange'
    if (elem.setSelectionRange) {
      elem.setSelectionRange(position, position);
    }
    else if (elem.createTextRange) {//for other browsers(expl)
      let range = elem.createTextRange();

      range.collapse(true);//start position = end one
      range.moveEnd('character', position);//end position
      range.moveStart('character', position);//start position(= end position)
      range.select();//select textrange
    }
  };

  function createMask(event) {
    let matrix = '+7 (___) ___ __ __'; //Here is our mask
    let i = 0; //index of symbols
    let def = matrix.replace(/\D/g, ''), //to show only plus and seven
        val = this.value.replace(/\D/g, ''); //to show only plus and seven for input

    //to prevent deleting plus and seven during input
    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, a => {
      //fill the phone mask
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    //if clicked outside the mask and no sybols in input, then mask become default
    if (event.type === 'blur') {
      if (this.value.length === 2) {
        this.value = '';
      }
    }
    else {
      //set cursour in the end of val
      setCursourPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);

  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

export default mask;
