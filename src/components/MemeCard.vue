<template>
  <div class="relative bg-white rounded-2xl shadow-lg overflow-visible">

    <!-- Perfil -->
    <div class="flex items-center p-4">
      <img
        :src="profileImage"
        alt="Perfil"
        class="w-12 h-12 rounded-full object-cover"
      />

      <h3 class="ml-3 font-spartan text-lg">
        {{ author }}
      </h3>
    </div>

    <!-- Meme -->
    <div class="relative">
      <img
        :src="memeImage"
        alt="Meme"
        class="w-full"
      />

      <!-- Burbuja -->
      <div
        class="absolute top-1 -right-[290px] bg-white shadow-xl rounded-2xl p-4 w-[260px] rotate-2 border"
      >
        <p class="text-sm text-gray-700">
          {{ comment }}
        </p>

        <!-- Punta de la burbuja -->
        <div
          class="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2
                 w-4 h-4 bg-white rotate-45 border-l border-b"
        ></div>
      </div>

    </div>

  </div>
</template>

<script setup>
defineProps({
  author: String,
  profileImage: String,
  memeImage: String,
  comment: String
})
</script>
