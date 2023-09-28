import React from "react";
import banner from "../../assets/images/banner.png";

const Hero = () => {
  return (
    <>
      <div className="md:px-12 p-4 max-w-screen-xl mx-auto mt-10 mb-10">
        <div className="hero bg-base-100 rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 antialiased">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={banner}
              className="lg:h-[500px] hover:scale-105 ease-in duration-100"
            />
            <div>
              <h1 className="text-5xl font-bold"> Consult or Visit Us</h1>
              <p className="py-6 text-neutral">
                At FurryPal, we're all about ensuring your furry friends live
                their happiest, healthiest lives. Our dedicated team provides
                top-notch medical care and services to help your pets thrive for
                years to come.
              </p>
              <div className="space-x-5 space-y-4">
                <button className="btn btn-primary">Sign Up</button>
                <button className="btn btn-accent ">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
