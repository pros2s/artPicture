const accordion = (accordionSelector) => {
  const questionsBlock = document.querySelector(accordionSelector),
        accordSpans = questionsBlock.querySelectorAll('#accordion p span'),
        accordClues = questionsBlock.querySelectorAll('#accordion div');


  const clearSpansColor = () => {
    accordSpans.forEach(span => {
      span.style.color = '';
      span.style.borderBottom = '2px dotted #333';
    });
  };

  //hide clues of accordion
  const allCluesClose = () => {
    accordClues.forEach(item => {
      item.style.display = 'none';
    });
  };
  allCluesClose();


  const showClues = (dataSelector, currentSpan) => {
    accordClues.forEach(item => {
      //if data-clue of 'p' === data-clue of 'div'
      if (item.dataset.clue === dataSelector) {
        //if this 'div' is closed
        if (item.style.display !== 'block') {
          allCluesClose();
          clearSpansColor();

          item.classList.add('animated', 'fadeIn');
          item.style.display = 'block';

          currentSpan.style.color = '#BF1DBA';//active color for span
          currentSpan.style.borderBottom = 'none';
        }
        else {
          //closes this 'div'
          item.classList.remove('animated', 'fadeIn');
          item.style.display = 'none';

          currentSpan.style.color = '';//removes active color for span
          currentSpan.style.borderBottom = '2px dotted #333';//sets default border
        }
      }
    });
  };


  questionsBlock.addEventListener('click', e => {
    const target = e.target;

    switch (target.parentNode.dataset.clue) {
      case 'time': showClues('time', target); break;
      case 'watch': showClues('watch', target); break;
      case 'format': showClues('format', target); break;
      case 'specials': showClues('specials', target); break;
    }
  });
};

export default accordion;