// Inicializar AOS para animaciones
AOS.init({
  duration: 1000,
  once: true,
  offset: 120
});

// Preloader: Ocultar una vez cargado el contenido
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('fade-out');
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 600);
});

// Toggle de vistas: Cambia entre Empresa y Empleador
function toggleView() {
  const empresaContent = document.getElementById('empresa-content');
  const empleadorContent = document.getElementById('empleador-content');
  const currentView = document.getElementById('current-view');
  const toggleText = document.getElementById('toggle-text');

  if (empresaContent.classList.contains('d-none')) {
    // Cambiar a vista Empresa
    empresaContent.classList.remove('d-none');
    empleadorContent.classList.add('d-none');
    currentView.textContent = 'Empresa';
    toggleText.textContent = 'Ver Empleador';
    // Mostrar enlaces correspondientes
    document.querySelectorAll('.empresa-link').forEach(link => link.classList.remove('d-none'));
    document.querySelectorAll('.empleador-link').forEach(link => link.classList.add('d-none'));
    // Cambiar tagline en navbar
    document.getElementById('navbar-tagline').textContent = 'Contratista Minero';
  } else {
    // Cambiar a vista Empleador
    empresaContent.classList.add('d-none');
    empleadorContent.classList.remove('d-none');
    currentView.textContent = 'Empleador';
    toggleText.textContent = 'Ver Empresa';
    // Mostrar enlaces correspondientes
    document.querySelectorAll('.empresa-link').forEach(link => link.classList.add('d-none'));
    document.querySelectorAll('.empleador-link').forEach(link => link.classList.remove('d-none'));
    // Cambiar tagline en navbar
    document.getElementById('navbar-tagline').textContent = 'Oportunidades Laborales';
  }
}

// Smooth scrolling para enlaces internos
document.querySelectorAll('a.nav-link, a.footer-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
