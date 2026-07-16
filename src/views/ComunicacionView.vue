<script setup>
import { ref } from 'vue'
import AppComunicacion from '@/components/AppComunicacion.vue'

// La fuente de datos reside en la vista. En el futuro podrías traer esto de una API o store de Pinia.
const listaDeTextos = ref([
   {
    id: 1,
    titulo: "¿Realmente importa lo que digo?",
    subtitulo: "Reflexiones sobre lo que hablamos y cómo nos comunicamos",
    fecha: "2 Julio 2026",
    autor: "Ariel Cortez",
    contenido: `
      El capítulo “¿A quién le interesa lo mío?” de Baró (2015) aborda un error frecuente en nuestra vida cotidiana: hablar sin considerar si lo expresado le resulta relevante al oyente. El texto inicia con una situación común. Baró menciona que, en muchas ocasiones, sentimos gran alegría por contar una experiencia; sin embargo, al hablar con la otra persona, percibimos que no muestra interés por lo que decimos (p. 124). Ante esto, Baró aconseja reflexionar antes de intervenir en una conversación para cuestionarnos si lo que diremos aportará valor a la plática (p. 124).

      Asimismo, explica que es posible identificar si al oyente le interesa el tema mediante su lenguaje corporal. Por ejemplo, si se distrae con facilidad o no asiente con la cabeza para seguir hablando, es probable que no le resulte relevante. Observar estas señales permite actuar con empatía y evitar incomodar.

      En lo personal, este capítulo me ha ayudado a mejorar mis relaciones en la universidad. Antes solía hablar de mis experiencias sin considerar si estaban interesados en escucharlas. Como consecuencia, algunas personas se alejaban. Sin embargo, desde que aplico los consejos de Baró, he aprendido a prestar más atención a las reacciones de quienes me rodean, lo que ha favorecido conversaciones más agradables.

      Para cerrar, les pregunto: ¿ustedes saben si lo que hablan le importa a los demás?
    `
  },
  {
    id: 2,
    titulo: "Los limites",
    subtitulo: "Estableciendo límites saludables",
    fecha: "2 Julio 2026",
    autor: "Venus Minerva",
    contenido: `
      ¿Conoces la palabra "límite"? Probablemente la has escuchado en muchas partes, hasta en las matemáticas. Este término puede ser definido como una frontera, una línea que evitas cruzar o la gota que falta para derramar el vaso. "Saber decir que no" es el capítulo que leí y, aunque suena como algo sencillo, no siempre somos capaces de pronunciar este simple monosílabo. Por eso, hoy te mostraré por qué deberías poner altos y cómo puedes hacerlo.

      Según Baró (2015), si tomas proyectos carentes de valor, desgastas energía, tiempo, prestigio y la posibilidad de enfocarte en otra cosa (p. 151). Usualmente, aceptamos para eludir un conflicto, pero el problema existe desde que decidimos no priorizarnos. Si mantienes una agenda saturada, la calidad de lo que haces se verá afectada y tu salud también.

      Por otro lado, si decides decir que no en el tiempo adecuado y de forma educada, eres fiel a ti mismo, mantienes relaciones sanas y potencias tu organización. Una herramienta para lograrlo es crear una lista de límites que te gustaría aplicar. Baró (2015) dice que, si los practicas en tu mente y en voz alta, lograrás expresarlos con naturalidad y confianza en el momento oportuno (p.149).

      Recuerda que saber decir que no te ayudará para la vida. En la universidad no solo vas a aprender sobre tu carrera, sino que también a tomar decisiones acertadas, tanto en el área laboral como en el día a día.
    `
     },

  {
    id: 3,
    titulo: "Hablar menos ",
    subtitulo: "Conocer cuando hablar y cuando callar",
    fecha: "2 Julio 2026",
    autor: "Abner Otoniel",
    contenido: `
      Alguien dijo una vez que la mejor arma es el silencio y eso es lo que Baró profundiza dentro del capítulo "¿A quién le interesa lo mío?". Este texto es un claro ejemplo de las cosas que debemos conocer para tener buenas relaciones con otros. La autora comenta un par de consejos y aplicaciones útiles dentro de la interacción humana.

      Muchas veces estamos acostumbrados a ser quienes tenemos que hablar para sostener una conversación; sin embargo, esta consta de dos. En este contexto, Baró (2015) nos comenta que si queremos ser más atractivos para los demás hay que saber escuchar por encima de todo.

      A pesar de lo anterior, no solamente hay que dejar que la otra persona hable hasta que se canse, sino que también hay que discernir los momentos en los que podemos expresarnos con moderación. Baró (2015) dice que se debe evaluar si algo realmente aporta a la plática y cuándo se puede comentarlo. Como mencioné, para crear una conversación se necesitan dos y para ello ambos deben de saber escuchar y aportar debidamente.

      Sabemos que el proceso de comunicación es complejo y requiere tiempo, pero, tomando en cuenta lo que Baró nos explica, podemos aligerarlo. Además, considero que esta información es relevante para fomentar relaciones interpersonales más saludables y duraderas. Pues mediante la aplicación de esta se van desarrollando habilidades fundamentales que permiten una mejor interacción en grupo.
    `
  },

  {
    id: 4,
    titulo: "La verdadera importancia del silencio",
    subtitulo: "El silencio puede decir más que mil palabras",
    fecha: "2 Julio 2026",
    autor: "Lisseth Mejía",
    contenido: `
      A veces llegamos a pensar que la ausencia de palabras no transmite nada en conversaciones. No obstante, el capítulo "El significado del silencio" de Teresa Baró (2015) afirma que, en realidad, comunica mucho más de lo que parece. Por otro lado, si nos piden que pensemos en alguien inseguro o débil, quizás se nos venga a la mente una persona callada. Sin embargo, no siempre es así.

      El silencio también caracteriza a personas sabias y con una alta inteligencia social, ya que son discretas y no necesitan de muchas palabras para transmitir seguridad. Adicionalmente, viene acompañado del lenguaje no verbal y al usarlo de forma consciente podemos comunicar lo que deseamos (Baró, 2015, p. 146).

      La idea que comparte Baró (2015) es que los humanos tenemos la mala costumbre de hablar sin intención y propósito (p. 145). Lo podemos ver reflejado al establecer una conversación con algún compañero del campus: solemos cometer el error de compartir información de más, datos irrelevantes para ese momento. Tener estas palabras presentes nos ayuda a evitar situaciones incómodas, como conflictos o discusiones. Asimismo, guardar silencio muestra respeto cuando escuchamos a otras personas.

      El texto de Teresa Baró es de gran utilidad —especialmente para estudiantes universitarios— porque es ahí donde hacen contactos y amistades duraderas. En 1.1 2 conclusión, guardar silencio, leerlo en las demás personas y saber en qué momento usarlo es esencial en una comunicación exitosa.
    `
    },
    {
    id: 5,
    titulo: "El arte de insultar",
    subtitulo: "Reflexiones sobre la comunicación vulgar y los insultos",
    fecha: "2 Julio 2026",
    autor: "José Kuri",
    contenido: `
      Todos hemos perdido la paciencia hasta el punto de insultar a alguien. En consecuencia, recibimos un regaño, pero ¿Qué tiene de malo expresarse libremente? Teresa Baró busca responder esta pregunta en el capítulo "La comunicación vulgar y los insultos".

      Para la autora no tiene nada de malo insultar. Baró (2015) afirma que en situaciones como liberar tensión, defensa propia e incluso dar contundencia a un mensaje, es justificable el uso de groserías (p. 175). Está claro que después de un parcial nos queremos desahogar y quitarnos el "filtro de estudiante" que portamos siempre.

      Aunque no todo caso es justificable: por ejemplo, menospreciar, desacreditar e incluso imponer autoridad. Consecuencias de un mal control de la ira o simplemente pobreza a la hora de encontrar verdaderos argumentos. ¿Te recuerda algún trabajo grupal? Por ello debemos aprender a manejar nuestras emociones, hacernos entender y escuchar a los demás, pues te aseguro, no es algo exclusivo de la escuela.

      Pero no se limita a las palabras, ignorar, provocar o ser arrogante son insultos no verbales que fragilizan nuestras relaciones (p.176). De acuerdo con Baró (2015), esto es relevante porque nosotros ni lo notamos. Quizás creas que al contenerte de decirle a tu compañero que "debería retirarse de este mundo" estás siendo educado; cuando tu expresión lo dice todo.

      Para Baró (2015), somos libres de decir lo que queramos, pero depende de nosotros cuidar nuestras relaciones personales. Sobre todo, en esta nueva etapa, donde conocerás amigos para el resto de tu vida (p. 177).
    `
    },
])
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50/40 py-16 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-4xl mx-auto">
      <!-- Encabezado de la página -->
      <header class="text-center mb-16 mt-6">
        <h1 class="text-4xl sm:text-5xl font-coiny text-esen-blue mt-4 mb-3 drop-shadow-sm">
          Textos de comunicación personal
        </h1>
        <p class="text-gray-600 max-w-xl mx-auto text-base sm:text-lg font-google">
          Un espacio dedicado a reflexiones sobre las buenas prácticas de comunicación a partir de pequeños capítulos leídos del libro Manual de la comunicación personal de éxito de Teresa Baró (2015).
        </p>
        <div
          class="w-24 h-1 bg-gradient-to-r from-esen-orange to-esen-purple mx-auto mt-6 rounded-full"
        ></div>
      </header>

      <!-- Renderizamos el componente pasándole los datos correspondientes -->
      <AppComunicacion :textos="listaDeTextos" />
    </div>
  </main>
</template>
