import React from "react";
import Quiz from "./quiz";
import pic from "./assets/quizback.jpg";
import Intro from "./introduction";
import Navigation from "./Navigation";
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
        style={{
          fontFamily: "Arial",
          width: "70%",
          position: "relative",
          width: "100%",
          height: "100vh",
          borderRadius: "10px",
          backgroundImage: `url(${pic})`,
          backgroundSize: "cover",
          paddingTop: "50px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            width: "70%",
            margin: "auto",
            backgroundColor: "rgba(255, 255, 255, 0.5)", // white with 50% opacity
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
          }}
        >
          <Navigation />
          <div style={{ display: visi ? "block" : "none" }}>
            <h3 style={style}>Unleash your inner wizard of wisdom</h3>
            <p style={styl}>Improve your knowledge in sciences</p>
          </div>
          <Intro visi={visi} setVisi={setVisi} />
        </div>
      </div>
    </>
  );
};
export default Home;
