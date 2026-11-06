// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Contact form: validate, then open the visitor's email app
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const MY_EMAIL = 'your.email@example.com'; // TODO: replace with your real email
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { name, email, message } = form.elements;
  if (!name.value.trim() || !email.validity.valid || !message.value.trim()) {
    status.textContent = 'Enter your name, a valid email, and a message.';
    status.className = 'form-status error';
    return;
  }
  const subject = encodeURIComponent('Portfolio message from ' + name.value.trim());
  const body = encodeURIComponent(message.value.trim() + '\n\nReply to: ' + email.value.trim());
  window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
  status.textContent = 'Opening your email app to send the message.';
  status.className = 'form-status';
});