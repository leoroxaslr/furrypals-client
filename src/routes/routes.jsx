import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Services from "../components/pages/Services";

const routes = [
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/apply",
    element: <SignUp />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
];

export default routes;
