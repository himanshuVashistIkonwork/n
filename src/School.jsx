import { Outlet } from "react-router-dom";

export default function School() {
  return (
    <div>
      <div>School</div>
      <div style={{ paddingLeft: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
}
