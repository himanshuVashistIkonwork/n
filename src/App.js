import { BrowserRouter, Routes, Route } from "react-router-dom";
import routeDeclartion from "./miscellaneous/routeDeclaration";
// eslint-disable-next-line no-unused-vars
import { ADMIN, RECRUITER } from "./vars/roles";
import filterRoutes from "./helpers/filterRoutes";

function r(p) {
  return p.map(({ path, element: Element, children, index, permissions }) => (
    <Route key={path} path={path} element={<Element />} index={index}>
      {children?.length ? r(children) : []}
    </Route>
  ));
}

function App() {
  // ========= setting role to test
  localStorage.setItem("role", ADMIN);
  // ========
  const filteredRoutes = filterRoutes(routeDeclartion());
  return (
    <BrowserRouter>
      <Routes>{r(filteredRoutes)}</Routes>
    </BrowserRouter>
  );
}

export default App;
