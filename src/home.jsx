import React from "react";
import Quiz from "./quiz";
import pic from "./assets/quizback.jpg";
import Intro from "./introduction";
import Navigation from "./Navigation";
import "./index.css";
import { useState } from "react";
const Home = () => {
  const [visi, setVisi] = useState(true);
  const style = {
    textAlign: "center",

    color: "white",
    fontSize: "30px",
  };
  const styl = {
    textAlign: "center",

    color: "white",
  };
  return (
    <>
      <div
        className="backdrop-blur-xl"
        style={{
          fontFamily: "Arial",
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundColor: "skyblue",
          paddingTop: "50px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="shadow-sm drop-shadow-2xl backdrop-blur-xl"
          style={{
            width: "70%",
            padding: "20px",
            margin: "auto",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            boxShadow:
              "0 0 10px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Navigation />

          <div style={{ display: visi ? "block" : "none" }}>
            <h1
              style={{ textAlign: "center" }}
              class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white mt-6"
            >
              Unleash your inner wizard of wisdom
            </h1>
            <p
              style={{ textAlign: "center" }}
              class="mb-6 text-lg font-bold text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 mt-6"
            >
              Embark on a journey of knowledge exploration with or extensive
              collection of interactive quizzes
            </p>
          </div>

          <Intro visi={visi} setVisi={setVisi} />
        </div>
      </div>
    </>
  );
};
export default Home;
