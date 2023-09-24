import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar";
import UserDash from "./components/Dashboard/User/Userdash";
import Navbarlogin from "./components/Navbarlogin";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../src/firebase";
// import NavbarL from "./components/Navbarlogin";
import Footer from "./components/Footer";
import AuthDetails from "./components/auth/AuthDetails";
import "./App.css";

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <>
      {authUser ? <Navbarlogin /> : <Navbar />}

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
