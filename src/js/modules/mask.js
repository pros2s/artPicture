const mask = selector => {
  const setCursourPosition = (position, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(position, position);
    }
    else if (elem.createTextRange) {
      let range = elem.createTextRange();

      range.collapse(true);
      range.moveEnd('character', position);
      range.moveStart('character', position);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = '+7 (___) ___ __ __';
    let i = 0;
    let def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, a => {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length === 2) {
        this.value = '';
      }
    }
    else {
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
