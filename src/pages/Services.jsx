import CTA from "../components/CTA";

 import serviceHero from "../assets/images/ServiceHero.jpeg";
import solarImage from "../assets/images/solar.jpg";
import electricalImage from "../assets/images/electrical.jpeg";
import cctvImage from "../assets/images/CCTV.jpg";
import accessImage from "../assets/images/access-control.jpg";
import airconImage from "../assets/images/air-conditioning.jpg";

import { FaCheckCircle } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Solar Energy Solutions",
      image: solarImage,
      description:
        "We design, install and maintain reliable solar energy systems for homes, businesses and institutions. Whether you need backup power or complete energy independence, we provide tailored solar solutions built for long-term performance.",

      features: [
        "Home Backup Solar Systems",
        "Hybrid Solar Systems",
        "Off-Grid Solar Solutions",
        "Solar Maintenance & Upgrades",
      ],
    },

    {
      title: "Electrical Power Systems",
      image: electricalImage,
      description:
        "From residential wiring to industrial electrical installations, our experienced electricians deliver safe, efficient and code-compliant electrical systems that keep your property powered.",

      features: [
        "Domestic Electrical Installation",
        "Industrial Power Systems",
        "Power Distribution",
        "Electrical Maintenance & Repairs",
      ],
    },

    {
      title: "Security & Surveillance",
      image: cctvImage,
      description:
        "Protect your home and business with modern surveillance and communication systems installed by our certified technicians.",

      features: [
        "CCTV Installation",
        "Intercom Systems",
        "Alarm Systems",
        "System Maintenance",
      ],
    },

    {
      title: "Access Control & Electric Fencing",
      image: accessImage,
      description:
        "Enhance the security of your property with intelligent access control systems, electric fencing and automated security solutions.",

      features: [
        "Electric Fence Installation",
        "Access Control Systems",
        "Gate Automation",
        "Security Maintenance",
      ],
    },

    {
      title: "Air Conditioning & Ventilation",
      image: airconImage,
      description:
        "We install and maintain air conditioning systems and extractor fans to keep residential, commercial and industrial spaces comfortable and energy efficient.",

      features: [
        "Air Conditioner Installation",
        "Extractor Fan Installation",
        "Commercial Ventilation",
        "Preventive Maintenance",
      ],
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}

     

<section
  className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${serviceHero})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-6 max-w-4xl">
    <p className="uppercase tracking-[6px] text-orange-400 font-semibold mb-4">
      Our Services
    </p>

    <h1 className="text-5xl md:text-6xl font-bold mb-6">
      Professional Electrical & Security Solutions
    </h1>

    <p className="text-lg md:text-xl leading-8 text-gray-200">
      From residential electrical installations to industrial power systems,
      solar energy and security solutions, we deliver reliable services
      tailored to your needs.
    </p>
  </div>
</section>
      {/* ================= INTRO ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Complete Electrical Solutions Under One Roof
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            Whether you're building a new home, upgrading your business,
            improving security or investing in renewable energy,
            our experienced team provides installation,
            maintenance, repairs and long-term support to ensure
            your systems operate safely and efficiently.
          </p>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="py-10 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          {services.map((service, index) => (

            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-16 items-center mb-28 ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >

              {/* Image */}

              <div>

                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
                />

              </div>

              {/* Content */}

              <div>

                <p className="uppercase tracking-[5px] text-orange-500 font-semibold mb-4">
                  Service {index + 1}
                </p>

                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  {service.title}
                </h2>

                <p className="text-gray-600 leading-8 mb-8">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">

                  {service.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <FaCheckCircle className="text-orange-500" />

                      <span className="text-gray-700">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl transition duration-300">
                  Request This Service
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= CTA ================= */}

      <CTA
        title="Need Professional Electrical Services?"
        description="Whether you need solar installation, electrical wiring, security systems or air conditioning services, Kian Electrical is ready to deliver safe, reliable and high-quality solutions."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </>
  );
}

export default Services;