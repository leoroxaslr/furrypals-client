import React from "react";
import LoginPic from "../assets/Veterinary-amico.svg";

const Login = () => {
  return (
    <>
      <section class="bg-white m-16">
        <div class="grid max-w-screen-2xl px-5 py-8 mx-auto lg:py-16 lg:grid-cols-12">
          <div class="hidden place-self-center w-96 lg:mt-0 lg:col-span-7 lg:flex">
            <img class="scale-150" src={LoginPic} alt="face" />
          </div>
          <div class="m-auto place-self-center lg:col-span-5 lg:flex">
            <div class="bg-white rounded-lg shadow drop-shadow-2xl md:mt-0 sm:max-w-md xl:p-0 w-auto">
              <div class="p-10 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-3xl mb-10 font-bold leading-tight tracking-tight text-blue-950 md:text-3xl">
                  Login
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-800"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-950 block w-full p-2"
                      placeholder="name@email.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-800"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-950 focus:border-primary-600 block w-full p-2"
                      required=""
                    />
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-800 rounded bg-slate-50 focus:ring-3 focus:ring-primary-300"
                        required=""
                      />
                    </div>
                    <div class="ml-1 mr-16 text-sm">
                      <label for="remember" class="text-gray-800">
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      class="text-sm font-medium text-gray-800 hover:underline ml-10"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    class="w-full text-white bg-purple-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p class="text-sm font-light text-gray-800">
                    Don’t have an account yet?
                    <a
                      href="./signup.html"
                      class="font-medium text-gray-800 hover:underline"
                    >
                      Sign up
                    </a>
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

export default Login;
