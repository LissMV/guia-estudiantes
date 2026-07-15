<script setup>
import homeCollague from '@/assets/img/HomeCollague.png'
</script>
<template>
  <section class="relative w-full h-[650px]">
    <img :src="homeCollague" alt="Home Collage" class="w-full h-full object-cover" />

    <!-- Cobertura transparente -->
    <div class="absolute inset-0 bg-black/60"></div>
    <!-- Contenido encima -->
    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-white font-coiny text-5xl">Bienvenido a esta increíble experiencia</h1>
    </div>
  </section>

  <section class="mt-[100px]">
    <div
      class="text-justify max-w-7xl mx-auto p-3"
    >
      <div class="font-google space-y-4 text-xl">
      <p>Esta es una guía no oficial creada específicamente para ti. ¡Bienvenido a la ESEN!</p>
      <p>
         Esperamos que la pases increíble y, sobre todo, que encuentres el apoyo necesario para
        iniciar esta nueva etapa. Para nosotros, ser universitarios no solo significa estudiar todo
        el tiempo. Tienes el derecho de divertirte y disfrutar estos 5 años. Para tu suerte, hay
        muchas actividades que puedes hacer aparte de encerrarte en el CC.
      </p>
      <p>
        Por esa razón, hemos creado esta guía, para que puedas ver todas las cosas emocionantes que
        hay en el campus. Además, cada ciclo y materia te ofrecen una experiencia diferente y
        esperamos que esta página web te ayude a ver que significa ser un esenita.
      </p>
      </div>
    </div>
  </section>

  <!-- Sobre Nosotros -->
  <section
    id="about"
    class="min-h-screen bg-gradient-to-br from-esen-blue/40 via-white to-esen-orange/30 py-8 mt-[100px] scroll-mt-24"
  >
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-esen-blue font-spartan">
        Conoce al equipo detrás de esta guía
      </h1>
      <p class="text-gray-600 mt-2 font-google">Los Top Globales de primer año 2026</p>
    </div>

    <div class="max-w-5xl mx-auto px-6">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
        <!-- 1 -->
        <div class="group text-center w-72">
          <img
            src="@/assets/img/nosotros/nosotros1.jpeg"
            class="w-72 h-80 object-cover rounded-2xl shadow-lg transform transition duration-300 group-hover:scale-105"
          />
          <h3 class="mt-3 font-bold text-esen-purple text-lg font-spartan">Lisseth Mejía</h3>
          <p class="text-sm font-google">Programadora frontend</p>
        </div>

        <!-- 2 -->
        <div class="group text-center w-72">
          <img
            src="@/assets/img/nosotros/nosotros3.jpeg"
            class="w-72 h-80 object-cover rounded-2xl shadow-lg transform transition duration-300 group-hover:scale-105"
          />
          <h3 class="mt-3 font-bold text-esen-purple text-lg font-spartan">Ariel Cortez</h3>
          <p class="text-sm font-google">Programador frontend</p>
        </div>

        <!-- 3 -->
        <div class="group text-center w-72">
          <img
            src="@/assets/img/nosotros/nosotros4.jpeg"
            class="w-72 h-80 object-cover rounded-2xl shadow-lg transform transition duration-300 group-hover:scale-105"
          />
          <h3 class="mt-3 font-bold text-esen-purple text-lg font-spartan">Venus Valencia</h3>
          <p class="text-sm font-google">UI/UX & Creatividad</p>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-8 justify-items-center mt-8">
        <!-- 4 -->
        <div class="group text-center w-72">
          <img
            src="@/assets/img/nosotros/nosotros5.jpeg"
            class="w-72 h-80 object-cover rounded-2xl shadow-lg transform transition duration-300 group-hover:scale-105"
          />
          <h3 class="mt-3 font-bold text-esen-purple text-lg font-spartan">José Kuri</h3>
          <p class="text-sm font-google">Escritura y corrección</p>
        </div>

        <!-- 5 -->
        <div class="group text-center w-72">
          <img
            src="@/assets/img/nosotros/nosotros2.jpeg"
            class="w-72 h-80 object-cover rounded-2xl shadow-lg transform transition duration-300 group-hover:scale-105"
          />
          <h3 class="mt-3 font-bold text-esen-purple text-lg font-spartan">Otoniel González</h3>
          <p class="text-sm font-google">Organización de tareas</p>
        </div>
      </div>
    </div>
  </section>

  <section id="campus-life" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Galería -->
        <div class="grid grid-cols-2 gap-4">
          <img
            src="@/assets/img/vida_esen/esen3.jpeg"
            class="rounded-2xl shadow-lg h-48 w-full object-cover"
          />
          <img
            src="@/assets/img/vida_esen/esen2.jpeg"
            class="rounded-2xl shadow-lg h-48 w-full object-cover"
          />
          <img
            src="@/assets/img/vida_esen/esen1.jpeg"
            class="rounded-2xl shadow-lg h-48 w-full object-cover"
          />
          <img
            src="@/assets/img/vida_esen/esen4.jpeg"
            class="rounded-2xl shadow-lg h-48 w-full object-cover"
          />
        </div>

        <!-- Texto -->
        <div id="vida_estudiantil" class="text-justify">
          <h2 class="text-4xl font-bold text-esen-blue font-spartan mb-6">La vida en el campus</h2>

          <p class="text-gray-700 leading-relaxed font-google text-lg">
            La ESEN es mucho más que aulas y tareas. Su campus te ofrece una experiencia rodeada de
            naturaleza ¡incluso puedes ver animales! Por otro lado, Si hay algo que amamos de
            nuestra universidad son las amistades que llegas a hacer. Conectar con alumnos de otros
            años y recibir su apoyo es muy afortunado. Eso te demuestra que no todo es semana 5 y
            11, te mereces darte un tiempo para disfrutar.
          </p>

          <p class="text-gray-700 leading-relaxed font-google text-lg mt-4">
            Además, tienes la oportunidad de experimentar los miércoles de bienestar. Son
            actividades que organiza Dirección Estudiantil, con el objetivo de desconectarte un
            rato. Sin duda alguna, el campus ofrece oportunidades para hacer amigos, desarrollar
            nuevas habilidades y disfrutar de una experiencia universitaria completa.
          </p>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-esen-purple text-white py-8 mt-10">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h3 class="font-spartan text-xl font-semibold mb-3">Créditos y referencias</h3>

      <p class="text-gray-300 font-google text-sm">
        Las fotografías y videos puestos en está guía no oficial han sido tomadas por el equipo
        desarrollador.
      </p>

       <p class="text-gray-300 font-google text-sm mt-2">
        Las fotografías grupales de las actividades de bienestar son por parte del equipo de Dirección Estudiantil.
      </p>

      <p class="text-gray-300 font-google text-sm mt-2">
        La fotografía del campus para el mapa interactivo fue obtenida del sitio web oficial de la
        ESEN.
        <a
          href="https://www.esen.edu.sv/acerca-de-la-esen/"
          target="_blank"
          class="text-esen-orange hover:underline"
        >
          Ver fuente
        </a>
      </p>
    </div>
  </footer>
</template>
