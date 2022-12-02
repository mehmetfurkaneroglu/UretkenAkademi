import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";


import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₺ 0");
  const [score, setScore] = useState(0);


  const data = [
    {
      id: 1,
      question: "What is the correct command to create a new React project?",
      answers: [
        {
          text: "npm create-react-app myReactApp",
          correct: false,
        },
        {
          text: "npx create-react-app myReactApp",
          correct: true,
        },
        {
          text: "npm create-react-app",
          correct: false,
        },
        {
          text: "npx create-react-app",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What does myReactApp refer to in the following command? 'npx create-react-app myReactApp'",
      answers: [
        {
          text: "The name you want to use for the new app  ",
          correct: true,
        },
        {
          text: "The type of app to create",
          correct: false,
        },
        {
          text: "The directory to create the new app in",
          correct: false,
        },
        {
          text: "A reference to an existing app",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What command is used to start the React local development server?",
      answers: [
        {
          text: "npm serve",
          correct: false,
        },
        {
          text: "npm run dev",
          correct: false,
        },
        {
          text: "npm build",
          correct: false,
        },
        {
          text: "npm start",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the default local host port that a React development server uses?",
      answers: [
        {
          text: "3000",
          correct: true,
        },
        {
          text: "3500",
          correct: false,
        },
        {
          text: "5000",
          correct: false,
        },
        {
          text: "8000",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "To develop and run React code, ........ is required.",
      answers: [
        {
          text: "html",
          correct: false,
        },
        {
          text: "css",
          correct: false,
        },
        {
          text: "Node.js",
          correct: true,
        },
        {
          text: "python",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which keyword creates a constant in JavaScript?",
      answers: [
        {
          text: "let",
          correct: false,
        },
        {
          text: "const",
          correct: true,
        },
        {
          text: "constant",
          correct: false,
        },
        {
          text: "var",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "A copy of the 'real' DOM that is kept in memory is called what?",
      answers: [
        {
          text: "React DOM",
          correct: false,
        },
        {
          text: "Shadow DOM",
          correct: false,
        },
        {
          text: "DOM",
          correct: false,
        },
        {
          text: "Virtual DOM",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Which operator can be used to conditionally render a React component?",
      answers: [
        {
          text: "::",
          correct: false,
        },
        {
          text: "||",
          correct: false,
        },
        {
          text: "&&",
          correct: true,
        },
        {
          text: "??",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
      answers: [
        {
          text: "key",
          correct: true,
        },
        {
          text: "data",
          correct: false,
        },
        {
          text: "index",
          correct: false,
        },
        {
          text: "id",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the correct syntax to import a Component from React?",
      answers: [
        {
          text: "import React.Component from 'react'",
          correct: false,
        },
        {
          text: "import [ Component ] from 'react'",
          correct: false,
        },
        {
          text: "import { Component } from 'react'",
          correct: true,
        },
        {
          text: "import Component from 'react'",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "React separates the user interface into components. How are components combinded to create a user interface?",
      answers: [
        {
          text: "With webpack",
          correct: false,
        },
        {
          text: "By putting them in a folder structure",
          correct: false,
        },
        {
          text: "With code splitting",
          correct: false,
        },
        {
          text: "By nesting components",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "What is a common use case for ref?",
      answers: [
        {
          text: "To refer to another JavaScript file ",
          correct: false,
        },
        {
          text: "To directly access a DOM node",
          correct: true,
        },
        {
          text: "To refer to a function",
          correct: false,
        },
        {
          text: "To bind the function",
          correct: false,
        },
      ],
    },
    
  ];


  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₺ 1.000" },
        { id: 2, amount: "₺ 2.000" },
        { id: 3, amount: "₺ 3.000" },
        { id: 4, amount: "₺ 5.000" },
        { id: 5, amount: "₺ 7.500" },
        { id: 6, amount: "₺ 10.000" },
        { id: 7, amount: "₺ 30.000" },
        { id: 8, amount: "₺ 50.000" },
        { id: 9, amount: "₺ 100.000" },
        { id: 10, amount: "₺ 200.000" },
        { id: 11, amount: "₺ 400.000" },
        { id: 12, amount: "₺ 1.000.000" },
      ].reverse(),
    []
  );

  const startNewGame = () => {
    setUsername(null);
    setScore(0);
    setEarned("₺ 0");
    setQuestionNumber(1);
    setTimeOut(false);
  };


  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  useEffect(() => {
    if (questionNumber < 12)
      setScore(moneyPyramid.find((m) => m.id === questionNumber).amount);
    console.log("Score " + score);
    console.log("App qn " + questionNumber);
  }, [questionNumber, moneyPyramid]);



  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <>
                <h1 className="endText">You earned: {earned}</h1>
                <ScoreBoard username={username} score={score}/>
                <button
                  onClick={() => {
                    startNewGame();
                  }}
                >
                  Start a new game
                </button>
              </>
            ) : (
              <>
                {questionNumber > 12 ? (
                  <>
                    <h1 className="endText">YOU WON</h1>
                    <h1 className="endText">You earned: {earned}</h1>
                    <ScoreBoard username={username} score={score}/>
                    <button
                      onClick={() => {
                        startNewGame();
                      }}
                    >
                      Start a new game
                    </button>
                  </>
                ) : (
                  <>
                    <div className="top">
                      <div className="timer">
                        <Timer
                          setTimeOut={setTimeOut}
                          questionNumber={questionNumber}
                        />
                      </div>
                    </div>
                    <div className="bottom">
                      {questionNumber <= 12 && (
                        <Trivia
                          data={data}
                          questionNumber={questionNumber}
                          setQuestionNumber={setQuestionNumber}
                          setTimeOut={setTimeOut}
                        />
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
