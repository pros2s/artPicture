const filter = (trigger, product) => {
  const picGroup = document.querySelector(trigger),
        picOne = document.querySelectorAll(`${trigger} li`),
        picture = document.querySelectorAll(product);


  picGroup.addEventListener('click', e => {
    picOne.forEach(item => {
      item.classList.remove('active');
    });

    picture.forEach(item => {
      item.style.display = 'none';
    });

    const showPicture = name => {
      picture.forEach(item => {
        if (item.classList.contains(name)) {
          item.style.display = 'block';
        }
      });
    };

    let portfolioNo = document.querySelector('.portfolio-no');
    portfolioNo.style.display = 'none';

    switch (e.target.className) {
      case 'all':
        showPicture('all');
        break;

      case 'lovers':
        showPicture('lovers');
        break;

      case 'chef':
        showPicture('chef');
        break;

      case 'girl':
        showPicture('girl');
        break;

      case 'guy':
        showPicture('guy');
        break;

      case 'grandmother':
        portfolioNo.style.display = 'block';
        break;

      case 'granddad':
        portfolioNo.style.display = 'block';
        break;
    }

    e.target.classList.add('active');
  });
};

export default filter;