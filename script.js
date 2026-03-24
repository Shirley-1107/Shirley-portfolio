// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('formStatus');
  status.textContent = 'Sending...';
  status.style.color = '#ffaa00';

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === 'success') {
      status.textContent = 'Thank you! Message sent successfully.';
      status.style.color = '#00ff88';
      form.reset();
    } else {
      status.textContent = 'Error: ' + (data.error || 'Please try again.');
      status.style.color = '#ff5555';
    }
  })
  .catch(() => {
    status.textContent = 'Network error. Check your connection.';
    status.style.color = '#ff5555';
  });
});

// Dark/Light mode toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved preference or system preference
if (localStorage.getItem('theme') === 'light' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: light)').matches)) {
  body.classList.add('light-mode');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  toggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
