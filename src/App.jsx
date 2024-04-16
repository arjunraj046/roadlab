import { useState } from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(0);

  if (page == 1) {
    return <Home page={page} setPage={setPage} />;
  } else if (page == 2) {
    return <Quiz page={page} setPage={setPage} result={result} setResult={setResult} />;
  } else if (page == 3) {
    return <Result page={page} setPage={setPage} result={result} />;
  } else {
    return <div> Somthing went Wrong</div>;
  }
}

export default App;
