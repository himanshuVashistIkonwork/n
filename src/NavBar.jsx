import github from "./icons/github.png";
import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div style={{}}>
        <a href="https://github.com/himanshuVashistIkonwork/role-based-route">
          <img
            title="click to see code"
            style={{
              position: "absolute",
              height: "50px",
              width: "50px",
              right: 0,
              padding: "15px",
              marginRight: "25px",
              marginTop: "25px",
              boxShadow: "0px 0px 2px 3px rgba(0,0,0,0.08)",
              borderRadius: "18px",
              cursor: "pointer",
            }}
            src={github}
            alt="github"
          />
        </a>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            padding: "2rem",
            boxSizing: "border-box",
            background: "rgba(0,0,0,0.05)",
            textAlign: "center",
            width: "50%",
            justifyContent: "space-around",
            height: "100vh",
          }}
        >
          <Link to="/">dashboard</Link>
          <div>
            <Link to="/school">school</Link>
            <div style={{ marginTop: "1rem" }}>
              <Link to="/school/class">class</Link>
            </div>
          </div>
        </div>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
