const showSizesPics = (picSize) => {
  const pictureSize = document.querySelectorAll(picSize);//sizes block


  const showImg = block => {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';

    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none';
    });
  };


  const hideImg = block => {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';

    block.querySelectorAll('p').forEach(p => {
      p.style.display = '';
    });
  };


  pictureSize.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  });
  
  // pictureSize.forEach((item, i) => {
  //   const itemSelector = item.querySelector('img'),//image which we need
  //         itemParagraph = itemSelector.parentNode.querySelectorAll('p');//paragraphs inside the sizes block


  //   item.addEventListener('mouseenter', () => {
  //     //Watch the index and change src of the img
  //     itemSelector.setAttribute('src', `assets/img/sizes-${i + 1}-1.png`);
  //     itemSelector.classList.add('animated', 'fadeIn');//animation

  //     //Hides paragraphs
  //     itemParagraph.forEach(p => {
  //       if (!p.classList.contains('sizes-hit')){//:not .sizes-hit
  //         p.style.display = 'none';
  //       }
  //     });
  //   });


  //   item.addEventListener('mouseleave', () => {
  //     itemSelector.setAttribute('src', `assets/img/sizes-${i + 1}.png`);
  //     itemSelector.classList.remove('animated', 'fadeIn');

  //     itemParagraph.forEach(p => {
  //       p.style.display = '';
  //     });
  //   });
  // });
};

export default showSizesPics;