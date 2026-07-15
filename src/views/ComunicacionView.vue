<script setup>
import { ref } from 'vue'
import AppComunicacion from '@/components/AppComunicacion.vue'

// La fuente de datos reside en la vista. En el futuro podrías traer esto de una API o store de Pinia.
const listaDeTextos = ref([
  {
    id: 1,
    titulo: "¿Realmente importa lo que digo? ",
    subtitulo: "Reflexiones sobre lo que hablamos y cómo nos comunicamos",
    fecha: "3 Julio 2026",
    autor: "Ariel Cortez",
    contenido: "El capítulo “¿A quién le interesa lo mío?” de Baró (2015) aborda un error frecuente en nuestra vida cotidiana: hablar sin considerar si lo expresado le resulta relevante al oyente. El texto inicia con una situación común. Baró menciona que, en muchas ocasiones, sentimos gran alegría por contar una experiencia; sin embargo, al hablar con la otra persona, percibimos que no muestra interés por lo que decimos (p. 124). Ante esto, Baró aconseja reflexionar antes de intervenir en una conversación para cuestionarnos si lo que diremos aportará valor a la plática (p. 124). Asimismo, explica que es posible identificar si al oyente le interesa el tema mediante su lenguaje corporal. Por ejemplo, si se distrae con facilidad o no asiente con la cabeza para seguir hablando, es probable que no le resulte relevante. Observar estas señales permite actuar con empatía y evitar incomodar. En lo personal, este capítulo me ha ayudado a mejorar mis relaciones en la universidad. Antes solía hablar de mis experiencias sin considerar si estaban interesados en escucharlas. Como consecuencia, algunas personas se alejaban. Sin embargo, desde que aplico los consejos de Baró, he aprendido a prestar más atención a las reacciones de quienes me rodean, lo que ha favorecido conversaciones más agradables. Para cerrar, les pregunto: ¿ustedes saben si lo que hablan le importa a los demás? "
  },
  {
    id: 2,
    titulo: "Los limites",
    subtitulo: "Estableciendo límites saludables",
    fecha: "4 Julio 2026",
    autor: "Venus Minerva",
    contenido: "¿Conoces la palabra 'límite'? Probablemente la has escuchado en muchas partes, hasta en las matemáticas. Este término puede ser definido como una frontera, una línea que evitas cruzar o la gota que falta para derramar el vaso. 'Saber decir que no' es el capítulo que leí y, aunque suena como algo sencillo, no siempre somos capaces de pronunciar este simple monosílabo. Por eso, hoy te mostraré por qué deberías poner altos y cómo puedes hacerlo. Según Baró (2015), si tomas proyectos carentes de valor, desgastas energía, tiempo, prestigio y la posibilidad de enfocarte en otra cosa (p. 151). Usualmente, aceptamos para eludir un conflicto, pero el problema existe desde que decidimos no priorizarnos. Si mantienes una agenda saturada, la calidad de lo que haces se verá afectada y tu salud también. Por otro lado, si decides decir que no en el tiempo adecuado y de forma educada, eres fiel a ti mismo, mantienes relaciones sanas y potencias tu organización. Una herramienta para lograrlo es crear una lista de límites que te gustaría aplicar. Baró (2015) dice que, si los practicas en tu mente y en voz alta, lograrás expresarlos con naturalidad y confianza en el momento oportuno (p.149). Recuerda que saber decir que no te ayudará para la vida. En la universidad no solo vas a aprender sobre tu carrera, sino que también a tomar decisiones acertadas, tanto en el área laboral como en el día a día."
  },

  {
    id: 3,
    titulo: "Hablar menos ",
    subtitulo: "Conocer cuando hablar y cuando callar",
    fecha: "5 Julio 2026",
    autor: "Abner Otoniel",
    contenido: "Alguien dijo una vez que la mejor arma es el silencio y eso es lo que Baró profundiza dentro del capítulo '¿A quién le interesa lo mío?'. Este texto es un claro ejemplo de las cosas que debemos conocer para tener buenas relaciones con otros. La autora comenta un par de consejos y aplicaciones útiles dentro de la interacción humana. Muchas veces estamos acostumbrados a ser quienes tenemos que hablar para sostener una conversación; sin embargo, esta consta de dos. En este contexto, Baró (2015) nos comenta que si queremos ser más atractivos para los demás hay que saber escuchar por encima de todo. A pesar de lo anterior, no solamente hay que dejar que la otra persona hable hasta que se canse, sino que también hay que discernir los momentos en los que podemos expresarnos con moderación. Baró (2015) dice que se debe evaluar si algo realmente aporta a la plática y cuándo se puede comentarlo. Como mencioné, para crear una conversación se necesitan dos y para ello ambos deben de saber escuchar y aportar debidamente. Sabemos que el proceso de comunicación es complejo y requiere tiempo, pero, tomando en cuenta lo que Baró nos explica, podemos aligerarlo. Además, considero que esta información es relevante para fomentar relaciones interpersonales más saludables y duraderas. Pues mediante la aplicación de esta se van desarrollando habilidades fundamentales que permiten una mejor interacción en grupo. "
  },

  {
    id: 4,
    titulo: "Asertividad: Decir 'no' con respeto",
    subtitulo: "Estableciendo límites saludables en equipos",
    fecha: "5 Julio 2026",
    autor: "Lisseth Mejía",
    contenido: "Muchas veces confundimos asertividad con hostilidad o, por el contrario, sumisión. Expresar nuestras limitaciones de tiempo, especialmente en semanas pesadas como la 5 o la 11, de manera clara y empática nos permite cuidar nuestra salud mental y mantener la armonía dentro de nuestros equipos de trabajo."
  }
])
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50/40 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">

      <!-- Encabezado de la página -->
      <header class="text-center mb-16 mt-6">
        <span class="text-xs font-bold uppercase tracking-widest text-esen-orange bg-orange-100 px-3 py-1.5 rounded-full font-spartan">
          Expresión & Conexión
        </span>
        <h1 class="text-4xl sm:text-5xl font-coiny text-esen-blue mt-4 mb-3 drop-shadow-sm">
          Comunicación Personal
        </h1>
        <p class="text-gray-600 max-w-xl mx-auto text-base sm:text-lg font-google">
          Un espacio dedicado a reflexiones, apuntes y textos que exploran el arte de conectar de manera humana, honesta y asertiva.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-esen-orange to-esen-purple mx-auto mt-6 rounded-full"></div>
      </header>

      <!-- Renderizamos el componente pasándole los datos correspondientes -->
      <AppComunicacion :textos="listaDeTextos" />

    </div>
  </main>
</template>
