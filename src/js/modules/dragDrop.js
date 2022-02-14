const dragDrop = (dragSelector) => {
  const elemsToDrop = document.querySelectorAll(dragSelector);

  //dragenter - элемент в пределах dropArea
  //dragleave - элемент за пределами dropArea
  //dragover - элемент зависает над dropArea
  //drop - элемент отправлен в dropArea


  const preventDefaults = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    elemsToDrop.forEach(elem => {
      elem.addEventListener(eventName, preventDefaults);
    });
  });


  //styles if 'dragenter' or 'dragover'
  const highlight = item => {
          const itemElem = item.querySelector('button');

          itemElem.innerText = 'Отпустите здесь';

          itemElem.style.cssText = `
            transition: .15s all linear;
            background-color: #C51ABB;
            border: 2px solid #C51ABB;
            color: #fff;
          `;
        },
        unhighlight = item => {
          const itemElem = item.querySelector('button');
          itemElem.innerText = 'Загрузить фотографию';
          itemElem.style.cssText = '';
        };


  //Listeners on drag and drop events
  ['dragover', 'dragenter'].forEach(eventName => {
    elemsToDrop.forEach(elem => {
      elem.addEventListener(eventName, () => highlight(elem), false);
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    elemsToDrop.forEach(elem => {
      elem.addEventListener(eventName, () => unhighlight(elem), false);
    });
  });


  //chages fileList on 'drop'
  elemsToDrop.forEach(elem => {
    elem.addEventListener('drop', e => {
      elem.files = e.dataTransfer.files;

      //cut the name of file(s)
      let dots;
      const arr = elem.files[0].name.split('.');

      arr[0].length > 6 ? dots = "..." : dots = '.';

      const name = arr[0].substring(0, 6) + dots + arr[1];
      elem.querySelector('div').textContent = name;
      //
    });
  });
};

export default dragDrop;