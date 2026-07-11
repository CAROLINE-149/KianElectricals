import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="max-w-2xl">
          <p className="text-orange-400 uppercase tracking-[0.3rem] font-semibold mb-4">
            Professional Electrical Services
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight">
            Powering Homes,
            Businesses &
            Industries
          </h1>

          <p className="text-gray-300 text-lg mt-6 leading-8">
            Delivering safe, efficient and affordable electrical solutions across residential, commercial and industrial projects throughout Kenya.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-md text-white font-semibold transition duration-300">
              Get Free Quote
            </button>

            <button className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-md text-white font-semibold transition duration-300">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;