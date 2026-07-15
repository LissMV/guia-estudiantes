<template>
  <main class="flex-1 h-full overflow-y-auto scrolling-touch">
    <article class="max-w-4xl mx-auto p-6 sm:p-10">

      <!-- Categoría -->
      <span
        class="inline-block px-3 py-1 rounded-full bg-esen-purple/20 text-esen-pruple text-md font-spartan text-esen-purple"
      >
        {{ post.category }}
      </span>

      <!-- Título -->
      <h1 class="text-5xl font-coiny mt-6 text-esen-blue">
        {{ post.title }}
      </h1>

      <!-- Fecha y lectura -->
      <div class="flex gap-4 mt-4 text-gray-500 text-md font-spartan">
        <span>{{ post.date }}</span>
        <span>•</span>
        <span>{{ post.readTime }} min de lectura</span>
      </div>

      <!-- Imagen -->
      <img
        :src="post.coverImage"
        class="w-[750px] h-[600px] object-cover rounded-2xl mt-8"
      />

      <!-- Contenido -->
      <div
        class="mt-10 prose prose-lg max-w-none font-google"
        v-html="post.content"
      >
      </div>

    </article>
  </main>
</template>

<script setup>
defineProps({
  post: Object
})
</script>
