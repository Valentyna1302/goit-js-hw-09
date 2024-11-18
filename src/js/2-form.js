const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', event => {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  console.log(formData);
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

const isLocalStorage = JSON.parse(localStorage.getItem(localStorageKey)) || {};

form.addEventListener('submit', event => {
  event.preventDefault();
  if (condition) {
  }
});
