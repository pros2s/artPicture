import {postData} from "../services/requests";

const forms = () => {
  const form = document.querySelectorAll('form'),
        upload = document.querySelectorAll('[name="upload"]'),
        textarea = document.querySelectorAll('textarea'),
        inputs = document.querySelectorAll('input');


  const message = {
    loading: 'loading....',
    succes: 'Succes!',
    failure: 'Error',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };


  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  };


  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    textarea.forEach(item => {
      item.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
  };


  //Normal name for upload message
  upload.forEach(item => {
    item.addEventListener('input', () => {
      let dots;
      const arr = item.files[0].name.split('.');//split string in two
      arr[0].length > 6 ? dots = '...' : dots = '.';//if name of file too long than three dots after six first symbols

      const name = arr[0].substring(0, 6) + dots + arr[1];//saving this name
      item.previousElementSibling.textContent = name;//show this name
    });
  });


  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();

      //block of create visual message of submit process
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);

      //Hide form
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);

      //Spinner for loading message
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);

      //Text for loading message
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      //class FormData to create template of data
      const formData = new FormData(item);

      //Write right path to api if .popup-design exist at any parents of not
      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
      console.log(api);


      postData(api, formData)
      .then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.succes;
      })
      //failure if something is wrong
      .catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      })
      //always clearing inputs and deliting messages(after 5sec)
      .finally(() => {
        clearInputs();

        setTimeout(() => {
          statusMessage.remove();

          //Show back modals with animations
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};

export default forms;