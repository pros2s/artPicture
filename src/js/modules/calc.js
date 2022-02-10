const calc = (size, material, options, promo, result) => {
  const picSize = document.querySelector(size),
        picMat = document.querySelector(material),
        picOptions = document.querySelector(options),
        picPromo = document.querySelector(promo),
        picRes = document.querySelector(result);

  const calculate = () => {
    let sum = Math.round((+picSize.value) * (+picMat.value) + (+picOptions.value));

    if (!picSize.value || !picMat.value) {//if size or material of picture has not chosen
      picRes.textContent = 'Выберете размер и материал картины!';
    }
    else if (picPromo.value == 'IWANTPOPART') {//sale 30% for promocode
      picRes.textContent = Math.round(sum * 0.7);
    }
    else {
      picRes.textContent = sum;
    }
  };

  picSize.addEventListener('change', calculate);
  picMat.addEventListener('change', calculate);
  picOptions.addEventListener('change', calculate);
  picPromo.addEventListener('input', calculate);
};

export default calc;