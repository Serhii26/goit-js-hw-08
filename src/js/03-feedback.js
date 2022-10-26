import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('textarea');
const inputEl = document.querySelector('input[name="email"]');
// console.log(inputEl);

const STORAGE_KEY = 'feedback-form-state';
const textForm = {};

form.addEventListener('submit', onForm);
form.addEventListener('input', throttle(onTextarea, 500));
//  inputEl.addEventListener('input', throttle(onTextarea, 500));

textareaSave();

function onTextarea(event) {
  textForm[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(textForm));
}

function textareaSave() {
  let messageSave = localStorage.getItem(STORAGE_KEY);

  if (messageSave) {
    let parsedText = JSON.parse(messageSave);
    inputEl.value = parsedText.email;
    textareaEl.textContent = parsedText.message;
  }
}

function onForm(event) {
  event.preventDefault();
  const forms = {
    email: event.target.email.value,
    message: event.target.message.value,
  };
  console.log(forms);
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}
