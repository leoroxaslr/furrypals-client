import React from "react";
import AboutImg from "../../assets/images/aboutImg.jpeg";

const About = () => {
  return (
    <>
      <section className="mt-32 bg-gray-50 px-4 pb-20 pt-4" id="about">
        <div className="container mx-auto">
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <div
                className="shadow-lg shadow-blue-gray/10 rounded-xl rounded-br-[80px]"
                style={{
                  backgroundColor: "#CCCCFF",
                  width: "80%",
                  maxWidth: "400px",
                }}
              >
                <div className="relative h-64">
                  <img
                    alt="Card Image"
                    src="./images/PetCare10.jpg"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h5 className="mb-3 font-bold text-blue-gray text-lg text-center">
                    Top Notch Services
                  </h5>
                  <ul className="list-none pl-5 text-center">
                    <li className="mb-2 font-semibold text-blue-gray">
                      Boarding
                    </li>
                    <li className="mb-2 font-semibold text-blue-gray">
                      Daycare
                    </li>
                    <li className="mb-2 font-semibold text-blue-gray">
                      Grooming
                    </li>
                    <li className="mb-2 font-semibold text-blue-gray">
                      Training
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-8 w-full px-4 md:w-5/12">
              <h3 className="mb-3 font-bold text-3xl text-[#3C0A44] lg:w-1/2">
                Working with us is a pleasure
              </h3>
              <p className="mb-8 text-blue-gray">
                At FurryPals, your pet's comfort and happiness are our top
                priorities. Rest assured that when you entrust us with your
                furry family members, they'll be showered with love, attention,
                and exceptional care. We invite you to be a part of the
                FurryPals family and witness the joy and tail-wagging moments we
                create every day. We're here to ensure your beloved pets receive
                the finest care possible.
                <br />
                <br />
                Our mission is to provide a home away from home for your furry
                companions. We understand the importance of their well-being,
                and our dedicated team of pet-loving professionals is committed
                to making their stay enjoyable and safe
                <br />
                <br />
                We offer a range of services, from grooming and spa treatments
                that pamper your pets to daycare services that keep them active
                and engaged. We take pride in our experienced trainers who work
                tirelessly to ensure your pets are well-behaved and happy. Plus,
                our top-tier medical care ensures your pets are in excellent
                health throughout their journey with us.
              </p>
              <button className="bg-yellow-400 hover:bg-purple-300 text-white font-bold py-2 px-4 rounded outline-none focus:outline-none focus:ring focus:ring-blue-200">
                Read More...
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
