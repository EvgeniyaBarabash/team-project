const backdrop = document.querySelector('.js-backdrop-form');
const buyBtn = document.querySelector('.button-arrow--white');
const closeBtn = document.querySelector('.form-modal__btn');
const formTablet= document.querySelector('.btn-header__container--display');
const form = document.querySelector('.form-buy');
const inputName = document.querySelector('#user-name');
const telInput = document.querySelector('#user-phone');
const mailInput = document.querySelector('#user-email');
const iceCreamInput = document.querySelector('#goods');
const day = document.querySelector('#user-time');
const hour = document.querySelector('#user-time-hour');
const textarea = document.querySelector('#coments');
const submit = document.querySelector('.form-btn-submit');

form.addEventListener('input', onInputForm);
formTablet.addEventListener('click', openModal);
buyBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', onCloseBackdropClickImage);
submit.addEventListener('click', onSubmit);

function openModal() {
  backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onCloseClickEsc);
    document.body.classList.add('no-scroll');
  }
    function onCloseClickEsc(event){
      if(event.code==='Escape'){
        closeModal()
      }
  };
  function closeModal(){
    backdrop.classList.add('is-hidden');
      window.removeEventListener('keydown', onCloseClickEsc);
        document.body.classList.remove('no-scroll');
  };

  function onCloseBackdropClickImage(event){
  if(event.target===event.currentTarget){
    closeModal()
  }
  };

  const formData={};
  function onInputForm(e){
    console.log(e.target.name);
    console.log(e.target.value);
   
   formData[e.target.name]=e.target.value;
   localStorage.setItem('data', JSON.stringify(formData));
  }
   function getDataFromInput(){
    const saveData =  localStorage.getItem('data');
    const parseData = JSON.parse(saveData);
    if(parseData){
      inputName.value=parseData.name;
      telInput.value=parseData.telephone;
      mailInput.value=parseData.email;
      iceCreamInput.value=parseData.ice;
      day.value=parseData.day;
      hour.value=parseData.hours;
      textarea.value=parseData.message;
      
    }
   }
   getDataFromInput()
   function onSubmit(evt){
    evt.preventDefault();
    console.log(evt.currentTarget);
    form.reset();
localStorage.removeItem('data')
   }
