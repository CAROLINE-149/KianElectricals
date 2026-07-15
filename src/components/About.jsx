import aboutImage from "../assets/images/kian-about.png";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="relative flex justify-center items-center">
            {/* Orange Glow */}
            <div className="absolute w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

            {/* Lightbulb Image */}
            <img
              src={aboutImage}
              alt="Kian Electrical Team"
              className="relative z-10 w-full max-w-[340px]"
            />

            {/* 24/7 Badge */}
            <div className="absolute bottom-6 -left-6 bg-orange-500 text-white px-6 py-4 rounded-xl shadow-2xl z-20">
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-sm uppercase">Emergency Support</p>
            </div>
          </div>

          {/* Right Side */}

          <div>
            <p className="text-orange-500 uppercase tracking-[0.3em] font-semibold mb-3">
              ABOUT US
            </p>

            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Delivering Safe & Reliable Electrical Solutions
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Kian Electrical Services provides professional electrical
              installation, maintenance and repair services for homes,
              businesses and industries across Kenya. Our team is committed to
              safety, quality workmanship and customer satisfaction.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500" />
                Licensed Electricians
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500" />
                Affordable Pricing
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500" />
                Emergency Repairs
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500" />
                Commercial Projects
              </div>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
