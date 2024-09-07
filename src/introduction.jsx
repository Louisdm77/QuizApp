import React, { useState } from "react";
import Questions from "./questions.json";
import Score from "./Score";
import "./index.css";
const Intro = (props) => {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("aliceblue");
  const [score, setScore] = useState(0);
  const [disp, setDisp] = useState("none");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [userAnswer, setUserAnswer] = useState([""]);
  const [introDisp, setIntroDisp] = useState(true);

  let x = 0;
  const colorChange = (e) => {
    setColor(e.target.value);
  };
  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion === Questions.length - 2) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };

  const display = () => {
    setVisible(true);
  };

  const handleAnswer = (answer) => {
    setUserAnswer((prevAnswer) => {
      const newAnswer = [...prevAnswer];
      newAnswer[currentQuestion] = answer;
      console.log(newAnswer);
      return newAnswer;
    });
  };
  const checkAnswers = () => {
    let scr = 0;
    for (let x = 0; x < userAnswer.length; x++) {
      if (userAnswer[x] === Questions[x].correctAnswer) {
        scr++;
      }
    }
    setScore(scr);
    console.log(score);
  };
  return (
    <>
      <button
        className="bg-indigo-500 opacity-75 "
        onClick={() => {
          display();
          setShow(false);
          props.setVisi(false);
        }}
        style={{
          textAlign: "center",
          color: "white",
          borderRadius: "10px",
          padding: "10px",
          display: props.visi ? "block" : "none",
          margin: "auto",
        }}
      >
        Start Quiz
      </button>
      <div
        className="intro"
        style={{
          width: "60%",
          margin: "auto",
          backgroundColor: "rgb(189,197,202)",
          padding: "30px",
          fontFamily: "verdana",
          color: "white",
          display: visible ? "block" : "none",
          textAlign: "center",

          marginTop: "50px",
        }}
      >
        <h3 style={{ fontSize: "30px" }}>Introduction</h3>

        <p>
          "Get ready to test your knowledge and discover how much you really
          know. From history to pop culture, we've got questions to challenge
          and delight you."
        </p>
        <button
          className="bg-indigo-500 opacity-50"
          onClick={() => {
            setVisible(false);
            setShow(true);
          }}
          style={{
            margin: "auto",
            marginTop: "20px",
            display: "block",
            border: "none",
            padding: "10px",
          }}
        >
          Proceed
        </button>
      </div>
      <div
        style={{
          width: "60%",
          margin: "auto",
          backgroundColor: "rgb(189,197,202)",
          padding: "30px",
          fontFamily: "verdana",
          color: "white",
          display: show ? "block" : "none",
          marginTop: "50px",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>INSTRUCTIONS</h2>

        <ol style={{ listStyleType: "decimal" }}>
          <li>Read each question carefully</li>
          <li> Select only one answer per question.</li>
          <li>Click "Next" to proceed to the next question.</li>
          <li>Click on READY to see questions</li>
        </ol>

        <button
          className="bg-indigo-500 opacity-50 "
          onClick={() => {
            setVisible(false);
            setShow(false);
            setDisp("block");
          }}
          style={{
            margin: "auto",
            display: "block",
            border: "none",
            padding: "10px",
          }}
        >
          {" "}
          Ready
        </button>
      </div>
      <div className="bg-white p-5" style={{ width: "100%" }}>
        <div
          style={{
            padding: "10px",
            margin: "auto",
            width: "fit-content",
            backdropFilter: "blur(10px)",
            backgroundColor: color,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <input
            type="color"
            value={color}
            onChange={colorChange}
            style={{
              width: "0px",
              height: "0px",
              display: "none",
              backgroundColor: "transparent",
            }}
          />
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: "20px",
              display: disp,
            }}
          >
            {Questions[currentQuestion] && (
              <div
                key={currentQuestion + 1}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>{currentQuestion + 1}. </p>
                <span
                  className="bg-gray-100 mb-4"
                  style={{
                    padding: "10px",
                    border: "1px solid red",
                    width: "300px",
                    // backgroundColor: color,
                  }}
                >
                  {Questions[currentQuestion].question}
                </span>
                <p>
                  {Questions[currentQuestion].answers.map(
                    (answer, ansIndex) => {
                      return (
                        <span className="bg-gray-100" key={ansIndex}>
                          <input
                            key={ansIndex}
                            onClick={() => {
                              handleAnswer(answer);
                            }}
                            type="button"
                            value={answer}
                            style={{
                              display: "block",
                              border: "1px solid green",
                              padding: "10px",
                              width: "250px",
                              marginBottom: "10px",
                              backgroundColor:
                                userAnswer[currentQuestion] === answer
                                  ? "green"
                                  : "",
                            }}
                          />{" "}
                        </span>
                      );
                    }
                  )}
                </p>
                <div
                  key={Questions[currentQuestion].id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <button
                    disabled={currentQuestion === 0}
                    onClick={prevQuestion}
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      fontSize: "16px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Prev
                  </button>
                  <button
                    disabled={currentQuestion === Questions.length - 1}
                    onClick={nextQuestion}
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      fontSize: "16px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Next
                  </button>
                </div>
                <button
                  onClick={checkAnswers}
                  style={{ display: submit === true ? "block" : "none" }}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Score core={score} />
    </>
  );
};
export default Intro;
