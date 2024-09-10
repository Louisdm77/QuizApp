import React from "react";
import { useState } from "react";
import "./index.css";
import Questions from "./questions.json";
const Score = (props) => {
  console.log(props.core);
  console.log(props.sub);
  console.log(props.answers);

  const [showScore, setShowScore] = useState(false);
  const [bye, setBye] = useState(false);
  const [nodis, setNodis] = useState(false);
  const [disable, setDisable] = useState(false);
  const [show, setShow] = useState(false);
  const [timeoutt, setTimeoutt] = useState(5);
  const handlelDisable = () => {
    setDisable(true);
  };
  const handleNoDisable = () => {
    setNodis(true);
  };
  const showw = () => {
    setShow(!show);
  };

  const closedown = () => {
    let interval = setInterval(() => {
      setTimeoutt((prevTime) => {
        const newTime = prevTime - 1;
        if (newTime === 0) {
          clearInterval(interval);
          window.location.reload();
        }
        return newTime;
      });
    }, 1000);
  };

  const closeApp = () => {};
  return (
    <>
      <div>
        <div
          style={{ display: props.sub === true ? "block" : "none" }}
          class="flex items-center p-4 mt-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Danger alert!</span> Do you want to check
            your result? Choose carefully because if you Click no and you wont
            get to see it ever
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              disabled={disable === true}
              onClick={() => {
                setShowScore(!showScore);
                handleNoDisable();
                props.setSub(false);
              }}
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              YES
            </button>
            <button
              disabled={nodis === true}
              onClick={() => {
                setBye(true);
                setShowScore(false);
                handlelDisable();
                props.setSub(false);
                closedown();
              }}
              type="button"
              class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              NO
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ display: bye ? "block" : "none" }}
        class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
        role="alert"
      >
        <span class="font-medium">Hello!</span> You can now exit the
        application!{" "}
        <p>
          App closing in{" "}
          <span style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
            {timeoutt}
          </span>{" "}
          seconds
        </p>
      </div>

      <div
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "30px",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          display: showScore ? "block" : "none",
        }}
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tests Result
        </h5>

        <p
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            boxShadow:
              "0 0 10px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.2)",
          }}
          class="mb-3 font-normal text-gray-700 dark:text-gray-400"
        >
          Hello Student, your Score is <span>{props.core}</span>
          <div
            class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            Do you want to check the answers to the questions you missed? <br />
            <button
              onClick={showw}
              type="button"
              class="mt-4 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              YES
            </button>
            <button
              onClick={() => {
                setBye(true);
                setShowScore(false);
                closedown();
              }}
              type="button"
              class="mt-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              NO
            </button>
            <div style={{ display: show ? "block" : "none" }}>
              {Questions.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      textAlign: "start",
                      marginBottom: "30px",
                      fontFamily: "serif",
                    }}
                  >
                    <h3 style={{ color: "black", fontWeight: "bolder" }}>
                      {index + 1}. Question: {item.question}
                    </h3>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Your Answer</span>:{" "}
                      {props.answers[index] !== undefined
                        ? props.answers[index]
                        : "______"}
                    </p>
                    <p
                      style={{
                        color: "red",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      <span>Answer :</span>
                      {Questions[index].correctAnswer}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </p>
      </div>
    </>
  );
};
export default Score;
