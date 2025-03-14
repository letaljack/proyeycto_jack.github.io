// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    observer.observe(element);
});

// Smooth scroll para navegación interna
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Galería Lightbox
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            cursor: pointer;
        `;
        lightbox.innerHTML = `<img src="${imgSrc}" style="max-width: 90%; max-height: 90%; border-radius: 10px;">`;
        lightbox.addEventListener('click', () => lightbox.remove());
        document.body.appendChild(lightbox);
    });
});

// Comprobación de scroll para animaciones
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll, .card-body img");

    function checkScroll() {
        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
// Función para actualizar la opacidad y posición de cada tarjeta según el scroll
function updateCards() {
    const cards = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      // Calcula el centro de la tarjeta y del viewport
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      let distance = Math.abs(cardCenter - viewportCenter);
      // Normaliza la distancia para obtener un valor de progreso entre 0 y 1
      let progress = 1 - (distance / (windowHeight / 2));
      progress = Math.max(0, Math.min(1, progress));
      // Se actualiza la opacidad y se ajusta el desplazamiento vertical
      card.style.opacity = progress;
      card.style.transform = `translateY(${(1 - progress) * 40}px)`;
    });
  }
  
  // Actualiza la animación en cada scroll y resize
  window.addEventListener('scroll', () => requestAnimationFrame(updateCards));
  window.addEventListener('resize', updateCards);
  document.addEventListener('DOMContentLoaded', updateCards);
  