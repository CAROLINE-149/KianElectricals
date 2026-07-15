import React from "react";

const CTA = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl shadow-2xl px-10 py-14 lg:px-16">

          {/* Decorative Background */}
          <div className="absolute -top-12 -right-12 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 left-24 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Content */}
            <div className="lg:w-2/3">

              <p className="uppercase tracking-[5px] text-orange-100 font-semibold mb-4">
                Let's Work Together
              </p>

              <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Ready to Power Your Next Project?
              </h2>

              <p className="text-orange-100 text-lg leading-8 max-w-2xl">
                Whether you need electrical installation, maintenance,
                repairs or emergency services, our experienced team is
                ready to deliver safe, reliable and professional
                electrical solutions.
              </p>

            </div>

            {/* Right Side */}
            <div className="lg:w-1/3 flex justify-center lg:justify-end">

              <button
                className="
                  bg-white
                  text-orange-600
                  font-semibold
                  text-lg
                  px-10
                  py-5
                  rounded-xl
                  shadow-xl
                  hover:bg-gray-100
                  hover:-translate-y-1
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                Get Free Quote
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;