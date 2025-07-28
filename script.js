// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById('dark-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// ✨ About Section Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


// Contact form submission
const form = document.getElementById('contactForm');
const statusText = document.getElementById('formStatus');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    statusText.textContent = `Thank you, ${name}! Your message has been sent (dummy for now).`;
    form.reset();
  } else {
    statusText.textContent = "Please fill in all fields.";
  }
});
