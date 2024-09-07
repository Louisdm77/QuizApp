import React from "react";

const Score = (props) => {
  console.log(props.core);
  return (
    <div style={{ width: "" }}>
      Score:<span>{props.core}</span>
    </div>
  );
};
export default Score;
