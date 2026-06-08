<script setup>
import { ref } from 'vue'

import BlogSidebar from '@/components/BlogSidebar.vue'
import BlogContent from '@/components/BlogContent.vue'

import nosotros3 from '@/assets/img/nosotros/nosotros3.jpeg'
import nosotros1 from '@/assets/img/nosotros/nosotros1.jpeg'
import nosotros2 from '@/assets/img/nosotros/nosotros2.jpeg'
import nosotros4 from '@/assets/img/nosotros/nosotros4.jpeg'
import nosotros5 from '@/assets/img/nosotros/nosotros5.jpeg'

import post1 from '@/assets/img/posts/post1.jpeg'
import post2 from '@/assets/img/posts/post2.jpeg'
import post3 from '@/assets/img/posts/post3.jpeg'
import post4 from '@/assets/img/posts/post4.jpeg'
import post5 from '@/assets/img/posts/post5.jpeg'

const posts = [
  {
    id: 1,
    title: 'Los horarios de la ESEN',
    category: 'Vida académica',
    date: '07 junio 2026',
    readTime: 1,

    author: 'José Kuri',
    career: 'Derecho',

    authorImage: nosotros5,

    coverImage: post2,

    content: `
<p>
  Sea que estés en la escuela o la universidad, lo primero en lo que nos fijamos
son los horarios. Después de todo trabajamos para algún día disfrutar de nuestro
tiempo libre. Algo que no poseerás en tu estadía como esenita.
</p>

<p class="mt-3">
  Primero celebrarás al ver solo cuatro materias, ya que en la escuela tenías muchísimas más.
Esto es una trampa. Ese día que ibas en la mañana y regresabas en la noche se
arruina cuando descubres que añadieron inglés en la tarde, dando poco tiempo para
estudiar, pero sin dar suficiente con tal de volver a casa.
</p>

<p class="mt-3">
  Súmale a esto las reuniones grupales, donde descubrirás que los peores horarios no
los hace el director, los hará Juanito, que tiene todo el día libre y cree que su grupo
también.
</p>
<p class="mt-3">
  Para evitar esas situaciones, esfuérzate en ser el primero que elige su horario,
organiza tu tiempo y no te quedes callado si estás incómodo.
</p>
`,
  },

  {
    id: 2,
    title: 'La semana del caos',
    category: 'Experiencia estudiantil',
    date: '07 junio 2026',
    readTime: 1,

    author: 'Ariel Cortez',
    career: 'Ingeniería de Software',

    authorImage: nosotros3,

    coverImage: post3,

    content: `
<p>
  ¿Nunca se han cuestionado por qué los estudiantes de la ESEN dicen que no tienen
vida? Me imagino que les han metido miedo. Sin embargo, yo quiero hablarles de la única
realidad de la que deben estar pendientes: las semanas 5 y 11.
</p>

<p class="mt-3">
 Quiero aconsejarlos para que no lo sufran como me pasó a mí. Mi principal
recomendación es que nunca dejen que se les acumule el trabajo de las semanas
pasadas; es el peor error que pueden cometer. Al llegar a las semanas 5 u 11, si se han
descuidado, no tendrán tiempo ni de ver a sus padres debido a la presión de los parciales.
</p>
<p class="mt-3">
 En conclusión, traten de ser responsables con sus deberes y aprecien a sus
compañeros, porque ellos se vuelven sus hermanos de batalla. Mis mejores deseos; traten
de vivir la ESEN, no solo de sobrevivir a ella.
</p>
`,
  },
  {
    id: 3,
    title: 'Bienestar Total: la materia que te cambia la vida',
    category: 'Materias y aprendizaje',
    date: '07 junio 2026',
    readTime: 1,

    author: 'Venus Valencia',
    career: 'Ingeniería de Negocios',

    authorImage: nosotros4,

    coverImage: post4,

    content: `
<p>
  ¿Sabes cómo trabajar en equipo? Pues en Bienestar Total aprenderás por las
buenas o por las malas. No lo menciono para que te preocupes, más bien para que
observes el lado positivo, la enseñanza:
</p>
<h1 class="text-xl font-bold mt-3">
  Materia que estudiar
</h1>
<p class="mt-3">
  Durante las clases, recibirás contenido teórico para la construcción del carácter y
desarrollo personal. No te preocupes, no te lanzarán igual que a un pajarito a volar.
</p>
<h1 class="text-xl font-bold mt-3">
  Actividades sumativas
</h1>
<p class="mt-3">
  En las evaluaciones elaborarás trabajos para la resolución de problemas. Dichas
composiciones han sido planeadas para que tus habilidades blandas salgan a la luz.
</p>
<h1 class="text-xl font-bold mt-3">
  Circuito de BT
</h1>
<p class="mt-3">
  El viernes participarás en dinámicas diseñadas para reflejar cada lección. Lleva
ropa extra, desayuna e hidrátate para no sufrir letargo. Ten en cuenta que después del mar
de tortura física debes ir a tu siguiente clase.
</p>
<p class="mt-3">
Te invito a vivir la materia y no solo aprobarla. Realmente quien gana es quien pone
en práctica el conocimiento.
</p>
`,
  },
  {
    id: 4,
    title: 'Lo que debes de saber si no quieres dejar matemáticas',
    category: 'Consejos académicos',
    date: '04 junio 2026',
    readTime: 1,

    author: 'Lisseth Mejía',
    career: 'Ingeniería de Software',

    authorImage: nosotros1,

    coverImage: post1,

    content: `
<p>
  Seguramente, cuando entraste a la ESEN, la primera advertencia que recibiste fue: "cuidado con matemáticas".
  Desde mi experiencia, esta materia ha sido la más retadora. No obstante, sí existe una forma de sobrevivir a Roxy y Chema.
  Lo que debes de tener en cuenta es que nunca estás solo; la universidad ofrece apoyo por parte de los ayudantes, tutores y Dirección Estudiantil.
</p>

<p class="mt-3">
 Por otro lado, te aconsejo entender el tema primero; luego reunirte con tus amigos en el CC. Es muy probable que, si llegas sin saber nada, tu hora de estudio
 termine en un "lo haré más tarde". Evita esto porque después te toca desvelarte.
</p>
<p class="mt-3">
No pienses que ya dejaste la materia si te va mal en tu primer control. Sí se puede salvar, solo necesitas conocer tu método de estudio, disfrutar el proceso
y seguir los consejos de esenitas mayores.
</p>
`,
  },
  {
    id: 5,
    title: 'La comida de la cafetería',
    category: 'Vida en campus',
    date: '04 junio 2026',
    readTime: 1,

    author: 'Abner González',
    career: 'Ingeniería de Software',

    authorImage: nosotros2,

    coverImage: post5,

    content: `
<p>
  La comida de la cafetería es buenísima y en general la considero muy completa y
saludable, pues esta incluye elementos como ensalada, tortillas, arroz y el alimento fuerte
(depende de tu elección). Esto se considera un plato balanceado y útil si tu plan es
saciarte y a la vez cuidar tu cuerpo.
</p>

<p class="mt-3">
 Independientemente de si es desayuno o almuerzo, es muy rica. Sin embargo, el
precio de esta es un poco elevado y tienes que tomarlo en cuenta. Para algunos no hay
problema pagar casi cuatro dólares por un plato, pero hay otros que simplemente no
pueden costearse esa cantidad todos los días. Por lo tanto, debes de ser muy selectivo y
analizar tu bolsillo cuidadosamente.
</p>
<p class="mt-3">
En conclusión, los alimentos de la "cafe" son ideales si quieres comer rico y
mantenerte saludable, pero te aconsejo tener cuidado con el precio de esta para no
quedar en bancarrota.
</p>
`,
  },
]

const selectedPost = ref(posts[0])

const changePost = (post) => {
  selectedPost.value = post
}
</script>

<template>
  <div class="bg-gray-50 flex h-[calc(100vh-4rem)] overflow-hidden">
    <BlogSidebar :posts="posts" :selectedPost="selectedPost" @change-post="changePost" />

    <BlogContent :post="selectedPost" />
  </div>
</template>
