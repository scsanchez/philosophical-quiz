import React, { useState } from 'react';

const Home = ({ onStartQuiz }) => {
  const [showModal, setShowModal] = useState(false);
  const [numQuestions, setNumQuestions] = useState(5); // Valor por defecto

  const handleStartQuiz = () => {
    onStartQuiz(numQuestions);
    setShowModal(false);
  };

  return (
    <div className='home'>
      <h1>Bienvenido al Quiz Filosófico</h1>
      <button onClick={() => setShowModal(true)}>Comenzar Quiz</button>

      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Selecciona la cantidad de preguntas</h2>
            <input
              type='number'
              min='1'
              max='15' // Ajusta el rango según sea necesario
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
            />
            <button onClick={handleStartQuiz}>Iniciar Quiz</button>
            <button onClick={() => setShowModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
