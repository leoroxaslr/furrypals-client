import React from "react";
import { useState } from "react";

const Pricing = () => {
  const [isWeekly, setisWeekly] = useState(false);

  const packages = [
    {
      name: "Boarding",
      dailyPrice: 29,
      weeklyPrice: 119,
      description:
        "Laboriosam quaerat sapiente minima nam minus similique illum architecto et!",
      paw: "https://img.icons8.com/cotton/64/000000/dog-footprint.png",
    },
    {
      name: "Teleconsult",
      dailyPrice: 39,
      weeklyPrice: 129,
      description:
        "Laboriosam quaerat sapiente minima nam minus similique illum architecto et!",
      paw: "https://img.icons8.com/cotton/64/000000/dog-footprint.png",
    },
    {
      name: "Grooming",
      dailyPrice: 19,
      weeklyPrice: 109,
      description:
        "Laboriosam quaerat sapiente minima nam minus similique illum architecto et!",
      paw: "https://img.icons8.com/cotton/64/000000/dog-footprint.png",
    },
    {
      name: "Training",
      dailyPrice: 49,
      weeklyPrice: 149,
      description:
        "Laboriosam quaerat sapiente minima nam minus similique illum architecto et!",
      paw: "https://img.icons8.com/cotton/64/000000/dog-footprint.png",
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-4xl text=2xl font-extrabold text-neutral mb-2">
          Affordable Pet Care Plans Tailored to Your Needs
        </h2>
        <p className="text-neutral">
          Explore our range of flexible pricing plans designed to provide
          exceptional care for your beloved pets without breaking the bank.
          <br></br> Whether it's boarding, daycare, grooming, or training, we've
          got a plan that suits your furry friend's needs and your budget
        </p>

        <div className="mt-16 flex justify-center items-center">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="text-2xl text-neutral m font-semibold mr-2">
              Monthly
            </span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-900 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full ${
                  isWeekly ? "bg-secondary ml-8" : "bg-primary "
                }`}
              ></div>
            </div>
            <span className="text-2xl font-semibold ml-2">Quarterly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isWeekly}
            onChange={() => setisWeekly(!isWeekly)}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 md:w-11/12 mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h2 className="text-3xl font-bold text-center text-tertiary">
              {pkg.name}
            </h2>
            <p className="text-iris text-center my-5">{pkg.description}</p>
            <p className="mt-5 text-center text-iris text-4xl font-bold">
              {isWeekly ? `$${pkg.weeklyPrice}` : `$${pkg.dailyPrice}`}
              <span className="text-base text-tertiary font-medium">
                /{isWeekly ? "week" : "daily"}
              </span>
            </p>
            <ul className="mt-4 space-y-2 px-1">
              <li className="flex gap-3 items-center">
                <img src={pkg.paw} alt="" className="w-4 h-4" />
                Free Boarding Bath
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.paw} alt="" className="w-4 h-4" />
                30 mins Dog Walking
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.paw} alt="" className="w-4 h-4" />
                Free Food & Treats
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.paw} alt="" className="w-4 h-4" />
                Premium Pet Accommodation
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btn btn-accent text-neutral btn-block">
                Sign Up
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
