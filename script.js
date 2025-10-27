// Preloader
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  setTimeout(function() {
    preloader.style.opacity = '0';
    setTimeout(function() {
      preloader.style.display = 'none';
    }, 500);
  }, 1000);
});

// Inicializar AOS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
});

// Cambio de vista entre Empresa y Empleador
function toggleView() {
  const empresaContent = document.getElementById('empresa-content');
  const empleadorContent = document.getElementById('empleador-content');
  const empresaLinks = document.querySelectorAll('.empresa-link');
  const empleadorLinks = document.querySelectorAll('.empleador-link');
  const toggleText = document.getElementById('toggle-text');
  const currentView = document.getElementById('current-view');
  const navbarTagline = document.getElementById('navbar-tagline');
  
  if (empresaContent.classList.contains('d-none')) {
    // Cambiar a vista Empresa
    empresaContent.classList.remove('d-none');
    empleadorContent.classList.add('d-none');
    
    empresaLinks.forEach(link => link.classList.remove('d-none'));
    empleadorLinks.forEach(link => link.classList.add('d-none'));
    
    toggleText.textContent = 'Ver Empleador';
    currentView.textContent = 'Empresa';
    navbarTagline.textContent = 'Contratista Minero';
    
    // Actualizar URL
    history.pushState(null, null, '#inicio');
  } else {
    // Cambiar a vista Empleador
    empresaContent.classList.add('d-none');
    empleadorContent.classList.remove('d-none');
    
    empresaLinks.forEach(link => link.classList.add('d-none'));
    empleadorLinks.forEach(link => link.classList.remove('d-none'));
    
    toggleText.textContent = 'Ver Empresa';
    currentView.textContent = 'Empleador';
    navbarTagline.textContent = 'Oportunidades Laborales';
    
    // Actualizar URL
    history.pushState(null, null, '#inicioEmpleador');
  }
  
  // Cerrar menú móvil si está abierto
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse.classList.contains('show')) {
    new bootstrap.Collapse(navbarCollapse).hide();
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('main-navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = document.getElementById('main-navbar').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Cerrar menú móvil si está abierto
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    }
  });
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simular envío del formulario
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      submitBtn.disabled = true;
      
      setTimeout(function() {
        alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }
  
  const jobApplicationForm = document.getElementById('job-application-form');
  if (jobApplicationForm) {
    jobApplicationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simular envío del formulario
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      submitBtn.disabled = true;
      
      setTimeout(function() {
        alert('¡Solicitud enviada con éxito! Revisaremos tu CV y nos pondremos en contacto contigo si tu perfil coincide con nuestras necesidades.');
        jobApplicationForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }
  
  const rrhhContactForm = document.getElementById('rrhh-contact-form');
  if (rrhhContactForm) {
    rrhhContactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simular envío del formulario
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      submitBtn.disabled = true;
      
      setTimeout(function() {
        alert('¡Mensaje enviado con éxito! El equipo de RRHH se pondrá en contacto contigo pronto.');
        rrhhContactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }
});

// Manejo de la carga de imágenes placeholder
document.addEventListener('DOMContentLoaded', function() {
  const carouselItems = document.querySelectorAll('.carousel-item img');
  
  carouselItems.forEach(img => {
    if (img.src.includes('placeholder')) {
      // Asignar colores de fondo para los placeholders
      const colors = ['#1a3d5d', '#d4af37', '#8b4513'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      img.style.backgroundColor = randomColor;
      img.style.display = 'flex';
      img.style.alignItems = 'center';
      img.style.justifyContent = 'center';
      img.style.color = 'white';
      img.style.fontWeight = 'bold';
      img.style.fontSize = '20px';
      
      // Texto alternativo para el placeholder
      const altText = img.alt || 'Imagen de muestra';
      img.innerHTML = `<div>${altText}</div>`;
    }
  });
  
  // También para las imágenes de proyectos
  const projectImages = document.querySelectorAll('.project-card img');
  
  projectImages.forEach(img => {
    if (img.src.includes('empresa-proyecto')) {
      const colors = ['#1a3d5d', '#2c3e50', '#34495e'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      img.style.backgroundColor = randomColor;
      img.style.display = 'flex';
      img.style.alignItems = 'center';
      img.style.justifyContent = 'center';
      img.style.color = 'white';
      img.style.fontWeight = 'bold';
      img.style.minHeight = '200px';
      
      const altText = img.alt || 'Proyecto';
      img.innerHTML = `<div>${altText}</div>`;
    }
  });
});

// Inicializar los carruseles manualmente para asegurar su funcionamiento
document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach(carousel => {
    // Inicializar cada carrusel con Bootstrap
    new bootstrap.Carousel(carousel, {
      interval: 5000, // Cambiar cada 5 segundos
      wrap: true // Volver al inicio después del último slide
    });
  });
});

// Small enhancement: ensure AOS refreshes after dynamic changes
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
});