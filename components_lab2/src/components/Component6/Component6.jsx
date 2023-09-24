import { useState } from "react";
import "./index.css";

const Component6 = () => {
  const [questions, setQuestions] = useState([
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Earth", "Jupiter"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest mammal on Earth?",
      options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const recordAnswer = (selectedOption) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(updatedUserAnswers);
  };

  const checkAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];

    if (userAnswer === currentQuestion.correctAnswer) {
      return "Correct!";
    } else {
      return (
        "Incorrect. The correct answer is: " + currentQuestion.correctAnswer
      );
    }
  };

  const progressBarWidth =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleSubmitQuiz = () => {
    setIsQuizCompleted(true);
  };

  return (
    <div className="quiz-card">
      <h1>Quiz Card</h1>
      <div className="question">
        <p>{questions[currentQuestionIndex].question}</p>
      </div>
      <div className="options">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <div
            key={index}
            className={`option ${
              userAnswers[currentQuestionIndex] === option ? "selected" : ""
            }`}
            onClick={() => recordAnswer(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="answer-feedback">
        {userAnswers[currentQuestionIndex] && <p>{checkAnswer()}</p>}
      </div>
      <div className="navigation">
        <button
          onClick={previousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        {currentQuestionIndex < questions.length - 1 && (
          <button onClick={nextQuestion}>Next</button>
        )}
        {currentQuestionIndex === questions.length - 1 && (
          <button onClick={handleSubmitQuiz}>Submit</button>
        )}
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>
      {isQuizCompleted && (
        <div className="quiz-completed">
          <p>Congratulations! You have completed the quiz.</p>
        </div>
      )}
    </div>
  );
};

export default Component6;
