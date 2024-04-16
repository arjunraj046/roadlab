import React from "react";

const Home = ({ page, setPage }) => {
  const StartTheQuize = () => {
    console.log(page);
    setPage(2);
  };

  return (
    <div className="flex w-screen h-screen justify-center	items-center">
      <div className="flex-col w-96 h-52 rounded-lg bg-slate-200 drop-shadow-lg border-slate-900">
        <div className="m-5 flex-col ">
          <h1 className="text-3xl font-bold">Welcome to Basic Quiz </h1>
          <p className="mt-1 truncate">Simple Quize to test Your knowledge</p>
          <br />
          <button
            onClick={StartTheQuize}
            className="flex justify-end  items-end text-white ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {" "}
            Lets Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
