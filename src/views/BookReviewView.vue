<script setup>
import { ref } from 'vue'
import BookCard from '@/components/BookCard.vue'
import BookDetail from '@/components/BookDetail.vue'


const selectedBook = ref(null)

const books = [
  {
    id: 1,
    title: 'Los 7 hábitos de la gente altamente efectiva',
    author: 'Stephen R. Covey',
    publisher: 'Reynal & Hitchcock',
    year: 2004,
    image: 'https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg',

    genre: 'Autoayuda',
    pages: 96,
    subject: 'Fundamentos de Liderazgo',
    reviewer: 'Abner Gonzáles',
    title_Review: 'El poder de los hábitos',
    original_Title: 'The 7 Habits of Highly Effective People',

    review:
    [
      'Tuve que leer este libro en la materia de Fundamentos de Liderazgo durante el ciclo I, esto con el objetivo de desarrollar habilidades de autocontrol, organización personal y relaciones interpersonales. Además, los temas que el texto abarca son de gran relevancia dentro del mundo académico, empresarial o en la vida cotidiana.',
      'Los 7 hábitos de la gente altamente efectiva es un libro de autoayuda dividido en dos secciones: la victoria privada y la pública. Durante la primera parte, Covey explica prácticas para entender nuestros comportamientos y toma de decisiones con base en descubrir los sesgos y centros de vida. En el marco de "sea proactivo", "empezar con un fin en mente" y "primero lo primero", podemos conocer acciones relevantes para cambiar actitudes que están muy arraigadas.',
      'Por otro lado, la segunda mitad de este libro abarca aspectos de relaciones interpersonales durante cuatro hábitos en donde se muestra la importancia de identificarse en grupo y no como persona individual. Dichas prácticas son “pensar en ganar/ganar", "procure primero comprender y después ser comprendido", "la sinergia" y "afilar la sierra". Estos ayudan a desechar paradigmas de egoísmo y competencia que comúnmente tenemos.',
      'Por último, esta lectura fue de gran ayuda para mi desarrollo personal, puesto que muchas cosas cambiaron al entrar a la universidad. Cuando comencé a aplicar cada hábito, potencié habilidades que definitivamente me han beneficiado. Sin embargo, cabe aclarar que este libro requiere ser aplicado a la vida personal y no dejarlo exclusivamente en teoría.'
    ]
  },

  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    publisher: 'Secker & Warburg',
    year: 1949,
    image: 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg',

    genre: 'Distopía',
    pages: 328,
    subject: 'Comunicación Escrita',
    reviewer: 'Lisseth Mejía',

    review: 'Lorem ipsum dolor sit amet...',
  },

  {
    id: 3,
    title: 'Rebelión en la granja',
    author: 'George Orwell',
    publisher: 'Secker & Warburg',
    year: 1945,
    image: 'https://covers.openlibrary.org/b/isbn/9780451526342-L.jpg',

    genre: 'Sátira',
    pages: 112,
    subject: 'Comunicación Escrita',
    reviewer: 'Lisseth Mejía',

    review: 'Lorem ipsum...',
  },

  {
    id: 4,
    title: 'Crónica de una muerte anunciada',
    author: 'Gabriel García Márquez',
    publisher: 'La Oveja Negra',
    year: 1981,
    image: 'https://covers.openlibrary.org/b/isbn/9780307388940-L.jpg',

    genre: 'Novela',
    pages: 120,
    subject: 'Comunicación Escrita',
    reviewer: 'Lisseth Mejía',

    review: 'Lorem ipsum...',
  },

  {
    id: 5,
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes',
    publisher: 'Francisco de Robles',
    year: 1605,
    image: 'https://covers.openlibrary.org/b/isbn/9780060934347-L.jpg',

    genre: 'Novela',
    pages: 863,
    subject: 'Comunicación Escrita',
    reviewer: 'Lisseth Mejía',

    review: 'Lorem ipsum...',
  },
]


const openBook = (book) => {
  selectedBook.value = book
}

const closeBook = () => {
  selectedBook.value = null
}
</script>
<template>
  <Transition name="fade" mode="out-in">
    <!-- LISTA -->

    <section v-if="!selectedBook" class="max-w-7xl mx-auto py-20 px-6">
      <h2 class="font-coiny text-5xl text-center text-sky-700 mb-6">
        Reseñas de libros leídos en primer ciclo
      </h2>

      <p class="font-google text-center text-gray-600 max-w-3xl mx-auto mb-14">
        Durante el primer ciclo exploramos diversas obras literarias que fortalecieron nuestra
        capacidad de análisis, comprensión lectora y pensamiento crítico. Cada libro dejó enseñanzas
        valiosas que enriquecieron nuestra formación académica.
      </p>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <BookCard v-for="book in books" :key="book.id" :book="book" @open="openBook" />
      </div>
    </section>

    <!-- DETALLE -->

    <BookDetail v-else :book="selectedBook" @back="closeBook" />
  </Transition>
</template>
