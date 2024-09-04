import React, { useState } from "react";
import Intro from "./introduction";
import Navigation from "./Navigation";
import QuizPage from "./Quizpage";

const Quiz = () => {
  return (
    <div
      style={{
        textAlign: "center",
        color: "green",
        backgroundColor: "black",
        margin: 0,
      }}
    >
      <Navigation />
      <header>
        <h2 style={{ backgroundColor: "aliceblue" }}>Quiz App</h2>
      </header>
      <Intro />
      <QuizPage />
    </div>
  );
};
export default Quiz;
