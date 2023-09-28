import React from "react";
import banner from "../../assets/images/banner.png";

const Hero = () => {
  return (
    <>
      <div className=" mx-auto max-w-screen-xl mt-10 mb-10">
        <div className="hero bg-base-100 rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 antialiased">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={banner}
              className="lg:h-[500px] sm:h-[400px] h-[300px] hover:scale-105 ease-in duration-100"
            />
            <div>
              <h1 className="text-6xl subpixel-antialiased font-bold md:text-7xl">
                Hollistic Pet Experience
              </h1>
              <h3 className="py-6 text-xl subpixel-antialiased text-neutral">
                At FurryPal, we're all about ensuring your furry friends live
                their happiest, healthiest lives. Our dedicated team provides
                top-notch medical care and services to help your pets thrive for
                years to come.
              </h3>
              <div className="space-x-5 space-y-4">
                <button className="btn btn-primary">
                  Sign Up
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button className="btn btn-accent">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
