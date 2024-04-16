import React, { useState } from "react";

const QuizBox = ({ question, currentQuestion, SetCurrentQuestion, setPage, result, setResult }) => {
  const [answer, setAnswer] = useState(false);
    console.log("Answer",answer);
  const selectTheAnswer = (e) => {
    console.log(e.target.defaultValue, " == ", question.correctAnswer);

    if (e.target.defaultValue == question.correctAnswer) {
      console.log("Correct answer");
      setAnswer(true);
    }else{
      setAnswer(false);

    }
  };

  const jumpNextQuestion = () => {
    // console.log("current question + 1 is", currentQuestion++);
    SetCurrentQuestion(currentQuestion++);
    if (answer) {
      setResult(result + 1);
      setAnswer(false);
    }
  };

  const finishQuize = () => {
    setPage(3);
  };

  return (
    <div className="w-96 h-96 bg-zinc-300 p-2 ">
      <h1>This is Your {currentQuestion + 1} Question</h1>
      <br />
      <h2> {question.question}</h2>
      <form>
        <div className="flex  items-center ">
          <input className="flex" type="radio" name="options" value={question.options[0]} onChange={selectTheAnswer} />
          <h5 className="flex ml-1">{question.options[0]}</h5>
        </div>
        <div className="flex  items-center ">
          <input type="radio" name="options" value={question.options[1]} onChange={selectTheAnswer} />
          <h5 className="flex ml-1">{question.options[1]}</h5>
        </div>
        <div className="flex  items-center ">
          <input type="radio" name="options" value={question.options[2]} onChange={selectTheAnswer} />
          <h5 className="flex ml-1">{question.options[2]}</h5>
        </div>
        <div className="flex  items-center ">
          <input type="radio" name="options" value={question.options[3]} onChange={selectTheAnswer} />
          <h5 className="flex ml-1">{question.options[3]}</h5>
        </div>
        <br />
        <p>Check the right one and go for the next question</p>
      </form>
      <div className=" m-3 flex justify-center items-center  w-full ">
        {currentQuestion < 8 ? (
          <button
            className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            onClick={jumpNextQuestion}
          >
            {" "}
            Next{" "}
          </button>
        ) : (
          <button
            className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            onClick={finishQuize}
          >
            {" "}
            Done{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizBox;
