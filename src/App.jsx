import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar";
// import NavbarL from "./components/Navbarlogin";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                exact
              />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
