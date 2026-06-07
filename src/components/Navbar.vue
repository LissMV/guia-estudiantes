<script setup>
import DescubrePopup from '@/components/DescubrePopup.vue'
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-2xl font-coiny text-esen-orange"> Esenitos.com </router-link>

      <ul class="flex gap-6 items-center text-lg font-spartan">
        <router-link to="/#about">
          <li class="hover:text-esen-orange">Sobre nosotros</li>
        </router-link>

        <li class="hover:text-esen-orange"><a href="#">El campus</a></li>

        <li>
          <DescubrePopup />
        </li>
      </ul>
    </div>
  </nav>
</template>
