// Lista completa de preguntas
const allQuestions = [
  {
    question: "¿Quién es el autor de 'La República'?",
    options: ["Platón", "Aristóteles", "Sócrates", "Nietzsche"],
    answer: "Platón",
  },
  {
    question: "¿Qué filósofo es conocido por la frase 'Pienso, luego existo'?",
    options: ["Kant", "Descartes", "Hume", "Heidegger"],
    answer: "Descartes",
  },
  {
    question: "¿Cuál de los siguientes conceptos es fundamental en la filosofía de Nietzsche?",
    options: ["La voluntad de poder", "La dialéctica", "El imperativo categórico", "El utilitarismo"],
    answer: "La voluntad de poder",
  },
  {
    question: "¿Quién escribió 'El ser y el tiempo'?",
    options: ["Heidegger", "Sartre", "Kierkegaard", "Husserl"],
    answer: "Heidegger",
  },
  {
    question: "¿Cuál de los siguientes filósofos es conocido por su teoría del 'imperativo categórico'?",
    options: ["Kant", "Spinoza", "Nietzsche", "Hegel"],
    answer: "Kant",
  },
  {
    question: "¿Quién es considerado el fundador del estoicismo?",
    options: ["Zenón de Citio", "Epicuro", "Aristóteles", "Séneca"],
    answer: "Zenón de Citio",
  },
  {
    question: "¿Qué filósofo dijo 'El hombre es la medida de todas las cosas'?",
    options: ["Protágoras", "Sócrates", "Heráclito", "Parménides"],
    answer: "Protágoras",
  },
  {
    question: "¿Cuál es el tema principal de 'El contrato social' de Rousseau?",
    options: ["La legitimidad política", "La moralidad", "La percepción", "La naturaleza del conocimiento"],
    answer: "La legitimidad política",
  },
  {
    question: "¿Qué corriente filosófica se centra en la búsqueda del placer como principio moral?",
    options: ["Hedonismo", "Estoicismo", "Existencialismo", "Idealismo"],
    answer: "Hedonismo",
  },
  {
    question: "¿Quién es conocido como el 'filósofo de la duda metódica'?",
    options: ["Descartes", "Spinoza", "Kant", "Hume"],
    answer: "Descartes",
  },
  {
    question: "¿Qué filósofo griego es conocido por su teoría de las Ideas o Formas?",
    options: ["Platón", "Aristóteles", "Sócrates", "Epicuro"],
    answer: "Platón",
  },
  {
    question: "¿Cuál de los siguientes filósofos es conocido por su crítica a la razón pura?",
    options: ["Kant", "Hegel", "Schopenhauer", "Locke"],
    answer: "Kant",
  },
  {
    question: "¿Qué filósofo afirmó que 'El hombre está condenado a ser libre'?",
    options: ["Sartre", "Camus", "Heidegger", "Kierkegaard"],
    answer: "Sartre",
  },
  {
    question: "¿Qué obra de Platón describe una visión alegórica de la caverna?",
    options: ["La República", "Fedón", "Gorgias", "Las Leyes"],
    answer: "La República",
  },
  {
    question: "¿Qué filósofo es conocido por su concepto de 'Eterno Retorno'?",
    options: ["Nietzsche", "Spinoza", "Leibniz", "Foucault"],
    answer: "Nietzsche",
  }
];

// Función para obtener un subconjunto aleatorio de preguntas
export const getRandomQuestions = (numQuestions: number) => {
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numQuestions);
};
