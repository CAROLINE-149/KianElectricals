import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Logo from "./Logo";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Gallery",
    "Contact",
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium">
          {links.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-orange-500 transition"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Quote Button */}
        <button className="hidden md:block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
          Get Quote
        </button>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >
              {link}
            </a>
          ))}

          <button className="m-6 bg-orange-500 text-white px-6 py-3 rounded-lg w-[calc(100%-3rem)]">
            Get Quote
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;