import React from "react";
import { useState } from "react";

const Pricing = () => {
  const [isWeekly, setisWeekly] = useState(false);

  const packages = [
    {
      name: "Starter",
      perk1: "1 Teleconsultation",
      perk2: "5 Chat with Vets sessions",
      perk3: "5% discount to vaccines and deworming",
      perk4: "1 Groom-at-Home session",
      dailyPrice: 699,
      weeklyPrice: 999,
      description: "Perfect starting plan for your pet's needs",
      paw: "https://img.icons8.com/cotton/64/000000/dog-footprint.png",
    },
    {
      name: "Starter Plus",
      perk1: "2 Teleconsultation",
      perk2: "7 Chat with Vets sessions",
      perk3: "5% discount to vaccines and deworming",
      perk4: "3 Groom-at-Home session",
      dailyPrice: 1099,
      weeklyPrice: 2099,
      description: "All the perks of starter plan but with much more bonuses",
      paw: "https://img.icons8.com/cotton/64/000000/dog-footprint.png",
    },
    {
      name: "FurryClub",
      perk1: "Can register up to two pets!",
      perk2: "2 free home vet visit",
      perk3: "Unlimited teleconsult sessions",
      perk4: "10% discount to partner petshops and clinics ",
      dailyPrice: 2099,
      weeklyPrice: 3599,
      description:
        "All the perks of starter plus plan but with much more bonuses",
      paw: "https://img.icons8.com/cotton/64/000000/dog-footprint.png",
    },
    {
      name: "FurryClub +",
      perk1: "Unlimited teleconsult session",
      perk2: "Register up to five pets!",
      perk3: "4 free home vet visit",
      perk4: "10% discount to partner petshops and clinics and more!",
      dailyPrice: 4999,
      weeklyPrice: 6999,
      description:
        "All the perks of starter plus plan but with much more bonuses",
      paw: "https://img.icons8.com/cotton/64/000000/dog-footprint.png",
    },
  ];

  return (
    <div className="md:px-14 p-4 mx-auto max-w-screen-xl py-10" id="pricing">
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 md:w-12/12 mx-auto">
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
              {isWeekly ? `₱${pkg.weeklyPrice}` : `₱${pkg.dailyPrice}`}
              <span className="text-base text-tertiary font-medium">
                /{isWeekly ? "Quarterly" : "Monthly"}
              </span>
            </p>
            <ul className="mt-4 space-y-2 px-1">
              <li className="flex gap-3 items-center">
                <img src={pkg.paw} alt="" className="w-4 h-4" />
                {pkg.perk1}
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.paw} alt="" className="w-4 h-4" />
                {pkg.perk2}
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.paw} alt="" className="w-4 h-4" />
                {pkg.perk3}
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.paw} alt="" className="w-4 h-4" />
                {pkg.perk4}
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
