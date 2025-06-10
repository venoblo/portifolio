
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});

function revealOnScroll() {
  const sections = document.querySelectorAll('section');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
}

const btnTop = document.createElement('button');
btnTop.textContent = '↑ Início';
btnTop.id = 'btnTop';
btnTop.style.position = 'fixed';
btnTop.style.bottom = '30px';
btnTop.style.right = '30px';
btnTop.style.padding = '10px 15px';
btnTop.style.fontSize = '16px';
btnTop.style.backgroundColor = '#00f7ff';
btnTop.style.color = '#0d0d0d';
btnTop.style.border = 'none';
btnTop.style.borderRadius = '5px';
btnTop.style.cursor = 'pointer';
btnTop.style.display = 'none'; 
btnTop.style.zIndex = '1000';
document.body.appendChild(btnTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }

  revealOnScroll();
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('load', revealOnScroll);
