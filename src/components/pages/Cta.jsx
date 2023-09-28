import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="bg-white" id="cta">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-neutral">
            Sign up now and join our{" "}
            <span className="text-secondary">FurryPals </span> family!
          </h2>

          <p className="mb-6 font-light text-neutral md:text-lg">
            We make sure that pets live their healthiest and happiest lives.
          </p>

          <Link
            to="/signup"
            className="text-neutral bg-accent hover:bg-secondary focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Free trial for 30 days
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
