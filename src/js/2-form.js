const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
formData.email = savedData.email || '';
formData.message = savedData.message || '';

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener('input', event => {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  console.log(formData);
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const message = event.target.elements.message.value.trim();

  if (!email || !message) {
    alert('Please fill in all fields!');
    return;
  }

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
