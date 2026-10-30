// Theme switch: remember the choice (works on top of the CSS-only switch)
const theme = document.getElementById('theme');
const menu = document.getElementById('menu-toggle');

try {
  const saved = localStorage.getItem('theme');
  if (saved) theme.checked = saved === 'dark';
} catch (e) { /* storage may be blocked */ }

theme.addEventListener('change', () => {
  try { localStorage.setItem('theme', theme.checked ? 'dark' : 'light'); } catch (e) {}
});

// Burger menu: close it after a link is clicked
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => { menu.checked = false; });
});

// Booking form: friendly confirmation instead of page reload
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const note = form.querySelector('.small');
  note.textContent = 'Thank you! Your request was received. The team will contact you.';
  form.reset();
});
