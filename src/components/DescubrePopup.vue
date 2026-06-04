<script setup>
import { ref } from 'vue'

const abierto = ref(false)
</script>

<template>
  <div class="relative">
    <button
      @click="abierto = !abierto"
      class="hover:text-blue-600 transition-colors"
    >
      Descubre
    </button>

    <div
      v-if="abierto"
      class="absolute right-0 top-8 w-48 bg-white border rounded-lg shadow-lg p-2 z-50"
    >
      <button
        class="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
      >Mapa interactivo
      </button>

      <button
        class="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
      >Memes
      </button>

      <button
        class="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
      >Post
      </button>
    </div>
  </div>
</template>
