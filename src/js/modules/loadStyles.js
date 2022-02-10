const loadStyles = (trigger, style) => {
  const styles = document.querySelectorAll(style),
        btn = document.querySelector(trigger);

  styles.forEach(st => {
    st.classList.add('animated', 'fadeInDown');
  });

  btn.addEventListener('click', () => {
    styles.forEach(st => {
      st.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      st.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    });

    // btn.style.display = 'none';
    btn.remove();
  });
};

export default loadStyles;