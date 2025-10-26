<template>
  <div>
    <!-- Navbar -->
    <header class="navbar">
      <nav class="container">
        <!-- Logo a la izquierda -->
        <a href="#hero" class="navbar-logo">
          <img src="/favicon.ico" alt="Quopa logo" />
        </a>

        <!-- Links de navegación -->
        <div class="navbar-links">
          <a href="#hero">Inicio</a>
          <a href="#about">Sobre Quopa</a>
          <a href="#features">Funcionalidades</a>
          <a href="#benefits">Beneficios</a>
          <a href="#team">Equipo</a>
          <a href="#faq">Preguntas Frecuentes</a>
        </div>
      </nav>
    </header>



    <!-- Hero -->
    <section id="hero" class="hero">
      <div class="container hero-grid">
        <div class="hero-text">
          <h1 class="hero-title">Quopa</h1>
          <p class="hero-subtitle">
            Reserva tu cancha al instante y conecta con personas que comparten tu pasión por el deporte: juega, haz amigos y vive la experiencia en comunidad.
          </p>
        </div>
        <div class="hero-image">
          <img :src="futbol1" alt="Pelota Futbol" class="app-logo" />
        </div>
      </div>
    </section>

    <!-- Sobre la aplicación con carrusel integrado -->
    <section id="about" class="section alt">
      <div class="container">
        <h2 class="section-title">Sobre Quopa</h2>
        <p>
          <strong>Quopa es una plataforma SaaS que simplifica la reserva de canchas deportivas.</strong>
          Con una interfaz moderna y accesible, conecta a jugadores con espacios para practicar
          <strong>fútbol, pádel, básquet, vóley, tenis</strong> y muchos otros deportes.
          Nuestro objetivo es ofrecer una experiencia fluida tanto para usuarios como para administradores,
          optimizando la gestión de horarios, pagos y disponibilidad en un solo lugar.
        </p>

        <!-- Carrusel de deportes -->
        <Carousel
            :value="images"
            :numVisible="1"
            :numScroll="1"
            circular
            :autoplayInterval="4000"
            class="custom-carousel"
        >
          <template #item="slotProps">
            <div class="carousel-item">
              <img :src="slotProps.data" alt="deporte" />
            </div>
          </template>
        </Carousel>
      </div>
    </section>


    <!-- Cómo funciona -->
    <section id="features" class="section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Funcionalidades</h2>
        <div class="steps-grid">
          <div class="step-card" data-aos="fade-right">
            <h3>1. Busca y elige</h3>
            <p>Encuentra canchas disponibles en tu zona con horarios en tiempo real.</p>
          </div>
          <div class="step-card" data-aos="fade-left" data-aos-delay="100">
            <h3>2. Reserva al instante</h3>
            <p>Selecciona la cancha, confirma y paga de forma segura desde la app.</p>
          </div>
          <div class="step-card" data-aos="fade-right" data-aos-delay="200">
            <h3>3. Juega sin complicaciones</h3>
            <p>Llega al lugar con tu reserva confirmada y disfruta del partido.</p>
          </div>
          <div class="step-card" data-aos="fade-left" data-aos-delay="300">
            <h3>4. Completa tu equipo</h3>
            <p>¿Falta un jugador? Publica tu partido y conecta con personas que quieran unirse.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Beneficios -->
    <section id="benefits" class="section alt">
      <div class="container">
        <h2 class="section-title">Beneficios</h2>

        <div class="benefit-row" data-aos="fade-right">
          <div class="benefit-icon">
            <i class="pi pi-clock"></i>
          </div>
          <div class="benefit-text">
            <h3>Reserva en segundos</h3>
            <p>Disponibilidad en tiempo real para que nunca pierdas tu partido.</p>
          </div>
        </div>

        <div class="benefit-row" data-aos="fade-right">
          <div class="benefit-icon">
            <i class="pi pi-credit-card"></i>
          </div>
          <div class="benefit-text">
            <h3>Pagos seguros</h3>
            <p>Tus reservas siempre protegidas con pagos digitales seguros y verificados..</p>
          </div>
        </div>

        <div class="benefit-row" data-aos="fade-right">
          <div class="benefit-icon">
            <i class="pi pi-users"></i>
          </div>
          <div class="benefit-text">
            <h3>Conecta con jugadores</h3>
            <p>Encuentra compañeros y completa tu equipo fácilmente.</p>
          </div>
        </div>

        <div class="benefit-row" data-aos="fade-right">
          <div class="benefit-icon">
            <i class="pi pi-bell"></i>
          </div>
          <div class="benefit-text">
            <h3>Recordatorios automáticos</h3>
            <p>Recibe notificaciones antes de tu partido para que nunca olvides tu reserva.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipo -->
    <section id="team" class="section alt">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Equipo</h2>
        <p class="team-intro" data-aos="fade-up" data-aos-delay="100">
          Detrás de Quopa hay un equipo apasionado por el deporte, la tecnología y la experiencia del usuario.
        </p>

        <div class="team-grid">
          <div class="team-card" data-aos="fade-up" data-aos-delay="200">
            <h3 class="team-name">Tomás Ortiz Fajardo</h3>
          </div>
          <div class="team-card" data-aos="fade-up" data-aos-delay="300">
            <h3 class="team-name">Joaquin Ugarte Heredia</h3>
          </div>
          <div class="team-card" data-aos="fade-up" data-aos-delay="400">
            <h3 class="team-name">Jose Lopez Flores</h3>
          </div>
        </div>
      </div>
    </section>


    <!-- Preguntas frecuentes -->
    <section id="faq" class="section alt">
      <div class="container">
        <h2 class="section-title">Preguntas frecuentes</h2>

        <Accordion multiple :value="['0']" class="faq-accordion">
          <AccordionPanel value="0">
            <AccordionHeader>¿Qué es Quopa?</AccordionHeader>
            <AccordionContent>
              Quopa es una aplicación móvil que simplifica la reserva de canchas deportivas,
              conectando a jugadores y administradores en un solo lugar.
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="1">
            <AccordionHeader>¿Qué deportes puedo reservar?</AccordionHeader>
            <AccordionContent>
              Actualmente abarca canchas de fútbol, pádel, básquet, vóley, tenis y otros deportes populares.
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="2">
            <AccordionHeader>¿En qué dispositivos está disponible?</AccordionHeader>
            <AccordionContent>
              Quopa es una aplicación móvil, diseñada para usarse de forma sencilla en smartphones,
              tanto Android como iOS.
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="3">
            <AccordionHeader>¿Cómo se realizan los pagos?</AccordionHeader>
            <AccordionContent>
              Los pagos se hacen de forma digital y segura a través de métodos integrados en la app.
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="4">
            <AccordionHeader>¿Puedo invitar o encontrar jugadores para completar mi equipo?</AccordionHeader>
            <AccordionContent>
              Sí, si te falta gente puedes publicar tu partido y permitir que otros usuarios se unan.
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="5">
            <AccordionHeader>¿Qué beneficios ofrece a los administradores de canchas?</AccordionHeader>
            <AccordionContent>
              Les permite gestionar horarios, pagos y disponibilidad en tiempo real,
              reduciendo tareas manuales y aumentando la visibilidad de sus instalaciones.
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="6">
            <AccordionHeader>¿Cuál es la visión de Quopa a futuro?</AccordionHeader>
            <AccordionContent>
              Convertirse en la plataforma líder en reservas deportivas en Latinoamérica,
              integrando más deportes, alianzas estratégicas y funcionalidades que fortalezcan la comunidad deportiva.
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </section>


    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>© 2025 Quopa. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">

/* Imagen del Hero */
import futbol1 from './assets/futbol_pelota.jpg'

/* Importamos las imágenes del carrusel */
import tenis from './assets/tenis.jpg'
import padel from './assets/padel.jpg'
import voley from './assets/voley.jpg'
import futbol2 from './assets/futbol2.jpg'
import basket from './assets/basket.jpg'

/* Array de imágenes para el carrusel */
const images = [tenis, padel, voley, futbol2, basket]
</script>

<style scoped>

.team-name {
  font-size: 2.5rem;           /* más grande */
  font-weight: 700;          /* negrita */
  text-align: center;
  margin: 1rem 0;
  font-family: 'Poppins', sans-serif; /* consistente con títulos */
  color: #000;
}

.team-card {
  background: transparent;   /* sin fondo extra */
  box-shadow: none;          /* sin sombra */
}

/* Carrusel */
.custom-carousel {
  max-width: 1000px;
  margin: 2rem auto;
}
.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-item img {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* FAQ más ancho */
.faq-accordion {
  width: 100%;              /* ocupa todo el ancho disponible */
  max-width: 1200px;        /* igual que tu .container */
  margin: 2rem auto;
  font-family: 'Poppins', sans-serif; /* aplica la fuente de texto */
}

/* Encabezados de las preguntas */
.faq-accordion .p-accordionheader {
  background: #f8f7f3; /* fondo crema */
  color: #000;
  font-weight: 600;
  font-family: 'Poppins', sans-serif; /* misma fuente que títulos */
  font-size: 1.2rem;
  border-bottom: 1px solid #ddd;
}

/* Hover en encabezado */
.faq-accordion .p-accordionheader:hover {
  background: #f0eee9;
}

/* Contenido de cada respuesta */
.faq-accordion .p-accordioncontent {
  background: #f8f7f3;
  color: #000;
  font-size: 1rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif; /* misma fuente que párrafos */
  border: none;
}
/* Forzar que el header ocupe todo el ancho */
.faq-accordion .p-accordionheader {
  display: flex;
  justify-content: space-between; /* texto a la izquierda, ícono a la derecha */
  align-items: center;
  width: 100%;                    /* ocupa todo el ancho */
  box-sizing: border-box;
  padding: 1rem 1.5rem;            /* más aire para que se vea uniforme */
}

/* Asegurar que el ícono de expandir quede alineado a la derecha */
.faq-accordion .p-accordionheader .p-accordion-toggle-icon {
  margin-left: auto;
}


.benefit-row {
  display: flex;
  align-items: center;   /* Alinea verticalmente ícono y texto */
  gap: 1rem;             /* Reduce el espacio entre ícono y texto */
  margin-bottom: 2rem;
}

.benefit-icon {
  flex: 0 0 70px;        /* Tamaño fijo del contenedor del ícono */
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eaf7ee;
  border-radius: 50%;
}

.benefit-icon i {
  font-size: 2.2rem;     /* Ícono más grande */
  color: #28a745;
}

.benefit-text h3 {
  margin: 0 0 0.3rem;
  font-size: 1.3rem;
  color: #28a745;
}

.benefit-text p {
  margin: 0;
  font-size: 1rem;
  color: #000;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 768px) {
  .benefit-row {
    flex-direction: column;
    text-align: center;
  }
  .benefit-icon {
    margin-bottom: 1rem;
  }
}


h1, h2, h3, .section-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

body, p, a, button, li, input, textarea {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

button, .cta {
  font-weight: 600; /* Botones más llamativos */
}

/* Reset */
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #f8f7f3;
  color: #000;
}

/* Contenedor */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.navbar {
  background: #28a745;
  padding: 0.5rem 0; /* menos alto */
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo img {
  height: 50px;   /* tamaño controlado */
  width: auto;    /* mantiene proporción */
  display: block;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;    /* espacio entre opciones */
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem; /* un poco más compacto */
}


/* Secciones */
.section {
  width: 100%;
  min-height: 60vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f8f7f3;
  color: #000;
}
.section.alt { background: #f8f7f3; }
.section h2 { color: #000; margin-bottom: 1rem; text-align: center; }
.section p, .section li { color: #000; font-size: 1.1rem; }

/* Hero */
.hero {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: #f8f7f3;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}
.hero-title {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #000;
}
.hero-subtitle {
  font-size: 1.25rem;
  color: #000;
  margin-bottom: 2rem;
}
.hero .cta {
  padding: 1rem 2rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.app-logo {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
}

/* Cómo funciona */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}
.step-card {
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  color: #000;
}
.step-card h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #28a745;
}
.step-card p {
  font-size: 1rem;
  line-height: 1.5;
  color: #000;
}
.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

/* Contacto */
.cta form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: auto;
}
.cta input, .cta textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  color: #000;
}
.cta button {
  background: #28a745;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;
}

/* Footer */
.footer {
  background: #f8f7f3;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #000;
}

/* Responsive */
@media (max-width: 992px) {
  .steps-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-title { font-size: 2.5rem; }
  .hero-subtitle { font-size: 1rem; }
  .steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
