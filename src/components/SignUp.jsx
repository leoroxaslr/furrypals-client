import React from "react";
import { Link } from "react-router-dom";
import LoginPic from "../assets/Veterinary-amico.svg";

const SignUp = () => {
  return (
    <>
      <section className="bg-white m-16">
        <div className="grid max-w-screen-2xl px-5 py-8 mx-auto lg:py-16 lg:grid-cols-12">
          <div className="hidden place-self-center w-96 lg:mt-0 lg:col-span-7 lg:flex">
            <img className="scale-150" src={LoginPic} alt="face" />
          </div>
          <div className="m-auto place-self-center lg:col-span-5 lg:flex">
            <div className="bg-white rounded-lg shadow drop-shadow-2xl md:mt-0 sm:max-w-md xl:p-0 w-auto">
              <div className="p-10 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-blue-950 md:text-3xl">
                  Create an account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      placeholder="name@email.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Confirm password
                    </label>
                    <input
                      type="confirm-password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      required=""
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-offset-amber-400 focus:ring-yellow-300"
                        required=""
                      />
                    </div>
                    <div className="ml-3 lg:mr-28 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-800"
                      >
                        I accept the
                        <Link
                          className="font-medium text-gray-800 hover:underline lg:mr-5 mr-10"
                          href="#"
                        >
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-purple-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-800">
                    Already have an account?
                    <Link
                      as={Link}
                      to="/signin"
                      className="font-medium text-gray-800 hover:underline"
                    >
                      Login here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
