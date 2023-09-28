import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/FurryPalsfooter.png";
import Mtoggle from "../../assets/scripts/menutoggle";
import { UserAuth } from "../auth/AuthContext";

const Navibar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <header>
        <nav className="bg-secondary border-gray-200 drop-shadow-lg">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 px-4">
            <a href="" className="flex items-center" as={Link} to="/">
              <img src={Logo} alt="" className="h-24 sm:h-24" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={Mtoggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-colp-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <Link
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0"
                    aria-current="page"
                    as={Link}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 "
                    as={Link}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 "
                    as={Link}
                    to="/services"
                  >
                    Servicess
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 "
                    as={Link}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  {currentUser ? (
                    <>
                      <Link
                        className="block py-2 pl-3 pr-4  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 "
                        as={Link}
                        to="/dashboard"
                      >
                        Dashboard
                      </Link>
                      <Link
                        onClick={handleLogout}
                        className="block py-2 pl-3 pr-4  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 "
                      >
                        Logout
                      </Link>
                    </>
                  ) : (
                    <Link
                      as={Link}
                      to="/signin"
                      className="block py-2 pl-3 pr-4  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 "
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navibar;
