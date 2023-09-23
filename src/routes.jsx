import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/apply",
    element: <SignUp />,
  },
];

export default routes;
