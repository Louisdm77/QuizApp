import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          padding: "50px",
          margin: "auto",
          width: "fit-content",
          backdropFilter: "blur(10px)",
          backgroundColor: "aliceblue",
        }}
      >
        {" "}
        <header>
          <h3
            style={{
              textAlign: "center",
              fontSize: "40px",
              color: "green",
            }}
          >
            University of React
          </h3>
          <h4 style={{ textAlign: "center", padding: "0px", fontSize: "20px" }}>
            2020/2021 Departmental quiz
          </h4>
          <h5 style={{ textAlign: "center", padding: "0px", fontSize: "15px" }}>
            Answer all questions and re check before submiting
          </h5>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              justifyContent: "space-between",
              fontSize: "20px",
              marginTop: "40px",
              padding: "10px",
            }}
          >
            <li>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  backgroundColor: "green",
                  padding: "10px",
                  color: "white",
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/quiz"
                style={{
                  textDecoration: "none",
                  backgroundColor: "green",
                  padding: "10px",
                  color: "white",
                }}
              >
                Quiz
              </Link>
            </li>
            <li>
              <Link
                to="/theme"
                style={{
                  textDecoration: "none",
                  backgroundColor: "green",
                  padding: "10px",
                  color: "white",
                }}
              >
                Theme
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};
export default Navigation;
