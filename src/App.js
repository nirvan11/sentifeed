<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> 8a4c431db279eae6fb80589892b01bd203567061
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SentifeedForm from "./components/SentifeedForm";
import SentifeedResult from "./components/SentifeedResult";
import { ResultContext } from "./context/ResultContext";

function App() {
  const [result, setResult] = useState({
    sentiment: "",
    feedback: "no feedback entered yet",
  });
  useEffect(() => {
    axios.get("TESTING THIS WONT WORK HAHA:)");
  }, []);

  function handleResult(result) {
    let newResult = { ...result };
    setResult(newResult);
  }
   function handleNewResult(result) {
    let newResult = { ...result };
    setResult(newResult);
  }
  function handleOLDResult(result) {
    let newResult = { ...result };
    setResult(newResult);
  }
  // let name="bdebo"
  useEffect(()=>{
fetch("tryingout")
  },[])

  return (
    <Router>
      <Switch>
        <div className="App">
          <ResultContext.Provider value={{ result, handleResult }}>

            <Navbar />
            {/* <Navbar /> */}
            <Route exact path="/" component={SentifeedForm} />

            <Route exact path="/result" component={SentifeedResult} />
            <Route exact path="/" component={SentifeedForm} />
          </ResultContext.Provider>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
