import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctOption) {
      setScore(score + 1);
    }

    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleQuizReset = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowResult(false);
  };

  const renderQuizResult = () => {
    return (
      <div>
        <h2>Quiz Result</h2>
        <p>Your score: {score} out of {questions.length}</p>
        <button onClick={handleQuizReset}>Retry Quiz</button>
      </div>
    );
  };

  if (showResult) {
    return renderQuizResult();
  }

  if (currentQuestion >= questions.length) {
    setShowResult(true);
    return null;
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div>
      <h2>{currentQuestionData.question}</h2>
      <div>
        {currentQuestionData.options.map((option) => (
          <div key={option}>
            <input
              type="radio"
              id={option}
              name="quiz-option"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  );
};

export default Quiz;
