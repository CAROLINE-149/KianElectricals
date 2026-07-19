import { Link } from "react-router-dom";

function CTA({
  title = "Need Professional Electrical Services?",
  description = "Whether you need electrical installations, maintenance, or emergency repairs, our experienced team is ready to help. Get in touch today for reliable and professional electrical solutions.",
  buttonText = "Get a Free Quote",
  buttonLink = "/contact",
}) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-orange-50 border border-orange-100 rounded-[40px] shadow-xl px-8 md:px-16 py-16 text-center">

          <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-4">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {title}
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mb-10">
            {description}
          </p>

          <Link
            to={buttonLink}
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
          >
            {buttonText}
          </Link>

        </div>

      </div>
    </section>
  );
}

export default CTA;