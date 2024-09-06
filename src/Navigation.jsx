import { Link } from "react-router-dom";

const Navigation = () => {
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
        <header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 0,
            }}
          >
            <h3
              style={{
                textAlign: "start",
                fontSize: "20px",
                backgroundColor: "transparent",
                opacity: 0.5,
                color: "white",
              }}
            >
              Quizopolis
            </h3>
            <ul
              style={{
                display: "flex",
                opacity: 0.8,
                listStyleType: "none",
                justifyContent: "space-between",
                fontSize: "1em",
                padding: "10px",
              }}
            >
              <li>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  Library
                </Link>
              </li>
              <li>
                <Link
                  to="/theme"
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  Theme
                </Link>
              </li>
              <li>
                <Link
                  to="/theme"
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  About
                </Link>
              </li>
            </ul>

            <button
              style={{
                border: "none",
                backgroundColor: "lightblue",
                fontSize: "20px",
                padding: "10px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              Signup
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};
export default Navigation;
