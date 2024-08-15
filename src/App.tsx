import { useState } from 'react';
import Home from './components/Home.jsx';
import Quiz from './components/Quiz.jsx';
import './App.css';

const App = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [numQuestions, setNumQuestions] = useState(5);

  const startQuiz = (questionsCount:number) => {
    setNumQuestions(questionsCount);
    setIsQuizStarted(true);
  };

  const finishQuiz = (score:number, totalQuestions:number) => {
    console.log(`Quiz terminado. Puntaje final: ${score} de ${totalQuestions}`);
    // Aquí puedes manejar la lógica al finalizar el quiz si es necesario
  };

  const restartQuiz = () => {
    setIsQuizStarted(false); // Regresa a la pantalla de inicio
  };

  return (
    <div className='App'>
      {isQuizStarted ? (
        <Quiz
          numQuestions={numQuestions}
          onFinish={finishQuiz}
          onRestart={restartQuiz}
        />
      ) : (
        <Home onStartQuiz={startQuiz} />
      )}
    </div>
  );
};

export default App;