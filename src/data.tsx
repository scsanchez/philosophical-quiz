// Lista completa de preguntas
const allQuestions = [
  {
    question: "¿Quién es considerado el padre de la filosofía occidental?",
    options: ["Sócrates", "Platón", "Aristóteles", "Pitágoras"],
    answer: "Sócrates",
  },
  {
    question: "¿Qué filósofo escribió 'La República'?",
    options: ["Aristóteles", "Platón", "Epicuro", "Séneca"],
    answer: "Platón",
  },
  {
    question: "¿Cuál es el concepto central en la teoría del utilitarismo?",
    options: ["El deber", "La felicidad", "La virtud", "La libertad"],
    answer: "La felicidad",
  },
  {
    question: "¿Qué filósofo es conocido por la máxima 'Pienso, luego existo'?",
    options: ["Descartes", "Hume", "Kant", "Nietzsche"],
    answer: "Descartes",
  },
  {
    question: "¿Qué filósofo defendió el concepto de la 'voluntad de poder'?",
    options: ["Nietzsche", "Hegel", "Marx", "Kierkegaard"],
    answer: "Nietzsche",
  },
  {
    question:
      "¿Qué filósofo griego es conocido por su teoría de las Ideas o Formas?",
    options: ["Aristóteles", "Platón", "Sócrates", "Epicuro"],
    answer: "Platón",
  },
  {
    question: "¿Cuál es el objetivo principal de la filosofía de la ciencia?",
    options: [
      "Describir la naturaleza del conocimiento científico",
      "Desarrollar teorías filosóficas",
      "Aplicar ética a la ciencia",
      "Explorar la historia de la ciencia",
    ],
    answer: "Describir la naturaleza del conocimiento científico",
  },
  {
    question: "¿Qué filósofo es famoso por su crítica a la razón pura?",
    options: ["Kant", "Hume", "Rousseau", "Locke"],
    answer: "Kant",
  },
  {
    question: "¿Cuál es el tema central en el 'Contrato Social' de Rousseau?",
    options: [
      "La soberanía del pueblo",
      "La ética de la virtud",
      "La teoría del conocimiento",
      "El existencialismo",
    ],
    answer: "La soberanía del pueblo",
  },
  {
    question:
      "¿Qué corriente filosófica se basa en la idea de que el conocimiento proviene de la experiencia?",
    options: ["Racionalismo", "Empirismo", "Idealismo", "Escepticismo"],
    answer: "Empirismo",
  },
  {
    question: "¿Quién es conocido por desarrollar la teoría del 'superhombre'?",
    options: ["Nietzsche", "Hegel", "Kant", "Marx"],
    answer: "Nietzsche",
  },
  {
    question: "¿Cuál es el concepto central de la teoría kantiana de la ética?",
    options: [
      "El imperativo categórico",
      "La felicidad",
      "La virtud",
      "La libertad",
    ],
    answer: "El imperativo categórico",
  },
  {
    question:
      "¿Qué filósofo es conocido por su teoría de la justicia como equidad?",
    options: ["Rawls", "Nozick", "Mill", "Hobbes"],
    answer: "Rawls",
  },
  {
    question: "¿Qué filósofo antiguo es famoso por su teoría de la eudaimonía?",
    options: ["Aristóteles", "Platón", "Epicuro", "Séneca"],
    answer: "Aristóteles",
  },
  {
    question: "¿Qué filósofo se considera el fundador del empirismo moderno?",
    options: ["John Locke", "David Hume", "George Berkeley", "René Descartes"],
    answer: "John Locke",
  },
  {
    question: "¿Qué obra es central en la filosofía de Friedrich Nietzsche?",
    options: [
      "Así habló Zaratustra",
      "Crítica de la razón pura",
      "El contrato social",
      "Meditaciones",
    ],
    answer: "Así habló Zaratustra",
  },
  {
    question:
      "¿Qué filósofo defendió la teoría de la 'sustancia' como el fundamento de la realidad?",
    options: ["Spinoza", "Leibniz", "Descartes", "Kant"],
    answer: "Spinoza",
  },
  {
    question: "¿Qué es el 'solipsismo' en filosofía?",
    options: [
      "La idea de que solo existe la propia mente",
      "La creencia en una realidad objetiva",
      "La teoría de que todos los sentidos son fiables",
      "La noción de que el conocimiento es universal",
    ],
    answer: "La idea de que solo existe la propia mente",
  },
  {
    question: "¿Cuál es la principal preocupación de la ética deontológica?",
    options: [
      "Las reglas y deberes",
      "Las consecuencias de las acciones",
      "El desarrollo del carácter",
      "La maximización de la felicidad",
    ],
    answer: "Las reglas y deberes",
  },
  {
    question:
      "¿Qué filósofo es conocido por su concepto de la 'voluntad libre'?",
    options: [
      "Søren Kierkegaard",
      "Jean-Paul Sartre",
      "Martin Heidegger",
      "Arthur Schopenhauer",
    ],
    answer: "Jean-Paul Sartre",
  },
  {
    question:
      "¿Qué filósofo es conocido por su teoría de la 'acción comunicativa'?",
    options: [
      "Jürgen Habermas",
      "Karl Marx",
      "Michel Foucault",
      "Immanuel Kant",
    ],
    answer: "Jürgen Habermas",
  },
  {
    question:
      "¿Qué corriente filosófica sostiene que la realidad es mental y no material?",
    options: ["Idealismo", "Realismo", "Materialismo", "Escepticismo"],
    answer: "Idealismo",
  },
  {
    question: "¿Qué es el 'nihilismo' en filosofía?",
    options: [
      "La creencia en la ausencia de significado inherente",
      "La doctrina de que todo tiene un propósito",
      "La afirmación de que la realidad es objetiva",
      "La idea de que el conocimiento es absoluto",
    ],
    answer: "La creencia en la ausencia de significado inherente",
  },
  {
    question:
      "¿Qué filósofo es conocido por desarrollar la teoría del 'poder' y el 'panóptico'?",
    options: [
      "Michel Foucault",
      "Friedrich Nietzsche",
      "Karl Marx",
      "Max Weber",
    ],
    answer: "Michel Foucault",
  },
  {
    question: "¿Qué obra filosófica es central en el pensamiento de Karl Marx?",
    options: [
      "El Capital",
      "El contrato social",
      "Crítica de la razón pura",
      "Meditaciones",
    ],
    answer: "El Capital",
  },
  {
    question:
      "¿Cuál es el tema principal en la 'Fenomenología del espíritu' de Hegel?",
    options: [
      "El desarrollo de la conciencia",
      "La ética de la virtud",
      "La crítica de la razón pura",
      "La teoría del contrato social",
    ],
    answer: "El desarrollo de la conciencia",
  },
  {
    question: "¿Qué filósofo es conocido por su teoría del 'vitalismo'?",
    options: [
      "Henri Bergson",
      "Arthur Schopenhauer",
      "Jean-Paul Sartre",
      "Martin Heidegger",
    ],
    answer: "Henri Bergson",
  },
  {
    question: "¿Qué es el 'existencialismo'?",
    options: [
      "Una filosofía que se centra en la libertad individual y la responsabilidad",
      "Una teoría que sostiene que la realidad es objetiva y medible",
      "Una doctrina que enfatiza la importancia de la virtud",
      "Una visión que rechaza la existencia de la libertad",
    ],
    answer:
      "Una filosofía que se centra en la libertad individual y la responsabilidad",
  },
  {
    question: "¿Qué filósofo escribió 'El ser y la nada'?",
    options: [
      "Jean-Paul Sartre",
      "Martin Heidegger",
      "Simone de Beauvoir",
      "Friedrich Nietzsche",
    ],
    answer: "Jean-Paul Sartre",
  },
  {
    question: "¿Cuál es el objetivo principal de la filosofía política?",
    options: [
      "Estudiar el poder y la organización de la sociedad",
      "Explorar la naturaleza del conocimiento",
      "Desarrollar teorías metafísicas",
      "Analizar la ética personal",
    ],
    answer: "Estudiar el poder y la organización de la sociedad",
  },
  {
    question: "¿Qué filósofo es conocido por su teoría del 'poder suave'?",
    options: ["Joseph Nye", "John Rawls", "Robert Nozick", "Jürgen Habermas"],
    answer: "Joseph Nye",
  },
  {
    question:
      "¿Qué filósofo es famoso por la teoría del 'imperativo categórico'?",
    options: ["Immanuel Kant", "John Stuart Mill", "Aristóteles", "David Hume"],
    answer: "Immanuel Kant",
  },
  {
    question:
      "¿Qué corriente filosófica se centra en la experiencia inmediata y la intuición como fuente de conocimiento?",
    options: ["Intuicionismo", "Empirismo", "Racionalismo", "Escepticismo"],
    answer: "Intuicionismo",
  },
  {
    question:
      "¿Qué filósofo es conocido por la teoría del 'fin de la historia'?",
    options: [
      "Francis Fukuyama",
      "Samuel Huntington",
      "Karl Marx",
      "Alexis de Tocqueville",
    ],
    answer: "Francis Fukuyama",
  },
  {
    question: "¿Qué es la 'epistemología'?",
    options: [
      "La teoría del conocimiento",
      "El estudio de la moralidad",
      "La teoría del ser",
      "El análisis del poder",
    ],
    answer: "La teoría del conocimiento",
  },
  {
    question: "¿Cuál es el enfoque principal de la 'ontología'?",
    options: [
      "El estudio del ser y la existencia",
      "La teoría del conocimiento",
      "La ética y la moral",
      "La política y el poder",
    ],
    answer: "El estudio del ser y la existencia",
  },
  {
    question: "¿Qué filósofo escribió 'La condición humana'?",
    options: [
      "Hannah Arendt",
      "Simone de Beauvoir",
      "Jean-Paul Sartre",
      "Martin Heidegger",
    ],
    answer: "Hannah Arendt",
  },
  {
    question:
      "¿Qué filósofo es conocido por la teoría del 'materialismo histórico'?",
    options: ["Karl Marx", "Friedrich Engels", "Antonio Gramsci", "Max Weber"],
    answer: "Karl Marx",
  },
  {
    question: "¿Qué es la 'ética' en filosofía?",
    options: [
      "El estudio de los principios morales",
      "La teoría del conocimiento",
      "El análisis del poder",
      "La teoría del ser",
    ],
    answer: "El estudio de los principios morales",
  },
  {
    question: "¿Qué filósofo desarrolló la teoría del 'deber' en ética?",
    options: ["Immanuel Kant", "John Stuart Mill", "Aristóteles", "David Hume"],
    answer: "Immanuel Kant",
  },
  {
    question: "¿Qué es el 'racionalismo'?",
    options: [
      "La creencia en la razón como fuente principal de conocimiento",
      "La teoría de que la experiencia es la única fuente de conocimiento",
      "La noción de que el conocimiento es incognoscible",
      "La afirmación de que todo es relativo",
    ],
    answer: "La creencia en la razón como fuente principal de conocimiento",
  },
  {
    question: "¿Qué filósofo es conocido por la teoría de la 'dialéctica'?",
    options: ["Hegel", "Marx", "Kant", "Nietzsche"],
    answer: "Hegel",
  },
  {
    question: "¿Qué filósofo defendió el 'liberalismo clásico'?",
    options: ["John Stuart Mill", "Karl Marx", "Friedrich Hayek", "John Rawls"],
    answer: "John Stuart Mill",
  },
  {
    question: "¿Qué es el 'realisme' en filosofía?",
    options: [
      "La creencia en una realidad objetiva e independiente del pensamiento",
      "La noción de que la realidad es subjetiva y dependiente del pensamiento",
      "La teoría de que la realidad es una ilusión",
      "La afirmación de que todo conocimiento es relativo",
    ],
    answer:
      "La creencia en una realidad objetiva e independiente del pensamiento",
  },
  {
    question: "¿Qué es el 'escepticismo' en filosofía?",
    options: [
      "La duda sobre la posibilidad de conocer la verdad absoluta",
      "La creencia en el conocimiento seguro y absoluto",
      "La afirmación de que todo es relativo",
      "La teoría de que la experiencia sensorial es fiable",
    ],
    answer: "La duda sobre la posibilidad de conocer la verdad absoluta",
  },
  {
    question:
      "¿Qué filósofo es conocido por su teoría de la 'justicia distributiva'?",
    options: ["Aristóteles", "John Rawls", "Karl Marx", "Robert Nozick"],
    answer: "Aristóteles",
  },
  {
    question: "¿Qué filósofo escribió 'Más allá del bien y del mal'?",
    options: [
      "Friedrich Nietzsche",
      "Arthur Schopenhauer",
      "Jean-Paul Sartre",
      "Martin Heidegger",
    ],
    answer: "Friedrich Nietzsche",
  },
  {
    question: "¿Qué es el 'determinismo' en filosofía?",
    options: [
      "La teoría de que todo evento está determinado por causas anteriores",
      "La creencia en la libertad absoluta de acción",
      "La afirmación de que todo es incierto",
      "La noción de que los eventos ocurren al azar",
    ],
    answer:
      "La teoría de que todo evento está determinado por causas anteriores",
  },
  {
    question:
      "¿Qué filósofo es conocido por la teoría del 'plano de la experiencia'?",
    options: ["Martin Heidegger", "Immanuel Kant", "Hegel", "Edmund Husserl"],
    answer: "Edmund Husserl",
  },
  {
    question: "¿Qué es el 'idealismo alemán'?",
    options: [
      "Una corriente filosófica que enfatiza la primacía de la mente en la construcción de la realidad",
      "Una teoría que sostiene que la realidad es objetiva e independiente de la mente",
      "Una doctrina que rechaza la existencia de la mente",
      "Una visión que afirma que todo es material",
    ],
    answer:
      "Una corriente filosófica que enfatiza la primacía de la mente en la construcción de la realidad",
  },
  {
    question:
      "¿Qué filósofo es conocido por su teoría del 'sujeto trascendental'?",
    options: [
      "Immanuel Kant",
      "Georg Wilhelm Friedrich Hegel",
      "Friedrich Nietzsche",
      "David Hume",
    ],
    answer: "Immanuel Kant",
  },
  {
    question:
      "¿Qué obra de Nietzsche es conocida por su declaración de que 'Dios ha muerto'?",
    options: [
      "Así habló Zaratustra",
      "Más allá del bien y del mal",
      "El anticristo",
      "El nacimiento de la tragedia",
    ],
    answer: "Así habló Zaratustra",
  },
  {
    question:
      "¿Qué filósofo es conocido por su trabajo en la teoría del 'constructivismo social'?",
    options: ["Lev Vygotsky", "Jean Piaget", "Erik Erikson", "Sigmund Freud"],
    answer: "Lev Vygotsky",
  },
  {
    question: "¿Qué es el 'positivismo' en filosofía?",
    options: [
      "Una corriente que sostiene que el conocimiento auténtico es el que se basa en la experiencia y los hechos observables",
      "Una teoría que defiende que el conocimiento es subjetivo y dependiente de la mente",
      "Una visión que niega la existencia de hechos observables",
      "Una doctrina que afirma que todo conocimiento es relativo",
    ],
    answer:
      "Una corriente que sostiene que el conocimiento auténtico es el que se basa en la experiencia y los hechos observables",
  },
  {
    question:
      "¿Qué filósofo es conocido por desarrollar la teoría del 'espectro' en filosofía de la historia?",
    options: [
      "Georg Wilhelm Friedrich Hegel",
      "Karl Marx",
      "Friedrich Nietzsche",
      "Max Weber",
    ],
    answer: "Georg Wilhelm Friedrich Hegel",
  },
  {
    question: "¿Qué es la 'filosofía analítica'?",
    options: [
      "Una corriente que se enfoca en el análisis lógico y lingüístico de los problemas filosóficos",
      "Una teoría que se centra en la experiencia sensorial como fuente de conocimiento",
      "Una doctrina que enfatiza la intuición y la experiencia personal",
      "Una visión que rechaza el análisis lógico en favor de la especulación metafísica",
    ],
    answer:
      "Una corriente que se enfoca en el análisis lógico y lingüístico de los problemas filosóficos",
  },
  {
    question: "¿Qué es el 'realismo crítico' en filosofía?",
    options: [
      "Una teoría que sostiene que podemos conocer la realidad, pero siempre a través de nuestras percepciones e interpretaciones",
      "Una doctrina que afirma que la realidad es completamente independiente de nuestra percepción",
      "Una visión que niega la posibilidad de conocer la realidad",
      "Una corriente que sostiene que el conocimiento es puramente subjetivo",
    ],
    answer:
      "Una teoría que sostiene que podemos conocer la realidad, pero siempre a través de nuestras percepciones e interpretaciones",
  },
  {
    question: "¿Qué filósofo escribió 'La crítica de la razón práctica'?",
    options: [
      "Immanuel Kant",
      "Georg Wilhelm Friedrich Hegel",
      "Arthur Schopenhauer",
      "David Hume",
    ],
    answer: "Immanuel Kant",
  },
  {
    question: "¿Qué es la 'filosofía del lenguaje'?",
    options: [
      "El estudio de cómo el lenguaje influye en nuestro pensamiento y percepción del mundo",
      "La teoría de que el lenguaje no tiene relación con el pensamiento",
      "El análisis del lenguaje desde una perspectiva meramente gramatical",
      "La doctrina que afirma que el lenguaje es irrelevante para la filosofía",
    ],
    answer:
      "El estudio de cómo el lenguaje influye en nuestro pensamiento y percepción del mundo",
  },
  {
    question:
      "¿Qué filósofo es conocido por desarrollar la teoría del 'circulo hermenéutico'?",
    options: [
      "Hans-Georg Gadamer",
      "Martin Heidegger",
      "Friedrich Nietzsche",
      "Jean-Paul Sartre",
    ],
    answer: "Hans-Georg Gadamer",
  },
  {
    question: "¿Qué es el 'esencialismo' en filosofía?",
    options: [
      "La creencia en que los objetos tienen una esencia fija y determinante",
      "La teoría de que los objetos no tienen una esencia definida",
      "La afirmación de que todo conocimiento es relativo",
      "La noción de que la realidad es una construcción social",
    ],
    answer:
      "La creencia en que los objetos tienen una esencia fija y determinante",
  },
  {
    question:
      "¿Qué filósofo es conocido por su teoría del 'constructivismo' en la epistemología?",
    options: ["Jean Piaget", "Lev Vygotsky", "Erik Erikson", "Sigmund Freud"],
    answer: "Jean Piaget",
  },
  {
    question: "¿Qué es el 'neoplatonismo'?",
    options: [
      "Una corriente filosófica que mezcla la filosofía de Platón con elementos místicos y religiosos",
      "Una teoría que rechaza la filosofía de Platón",
      "Una doctrina que enfatiza la experiencia sensorial como la fuente del conocimiento",
      "Una visión que afirma que la realidad es puramente material",
    ],
    answer:
      "Una corriente filosófica que mezcla la filosofía de Platón con elementos místicos y religiosos",
  },
  {
    question:
      "¿Qué filósofo es conocido por desarrollar la teoría de la 'justicia procedimental'?",
    options: ["John Rawls", "Robert Nozick", "Karl Marx", "Aristóteles"],
    answer: "John Rawls",
  },
  {
    question: "¿Qué es el 'relativismo' en filosofía?",
    options: [
      "La idea de que la verdad y el conocimiento son relativos a cada individuo o cultura",
      "La teoría de que existe una verdad universal y objetiva",
      "La noción de que todo conocimiento es absoluto y fijo",
      "La afirmación de que el conocimiento es completamente subjetivo",
    ],
    answer:
      "La idea de que la verdad y el conocimiento son relativos a cada individuo o cultura",
  },
  {
    question:
      "¿Qué filósofo es conocido por su teoría del 'constructivismo social'?",
    options: ["Lev Vygotsky", "Jean Piaget", "Erik Erikson", "Sigmund Freud"],
    answer: "Lev Vygotsky",
  },
  {
    question: "¿Qué obra es conocida por la teoría del 'derecho natural'?",
    options: [
      "Los diálogos de Platón",
      "El contrato social de Rousseau",
      "El espíritu de las leyes de Montesquieu",
      "El derecho natural de Grocio",
    ],
    answer: "El derecho natural de Grocio",
  },
  {
    question: "¿Qué es el 'deontologismo' en ética?",
    options: [
      "Una teoría ética que sostiene que el deber moral es el criterio principal para la acción correcta",
      "Una doctrina que se enfoca en las consecuencias de las acciones",
      "Una visión que rechaza la idea de deberes morales universales",
      "La creencia de que la moralidad es subjetiva y culturalmente relativa",
    ],
    answer:
      "Una teoría ética que sostiene que el deber moral es el criterio principal para la acción correcta",
  },
  {
    question:
      "¿Qué filósofo es conocido por su teoría de la 'afirmación de la vida'?",
    options: [
      "Friedrich Nietzsche",
      "Arthur Schopenhauer",
      "Jean-Paul Sartre",
      "Martin Heidegger",
    ],
    answer: "Friedrich Nietzsche",
  },
  {
    question: "¿Qué es el 'relativismo moral'?",
    options: [
      "La idea de que los juicios morales son relativos a las normas de cada cultura",
      "La creencia en la existencia de normas morales universales y objetivas",
      "La teoría de que la moralidad es un constructo individual",
      "La afirmación de que no existen principios morales",
    ],
    answer:
      "La idea de que los juicios morales son relativos a las normas de cada cultura",
  },
  {
    question:
      "¿Qué filósofo es conocido por su teoría del 'determinismo radical'?",
    options: [
      "Baruch Spinoza",
      "René Descartes",
      "Jean-Paul Sartre",
      "David Hume",
    ],
    answer: "Baruch Spinoza",
  },
  {
    question: "¿Qué es la 'hermenéutica' en filosofía?",
    options: [
      "El estudio de la interpretación de los textos y significados",
      "La teoría de la existencia y el ser",
      "El análisis del conocimiento y la epistemología",
      "La doctrina de los principios morales",
    ],
    answer: "El estudio de la interpretación de los textos y significados",
  },
  {
    question:
      "¿Qué filósofo es conocido por desarrollar la teoría de la 'acción comunicativa'?",
    options: [
      "Jürgen Habermas",
      "Michel Foucault",
      "Karl Marx",
      "Friedrich Nietzsche",
    ],
    answer: "Jürgen Habermas",
  },
  {
    question: "¿Qué es el 'cognitivismo' en la filosofía de la mente?",
    options: [
      "La creencia de que los procesos mentales pueden ser explicados como procesos computacionales",
      "La teoría de que la mente es una entidad completamente separada del cuerpo",
      "La noción de que el conocimiento es innato y no aprendido",
      "La afirmación de que la mente no puede conocer la realidad",
    ],
    answer:
      "La creencia de que los procesos mentales pueden ser explicados como procesos computacionales",
  },
  {
    question:
      "¿Qué filósofo es conocido por su teoría del 'más allá del bien y del mal'?",
    options: [
      "Friedrich Nietzsche",
      "Arthur Schopenhauer",
      "Jean-Paul Sartre",
      "Martin Heidegger",
    ],
    answer: "Friedrich Nietzsche",
  },
  {
    question:
      "¿Qué obra de Platón es conocida por su diálogo sobre la justicia?",
    options: ["La República", "El banquete", "Fedón", "Menón"],
    answer: "La República",
  },
  {
    question:
      "¿Qué filósofo es conocido por desarrollar la teoría del 'poder suave'?",
    options: ["Joseph Nye", "John Rawls", "Robert Nozick", "Jürgen Habermas"],
    answer: "Joseph Nye",
  },
  {
    question: "¿Qué es el 'realismo metafísico'?",
    options: [
      "La teoría que sostiene que la realidad existe independientemente de nuestra percepción o concepciones",
      "La doctrina que niega la existencia de una realidad objetiva",
      "La creencia en que la realidad es completamente subjetiva",
      "La noción de que la realidad es una construcción social",
    ],
    answer:
      "La teoría que sostiene que la realidad existe independientemente de nuestra percepción o concepciones",
  },
  {
    question:
      "¿Qué filósofo es conocido por desarrollar la teoría de la 'ontología social'?",
    options: [
      "John Searle",
      "Michel Foucault",
      "Georg Wilhelm Friedrich Hegel",
      "Martin Heidegger",
    ],
    answer: "John Searle",
  },
  {
    question: "¿Qué es la 'teoría crítica' en filosofía?",
    options: [
      "Una corriente que busca criticar y transformar la sociedad mediante el análisis de las estructuras sociales y políticas",
      "Una teoría que defiende el status quo y la estabilidad social",
      "Una doctrina que rechaza la crítica y el análisis social",
      "La afirmación de que la crítica no tiene valor en la filosofía",
    ],
    answer:
      "Una corriente que busca criticar y transformar la sociedad mediante el análisis de las estructuras sociales y políticas",
  },
  {
    question:
      "¿Qué filósofo es conocido por desarrollar la teoría de la 'pragmática' en el estudio del lenguaje?",
    options: [
      "Charles Sanders Peirce",
      "Wilfrid Sellars",
      "Ludwig Wittgenstein",
      "Saul Kripke",
    ],
    answer: "Charles Sanders Peirce",
  },
  {
    question: "¿Qué es el 'filosofismo'?",
    options: [
      "Una corriente filosófica que enfatiza la especulación y el pensamiento abstracto por encima de la práctica y la experiencia",
      "Una teoría que afirma que la filosofía debe ser aplicada a la práctica diaria",
      "La doctrina que rechaza la especulación en favor de la observación empírica",
      "La visión que afirma que la filosofía no tiene valor en la vida cotidiana",
    ],
    answer:
      "Una corriente filosófica que enfatiza la especulación y el pensamiento abstracto por encima de la práctica y la experiencia",
  },
  {
    question: "¿Qué filósofo escribió 'El diálogo sobre el espíritu'?",
    options: ["Giambattista Vico", "Hegel", "Kant", "Husserl"],
    answer: "Giambattista Vico",
  },
  {
    question: "¿Qué es el 'existencialismo'?",
    options: [
      "Una filosofía que se enfoca en la libertad y responsabilidad del individuo",
      "Una teoría que niega la libertad individual",
      "Una doctrina que afirma que el conocimiento es universal",
      "Una visión que rechaza el análisis del sentido de la vida",
    ],
    answer:
      "Una filosofía que se enfoca en la libertad y responsabilidad del individuo",
  },
  {
    question:
      "¿Qué filósofo es conocido por su teoría del 'entendimiento común'?",
    options: [
      "G.E. Moore",
      "Bertrand Russell",
      "Ludwig Wittgenstein",
      "Saul Kripke",
    ],
    answer: "Ludwig Wittgenstein",
  },
  {
    question: "¿Qué es el 'materialismo dialectico'?",
    options: [
      "Una teoría desarrollada por Karl Marx y Friedrich Engels que combina el materialismo con la dialéctica hegeliana",
      "Una visión que rechaza la dialéctica en favor del empirismo",
      "Una doctrina que niega la existencia del materialismo",
      "La teoría que afirma que todo es relativo",
    ],
    answer:
      "Una teoría desarrollada por Karl Marx y Friedrich Engels que combina el materialismo con la dialéctica hegeliana",
  },
  {
    question: "¿Qué filósofo escribió 'El contrato social'?",
    options: [
      "Jean-Jacques Rousseau",
      "John Stuart Mill",
      "Thomas Hobbes",
      "Karl Marx",
    ],
    answer: "Jean-Jacques Rousseau",
  },
  {
    question: "¿Qué es la 'filosofía de la mente'?",
    options: [
      "El estudio de la naturaleza de la mente, la conciencia y sus relaciones con el cuerpo",
      "La teoría que se enfoca en los principios morales y éticos",
      "El análisis del lenguaje y su influencia en el pensamiento",
      "El estudio de las estructuras sociales y políticas",
    ],
    answer:
      "El estudio de la naturaleza de la mente, la conciencia y sus relaciones con el cuerpo",
  },
  {
    question:
      "¿Qué filósofo es conocido por desarrollar la teoría de la 'justicia como equidad'?",
    options: ["John Rawls", "Robert Nozick", "Karl Marx", "Aristóteles"],
    answer: "John Rawls",
  },
  {
    question: "¿Qué es la 'metafísica'?",
    options: [
      "La rama de la filosofía que estudia la naturaleza de la realidad y la existencia",
      "La teoría que se enfoca en el análisis lógico y lingüístico",
      "La doctrina que defiende el empirismo como la única fuente de conocimiento",
      "La visión que sostiene que todo conocimiento es relativo",
    ],
    answer:
      "La rama de la filosofía que estudia la naturaleza de la realidad y la existencia",
  },
  {
    question:
      "¿Qué filósofo es conocido por desarrollar la teoría del 'imperialismo'?",
    options: ["Joseph Conrad", "John Hobson", "Vladimir Lenin", "Karl Marx"],
    answer: "John Hobson",
  },
  {
    question: "¿Qué es la 'teoría de la acción comunicativa'?",
    options: [
      "Una teoría desarrollada por Jürgen Habermas que se centra en cómo la comunicación puede contribuir a la racionalidad y la democracia",
      "Una doctrina que defiende que la comunicación es irrelevante en la filosofía",
      "Una visión que niega la importancia del lenguaje en la acción social",
      "Una teoría que enfatiza la comunicación no verbal en la interacción social",
    ],
    answer:
      "Una teoría desarrollada por Jürgen Habermas que se centra en cómo la comunicación puede contribuir a la racionalidad y la democracia",
  },
  {
    question:
      "¿Qué filósofo es conocido por su teoría del 'constructivismo' en la epistemología?",
    options: ["Jean Piaget", "Lev Vygotsky", "Erik Erikson", "Sigmund Freud"],
    answer: "Jean Piaget",
  },
];

// Función para obtener un subconjunto aleatorio de preguntas
export const getRandomQuestions = (numQuestions: number) => {
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numQuestions);
};
