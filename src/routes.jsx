import Login from "./components/Login";
import SignUp from "./components/SignUp";
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
