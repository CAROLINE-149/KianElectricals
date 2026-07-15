import {
  FaBolt,
  FaHome,
  FaBuilding,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

function Services() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4 rounded-full"></div>

          <p className="text-orange-500 uppercase tracking-[0.3em] font-semibold">
            WHAT WE DO
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Our Electrical Services
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-8">
            We provide professional electrical services for homes,
            businesses and industries with a strong focus on safety,
            reliability and quality workmanship.
          </p>

        </div>

        {/* Service Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}

          <div className="group bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-transparent hover:border-orange-500 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <div className="p-8 text-center">

              <div className="w-24 h-24 rounded-full bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center mx-auto mb-6 transition-all duration-300">

                <FaBolt className="text-5xl text-orange-500 group-hover:text-white transition-all duration-300" />

              </div>

              <h3 className="text-3xl font-bold mb-4">
                Installation
              </h3>

              <p className="text-gray-600 leading-8 mb-8">
                Safe and efficient electrical installations for
                residential, commercial and industrial buildings.
              </p>

              <button className="font-semibold text-orange-500 hover:text-orange-600 flex items-center justify-center gap-2 mx-auto transition">
                Learn More
                <FaArrowRight />
              </button>

            </div>

          </div>

          {/* Card 2 */}

          <div className="group bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-transparent hover:border-orange-500 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <div className="p-8 text-center">

              <div className="w-24 h-24 rounded-full bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center mx-auto mb-6 transition-all duration-300">

                <FaHome className="text-5xl text-orange-500 group-hover:text-white transition-all duration-300" />

              </div>

              <h3 className="text-3xl font-bold mb-4">
                Residential
              </h3>

              <p className="text-gray-600 leading-8 mb-8">
                Complete home wiring, lighting installation,
                repairs and electrical upgrades.
              </p>

              <button className="font-semibold text-orange-500 hover:text-orange-600 flex items-center justify-center gap-2 mx-auto transition">
                Learn More
                <FaArrowRight />
              </button>

            </div>

          </div>

          {/* Card 3 */}

          <div className="group bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-transparent hover:border-orange-500 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <div className="p-8 text-center">

              <div className="w-24 h-24 rounded-full bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center mx-auto mb-6 transition-all duration-300">

                <FaBuilding className="text-5xl text-orange-500 group-hover:text-white transition-all duration-300" />

              </div>

              <h3 className="text-3xl font-bold mb-4">
                Commercial
              </h3>

              <p className="text-gray-600 leading-8 mb-8">
                Electrical systems for offices, retail shops,
                schools and commercial buildings.
              </p>

              <button className="font-semibold text-orange-500 hover:text-orange-600 flex items-center justify-center gap-2 mx-auto transition">
                Learn More
                <FaArrowRight />
              </button>

            </div>

          </div>

          {/* Card 4 */}

          <div className="group bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-transparent hover:border-orange-500 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <div className="p-8 text-center">

              <div className="w-24 h-24 rounded-full bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center mx-auto mb-6 transition-all duration-300">

                <FaTools className="text-5xl text-orange-500 group-hover:text-white transition-all duration-300" />

              </div>

              <h3 className="text-3xl font-bold mb-4">
                Maintenance
              </h3>

              <p className="text-gray-600 leading-8 mb-8">
                Preventive maintenance, troubleshooting and
                emergency electrical repairs.
              </p>

              <button className="font-semibold text-orange-500 hover:text-orange-600 flex items-center justify-center gap-2 mx-auto transition">
                Learn More
                <FaArrowRight />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;