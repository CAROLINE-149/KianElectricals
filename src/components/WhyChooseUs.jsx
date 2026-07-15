import {
  FaBolt,
  FaShieldAlt,
  FaClock,
  FaAward,
} from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-orange-500 uppercase tracking-[0.3em] font-semibold mb-4">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted Electrical Experts
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto leading-8">
            We combine technical expertise, quality workmanship and exceptional
            customer service to deliver reliable electrical solutions for
            residential, commercial and industrial projects.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 group">

            <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center mb-6 transition group-hover:bg-white">
              <FaBolt className="text-4xl text-orange-500" />
            </div>

            <h3 className="text-white text-2xl font-bold mb-4">
              Certified Experts
            </h3>

            <p className="text-gray-300 leading-7 group-hover:text-white">
              Our licensed electricians deliver professional workmanship,
              ensuring every project meets the highest safety standards.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 group">

            <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center mb-6 transition group-hover:bg-white">
              <FaShieldAlt className="text-4xl text-orange-500" />
            </div>

            <h3 className="text-white text-2xl font-bold mb-4">
              Safety First
            </h3>

            <p className="text-gray-300 leading-7 group-hover:text-white">
              We follow strict electrical safety practices to protect your
              family, employees and property during every installation.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 group">

            <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center mb-6 transition group-hover:bg-white">
              <FaClock className="text-4xl text-orange-500" />
            </div>

            <h3 className="text-white text-2xl font-bold mb-4">
              Fast Response
            </h3>

            <p className="text-gray-300 leading-7 group-hover:text-white">
              From emergency repairs to scheduled maintenance, our team responds
              quickly to keep your power running safely.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 group">

            <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center mb-6 transition group-hover:bg-white">
              <FaAward className="text-4xl text-orange-500" />
            </div>

            <h3 className="text-white text-2xl font-bold mb-4">
              Quality Guaranteed
            </h3>

            <p className="text-gray-300 leading-7 group-hover:text-white">
              We use trusted materials and proven techniques to deliver durable,
              long-lasting electrical solutions you can rely on.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;