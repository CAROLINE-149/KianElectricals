import React from "react";
import logo from "../assets/logo/kianlogo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <img
              src={logo}
              alt="Kian Electrical"
              className="w-56 mb-6"
            />

            <p className="leading-8 text-gray-400">
              Kian Electrical Services provides professional electrical
              installation, maintenance and repair solutions for
              residential, commercial and industrial clients across Kenya.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                "Home",
                "About",
                "Services",
                "Projects",
                "Gallery",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-orange-500 transition"
                  >
                    <FaArrowRight className="text-orange-500 text-sm" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">

              {[
                "Electrical Installation",
                "Residential Wiring",
                "Commercial Projects",
                "Electrical Maintenance",
                "Emergency Repairs",
                "Lighting Installation",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-orange-500 transition"
                  >
                    <FaArrowRight className="text-orange-500 text-sm" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-orange-500 mt-1" />
                <span>+254 713 241 117</span>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-orange-500 mt-1" />
                <span>kianelecservices@gmail.com</span>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <span>Nairobi, Kenya</span>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-orange-500 mt-1" />
                <span>Mon - Sat : 8:00 AM - 6:00 PM</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Divider */}

      <div className="border-t border-gray-700"></div>

      {/* Bottom Footer */}

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Kian Electrical Services. All Rights Reserved.
        </p>

        {/* Social Icons */}

        <div className="flex gap-4">

          {[
            FaFacebookF,
            FaInstagram,
            FaLinkedinIn,
          ].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition duration-300"
            >
              <Icon className="text-white" />
            </a>
          ))}

        </div>

      </div>

    </footer>
  );
};

export default Footer;