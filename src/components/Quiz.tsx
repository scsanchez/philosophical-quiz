import { useState, useEffect } from 'react';
import { getRandomQuestions } from '../data.tsx';
import Question from './Question';
import Result from './Result.tsx';

interface QuizProps {
  numQuestions: number;
  onFinish: (score: number, totalQuestions: number) => void;
  onRestart: () => void;
}

interface QuestionType {
  question: string;
  options: string[];
  answer: string;
}

const Quiz: React.FC<QuizProps> = ({ numQuestions, onFinish, onRestart }) => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
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

  const handleAnswerOptionClick = (selectedOption: string) => {
    const nextQuestion = currentQuestion + 1;
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
      onFinish(score, questions.length);
    }
  };

  const handleRestart = () => {
    onRestart();
  };

  if (questions.length === 0) return <div>Loading...</div>;

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