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
import Pets from "./components/Dashboard/User/Pets";
import Community from "./components/Dashboard/User/Community";
import Grooming from "./components/Dashboard/User/Grooming";
import Consultation from "./components/Dashboard/User/Consultation";

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

          <Route
            path="/dashboard/overview"
            element={
              <PrivateRoute>
                <UserDash />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/consultation"
            element={
              <PrivateRoute>
                <UserDash />
                <Consultation />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/grooming"
            element={
              <PrivateRoute>
                <UserDash />
                <Grooming />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/community"
            element={
              <PrivateRoute>
                <UserDash />
                <Community />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/pets"
            element={
              <PrivateRoute>
                <UserDash />
                <Pets />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
