import { Routes, Route } from "react-router-dom";
import UserDash from "./components/Dashboard/User/Userdash";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../src/firebase";
import "./App.css";
import { AuthProvider } from "./components/auth/AuthContext";
import { PrivateRoute } from "./routes/PrivateRoute";
import SignUp from "./components/auth/SignUp";
import Navibar from "./components/pages/Navibar";
import Footer from "./components/pages/Footer";
import routes from "./routes/routes";
import Notfound from "./components/pages/Notfound";
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
        <Navibar />
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

          <Route path="*" element={<Notfound />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <UserDash />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
