// Inicializar AOS (Animaciones de Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 120
});

// Deshabilitar clic derecho
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Implementar scroll suave para enlaces de navegación
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
