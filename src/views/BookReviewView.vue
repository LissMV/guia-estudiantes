<script setup>
import { ref } from 'vue'
import BookCard from '@/components/BookCard.vue'
import BookDetail from '@/components/BookDetail.vue'
import libro1 from '@/assets/img/libros/libro1.jpg'
import libro2 from '@/assets/img/libros/libro2.jpg'
import libro3 from '@/assets/img/libros/libro3.jpg'
import libro4 from '@/assets/img/libros/libro4.png'
import libro5 from '@/assets/img/libros/libro5.jpg'



const selectedBook = ref(null)

const books = [
  {
    id: 1,
    title: 'Los 7 hábitos de la gente altamente efectiva',
    author: 'Stephen R. Covey',
    publisher: 'Reynal & Hitchcock',
    year: 2004,
    image: libro1,

    genre: 'Autoayuda',
    pages: 206,
    subject: 'Fundamentos de Liderazgo',
    reviewer: 'Abner González',
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
    title: 'Un pavo real en el reino de los pingüinos',
    author: 'Bárbara BJ Hateley y Warren H. Schmidt',
    publisher: 'Reverté',
    year: 2023,
    image: libro2,

    genre: 'Fábula y ficción didáctica',
    pages: 112,
    subject: 'Bienestar Total',
    reviewer: 'Venus Valencia',
    title_Review: 'Reseña a Un pavo real en el reino de los pingüinos',
    original_Title: 'A Peacock in the Land of Penguins',

    review:
    [
      '¿Te gustan las lecturas que parecen cuentos infantiles, pero son profundas? Un pavo real en el reino de los pingüinos interpreta exactamente eso con una historia simple, sin embargo, que posee un mensaje poderoso. Es un libro tan digerible que sientes que lees algo hecho para niños, aunque en realidad aborda un tema serio: la diversidad en el ámbito laboral.',
      'La historia habla de Pedro, un pavo real talentoso y colorido que llega al Reino de los Pingüinos con la ilusión de triunfar. Sin embargo, a pesar de que sus resultados son excelentes, su forma de ser incomoda a los empresarios. El protagonista intenta adaptarse, pero comprende que ocultar su autenticidad lo apaga. Finalmente, él y otras aves exóticas deciden cambiar su rumbo hacia el Reino de la Oportunidad, donde pensar fuera de la caja es valorado.',
      'Este relato hace un llamado a la acción: aceptar y abrazar lo que somos, ya que la esencia prevalece en nuestro actuar. Para alcanzar esto, las apostillas de la fábula abordan los siguientes temas de ayuda a los futuros adultos: cómo se ven y trabajan las empresas, recomendaciones para los pingüinos que quieren cambiar, identificar si eres un pájaro extravagante y consejos de supervivencia.',
      'Recomiendo este libro a todas las personas que se preparan para el mundo laboral. Si eres un joven universitario, deberías leer esta fábula. Te ayudará con herramientas para prosperar al trabajar con personas diferentes. Una guía que orienta tanto a los pingüinos como a los animales plumados.'
    ]
  },

  {
    id: 3,
    title: 'Cointeligencia: Vivir y trabajar con la IA',
    author: 'Ethan Mollick',
    publisher: 'Penguin Random House',
    year: 2024,
    image: libro3,

    genre: 'No ficción',
    pages: 240,
    subject: 'Expresión Textual',
    reviewer: 'Lisseth Mejía',
    title_Review: '¿Es la IA mi herramienta de confianza? ',
    original_Title: 'Co-Intelligence: Living and Working with AI',

    review:
    [
      'Ethan Mollick es un profesor de la Universidad de Pensilvania. Su libro, Cointeligencia, habla acerca de los beneficios y efectos negativos que trae la evolución de la inteligencia artificial. Por esta razón, este material fue usado para tareas escritas en la materia de Expresión Textual.',
      'Mollick advierte de lo peligroso que es hacernos completamente dependientes de la IA generativa. Además, ofrece una línea de tiempo de la evolución de los grandes modelos de lenguaje, hasta llegar a los que conocemos hoy en día. El libro cuenta con 9 capítulos que ayudan a formar un pensamiento propio y crítico respecto a su uso. También, nos brinda orientación para tener una buena coexistencia con esta tecnología.',
      'Este es un libro de no ficción. Sin embargo, muestra posibles futuros de la tecnología generativa, algunos incluso apocalípticos. El autor siempre sostiene que su impresionante evolución es incierta y lo ideal es estar actualizados. Asimismo, usarla de manera consciente es nuestro deber, especialmente al ser estudiantes. Debido a que, en dicho contexto, somos muy susceptibles de cometer plagio.',
      'La IA ya forma parte de nuestro día a día y justamente Cointeligencia nos ayuda a comprender su importancia. La lectura es útil y visionaria porque abarca distintos puntos de vista, tanto negativos como positivos. En definitiva, en una escuela como la ESEN no podemos ignorar este tema. Por lo tanto, Mollick nos recuerda por qué debemos de usar correctamente esta herramienta.'

    ],
  },

  {
    id: 4,
    title: 'Objetos trashumantes',
    author: 'Mario Quiñónez',
    publisher: 'índole',
    year: 2025,
    image: libro4,

    genre: 'Ficción',
    pages: 96,
    subject: 'Expresión Textual',
    reviewer: 'Ariel Cortez',
    title_Review: '¿Qué pasaría si los objetos hablaran?',
    original_Title: 'Objetos trashumantes',

    review:
    [
      'El ciclo pasado, para la clase de Expresión Textual, tuve que leer Objetos trashumantes. Es un libro escrito por Mario Quiñónez, de nacionalidad salvadoreña, en el cual se relatan pequeñas historias inspiradas en la realidad del país.',
      'El libro trata sobre las perspectivas de nuestras pertenencias y se caracteriza por su estilo coloquial. Además, tiene el valor de tocar temas que se podrían considerar tabú, como casos de abuso, suicidio, depresión y muchos más. Me encanta la forma en la que relata las historias, porque no lo hace de la manera común, con un protagonista genérico, sino que nos las cuenta desde la perspectiva de un objeto al que el autor le da vida.',
      'Me parece fabuloso cómo el autor logra, de forma muy acertada, que el lector pueda entender de qué trata la situación a pesar de que no esté explícita. De hecho, en ningún momento se menciona qué sufren los personajes, sino que se debe inferir según el relato que está contando el objeto.',
      'Este libro abrió mi mente, permitiéndome ver más allá. Me enseñó que el sufrimiento es una realidad compartida y compleja.'
    ],
  },

  {
    id: 5,
    title: 'Estudio en escarlata',
    author: 'Arthur Conan Doyle',
    publisher: 'Libros en red',
    year: 1887,
    image: libro5,

    genre: 'Novela detectivesca',
    pages: 125,
    subject: 'Pensamiento Crítico',
    reviewer: 'José Kuri',
    title_Review: 'Reseña del libro Estudio en escarlata de Arthur Conan Doyle',
    original_Title: 'A study in scarlet',

    review:
    [
      'En Pensamiento Crítico, materia de primer año, serán pocos los libros que leerás. De Estudio en escarlata de Arthur Conan Doyle, 1887 verán tan solo un fragmento, lo que realmente es una pena pues es probablemente el texto más interesante que analizarán en ciclo I.',
      '¿De qué se trata esta novela? Estudio en escarlata nos relata la vida de John Watson, un médico que pasa por un mal momento económico, por lo que se ve forzado a vivir con un desconocido. Resulta que este "roomie" es un detective muy aclamado, pero también una persona sumamente engreída, Sherlock Holmes. El doctor se interesa por el trabajo de su compañero, lo que termina por involucrarlo en un caso de homicidio que ni siquiera la policía puede resolver.',
      'Dicho escrito es una novela detectivesca. Cuenta con un narrador protagonista, Watson. Este libro resulta sumamente innovador al ser pionero en utilizar elementos de la ciencia y la historia para su trama, pues el autor, un médico frustrado, al igual que el personaje principal, retomó parte de su vida en la obra.',
      'Para concluir quisiera remarcar algunas cosas que aprendí con este libro. El uso del análisis de las personas resulta extremadamente útil para materias como emprendimiento o liderazgo. Además, remarco la similitud que sentirán al ser estudiantes de nuevo ingreso con la experiencia de Watson. Obligados a vivir con un desconocido que quizás no sea la persona más agradable, pero con el tiempo, podemos aprender cosas fascinantes gracias a ellos.'
    ],
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

    <section v-if="!selectedBook" class="max-w-7xl mx-auto py-10 px-6">
      <h2 class="font-coiny text-5xl text-center text-esen-blue mb-6">
        Reseñas de libros leídos en primer ciclo
      </h2>

      <p class="font-google text-center text-gray-600 max-w-3xl mx-auto mb-14">
        Durante el primer ciclo leímos algunos libros que fortalecieron nuestra capacidad de
        análisis y contribuyeron a la comprensión de las materias. A continuación, te presentamos
        los cinco elegidos, que recomendamos y consideramos que valió la pena reseñar.
      </p>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <BookCard v-for="book in books" :key="book.id" :book="book" @open="openBook" />
      </div>
    </section>

    <!-- DETALLE -->

    <BookDetail v-else :book="selectedBook" @back="closeBook" />
  </Transition>
</template>
