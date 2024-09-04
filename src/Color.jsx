import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#ff0000");

  const change = (e) => {
    setColor(e.target.value);
    console.log(color);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>Color Picker</h1>
      <div
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: color,
          margin: "auto",
        }}
      ></div>

      <p style={{ textAlign: "center", fontWeight: "bold" }}>Pick a color</p>

      <input
        style={{
          backgroundColor: color,
          border: "none",
          padding: "10px",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          color: "white",
        }}
        type="color"
        value={color}
        onChange={change}
      />
    </div>
  );
};

export default ColorPicker;
