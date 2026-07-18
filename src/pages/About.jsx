import aboutBanner from "../assets/images/About-Banner.jpeg";
import about from "../assets/images/about.jpeg";
import TeamImage from "../assets/images/about.jpeg";
import electrician from "../assets/images/person.svg";
import CTA from "../components/CTA";
//import manager from "../assets/images/manager.jpg";
//import assistantManager from "../assets/images/assistant-manager.jpg";

//import electrician1 from "../assets/images/electrician1.jpg";
//import electrician2 from "../assets/images/electrician2.jpg";
//import electrician3 from "../assets/images/electrician3.jpg";
//import electrician4 from "../assets/images/electrician4.jpg";

import { FaBullseye, FaBolt, FaShieldAlt } from "react-icons/fa";

import { FaLinkedin, FaEnvelope } from "react-icons/fa";

import {
  FaPhoneAlt,
  FaClipboardList,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

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

      {/* ================= LEADERSHIP ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-4">
              Leadership Team
            </p>

            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Meet Our Leadership
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 leading-8">
              Our leadership team is committed to delivering safe, innovative
              and reliable electrical solutions while building lasting
              relationships with every client.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* General Manager */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group">
              <div className="overflow-hidden">
                <img
                  src={electrician}
                  alt="General Manager"
                  className="w-36 h-36 rounded-full object-cover border-4 border-orange-500 shadow-lg"
                />
              </div>

              <div className="p-8">
                <span className="text-orange-500 font-semibold uppercase tracking-wider">
                  General Manager
                </span>

                <h3 className="text-3xl font-bold mt-3">Name Here</h3>

                <p className="text-gray-600 leading-8 mt-6 italic">
                  "Our goal is to deliver dependable electrical solutions built
                  on quality, safety and trust."
                </p>

                <div className="flex gap-4 mt-8">
                  <button className="w-12 h-12 rounded-full bg-orange-100 hover:bg-orange-500 text-orange-500 hover:text-white transition flex items-center justify-center">
                    <FaLinkedin />
                  </button>

                  <button className="w-12 h-12 rounded-full bg-orange-100 hover:bg-orange-500 text-orange-500 hover:text-white transition flex items-center justify-center">
                    <FaEnvelope />
                  </button>
                </div>
              </div>
            </div>

            {/* Assistant General Manager */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group">
              <div className="overflow-hidden">
                <img
                  src={electrician}
                  alt="Assistant General Manager"
                  className="w-36 h-36 rounded-full object-cover border-4 border-orange-500 shadow-lg"
                />
              </div>

              <div className="p-8">
                <span className="text-orange-500 font-semibold uppercase tracking-wider">
                  Assistant General Manager
                </span>

                <h3 className="text-3xl font-bold mt-3">Name Here</h3>

                <p className="text-gray-600 leading-8 mt-6 italic">
                  "Every successful project begins with planning, teamwork and
                  attention to every detail."
                </p>

                <div className="flex gap-4 mt-8">
                  <button className="w-12 h-12 rounded-full bg-orange-100 hover:bg-orange-500 text-orange-500 hover:text-white transition flex items-center justify-center">
                    <FaLinkedin />
                  </button>

                  <button className="w-12 h-12 rounded-full bg-orange-100 hover:bg-orange-500 text-orange-500 hover:text-white transition flex items-center justify-center">
                    <FaEnvelope />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ELECTRICIANS ================= */}

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-4">
              Our Experts
            </p>

            <h2 className="text-5xl font-bold text-slate-900">
              Meet Our Electricians
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: electrician,
                name: "Electrician 1",
                specialty: "Residential Installations",
              },
              {
                image: electrician,
                name: "Electrician 2",
                specialty: "Commercial Systems",
              },
              {
                image: electrician,
                name: "Electrician 3",
                specialty: "Industrial Maintenance",
              },
              {
                image: electrician,
                name: "Electrician 4",
                specialty: "Lighting Solutions",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-500"
              >
                <div className="flex justify-center pt-8">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-36 h-36 rounded-full object-cover border-4 border-orange-500 shadow-lg"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{person.name}</h3>

                  <p className="text-orange-500 mt-2">Electrician</p>

                  <div className="flex justify-center items-center gap-2 mt-5 text-gray-600">
                    <FaBolt className="text-orange-500" />

                    <span>{person.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== OUR PROCESS ===================== */}

<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">

      <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-4">
        Our Process
      </p>

      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
        From Your First Call to Project Completion
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-8">
        We follow a simple and transparent process that ensures every project
        is completed safely, efficiently and to the highest professional
        standards.
      </p>

    </div>

    {/* Process Timeline */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Step 1 */}
      <div className="relative bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <div className="w-16 h-16 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl mb-6">
          <FaPhoneAlt />
        </div>

        <span className="absolute top-5 right-5 text-5xl font-bold text-gray-100">
          01
        </span>

        <h3 className="text-2xl font-bold mb-4">
          Consultation
        </h3>

        <p className="text-gray-600 leading-7">
          Tell us about your electrical needs and we'll recommend the best
          solution for your project.
        </p>

      </div>

      {/* Step 2 */}
      <div className="relative bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <div className="w-16 h-16 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl mb-6">
          <FaClipboardList />
        </div>

        <span className="absolute top-5 right-5 text-5xl font-bold text-gray-100">
          02
        </span>

        <h3 className="text-2xl font-bold mb-4">
          Site Inspection
        </h3>

        <p className="text-gray-600 leading-7">
          We inspect the site, assess the requirements and prepare a detailed
          plan before work begins.
        </p>

      </div>

      {/* Step 3 */}
      <div className="relative bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <div className="w-16 h-16 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl mb-6">
          <FaTools />
        </div>

        <span className="absolute top-5 right-5 text-5xl font-bold text-gray-100">
          03
        </span>

        <h3 className="text-2xl font-bold mb-4">
          Installation
        </h3>

        <p className="text-gray-600 leading-7">
          Our certified electricians complete the work using quality materials
          while following strict safety standards.
        </p>

      </div>

      {/* Step 4 */}
      <div className="relative bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <div className="w-16 h-16 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl mb-6">
          <FaCheckCircle />
        </div>

        <span className="absolute top-5 right-5 text-5xl font-bold text-gray-100">
          04
        </span>

        <h3 className="text-2xl font-bold mb-4">
          Testing & Support
        </h3>

        <p className="text-gray-600 leading-7">
          Before handover, we thoroughly test every installation and remain
          available for maintenance and ongoing support.
        </p>

      </div>

    </div>

  </div>
</section>

    <CTA/>
    </>
  );
}


export default About;
