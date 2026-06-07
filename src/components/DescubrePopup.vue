<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const abierto = ref(false)
const dropdown = ref(null)

const cerrarSiFuera = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    abierto.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', cerrarSiFuera)
})

onUnmounted(() => {
  document.removeEventListener('click', cerrarSiFuera)
})
</script>

<template>
  <div ref="dropdown" class="relative">
    <button @click="abierto = !abierto" class="hover:text-esen-orange">
      Descubre
    </button>

    <div
      v-if="abierto"
      class="absolute right-0 top-10 w-48 bg-white border rounded-lg shadow-lg p-2 z-[9999]"
    >
      <router-link
        to="/mapa"
        class="block w-full text-left hover:text-esen-blue px-3 py-2 rounded hover:bg-gray-200"
      >
        Mapa interactivo
      </router-link>

      <router-link
        to="/memes"
        class="block w-full text-left hover:text-esen-blue px-3 py-2 rounded hover:bg-gray-200"
      >
        Memes
      </router-link>

      <router-link
        to="/posts"
        class="block w-full text-left hover:text-esen-blue px-3 py-2 rounded hover:bg-gray-200"
      >
        Post
      </router-link>
    </div>
  </div>
</template>
