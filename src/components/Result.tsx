import React from 'react';

interface ResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className='result'>
      <h1>Resultado del Quiz</h1>
      <p>
        Has respondido correctamente {score} de {totalQuestions} preguntas.
      </p>
      <button onClick={onRestart}>Reiniciar Quiz</button>
    </div>
  );
};

export default Result;
