import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import Navibar from "./components/pages/Navibar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import UserDash from "./components/User/Userdash";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../src/firebase";
import Footer from "./components/pages/Footer";
import "./App.css";
import { AuthProvider } from "./components/auth/AuthContext";
import { PrivateRoute } from "./routes/PrivateRoute";
import Home from "./components/pages/Home";

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
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navibar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Navibar />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Navibar />
                <Signup />
                <Footer />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <UserDash />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
