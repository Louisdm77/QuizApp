import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!open);
  };
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          padding: "10px",
          boxSizing: "border-box",
          width: "100%",
          backdropFilter: "blur(10px)",
          borderRadius: "10px",
        }}
      >
        {" "}
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Quizopolis
              </span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navigation;
