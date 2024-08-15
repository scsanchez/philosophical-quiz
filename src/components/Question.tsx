import { useState, useEffect } from 'react';

interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  correctAnswer: string;
}

const Question: React.FC<QuestionProps> = ({ question, options, onAnswer, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'incorrect' | null>(null);
  const [isOptionDisabled, setIsOptionDisabled] = useState<boolean>(false);

  const handleAnswerOptionClick = (option: string) => {
    if (isOptionDisabled) return; // No hacer nada si las opciones están deshabilitadas

    setSelectedOption(option);
    setIsOptionDisabled(true); // Deshabilitar opciones después de seleccionar una

    if (option === correctAnswer) {
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('incorrect');
    }

    // Llamar a la función onAnswer después de mostrar el feedback
    setTimeout(() => onAnswer(option), 500);
  };

  // Resetear el estado de la opción seleccionada y el estado de la respuesta
  useEffect(() => {
    setSelectedOption(null);
    setAnswerStatus(null);
    setIsOptionDisabled(false); // Habilitar opciones al cambiar la pregunta
  }, [question]); // Dependencia en `question` para resetear en cada nueva pregunta

  return (
    <div className='question-section'>
      <h2>{question}</h2>
      <div className='options'>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(option)}
            className={`option-button ${selectedOption === option ? answerStatus : ''}`}
            disabled={isOptionDisabled}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;