import React from "react";
import { useState } from "react";

function Theme() {
  const style = {
    backgroundColor: "black",
    color: "white",
    width: "60%",
    margin: "auto",
  };

  const style1 = {
    backgroundColor: "#FFFFFF",
    color: "black",
    width: "60%",
    margin: "auto",
  };
  const [theme, setTheme] = useState(style);

  const themeChange = () => {
    setTheme(style);
  };
  const themeChange1 = () => {
    setTheme(style1);
  };
  return (
    <div style={theme}>
      <div style={theme}>
        <h2>What theme would you like to use</h2>
        <button onClick={themeChange1}>light mode</button>
        <button onClick={themeChange}>dark mode</button>
      </div>
    </div>
  );
}

export default Theme;
