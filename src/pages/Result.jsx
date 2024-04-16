import React from "react";

const Result = ({ page, setPage, result }) => {
  return (
    <div className="flex w-screen h-screen justify-center	items-center">
      <div className="flex-col w-96 h-80 bg-blue-400 justify-center m-3	items-center text-center">
        <img className="flex ml-32 mt-3 w-32 h-auto" src="https://www.dailyroshni.in/storage/2022/07/r.jpg" alt="image" />
        <h1 className="mt-3">This is the result page </h1>
        <h2>Correct answer</h2>
        <h3> {result}</h3>
        <h2>Wrong answer</h2>
        <h3>{10 - result}</h3>
      </div>
    </div>
  );
};

export default Result;
