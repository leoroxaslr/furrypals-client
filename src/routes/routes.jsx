import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import Addpet from "../components/User/Addpet";
import Userdash from "../components/User/Userdash";
import Home from "../components/pages/Home";

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
  {
    path: "/add",
    element: <Addpet />,
  },
  {
    path: "/dashboard",
    element: <Userdash />,
  },
];

export default routes;
