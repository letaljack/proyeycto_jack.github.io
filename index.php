<?php include 'inc/header.php'; ?>

<!-- Sección Hero -->
<!-- index.html -->
<section id="inicio" class="hero-section">
    <!-- Contenedor para la imagen de fondo animada -->
    <div class="hero-image"></div>
    <div class="container text-center animate-on-scroll">
        <!-- Texto con sombra para mayor legibilidad -->
        <h1 class="display-4 mb-4">
            <span class="hero-text">TU SOCIO ESTRATÉGICO EN DESTACAMENTO DE PERSONAL</span>
        </h1>
        <a href="#contacto" class="btn btn-lg mi-boton">CONTACTAR AHORA</a>
    </div>
</section>

<!-- Script para cambiar la imagen de fondo cada 5 segundos con efecto Slide Fade combinado -->
<script>
    // Array con las rutas de las imágenes que se usarán en el hero
    const heroImages = [
        "img/imagen_1.jpeg",
        "img/imagen_2.jpeg"
        // Puedes agregar o quitar imágenes según necesites
    ];
    let currentImage = 0; // Índice de la imagen actual
    const heroImageDiv = document.querySelector(".hero-image");
    
    // Asigna la imagen inicial para evitar fondo en blanco
    heroImageDiv.style.backgroundImage = `url('${heroImages[0]}')`;
    
    function changeHeroImage() {
        // Efecto combinado: la imagen actual se desliza a la izquierda y se desvanece
        heroImageDiv.style.transition = "transform 1s ease, opacity 1s ease";
        heroImageDiv.style.transform = "translateX(-50px)";
        heroImageDiv.style.opacity = "0";
        
        // Después de 1 segundo (duración del fade/slide out), se actualiza la imagen
        setTimeout(() => {
            // Calcula el siguiente índice en bucle
            currentImage = (currentImage + 1) % heroImages.length;
            // Actualiza la imagen de fondo
            heroImageDiv.style.backgroundImage = `url('${heroImages[currentImage]}')`;
            
            // Prepara la nueva imagen desde el lado derecho y oculta (fade in)
            heroImageDiv.style.transition = "none";
            heroImageDiv.style.transform = "translateX(50px)";
            heroImageDiv.style.opacity = "0";
            
            // Forzar reflujo para aplicar la transición
            void heroImageDiv.offsetWidth;
            
            // Anima la nueva imagen para que se deslice a su posición original y aparezca
            heroImageDiv.style.transition = "transform 1s ease, opacity 1s ease";
            heroImageDiv.style.transform = "translateX(0)";
            heroImageDiv.style.opacity = "1";
        }, 700);
    }
    
    // Cambia la imagen cada 5000 ms (5 segundos)
    setInterval(changeHeroImage, 8000);
</script>




<!-- Sección Nuestra Historia -->
<section id="nosotros" class="section-bg" style="background-image: url('img/imagen_3.jpeg')">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-6 animate-on-scroll">
                <!-- Overlay para mejorar legibilidad -->
                <div class="story-overlay">
                    <h3 class="mb-4">NUESTRA HISTORIA</h3>
                    <p>Somos una empresa Intermediadora, de orígenes locales con un serio compromiso por el cuidado del medio ambiente. Creemos en el desarrollo conjunto de la empresa privada y el poblador local. Por ello capacitamos constantemente a nuestro personal y contamos un stock de profesionales para las distintas plazas de trabajo que nuestros clientes requieran.</p>
                </div>
            </div>
            <div class="col-lg-6 animate-on-scroll delay-1">
                <div class="story-overlay">
                    <h3>MISIÓN</h3>
                    <p>Brindar servicios de intermediación laboral a organizaciones públicas y privadas. Satisfaciendo a nuestros clientes respetando los estándares de seguridad, cuidado del medio ambiente, respecto a las comunidades y manteniendo la calidad en sus estándares.</p>
                    <h3 class="mt-4">VISIÓN</h3>
                    <p>Ser una empresa de intermediación laboral líder en el mercado local en los próximos 05 años.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Sección Nuestros Valores -->
<section id="valores" class="py-5">
    <div class="container">
        <h2 class="text-center mb-5 animate-on-scroll">NUESTOS VALORES</h2>
        <div class="row g-4">
            <div class="col-md-4 animate-on-scroll">
                <div class="card card-animate h-100">
                    <div class="card-body">
                        <h4 class="card-title"><i class="bi bi-person-circle"></i> Integridad</h4>
                        <p class="card-text">Mantenemos transparencia y honestidad en todas nuestras acciones.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 animate-on-scroll">
                <div class="card card-animate h-100">
                    <div class="card-body">
                        <h4 class="card-title"><i class="bi bi-person-fill-check"></i> Respeto</h4>
                        <p class="card-text">Fomentamos la empatía y equidad en nuestro trato con todos.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 animate-on-scroll">
                <div class="card card-animate h-100">
                    <div class="card-body">
                        <h4 class="card-title"><i class="bi bi-person-check-fill"></i> Liderazgo</h4>
                        <p class="card-text">Innovamos y guiamos con visión hacia el futuro.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 animate-on-scroll">
                <div class="card card-animate h-100">
                    <div class="card-body">
                        <h4 class="card-title"><i class="bi bi-people-fill"></i> Organización</h4>
                        <p class="card-text">Aseguramos eficiencia y planificación en nuestras operaciones.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 animate-on-scroll">
                <div class="card card-animate h-100">
                    <div class="card-body">
                        <h4 class="card-title"><i class="bi bi-person-lines-fill"></i> Responsabilidad social</h4>
                        <p class="card-text">Comprometidos con el desarrollo de nuestra comunidad.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 animate-on-scroll">
                <div class="card card-animate h-100">
                    <div class="card-body">
                        <h4 class="card-title"><i class="bi bi-shield-check"></i> Cuidado del ambiente</h4>
                        <p class="card-text">Promovemos la sostenibilidad y conservación del entorno.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Sección Trabajos Realizados -->
<section id="trabajos" class="section">
    <h2>SERVICIOS EJECUTADOS</h2>
    <div class="cards-container">
      <div class="card">
        <h3>Vigilancia No Armada</h3>
        <p>Servicio de vigilancia no armada en la unidad Minera Huanzala.</p>
      </div>
      <div class="card">
        <h3>Conducción Administrativa</h3>
        <p>Destacamento de conductores en el área de administración.</p>
      </div>
      <div class="card">
        <h3>Asuntos Ambientales</h3>
        <p>Destacamento de personal en el área de asuntos ambientales.</p>
      </div>
      <div class="card">
        <h3>Desinfección y Limpieza</h3>
        <p>Destacamento de personal de desinfección, limpieza y cuartelaría.</p>
      </div>
      <div class="card">
        <h3>Área de Lavandería</h3>
        <p>Personal en el área de lavandería.</p>
      </div>
      <div class="card">
        <h3>Personal Vacacionista</h3>
        <p>Destacamento temporal de personal vacacionista en mina.</p>
      </div>
    </div>
  </section>

<?php include 'inc/footer.php'; ?>