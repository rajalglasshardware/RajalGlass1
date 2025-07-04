window.onload = () => {
  document.body.classList.add('loaded');
};

window.onscroll = () => {
  document.getElementById('topBtn').style.display = 
    window.scrollY > 200 ? 'block' : 'none';
};

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Fade up on scroll
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => observer.observe(card));
});
