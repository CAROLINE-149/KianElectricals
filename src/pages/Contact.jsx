import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import heroImage from "../assets/images/contact-hero.jpg";
import contactImage from "../assets/images/contact-form.jpeg";

function Contact() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative h-[75vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/75"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl text-center px-6">
          <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-5">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
            Let's Power Your
            <br />
            Next Project
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-9 max-w-3xl mx-auto">
            Whether you need electrical installations, solar solutions, security
            systems or maintenance services, our experienced team is ready to
            help.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/services"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              View Services
            </Link>

            <a
              href="tel:+254700000000"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-orange-500 font-semibold mb-3">
              Get In Touch
            </p>

            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              We'd Love To Hear From You
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              Have a question or need a quotation? Reach out to our team using
              any of the contact methods below or send us a message.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location */}

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📍</span>
              </div>

              <h3 className="text-2xl font-bold mb-3">Visit Us</h3>

              <p className="text-gray-600">Nairobi, Kenya</p>
            </div>

            {/* Phone */}

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📞</span>
              </div>

              <h3 className="text-2xl font-bold mb-3">Call Us</h3>

              <p className="text-gray-600">+254 XXX XXX XXX</p>
            </div>

            {/* Email */}

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✉️</span>
              </div>

              <h3 className="text-2xl font-bold mb-3">Email Us</h3>

              <p className="text-gray-600 break-all">
                info@kianelectrical.co.ke
              </p>
            </div>

            {/* Hours */}

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🕒</span>
              </div>

              <h3 className="text-2xl font-bold mb-3">Working Hours</h3>

              <p className="text-gray-600">
                Mon – Sat
                <br />
                8:00 AM – 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <img
              src={contactImage}
              alt="Kian Electrical Team"
              className="rounded-3xl shadow-xl w-full h-[650px] object-cover"
            />
          </div>

          {/* Form */}
          <div>
            <p className="uppercase tracking-[5px] text-orange-500 font-semibold mb-3">
              Send Us A Message
            </p>

            <h2 className="text-5xl font-bold text-slate-900 mb-8">
              Request a Free Quote
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <select className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Select a Service</option>
                <option>Solar Installation</option>
                <option>Electrical Installation</option>
                <option>CCTV & Alarm Systems</option>
                <option>Electric Fence</option>
                <option>Air Conditioning</option>
                <option>General Inquiry</option>
              </select>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
              Business Hours
            </p>

            <h2 className="text-5xl font-bold mt-4">We're Available</h2>
          </div>

          <div className="bg-gray-50 rounded-3xl shadow-lg p-10">
            {[
              ["Monday", "8:00 AM - 5:00 PM"],
              ["Tuesday", "8:00 AM - 5:00 PM"],
              ["Wednesday", "8:00 AM - 5:00 PM"],
              ["Thursday", "8:00 AM - 5:00 PM"],
              ["Friday", "8:00 AM - 5:00 PM"],
              ["Saturday", "8:00 AM - 2:00 PM"],
              ["Sunday", "Closed"],
            ].map(([day, time]) => (
              <div
                key={day}
                className="flex justify-between py-4 border-b last:border-none"
              >
                <span className="font-semibold">{day}</span>

                <span className="text-gray-600">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
              Find Us
            </p>

            <h2 className="text-5xl font-bold mt-4">Visit Our Office</h2>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb="
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
              FAQ
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do you provide emergency electrical services?",
                answer:
                  "Yes. We provide emergency electrical support for residential and commercial clients.",
              },
              {
                question: "Do you install solar systems?",
                answer:
                  "Yes. We install home backup, hybrid and off-grid solar systems.",
              },
              {
                question: "Do you offer maintenance services?",
                answer:
                  "Yes. We provide maintenance and repair services for all our installations.",
              },
              {
                question: "Which areas do you serve?",
                answer:
                  "We serve residential, commercial and industrial clients across Kenya.",
              },
            ].map((faq) => (
              <div
                key={faq.question}
                className="bg-gray-50 rounded-2xl p-8 shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-3">{faq.question}</h3>

                <p className="text-gray-600 leading-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export default Contact;
