import React from "react";
import Quiz from "./quiz";
import pic from "./assets/color.avif";
import Intro from "./introduction";
import Navigation from "./Navigation";
const Home = () => {
  const style = {
    textAlign: "center",

    color: "white",
    fontSize: "50px",
  };
  const styl = {
    textAlign: "center",
    fontSize: "30px",
    color: "white",
  };
  return (
    <>
      <div
        style={{
          fontFamily: "Arial",
          width: "70%",
          margin: "auto",
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
        <Navigation />
        <div>
          <h2 style={style}>QUIZ APP</h2>
          <h3 style={styl}>Improve your knowledge in sciences</h3>
        </div>
        <Intro />
      </div>
    </>
  );
};
export default Home;
