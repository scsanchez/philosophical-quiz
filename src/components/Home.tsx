import { useState } from 'react';

interface HomeProps {
  onStartQuiz: (numQuestions: number) => void;
}

const Home: React.FC<HomeProps> = ({ onStartQuiz }) => {
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
              onChange={(e) => setNumQuestions(Number(e.target.value))}
            />
            <button onClick={handleStartQuiz}>Iniciar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;