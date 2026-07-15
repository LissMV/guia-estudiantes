<script setup>
defineProps({
  book: {
    type: Object,
    required: true,
  },
});

defineEmits(["open"]);
</script>

<template>
  <div
    class="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
  >
    <!-- Portada -->
    <img
      :src="book.image"
      :alt="book.title"
      class="w-full h-72 object-cover"
    />

    <!-- Información -->
    <div class="p-5 flex flex-col flex-1">

      <h3
        class="font-spartan text-xl text-esen-green mb-4 leading-tight font-semibold"
      >
        {{ book.title }}
      </h3>

      <div class="font-google text-sm text-gray-600 space-y-2 flex-1">

        <p>
          <span class="font-semibold text-gray-800">Autor:</span><br>
          {{ book.author }}
        </p>

        <p>
          <span class="font-semibold text-gray-800">Editorial:</span><br>
          {{ book.publisher }}
        </p>

        <p>
          <span class="font-semibold text-gray-800">Año:</span>
          {{ book.year }}
        </p>

      </div>

      <button
        @click="$emit('open', book)"
        class="mt-6 bg-esen-blue hover:bg-esen-purple text-white font-google font-medium py-2 rounded-xl transition"
      >
        Ver reseña →
      </button>

    </div>
  </div>
</template>
