import aboutBanner from "../assets/images/about-banner.jpeg";
import about from "../assets/images/about.jpeg";

import { FaBullseye, FaBolt, FaShieldAlt } from "react-icons/fa";

function About() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[55vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutBanner})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative text-center text-white px-6">
          <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-4">
            About Kian Electrical
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Powering Homes &
            <br />
            Businesses Across Kenya
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Professional electrical installation, maintenance, repairs and
            energy solutions delivered with safety, reliability and excellence.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <img
                src={about}
                alt="Kian Electrical Team"
                className="rounded-3xl shadow-xl w-full object-cover h-[600px]"
              />

              {/* Experience Card */}
              <div className="absolute -bottom-8 -right-8 bg-orange-500 text-white rounded-2xl p-8 shadow-2xl">
                <h2 className="text-5xl font-bold">10+</h2>

                <p className="mt-2">Years of Experience</p>
              </div>
            </div>

            {/* Right Content */}

            <div>
              <p className="uppercase tracking-[5px] text-orange-500 font-semibold mb-4">
                OUR STORY
              </p>

              <h2 className="text-5xl font-bold text-slate-900 leading-tight mb-8">
                Delivering Safe,
                <br />
                Reliable &
                <br />
                Professional
                <br />
                Electrical Services
              </h2>

              <p className="text-gray-600 leading-8 mb-6">
                Kian Electrical Services was founded with one mission: provide
                reliable, affordable and safe electrical solutions for homes,
                businesses and industries across Kenya.
              </p>

              <p className="text-gray-600 leading-8 mb-10">
                From residential wiring and lighting installation to industrial
                electrical systems and emergency repairs, our experienced
                electricians combine technical expertise with outstanding
                customer service.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-4xl font-bold text-orange-500">500+</h3>

                  <p className="text-gray-600 mt-2">Projects Completed</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-orange-500">100%</h3>

                  <p className="text-gray-600 mt-2">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-4">
              Our Foundation
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              The Principles That Drive Our Work
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              Every electrical project we undertake is built on trust, safety
              and professionalism. These principles guide every installation,
              repair and maintenance service we provide.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-10 border-t-4 border-orange-500 group hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-8 group-hover:bg-orange-500 transition">
                <FaBullseye className="text-4xl text-orange-500 group-hover:text-white transition" />
              </div>

              <h3 className="text-3xl font-bold mb-5 text-slate-900">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-8">
                To provide dependable, affordable and safe electrical services
                that improve homes, businesses and industries while exceeding
                customer expectations.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-10 border-t-4 border-orange-500 group hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-8 group-hover:bg-orange-500 transition">
                <FaBolt className="text-4xl text-orange-500 group-hover:text-white transition" />
              </div>

              <h3 className="text-3xl font-bold mb-5 text-slate-900">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-8">
                To become Kenya's most trusted electrical company, recognized
                for quality workmanship, innovation and exceptional customer
                service.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-10 border-t-4 border-orange-500 group hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-8 group-hover:bg-orange-500 transition">
                <FaShieldAlt className="text-4xl text-orange-500 group-hover:text-white transition" />
              </div>

              <h3 className="text-3xl font-bold mb-5 text-slate-900">
                Our Values
              </h3>

              <ul className="space-y-3 text-gray-600 leading-7">
                <li>✓ Safety First</li>
                <li>✓ Integrity</li>
                <li>✓ Accountability</li>
                <li>✓ Teamwork</li>
                <li>✓ Customer Satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
