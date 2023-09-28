import React from "react";
import AboutImg from "../../assets/images/aboutImg.jpeg";
import img1 from "../../assets/images/about_img_1.png";
import img2 from "../../assets/images/about_img_2.png";

const About = () => {
  return (
    <>
      <section className="bg-primary " id="about">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg shadow-lg"
              src={img1}
              alt="about image 1"
            />
            <img
              className="w-full rounded-lg mt-4 shadow-lg"
              src={img2}
              alt="about image 2"
            />
          </div>
          <div className="font-light text-white sm:text-lg">
            <h2 className="mb-4 text-6xl tracking-tight font-extrabold lg:text-7xl text-white">
              Connect. Care. Cure.
            </h2>
            <p className="mb-4">
              At FurryPals, your pet's comfort and happiness are our top
              priorities. Rest assured that when you entrust us with your furry
              family members, they'll be showered with love, attention, and
              exceptional care. We invite you to be a part of the FurryPals
              family and witness the joy and tail-wagging moments we create
              every day. We're here to ensure your beloved pets receive the
              finest care possible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
