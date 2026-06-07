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

  <section class="mt-8">
    <div
      class="text-justify max-w-5xl mx-auto border border-esen-blue rounded-xl p-3 outline-3 outline-offset-4 outline-esen-purple"
    >
      <p class="font-google">
        Esta es una guía no oficial creada específicamente para ti, ¡Bienvenido a la ESEN! <br />
        Esperamos que la pases increíble y, sobre todo, que encuentres el apoyo necesario para
        iniciar esta nueva etapa. Para nosotros, ser universitarios no solo significa estudiar todo
        el tiempo. Tienes el derecho de divertirte y disfrutar estos 5 años. Para tu suerte, hay
        muchas actividades que puedes hacer aparte de encerrarte en el CC. <br />
        Por esa razón, hemos creado esta guía, para que puedas ver todas las cosas emocionantes que
        hay en el campus. Además, cada ciclo y materia te ofrecen una experiencia diferente y
        esperamos que esta pagina web te ayude a ver que significa ser un Esenita.
      </p>
    </div>
  </section>

  <!-- Sobre Nosotros -->
  <section
    id="about"
    class="min-h-screen bg-gradient-to-br from-esen-blue/40 via-white to-esen-orange/30 py-8 mt-10 scroll-mt-24"
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
            src="@/assets/img/nosotros/nosotros1.jpeg"
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
            src="@/assets/img/nosotros/nosotros1.jpeg"
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
</template>
