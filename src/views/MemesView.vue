<script setup>
import MemeCard from '@/components/MemeCard.vue'

import nosotros1 from '@/assets/img/nosotros/nosotros1.jpeg'
import nosotros2 from '@/assets/img/nosotros/nosotros2.jpeg'
import nosotros3 from '@/assets/img/nosotros/nosotros3.jpeg'
import nosotros4 from '@/assets/img/nosotros/nosotros4.jpeg'
import nosotros5 from '@/assets/img/nosotros/nosotros5.jpeg'


import meme1 from '@/assets/img/memes/meme1.png'
import meme2 from '@/assets/img/memes/meme2.png'
import meme3 from '@/assets/img/memes/meme3.jpeg'
import meme4 from '@/assets/img/memes/meme4.png'
import meme5 from '@/assets/img/memes/meme5.png'

const memes = [
  {
    author: 'Venus Valencia',
    profileImage: nosotros4,
    memeImage: meme1,
    comment: 'Los horarios no son tan malos, pero la cosa cambia cuando tus clases terminan a las 12:05 pm y tienes Inglés a las 2:30pm. Sin embargo, los de software y derecho están peor, ya que son las 8:00pm y ellos siguen en la U.',
  },
  {
    author: 'José Kuri',
    profileImage: nosotros5,
    memeImage: meme2,
    comment: 'Emprendimiento será de las materias que recuerdes con amor-odio. De hecho, ciclo 2 es muy diferente a ciclo 1 por esa misma razón, ¡suerte!',
  },
  {
    author: 'Ariel Cortez',
    profileImage: nosotros3,
    memeImage: meme3,
    comment: 'Mi primer control fue de 4.7. Al principio si me sentí bastante mal, pero luego me di cuenta que no era tan grave y que podía mejorar. Ahora ya no me estreso tanto por los controles.',
  },
  {
    author: 'Lisseth Mejía',
    profileImage: nosotros1,
    memeImage: meme4,
    comment: 'Hasta el momento no he tenido clases con Domínguez, pero debo de admitir que me da risa ver como toda la sección de Domi se reune para hacer actividades culturales y académicas.',
  },
  {
    author: 'Abner González',
    profileImage: nosotros2,
    memeImage: meme5,
    comment: 'Ya es una tradición que cada vez que hay presentaciones de BT, un hombre se tenga que disfrazar de mujer. Debo de destacar que la materia es de las cosas que hace única a la ESEN.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-esen-blue via-white to-esen-green/50 py-10">
    <h1 class="text-4xl font-spartan text-esen-purple font-bold text-center mb-10">
      Espacio de memes de la ESEN
    </h1>

    <div class="max-w-lg mx-[400px] space-y-8">
      <MemeCard
        v-for="(meme, index) in memes"
        :key="index"
        :author="meme.author"
        :profileImage="meme.profileImage"
        :memeImage="meme.memeImage"
        :comment="meme.comment"
      />
    </div>
  </div>
</template>
