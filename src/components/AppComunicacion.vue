<script setup>
// Definimos las propiedades que el componente espera recibir
defineProps({
  textos: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <!-- Grid de tarjetas adaptable -->
  <div class="space-y-12 w-full">
    <article
      v-for="texto in textos"
      :key="texto.id"
      class="relative bg-white rounded-3xl p-8 sm:p-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
    >
      <!-- Efecto decorativo físico (pestaña de cuaderno) -->
      <div class="absolute top-0 left-12 w-6 h-8 bg-esen-orange/20 rounded-b-md"></div>

      <!-- Área de Contenido -->
      <div>
        <!-- Metadatos -->
        <div class="flex items-center gap-3 text-xs font-spartan text-gray-400 mb-4 pl-2">
          <span>{{ texto.fecha }}</span>
          <span>•</span>
          <span>Escrito por {{ texto.autor }}</span>
        </div>

        <!-- Título principal -->
        <h2 class="text-2xl sm:text-3xl font-bold text-esen-purple font-spartan mb-2 leading-tight">
          {{ texto.titulo }}
        </h2>

        <!-- Subtítulo / Temática -->
        <p class="text-sm font-medium text-esen-orange mb-6 italic">
          {{ texto.subtitulo }}
        </p>

        <!-- Bloque de texto con estilo de agenda / bitácora -->
        <div class="prose max-w-none text-gray-700 leading-relaxed text-justify bg-gradient-to-b from-transparent to-gray-50/40 p-4 sm:p-6 rounded-2xl border-l-4 border-esen-orange/50">
          <p class="whitespace-pre-line text-base sm:text-lg font-google">
            {{ texto.contenido }}
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
/* Optimizaciones de hardware para evitar parpadeos visuales al hacer hover en Edge/Safari */
article {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: transform, box-shadow;
}

/* Compatibilidad de renderizado de fuentes para navegadores basados en Webkit/Blink */
p {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
