const URL_PARAMS = new URLSearchParams(window.location.search);
const TOKEN = URL_PARAMS.get('token');

// Show an element
const show = (selector) => {
  document.querySelector(selector).style.display = 'block';
};

// Hide an element
const hide = (selector) => {
  document.querySelector(selector).style.display = 'none';
};

const continueButton = document.querySelector('.continue-button');

if (TOKEN) {
  // If the token is present, show the authorized content and the continue button
  hide('.content.unauthorized');
  show('.content.authorized');
  show('.continue-button');
  continueButton.addEventListener('click', () => {
    window.location.replace('https://lesson05-javier-espinoza.onrender.com/api-docs');
  });
} else {
  // If the token is not present, show the unauthorized content
  hide('.content.authorized');
  hide('.continue-button');
  show('.content.unauthorized');
}
