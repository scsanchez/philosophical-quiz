import React, { useState, useEffect } from 'react';
import { getRandomQuestions } from '../data';
import Question from './Question';
import Result from './Result';

const Quiz = ({ numQuestions, onFinish, onRestart }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const selectedQuestions = getRandomQuestions(numQuestions);
    setQuestions(selectedQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  }, [numQuestions]);

  const handleAnswerOptionClick = (selectedOption) => {
    const nextQuestion = currentQuestion + 1;
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
      onFinish(score, numQuestions);
    }
  };

  const handleRestart = () => {
    onRestart(); // Llama a la función para reiniciar el quiz
  };

  if (questions.length === 0) return <div>Cargando...</div>;

  return (
    <div className='quiz'>
      {showResult ? (
        <Result score={score} totalQuestions={numQuestions} onRestart={handleRestart} />
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswerOptionClick}
          correctAnswer={questions[currentQuestion].answer}
        />
      )}
    </div>
  );
};

export default Quiz;
