<script setup>
import { ref } from 'vue'

const abierto = ref(false)
</script>

<template>
  <div class="relative">
    <button @click="abierto = !abierto" class="hover:text-esen-orange">Descubre</button>

    <div
      v-if="abierto"
      class="absolute right-0 top-10 w-48 bg-white border rounded-lg shadow-lg p-2 z-50"
    >
      <router-link
        to="/mapa"
        class="w-full text-left hover:text-esen-blue px-3 py-2 rounded hover:bg-gray-200"
        >Mapa interactivo
      </router-link>

      <router-link
        to="/memes"
        class="block w-full text-left hover:text-esen-blue px-3 py-2 rounded hover:bg-gray-200"
      >
        Memes
      </router-link>

      <button class="w-full text-left hover:text-esen-blue px-3 py-2 rounded hover:bg-gray-200">
        Post
      </button>
    </div>
  </div>
</template>
