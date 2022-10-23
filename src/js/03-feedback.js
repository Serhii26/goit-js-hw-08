import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('textarea');
const inputEl = document.querySelector('input');
console.log(inputEl);

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onForm);
textareaEl.addEventListener('input', throttle(onTextarea, 500));
inputEl.addEventListener('input', throttle(onTextarea, 500));

function onForm(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextarea(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
  console.log(message);
}

function textareaSave() {
  const messageSave = localStorage.getItem(STORAGE_KEY);

  if (messageSave) {
    textareaEl.value = messageSave;
  }
}

textareaSave();
