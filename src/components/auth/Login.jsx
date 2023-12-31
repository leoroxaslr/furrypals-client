import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPic from "../../assets/images/Veterinary-amico.svg";
import { useRef, useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { UserAuth } from "../auth/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();

  const signIn = async (e) => {
    try {
      e.preventDefault();
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard/overview");
    }
  }, [currentUser]);

  return (
    <>
      <section className="m-16 ">
        <div className="grid max-w-screen-2xl h-screen max-h-[70vh] l py-8 mx-auto lg:py-16 lg:grid-cols-12">
          <div className="hidden place-self-center w-96 lg:mt-0 lg:col-span-7 lg:flex">
            <img className="scale-150" src={LoginPic} alt="face" />
          </div>
          <div className="m-auto place-self-center lg:col-span-5 lg:flex">
            <div className="bg-white rounded-lg shadow drop-shadow-2xl md:mt-0 sm:max-w-md xl:p-0 w-auto">
              <div className="p-10 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-3xl mb-10 font-bold leading-tight tracking-tight text-blue-950 md:text-3xl">
                  Login
                </h1>

                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-800"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="username"
                      id="username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-950 block w-full p-2"
                      placeholder="name@email.com"
                      required=""
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-800"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-950 focus:border-primary-600 block w-full p-2"
                      required=""
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-800 rounded bg-slate-50 focus:ring-3 focus:ring-primary-300"
                        required=""
                      />
                    </div>
                    <div className="ml-1 mr-16 text-sm">
                      <label htmlFor="remember" className="text-gray-800">
                        Remember me
                      </label>
                    </div>
                    <Link
                      href="#"
                      className="text-sm font-medium text-gray-800 hover:underline ml-10"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    onClick={signIn}
                    className="w-full text-white bg-primary hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-800">
                    Don’t have an account yet?
                    <Link
                      as={Link}
                      to="/signup"
                      className="pl-1 font-medium text-gray-800 hover:underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
                <div className="text-center">
                  <button
                    onClick={signIn}
                    className="btn w-full btn-secondary text-white"
                  >
                    Login With Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
