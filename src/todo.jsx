import React from "react";
import { useState } from "react";
const display = {
  display: "flex",
  justifyContent: "space-Between",
  marginBottom: "20px",
  borderBottom: "1px solid black",
  padding: "10px",
  borderLeft: "1px solid black",
};
function Input() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const valueText = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const handleAdd = (e) => {
    setTasks([...tasks, value]);
    setValue("");
  };
  const deleter = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };
  return (
    <>
      <input type="text" value={value} onChange={valueText} />
      <button onClick={handleAdd}>Add Task</button>
      <h3>Tasks</h3>
      <ol>
        {tasks.map((neww, index) => {
          return (
            <li key={index} style={display}>
              {neww}{" "}
              <button
                onClick={() => {
                  deleter(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
}
export default Input;
