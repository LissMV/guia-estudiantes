<script setup>
import DescubrePopup from '@/components/DescubrePopUp.vue'
</script>

<template>
  <nav class="bg-white shadow-md p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href=""><h1 class="text-xl font-bold">Esenitos.com</h1></a>

      <ul class="flex gap-6 items-center">
        <li><a href="#">Sobre nosotros</a></li>
        <li><a href="#">El campus</a></li>

        <li>
          <DescubrePopup />
        </li>
      </ul>
    </div>
  </nav>
</template>
