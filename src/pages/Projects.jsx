import { Link } from "react-router-dom";
import { useState } from "react";
import CTA from "../components/CTA";
import heroImage from "../assets/images/Projects-hero.jpeg";

import solar1 from "../assets/images/solar1.jpg";
import solar2 from "../assets/images/solar2.jpg";
import electrical1 from "../assets/images/electrical1.jpg";
import electrical2 from "../assets/images/electrical2.jpg";
import cctv from "../assets/images/cctv.jpg";
import fence from "../assets/images/fence.jpg";
import aircon from "../assets/images/aircon.jpg";
import extractor from "../assets/images/extractor.jpg";

const projects = [
  {
    image: solar1,
    category: "Solar",
    title: "10kW Hybrid Solar Installation",
    location: "Nairobi, Kenya",
    description:
      "Complete hybrid solar system installation providing uninterrupted backup power for a residential property.",
  },

  {
    image: solar2,
    category: "Solar",
    title: "Off-Grid Solar System",
    location: "Kisumu, Kenya",
    description:
      "Designed and installed a fully off-grid solar solution for a rural home.",
  },

  {
    image: electrical1,
    category: "Electrical",
    title: "Domestic Power Installation",
    location: "Nairobi, Kenya",
    description:
      "Complete electrical wiring, sockets, lighting and distribution board installation.",
  },

  {
    image: electrical2,
    category: "Electrical",
    title: "Industrial Electrical System",
    location: "Thika, Kenya",
    description:
      "Power installation and maintenance for an industrial manufacturing facility.",
  },

  {
    image: cctv,
    category: "Security",
    title: "CCTV & Alarm Installation",
    location: "Nakuru, Kenya",
    description:
      "Installed HD surveillance cameras with remote monitoring and alarm integration.",
  },

  {
    image: fence,
    category: "Security",
    title: "Electric Fence Installation",
    location: "Kiambu, Kenya",
    description:
      "High-security electric fencing and access control system for a residential estate.",
  },

  {
    image: aircon,
    category: "Air Conditioning",
    title: "Commercial Air Conditioning",
    location: "Mombasa, Kenya",
    description:
      "Installation of energy-efficient air conditioning systems for office spaces.",
  },

  {
    image: extractor,
    category: "Air Conditioning",
    title: "Kitchen Extractor Installation",
    location: "Nairobi, Kenya",
    description:
      "Extractor fan installation improving ventilation for a commercial kitchen.",
  },
];

const categories = [
  "All",
  "Solar",
  "Electrical",
  "Security",
  "Air Conditioning",
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section
        className="relative h-[75vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-5">
            Our Projects
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
            Projects That Power Homes,
            <br />
            Businesses & Industries
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-9 max-w-3xl mx-auto">
            Explore some of the electrical, solar, security and air conditioning
            projects we've successfully completed across Kenya, delivering
            quality workmanship and dependable solutions.
          </p>

          <div className="mt-12 flex justify-center gap-5 flex-wrap">
            <Link
              to="/services"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              View Services
            </Link>

            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold mb-3">
            Featured Projects
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mb-8">
            Delivering Excellence Across Every Project
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            Every installation reflects our commitment to safety, quality
            workmanship and customer satisfaction. From residential homes to
            commercial facilities, we deliver electrical solutions built to
            last.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
              >
                {/* Image */}

                <div className="overflow-hidden h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}

                <div className="p-6">
                  <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full mb-5">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-orange-500 font-medium mb-4">
                    📍 {project.location}
                  </p>

                  <p className="text-gray-600 leading-7 mb-6">
                    {project.description}
                  </p>

                  <button className="font-semibold text-orange-500 hover:text-orange-600 transition">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export default Projects;
