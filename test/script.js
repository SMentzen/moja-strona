// script.js
const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUpBtn-link');
const signInLink = document.querySelector('.signInBtn-link');

signUpLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

signInLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});
