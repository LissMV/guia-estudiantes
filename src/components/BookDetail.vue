<script setup>
defineProps({
  book: {
    type: Object,
    required: true,
  },
})

defineEmits(['back'])
</script>

<template>
  <section class="max-w-6xl mx-auto py-20 px-6">
    <!-- Botón volver -->
    <button
      @click="$emit('back')"
      class="font-google text-sky-600 hover:text-sky-800 transition mb-8 flex items-center gap-2"
    >
      ← Volver a las reseñas
    </button>

    <!-- Título -->
    <h1 class="font-coiny text-5xl text-center text-sky-700 mb-10">
      {{ book.title }}
    </h1>

    <!-- Información del libro -->
    <div class="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 mb-12">
      <h2 class="font-coiny text-3xl text-sky-600 mb-6">Información del libro</h2>

      <div class="grid md:grid-cols-2 gap-6 font-google">
        <div>
          <p><span class="font-semibold">Autor:</span> {{ book.author }}</p>
          <p><span class="font-semibold">Editorial:</span> {{ book.publisher }}</p>
          <p><span class="font-semibold">Año:</span> {{ book.year }}</p>
          <p><span class="font-semibold">Género:</span> {{ book.genre }}</p>
          <p><span class="font-semibold">Páginas:</span> {{ book.pages }}</p>
        </div>

        <div>
          <p><span class="font-semibold">Titulo original:</span> {{ book.original_Title }}</p>
          <p><span class="font-semibold">Reseñado por:</span> {{ book.reviewer }}</p>
          <p><span class="font-semibold">Materia:</span> {{ book.subject }}</p>
        </div>
      </div>
    </div>

    <!-- Portada + reseña -->
    <div class="grid lg:grid-cols-3 gap-10 items-start">
      <!-- Imagen -->
      <div class="flex justify-center">
        <img :src="book.image" :alt="book.title" class="rounded-2xl shadow-xl w-72" />
      </div>

      <!-- Reseña -->
      <div class="lg:col-span-2">
        <h2 class="font-coiny text-3xl text-sky-600 mb-6">{{ book.title_Review }}</h2>

        <div class="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
          <div class="font-google text-gray-700 leading-8 text-justify space-y-6">
            <p v-for="paragraph in book.review" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
