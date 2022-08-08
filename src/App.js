import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routeDeclartion from "./routeDeclaration";
import NavBar from "./NavBar";
import School from "./School";
import Class from "./Class";
import { ADMIN, RECRUITER } from "./roles";
import filterRoutes from "./filterRoutes";

function r(p) {
  return p.map(({ path, element: Element, children, index, permissions }) => (
    <Route key={path} path={path} element={<Element />} index={index}>
      {children?.length ? r(children) : []}
    </Route>
  ));
}

function App() {
  localStorage.setItem("role", RECRUITER);
  const copy = JSON.parse(JSON.stringify(routeDeclartion));
  console.log(copy);
  const filteredRoutes = filterRoutes(copy);
  console.log(filteredRoutes);
  return (
    <BrowserRouter>
      <Routes>{r(filteredRoutes)}</Routes>
    </BrowserRouter>
  );
}

export default App;
