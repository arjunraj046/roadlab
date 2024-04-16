import React from "react";
import { useState } from "react";
import QuizBox from "../component/QuizBox";

const Quiz = ({ page, setPage, result, setResult }) => {
  const [questions, setQuestions] = useState([
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "Who wrote the play 'Hamlet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Au", "Ag", "Ge"],
      correctAnswer: "Au",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Venus", "Jupiter", "Mars"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Golgi apparatus", "Mitochondria", "Ribosome"],
      correctAnswer: "Mitochondria",
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the chemical formula for water?",
      options: ["CO2", "H2O", "NaCl", "CH4"],
      correctAnswer: "H2O",
    },
    {
      question: "Who is the author of 'To Kill a Mockingbird'?",
      options: ["J.K. Rowling", "Harper Lee", "George Orwell", "Mark Twain"],
      correctAnswer: "Harper Lee",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Euro", "Yen", "Dollar"],
      correctAnswer: "Yen",
    },
  ]);

  const [currentQuestion, SetCurrentQuestion] = useState(0);
  console.log("current question is ", currentQuestion);
  console.log("result currect answer ", result);

  return (
    <>
      <div  className="flex w-screen h-screen justify-center	items-center">
        {
          <QuizBox
            question={questions[currentQuestion]}
            currentQuestion={currentQuestion}
            SetCurrentQuestion={SetCurrentQuestion}
            setPage={setPage}
            result={result}
            setResult={setResult}
          />
        }
      </div>
    </>
  );
};

export default Quiz;
